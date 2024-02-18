---
title: "Find Area Of A Circle"
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
    "joao-vitor-souza",
    "chinmaykumbhare",
    "PraaneshSelvaraj",
    "destroyer5067",
    "MadhuS-1605",
    "anastazir",
    "RShalman",
    "imtiyaz786",
    "adetoye-dev",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 699
description: "Write a program to find area of a circle."
---

## Table of contents

## Write a program to find area of a circle

Area of circle = π × `Radius`^2

```
Radius : 2

Area : 12.566370614359172
```

---

### C

```c
// Write a C program to find area of a circle

int main(void)
{
    int radius;


    printf("Enter the Radius: ");
    scanf("%d", &radius);

    printf("\n%f \n", 3.142 *(radius * radius));

    return 0;
}
```

### C#

```csharp
// Write a C# program to find area of a circle

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    double area = 3.14 * (radius * radius);
    Console.WriteLine("Area of Circle :"+area);
  }
}
```

### C++

```cpp
// Write a C++ program to find area of a circle

#include<bits/stdc++.h>
using namespace std;

#define Pi 3.14

double findAreaOfCircle(double radius)
{
    double ans=0;

    ans=Pi*radius*radius;

    return ans;
}

int main()
{

    double radius;

    cin>>radius;

    cout<<findAreaOfCircle(radius)<<endl;
}
```

### Dart

```dart
// Write a Dart program to find area of a circle

import 'dart:io';
void main(){
  print("Enter the radius :");
  double radius = double.parse(stdin.readLineSync()!);
  double area = 3.14 * radius * radius;
  print('Area of circle : $area');
}
```

### F#

```fsharp
// Write a F# program to find area of a circle

let areaOfCircle radius : float =
  3.14 * radius * radius

let area = areaOfCircle 2.0

printfn "Area of circle : %f" area
```

### Go

```go
// Write a Go program to find area of a circle

package main

import (
	"fmt"
	"math"
)

func areaOfCircle(r float64) float64 {
	return math.Pi * r * r
}

func roundFloat(val float64, precision uint) float64 {
	var ratio float64 = math.Pow(10, float64(precision))
	return math.Round(val*ratio) / ratio
}

func main() {
	var r, area float64

	fmt.Println("Enter radius : ")
	fmt.Scan(&r)

	area = areaOfCircle(r)

	fmt.Println("\nArea : ", roundFloat(area, 2))
}
```

### Java

```java
// Write a Java program to find area of a circle

import java.util.Scanner;

class FindAreaOfACircle {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		System.out.println("Enter radius of the circle");
		double radius = input.nextDouble();

		System.out.print("Area of circle for the given radius: " + Math.PI * radius * radius);
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to find area of a circle

export function findAreaOfACircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
```

### Julia

```julia
# Write a Julia program to find area of a circle

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
area = 3.14 * radius * radius
println("Area of circle: ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find area of a circle

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val radius = scanner.nextDouble()

  val area = PI * radius * radius
  println(area)
}
```

### Perl

```perl
# Write a Perl program to find area of a circle

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
my $area =  3.14 * $radius * $radius;
print "Area of circle : ".$area, "\n";
```

### PHP

```php
// Write a PHP program to find area of a circle

<?php
	$x = readline('Enter circle radius: ');

  $x1 = pi()* $x * $x;
  echo "Area of Circle: $x1 \n";
?>
```

### Python

```python
# Write a Python program to find area of a circle

from math import pi

print("Area:", float(input("Radius: ")) ** 2 * pi)
```

### R

```r
# Write a R program to find area of a circle

radius = 2
area = pi * radius * radius
cat("Area: ", area)
```

### Ruby

```ruby
# Write a Ruby program to find area of a circle

print "Enter Radius : "
radius = gets.chomp.to_f
area = 3.141592653 * (radius**2)
print "Area : #{area}"
```

### Rust

```rust
// Write a Rust program to find area of a circle

use std::io;
use std::process;
use std::f64::consts;

fn main() {
    let mut input = String::new();
    println!("Please enter radius: ");
    io::stdin().read_line(&mut input).unwrap();
    let radius = convert_str_to_float(input);
    let area = calculate_area(radius);
    println!("Area: {}", area);
}

fn convert_str_to_float(input: String) -> f64 {
    input.trim().parse::<f64>().unwrap_or_else(|_| {
        eprintln!("- Please enter a valid input!");
        drop(input);
        process::exit(1);
    })
}

fn calculate_area(radius: f64) -> f64 {
    consts::PI * radius * radius
}
```

### Scala

```scala
// Write a Scala program to find area of a circle

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val area = Pi * radius * radius;
	  println("area of the circle: " + area);
	}
}
```

### Swift

```swift
// Write a Swift program to find area of a circle

import Swift
import Foundation

var radius = 2.0

var area = M_PI * radius * radius
print("Area of circle: ", area)
```

### TypeScript

```typescript
// Write a TypeScript program to find area of a circle

const radius = 2;

function area(r: number): number {
  return r * r * Math.PI;
}

console.log("Radius : " + radius);

console.log("Area : ", area(radius));
```
