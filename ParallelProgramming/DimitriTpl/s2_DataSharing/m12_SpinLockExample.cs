using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DimitriTpl.s2_DataSharing
{
	public class BankAccount3
	{
		private int balance;

		public int Balance
		{
			get => balance;
			private set => balance = value;
		}

		public void Deposit(int amount)
		{
			balance += amount;
		}

		public void Withdraw(int amount)
		{
			balance -= amount;
		}
	}

	class m12_SpinLockExample
	{
		public void Run()
		{
			LockRecursion(5);
		}

		SpinLock sl = new SpinLock(true);

		private void Spinlock()
		{
			var tasks = new List<Task>();
			var ba = new BankAccount();

			SpinLock sl = new SpinLock();

			for (int i = 0; i < 10; i++)
			{
				tasks.Add(Task.Factory.StartNew(() =>
				{
					for (int j = 0; j < 1000; j++)
					{
						var lockTaken = false;
						try
						{
							sl.Enter(ref lockTaken);
							ba.Deposit(100);
						}
						finally
						{
							if (lockTaken) sl.Exit();
						}
					}
				}));

				tasks.Add(Task.Factory.StartNew(() =>
				{
					for (int j = 0; j < 1000; j++)
					{
						var lockTaken = false;
						try
						{
							sl.Enter(ref lockTaken);
							ba.Withdraw(100);
						}
						finally
						{
							if (lockTaken) sl.Exit();
						}
					}
				}));
			}

			Task.WaitAll(tasks.ToArray());

			Console.WriteLine($"Final balance is {ba.Balance}.");
		}

		private void LockRecursion(int x)
		{
			bool lockTaken = false;
			try
			{
				sl.Enter(ref lockTaken);
			}
			catch (LockRecursionException e)
			{
				Console.WriteLine("Exception: " + e);
			}
			finally
			{
				if (lockTaken)
				{
					Console.WriteLine($"Took lock, x = {x}");
					LockRecursion(x - 1);
					sl.Exit();
				}
				else
				{
					Console.WriteLine($"Failed to take a lock, x = {x}");
				}
			}

		}
	}
}
