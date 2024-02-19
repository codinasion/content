---
title: "Find Area Of A Cuboid"
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
    "joao-vitor-souza",
    "tanishq-singh-2407",
    "vedha-vikash-pixel",
    "manyadua16",
    "prathameshkarambelkar",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 2585
description: "Write a program to find area of a cuboid."
---

## Table of contents

## Write a program to find area of a cuboid

Area of cuboid = 2 × (`Length` × `Width` + `Length` × `Height` + `Width` × `Height`)

```
Length : 2
Width  : 3
Height : 4

Area : 52
```

---

### C

```c
// Write a C program to find area of a cuboid

#include<stdio.h>
int main()
{
    float len,wid,hit,area;
    printf("Enter the length of cuboid\n");
    scanf("%f",&len);
    printf("Enter the width of cuboid\n");
    scanf("%f",&wid);
    printf("Enter the height of cuboid\n");
    scanf("%f",&hit);
    area=2*((len*wid)+(wid*hit)+(hit*len));
    printf("Area of cuboid:%f\n",area);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find area of a cuboid

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the length : ");
    double length = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the width : ");
    double width = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double cuboid = 2 * ((length * width) + (length * height) + (width * height));
    Console.WriteLine("Area of cuboid :"+cuboid);
  }
}
```

### C++

```cpp
// Write a C++ program to find area of a cuboid

#include <iostream>

using namespace std;

int main()
{
    int length,width,height;
    cin>>length>>width>>height;
    cout<<"Area : "<<(2*(length*width+length*height+width*height))<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to find area of a cuboid

import 'dart:io';
void main(){
  print("Enter the length :");
  int length = int.parse(stdin.readLineSync()!);
  print("Enter the width :");
  int width = int.parse(stdin.readLineSync()!);
  print("Enter the height :");
  int height = int.parse(stdin.readLineSync()!);
  int cuboid = 2 * (length * width + length * height + width * height);
  print('Area of cuboid : $cuboid');
}
```

### F#

```fsharp
// Write a F# program to find area of a cuboid

printfn "Enter the length :"
let length = int (System.Console.ReadLine())
printfn "Enter the width :"
let width = int (System.Console.ReadLine())
printfn "Enter the height :"
let height = int (System.Console.ReadLine())
let area = 2 * ((length * width) + (length * height) + (width * height))

printfn "Area of cuboid  : %d" area
```

### Go

```go
// Write a Go program to find area of a cuboid

package main

import "fmt"

func main() {
	var l, b, h int

	fmt.Printf("Enter length of Cuboid:\t")
	fmt.Scanf("%d", &l)

	fmt.Printf("Enter width of Cuboid:\t")
	fmt.Scanf("%d", &b)

	fmt.Printf("Enter height of Cuboid:\t")
	fmt.Scanf("%d", &h)

	fmt.Println("Area:", 2*(l*b+b*h+l*h))
}
```

### Haskell

```haskell
-- Write a Haskell program to find area of a cuboid

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

    let area = 2 * (length * width + length * height + width * height)
    putStrLn $ show (area)
```

### Java

```java
// Write a Java program to find area of a cuboid

import java.util.Scanner;

public class findareaofacuboid {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Length : ");
        int len = input.nextInt();
        System.out.print("Width : ");
        int wid = input.nextInt();
        System.out.print("Height : ");
        int ht = input.nextInt();
        System.out.println();
        System.out.print("Area : ");
        int area = 2*(len*wid+wid*ht+ht*len);
        System.out.println(area);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find area of a cuboid

function cuboidArea(Length, Width, Height) {
  //Cuboid Area function
  return 2 * (Length * Width + Length * Height + Width * Height);
}

let Length = 2;
let Width = 3;
let Height = 4;
console.log(cuboidArea(Length, Width, Height)); //52
```

### Julia

```julia
# Write a Julia program to find area of a cuboid

print("Enter the length : ")
length = parse(Float64, readline(stdin))
print("Enter the width : ")
width = parse(Float64, readline(stdin))
print("Enter the width : ")
height = parse(Float64, readline(stdin))
area = 2 * (length * width + length * height + width * height)
println("Area of cuboid : ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find area of a cuboid

import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter Width: ")
    val width: Double = number2.nextDouble()

    val number3 = Scanner(System.`in`)
    println("Enter Height: ")
    val height: Double = number3.nextDouble()

    val Area = 2 * (length * width + length * height + width * height)
    println("The Perimeter of Rectangle is $Area")
}
```

### Perl

```perl
# Write a Perl program to find area of a cuboid

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $cuboid = 2 * ($length * $width) + ($length * $height) + ($width * $height);
print "Area of Cuboid: ".$cuboid, "\n";
```

### PHP

```php
// Write a PHP program to find area of a cuboid

<?php
	$x = readline('Enter cuboid length: ');
	$y = readline('Enter cuboid width: ');
	$z = readline('Enter cuboid height: ');


  $x1 = 2 * (($x*$y) + ($y*$z) + ($z*$x));
  echo "Area of cuboid: $x1 \n";
?>
```

### Python

```python
# Write a Python program to find area of a cuboid

Length = int(input())
Width = int(input())
Height = int(input())
print(2 * (Length * Width + Length * Height + Width * Height))
```

### R

```r
# Write a R program to find area of a cuboid

length = 2
width = 3
height = 4
area = 2 * (length * width + length * height + width * height)
cat("Area: ", area)
```

### Ruby

```ruby
# Write a Ruby program to find area of a cuboid

pi = Math::PI

print "Enter length : \n"
length = gets.chomp.to_i
print "Enter width : \n"
width = gets.chomp.to_i
print "Enter height : \n"
height = gets.chomp.to_i

area = 2 * (length * width + length * height + width * height)
print "area : #{area}"
```

### Rust

```rust
// Write a Rust program to find area of a cuboid

fn main() {
    let length = 2.0;
    let width = 3.0;
    let height = 4.0;
    let area = 2.0 * (length * width + length * height + width * height);

    println!("Area of cuboid is {0}", area as f32);
}
```

### Scala

```scala
// Write a Scala program to find area of a cuboid

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val height = scala.io.StdIn.readDouble();
	  val area = 2 * (length * width + length * height + width * height);
	  println("area of cuboid: " +area);
	}
}
```

### Swift

```swift
// Write a Swift program to find area of a cuboid

import Swift
import Foundation

var length = 2.0
var width = 3.0
var height = 4.0

var area = 2.0 * (length * width + length * height + width * height)
print("Area of cuboid: ", area)
```

### TypeScript

````typescript
// Write a TypeScript program to find area of a cuboid

/**
 *
 * @name This program returns the area of a cuboid
 * @param {number} height
 * @param {number} width
 * @param {number} length
 * @returns {number}
 *
 * @example
 * ```ts
 * const area1: number = FindAreaOfACuboid(3, 2, 4) // 52
 * const area2: number = FindAreaOfACuboid(43, 1, 82) // 7302
 * ```
 *
 * @author Tanishq Singh
 */
function FindAreaOfACuboid(
  height: number,
  width: number,
  length: number
): number {
  return 2 * (length * width + length * height + width * height);
}

// Console Tests
console.log("Area of cuboid of dimensions (1, 2, 3): ");
console.log("That is " + FindAreaOfACuboid(1, 2, 3) + " // 22");

console.log("Area of cuboid of dimensions (43, 12, 32): ");
console.log("That is " + FindAreaOfACuboid(43, 12, 32) + " // 4552");
````

## Similar programs

- [Find Surface Area Of A Cuboid](/program/find-surface-area-of-a-cuboid)
- [Find Volume Of A Cuboid](/program/find-volume-of-a-cuboid)
- [Find Area Of A Rectangle](/program/find-area-of-a-rectangle)
- [Find Area Of A Square](/program/find-area-of-a-square)
- [Find Area Of A Cube](/program/find-area-of-a-cube)
- [Find Area Of A Right Angled Triangle](/program/find-area-of-a-right-angled-triangle)
- [Find Surface Area Of A Cylinder](/program/find-surface-area-of-a-cylinder)
- [Find Length Of A String](/program/find-length-of-a-string)
- [Find Surface Area Of A Cone](/program/find-surface-area-of-a-cone)
- [Find Area Of A Circle](/program/find-area-of-a-circle)
