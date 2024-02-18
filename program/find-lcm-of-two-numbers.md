---
title: "Find Lcm Of Two Numbers"
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
    "r",
  ]
contributors:
  [
    "VinayReddy-vr",
    "anandfresh",
    "harshraj8843",
    "AshitaSingamsetty",
    "esivakumar18",
    "jfinley6",
    "joao-vitor-souza",
    "Khushi260",
    "Vignesh-dev07",
    "grraghav120",
    "djharshit",
    "rahmat-dev",
    "nickdark",
    "Farelion",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-29T12:09:25Z
trackId: 1208
description: "Write a program to find lcm of two numbers."
---

## Table of contents

## Write a program to find lcm of two numbers

LCM (Least Common Multiple) of two numbers is the smallest number which can be divided by both numbers. For example, the LCM of 15 and 20 is 60 and LCM of 10 and 15 is 30.

```
Input  : 12 18
Output : 36
```

---

### C

```c
// Write a C program to find lcm of two numbers

#include <stdio.h>

int find_gcd(int a,int b){
    int gcd=0;
    for(int i=1;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0) gcd=i;
    }
    return gcd;
}
int main(){

    int a,b,gcd=0;
    scanf("%d %d",&a,&b);
    gcd=find_gcd(a,b);
    int res=(a*b)/gcd;
    printf("%d",res);
    return 0;
}

//Contributed by Raghav Garg
```

### C#

```csharp
// Write a C# program to find lcm of two numbers

using System;
public class Exercise45
{
    public static void Main()
{
    int i, n1, n2, max, lcm=1;
	Console.Write("\n\n");
    Console.Write("Determine the LCM of two numbers:\n");
    Console.Write("-----------------------------------");
    Console.Write("\n\n");
    Console.Write("Input 1st number for LCM: ");
    n1 = Convert.ToInt32(Console.ReadLine());
    Console.Write("Input 2nd number for LCM: ");
    n2 = Convert.ToInt32(Console.ReadLine());
    max = (n1>n2) ? n1 : n2;
    for(i=max;  ; i+=max)
    {
        if(i%n1==0 && i%n2==0)
        {
            lcm = i;
            break;
        }
    }
    Console.Write("\nLCM of {0} and {1} = {2}\n\n", n1, n2, lcm);
 }
}
```

### C++

```cpp
// Write a C++ program to find lcm of two numbers

/*
Author -> Abhinav Prabhat
Date   -> 29-01-2023
*/

#include <iostream>

using namespace std;

int hcf_calc(int a, int b)
{

    if (a == 0)
    {
        return b;
    }
    if (b == 0)
    {
        return a;
    }

    while (a != b)
    {
        if (a > b)
        {
            a -= b;
        }

        else
        {
            b -= a;
        }
    }

    return a;
}

int main()
{

    int num1, num2;

    cout << "\n\nEnter two numbers whose LCM you want -> ";
    cin >> num1 >> num2;

    int hcf = hcf_calc(num1, num2);

    int lcm = (num1 * num2) / hcf;

    cout << "\n\nLCM of " << num1 << " & " << num2 << " is -> " << lcm << endl
         << endl;
    return 0;
}
```

### Go

```go
// Write a Go program to find lcm of two numbers

package main

import (
	"fmt"
)

func gcd(a,b int) int{
    if b == 0 {
        return a
    }
    return gcd(b,a%b)
}
func main(){
    var num1, num2 int
    fmt.Print("Input 1st number for LCM : ")
    fmt.Scanln(&num1)
    fmt.Print("Input 2nd number for LCM : ")
    fmt.Scanln(&num2)

    lcm := (num1*num2)/gcd(num1,num2)
    fmt.Print("Output : ",lcm)
}
```

### Java

```java
// Write a Java program to find lcm of two numbers

import java.util.Scanner;

public class findlcmoftwonumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Input : ");
        int num1 = input.nextInt();
        int num2 = input.nextInt();
        int min = 0 ;
        int max = 0;
        if (num1<num2) {
            min = num1;
            max = num2;
        }
        else {
            min = num2;
            max = num1;
        }
        for (int i = 1; i < max+1; i++) {
            if ((min*i)%max==0) {
                System.out.println("Output : "+min*i);
                break;
            }

        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find lcm of two numbers

let FindLcmOfTwoNumbers = (n1, n2) => {
  let lar = Math.max(n1, n2);
  let small = Math.min(n1, n2);

  let i = lar;

  while (i % small !== 0) {
    i += lar;
  }

  return i;
};

const n1 = 12;
const n2 = 18;
console.log("Inputs  :", n1, n2);
console.log("Output :", FindLcmOfTwoNumbers(n1, n2));
```

### Kotlin

```kotlin
// Write a Kotlin program to find lcm of two numbers

import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val input1 = scanner.nextInt();
  val input2 = scanner.nextInt();
  var myResult: Int

   myResult = if (input1 > input2) input1 else input2

   while (true) {
      if (myResult % input1 == 0 && myResult % input2 == 0) {
         println("The LCM is $myResult.")
         break
      }
      ++myResult
   }
}
```

### Perl

```perl
# Write a Perl program to find lcm of two numbers

sub findLcm {
    my ($a, $b) = @_;
    my $greater = $a > $b ? $a : $b;
    my $lcm = $greater;
    while (1) {
        if ($lcm % $a == 0 && $lcm % $b == 0) {
            return $lcm;

        }
        $lcm += $greater;
    }
}

print "Enter the first number : ";
my $a = <STDIN>;
print "Enter the second number : ";
my $b = <STDIN>;
my $result = findLcm($a, $b);
print "LCM of $a and $b is $result\n";
```

### PHP

```php
// Write a PHP program to find lcm of two numbers

<?php

function find_lcm_of_two_numbers($n1, $n2)
{
	if ($n1 > $n2) {
		$temp = $n1;
		$n1 = $n2;
		$n2 = $temp;
	}

	for ($i = 1; $i < ($n1 + 1); $i++) {
		if ($n1 % $i == 0 && $n2 % $i == 0)
			$gcd = $i;
	}

	$lcm = ($n1 * $n2) / $gcd;
	return $lcm;
}

echo find_lcm_of_two_numbers(12, 18);
```

### Python

```python
# Write a Python program to find lcm of two numbers

def findGCD(x, y):
    while x != y:
        if x > y:
            x = x - y
        elif x < y:
            y = y - x
    return x


def findLCM(x, y):
    z = x * y
    gcd = findGCD(x, y)
    lcm = int(z / gcd)
    return lcm


x = int(input("n1: "))
y = int(input("n2: "))
print(f"LCM of {x} and {y} : {findLCM(x,y)}")
```

### R

```r
# Write a R program to find lcm of two numbers

# Function to find the GCD (Greatest Common Divisor) of two numbers
gcd <- function(a, b) {
  while (b != 0) {
    remainder <- a %% b
    a <- b
    b <- remainder
  }
  return(a)
}

# Function to find the LCM (Least Common Multiple) of two numbers
lcm <- function(a, b) {
  return(abs(a * b) / gcd(a, b))
}

# Example usage
number1 <- 4
number2 <- 5
lcmResult <- lcm(number1, number2)

cat("LCM of", number1, "and", number2, "is", lcmResult, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find lcm of two numbers

def findLCMOfTwoNumbers num1, num2
    puts num1.lcm(num2)
end

findLCMOfTwoNumbers 12, 18
```

### Scala

```scala
// Write a Scala program to find lcm of two numbers

def findLcm(number1: Int, number2: Int): Int = {
  var temp = 0
  var val1 = number1
  var val2 = number2

  while(val2 != 0) {
    temp = val2
    val2 = val1 % val2
    val1 = temp
  }
  val GCM = val1

  number1 * number2 / GCM
}

print(findLcm(10, 12))
```

### Swift

```swift
// Write a Swift program to find lcm of two numbers

import Swift
import Foundation

// Function to find gcd of two numbers
func findGCD(_ num1: Int, _ num2: Int) -> Int {
   var x = 0

   // Finding maximum number
   var y: Int = max(num1, num2)

   // Finding minimum number
   var z: Int = min(num1, num2)

   while z != 0 {
      x = y
      y = z
      z = x % y
   }
   return y
}

// Function to find lcm of two numbers
func findLCM(n1: Int, n2: Int)->Int{
   return (n1 * n2/findGCD(n1, n2))
}

// Calling Function
var result = findLCM(n1: 12, n2:18)
print("LCM of 12 and 18 is ",result)
```

### TypeScript

```typescript
// Write a TypeScript program to find lcm of two numbers

const number1: number = 10;
const number2: number = 12;

function findLcm(number1: number, number2: number): number {
  let temp: number = 0;
  let val1: number = number1;
  let val2: number = number2;

  // Find the greatest common denominator
  while (val2) {
    temp = val2;
    val2 = val1 % val2;
    val1 = temp;
  }
  const GCD: number = val1;

  return (number1 * number2) / GCD;
}

findLcm(number1, number2);
```
