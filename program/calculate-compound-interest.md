---
title: "Calculate Compound Interest"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "Preetraj2002",
    "AshitaSingamsetty",
    "anandfresh",
    "esivakumar18",
    "ShivamK2002",
    "jfinley6",
    "hi-Kartik2004",
    "sharvil1205",
    "joao-vitor-souza",
    "grraghav120",
    "shivampipalwa",
    "KaptainCS3",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1354
description: "Write a program to calculate compound interest."
---

## Table of contents

## Write a program to calculate compound interest

Compound interest = principal amount \* (1 + rate of interest) ^ time

```
Principal : 1000
Rate      : 10
Time      : 5

Compound interest : 1610.51
```

---

### C

```c
// Write a C program to calculate compound interest

#include <stdio.h>
#include <math.h>
int main()
{
    float CI, rate, PA, time;
    printf("Enter principal amount :");
    scanf("%f", &PA);
    printf("Enter the rate :");
    scanf("%f", &rate);
    printf("Enter time :");
    scanf("%f", &time);
    // formula to calculate compound interest
    CI = PA * (pow((1 + rate / 100), time));

    printf("Compound interest : %0.2f\n", CI);
    return 0;
}
```

### C#

```csharp
// Write a C# program to calculate compound interest

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class compoundInterest
{
    static void Main(string[] args)
    {
        float amount, rate, intrest, time, ci, a;
        Console.Write("Enter the principal amount : ");
        amount = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter the interest rate : ");
        rate = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter the period in years: ");
        time = Convert.ToInt32(Console.ReadLine());

         intrest = 1+(rate/100);
         ci = 1;
         for(a = 1; a <= time; a++)
            ci = ci * intrest;

         ci = amount * ci - amount;

         Console.WriteLine("Your compound interest is : "+ ci);

    }
}
```

### C++

```cpp
// Write a C++ program to calculate compound interest

#include<bits/stdc++.h>
using namespace std;

int main()
{
    // declaring variables
    // p=Principal amount
    // r=Rate of interest
    // t=time
    // ci=compound interest
    long double p,r,t,ci;

    // take input
    cout<<"Enter Principal amount : ";
    cin>>p;
    cout<<"\n";
    cout<<"Enter Rate of interest : ";
    cin>>r;
    cout<<"\n";
    cout<<"Enter time : ";
    cin>>t;
    cout<<"\n";

    // Compound interest = principal amount * (1 + rate of interest) ^ time
    ci= p * pow((1+(r/100)),t);

    cout<<"Compound Interest = ";
    cout<<ci;

}
```

### Dart

```dart
// Write a Dart program to calculate compound interest

import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the principal :");
  double principal = double.parse(stdin.readLineSync()!);
  print("Enter the interest :");
  double interest = double.parse(stdin.readLineSync()!);
  print("Enter the time :");
  double time = double.parse(stdin.readLineSync()!);
  double ci = principal *  pow(1 + interest/100, time);
  print('Area of circle : $ci');
}
```

### F#

```fsharp
// Write a F# program to calculate compound interest

let interest = 10.0
let time = 5.0
let principal = 1000.0

let compound principal interest time =
      principal * ((1.0 + interest/100.0) ** (time))

let res = compound principal interest time

printfn "Compound interest : %.2f" res
```

### Go

```go
// Write a Go program to calculate compound interest

package main

import(
	"fmt"
	"math"
)

func calculateCompoundInterest(principal, rate, time float64) float64{
	interest := principal*math.Pow(1+(rate/100),time)
	return interest
}

func main(){
	var principal,rate,time float64

	fmt.Print("Principal : ")
	fmt.Scanln(&principal)

	fmt.Print("Rate : ")
	fmt.Scanln(&rate)

	fmt.Print("Time : ")
	fmt.Scanln(&time)

	interest := calculateCompoundInterest(principal,rate,time)

	fmt.Printf("Compound interest : %.2f\n",interest)
}
```

### Java

```java
// Write a Java program to calculate compound interest

import java.util.*;
class compoundInterest
{
   public static void main (String args[])
   {
      double principal, rate, time, compound_interest;
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter Principle amount : ");
      principal = sc.nextInt();
      System.out.print("Enter Interest rate : ");
      rate = sc.nextInt();
      System.out.print("Enter Time period in years : ");
      time = sc.nextInt();
      compound_interest = principal * (Math.pow((1 + rate / 100), time));
      System.out.println("The Compound Interest is : " + compound_interest);
   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to calculate compound interest

function calculateCompoundInterest(principal, rate, time) {
  const compoundFactor = 1 + rate / 100;

  const compoundInterest = principal * Math.pow(compoundFactor, time);
  return compoundInterest;
}
console.log(calculateCompoundInterest(1000, 10, 5));
```

### Julia

```julia
# Write a Julia program to calculate compound interest

print("Enter the principal: ")
principal = parse(Float64, readline(stdin))
print("Enter the interest: ")
interest = parse(Float64, readline(stdin))
print("Enter the time: ")
time = parse(Float64, readline(stdin))
ci =  principal * ((1 + interest/100) ^ time)
println("Compund Interest: ", ci)
```

### Perl

```perl
# Write a Perl program to calculate compound interest

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the principal amount : ";
my $principal = <STDIN>;
print "Enter the rate of interest : ";
my $interest = <STDIN>;
print "Enter the time : ";
my $time = <STDIN>;
my $compoundInterest = $principal  * ((1 + $interest) ** $time);
print "Compound Interest :".$compoundInterest, "\n";
```

### PHP

```php
// Write a PHP program to calculate compound interest

<?php
function compoundInterest($principal, $interest, $time) {
   $compoundInterest =  $principal * pow((1+$interest), $time);
   return $compoundInterest;
}
echo compoundInterest(1000, 10, 5);
?>
```

### Python

```python
# Write a Python program to calculate compound interest

principal = int(input())
rate = int(input())
time = int(input())
print(round(principal * ((1 + rate / 100) ** time), 2))

# Contributed by Raghav Garg
```

### R

```r
# Write a R program to calculate compound interest

# Function to calculate compound interest
calculate_compound_interest <- function(principal, rate, time) {
    compound_interest <- principal * (1 + rate*0.01)^time
    return(compound_interest)
}

# Take user input for principal amount, rate of interest, and time
principal <- as.numeric(readline("Principal: "))
rate <- as.numeric(readline("Rate : "))
time <- as.numeric(readline("Time : "))

# Validate input
if (!is.numeric(principal) || !is.numeric(rate) || !is.numeric(time)) {
    cat("Invalid input. Please enter valid numeric values.")
} else {
    # Calculate compound interest using the function
    compound_interest <- calculate_compound_interest(principal, rate, time)

    # Print the result
    cat("Compound Interest:", compound_interest, "\n")
}
```

### Ruby

```ruby
# Write a Ruby program to calculate compound interest

puts "Please enter principal: "
principal_input = gets.to_f
puts "Please enter rate: "
rate_input = gets.to_f
puts "Please enter time: "
time_input = gets.to_f

def calculateCompoundInterest principal, rate, time
    (principal * (1+(rate/100))**time).round(2)
end

puts calculateCompoundInterest(principal_input, rate_input, time_input)
```

### Scala

```scala
// Write a Scala program to calculate compound interest

import scala.io.StdIn._;

object compoundInterest {
  def main(args:Array[String]):Unit={
    val principal = readLine().toInt;
    println("Enter the principal amount : "+principal);
    val interest = readLine().toInt;
    println("Enter the rate of interest : "+interest);
    val time = readLine().toInt;
    println("Enter the time : "+time);
    val compoundInterest = principal * Math.pow((1 + interest), time) ;
    println("Compound Interest :"+compoundInterest);
  }
}
```

### Swift

```swift
// Write a Swift program to calculate compound interest

import Swift
import Foundation

var principal = 1000.0
var rate = 10.0
var time = 5.0

var interest = principal * pow(1 + rate/100.0, time)
print(interest)
```

### TypeScript

```typescript
// Write a TypeScript program to calculate compound interest

function calculateCompoundInterest(
  principal: number,
  rate: number,
  time: number
): number {
  const compoundFactor: number = 1 + rate / 100;

  const compoundInterest: number = principal * Math.pow(compoundFactor, time);
  return compoundInterest;
}
console.log(calculateCompoundInterest(1000, 10, 5));
```

## Similar programs

- [Calculate Simple Interest](/program/calculate-simple-interest)
- [Calculate The Permutation Of N Objects Taken R At A Time](/program/calculate-the-permutation-of-n-objects-taken-r-at-a-time)
- [Calculate The Combination Of N Objects Taken R At A Time](/program/calculate-the-combination-of-n-objects-taken-r-at-a-time)
- [Convert Time From 12 Hour To 24 Hour Format](/program/convert-time-from-12-hour-to-24-hour-format)
- [Convert Time From 24 Hour To 12 Hour Format](/program/convert-time-from-24-hour-to-12-hour-format)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Find The Smallest Three Elements In An Array](/program/find-the-smallest-three-elements-in-an-array)
- [Swap Two Numbers](/program/swap-two-numbers)
- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
