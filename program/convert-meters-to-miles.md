---
title: "Convert Meters To Miles"
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
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "Osher160",
    "rksp25",
    "joao-vitor-souza",
    "kangjung",
    "sudiptog81",
    "chinmaykumbhare",
    "Anushka-codergirl",
    "MadhuS-1605",
    "MusabMuhie",
    "NidishM",
    "madil89",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:06:11Z
trackId: 277
description: "Write a program to convert meters to miles."
---

## Table of contents

## Write a program to convert meters to miles

1 mile = 1609 meters

```
Input  : 8046.72
Output : 5
```

---

### C

```c
// Write a C program to convert meters to miles

#include <stdio.h>
#include <math.h>

int main()
{
    // Declare variables
    int meter;
    double miles;

    printf("Enter distance in meters : ");
    scanf("%d", &meter);

    // Convert meter to miles
    miles = meter * 0.00062137119;

    // Using Round off  - nearest integer value
    int result = round(miles);

    // Distance in miles
    printf("\nDistance in miles : %d\n", result);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert meters to miles

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the meter value :");
    double meter = Convert.ToDouble(Console.ReadLine());
    double miles =  Math.Round(meter/1609, 2);
    Console.WriteLine(meter+" meter is "+ miles+" miles");
  }
}
```

### C++

```cpp
// Write a C++ program to convert meters to miles

#include <iostream>  // cin , cout

int ConvertMetersToMiles(float meters);

int main()
{
    float a = 0;

    std::cout << "please enter a value:" << std::endl;

    std::cin >> a;

    std::cout << ConvertMetersToMiles(a);

    return 0;
}

int ConvertMetersToMiles(float meters)
{
    return meters / 1609;
}
```

### Dart

```dart
// Write a Dart program to convert meters to miles

import 'dart:io';
void main(){
  print("Enter the meters :");
  var meter = double.parse(stdin.readLineSync());
  var miles = meter/1609;
  print('Equivalent miles : $miles');
}
```

### F#

```fsharp
// Write a F# program to convert meters to miles

let meterToMiles meter : float =
  meter / 1609.00

let miles =  meterToMiles 8046.72

printfn "Equivalent miles : %f" miles
```

### Go

```go
// Write a Go program to convert meters to miles

package main

import (
	"fmt"
)

func main() {
	var meter int
	fmt.Println("Enter meter(s):")
  fmt.Scan(&meter)
  fmt.Println("Mile(s) for given meter is:", (float32(meter) / 1609))
}
```

### Java

```java
// Write a Java program to convert meters to miles

import java.util.Scanner;

public class ConvertMetersToMiles {
	public static void main(String[] args) throws Exception {
		System.out.print("input   : ");
		Scanner sc = new Scanner(System.in);
		Double meter = sc.nextDouble();
		sc.close();
		System.out.println("ouput   : " + Math.round(meter / 1609));
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert meters to miles

// program to convert meters to miles (1 mile = 1609.344 meters)

function convertMetersToMiles(meters) {
  return meters / 1609.344;
}

// const userInput=prompt('Input: ')
// alert(convertMetersToMiles(userInput))

const userInput = 8046.72;
console.log("input  : " + userInput);
console.log("output : " + convertMetersToMiles(userInput));
```

### Julia

```julia
# Write a Julia program to convert meters to miles

println("Enter value in meters: ")
meters = readline()
meters = parse(Float64, meters)
miles = round((meters / 1609); digits = 2)
println(meters, " meters equals ", miles, " miles")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert meters to miles

fun main() {
    print("Enter Meters : ")
    println()
    var input = readLine()

    println("$input meters = " + ConvertMetersToMiles(input!!.toDouble()) + " miles")

}

private fun ConvertMetersToMiles(meters: Double): Double {
    var miles = meters / 1609.344

    return miles
}
```

### Perl

```perl
# Write a Perl program to convert meters to miles

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the metre : ";
my $metre = <STDIN>;
my $miles = $metre/1609;
print "Equivalent Miles : ".$miles, "\n";
```

### PHP

```php
// Write a PHP program to convert meters to miles

<?php

fscanf(STDIN, "%f", $meters);
$miles = $meters / 1609;

echo round($miles, 2) . "\n";

?>
```

### Python

```python
# Write a Python program to convert meters to miles

# --------- Program to convert meters to miles ---------#


# Covert meters to miles (1 mile = 1609 meters)
def metersToMiles(meter_value):
    return int(meter_value // 1609)


# User input
input_in_meters = float(input("Input  : "))
output_in_miles = metersToMiles(input_in_meters)
print("Output :", output_in_miles)
```

### R

```r
# Write a R program to convert meters to miles

convertMetersToMiles <- function(meters) {
  miles <- meters / 1609
  return(miles)
}

# Example usage
inputMeters <- 8046.72
outputMiles <- convertMetersToMiles(inputMeters)

cat("Input:", inputMeters, "meters\n")
cat("Output:", outputMiles, "miles\n")
```

### Ruby

```ruby
# Write a Ruby program to convert meters to miles

def convertMetersToMiles(meters)
  meters / 1609.344
end

def strip_trailing_zero(n)
  n.to_s.sub(/\.?0+$/, '')
end

print 'Input  : '
meters = gets.chomp.to_f
miles = convertMetersToMiles(meters)
puts "Output : #{strip_trailing_zero(miles)}"
```

### Rust

```rust
// Write a Rust program to convert meters to miles

use std::io;
use std::process;

fn main() {
    let mut input = String::new();
    println!("Please enter meters: ");
    io::stdin().read_line(&mut input).unwrap();
    let meters = convert_str_to_float(input);
    let miles = convert_to_miles(meters);
    println!("Miles: {}", miles);
}

fn convert_str_to_float(input: String) -> f32 {
    input.trim().parse::<f32>().unwrap_or_else(|_| {
        eprintln!("- Please enter a valid input!");
        drop(input);
        process::exit(1);
    })
}

fn convert_to_miles(meters: f32) -> f32 {
    meters * 0.0006213712
}
```

### Scala

```scala
// Write a Scala program to convert meters to miles

import scala.io.StdIn._;

object metresToMiles {
  def main(args:Array[String]):Unit={
    println("Enter the metre value : ");
    var metres = readLine();
    var miles = metres.toDouble / 1609;
    println(metres+" metres is "+miles+" miles");
  }
}
```

### Swift

```swift
// Write a Swift program to convert meters to miles

import Swift
import Foundation

print("Enter meters: ")
var meters = Double(readLine()!)!
print("Miles: ", meters / 1609.34)
```

### TypeScript

```typescript
// Write a TypeScript program to convert meters to miles

export const convertMetersToMiles = (meters: number): number =>
  meters / 1609.344;

const meters = 8046.72;
console.log("Input  : " + meters);
console.log("Output : " + convertMetersToMiles(meters));
```
