---
title: "Print Fibonacci Series By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "go",
    "haskell",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "apurvagandhi",
    "roberanegussie",
    "anandfresh",
    "leslieyip02",
    "joao-vitor-souza",
    "Badboy-16",
    "vedha-vikash-pixel",
    "UsmanFani",
    "jyotik09",
    "grraghav120",
    "PraaneshSelvaraj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1489
description: "Write a program to print fibonacci series by recursion."
---

## Table of contents

## Write a program to print fibonacci series by recursion

```
Input  : 5
Output : 0 1 1 2 3
```

---

### C

```c
// Write a C program to print fibonacci series by recursion

#include <stdio.h>

const int num_one = 0;
const int num_two = 1;

int main() {
    int input;
    printf("Input  : ");
    scanf("%d", &input);
    switch (input) {
        case 1:
            printf("Output : 0");
            break;
        case 2:
            printf("Output : 0 1");
            break;
        default: /* for more than 2 numbers */
            int two_num_ago = num_one;
            int one_num_ago = num_two;
            int next_num = num_one + num_two;

            /* print first two numbers first */
            printf("Output : 0 1 ");

            /* iteration starts from third number */
            for (int i = 0; i < input - 2; i++) {
                printf("%d ", next_num);

                /* finding next number for next iteration */
                two_num_ago = one_num_ago;
                one_num_ago = next_num;
                next_num = one_num_ago + two_num_ago;

            }
    }
    printf("\n");
    return 0;
}
```

### C#

```csharp
// Write a C# program to print fibonacci series by recursion

using System;

public class FibonacciSeries {
    public static int fibonacciSeries(int n)
    {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    }
    public static void Main()
    {
        Console.Write("Input: ");
        int n = Convert.ToInt32(Console.ReadLine());
        Console.Write("Output: ");
        for (int i = 0; i < n; i++)
        {
            Console.Write("{0} ", fibonacciSeries(i));
        }

    }




}
```

### C++

```cpp
// Write a C++ program to print fibonacci series by recursion

//PrintFibonacciSeriesByRecursion.cpp
#include <iostream>

using namespace std;

void PrintFibonacciSeriesByRecursion(int n,int a,int b){
    int c;
    if(n>=1){
        c=a+b;
        a=b;
        b=c;
        cout<<c<<" ";
        PrintFibonacciSeriesByRecursion(n-1,a,b);
    }
}

int main()
{
    int n;cin>>n;
    cout<<0<<" "<<1<<" ";
    PrintFibonacciSeriesByRecursion(n-2,0,1);
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to print fibonacci series by recursion

package main

import (
	"fmt"
)

func fib(n int) int {
	if n == 0 {
		return 0
	} else if n == 1 {
		return 1
	} else {
		return fib(n-1) + fib(n-2)
	}
}

func main() {
	n := 5
	for i := 0; i < n; i++ {
		fmt.Print(fib(i), " ")
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to print fibonacci series by recursion

fib :: Integer -> Integer
fib 0 = 0
fib 1 = 1
fib x = fib (x - 1) + fib (x - 2)

main = do
    let n = 5
    let s = [fib x | x <- [0 .. n - 1]]

    putStrLn . unwords . map show $ s
```

### Java

```java
// Write a Java program to print fibonacci series by recursion

public class print_fibonacci_series_by_recursion{

    public static void main(String args[]){

        int n = 5;
        for(int i=0;i<n;i++){                                     //prints the numbers
            System.out.println(fibonacci(i) + " ");               // 0 1 1 2 3
        }

    }

    public static int fibonacci(int i){              //recursive function to get fibonacci numbers
        if(i == 0){
            return 0;
        }
        if(i == 1){
            return 1;
        }
        return fibonacci(i - 1) + fibonacci(i - 2);
    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to print fibonacci series by recursion

function getFiboNumber(n) {
  if (n <= 1) {
    return n;
  } else {
    return getFiboNumber(n - 1) + getFiboNumber(n - 2);
  }
}

let input = 5;
let output = "";
for (let i = 0; i < input; i++) {
  output = output + " " + getFiboNumber(i);
}
console.log(output);
```

### Kotlin

```kotlin
// Write a Kotlin program to print fibonacci series by recursion

fun main() {
    print("Enter No. to Print Fibonacci: ")
    val num = readln().toInt()
    print("Fibonacci Series of $num is: ${fibonacciRecursion(num).asList()}")
}

private fun fibonacciRecursion(num: Int): IntArray {
    val arr = IntArray(num)
    fib(num, arr)
    return arr
}

private fun fib(num: Int, arr: IntArray): Int {
    if (num <= 1) {
        arr[0] = 0
        return 0
    }
    if (num == 2) {
        arr[1] = 1
        return 1
    }
    if (arr[num - 1] != 0) return arr[num - 1]
    arr[num - 1] = fib(num - 1, arr) + fib(num - 2, arr)
    return arr[num - 1]
}
```

### PHP

```php
// Write a PHP program to print fibonacci series by recursion

<?php

function fibonacciSeries($num){

    if ($num == 0)
        return 0;
    else if ($num == 1)
        return 1;
    else
        return fibonacciSeries($num-1) + fibonacciSeries($num-2);
}

$num = 5;
for ($counter = 0; $counter < $num; $counter++){
    echo fibonacciSeries($counter),' ';
}

?>
```

### Python

```python
# Write a Python program to print fibonacci series by recursion

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


number = int(input())
for i in range(number):
    print(fibonacci(i), end=" ")
```

### Ruby

```ruby
# Write a Ruby program to print fibonacci series by recursion

def printFibonacci(a,b,term)
	if term > 0
		sum = a + b;
		print sum, " ";
		a = b;
		b = sum;
		printFibonacci(a, b, term-1);
	end
end

a=0;
b=1;

printFibonacci(a, b, 6);
```

### TypeScript

```typescript
// Write a TypeScript program to print fibonacci series by recursion

function getFiboNumber(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return getFiboNumber(n - 1) + getFiboNumber(n - 2);
  }
}

const input: number = 5;
let output: string = "";
for (let i = 0; i < input; i++) {
  output = output + " " + getFiboNumber(i);
}
console.log(output);
```
