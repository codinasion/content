---
title: "Print All Prime Numbers Between Two Numbers"
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
    "dart",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "apurvagandhi",
    "Tushar12222",
    "anandfresh",
    "jfinley6",
    "rksp25",
    "joao-vitor-souza",
    "greeshma-d",
    "grraghav120",
    "Ipankaj07",
    "Chirag8023",
    "jyotik09",
    "rahmat-dev",
    "KingFire25",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1286
description: "Write a program to print all prime numbers between two numbers."
---

## Table of contents

## Write a program to print all prime numbers between two numbers

```
Input  : 10 20
Output : 11 13 17 19
```

---

### C

```c
// Write a C program to print all prime numbers between two numbers

#include <stdio.h>

int main() {
   int low, high, i, flag;
   printf("Input : ");
   scanf("%d %d", &low, &high);
   printf("Output : ");

   // iteration until low is not equal to high
   while (low < high) {
      flag = 0;

      // ignore numbers less than 2
      if (low <= 1) {
         ++low;
         continue;
      }

      // if low is a non-prime number, flag will be 1
      for (i = 2; i <= low / 2; ++i) {

         if (low % i == 0) {
            flag = 1;
            break;
         }
      }

      if (flag == 0)
         printf("%d ", low);

      // to check prime for the next number
      // increase low by 1
      ++low;
   }

   return 0;
}
```

### C#

```csharp
// Write a C# program to print all prime numbers between two numbers

using System;
public class PrimeNUmber
{
    public static void Main()
{
    int num,i,ctr,stno,enno;
    Console.Write("Input starting number of range : ");
    stno = Convert.ToInt32(Console.ReadLine());
    Console.Write("Input ending number of range : ");
    enno = Convert.ToInt32(Console.ReadLine());
    Console.Write("The prime numbers between {0} and {1} are : \n",stno,enno);

    for(num = stno;num<=enno;num++)
       {
         ctr = 0;

         for(i=2;i<=num/2;i++)
            {
             if(num%i==0){
                 ctr++;
                 break;
             }
        }

         if(ctr==0 && num!= 1)
             Console.Write("{0} ",num);
    }
    Console.Write("\n");
  }
}
```

### C++

```cpp
// Write a C++ program to print all prime numbers between two numbers

#include<bits/stdc++.h>
using namespace std;
void SioErato(int n)
{
    int i;
    bool t[n + 1];
    fill(t, t + n + 1, true);
    t[0] = false, t[1] = false;
    for (i = 2; i * i <= n; i++)
    {
        for (int j = 2 * i; j <= n; j += i)
            if (j % i == 0)
                t[j] = false;
    }
    for (i = 1; i <= n; i++)
        if (t[i] == true)
            cout << i << " ";
}
int main()
{
    int a,b;
    cout<<"Enter range start and range end: ";
    cin>>a>>b;
    for (int i = a; i <= b; i++){
        if (i == 1 || i == 0)
            continue;
        int f = 1;
        for (int j = 2; j <= i / 2; ++j)
            if (i % j == 0){
                f = 0;
                break;
            }
        if (f == 1)
            cout << i << " ";
    }
    return 0;
}
```

### Dart

```dart
// Write a Dart program to print all prime numbers between two numbers

void primeNos(int start , int end){
  for(var i = start ; i <= end ; i++){
    int factors = 0;
    for(var j = 1 ; j <= i ; j++){
      if(i % j == 0){
        factors += 1;
      }
    }
    if(factors <= 2){
        print(i);
    }
  }
}

void main() {
  primeNos(10 , 20);
}
```

### Go

```go
// Write a Go program to print all prime numbers between two numbers

package main

import (
	"fmt"
)

func isPrime(n int) bool {
	// Check if the number is less than 2
	if n < 2 {
		return false
	}

	// Check if the number is 2
	if n == 2 {
		return true
	}

	// Check if the number is divisible by any number from 2 to n/2
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}

	// The number is prime if it passes all the above checks
	return true
}

func main() {
	// Get the input numbers
	start, end := 10, 20

	// Iterate over the numbers from start to end
	for i := start; i <= end; i++ {
		// Check if the number is prime
		if isPrime(i) {
			// Print the number
			fmt.Println(i)
		}
	}
}
```

### Java

```java
// Write a Java program to print all prime numbers between two numbers

import java.util.Scanner;

class PrintAllPrimeNumbersBetweenTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int firstNumber = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int secondNumber = scanner.nextInt();

        System.out.println("Prime numbers between " + firstNumber + " and " + secondNumber + " are: ");
        for (int i = firstNumber; i <= secondNumber; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }

    private static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print all prime numbers between two numbers

function primeNumbersBetweenTwoNumbers(startNum, endNum) {
  console.log(`Prime number between ${startNum} and ${endNum}`);
  for (let i = startNum; i <= endNum; i++) {
    let isNumDivisible = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isNumDivisible = true;
        break;
      }
    }
    if (i > 1 && !isNumDivisible) {
      console.log(i);
    }
  }
}

primeNumbersBetweenTwoNumbers(2, 10);
```

### Kotlin

```kotlin
// Write a Kotlin program to print all prime numbers between two numbers

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Prime number between $input are : " + PrintAllPrimeNumbersBetweenTwoNumbers(input!!.split(" ")))

}

private fun PrintAllPrimeNumbersBetweenTwoNumbers(nums: List<String>): String {
    var low = nums.get(0).toInt()
    val high = nums.get(1).toInt()
    val buffer = StringBuffer()

    while (low < high) {
        if (checkPrimeNumber(low))
            buffer.append(low.toString() + " ")
        ++low
    }

    return buffer.toString()
}

fun checkPrimeNumber(num: Int): Boolean {
    var flag = true

    for (i in 2..num / 2) {

        if (num % i == 0) {
            flag = false
            break
        }
    }

    return flag
}
```

### PHP

```php
// Write a PHP program to print all prime numbers between two numbers

<?php

function print_all_prime_numbers_between_two_numbers($n1, $n2)
{
	$primeNumbers = [];
	while ($n1 < $n2) {
		$count = 0;
		for ($i = 2; $i <= $n1; $i++) {
			if (($n1 % $i) == 0) {
				$count++;
			}
		}
		if ($count == 1) {
			$primeNumbers[] = $n1;
		}
		$n1++;
	}
	return implode(' ', $primeNumbers);
}

echo print_all_prime_numbers_between_two_numbers(10, 20);
```

### Python

```python
# Write a Python program to print all prime numbers between two numbers

start = int(input())
stop = int(input())
for val in range(start, stop):
    if val > 1:
        for i in range(2, val):
            if (val % i) == 0:
                break
        else:
            print(val, end=" ")
```

### Ruby

```ruby
# Write a Ruby program to print all prime numbers between two numbers

require 'prime'

def printAllPrimeNumbersBetweenTwoNumbers num1, num2
    (num1..num2).to_a.filter {|num| num.prime?}.join(" ")
end

puts printAllPrimeNumbersBetweenTwoNumbers(10,20)
```

### TypeScript

```typescript
// Write a TypeScript program to print all prime numbers between two numbers

function printPrimeNumber(num1: number, num2: number) {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printPrimeNumber(10, 13);
```

## Similar programs

- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Check Prime Number](/program/check-prime-number)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Swap Two Numbers](/program/swap-two-numbers)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Print Numbers From 1 To N Without Using A Loop](/program/print-numbers-from-1-to-n-without-using-a-loop)
- [Print Numbers From N To 1 Without Using A Loop](/program/print-numbers-from-n-to-1-without-using-a-loop)
- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
- [Divide Two Numbers](/program/divide-two-numbers)
