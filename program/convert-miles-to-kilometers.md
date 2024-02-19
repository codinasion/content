---
title: "Convert Miles To Kilometers"
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
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "sagi403",
    "ShivamK2002",
    "rafaover",
    "rksp25",
    "joao-vitor-souza",
    "ynbh",
    "sumeetk10",
    "rahmat-dev",
    "EniolaAdemola",
    "jaypavasiya",
    "mak650650",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1102
description: "Write a program to convert miles to kilometers."
---

## Table of contents

## Write a program to convert miles to kilometers

1 mile = 1.609344 kilometers

```
Input  : 5
Output : 8.04672
```

---

### C

```c
// Write a C program to convert miles to kilometers

#include <stdio.h>

int convertMiles(float miles){
    float output = miles * 1.609;
    printf("Output  : %.5lf", output);
}

int main() {
    printf(" C program to convert miles to kilometers \n1 mile = 1.609 kilometers \n");
    float input = 5.0;
    printf("Input  : %.2f \n", input);
    convertMiles(input);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert miles to kilometers

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double km = miles * 1.60;
    Console.WriteLine(miles+" miles is "+km+" kilometres");
  }
}
```

### C++

```cpp
// Write a C++ program to convert miles to kilometers

/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float miles;
    cout << "\n\nEnter the distance in miles -> ";
    cin >> miles;

    cout << "Distance in kilometers -> " << miles * 1.609 << endl
         << endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert miles to kilometers

import 'dart:io';
void main(){
  print("Enter the miles :");
  double miles = double.parse(stdin.readLineSync()!);
  double km = miles * 1.609 ;
  print('Equivalent kilometer : $km');
}
```

### F#

```fsharp
// Write a F# program to convert miles to kilometers

let milesToKilometer miles : float =
  miles * 1.609

let km = milesToKilometer 5.0

printfn "Equivalent Kilometer : %f" km
```

### Go

```go
// Write a Go program to convert miles to kilometers

package main

import  "fmt"

func miles2kilometers(miles float64) float64 {
   return miles * 1.609344
}

func main() {
   fmt.Println( miles2kilometers(5))
}
```

### Java

```java
// Write a Java program to convert miles to kilometers

import java.util.Scanner;

public class ConvertMilesToKilometers{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter distance (Miles):");
            int mile = sc.nextInt();

            double km = mile*(1.609);

            System.out.println("Distance in mile:" +km);
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert miles to kilometers

function milestoKilometers(miles) {
  const kilometers = miles * 1.609;
  return kilometers;
}
console.log(milestoKilometers(5));
```

### Julia

```julia
# Write a Julia program to convert miles to kilometers

print("Enter the miles: ")
miles = parse(Float64, readline(stdin))
km =  miles * 1.609
println("Equivalent Kilometers: ", km)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert miles to kilometers

fun main() {
    print("Enter Miles : ")
    println()
    var input = readLine()

    println("$input miles = " + ConvertMilesToKilometers(input!!.toDouble()) + " kilometers")

}

private fun ConvertMilesToKilometers(miles: Double): Double {
    var kilometers = miles * 1.609

    return kilometers
}
```

### Perl

```perl
# Write a Perl program to convert miles to kilometers

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $km = $miles * 1.609;
print $miles." miles is ".$km." kilometers", "\n";
```

### PHP

```php
// Write a PHP program to convert miles to kilometers

<?php

function convert_miles_to_kilometers($miles)
{
	return $miles * 1.60934;
}

echo convert_miles_to_kilometers(5);
```

### Python

```python
# Write a Python program to convert miles to kilometers

# asking for input
distancemiles = input(f"Enter the distance(in miles):")
totaldistance = 0.0
distancekilometer = 0.0

# checking for only digit in input
if distancemiles.isdigit():
    # converting string type to floating type
    distancemiles = float(distancemiles)
    # calculating on basis of formula
    distancekilometer = distancemiles * 1.609
    # printing the output
    print(f"Distance in kilometer is: {distancekilometer} km")

# user type input other than digit
else:
    print(f"Please enter valid input.")
```

### R

```r
# Write a R program to convert miles to kilometers

miles = 5
kilometers = miles * 1.609344
cat("kilometers: ", kilometers)
```

### Ruby

```ruby
# Write a Ruby program to convert miles to kilometers

print "Insert the number of miles: "

miles = gets.chomp.to_i
kilometers = miles * 1.609

puts "Output: #{kilometers} km"
```

### Rust

```rust
// Write a Rust program to convert miles to kilometers

fn convert_miles_to_km(miles: f32) -> f32 {
    return miles*1.609;
}

fn main() {
    let kilometers = convert_miles_to_km(5 as f32);
    println!("{}", kilometers);
}
```

### Scala

```scala
// Write a Scala program to convert miles to kilometers

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val miles = scala.io.StdIn.readDouble();
	  println("kilometers: " + miles * 1.60934);
	}
}
```

### Swift

```swift
// Write a Swift program to convert miles to kilometers

import Swift
import Foundation

print("Enter miles: ")
var miles = Double(readLine()!)!
print("Kilometers: ", miles * 1.609)
```

### TypeScript

```typescript
// Write a TypeScript program to convert miles to kilometers

const ConvertMilesToKilometers = (mile: number): number => {
  return mile * 1.60934;
};

console.log("Input: 5");
console.log("OutPut:", ConvertMilesToKilometers(5));
```

## Similar programs

- [Convert Kilometers To Miles](/program/convert-kilometers-to-miles)
- [Convert Feet To Miles](/program/convert-feet-to-miles)
- [Convert Miles To Feet](/program/convert-miles-to-feet)
- [Convert Miles To Inches](/program/convert-miles-to-inches)
- [Convert Inches To Miles](/program/convert-inches-to-miles)
- [Convert Meters To Miles](/program/convert-meters-to-miles)
- [Convert Miles To Meters](/program/convert-miles-to-meters)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
