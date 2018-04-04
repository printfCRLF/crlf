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
			Cancel1();
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
					Console.WriteLine($"{i++}\t");
				}
			}, token);
			
			t.Start();

			Console.ReadKey();
			cts.Cancel();

			Console.WriteLine("Task cancelled");
		}
	}
}
