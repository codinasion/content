---
title: "Check Prime Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "sancoLgates",
    "Fukurokudzu",
    "joao-vitor-souza",
    "deniss-eh",
    "Ipankaj07",
    "ynbh",
    "UsmanFani",
    "grraghav120",
    "KaptainCS3",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:16:55Z
trackId: 1832
description: "Write a program to check prime number."
---

## Table of contents

## Write a program to check prime number

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```
Input  : 5
Output : Prime Number
```

---

### C

```c
// Write a C program to check prime number

#include <stdio.h>
int main()
{
    int a, number, count = 0;
    printf("enter number to check for prime or not prime :");
    scanf("%d", &number);
    for (a = 1; a <= number; a++)
        if (number % a == 0)
            count++;
    if (count == 2)
        printf("prime number\n");
    else
        printf("it is not a prime number\n");
    return 0;
}
```

### C#

```csharp
// Write a C# program to check prime number

using System;
  public class PrimeNumber
   {
     public static void Main(string[] args)
      {
          int n, i, m=0, flag=0;
          Console.Write("Enter a Number to check :");
          n = int.Parse(Console.ReadLine());
          m=n/2;
          for(i = 2; i <= m; i++)
          {
           if(n % i == 0)
            {
             Console.Write("{0} is not a Prime Number.",n);
             flag=1;
             break;
            }
          }
          if (flag==0)
           Console.Write("{0} is a Prime Number.",n);
     }
   }
```

### C++

```cpp
// Write a C++ program to check prime number

#include <iostream.h>
using namespace std;
int main()
{
    int a, number, count = 0;
    cout << "enter number to check for prime or not prime :";
    cin >> number;
    for (a = 1; a <= number; a++)
        if (number % a == 0)
            count++;
    if (count == 2)
        cout << "prime number\n";
    else
        cout << "it is not a prime number\n";
    return 0;
}
```

### Go

```go
// Write a Go program to check prime number

package main

import (
	"fmt"
	"math"
)

func checkIsPrime(num int) bool {
	square_root := int(math.Sqrt(float64(num)))
	for i:=2; i<square_root; i++ {
		if num % i == 0 {
			return false
		}
	}
	return num > 1
}

func main() {
	var i int
	fmt.Print("Enter Number: ")
	fmt.Scan(&i)
	isPrime := checkIsPrime(i)

	if (isPrime) {
		fmt.Println("Prime Number")
	} else {
		fmt.Println("Not Prime Number")
	}
}
```

### Java

```java
// Write a Java program to check prime number

import java.util.Scanner;

class CheckPrimeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number to check prime number or not");

        int num = sc.nextInt();
        boolean isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            System.out.println(num + " is a prime number");
        } else {
            System.out.println(num + " is not a prime number");
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check prime number

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log(isPrime(17));
```

### Julia

```julia
# Write a Julia program to check prime number

function checkPrime(num)
    isPrime = true
        for i in 2:convert(Int64, round(num/2, digits = 0))
            if num % i == 0
                isPrime = false
                break
            end
        end
    return isPrime
end

print("Enter a number: ")
num = parse(Int, readline(stdin))
isPrime = checkPrime(num)
if num == 1
    println("1 is neither prime nor composite.")
elseif isPrime == true
    println("Entered number is prime")
else
    println("Entered number is not prime")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check prime number

import kotlin.math.sqrt

fun main() {
    print("Enter No. to check Prime: ")
    val num = readln().toInt()
    if (checkPrime(num)) print("$num is Prime Number")
    else print("$num is Not a Prime Number")
}

private fun checkPrime(num: Int): Boolean {
    if (num <= 1) return false
    if (num == 2 || num == 3) return true
    if (num % 2 == 0 || num % 3 == 0) return false

    for (i in 5..sqrt(num.toDouble()).toInt() step 6) {
        if (num % i == 0 || num % (i + 2) == 0) return false
    }
    return true
}
```

### Perl

```perl
# Write a Perl program to check prime number

use warnings;
use strict;
sub checkprime
{
my $m = shift @_;
my $i = 2;
while ($i < $m)
{
return 0 unless ($m % $i++);
}
return 1;
}
print "Enter a number : \n";
chomp (my $n = <STDIN>);
my $FindPrime = checkprime $n;
if ( $FindPrime == 1)
{
print "It's a Prime number \n";
}
else
{
print "It's not a Prime number \n";
}
```

### PHP

```php
// Write a PHP program to check prime number

<?php
  $num = readline('Enter Number: ');

  if ($num <= 1) {
    echo "Not a Prime Number";
  } else {
    for ($i = 2; $i <= $num/2; $i++) {
      if ($num % $i == 0) {
        echo "Not a Prime Number";
        return;
      }
    }
  }

  echo "Prime Number";
?>
```

### Python

```python
# Write a Python program to check prime number

a = int(input())
c = 0
if a == 1:
    print("Not Prime Number")
elif a == 2:
    print("Prime Number")
else:
    for i in range(2, a + 1):
        if a % i == 0:
            c = c + 1
    if c >= 2:
        print("Not Prime Number")
    else:
        print("Prime Number")

# Contributed by Raghav Garg
```

### Ruby

```ruby
# Write a Ruby program to check prime number

module PrimeNumber

  Prime = "Prime Number"
  NotPrime = "Not Prime Number"

  def self.check_prime(number)

    return NotPrime if (0..2).include?(number) || number.negative?

    2.upto(number-1) do |n|
      if number % n == 0
        return NotPrime
      end
    end

    Prime
  end
end

puts PrimeNumber.check_prime(41) # => Prime Number
puts PrimeNumber.check_prime(16) # => Not Prime Number
```

### Rust

```rust
// Write a Rust program to check prime number

fn is_prime(n: u32) -> bool {
    if n<=1 {
        return false;
    }

    for i in 2..n {
        if n%i == 0 {
            return false;
        }
    }

    return true
}

fn main() {
    let n = is_prime(17);
    println!("{}", n);
}
```

### Scala

```scala
// Write a Scala program to check prime number

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val num = scala.io.StdIn.readInt();

    if (isPrime(num)) {
      System.out.println(num + " is a prime number");
    } else {
      System.out.println(num + " is not a prime number");
    }
	}

	def isPrime(num:Int):Boolean = {
    (num > 1) && !(2 to scala.math.sqrt(num).toInt).exists(x => num % x == 0)
  }
}
```

### Swift

```swift
// Write a Swift program to check prime number

import Swift
import Foundation

func isPrime(_ n: Int) -> Bool {
    guard n >= 2     else { return false }
    guard n != 2     else { return true  }
    guard n % 2 != 0 else { return false }
    return !stride(from: 3, through: Int(sqrt(Double(n))), by: 2).contains { n % $0 == 0 }
}

var number1 = 5
print("5 is a prime number: " , isPrime(number1))

var number2 = 9
print("9 is a prime number: " , isPrime(number2))
```

### TypeScript

```typescript
// Write a TypeScript program to check prime number

function isPrime(num: number) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

console.log(isPrime(17));
```

## Similar programs

- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Check Even Or Odd Number](/program/check-even-or-odd-number)
- [Check Armstrong Number](/program/check-armstrong-number)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Square Of A Number](/program/find-square-of-a-number)
- [Find Power Of A Number By Recursion](/program/find-power-of-a-number-by-recursion)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
