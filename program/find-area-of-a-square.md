---
title: "Find Area Of A Square"
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
    "Idanos99",
    "sharvil1205",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "MadhuS-1605",
    "UsmanFani",
    "RShalman",
    "praveenscience",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 432
description: "Write a program to find area of a square."
---

## Write a program to find area of a square

Area of square = `Side`^2

```
Side : 2

Area : 4
```

---

```c
// Write a C program to find area of a square

#include <stdio.h>

float edge;

int main(void){
    printf("Enter the square edge:\n");
    scanf("%f", &edge);

    printf("The area of the square is: %f\n", edge*edge);

    return 0;
}
```

```csharp
// Write a C# program to find area of a square

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the side value : ");
    double side = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine("Area of square is :"+side*side);
  }
}
```

```cpp
// Write a C++ program to find area of a square

/*
Author -> Abhinav Prabhat
Date   -> 12-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    int a;
    cout << "\n\nEnter the side of square -> ";
    cin >> a;

    cout << "Area of square is -> " << a * a << endl
         << endl;

    return 0;
}
```

```dart
// Write a Dart program to find area of a square

import 'dart:io';
void main(){
  print("Enter the side :");
  var side = double.parse(stdin.readLineSync());
  var area = side * side;
  print('Area of square: $area');
}
```

```fsharp
// Write a F# program to find area of a square

let areaOfSquare side : int =
  side * side

let area = areaOfSquare 2
printfn "Area of Square : %d" area
```

```go
// Write a Go program to find area of a square

// Write a programme to find the area of a square

package main

import "fmt"

func main() {
	var num float64
	fmt.Println("Enter the value : ")
	fmt.Scan(&num)
	fmt.Println("\nThe area of the square is :", num*num)
}
```

```java
// Write a Java program to find area of a square

import java.util.*;

class area_of_a_square
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length of the side of square: ");
        int side = sc.nextInt();
        System.out.println("Area of the square with side " + side + " : " + side*side);
    }
}
```

```javascript
// Write a JavaScript program to find area of a square

// Program to divide two numbers using JavaScript
function findAreaOfASquare(side) {
  return side * side;
}

// Testing on Browser
// const side = prompt("Side: ");
// alert(findAreaOfASquare(side));

// Console Tests
const side = 5;
console.log(`Input: side = ${side}`);
console.log(`Output: ${findAreaOfASquare(side)}`);
```

```julia
# Write a Julia program to find area of a square

print("Enter the side : ")
side = parse(Float64, readline(stdin))
area = side * side
println("Area of square : ", area)
```

```kotlin
// Write a Kotlin program to find area of a square

class FindAreaOfASquare {
    fun area(side: Int): Int {
        return side * side
    }
}
```

```perl
# Write a Perl program to find area of a square

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the side : ";
my $side = <STDIN>;
my $area =  $side * $side;
print "Area of square : ".$area, "\n";
```

```php
// Write a PHP program to find area of a square

<?php
	// Find Area of a Square.
	function find_area_of_a_square($side) {
		if (!is_numeric($side)) {
			return null;
		}
		return $side * $side;
	}
	// Tests
	print_r(find_area_of_a_square(5));      // 25
```

```python
# Write a Python program to find area of a square

print("Area:", int(input("Side: ")) ** 2)
```

```r
# Write a R program to find area of a square

side = 2
area = side * side
cat("Area of square: ", area)
```

```ruby
# Write a Ruby program to find area of a square

print "Enter the length of side : "
side = gets.chomp.to_i
area = side**2
print "Area of square : #{area}"
```

```rust
// Write a Rust program to find area of a square

fn main() {
    let side = 2.0;
    let area = side * side;

    println!("Area of square is {0}", area as f32);
}
```

```scala
// Write a Scala program to find area of a square

import scala.io.StdIn._;

object areaOfSquare{
  def main(args:Array[String]):Unit={
    var side = readLine().toInt;
    println("Enter the side value : "+side);
    var area = side * side;
    println("Area of Square : "+area);
  }
}
```

```swift
// Write a Swift program to find area of a square

import Swift
import Foundation

var side = 2.0

var area = side * side
print("Aread of square: ", area)
```

```typescript
// Write a TypeScript program to find area of a square

export type SquareSide = number;
export type SquareArea = number;

export function findAreaOfSquare(side: SquareSide): SquareArea {
  return Math.pow(side, 2);
}
```
