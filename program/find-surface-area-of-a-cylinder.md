---
title: "Find Surface Area Of A Cylinder"
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
    "786-aquib",
    "vedantpople4",
    "Medmly20208",
    "yesayajones",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5034
description: "Write a program to find surface area of a cylinder."
---

## Write a program to find surface area of a cylinder

Surface area of cylinder = 2 × π × `Radius` × `Height`

```
Radius : 2
Height : 3

Surface area : 62.83185307179586
```

---

```c
// Write a C program to find surface area of a cylinder

#include <stdio.h>
#define _USE_MATH_DEFINES
#include <math.h>

int main()
{

    float Height, Radius, cylinderSurface;

    printf("enter height \n");
    scanf("%f", &Height);

    printf("enter radius \n");
    scanf("%f", &Radius);

    cylinderSurface = 2 * M_PI * Radius * (Radius + Height);

    printf("cylinder surface is %f", cylinderSurface);

    return 0;
}
```

```csharp
// Write a C# program to find surface area of a cylinder

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius :");
    double radius = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height :");
    double height = Convert.ToDouble(Console.ReadLine());
    double surfaceArea = 2 * 3.14 * radius *  (radius + height ) ;
    Console.WriteLine("Surface area of cylinder : "+ surfaceArea);
  }
}
```

```cpp
// Write a C++ program to find surface area of a cylinder

#define _USE_MATH_DEFINES

#include <iostream>
#include <cmath>

int main()
{

    float height, radius, surfaceAreaOfCylinder;

    std::cout << "enter height of cylinder" << std::endl;
    std::cin >> height;

    std::cout << "enter radius of cylinder" << std::endl;
    std::cin >> radius;

    surfaceAreaOfCylinder = 2 * M_PI * radius * (radius + height);

    std::cout << "surface area of this cylinder is " << surfaceAreaOfCylinder;

    return 0;
}
```

```dart
// Write a Dart program to find surface area of a cylinder

import 'dart:io';
void main(){
  print("Enter the Radius :");
  var radius=int.parse(stdin.readLineSync());
  print("Enter the Height :");
  var height=int.parse(stdin.readLineSync());
  var area = 2 * 3.14 * radius * (radius + height);
  print('Area of Cylinder: $area');
}
```

```fsharp
// Write a F# program to find surface area of a cylinder

let surfaceArea radius height : float =
   let pi = 3.14159
   2.0 * pi * radius * (radius+height)

printfn "Enter the radius :"
let radius = float (System.Console.ReadLine())
printfn "Enter the height :"
let height = float (System.Console.ReadLine())
let cylinder = surfaceArea radius height

printfn "Surface area of cylinder : %f" cylinder
```

```go
// Write a Go program to find surface area of a cylinder

package main

import (
	"fmt"
	"math"
)

func main() {
	var radius float64
	var height float64
	fmt.Scanf("%f", &radius)
	fmt.Scanf("%f", &height)
	surfacearea := 2 * math.Pi * radius * (radius + height)
	fmt.Println((surfacearea))
}
```

```haskell
-- Write a Haskell program to find surface area of a cylinder

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let radius = read input1 :: Float

    putStrLn "Enter height: "
    input2 <- getLine
    let height = read input2 :: Float

    let surfaceArea = 2 * pi * radius * (radius + height)
    putStrLn $ show (surfaceArea)
```

```java
// Write a Java program to find surface area of a cylinder

import java.util.Scanner;

class TotalSurfaceAreaOfCylinder {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter the radius: ");
        double radius = s.nextDouble();

        System.out.print("Enter the height: ");
        double height = s.nextDouble();

        double surfaceArea = 2 * Math.PI * radius * (radius + height);

        System.out.println("The total surface area of the cylinder is: " + surfaceArea);
    }
}
```

```javascript
// Write a JavaScript program to find surface area of a cylinder

function surfaceArea(radius, height) {
  return {
    area() {
      return 2 * Math.PI * radius * (radius + height);
    },
  };
}

const cylinder = surfaceArea(2, 3);
console.log(cylinder.area());
```

```julia
# Write a Julia program to find surface area of a cylinder

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
area = 2 * 3.14 * radius * (radius + height)
println("Surface area of cylinder: ", area)
```

```kotlin
// Write a Kotlin program to find surface area of a cylinder

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    val radius = scanner.nextDouble()
    val height = scanner.nextDouble()

    val surfaceArea = 2 * PI * radius * (radius + height)
    println(surfaceArea)
}
```

```perl
# Write a Perl program to find surface area of a cylinder

#!/usr/bin/perl

use strict;
use warnings;

print "Enter the radius of the cylinder: ";
my $radius = <STDIN>;
chomp $radius;

print "Enter the height of the cylinder: ";
my $height = <STDIN>;
chomp $height;

my $surface_area = 2 * 3.14159 * $radius * $height + 2 * 3.14159 * $radius * $radius;

print "The surface area of the cylinder is: $surface_area\n";
```

```php
// Write a PHP program to find surface area of a cylinder

<?php

function surfaceAreaOfCylinder($radius, $height) {
 return 2 * pi() * $radius * ( $radius + $height );

}

echo surfaceAreaOfCylinder(2, 3);

?>
```

```python
# Write a Python program to find surface area of a cylinder

import math

radius = 2
height = 3
pi = math.pi

surfaceAreaOfCylinder = 2 * pi * radius * (height + radius)

print(surfaceAreaOfCylinder)
```

```r
# Write a R program to find surface area of a cylinder

radius = 2
height = 3
surfaceArea = 2 * pi * radius * ( radius + height )
cat("surfaceArea: ", surfaceArea)
```

```ruby
# Write a Ruby program to find surface area of a cylinder

def surfaceAreaOfCylinder(radius, height)
  2 * 3.14 * radius * ( radius + height )
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the radius : '
  radius = gets.chomp.to_i

  print 'Please enter the height : '
  height = gets.chomp.to_i

  puts "Surface Area of Cylinder :  #{surfaceAreaOfCylinder(radius, height)} "
end
```

```rust
// Write a Rust program to find surface area of a cylinder

fn main() {
    let radius = 2.0;
    let height = 3.0;
    let surfaceArea = 2.0 * 3.14 * radius * (radius + height);

    println!("Surface area of cylinder is {0}", surfaceArea as f32);
}
```

```scala
// Write a Scala program to find surface area of a cylinder

import scala.io.StdIn._;

object surfaceAreaOfCylinder {
    def main(args:Array[String]):Unit={
        println("Enter the radius : ");
        var r = readLine().toInt;
        println("Enter the height : ");
        var h = readLine().toInt;
        var result = 2 * 3.14 * r * (r+h);
        println("Surface area of Cylinder : "+result);
    }
}
```

```swift
// Write a Swift program to find surface area of a cylinder

import Swift
import Foundation

var radius = 2.0
var height = 3.0

var surfaceArea = 2.0 * M_PI * radius * (radius + height)
print("Surface area of a cylinder: ", surfaceArea)
```

```typescript
// Write a TypeScript program to find surface area of a cylinder

const surfaceAreaOfCylinder = (radius: number, height: number): number => {
  return 2 * Math.PI * radius * (radius + height);
};

console.log(surfaceAreaOfCylinder(2, 3));
```
