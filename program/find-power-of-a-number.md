---
title: "Find Power Of A Number"
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
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "esivakumar18",
    "anandfresh",
    "Osher160",
    "Fukurokudzu",
    "vedantpople4",
    "AviadCohen24",
    "vipulkmr02",
    "harsha-desaraju",
    "hi-Kartik2004",
    "hugosmoreira",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5098
description: "Write a program to find power of a number."
---

## Table of contents

## Write a program to find power of a number

Power of a number is the result of multiplying a number by itself a certain number of times. For example, 2^3 = 2 _ 2 _ 2 = 8. The number 2 is the base and 3 is the exponent.

```
Input  : 2 3
Output : 8
```

---

### C

```c
// Write a C program to find power of a number

#include <stdio.h> /* printf, scanf */

/* According to issue example,
assuming that both num and expo are positive natural numbers*/

int PowerOf(int num, int expo);


int main()
{
    int num = 0;
    int expo = 0;

    int is_good =scanf("%d%d",&num,&expo);

    if(is_good != 2)
    {
        printf("scanf failed\n");
        return -1;
    }

    printf("%d\n",PowerOf(num,expo));

    return 0;
}


int PowerOf(int num, int expo)
{
    int ret = 1;
    while(expo >= 1)
    {
        ret *= num;
        --expo;
    }

    return ret;
}
```

### C#

```csharp
// Write a C# program to find power of a number

using System;
namespace FindPowerOfANumber{
    class PowerOfANumber{
        static void Main(string[] args){
            Console.WriteLine("Enter the base number");
            int baseNum = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the power number");
            int powerNum = int.Parse(Console.ReadLine());
            Console.WriteLine(Math.Pow(baseNum, powerNum));
        }
    }
}
```

### C++

```cpp
// Write a C++ program to find power of a number

// To find the power of a number...
#include <bits/stdc++.h>
#define ll long long // For typing ease.
using namespace std;

int main(){
    ll n;   cin>>n; //Base
    ll p;   cin>>p; //Power

    //Using std function:
    // cout<<pow(n,p)<<endl;

    // Using loops:
    ll product = 1;
    for(int i=0;i<p;i++){
        product *= n;
    }
    cout<<product<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to find power of a number

import 'dart:math';
void main() {
  print(pow(2, 3));
}
```

### F#

```fsharp
// Write a F# program to find power of a number

let number = 2
let power = pown number 3
printfn "%A" power
```

### Go

```go
// Write a Go program to find power of a number

package main

import (
	"fmt"
	"math"
)

func main() {
	var base int
	var exponent int
	fmt.Scanf("%d", &base)
	fmt.Scanf("%d", &exponent)
	answer := math.Pow(float64(base), float64(exponent))
	fmt.Println(answer)
}
```

### Haskell

```haskell
-- Write a Haskell program to find power of a number

main :: IO()
main = do
   let base = 2
   let expo = 3
   print (show base ++ " raised to the power of " ++ show expo ++ " is:")
   print (base^expo)
```

### Java

```java
// Write a Java program to find power of a number

import java.util.Scanner;

class FindPowerOfANumber {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = scanner.nextInt();
        System.out.print("Enter the power: ");
        int power = scanner.nextInt();

        if(power < 0 || number < 0){
            System.out.println("Invalid input/Power can't be negative");
        } else {

            System.out.println(number + "^" + power + " = " + findPower(number, power));
        }
    }

    private static long findPower(int number, int power) {
        if(power == 0){
            return 1;
        } else {
            return (long) Math.pow(number, power);
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find power of a number

const powerOfNumber = (num, power) => {
  if (power < 0 || num < 0) {
    return "Invalid Input";
  } else if (power == 0) {
    return 1;
  } else {
    return Math.pow(num, power);
  }
};

console.log(powerOfNumber(2, 3));
console.log(powerOfNumber(2, 0));
console.log(powerOfNumber(2, -3));
```

### Julia

```julia
# Write a Julia program to find power of a number

print("Enter first number : ")
a = parse(Int, readline(stdin))
print("Enter second number : ")
b = parse(Int, readline(stdin))
println("Power of given number: ", a ^ b)
```

### Kotlin

```kotlin
// Write a Kotlin program to find power of a number

fun main(args: Array<String>) {
    val base = 2
    val powerRaised = 3
    val result = power(base, powerRaised)

    println("$base^$powerRaised = $result")
}

fun power(base: Int, powerRaised: Int): Int {
    if (powerRaised != 0)
        return base * power(base, powerRaised - 1)
    else
        return 1
}
```

### Perl

```perl
# Write a Perl program to find power of a number

#!/usr/bin/perl
use warnings;
use strict;
print "Enter a number : ";
my $number = <STDIN>;
print "Enter the power : ";
my $power = <STDIN>;
print $number**$power, "\n";
```

### PHP

```php
// Write a PHP program to find power of a number

<?php

function powerOfNumber($num, $power) {
  if($num < 0 || $power < 0) {
    return "Invalid Input";
  } else if ($power == 0) {
    return 1;
  } else {
    return pow($num, $power);
  }
}

echo powerOfNumber(2, 3);
echo powerOfNumber(2, -3);
echo powerOfNumber(2, 0);

?>
```

### Python

```python
# Write a Python program to find power of a number

# Program for finding the power of number

# Input a- number , n-power
# Output a^n

import math

a, n = list(map(float, input().split()))

print(round(math.pow(a, n), 3))
```

### R

```r
# Write a R program to find power of a number

x = 2
y = 3
cat("Power of the given number  : ", x**y)
```

### Ruby

```ruby
# Write a Ruby program to find power of a number

module Power

  def self.power(num, pow)
    num**pow

    # # Another Way
    # result = num
    # (pow-1).times { |i| result *= num }
    # result
  end

end

puts Power.power(2, 3) # => 8
```

### Rust

```rust
// Write a Rust program to find power of a number

fn main() {
    // Get the base and exponent from the user
    let base = 2;
    let exponent = 3;

    // Calculate the result
    let result = base.pow(exponent);

    // Print the result
    println!("{}^{} = {}", base, exponent, result);
}
```

### Scala

```scala
// Write a Scala program to find power of a number

import scala.io.StdIn._;

object powerOfNumber {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        println("Enter the power : ");
        var p = readLine().toInt;
        var result = scala.math.pow(n,p);
        println("Power of the given number : "+result);
    }
}
```

### Swift

```swift
// Write a Swift program to find power of a number

import Swift
import Foundation

print("Enter number: ")
var number = Int(readLine()!)!

print("Enter power: ")
var power = Int(readLine()!)!

var result = 1
for val in 1...power {
  result = result * number
}

print("Result: ", result)
```

### TypeScript

```typescript
// Write a TypeScript program to find power of a number

const powerOfNumber = (num: number, power: number): number => {
  return Math.pow(num, power);
};

console.log(powerOfNumber(2, 3));
```

## Similar programs

- [Find Power Of A Number By Recursion](/program/find-power-of-a-number-by-recursion)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Square Of A Number](/program/find-square-of-a-number)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Check Prime Number](/program/check-prime-number)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Check Armstrong Number](/program/check-armstrong-number)
- [Find Negative Of A Number](/program/find-negative-of-a-number)
- [Find Average Of Digits Of A Number](/program/find-average-of-digits-of-a-number)
