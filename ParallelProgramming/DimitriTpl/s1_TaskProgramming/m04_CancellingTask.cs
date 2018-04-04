using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DimitriTpl.s1_TaskProgramming
{
	class m04_CancellingTask
	{
		public void Run()
		{
			//Cancel1();
			//Cancel2();
			CompositeCancellationToken();
		}

		private void Cancel1()
		{
			var cts = new CancellationTokenSource();
			var token = cts.Token;

			var t = new Task(() =>
			{
				int i = 0;
				while (true)
				{
					if (token.IsCancellationRequested)
					{
						break;
					}
					Console.WriteLine($"{i++}\t");
				}
			}, token);

			t.Start();

			Console.ReadKey();
			cts.Cancel();

			Console.WriteLine("Task cancelled");
		}

		private void Cancel2()
		{
			var cts = new CancellationTokenSource();
			var token = cts.Token;

			token.Register(() => { Console.WriteLine("Cancellation has been requested"); });

			var t = new Task(() =>
			{
				int i = 0;
				while (true)
				{
					//if (token.IsCancellationRequested)
					//{
					//	throw new TaskCanceledException();
					//}
					token.ThrowIfCancellationRequested();
					Console.WriteLine($"{i++}\t");
				}
			}, token);

			t.Start();

			Task.Factory.StartNew(() =>
			{
				token.WaitHandle.WaitOne();
				Console.WriteLine("Wait handle released, cancelation was requested");
			});

			Console.ReadKey();
			cts.Cancel();

			Console.WriteLine("Task cancelled");
		}

		private void CompositeCancellationToken()
		{
			var planned = new CancellationTokenSource();
			var preventative = new CancellationTokenSource();
			var emergency = new CancellationTokenSource();

			var paranoid = CancellationTokenSource.CreateLinkedTokenSource(
				planned.Token, preventative.Token, emergency.Token);

			Task.Factory.StartNew(() =>
			{
				int i = 0;
				while (true)
				{
					paranoid.Token.ThrowIfCancellationRequested();
					Console.WriteLine($"{i++}\t");
					Thread.Sleep(1000);
				}
			}, paranoid.Token);

			Console.ReadKey();
			emergency.Cancel();

			Console.WriteLine("Press any key to quit...");
			Console.ReadKey();
		}
	}
}
