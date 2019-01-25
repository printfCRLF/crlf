using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DimitriTpl.s1_TaskProgramming
{
	class m06_WaitForTasks
	{
		public void Run()
		{
			Example1();
		}

		private void Example1()
		{
			var cts = new CancellationTokenSource();
			var token = cts.Token;
			var t = new Task(() =>
			{
				Console.WriteLine("I take 5 seconds");
				for (int i = 0; i < 5; i++)
				{
					token.ThrowIfCancellationRequested();
					Thread.Sleep(1000);
				}
				Console.WriteLine("I'm done");
			}, token);
			t.Start();

			Task t2 = Task.Factory.StartNew(() => Thread.Sleep(3000), token);

			//Console.ReadKey();
			//cts.Cancel();

			//Task.WaitAny(t, t2);
			Task.WaitAny(new[] { t, t2 }, 4000, token);

			Console.WriteLine($"Task t status is {t.Status}");
			Console.WriteLine($"Task t2 status is {t2.Status}");

			Console.WriteLine("Main program done");
			Console.ReadKey();

		}
	}
}
