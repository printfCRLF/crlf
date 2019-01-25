using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DimitriTpl.s1_TaskProgramming
{
	class m07_ExceptionHandling
	{
		public void Run()
		{
			try
			{
				Test();
			}
			catch (AggregateException ae)
			{
				foreach (var e in ae.InnerExceptions)
				{
					Console.WriteLine($"Handled elsewhere: {e.GetType()}");
				}
			}
		}

		public void Test()
		{
			var t = Task.Factory.StartNew(() => { throw new InvalidOperationException("Can't do this!"); });
			var t2 = Task.Factory.StartNew(() => { throw new AccessViolationException("Can't access this"); });

			try
			{
				Task.WaitAll(t, t2);
			}
			catch (AggregateException ae)
			{
				ae.Handle(e =>
				{
					if (e is InvalidOperationException)
					{
						Console.WriteLine("Invalid op!");
						return true;
					}

					return false;
				});
			}
		}
	}
}
