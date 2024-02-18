---
title: "Calculate Simple Interest"
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
    "Shaileshalluri",
    "harshraj8843",
    "Ishay1997",
    "anandfresh",
    "StarKnightt",
    "esivakumar18",
    "bnzone",
    "R0-H-1T",
    "yashasvini121",
    "vedantpople4",
    "0ME9A",
    "dineshlalam15",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:02:36Z
trackId: 5293
description: "Write a program to calculate simple interest."
---

## Table of contents

## Write a program to calculate simple interest

Simple interest = (principal amount _ rate of interest _ time) / 100

```
Principal : 1000
Rate      : 10
Time      : 5

Simple interest : 500
```

---

### C

```c
// Write a C program to calculate simple interest

//Simple interset program


# include <stdio.h>
# include <conio.h>

int main(){

    int principal, rate, time, interest;

    printf("Enter the principal: ");
    scanf("%d", &principal);

    printf("Enter the rate: ");
    scanf("%d", &rate);

    printf("Enter the time: ");
    scanf("%d", &time);

    interest = principal * rate * time / 100;
    printf("Simple interest is %d", interest);

    return 0;
}
```

### C#

```csharp
// Write a C# program to calculate simple interest

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the principal :");
    double inches = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the rate of interest :");
    double interest = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the time :");
    double time = Convert.ToDouble(Console.ReadLine());
    double simpleInterest = (principal *  interest * time ) / 100;
    Console.WriteLine("Simple Interest : "+ simpleInterest);
  }
}
```

### C++

```cpp
// Write a C++ program to calculate simple interest

#include <iostream>
using namespace std;

int main(){
    float p, r, t, si;
    cout << "Enter the principal amount: ";
    cin >> p;
    cout << "Enter the rate of interest: ";
    cin >> r;
    cout << "Enter the time period: ";
    cin >> t;
    si = (p * r * t) / 100;
    cout << "Simple interest is: " << si;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to calculate simple interest

import 'dart:io';
void main(){
  print("Enter the principal amount :");
  var principal=int.parse(stdin.readLineSync());
  print("Enter the rate of interest :");
  var interest=int.parse(stdin.readLineSync());
  print("Enter the time :");
  var time =int.parse(stdin.readLineSync());
  var simple_interest = (principal * interest * time )/100;
  print(simple_interest);
}
```

### F#

```fsharp
// Write a F# program to calculate simple interest

let simpleInterest principal interest time : float =
   principal * interest * time / 100

let si = simpleInterest 1000.00 10.00 5.00

printfn "Simple Interest : %f" si
```

### Go

```go
// Write a Go program to calculate simple interest

package main

import "fmt"

func main() {
	var amount, time, rate int
	fmt.Scanf("%d", &amount)
	fmt.Scanf("%d", &time)
	fmt.Scanf("%d", &rate)
	simpleInterest := (amount * time * rate) / 100
	fmt.Println(simpleInterest)
}
```

### Haskell

```haskell
-- Write a Haskell program to calculate simple interest

calculateSimpleInterest :: Double -> Double -> Double -> Double
calculateSimpleInterest principal rate time =
    (principal * rate * time) / 100

main :: IO ()
main = do
    putStrLn "Enter the principal amount:"
    principalInput <- getLine
    let principal = read principalInput :: Double

    putStrLn "Enter the rate of interest:"
    rateInput <- getLine
    let rate = read rateInput :: Double

    putStrLn "Enter the time (in years):"
    timeInput <- getLine
    let time = read timeInput :: Double

    let interest = calculateSimpleInterest principal rate time
    putStrLn $ "Simple interest: " ++ show interest
```

### Java

```java
// Write a Java program to calculate simple interest

import java.util.Scanner;

public class CalculateSimpleInterest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter");
        System.out.print("Principle Amount: ");
        double p = sc.nextDouble();
        System.out.print("Rate of Interest: ");
        double r = sc.nextDouble();
        System.out.print("Time(in Days): ");
        double t = sc.nextDouble();
        System.out.println("Simple Interest: " +simpleInterest(p,r,t));
    }
    static double simpleInterest(double principleAmount, double rate, double time){
        return (principleAmount * rate * time)/100;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to calculate simple interest

const simpleInterest = (principal, interest, time) => {
  return (principal * interest * time) / 100;
};

console.log(simpleInterest);
```

### Julia

```julia
# Write a Julia program to calculate simple interest

# assign values to variables
principal = 1000
rate = 10
time = 5

# calculate simple interest
simple_interest = (principal * rate * time) / 100

# print the result
println("Simple interest: ", simple_interest)
```

### Kotlin

```kotlin
// Write a Kotlin program to calculate simple interest

fun main(args: Array<String>) {
    val principal = 1000
    val rate = 10
    val time = 5
    val interest = (principal * rate * time) / 100

    println(interest)
}
```

### Perl

```perl
# Write a Perl program to calculate simple interest

print "Enter the principal: ";
my $principal = <STDIN> ;

print "Enter the rate of interest: ";
my $interest = <STDIN> ;

print "Enter the time: ";
my $time = <STDIN> ;

my $res = simpleInterest($principal, $interest);
print "Simple Interest : $res";

sub simpleInterest
{
    my ($x) = @_;
    my $res = ($principal * $interest * $time) / 100;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to calculate simple interest

<?php

function simpleInterest($principal, $interest, $time){
    return ($principal * $interest * $time)/100;
}

echo simpleInterest(1000, 10, 5);

?>
```

### Python

```python
# Write a Python program to calculate simple interest

def simpleInterest():
    principal = int(input("Enter principal:- "))
    interest = int(input("Enter interest:- "))
    time = int(input("Enter time:- "))

    return (principal * interest * time) / 100


print(simpleInterest())
```

### R

```r
# Write a R program to calculate simple interest

principal = 1000
interest = 10
time = 5
simpleInterest = (principal * interest * time)/100
cat("Simple interest : ", simpleInterest)
```

### Ruby

```ruby
# Write a Ruby program to calculate simple interest

def simple_interest(principal , interest , time)
  (principal * interest * time) / 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the Principal amount : '
  principal = gets.chomp.to_i
  print 'Please enter the Rate of Interest : '
  interest = gets.chomp.to_i
  print 'Please enter the Time : '
  time = gets.chomp.to_i
  puts "Simple Interest : #{simple_interest(principal , interest , time)}"
end
```

### Rust

```rust
// Write a Rust program to calculate simple interest

fn simple_interest(principal: f32, rate: f32, time: f32) -> f32 {
    (principal * rate * time) / 100.0
}
```

### Scala

```scala
// Write a Scala program to calculate simple interest

import scala.io.StdIn._;

object simpleInterest {
    def main(args:Array[String]):Unit={
        println("Enter principal amount : ");
        var principal = readLine().toInt;
        println("Enter rate of interest : ");
        var interest = readLine().toInt;
        println("Enter the time : ");
        var time = readLine().toInt;
        var simpleInterest = (principal * interest * time)/100;
        println("Simple Interest : "+simpleInterest);
    }
}
```

### Swift

```swift
// Write a Swift program to calculate simple interest

import Swift
import Foundation

print("Enter principal: ")
var principal = Int(readLine()!)!
print("Enter rate: ")
var rate = Int(readLine()!)!
print("Enter time: ")
var time = Int(readLine()!)!
print("Simple Interest: ", (principal * rate * time)/100)
```

### TypeScript

```typescript
// Write a TypeScript program to calculate simple interest

const simpleInterest = (
  principal: number,
  interest: number,
  time: number
): number => {
  return (principal * interest * time) / 100;
};
console.log(simpleInterest(1000, 10, 5));
```
