---
title: "Find Area Of A Rectangle"
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
    "PraaneshSelvaraj",
    "rahmat-dev",
    "prathameshkarambelkar",
    "PoweredByCaffein",
    "Shambu-K",
    "CodingWithHardik",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2391
description: "Write a program to find area of a rectangle."
---

## Table of contents

## Write a program to find area of a rectangle

Area of rectangle = `Length` × `Width`

```
Length : 2
Width  : 3

Area : 6
```

---

### C

```c
// Write a C program to find area of a rectangle

#include <stdio.h>

int main(){

    int length, width, area;
    printf("Enter length\n");
    scanf("%d", &length);
    printf("Enter width\n");
    scanf("%d", &width);

    area = length * width;
    printf("Area = %d\n", area);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find area of a rectangle

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the length : ");
    double length = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the width : ");
    double width = Convert.ToDouble(Console.ReadLine());
    double area = length * width;
    Console.WriteLine("Area of rectangle :"+area);
  }
}
```

### C++

```cpp
// Write a C++ program to find area of a rectangle

#include <bits/stdc++.h>
using namespace std;

int main(){

    int length, width, area;
    cout << "Enter length\n";
    cin >> length;
    cout << "Enter width\n";
    cin >> width;

    area = length * width;
    cout << area << endl;

    return 0;
}
```

### F#

```fsharp
// Write a F# program to find area of a rectangle

let areaOfRectangle length width : int =
   length * width

let area = areaOfRectangle 2 3

printfn "Area of rectangle : %d" area
```

### Go

```go
// Write a Go program to find area of a rectangle

package main

import "fmt"

func main() {
	var l, b float32
	fmt.Printf("Enter length of rectangle: ")
	fmt.Scanf("%v", &l)
	fmt.Printf("Enter breadth of rectangle: ")
	fmt.Scanf("%v", &b)

	fmt.Printf("Area of rectangle: %v\n", l*b)
}
```

### Haskell

```haskell
-- Write a Haskell program to find area of a rectangle

main :: IO ()
main = do
     putStrLn "Enter length: "
     input1 <- getLine
     let length = read input1 :: Float

     putStrLn "Enter width: "
     input2 <- getLine
     let width = read input2 :: Float

     let area = length * width
     putStrLn $ show (area)
```

### Java

```java
// Write a Java program to find area of a rectangle

import java.util.Scanner;;

public class FindAreaOfARectangle {
    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
        int length, width, area;
        System.out.println("Enter length");
        length = sc.nextInt();
        System.out.println("Enter width");
        width = sc.nextInt();

        area = length * width;
        System.out.println(area);
        sc.close();

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find area of a rectangle

function FindAreaOfARectangle(length, width) {
  return length * width;
}
console.log(FindAreaOfARectangle(2, 3));
```

### Julia

```julia
# Write a Julia program to find area of a rectangle

print("Enter the length : ")
length = parse(Float64, readline(stdin))
print("Enter the width : ")
width = parse(Float64, readline(stdin))
area = length * width
println("Area of rectangle : ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find area of a rectangle

import java.util.Scanner

fun main() {
    val number1 = Scanner(System.`in`)
    println("Enter the Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter the breadth: ")
    val breadth: Double = number2.nextDouble()

    val Area = length * breadth
    println("The area of rectangle is $Area ")
}
```

### Perl

```perl
# Write a Perl program to find area of a rectangle

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
my $area = $length * $width;
print "Area of rectangle : ".$area, "\n";
```

### PHP

```php
// Write a PHP program to find area of a rectangle

<?php

$length = 2;
$width = 3;
$area = $length * $width;

echo $area;
```

### Python

```python
# Write a Python program to find area of a rectangle

# python program to calculate area of rectangle

length = input("Enter length\n")
length = int(length)
width = input("Enter width\n")
width = int(width)
area = length * width

print("Area = ", area)
```

### R

```r
# Write a R program to find area of a rectangle

length = 2
width = 3
area = length * width
cat("Area: ", area)
```

### Ruby

```ruby
# Write a Ruby program to find area of a rectangle

print "Enter Length : "
l = gets.chomp.to_i
print "Enter Width : "
b = gets.chomp.to_i
area = l*b
print "Area : #{area}"
```

### Rust

```rust
// Write a Rust program to find area of a rectangle

fn main() {
	let length = 2;
	let width = 3;
	let area = length * width;
	println!("{}", area);
}
```

### Scala

```scala
// Write a Scala program to find area of a rectangle

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val area = length * width ;
	  println("Area of a rectangle: " + area);
	}
}
```

### Swift

```swift
// Write a Swift program to find area of a rectangle

import Swift
import Foundation

var length = 2.0
var width = 3.0

var area = length * width
print("Area of rectangle: ", area)
```

### TypeScript

```typescript
// Write a TypeScript program to find area of a rectangle

export function areaOfRectangle(length: number, width: number): number {
  return length * width;
}
console.log(areaOfRectangle(2, 3));
```
