---
title: "Find Volume Of A Cone"
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
  ["anandfresh", "harshraj8843", "esivakumar18", "lukaszmielczarekdev"]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:23:47Z
trackId: 3871
description: "Write a program to find volume of a cone."
---

## Write a program to find volume of a cone

Volume of cone = 1/3 × π × `Radius`^2 × `Height`

```
Radius : 2
Height : 3

Volume : 12.566370614359
```

---

```c
// Write a C program to find volume of a cone

#include <stdio.h>
#include <math.h>

double volumeOfCone(double radius, double height) {
  double volume = 1.0/3.0 * M_PI * pow(radius, 2) * height;
  return volume;
}

int main(void) {
  double coneRadius = 2;
  double coneHeight = 3;
  double coneVolume = volumeOfCone(coneRadius, coneHeight);

  printf("Volume of cone = %f\n", coneVolume);

  return 0;
}
```

```csharp
// Write a C# program to find volume of a cone

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius : ");
    double radius = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height : ");
    double height = Convert.ToDouble(Console.ReadLine());
    double cone = 1 * radius * radius * height;
    Console.WriteLine("Volume of cone :"+cone);
  }
}
```

```cpp
// Write a C++ program to find volume of a cone

#include <iostream>
#include <algorithm>
#include <iomanip>
using namespace std;
int main()
{
    double Pi = 3.14285714286;  // Pi = π
    double Radius, Height;
    cin>>Radius>>Height;
    double ans = Pi*(Radius*Radius)*Height/3;
    cout << fixed <<setprecision(15);
    cout<<ans;
    return 0;
}
```

```dart
// Write a Dart program to find volume of a cone

import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the radius :");
  var radius = double.parse(stdin.readLineSync());
  print("Enter the height :");
  var height = double.parse(stdin.readLineSync());
  var volume = 1/3 * 3.14 * radius * radius * height;
  print('Volume of cone  : $volume');
}
```

```fsharp
// Write a F# program to find volume of a cone

let volumeOfCone radius height : float =
  0.33 * 3.14 * radius * radius * height

let cone = volumeOfCone 2.0 3.0

printfn "Volume of cone : %f" cone
```

```go
// Write a Go program to find volume of a cone

package main

import (
	"fmt"
	"math"
)

func volumeOfCube(r float64, h float64) float64 {
	return  1.0/3.0 * math.Pi * r * r * h
}

func main() {
	var r, h, volume float64

	fmt.Println("Enter radius : ")
	fmt.Scan(&r)
	fmt.Println("Enter height : ")
	fmt.Scan(&h)

	volume = volumeOfCube(r, h)

	fmt.Println("\nVolume : ", volume)
}
```

```haskell
-- Write a Haskell program to find volume of a cone

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let radius = read input1 :: Float

    putStrLn "Enter height: "
    input2 <- getLine
    let height = read input2 :: Float

    let volume = 1/3 * pi * radius * radius * height
    putStrLn $ show (volume)
```

```java
// Write a Java program to find volume of a cone

import java.util.Scanner;

public class FindVolumeOfACone {
    public static void main(String[] args) {
        double radius, height, volume = 0;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.print("Radius: ");
            while (!sc.hasNextDouble()) {
                System.out.print("Oops! That's not a number! \nRadius: ");
                sc.next();
            }
            radius = sc.nextDouble();
        } while (radius <= 0.0d);

        do {
            System.out.print("Height: ");
            while (!sc.hasNextDouble()) {
                System.out.print("Oops! That's not a number! \nHeight: ");
                sc.next();
            }
            height = sc.nextDouble();
        } while (height <= 0.0d);

        sc.close();

        volume = Math.PI * Math.pow(radius, 2) * (height / 3);

        System.out.printf("\nVolume : %f", volume);
    }
}
```

```javascript
// Write a JavaScript program to find volume of a cone

function findVolumeOfACone(radius, height) {
  // Find volume using this formula:
  // V = 1/3 × π × Radius^2 × Height
  return (1 / 3) * Math.PI * radius ** 2 * height;
}

findVolumeOfACone(2, 3);
```

```julia
# Write a Julia program to find volume of a cone

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
volume = 1/3 * 3.14 * (radius * radius * height)
println("Volume of cone: ", volume)
```

```kotlin
// Write a Kotlin program to find volume of a cone

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val radius = scanner.nextDouble()
  val height = scanner.nextDouble()

  val volume = 1.0/3.0 * PI * radius * radius * height
  println(volume)
}
```

```perl
# Write a Perl program to find volume of a cone

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the radius : ";
my $radius = <STDIN>;
print "Enter the height : ";
my $height = <STDIN>;
my $cone = 1/3 * 3.14 * $radius * $radius * $height;
print "Volume of cone: ".$cone, "\n";
```

```php
// Write a PHP program to find volume of a cone

<?php
	$x = readline('Enter cone radius: ');
	$y = readline('Enter cone height: ');

  $x1 = 1/3 * pi() * $x * $x * $y;
  echo "Volume of Cone: $x1 \n";
?>
```

```python
# Write a Python program to find volume of a cone

import math


def FindVolumeOfACone(radius: float, height: float) -> float:
    """
    find volume of a cone
    Arguments:
        radius: a float
        height: a float
    Returns:
        The volume of a cone : a float
    """

    return (1 / 3) * math.pi * math.pow(radius, 2) * height


if __name__ == "__main__":
    radius = float(input("Radius: "))
    height = float(input("Height: "))
    print("Volume:", FindVolumeOfACone(radius, height))
```

```r
# Write a R program to find volume of a cone

radius = 2
height = 3
volume = 1/3 * pi * radius * radius * height
cat("volume: ", volume)
```

```ruby
# Write a Ruby program to find volume of a cone

pi = Math::PI

print "Enter radius : \n"
radius = gets.chomp.to_i
print "Enter height : \n"
height = gets.chomp.to_i

volume = 1.0/3.0 * pi * radius * radius * height
print "volume : #{volume}"
```

```rust
// Write a Rust program to find volume of a cone

fn main() {
    let radius = 2.0;
    let height = 3.0;
    let volume = (1.0/3.0) * 3.14 * radius * radius * height;

    println!("Volume of cone is {0}", volume as f32);
}
```

```scala
// Write a Scala program to find volume of a cone

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val Pi = java.lang.Math.PI;
	  val radius = scala.io.StdIn.readDouble();
	  val height = scala.io.StdIn.readDouble();
	  val volume = (1.0/3.0) * Pi * radius * radius * height;
	  println("volume of the cone: " + volume);
	}
}
```

```swift
// Write a Swift program to find volume of a cone

import Swift
import Foundation

var radius = 2.0
var height = 3.0

var volume = 1.0/3.0 * M_PI * radius * radius * height
print("Volume of cone: ", volume)
```

```typescript
// Write a TypeScript program to find volume of a cone

const findVolumeOfACone = (radius: number, height: number) =>
  (Math.PI * radius ** 2 * height) / 3.0;

console.log(findVolumeOfACone(2, 3));
```
