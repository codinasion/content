---
title: "Find Surface Area Of A Cuboid"
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
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "Sri01729",
    "ofirtzabari",
    "SarthakSanjay",
    "anandamex",
    "joao-vitor-souza",
    "sureshsgith",
    "tanishq-singh-2407",
    "helloshiv01",
    "mrajen27",
    "manny-uncharted",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:23:08Z
trackId: 4453
description: "Write a program to find surface area of a cuboid."
---

## Table of contents

## Write a program to find surface area of a cuboid

Surface area of cuboid = 2 × (`Length` × `Width` + `Length` × `Height` + `Width` × `Height`)

```
Length : 2
Width  : 3
Height : 4

Surface area : 52
```

---

### C

```c
// Write a C program to find surface area of a cuboid

#include <stdio.h>

int main()
{

    int Length, Width, Height, Surfacearea;
    printf("Length: ");
    scanf("%d", &Length);
    printf("Width: ");
    scanf("%d", &Width);
    printf("Height: ");
    scanf("%d", &Height);

    Surfacearea = 2 * ((Length * Width) + (Length * Height) + (Width * Height));
    printf("Surface area: %d", Surfacearea);
}
```

### C#

```csharp
// Write a C# program to find surface area of a cuboid

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the length : ");
    double length = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the width : ");
    double width = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double cuboid =  2 * (length * width) + (length * height) + (width * height);
    Console.WriteLine("Surface area of cuboid :"+cuboid);
  }
}
```

### C++

```cpp
// Write a C++ program to find surface area of a cuboid

#include <iostream>
using namespace std;

int main() {
    int length, width, height;

    cout << "Length: ";
    cin >> length;

    cout << "Width: ";
    cin >> width;

    cout << "Height: ";
    cin >> height;

    cout << "The area of cuboid is: " << 2 * ((length * width) + (width * height) + (height * length));

    return 0;
}

// Author: Tanishq Singh (tanishqsingh.com)
```

### Dart

```dart
// Write a Dart program to find surface area of a cuboid

import 'dart:io';
void main(){
  print("Enter the length :");
  var length =int.parse(stdin.readLineSync());
  print("Enter the width :");
  var width =int.parse(stdin.readLineSync());
  print("Enter the height :");
  var height =int.parse(stdin.readLineSync());
  var surface_area = 2 * ((length * width) + (length * height) + (width * height));
  print('Surface area of cuboid : $surface_area');
}
```

### F#

```fsharp
// Write a F# program to find surface area of a cuboid

let surfaceAreaOfCuboid length width height : int =
   2 * ((length * width) + (length * height) + (width * height))

let cuboid = surfaceAreaOfCuboid 2 3 4

printfn "Surface area of cuboid: %d" cuboid
```

### Go

```go
// Write a Go program to find surface area of a cuboid

package main

import (
	"fmt"
)

func main() {

	fmt.Printf("Lenth:")
	var length float64
	fmt.Scanf("%f", &length)
	fmt.Printf("Width:")
	var width float64
	fmt.Scanf("%f", &width)
	fmt.Printf("Height:")
	var height float64
	fmt.Scanf("%f", &height)

	surface_area := 2 * (length*width + length*height + width*height)

	fmt.Printf("Surface Area:%.f\n", surface_area)
}
```

### Haskell

```haskell
-- Write a Haskell program to find surface area of a cuboid

main :: IO ()
main = do
    putStrLn "Enter length: "
    input1 <- getLine
    let length = read input1 :: Float

    putStrLn "Enter width: "
    input2 <- getLine
    let width = read input2 :: Float

    putStrLn "Enter height: "
    input3 <- getLine
    let height = read input3 :: Float

    let surfaceArea = 2 * (length * width + length * height + width * height)
    putStrLn $ show (surfaceArea)
```

### Java

```java
// Write a Java program to find surface area of a cuboid

import java.util.Scanner;

public class FindSurfaceAreaOfACuboid {

	public static int FindSurfaceAreaOfACuboid(int Height, int Width, int Length) {
		int hw, wl, hl;
		hw = Height*Width;
		wl = Width*Length;
		hl = Height*Length;
		return 2*(hw+wl+hl);
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int height, width, length;
		height = scanner.nextInt();
		width = scanner.nextInt();
		length = scanner.nextInt();
		System.out.println(FindSurfaceAreaOfACuboid(height, width, length));
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to find surface area of a cuboid

function surfaceArea(l, w, h) {
  return 2 * (l * w + w * h + l * h);
}

let length = 2;
let width = 3;
let height = 4;
console.log(surfaceArea(length, width, height));
```

### Julia

```julia
# Write a Julia program to find surface area of a cuboid

print("Enter the length: ")
length = parse(Float64, readline(stdin))
print("Enter the width: ")
width = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
area = 2 * (length * width + length * height + width * height)
println("Surface area of cuboid: ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find surface area of a cuboid

import java.util.Scanner

fun main() {
    //Input Stream
    val scanner = Scanner(System.`in`)
    print("Enter Length of Cuboid : ")
    val length = scanner.nextInt()
    print("Enter Width of Cuboid : ")
    val width = scanner.nextInt()
    print("Enter Height of Cuboid : ")
    val height = scanner.nextInt()
    //surface Area of Cuboid
    val surfaceAreaofCuboid = 2*(length * width + length * height + width *height)
    //Print Surface Area
    println("Surface Area of Sphere of Cuboid :$surfaceAreaofCuboid")
}
```

### Perl

```perl
# Write a Perl program to find surface area of a cuboid

print "Enter the Length: ";
my $length = <STDIN> ;

print "Enter the Width: ";
my $width = <STDIN> ;

print "Enter the Height: ";
my $height = <STDIN> ;

my $res = surfaceArea($principal, $interest);
print "Surface area of cuboid: $res";

sub surfaceArea
{
    my ($x) = @_;
    my $res = 2 * ($length * $width +  $length * $height + $width * $height);
    return $res ;
}
```

### PHP

```php
// Write a PHP program to find surface area of a cuboid

<?php

echo "Length: ";
fscanf(STDIN, "%f", $length);

echo "Width: ";
fscanf(STDIN, "%f", $width);

echo "Height: ";
fscanf(STDIN, "%f", $height);

$surfaceArea = 2 * (($length * $width) + ($length * $height) + ($width * $height));

echo "Surface Area of Cuboid: " .round($surfaceArea, 2). "\n";

?>
```

### Python

```python
# Write a Python program to find surface area of a cuboid

import math

length = float(input("Enter the length of the cuboid: "))
breadth = float(input("Enter the breadth of the cuboid: "))
height = float(input("Enter the height of the cuboid: "))


# Function to calculate surface area of a cuboid
def find_surface_area(length, breadth, height):
    # Formula of surface_area = 2(lb + bh + hl)
    surface_area = 2 * (length * breadth + breadth * height + height * length)

    # Display surface area
    print("\nThe surface area of the cuboid is: ", surface_area)


find_surface_area(length, breadth, height)
```

### R

```r
# Write a R program to find surface area of a cuboid

length = 2
width = 3
height = 4
surfaceArea = 2 * (length * width + length * height + width * height)
cat("surfaceArea: ", surfaceArea)
```

### Ruby

```ruby
# Write a Ruby program to find surface area of a cuboid

## Write a program to find surface area of a cuboid
length=0.0;
height=0.0;
width =0.0;

area  =0.0;

print "Enter length: ";
length = gets.chomp.to_f;

print "Enter height: ";
height = gets.chomp.to_f;

print "Enter width: ";
width = gets.chomp.to_f;

area     = 2.0 * (width * length) + (length * height) + (height * width);


print "Area of Cuboids  is: ",area;

Length : 2
Width  : 3
Height : 4

Surface area : 52
```

### Rust

```rust
// Write a Rust program to find surface area of a cuboid

fn main() {
    let length = 2.0;
    let width = 3.0;
    let height = 4.0;
    let surfaceArea = 2.0 * (length * width + length * height + width * height);

    println!("Surface area of cuboid is {0}", surfaceArea as f32);
}
```

### Scala

```scala
// Write a Scala program to find surface area of a cuboid

import scala.io.StdIn._;

object surfaceAreaOfCuboid {
    def main(args:Array[String]):Unit={
        println("Enter the length : ");
        var length = readLine().toInt;
        println("Enter the width : ");
        var width = readLine().toInt;
        println("Enter the height : ");
        var height = readLine().toInt;
        var result = 2 * ((length * width) + (length * height) + (width * height));
        println("Surface area of Cuboid : "+result);
    }
}
```

### Swift

```swift
// Write a Swift program to find surface area of a cuboid

import Swift
import Foundation

var length = 2.0
var width = 3.0
var height = 4.0

var surfaceArea = 2.0 * (length * width + length * height + width * height)
print("Surface area of cuboid: ", surfaceArea)
```

### TypeScript

````typescript
// Write a TypeScript program to find surface area of a cuboid

/**
 * @name This program finds the surface area of cuboid
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @returns {number}
 *
 * @example
 * ```ts
 * const area1: number = FindSurfaceAreaOfACuboid(2, 3, 4) // 52
 * const area2: number = FindSurfaceAreaOfACuboid(5, 1, 3) // 46
 * ```
 *
 * @author Tanishq Singh
 */
function FindSurfaceAreaOfACuboid(
  length: number,
  width: number,
  height: number
): number {
  const area = 2 * (length * width + width * height + height * length);

  return area;
}

// Console Tests
console.log("Area of cuboid of dimensions 2, 3, 4: ");
console.log("That is " + FindSurfaceAreaOfACuboid(2, 3, 4) + " // 52");

console.log("Area of cuboid of dimensions 5, 1, 3: ");
console.log("That is " + FindSurfaceAreaOfACuboid(5, 1, 3) + " // 46");
````

## Similar programs

- [Find Area Of A Cuboid](/program/find-area-of-a-cuboid)
- [Find Surface Area Of A Cylinder](/program/find-surface-area-of-a-cylinder)
- [Find Surface Area Of A Cube](/program/find-surface-area-of-a-cube)
- [Find Volume Of A Cuboid](/program/find-volume-of-a-cuboid)
- [Find Surface Area Of A Cone](/program/find-surface-area-of-a-cone)
- [Find Area Of A Rectangle](/program/find-area-of-a-rectangle)
- [Find Surface Area Of A Sphere](/program/find-surface-area-of-a-sphere)
- [Find Area Of A Square](/program/find-area-of-a-square)
- [Find Area Of A Cube](/program/find-area-of-a-cube)
- [Find Area Of A Right Angled Triangle](/program/find-area-of-a-right-angled-triangle)
