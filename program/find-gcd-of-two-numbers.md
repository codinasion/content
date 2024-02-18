---
title: "Find Gcd Of Two Numbers"
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
    "jfinley6",
    "joao-vitor-souza",
    "SnehaNarendran01071998",
    "anshu-6537",
    "Tc2r1",
    "horerick46",
    "sksachin7z2",
    "shailendrakanherkar18",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-30T13:19:14Z
trackId: 2860
description: "Write a program to find gcd of two numbers."
---

## Table of contents

## Write a program to find gcd of two numbers

GCD (Greatest Common Divisor) of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common factors.

```
Input  : 12 18
Output : 6
```

---

### C

```c
// Write a C program to find gcd of two numbers

#include <stdio.h>

int find_gcd(int a,int b){
    int gcd=0;
    for(int i=1;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0) gcd=i;
    }
    return gcd;
}
int main(){

    int number1,number2,gcd=0;
    printf("Please enter number1 : ");
    scanf("%d",&number1);
    printf("Please enter number2 : ");
    scanf("%d",&number2);
    gcd=find_gcd(number1,number2);
    printf("%d\n",gcd);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find gcd of two numbers

using System;

class GCD {
  static void Main(string[] args) {
    int x = 12;
    int y = 18;
    int gcd = 1;
    int temp;

    if (x > y) {
      temp = x;
      x = y;
      y = temp;
    }

    for(int i = 1; i < (x+1); i++) {
      if (x%i == 0 && y%i == 0)
        gcd = i;
    }

    Console.WriteLine("GCD of "+ x +" and "+ y +" is: "+ gcd);
  }
}
```

### C++

```cpp
// Write a C++ program to find gcd of two numbers

#include <iostream>
using namespace std;

int gcd(int a, int b)
{
    int result = min(a, b);
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }return result;
}

int main()
{
    int a = 10, b = 5;
    cout << "GCD of " << a << " and " << b << " is "
         << gcd(a, b);
    return 0;
}
```

### Go

```go
// Write a Go program to find gcd of two numbers

package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("Enter the first number: ")
	var firstNumber int
	fmt.Scanln(&firstNumber)
	fmt.Println("Enter the second number: ")
	var secondNumber int
	fmt.Scanln(&secondNumber)
	var greatestCommonDivisor = gcd(firstNumber, secondNumber)
	fmt.Println("The GCD of " + strconv.Itoa(firstNumber) + " and " + strconv.Itoa(secondNumber) + " is " + strconv.Itoa(greatestCommonDivisor))
}

func gcd(firstNumber int, secondNumber int) int {
	var gcd int
	if(firstNumber == 0){
		return secondNumber
	}
	if(secondNumber == 0){
		return firstNumber
	}
	for i := 1; i <= firstNumber && i <= secondNumber; i++ {
		if firstNumber%i == 0 && secondNumber%i == 0 {
			gcd = i
		}
	}
	return gcd
}
```

### Java

```java
// Write a Java program to find gcd of two numbers

import java.util.*;
public class FindGcdOfTwoNumbers
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter two numbers :");
        int a=sc.nextInt();
        int b=sc.nextInt();

		int result = Math.min(a, b); // Find Minimum of a nd b
		while (result > 0) {
			if (a % result == 0 && b % result == 0) {
				break;
			}
			result--;
		}
		System.out.println(result);
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to find gcd of two numbers

function gcd(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) {
      break;
    }
    result--;
  }
  return result;
}

let a = 10;
let b = 5;
console.log("GCD of ", a, " and ", b, " is ", gcd(a, b));
```

### Kotlin

```kotlin
// Write a Kotlin program to find gcd of two numbers

import java.util.Scanner

// contributed by Nudennie White / Tc2r1 www.github.com/tc2r1
fun main() {
    val scanner = Scanner(System.`in`)

    print("Enter First Positive Whole Number: ")
    val number1 = scanner.nextInt()

    print("Enter Second Positive Whole Number: ")
    val number2 = scanner.nextInt()

    var gcd = gcdBySteinsAlgorithm(number1, number2)
    println("Stein's Algorithm says it is: $gcd")

    gcd = gcdByEuclidsAlgorithm(number1, number2)
    println("Euclid's Algorithm says it is: $gcd")
}

fun gcdByEuclidsAlgorithm(n1: Int, n2: Int): Int {
    return if (n2 == 0) {
        n1
    } else gcdByEuclidsAlgorithm(n2, n1 % n2)
}

fun gcdBySteinsAlgorithm(number1: Int, number2: Int): Int {
    var n1 = number1
    var n2 = number2
    if (n1 == 0) {
        return n2
    }
    if (n2 == 0) {
        return n1
    }
    var n = 0
    while (n1 or n2 and 1 == 0) {
        n1 = n1 shr 1
        n2 = n2 shr 1
        n++
    }
    while (n1 and 1 == 0) {
        n1 = n1 shr 1
    }
    do {
        while (n2 and 1 == 0) {
            n2 = n2 shr 1
        }
        if (n1 > n2) {
            val temp = n1
            n1 = n2
            n2 = temp
        }
        n2 -= n1
    } while (n2 != 0)
    return n1 shl n
}
```

### Perl

```perl
# Write a Perl program to find gcd of two numbers

sub gcd {
  my ($a, $b) = @_;
  ($a,$b) = ($b,$a) if $a > $b;
  while ($a) {
    ($a, $b) = ($b % $a, $a);
  }
  return $b;
}

print gcd(12, 18);
```

### PHP

```php
// Write a PHP program to find gcd of two numbers

<?php
$x = 50;
$y = 100;
if ($x > $y) {
  $temp = $x;
  $x = $y;
  $y = $temp;
}

for($i = 1; $i < ($x+1); $i++) {
  if ($x%$i == 0 and $y%$i == 0)
    $gcd = $i;
}

echo "GCD of $x and $y is: $gcd";
?>
```

### Python

```python
# Write a Python program to find gcd of two numbers

def findGCD(x, y):
    while x != y:
        if x > y:
            x = x - y
        elif x < y:
            y = y - x
    return x


x = int(input("n1: "))
y = int(input("n2: "))
print(f"GCD of {x} and {y} : {findGCD(x,y)}")
```

### Ruby

```ruby
# Write a Ruby program to find gcd of two numbers

puts "Please enter the first number to check greatest common divisor: "
first_number = gets.to_i
puts "Please enter the second number to check greatest common divisor: "
second_number = gets.to_i

def findGCDOfTwoNumbers(num1, num2)
    result = num1.gcd(num2)
    puts "The greatest common divisor is #{result}"
end

findGCDOfTwoNumbers(first_number, second_number)
```

### Rust

```rust
// Write a Rust program to find gcd of two numbers

// Rust program to find the GCD

use std::io;

fn main()
{
    let mut n1:i32 = 0;
    let mut n2:i32 = 0;
    let mut rem:i32= 0;
    let mut x:i32  = 0;
    let mut y:i32  = 0;

    let mut input1 = String::new();
    let mut input2 = String::new();

    println!("Enter Number1: ");
    io::stdin().read_line(&mut input1).expect("Not a valid string");
    n1 = input1.trim().parse().expect("Not a valid number");

    println!("Enter Number2: ");
    io::stdin().read_line(&mut input2).expect("Not a valid string");
    n2 = input2.trim().parse().expect("Not a valid number");

    if (n1 > n2)
    {
        x = n1;
        y = n2;
    }
    else
    {
        x = n2;
        y = n1;
    }

    rem = x % y;

    while (rem != 0) {
        x = y;
        y = rem;
        rem = x % y;
    }

    println!("Greatest Common Divisor is: {}", y);
}
```

### Scala

```scala
// Write a Scala program to find gcd of two numbers

object HelloWorld {

  def gcd(a:Int,b:Int):Int={
    if(b==0){
      return a
    }
    else{
      gcd(b,a%b)
    }
  }

	 def main(args: Array[String]): Unit=
	 {
	   var a = scala.io.StdIn.readInt
	   var b = scala.io.StdIn.readInt

	    if (a == 0){
	      println( b)
	    }

      if (b == 0){
        println( a)
      }

      println(gcd(a,b))
	 }
}
```

### Swift

```swift
// Write a Swift program to find gcd of two numbers

import Swift
import Foundation

func findGCD(num1: Int, num2: Int) -> Int {
   var x = 0

   var y: Int = max(num1, num2)
   var z: Int = min(num1, num2)

   while z != 0 {
      x = y
      y = z
      z = x % y
   }
   return y
}

var result = findGCD(num1:12, num2:18)
print("GCD: ", result)
```

### TypeScript

```typescript
// Write a TypeScript program to find gcd of two numbers

function findGCD(number1: number, number2: number): number {
  let result: number = Math.min(number1, number2);
  while (result > 0) {
    if (number1 % result == 0 && number2 % result == 0) {
      break;
    }
    result--;
  }
  return result; // return GCD between number1 and number2
}

findGCD(12, 18);
```
