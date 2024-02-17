---
title: "Find Lcm Of Two Numbers By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
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
    "anandfresh",
    "Shaileshalluri",
    "harshraj8843",
    "vishwa-X",
    "ariporat",
    "KarmakarRahul",
    "joao-vitor-souza",
    "MadhuS-1605",
    "AshishSharma1203",
    "sahooankeeta",
    "RShalman",
    "anastazir",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T04:58:46Z
trackId: 405
description: "Write a program to find lcm of two numbers by recursion."
---

## Write a program to find lcm of two numbers by recursion

LCM (Least Common Multiple) of two numbers is the smallest number that can be divided by both numbers. For example, the LCM of 15 and 20 is 60 and LCM of 10 and 15 is 30.

```
Input  : 12 18
Output : 36
```

---

```c
// Write a C program to find lcm of two numbers by recursion

#include <stdio.h>

// function to find min element

int Min(int Num1, int Num2)
{
	return Num1 >= Num2?Num2:Num1;

}

// function to find lcm of two numbers
int LCMUtil(int Num1, int Num2, int K)
{
	// If either of the two numbers is 1, return their product

	if (Num1 == 1 || Num2 == 1)
		return Num1 * Num2;

	// If both the numbers are equal
	if (Num1 == Num2)
		return Num1;

	// If K is smaller than the  minimum of the two numbers

	if (K <= Min(Num1, Num2)) {


		if (Num1 % K == 0 && Num2 % K == 0) {


			return K * LCMUtil(
						Num1 / K, Num2 / K, 2);
		}


		else
			return LCMUtil(Num1, Num2, K + 1);
	}


	else
		return Num1 * Num2;
}


void LCM(int N, int M)
{
	// Stores LCM of two number
	int lcm = LCMUtil(N, M, 2);

	// Print LCM
	printf("%d", lcm);
}

// Driver Code
int main()
{

  int N,M;
  scanf("%d", &N);
  scanf("%d", &M);

	LCM(N, M);

	return 0;
}
```

```csharp
// Write a C# program to find lcm of two numbers by recursion

using System;

class LCM {
  static int gcd(int x, int y) {
    if (y == 0)
      return x;
    return gcd(y, x%y);
  }

  static void Main(string[] args) {
    int x = 12;
    int y = 18;

    int lcm = (x*y)/gcd(x,y);

    Console.WriteLine("LCM of "+ x +" and "+ y +" is: "+ lcm);
  }
}
```

```cpp
// Write a C++ program to find lcm of two numbers by recursion

#include <iostream>

using namespace std;

// Recursive Function calculate hcf of two number

int HcF(int a, int b)
{
    return b == 0 ? a : HcF(b, a % b);
}

int main()
{

    // Enter the two numbers

    int a, b;
    cin >> a >> b;

    int hcf = HcF(a, b);
    int lcm;

    // Finding the lcm by using the formula n1*n2 / hcf

    lcm = (a * b) / hcf;

    cout << "LCM of " << a << " ans " << b << " is " << lcm;

    return 0;
}
```

```go
// Write a Go program to find lcm of two numbers by recursion

package main

import "fmt"

func main() {
var a, b int
	fmt.Println("Enter value of a:")
	fmt.Scan(&a)
	fmt.Println("Enter value of b:")
	fmt.Scan(&b)
	fmt.Println("LCM of 2 values are:", lcm(a, b))
}
func gcd(a int, b int) int {
	if a == 0 {
		return b
	}
	return gcd(b%a, a)
}

func lcm(a int, b int) int {
	return (a / gcd(a, b)) * b
}
```

```java
// Write a Java program to find lcm of two numbers by recursion

import java.util.*;
class FindLcmOfTwoNumbersByRecursion
{
  public static int gcd(int a, int b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
  public static int lcm(int a, int b)
    {
        return (a / gcd(a, b)) * b;
    }
  public static void main(String[] args)
    {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter first number");
      int a = sc.nextInt();
      System.out.println("Enter second number");
      int b = sc.nextInt();
      System.out.println("lcm : "+lcm(a, b));
    }
}
```

```javascript
// Write a JavaScript program to find lcm of two numbers by recursion

export function findLcmOfTwoNumbersByRecursion(first, second, lcm = 1) {
  if (lcm % first === 0 && lcm % second === 0) return lcm;

  return findLcmOfTwoNumbersByRecursion(first, second, ++lcm);
}
```

```perl
# Write a Perl program to find lcm of two numbers by recursion

#!/usr/bin/perl -w
use strict;

sub gcd {
  my ($m, $n) = @_;
  if ($n == 0) {
    return $m;
  }

  return gcd($n, $m % $n);
}

sub lcm {
  my ($x, $y) = @_;
  return ($x / gcd($x, $y)) * $y;
}

print lcm(12, 18);
```

```php
// Write a PHP program to find lcm of two numbers by recursion

<?php

function gcd($x, $y)
{
    return $x === 0 ? $y : gcd($y % $x, $x);
}

function lcm($x, $y)
{
    return ($x / gcd($x, $y)) * $y;
}

echo(lcm(12, 18));

?>
```

```python
# Write a Python program to find lcm of two numbers by recursion

num1 = 12
num2 = 18


def gcd(num1, num2):
    if num2 == 0:
        return num1
    else:
        return gcd(num2, num1 % num2)


def lcm(num1, num2):
    return (num1 * num2) // gcd(num1, num2)


print("num1 : ", num1)
print("num2 : ", num2)

print("Output : ", lcm(num1, num2))
```

```r
# Write a R program to find lcm of two numbers by recursion

# Function to find the GCD (Greatest Common Divisor) using Euclid's algorithm
gcd <- function(a, b) {
  if (b == 0) {
    return(a)
  } else {
    return(gcd(b, a %% b))
  }
}

# Function to find the LCM (Least Common Multiple) using the GCD
lcm <- function(a, b) {
  return (abs(a * b) / gcd(a, b))
}

# Example usage
num1 <- 12
num2 <- 18

result <- lcm(num1, num2)
cat("The LCM of", num1, "and", num2, "is:", result, "\n")
```

```ruby
# Write a Ruby program to find lcm of two numbers by recursion

def LCM(a, b, res)
    if (res % a == 0 && res % b == 0)
        return res;
    else
        LCM(a, b,res + 1);
    end
end

print "Enter the first number : ";
number1 = gets.chomp.to_i;

print "Enter the second number : ";
number2 = gets.chomp.to_i;

result = LCM(number1, number2,1);

print "LCM is: ",result;
```

```scala
// Write a Scala program to find lcm of two numbers by recursion

object FINDLCM extends App{
    def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

    def lcm(a: Int, b: Int): Int = if (a == 0 || b == 0) 0 else math.abs(a * b) / gcd(a, b)

    println(s"LCM of 12 and 18 is: ${lcm(12, 18)}")
}
```

```typescript
// Write a TypeScript program to find lcm of two numbers by recursion

function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

const number1: number = 12;
const number2: number = 18;
const lcm: number = (number1 * number2) / gcd(number1, number2);

console.log(`LCM of ${number1} and ${number2} is: ${lcm}`);
```
