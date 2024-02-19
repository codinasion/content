---
title: "Find Volume Of A Sphere"
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
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "rahmat-dev",
    "MadhuS-1605",
    "jatt7568",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:30:34Z
trackId: 883
description: "Write a program to find volume of a sphere."
---

## Table of contents

## Write a program to find volume of a sphere

Volume of sphere = 4/3 × π × `Radius`^3

```
Radius : 2

Volume : 33.510321638291124
```

---

### C

```c
// Write a C program to find volume of a sphere

#include <stdio.h>
int main()
{
    int radius=2;
    float pie=3.14159265;
    double volume=(4.0/3.0)*pie*(radius*radius*radius);
    printf("Volume of the sphere=%f",volume);
}
```

### C#

```csharp
// Write a C# program to find volume of a sphere

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    double volume = 4/3 * 3.14 * radius * radius * radius;
    Console.WriteLine("Volume of sphere : "+volume);
  }
}
```

### C++

```cpp
// Write a C++ program to find volume of a sphere

/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float radius;
    cout << "\n\nEnter the radius -> ";
    cin >> radius;

    cout << "Volume -> " << ((radius * radius * radius) * 4 * 3.14) / 3 << endl
         << endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find volume of a sphere

import 'dart:io';
void main(){
  print("Enter the radius :");
  var radius = double.parse(stdin.readLineSync());
  var volume =  4/3 * 3.14 * radius * radius * radius;
  print('Volume of sphere  : $volume');
}
```

### F#

```fsharp
// Write a F# program to find volume of a sphere

let volumeOfSphere radius : float =
   1.33 * 3.14 * radius * radius * radius


let volume = volumeOfSphere 2.0

printfn "Volume of sphere : %f" volume
```

### Go

```go
// Write a Go program to find volume of a sphere

package main

import (
   "fmt"
   "math"
)

func volume (radius float64) float64 {
   return 4.0/3.0 * math.Pi * math.Pow(radius,3)
}

func main() {
  var radius float64
  fmt.Println("Enter value of radius:")
  fmt.Scan(&radius)
  fmt.Println("Volume of Sphere is:",volume(radius))
}
```

### Java

```java
// Write a Java program to find volume of a sphere

public class sphere{
        public static void main(String args[])
    {
    int radius=2;
    double pie=3.141592653589793238;
    double volume=(4.0/3.0)*pie*(radius*radius*radius);
    System.out.println("Volume of the sphere="+volume);
     }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find volume of a sphere

function volumeOfSphere(radius) {
  const pi = 3.14159;
  let volOfSphere = (4 / 3) * pi * Math.pow(radius, 3);
  return volOfSphere;
}

console.log("Volume of Sphere is", volumeOfSphere(4));
```

### Julia

```julia
# Write a Julia program to find volume of a sphere

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
volume = 4/3 * 3.14 * radius * radius * radius
println("Volume of sphere: ", volume)
```

### Kotlin

```kotlin
// Write a Kotlin program to find volume of a sphere

fun main() {
    print("Enter hours : ")
    println()
    var input = readLine()

    try {
        println("Volume of sphere with radius $input = " + FindVolumeOfASphere(input!!.toDouble()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun FindVolumeOfASphere(radius: Double): Double {
    val pie = 3.141592653589793238;
    val parm: Double = 4.0/3.0
    val vol = parm * radius * radius * radius * pie

    return  vol
}
```

### Perl

```perl
# Write a Perl program to find volume of a sphere

$PI = 3.141592654;

my $radius = <STDIN>;
$volume = 4/3 * $PI * $radius * $radius * $radius;
print "$volume"
```

### PHP

```php
// Write a PHP program to find volume of a sphere

<?php
    $radius=2;
    $pie=3.141592653589793238;
    $volume=(4/3)*$pie*($radius*$radius*$radius);
    echo "Volume of the Sphere=";
    echo $volume;
?>
```

### Python

```python
# Write a Python program to find volume of a sphere

# Radius : 2
# Volume : 33.510321638291124

radius = 2
pie = 3.1415926535897932

volume = (4.0 / 3.0) * pie * (radius * radius * radius)
print("volume of the sphere=" + str(volume))
```

### R

```r
# Write a R program to find volume of a sphere

radius = 2
volume = 4/3 * pi * radius * radius * radius
cat("volume: ", volume)
```

### Ruby

```ruby
# Write a Ruby program to find volume of a sphere

def volumeOfSphere(radius)
  4/3 * 3.14 * radius * radius * radius
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the radius : '
  radius = gets.chomp.to_i

  puts "Volume of Sphere :  #{volumeOfSphere(radius)}"
end
```

### Rust

```rust
// Write a Rust program to find volume of a sphere

fn find_volume_of_a_sphere(radius: u64) -> f64 {
	const PI: f64 = 3.1415926535897931f64;
	return 4.0 / 3.0 * PI * (radius as f64).powf(3.0);
}

fn main() {
	println!("{}", find_volume_of_a_sphere(2));
}
```

### Scala

```scala
// Write a Scala program to find volume of a sphere

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val volume = (4.0/3.0) * Pi * radius * radius * radius;
	  println("volume of the sphere: " + volume);
	}
}
```

### Swift

```swift
// Write a Swift program to find volume of a sphere

import Swift
import Foundation

var radius = 2.0

var volume = (4.0/3.0) * M_PI * radius * radius * radius
print("Volume of sphere: ", volume)
```

### TypeScript

```typescript
// Write a TypeScript program to find volume of a sphere

function volumeOfSphere(radius: number) {
  const pi = 3.14159;
  const volOfSphere = (4 / 3) * pi * Math.pow(radius, 3);
  return volOfSphere;
}

console.log("Volume of Sphere is", volumeOfSphere(4));
```

## Similar programs

- [Find Volume Of A Cone](/program/find-volume-of-a-cone)
- [Find Volume Of A Cube](/program/find-volume-of-a-cube)
- [Find Volume Of A Cylinder](/program/find-volume-of-a-cylinder)
- [Find Volume Of A Cuboid](/program/find-volume-of-a-cuboid)
- [Find Surface Area Of A Sphere](/program/find-surface-area-of-a-sphere)
- [Find Surface Area Of A Cone](/program/find-surface-area-of-a-cone)
- [Find Area Of A Circle](/program/find-area-of-a-circle)
- [Find Surface Area Of A Cylinder](/program/find-surface-area-of-a-cylinder)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
