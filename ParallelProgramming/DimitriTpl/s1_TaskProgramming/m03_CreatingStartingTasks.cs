using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DimitriTpl.s1_TaskProgramming
{

	class m03_CreatingStartingTasks
	{
		public void Run()
		{
			//Task.Factory.StartNew(() => Write('.'));

			//var t1 = new Task(() => Write('?'));
			//t1.Start();

			//var t2 = new Task(Write, "hello");
			//t2.Start();

			string text1 = "testing", text2 = "this";
			var task1 = new Task<int>(TextLength, text1);
			task1.Start();
			Task<int> task2 = Task.Factory.StartNew(TextLength, text2);

			Console.WriteLine($"Length of '{text1}' is {task1.Result}");
			Console.WriteLine($"Length of '{text2}' is {task2.Result}");

			Console.WriteLine("Press any key to quit...");
			Console.ReadKey();
		}

		public void Write(object o)
		{
			int i = 1000;
			while (i-- > 0)
			{
				Console.Write(o);
			}
		}

		public void Write(char c)
		{
			int i = 1000;
			while (i-- > 0)
			{
				Console.Write(c);
			}
		}

		public int TextLength(object o)
		{
			Console.WriteLine($"\n Task with id {Task.CurrentId} processing object {o}...");
			return o.ToString().Length;
		}
	}
}
