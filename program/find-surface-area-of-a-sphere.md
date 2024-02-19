---
title: "Find Surface Area Of A Sphere"
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
    "pokharel-nishan",
    "sharvil1205",
    "joao-vitor-souza",
    "TrentGlimp",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3008
description: "Write a program to find surface area of a sphere."
---

## Table of contents

## Write a program to find surface area of a sphere

Surface area of sphere = 4 × π × `Radius`^2

```
Radius : 2

Surface area : 50.26548245743669
```

---

### C

```c
// Write a C program to find surface area of a sphere

#include <stdio.h>

int main()
{
    int radius;
    long double surfaceArea;
    const long double PI = 3.14159265358979;

    printf("Enter radius    :   ");
    scanf("%i", &radius);

    surfaceArea = 4 * PI * radius * radius;

    printf("Surface area of sphere  :   %.14Lf", surfaceArea);

    return 0;
}
```

### C#

```csharp
// Write a C# program to find surface area of a sphere

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    double sphere = 4 * 3.14 * radius * radius;
    Console.WriteLine("Surface area of sphere :"+sphere);
  }
}
```

### C++

```cpp
// Write a C++ program to find surface area of a sphere

#include <iostream>
#include <bits/stdc++.h>
#define pi 3.141592653589793238
using namespace std;

int main()
{
    int r;cin>>r;
    cout<<fixed<<setprecision(10)<<(4*pi*r*r)<<'\n';
    return 0;
}
```

### Dart

```dart
// Write a Dart program to find surface area of a sphere

import 'dart:io';
void main(){
  print("Enter the radius :");
  int radius = int.parse(stdin.readLineSync()!);
  double area = 4.0 * 3.14 * radius * radius;
  print('Surface area of sphere : $area');
}
```

### F#

```fsharp
// Write a F# program to find surface area of a sphere

let surfaceAreafOfSphere radius : float =
  4.0 * 3.14 * radius * radius

let area = surfaceAreafOfSphere 2.0

printfn "Surface area of sphere : %f" area
```

### Go

```go
// Write a Go program to find surface area of a sphere

package main

import (
	"fmt"
	"math"
)

func sphere_surface_area(radius float64) {
	surface_area := 4 * math.Pi * math.Pow(radius, 2)

	fmt.Printf("Radius: %f\nSurface Area: %f", radius, surface_area)

}

func main() {
	var number float64
	fmt.Scanln(&number)
	sphere_surface_area(number)
}
```

### Haskell

```haskell
-- Write a Haskell program to find surface area of a sphere

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let radius = read input1 :: Float

    let surfaceArea = 4 * pi * radius * radius
    putStrLn $ show (surfaceArea)
```

### Java

```java
// Write a Java program to find surface area of a sphere

import java.util.*;
class findSurfaceAreaOfSphere
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter radius of the sphere: ");
        double r = sc.nextDouble();
        System.out.println("Surface Area of the Sphere with radius " + r + ": " + 4*Math.PI*r*r);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find surface area of a sphere

function surfaceAreaOfSphere(radius) {
  let area = 4 * Math.PI * Math.pow(radius, 2);
  console.log("The area is: ", area);
}
surfaceAreaOfSphere(2);
```

### Julia

```julia
# Write a Julia program to find surface area of a sphere

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
area =  4 * 3.14 * radius * radius
println("Surface area of sphere: ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find surface area of a sphere

import java.util.Scanner
import kotlin.math.pow
import kotlin.math.PI

fun main(args: Array<String>) {

    //Input Stream
    val scanner = Scanner(System.`in`)

    //Input Radius
    print("Enter Radius of Sphere : ")
    val radius = scanner.nextDouble()

    //surface Area of Sphere
    val sphereSurfaceArea = 4*PI*radius.pow(2.0)

    //Print Surface Area
    println("Surface Area of Sphere on radius $radius is :$sphereSurfaceArea")
}
```

### Perl

```perl
# Write a Perl program to find surface area of a sphere

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
my $area = 4 * 3.14  * $radius * $radius ;
print "Surface area of sphere : ".$area, "\n";
```

### PHP

```php
// Write a PHP program to find surface area of a sphere

<?php
	$x = readline('Enter sphere radius: ');

  $x1 = 4 * pi() * $x * $x;
  echo "Surface area of sphere: $x1 \n";
?>
```

### Python

```python
# Write a Python program to find surface area of a sphere

import math


def surfaceAreaOfSphere(radius):
    area = 4 * math.pi * math.pow(radius, 2)
    print("The area is: ", area)


surfaceAreaOfSphere(2)
```

### R

```r
# Write a R program to find surface area of a sphere

radius = 2
surfaceArea = 4 * pi * radius * radius
cat("surfaceArea: ", surfaceArea)
```

### Ruby

```ruby
# Write a Ruby program to find surface area of a sphere

pi = Math::PI

print "Enter radius : \n"
radius = gets.chomp.to_i

surfaceArea = 4 * pi * radius * radius
print "surface area : #{surfaceArea}"
```

### Rust

```rust
// Write a Rust program to find surface area of a sphere

fn main() {
  let radius = 2.0;
  let surfaceArea = 4.0 * 3.14 * radius * radius;

  println!("Surface area of sphere is {0}", surfaceArea as f32);
}
```

### Scala

```scala
// Write a Scala program to find surface area of a sphere

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val surfaceArea = 4 * Pi * radius * radius;
	  println("Surface area of the sphere: " + surfaceArea);
	}
}
```

### Swift

```swift
// Write a Swift program to find surface area of a sphere

import Swift
import Foundation

var radius = 2.0

var surfaceArea = 4.0 * M_PI * radius * radius
print("Surface area of sphere: ", surfaceArea)
```

### TypeScript

```typescript
// Write a TypeScript program to find surface area of a sphere

function findSurfaceAreaOfSphere(radius: number) {
  return 4 * Math.PI * Math.pow(radius, 2);
}

console.log(findSurfaceAreaOfSphere(2));
```

## Similar programs

- [Find Surface Area Of A Cone](/program/find-surface-area-of-a-cone)
- [Find Surface Area Of A Cube](/program/find-surface-area-of-a-cube)
- [Find Surface Area Of A Cylinder](/program/find-surface-area-of-a-cylinder)
- [Find Surface Area Of A Cuboid](/program/find-surface-area-of-a-cuboid)
- [Find Area Of A Circle](/program/find-area-of-a-circle)
- [Find Area Of A Square](/program/find-area-of-a-square)
- [Find Volume Of A Sphere](/program/find-volume-of-a-sphere)
- [Find Area Of A Cube](/program/find-area-of-a-cube)
- [Find Area Of A Rectangle](/program/find-area-of-a-rectangle)
- [Find Area Of A Cuboid](/program/find-area-of-a-cuboid)
