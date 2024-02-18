---
title: "Find Area Of A Right Angled Triangle"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
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
    "PoweredByCaffein",
    "rajdip-b",
    "MadhuS-1605",
    "anastazir",
    "christiankilpatrick-dev",
    "SRR-CODER",
    "marcobuontempo",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 756
description: "Write a program to find area of a right angled triangle."
---

## Table of contents

## Write a program to find area of a right angled triangle

Area of right angled triangle = 0.5 × `Base` × `Height`

```
Base   : 2
Height : 3

Area : 3
```

---

### C

```c
// Write a C program to find area of a right angled triangle

#include <stdio.h>

int main() {
    int b, h;
    float area;
    scanf("%d %d", &b, &h);
    area = 0.5 * b * h;
    printf("%f\n", area);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find area of a right angled triangle

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the base : ");
    double baseval = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double area = 0.5 * baseval * height;
    Console.WriteLine("Area of right angled triangle : "+area);
  }
}
```

### C++

```cpp
// Write a C++ program to find area of a right angled triangle

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {
	int base,height;
	cin>>base>>height;
	cout<<"Area of this traingle is : "<<(float)(base*height)/(float)2<<endl;
	return 0;
}
```

### Dart

```dart
// Write a Dart program to find area of a right angled triangle

import 'dart:io';
void main(){
  print("Enter the base :");
  var base = double.parse(stdin.readLineSync()!);
  print("Enter the height :");
  var height = double.parse(stdin.readLineSync()!);
  var area =  0.5 * base * height;
  print('Area of right angled triangle : $area');
}
```

### Go

```go
// Write a Go program to find area of a right angled triangle

package main

import (
	"fmt"
	"strconv"
)

func main() {
  var base float64
  var height float64
  fmt.Println("Enter Base:")
  fmt.Scan(&base)
  fmt.Println("Enter Height:")
  fmt.Scan(&height)
  area := 0.5 * base * height
  fmt.Println("Area:", area)
}
```

### Java

```java
// Write a Java program to find area of a right angled triangle

import java.util.Scanner;

public class FindAreaOfARightAngledTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int b, h;
        b = sc.nextInt();
        h = sc.nextInt();
        sc.close();
        System.out.println((b * h) / 2);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find area of a right angled triangle

// Find area of a right angled triangle

const areaOfRightTriangle = (base, height) => (base * height) / 2;
```

### Julia

```julia
# Write a Julia program to find area of a right angled triangle

print("Enter the base : ")
base = parse(Float64, readline(stdin))
print("Enter the height : ")
height = parse(Float64, readline(stdin))
area = 0.5 * base * height
println("Area of right angled triangle : ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find area of a right angled triangle

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val base = scanner.nextDouble()
  val height = scanner.nextDouble()

  val area = 0.5 * base * height
  println(area)
}
```

### Perl

```perl
# Write a Perl program to find area of a right angled triangle

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the base : ";
my $base = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $area = 0.5 * $base * $height;
print "Area of right angled triangle : ".$area, "\n";
```

### PHP

```php
// Write a PHP program to find area of a right angled triangle

<?php

$base = readline("Enter the base of triangle:");
$height = readline("Enter the height of triangle:");

echo "Area of triangle is: " . (0.5 * $base * $height) . "\n";
```

### Python

```python
# Write a Python program to find area of a right angled triangle

base = 2
height = 3


def area(b, h):
    return (b * h) / 2


print("Base :", base)
print("Height :", height)

print("Area :", area(base, height))
```

### R

```r
# Write a R program to find area of a right angled triangle

base = 2
height = 3
area = 0.5 * base * height
cat("Area: ", area)
```

### Ruby

```ruby
# Write a Ruby program to find area of a right angled triangle

def areaOfTriangle(base, height)
  0.5 * base * height
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the base : '
  base = gets.chomp.to_i
  print 'Please enter the height : '
  height = gets.chomp.to_i

  puts "Area of right angled triangle : #{areaOfTriangle(base, height)}"
end
```

### Rust

```rust
// Write a Rust program to find area of a right angled triangle

fn main() {
    let base = 2.0;
    let height = 3.0;
    let area = 0.5 * base * height;

    println!("Area of right angled triangle is {0}", area as f32);
}
```

### Scala

```scala
// Write a Scala program to find area of a right angled triangle

import scala.io.StdIn._;

object areaOfRightAngledTriangle{
  def main(args:Array[String]):Unit={
    var base = readLine().toInt;
    println("Enter the base : "+base);
    var height = readLine().toInt;
    println("Enter the height : "+height);
    var area = 0.5 * base * height;
    println("Area of right angled triangle : "+area);
  }
}
```

### Swift

```swift
// Write a Swift program to find area of a right angled triangle

import Swift
import Foundation

var base = 2.0
var height = 3.0

var area = 0.5 * base * height
print("Area of right angled triangle: ", area)
```

### TypeScript

```typescript
// Write a TypeScript program to find area of a right angled triangle

export function areaOfRightTriangle(base: number, height: number): number {
  return 0.5 * base * height;
}
```
