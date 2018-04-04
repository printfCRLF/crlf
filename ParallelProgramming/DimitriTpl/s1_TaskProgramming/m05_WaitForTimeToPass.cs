using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DimitriTpl.s1_TaskProgramming
{
	class m05_WaitForTimeToPass
	{
		public void Run()
		{
			var cts = new CancellationTokenSource();
			var token = cts.Token;
			var t = new Task(() =>
			{
				Console.WriteLine("Press anykey to disarm; you have 5 seconds");
				bool cancelled = token.WaitHandle.WaitOne(5000);
				Console.WriteLine(cancelled ? "Bomb disarmed." : "BOOM!!!");
			}, token);
			t.Start();

			Console.ReadKey();
			cts.Cancel();

			Console.ReadKey();
			Console.WriteLine("Press any key to quit...");
			Console.ReadKey();
		}
	}
}
