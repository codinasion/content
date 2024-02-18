---
title: "Find Surface Area Of A Cube"
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
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "AdityaNarayanPradhan",
    "roshan798",
    "joao-vitor-souza",
    "YaSh8202",
    "CodingWithHardik",
    "hemantsuteri",
    "PraaneshSelvaraj",
    "ridsuteri",
    "tanishq-singh-2407",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:28:40Z
trackId: 1926
description: "Write a program to find surface area of a cube."
---

## Table of contents

## Write a program to find surface area of a cube

Surface area of cube = 6 × `Side`^2

```
Side : 2

Surface area : 24
```

---

### C

```c
// Write a C program to find surface area of a cube

#include <stdio.h>

int main()
{
    long n;
    scanf("%ld", &n);
    printf("%ld\n", 6 * n * n);
}
```

### C#

```csharp
// Write a C# program to find surface area of a cube

using System;

class FindSurfaceAreaOfACube
{
  static void Main()
  {
    Console.Write("Enter Side: ");
    decimal Side = Convert.ToDecimal(Console.ReadLine());
    decimal Area = 6 * (Side * Side);
    Console.WriteLine("Surface Area of Cube is:" + Area);
  }
}

// input:  Enter Side : 2
// output: Surface Area of Cube is: 24
```

### C++

```cpp
// Write a C++ program to find surface area of a cube

#include<iostream>
using namespace std;
int surfaceAreaOfCube(int &side){
	return 6 * side * side;
}
int main(){
	int side=0;
	cout<<"Enter Side of Cube: ";
	cin>>side;
	if(side<=0)
		cout<<"Invalid value (Side of a cube can not be Zero or less than Zero)"<<endl;
	else
		cout<<"Surface Area : "<<surfaceAreaOfCube(side)<<endl;
}
```

### Dart

```dart
// Write a Dart program to find surface area of a cube

import 'dart:math';

void main() {
  print(findCubeSurfaceArea(2));
}

num findCubeSurfaceArea(int side) {
  return 6 * pow(side, 2);
}
```

### F#

```fsharp
// Write a F# program to find surface area of a cube

let surfaceAreaOfCube side : int =
   6 * side * side

let area = surfaceAreaOfCube 2

printfn "Surface area of cube : %d" area
```

### Go

```go
// Write a Go program to find surface area of a cube

package main

import (
	"fmt"
)

func main() {
	var side, area float64

	fmt.Println("Enter side : ")
	fmt.Scan(&side)

	area = 6.0 * side * side

	fmt.Println("\nSurface Area : ", area)
}
```

### Haskell

```haskell
-- Write a Haskell program to find surface area of a cube

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let side = read input1 :: Float

    let surfaceArea = 6 * side * side
    putStrLn $ show (surfaceArea)
```

### Java

```java
// Write a Java program to find surface area of a cube

import java.util.*;
import java.math.*;
public class Main
{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int area=0;
		area=6*(int)Math.pow(n,2);
		System.out.println(area);
	}
}
```

### JavaScript

````javascript
// Write a JavaScript program to find surface area of a cube

/**
 *
 * @name This program find surface area of cube
 * @param {number} side Side length of the cude
 * @returns {number}
 *
 * @example
 * ```js
 * const area1 = FindSurfaceAreaOfACube(2) // 24
 * const area2 = FindSurfaceAreaOfACube(3) // 54
 * ```
 */
function FindSurfaceAreaOfACube(side) {
  return side * side * 6;
}

// Console Tests
console.log("Surface area of cube of side: 3");
console.log("That is" + FindSurfaceAreaOfACube(3) + "// 54");

console.log("Surface area of cube of side: 4");
console.log("That is" + FindSurfaceAreaOfACube(4) + "// 96");

console.log("Surface area of cube of side: 5");
console.log("That is" + FindSurfaceAreaOfACube(5) + "// 150");
````

### Julia

```julia
# Write a Julia program to find surface area of a cube

print("Enter the side: ")
side = parse(Float64, readline(stdin))
area = 6 * side * side
println("Surface area of cube: ", area)
```

### Kotlin

```kotlin
// Write a Kotlin program to find surface area of a cube

import java.util.*

fun main(args: Array<String>) {

    val scanner = Scanner(System.`in`)

    print("Enter Side of Cube : ")
    val side = scanner.nextDouble()

    val areaCube = 6*Math.pow(side, 2.toDouble())

    println("Cube Surface Area on Side ($side) is :$areaCube")
}
```

### Perl

```perl
# Write a Perl program to find surface area of a cube

my $side = <STDIN>;
$surfaceArea = 6 * $side * $side;
print "$surfaceArea"
```

### PHP

```php
// Write a PHP program to find surface area of a cube

<?php
$a=readline('Enter the side of cube');
$surfacearea =6 *($a*$a);
echo("Surface Area: ");
echo($surfacearea);
?>
```

### Python

```python
# Write a Python program to find surface area of a cube

def findSurfaceAreaOfCube(a):
    return 6 * a * a


print(findSurfaceAreaOfCube(2))
# input 2
# output 24
```

### R

```r
# Write a R program to find surface area of a cube

side = 2
surfaceArea = 6 * side * side
cat("Surface Area: ", surfaceArea)
```

### Ruby

```ruby
# Write a Ruby program to find surface area of a cube

print "Enter the length of side : "
side = gets.chomp.to_i
area = 6*side*side
print "The surface area of cube : #{area}"
```

### Scala

```scala
// Write a Scala program to find surface area of a cube

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val side = scala.io.StdIn.readDouble();
	  val surfaceArea = 6 * side * side ;
	  println("Surface area of a cube: " + surfaceArea);
	}
}
```

### Swift

```swift
// Write a Swift program to find surface area of a cube

import Foundation
import Glibc

var cubeSide : Int = 7

// Finding the total surface area of cube
var cubeArea = 6 * (cubeSide * cubeSide)

print("Side - ", cubeSide)
print("So, Area of the cube- ", cubeArea)
```

### TypeScript

```typescript
// Write a TypeScript program to find surface area of a cube

function findSurfaceAreaOfCube(numSides: number) {
  return 6 * Math.pow(numSides, 2);
}

console.log(findSurfaceAreaOfCube(2));
```
