---
title: "Convert Feet To Inches"
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
    "champati-v",
    "RiteshK-611",
    "jacksonmcafee",
    "Preetiraj3697",
    "esivakumar18",
    "anandfresh",
    "vedantpople4",
    "hi-Kartik2004",
    "sahdev77",
    "hugosmoreira",
    "anafvana",
    "Sttormx",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5596
description: "Write a program to convert feet to inches."
---

## Table of contents

## Write a program to convert feet to inches

1 foot = 12 inches

```
Input  : 5
Output : 60
```

---

### C

```c
// Write a C program to convert feet to inches

#include <stdio.h>

int main(void) {
  double feet;
  double inches;


  printf("Enter the number of feet: ");
  scanf("%lf", &feet);


  inches = feet * 12;


  printf("%.2lf feet is equal to %.2lf inches.\n", feet, inches);

  return 0;
}
```

### C#

```csharp
// Write a C# program to convert feet to inches

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet:");
    double feet = Convert.ToDouble(Console.ReadLine());
    double inches = feet * 12;
    Console.WriteLine(feet + " feet is "+ inches + " inches");
  }
}
```

### C++

```cpp
// Write a C++ program to convert feet to inches

// This programme converts feet to inches.
#include <bits/stdc++.h>
using namespace std;

long long convertFeetToInch(long long n){
    long long ans = n*12;
    return ans;
}

int main(){
    long long input;    cin>>input;
    cout<<convertFeetToInch(input)<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to convert feet to inches

import 'dart:io';

void main() {
  print('Enter value in feets:');
  String? input = stdin.readLineSync()!;
  double result = (double.parse(input)) * 12;
  print(result.toStringAsFixed(2));
}
```

### F#

```fsharp
// Write a F# program to convert feet to inches

open System

let main() =
    Console.Write("Enter value in feet: ")
    let feet = Console.ReadLine()
    let inches = float feet * 12.0
    Console.Write("{0} feet equals {1} inches\n", feet, inches)
main()
```

### Go

```go
// Write a Go program to convert feet to inches

package main

import "fmt"

func feet_to_inches(feet float32) {
	inches := feet * 12
	fmt.Printf("%f inches",inches)
    return
    }

func main() {
	var number float32
	fmt.Printf("Please provide the value in feet: ")
	fmt.Scanln(&number)
	feet_to_inches(number)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert feet to inches

module Main where

feetToInches :: Int -> Int
feetToInches i = i * 12

main :: IO ()
main = do
  -- Read a value from the user
  putStrLn "Enter a value in feet:"
  feet <- readLn
  -- Convert the value to inches and print the result
  let inches = feetToInches feet
  putStrLn $ show inches ++ " inches"
```

### Java

```java
// Write a Java program to convert feet to inches

import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the feet value: ");
	    Scanner sc=new Scanner(System.in);
	    int feet=sc.nextInt();
	    int inches = feet*12;
	   System.out.print(feet+" feet is "+inches+ " inches");

	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert feet to inches

let input = prompt("Please Enter the foot Value");
let result = parseInt(input) * 12;
console.log(result);
```

### Julia

```julia
# Write a Julia program to convert feet to inches

println("Enter value in feet: ")
feet = readline()
feet = parse(Int, feet)
inches = feet * 12
println(feet, " feet equals ", inches, " inches")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert feet to inches

fun main() {
    print("Enter Feet : ")
    println()
    var input = readLine()

    println("$input feet = " + ConvertFeetToInches(input!!.toDouble()) + " inches")

}

private fun ConvertFeetToInches(feet: Double): Double {
    var inches = feet * 12
    return inches
}
```

### Perl

```perl
# Write a Perl program to convert feet to inches

print "Enter the feet value : ";
my $inch = <STDIN> ;

my $res = feet2Inches($inch);
print "Inch conversion for the given feet : $res inches";

sub feet2Inches
{
    my ($x) = @_;
    my $res = $x * 12;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to convert feet to inches

<?php

function feet2Inches($feet) {
  return $feet * 12;
}

echo(feet2Inches(5));

?>
```

### Python

```python
# Write a Python program to convert feet to inches

input_value = int(
    input("Please Enter The Number In Feet/Foot To Be Converted in Inches: ")
)
modifier = 12
value_in_inches = input_value * modifier
print(f"{input_value} Feet/Foot is {value_in_inches} Inches")
```

### R

```r
# Write a R program to convert feet to inches

# Program to convert feet into inches
# April 22, 2023, Jackson Mcafee, @jacksonmcafee on GH
# Meant to be run in interactive mode, can be run as non-interactive w/ addition of CLI

# Define function feet_to_inches()
# Takes parameter of feet (as double), returns inches (as int)
# as.integer() will round result down
feet_to_inches <- function(feet) {
    return (as.integer(feet * 12))
}

# Example usage, get user input as numeric and cast as double
feet <- readline(prompt="Input: ")
feet <- as.double(feet)

# Convert user input to inches, then use cat() to print result
inches <- feet_to_inches(feet)
cat("Output:", inches, "\n")
```

### Ruby

```ruby
# Write a Ruby program to convert feet to inches

puts "Please enter feet"

feet = gets.to_f
inches = feet * 12

puts inches.round(2).to_s.sub(/\.?0+$/, '').to_s + " inches"
```

### Rust

```rust
// Write a Rust program to convert feet to inches

fn main() {
    // Read the input value
    let feet: f64 = 5.0;

    // Convert feet to inches
    let inches = feet * 12.0;

    // Print the result
    println!("{} feet is equal to {} inches", feet, inches);
}
```

### Scala

```scala
// Write a Scala program to convert feet to inches

import scala.io.StdIn._;

object feetToInches {
  def main(args:Array[String]):Unit={
    println("Enter the feet value : ");
    var feet = readLine();
    var inches = feet.toInt * 12;
    println(feet+" feet is "+inches+" inches");
  }
}
```

### Swift

```swift
// Write a Swift program to convert feet to inches

//Program to convert feet to inches.
while (true) {
    print("Enter length in feet: ")
if let feet = Double(readLine()!) {       //checks if the input is a valid number or not.
    let inches = feet * 12.0              // 1 feet = 12 inches
    print("\(feet) feet is equal to \(inches) inches.")
    break
}
else {                                    //If the input is not valid, it will ask to input again.
    print("Please enter a valid number.")
}
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert feet to inches

const ConvertFeetToInches = (Feet: number): number => {
  return Feet * 12;
};
export default ConvertFeetToInches;
```

## Similar programs

- [Convert Feet To Inches](/program/convert-feet-to-inches)
- [Convert Inches To Miles](/program/convert-inches-to-miles)
- [Convert Miles To Inches](/program/convert-miles-to-inches)
- [Convert Centimeters To Inches](/program/convert-centimeters-to-inches)
- [Convert Inches To Centimeters](/program/convert-inches-to-centimeters)
- [Convert Feet To Miles](/program/convert-feet-to-miles)
- [Convert Miles To Feet](/program/convert-miles-to-feet)
- [Convert Feet To Centimeters](/program/convert-feet-to-centimeters)
- [Convert Centimeters To Feet](/program/convert-centimeters-to-feet)
- [Convert Hours To Minutes](/program/convert-hours-to-minutes)
