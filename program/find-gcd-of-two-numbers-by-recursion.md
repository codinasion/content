---
title: "Find Gcd Of Two Numbers By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "Shaileshalluri",
    "SidMalladi",
    "Rohan-Kalgutkar",
    "bhushanmarathe",
    "ReprogramAkash",
    "harshraj8843",
    "AshitaSingamsetty",
    "jfinley6",
    "abhisek-1221",
    "anandfresh",
    "leslieyip02",
    "yashasvini121",
    "sahdev77",
    "yesayajones",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:10:09Z
trackId: 5186
description: "Write a program to find gcd of two numbers by recursion."
---

## Table of contents

## Write a program to find gcd of two numbers by recursion

GCD (Greatest Common Divisor) of two numbers is the largest number that divides both of them. A simple way to find GCD is to factorize both numbers and multiply common factors.

```
Input  : 12 18
Output : 6
```

---

### C

```c
// Write a C program to find gcd of two numbers by recursion

#include <stdio.h>

int gcd(int a, int b)
{

    if (a == 0)
       return b;
    if (b == 0)
       return a;

    if (a == b)
        return a;

    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}

int main()
{
    int a = 12, b = 18;
    printf("GCD of %d and %d is %d ", a, b, gcd(a, b));
    return 0;
}
```

### C#

```csharp
// Write a C# program to find gcd of two numbers by recursion

using System;

class GCD {
  static int gcd(int x, int y) {
    if (y == 0)
      return x;
    return gcd(y, x%y);
  }

  static void Main(string[] args) {
    int x = 12;
    int y = 18;

    Console.WriteLine("GCD of "+ x +" and "+ y +" is: "+ gcd(x,y));
  }
}
```

### C++

```cpp
// Write a C++ program to find gcd of two numbers by recursion

#include <iostream>

int gcd(int a, int b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

int main() {
  int a, b;
  std::cout << "Enter two numbers: ";
  std::cin >> a >> b;
  std::cout << "GCD: " << gcd(a, b) << std::endl;
  return 0;
}
```

### Dart

```dart
// Write a Dart program to find gcd of two numbers by recursion

import 'dart:io';

int gcd(int a, int b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

void main() {
  print("Enter two numbers to find their GCD:");
  int num1 = int.parse(stdin.readLineSync()!);
  int num2 = int.parse(stdin.readLineSync()!);

  int result = gcd(num1, num2);

  print("The GCD of $num1 and $num2 is $result");
}
```

### F#

```fsharp
// Write a F# program to find gcd of two numbers by recursion

let rec gcd a b =
    if b = 0 then a
    else gcd b (a % b)

// Example usage
let num1 = 12
let num2 = 18

let result = gcd num1 num2
printfn "The GCD of %d and %d is: %d" num1 num2 result
```

### Go

```go
// Write a Go program to find gcd of two numbers by recursion

package main
import (
    "fmt"
    "math/big"
)
func main() {
    var num1, num2 big.Int
    fmt.Printf("Input : ")
    fmt.Scanln(&num1, &num2)
    result := new(big.Int).GCD(nil, nil, &num1, &num2)
    fmt.Printf("Output : %d",result)
}
```

### Haskell

```haskell
-- Write a Haskell program to find gcd of two numbers by recursion

g :: Integer -> Integer -> Integer
g x 0 = x
g x y = g y (x `mod` y)

main = do
    let n = 12
    let m = 18

    print $ g n m
```

### Java

```java
// Write a Java program to find gcd of two numbers by recursion

import java.io.*;
import java.util.Scanner;

class GCD {
    static int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close();

        System.out.println("GCD of " + a + " and " + b + " is " + gcd(a, b));
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find gcd of two numbers by recursion

function greatestCommonDenominator(a, b) {
  // the bigger number is always divided by the smaller one
  if (b === 0) return a;

  // recursively call the function
  return greatestCommonDenominator(b, a % b);
}

//display greatest common denominator of 12 and 18
console.log(greatestCommonDenominator(12, 18));
```

### Julia

```julia
# Write a Julia program to find gcd of two numbers by recursion

function gcd_recursive(a, b)

    if b == 0
        return a
    else

        return gcd_recursive(b, a % b)
    end
end


num1 = 12
num2 = 18


println("GCD of $num1 and $num2 is: ", gcd_recursive(num1, num2))
```

### Kotlin

```kotlin
// Write a Kotlin program to find gcd of two numbers by recursion

fun findGCD(a: Int, b: Int): Int {
    // Base case: If b is 0, the GCD is a
    if (b == 0) {
        return a
    }


    return findGCD(b, a % b)
}

fun main() {
    val num1 = 48
    val num2 = 18
    val gcd = findGCD(num1, num2)

    println("GCD of $num1 and $num2 is $gcd")
}
```

### Perl

```perl
# Write a Perl program to find gcd of two numbers by recursion

sub gcd {
    my ($a, $b) = @_;

    # Base case: if one of the numbers is zero, the other number is the GCD
    return $b == 0 ? $a : gcd($b, $a % $b);
}

# Example usage
my $num1 = 12;
my $num2 = 18;

my $result = gcd($num1, $num2);
print "The GCD of $num1 and $num2 is: $result\n";
```

### PHP

```php
// Write a PHP program to find gcd of two numbers by recursion

<?php

function gcd($x, $y) {
  if ($y == 0)
    return $x;
  return gcd($y, $x%$y);
}

echo gcd(12,18);

?>
```

### Python

```python
# Write a Python program to find gcd of two numbers by recursion

# Recursive function to return gcd of a and b
def recursiveGcd(a: int, b: int):
    # Everything divides 0
    if a == 0 or b == 0:
        return a if a == 0 else b

    # base case
    if a == b:
        return a

    # a is greater
    if a > b:
        return recursiveGcd(a - b, b)
    return recursiveGcd(a, b - a)


x = int(input("n1: "))
y = int(input("n2: "))
print(f"GCD of {x} and {y} : {recursiveGcd(x,y)}")
```

### R

```r
# Write a R program to find gcd of two numbers by recursion

gcd <- function(a,b){
    if(b==0){
        return (a)
    }

    return (gcd(b,a%%b))
}

print("Input: ")
a=as.integer(readline())
b=as.integer(readline())
print(paste("Output: ",gcd(a,b)))
```

### Ruby

```ruby
# Write a Ruby program to find gcd of two numbers by recursion

def findGCDOfTwoNumbersByRecursion a, b
    while a != b
        if a > b
            return findGCDOfTwoNumbersByRecursion(a - b, b)
        else
            return findGCDOfTwoNumbersByRecursion(a, b - a)
        end
    end
    return a
end

puts findGCDOfTwoNumbersByRecursion 12, 18
```

### Scala

```scala
// Write a Scala program to find gcd of two numbers by recursion

object GCDCalculator {
  def gcd(a: Int, b: Int): Int = {
    // Base case: if one of the numbers is zero, the other number is the GCD
    if (b == 0) a
    else gcd(b, a % b)
  }

  def main(args: Array[String]): Unit = {
    // Example usage
    val num1 = 21
    val num2 = 18

    val result = gcd(num1, num2)
    println(s"The GCD of $num1 and $num2 is: $result")
  }
}
```

### Swift

```swift
// Write a Swift program to find gcd of two numbers by recursion

import Foundation

func gcd(_ a: Int, _ b: Int) -> Int {
    if b == 0 {
        return a
    } else {
        return gcd(b, a % b)
    }
}

// Example usage
let num1 = 12
let num2 = 18
let result = gcd(num1, num2)
print("GCD of \(num1) and \(num2) is \(result)")
```

### TypeScript

```typescript
// Write a TypeScript program to find gcd of two numbers by recursion

const gcd = (x: number, y: number): number => {
  if (y === 0) return x;
  return gcd(y, x % y);
};

console.log(gcd(12, 18));
```

## Similar programs

- [Find Gcd Of Two Numbers](/program/find-gcd-of-two-numbers)
- [Find Sum Of Numbers By Recursion](/program/find-sum-of-numbers-by-recursion)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find Sum Of N Natural Numbers By Recursion](/program/find-sum-of-n-natural-numbers-by-recursion)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Find Lcm Of Two Numbers By Recursion](/program/find-lcm-of-two-numbers-by-recursion)
- [Find Sum Of Cubes Of Numbers By Recursion](/program/find-sum-of-cubes-of-numbers-by-recursion)
- [Find Sum Of Squares Of Numbers By Recursion](/program/find-sum-of-squares-of-numbers-by-recursion)
- [Find Largest And Smallest Numbers In An Array](/program/find-largest-and-smallest-numbers-in-an-array)
