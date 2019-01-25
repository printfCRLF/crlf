using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DimitriTpl.s2_DataSharing
{
	class BankAccount4
	{
		private int balance;

		public int Balance
		{
			get => balance;
			private set => balance = value;
		}

		public void Deposit(int amount)
		{
			Interlocked.Add(ref balance, amount);
		}

		public void Withdraw(int amount)
		{
			Interlocked.Add(ref balance, -amount);
		}

		public void Transfer(BankAccount4 where, int amount)
		{
			Balance -= amount;
			where.Balance += amount;
		}
	}

	class m13_MutexExample
	{
		public void Run()
		{
			//MutexExample1();
			GlobalMutex();
		}

		private void MutexExample1()
		{
			var tasks = new List<Task>();
			var ba = new BankAccount4();
			var ba2 = new BankAccount4();
			Mutex mutex = new Mutex();
			Mutex mutex2 = new Mutex();

			for (int i = 0; i < 10; i++)
			{
				tasks.Add(Task.Factory.StartNew(() =>
				{
					for (int j = 0; j < 1000; j++)
					{
						bool haveLock = mutex.WaitOne();
						try
						{
							ba.Deposit(1);
						}
						finally
						{
							if (haveLock) mutex.ReleaseMutex();
						}
					}
				}));

				tasks.Add(Task.Factory.StartNew(() =>
				{
					for (int j = 0; j < 1000; j++)
					{
						bool haveLock = mutex2.WaitOne();
						try
						{
							ba2.Deposit(1);
						}
						finally
						{
							if (haveLock) mutex2.ReleaseMutex();
						}
					}
				}));

				tasks.Add(Task.Factory.StartNew(() =>
				{
					for (int j = 0; j < 1000; j++)
					{
						bool haveLock = Mutex.WaitAll(new[] { mutex, mutex2 });
						try
						{
							ba.Transfer(ba2, 1);
						}
						finally
						{
							if (haveLock)
							{
								mutex.ReleaseMutex();
								mutex2.ReleaseMutex();
							}
						}
					}
				}));
			}

			Task.WaitAll(tasks.ToArray());

			Console.WriteLine($"Final balance ba is {ba.Balance}.");
			Console.WriteLine($"Final balance ba2 is {ba2.Balance}.");
		}

		private void GlobalMutex()
		{
			const string appName = "MyApp";
			Mutex mutex;

			try
			{
				mutex = Mutex.OpenExisting(appName);
				Console.WriteLine($"Sorry, {appName} is already running");
			}
			catch (WaitHandleCannotBeOpenedException e)
			{
				Console.WriteLine("We can run the program just fine");
				mutex = new Mutex(false, appName);
			}

			Console.ReadKey();
			mutex.ReleaseMutex();
		}
	}
}
