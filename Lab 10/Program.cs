using System;

namespace Lab_10
{
    public class Recursion
    {
        public static int SumRecursive(int n, int m)
        {
            if (n > m)
                return 0;
            else
                return n + SumRecursive(n + 1, m);
        }

        public static int CountDivisionsBy2(int number)
        {
            int count = 0;
            while (number % 2 == 0 && number != 0)
            {
                number /= 2;
                count++;
            }
            return count;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Addition");
            Console.WriteLine("Enter number n:");
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter number m:");
            int m = int.Parse(Console.ReadLine());

            int sum = Recursion.SumRecursive(n, m);
            Console.WriteLine(sum);

            Console.WriteLine("Division");
            Console.WriteLine("Enter your number:");
            int number = int.Parse(Console.ReadLine());

            int count = Recursion.CountDivisionsBy2(number);
            Console.WriteLine("Total number of divisions: " + count);
        }
    }
}
