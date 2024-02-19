---
title: "Print Fibonacci Series Without Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "Ariel201711",
    "jfinley6",
    "joao-vitor-souza",
    "rahmat-dev",
    "grraghav120",
    "TrentGlimp",
    "auleki",
    "icanhaskick",
    "hemantsuteri",
    "YaSh8202",
    "djharshit",
    "anastazir",
    "Ipankaj07",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-19T07:14:59Z
trackId: 2109
description: "Write a program to print fibonacci series without recursion."
---

## Table of contents

## Write a program to print fibonacci series without recursion

```
Input  : 5
Output : 0 1 1 2 3
```

---

### C

```c
// Write a C program to print fibonacci series without recursion

#include <stdio.h>
int main() {
  int i, n;
  int t1 = 0, t2 = 1;
  scanf("%d", &n);
  printf("%d %d ", t1, t2);
    int nextTerm = t1 + t2;
  // print 3rd to nth terms
  for (i = 3; i <= n; ++i) {
    printf("%d ", nextTerm);
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
  }
  return 0;
}
```

### C#

```csharp
// Write a C# program to print fibonacci series without recursion

using System;
  public class FibonacciSeries
   {
     public static void Main(string[] args)
      {
         int n1=0,n2=1,n3,i,number;
         Console.Write("Enter the number of elements: ");
         number = int.Parse(Console.ReadLine());
         Console.Write(n1+" "+n2+" ");
         for(i=2;i<number;++i)
         {
          n3=n1+n2;
          Console.Write(n3+" ");
          n1=n2;
          n2=n3;
         }
      }
   }
```

### C++

```cpp
// Write a C++ program to print fibonacci series without recursion

#include <bits/stdc++.h>
using namespace std;

vector<int> fibonacciWithoutRecursion(int n)
{
  vector<int> fib(n);
  int i;

  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i < n; i++)
  {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

int main()
{
  int n=5;

  for(auto i: fibonacciWithoutRecursion(n))
  {
    cout << i << " ";
  }

  return 0;
}

//Output:
// 0 1 1 2 3
```

### Dart

```dart
// Write a Dart program to print fibonacci series without recursion

void main() {
  printFibonacciSeries(5);
}

void printFibonacciSeries(int n) {
  int p1 = 0, p2 = 1, p3;
  print('$p1');
  print('$p2');
  for (int i = 2; i < n; i++) {
    p3 = p1 + p2;
    print('$p3');
    p1 = p2;
    p2 = p3;
  }
}
```

### Go

```go
// Write a Go program to print fibonacci series without recursion

package main

import "fmt"

func fibonacci(n int) {
	a := 0
	b := 1
	temp := 0

	fmt.Printf("Input: %d\nOutput: ", n)
	for i := 0; i < n; i++ {
		fmt.Printf("%d ", a)
		temp = b
		b += a
		a = temp
	}

}

func main() {
	var number int
	fmt.Scanln(&number)
	fibonacci(number)
}
```

### Java

```java
// Write a Java program to print fibonacci series without recursion

import java.util.Scanner;

class PrintFibonacciSeriesWithoutRecursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number : ");
        int n = scanner.nextInt();

        int a = 0, b = 1, c;
        System.out.print(a + " " + b + " ");

        for (int i = 2; i < n; i++) {
            c = a + b;
            System.out.print(c + " ");
            a = b;
            b = c;
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print fibonacci series without recursion

const number = 5;

function fibonacci(num) {
  let fib = [0, 1];
  let data = [];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }
  return [0, 1].concat(data);
}

console.log("Number : ", number);
console.log("Output : ", fibonacci(number));
```

### Julia

```julia
# Write a Julia program to print fibonacci series without recursion

a = 0
b = 1
itr = 0
pos  = parse(UInt8, readline())

while itr < pos
    print(a, " ")
    c = a + b
    global a = b
    global b = c
    global itr += 1
end
```

### Perl

```perl
# Write a Perl program to print fibonacci series without recursion

print "Enter an integer: ";
$n=<STDIN>;
$f1=0;
$f2=1;
print "Fibonacci series of given input :\n";
if($n==1)
{
print "0\n";
}
elsif($n==2)
{
print "0\n1\n";
}
elsif($n>2)
{
print "0\n1\n";
$f3=$f1+$f2;
print "$f3\n";
for($i=2;$i<$n;$i++)
{
$f1=$f2;
$f2=$f3;
$f3=$f1+$f2;
print "$f3\n";
}
}
```

### PHP

```php
// Write a PHP program to print fibonacci series without recursion

<?php

function fibonacci($length) {
  $data = [];

  for ($i = 0; $i < $length; $i++) {
    if ($i === 0) {
      $data[] = 0;
    } else if ($i === 1) {
      $data[] = 1;
    } else {
      $data[] = $data[$i - 1] + $data[$i - 2];
    }
  }

  return implode(" ", $data);
}

echo fibonacci(5);
```

### Python

```python
# Write a Python program to print fibonacci series without recursion

terms = int(input("Enter the number of terms:"))
f, s = 0, 1
print("Fibonacci series are:")
print(f, s, end=" ")

while terms - 2:
    t = f + s
    f = s
    s = t
    print(t, end=" ")
    terms = terms - 1
```

### Ruby

```ruby
# Write a Ruby program to print fibonacci series without recursion

puts "Please enter a number: "
input_number = gets.to_i

def printFibonacciSeriesWithoutRecursion number
    fibonacciSequence = [0,1]

    for index in 2..number-1 do
        fibonacciSequence[index] = fibonacciSequence[index-1] + fibonacciSequence[index-2]
    end

    print "The Fibonacci Series for the Number #{number} is #{fibonacciSequence.join(" ")}"
end

puts printFibonacciSeriesWithoutRecursion(input_number)
```

### Swift

```swift
// Write a Swift program to print fibonacci series without recursion

import Foundation
import Glibc

func fibonacciSeries(num: Int) -> Int{
   // The value of 0th and 1st number of the fibonacci series are 0 and 1
   var n1 = 0
   var n2 = 1

   // To store the result
   var nR = 0
   // Adding two previous numbers to find ith number of the series
   for _ in 0..<num{
      nR = n1
      n1 = n2
      n2 = nR + n2
   }
   return n1
}

var val = 10

// Iterate for every number stating from 0 to val
for j in 0...val{
   let output = fibonacciSeries(num: j)
   print(output)
}
```

### TypeScript

```typescript
// Write a TypeScript program to print fibonacci series without recursion

const number = 5;

function fibonacci(num: number) {
  const fib = [0, 1];
  const data: number[] = [];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }
  return [0, 1].concat(data);
}

console.log("Number : ", number);
console.log("Output : ", fibonacci(number));
```

## Similar programs

- [Print Fibonacci Series Without Recursion](/program/print-fibonacci-series-without-recursion)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Find Sum Of Numbers By Recursion](/program/find-sum-of-numbers-by-recursion)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Sum Of N Natural Numbers By Recursion](/program/find-sum-of-n-natural-numbers-by-recursion)
- [Print Pattern 1](/program/print-pattern-1)
- [Find Sum Of Cubes Of Numbers By Recursion](/program/find-sum-of-cubes-of-numbers-by-recursion)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Find Sum Of Squares Of Numbers By Recursion](/program/find-sum-of-squares-of-numbers-by-recursion)
