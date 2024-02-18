---
title: "Find Volume Of A Cylinder"
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
    "anandfresh",
    "esivakumar18",
    "james-tharit",
    "leslieyip02",
    "hi-Kartik2004",
    "Edward-Regalado",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5381
description: "Write a program to find volume of a cylinder."
---

## Table of contents

## Write a program to find volume of a cylinder

Volume of cylinder = π × `Radius`^2 × `Height`

```
Radius : 2
Height : 3

Volume : 37.69911184307752
```

---

### C

```c
// Write a C program to find volume of a cylinder

#include <stdio.h>
#include <math.h>

// Function to calculate the volume of a cylinder
double volumeOfCylinder(double radius, double height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  double volume = M_PI * pow(radius, 2) * height;

  // Return the calculated volume
  return volume;
}

int main(void) {
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  double cylinderRadius = 5;
  double cylinderHeight = 10;
  double cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

  printf("Volume of cylinder = %f\n", cylinderVolume);

  return 0;
}
```

### C#

```csharp
// Write a C# program to find volume of a cylinder

using System;

namespace VolumeOfCylinder
{
    // Function to calculate the volume of a cylinder
    static double VolumeOfCylinder(double radius, double height)
    {
        // Calculate the volume using the formula:
        // V = π * r^2 * h
        double volume = Math.PI * Math.Pow(radius, 2) * height;

        // Return the calculated volume
        return volume;
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Example:
            // Calculate the volume of a cylinder with radius 5 and height 10
            double cylinderRadius = 5;
            double cylinderHeight = 10;
            double cylinderVolume = VolumeOfCylinder(cylinderRadius, cylinderHeight);

            Console.WriteLine($"Volume of cylinder = {cylinderVolume}");
        }
    }
}
```

### C++

```cpp
// Write a C++ program to find volume of a cylinder

#include <iostream>
#include <cmath>

// Function to calculate the volume of a cylinder
double volumeOfCylinder(double radius, double height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  double volume = M_PI * pow(radius, 2) * height;

  // Return the calculated volume
  return volume;
}

int main() {
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  double cylinderRadius = 5;
  double cylinderHeight = 10;
  double cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

  std::cout << "Volume of cylinder = " << cylinderVolume << std::endl;

  return 0;
}
```

### Dart

```dart
// Write a Dart program to find volume of a cylinder

import 'dart:math';

double findVolumeOfCylinder(double radius, height) =>
    pi * pow(radius, 2) * height;

void main() {
  print(findVolumeOfCylinder(2, 3)); // will return 37.69911184307752
  print(findVolumeOfCylinder(2.5, 3.746)); // will return 73.55253800217103
}
```

### F#

```fsharp
// Write a F# program to find volume of a cylinder

let cylinderVolume radius length : float =
   let pi = 3.14159
   length * pi * radius * radius

let volume = cylinderVolume 2.0 3.0

printfn "Volume of Cylinder : %f" volume
```

### Go

```go
// Write a Go program to find volume of a cylinder

package main

import "fmt"

// Function to calculate the volume of a cylinder
func volumeOfCylinder(radius float64, height float64) float64 {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  volume := math.Pi * math.Pow(radius, 2) * height

  // Return the calculated volume
  return volume
}

func main() {
  // Example:
  // Calculate the volume of a cylinder with radius 5 and height 10
  cylinderRadius := 5.0
  cylinderHeight := 10.0
  cylinderVolume := volumeOfCylinder(cylinderRadius, cylinderHeight)

  fmt.Printf("Volume of cylinder = %f\n", cylinderVolume)
}
```

### Haskell

```haskell
-- Write a Haskell program to find volume of a cylinder

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let radius = read input1 :: Float

    putStrLn "Enter height: "
    input2 <- getLine
    let height = read input2 :: Float

    let volume = pi * radius * radius * height
    putStrLn $ show (volume)
```

### Java

```java
// Write a Java program to find volume of a cylinder

public class VolumeOfCylinder {
    // Function to calculate the volume of a cylinder
    public static double volumeOfCylinder(double radius, double height) {
        // Calculate the volume using the formula:
        // V = π * r^2 * h
        double volume = Math.PI * Math.pow(radius, 2) * height;

        // Return the calculated volume
        return volume;
    }

    public static void main(String[] args) {
        // Example:
        // Calculate the volume of a cylinder with radius 5 and height 10
        double cylinderRadius = 5;
        double cylinderHeight = 10;
        double cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

        System.out.println("Volume of cylinder = " + cylinderVolume);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find volume of a cylinder

// Function to calculate the volume of a cylinder
function volumeOfCylinder(radius, height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  const volume = Math.PI * radius * radius * height;

  // Return the calculated volume
  return volume;
}
```

### Julia

```julia
# Write a Julia program to find volume of a cylinder

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
volume = 3.14 * radius * radius * height
println("Volume of cylinder: ", volume)
```

### Kotlin

```kotlin
// Write a Kotlin program to find volume of a cylinder

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val radius = scanner.nextDouble()
  val height = scanner.nextDouble()

  val volume = PI * radius * radius * height
  println(volume)
}
```

### Perl

```perl
# Write a Perl program to find volume of a cylinder

print "Enter the radius: ";
my $radius = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = volumeOfCylinder($radius, $height);
printf("Volume of Cylinder: %.3f", $res);

sub volumeOfCylinder
{
    my ($x) = @_;
    my $res = 3.1415926535 * $radius * 2 * $height;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to find volume of a cylinder

<?php

// Function to calculate the volume of a cylinder
function volumeOfCylinder($radius, $height) {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  $volume = M_PI * pow($radius, 2) * $height;

  // Return the calculated volume
  return $volume;
}

// Example:
// Calculate the volume of a cylinder with radius 5 and height 10
$cylinderRadius = 5;
$cylinderHeight = 10;
$cylinderVolume = volumeOfCylinder($cylinderRadius, $cylinderHeight);

echo "Volume of cylinder = " . $cylinderVolume . "\n";
```

### Python

```python
# Write a Python program to find volume of a cylinder

# Function to calculate the volume of a cylinder
def volume_of_cylinder(radius, height):
    # Calculate the volume using the formula:
    # V = π * r^2 * h
    volume = 3.1415 * radius * radius * height

    # Return the calculated volume
    return volume


# Example:
# Calculate the volume of a cylinder with radius 5 and height 10
if __name__ == "__main__":
    cylinder_radius = 5
    cylinder_height = 10
    cylinder_volume = volume_of_cylinder(cylinder_radius, cylinder_height)

    print(f"Volume of cylinder = {cylinder_volume}")
```

### R

```r
# Write a R program to find volume of a cylinder

radius = 2
height = 3
volume = pi * radius * radius * height
cat("Volume: ", volume)
```

### Ruby

```ruby
# Write a Ruby program to find volume of a cylinder

# Function to calculate the volume of a cylinder
def volume_of_cylinder(radius, height)
    # Calculate the volume using the formula:
    # V = π * r^2 * h
    volume = Math::PI * radius * radius * height

    # Return the calculated volume
    volume
  end

  # Example:
  # Calculate the volume of a cylinder with radius 5 and height 10
  cylinder_radius = 5
  cylinder_height = 10
  cylinder_volume = volume_of_cylinder(cylinder_radius, cylinder_height)

  puts "Volume of cylinder = #{cylinder_volume}"
```

### Rust

```rust
// Write a Rust program to find volume of a cylinder

use std::f64::consts::PI;

fn cylinder_volume(r: f64, h: f64) -> f64 {
    PI * r * r * h
}

fn main() {
    let r = 2.0;
    let h = 3.0;

    println!("{}", cylinder_volume(r, h));
}
```

### Scala

```scala
// Write a Scala program to find volume of a cylinder

// Function to calculate the volume of a cylinder
def volumeOfCylinder(radius: Double, height: Double): Double = {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  val volume = math.Pi * radius * radius * height

  // Return the calculated volume
  volume
}

// Example:
// Calculate the volume of a cylinder with radius 5 and height 10
val cylinderRadius = 5.0
val cylinderHeight = 10.0
val cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight)

println(s"Volume of cylinder = $cylinderVolume")
```

### Swift

```swift
// Write a Swift program to find volume of a cylinder

import Swift
import Foundation

var radius = 2.0
var height = 3.0

var volume = 3.14 * radius * radius * height
print("Volume of a cylinder: ", volume)
```

### TypeScript

```typescript
// Write a TypeScript program to find volume of a cylinder

// Function to calculate the volume of a cylinder
function volumeOfCylinder(radius: number, height: number): number {
  // Calculate the volume using the formula:
  // V = π * r^2 * h
  const volume = Math.PI * radius * radius * height;

  // Return the calculated volume
  return volume;
}

// Example:
// Calculate the volume of a cylinder with radius 5 and height 10
const cylinderRadius = 5;
const cylinderHeight = 10;
const cylinderVolume = volumeOfCylinder(cylinderRadius, cylinderHeight);

console.log(`Volume of cylinder = ${cylinderVolume}`);
```
