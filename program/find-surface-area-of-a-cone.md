---
title: "Find Surface Area Of A Cone"
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
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "joao-vitor-souza",
    "sureshsgith",
    "codingkush",
    "tanishq-singh-2407",
    "mrajen27",
    "Medmly20208",
    "brundabharadwaj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 4566
description: "Write a program to find surface area of a cone."
---

## Write a program to find surface area of a cone

Surface area of cone = π × `Radius` × (`Radius` + `Slant Height`)

```
Radius       : 2
Slant Height : 3

Surface area : 50.26548245743669
```

---

```c
// Write a C program to find surface area of a cone

/* C program to calculate the surface area of a cone. */

#include <stdio.h>

#define pi 3.141592653589793

float find_SurfaceArea_of_cone(float r, float s) // It is a function to find surface area

{

float SurfaceArea_of_cone;

SurfaceArea_of_cone= pi * r * s + pi * r * r ; // It is a formula for calculating a surface area of cone

return (SurfaceArea_of_cone);

}

float main()

{

float r,s ;

printf("Enter the radius of the cone:");

scanf("%f",&r);

printf("Enter the slant height of the cone:");

scanf("%f",&s);



printf("Surface Area of the cone is: %.2f", find_SurfaceArea_of_cone(r,s));

return 0;

}
```

```csharp
// Write a C# program to find surface area of a cone

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the radius :");
    double radius = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine ("Please enter the height :");
    double height = Convert.ToDouble(Console.ReadLine());
    double surfaceArea = 3.14 * radius *  (radius + height ) ;
    Console.WriteLine("Surface area of cone : "+ surfaceArea);
  }
}
```

```cpp
// Write a C++ program to find surface area of a cone

// CPP program to calculate Surface area of Cone

#include<iostream>
using namespace std;

float pi = 3.14159;

// Function to calculate surface area of cone

// Function to calculate
// Surface area of cone
float surface_area(float r, float s)
{
	return pi * r * s + pi * r * r;
}


int main()
{
	float radius,slant_height;
	float vol, sur_area;
cout<<"Enter the radius:";
cin>>radius;
cout<<"Enter the slant_height:";
cin>>slant_height;

	// surface area
	cout << "Surface Area Of Cone : "
		<< surface_area(radius, slant_height);
	return 0;
}
```

```dart
// Write a Dart program to find surface area of a cone

import 'dart:io';
void main(){
  print("Enter the radius :");
  var radius =int.parse(stdin.readLineSync());
  print("Enter the height :");
  var height =int.parse(stdin.readLineSync());
  var surface_area = 3.14 * radius * (radius + height);
  print('Surface area of cone : $surface_area');
}
```

```fsharp
// Write a F# program to find surface area of a cone

let surfaceAreaOfCone radius height : float =
   let pi = 3.14159
   pi * radius * (radius+height)

let cone = surfaceAreaOfCone 2.0 3.0

printfn "Surface area of cone: %f" cone
```

```go
// Write a Go program to find surface area of a cone

package main

import(
	"fmt"
	"math"
)

func main(){
	fmt.Printf("Enter the radius:")
	var radius float64
	fmt.Scanf("%f",&radius)
	fmt.Printf("Enter the Slant Height:")
        var sh float64
        fmt.Scanf("%f",&sh)
	Sarea:=math.Pi*radius*(radius+sh)
	fmt.Printf("Surface Area of Cone:%.1f\n",Sarea)

}
```

```haskell
-- Write a Haskell program to find surface area of a cone

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let radius = read input1 :: Float

    putStrLn "Enter slantHeight: "
    input2 <- getLine
    let slantHeight = read input2 :: Float

    let surfaceArea = pi * radius * (radius + slantHeight)
    putStrLn $ show (surfaceArea)
```

```java
// Write a Java program to find surface area of a cone

import java.util.*;
class SurfaceAreaOfACone {
    public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter radius of the cone");
     Double radius = sc.nextDouble();
      System.out.println("Enter slant height of the cone");
     Double slantHeight = sc.nextDouble();
Double area = Math.PI*radius*(radius + slantHeight);
 System.out.println("Area of a cone is "+area);
    }
}
```

````javascript
// Write a JavaScript program to find surface area of a cone

/**
 * @name This program finds the surface area of cone
 * @param {number} radius
 * @param {number} slantHeight
 * @returns {number}
 *
 * @example
 * ```js
 * const area1 = FindSurfaceAreaOfACone(2, 3) // 31.41592653589793
 * const area2 = FindSurfaceAreaOfACone(5, 10) // 235.61944901923448
 * ```
 *
 * @author Tanishq Singh
 */
function FindSurfaceAreaOfACone(radius, slantHeight) {
  const area = Math.PI * radius * (radius + slantHeight);

  return area;
}

// Console Tests
console.log("Area of cone of radius 2 and slant-height 3: ");
console.log(
  "That is " + FindSurfaceAreaOfACone(2, 3) + " // 31.41592653589793"
);

console.log("Area of cone of radius 5 and slant-height 10: ");
console.log(
  "That is " + FindSurfaceAreaOfACone(5, 10) + " // 235.61944901923448"
);
````

```julia
# Write a Julia program to find surface area of a cone

print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
area = 3.14 * radius * (radius + height)
println("Surface area of cone: ", area)
```

```kotlin
// Write a Kotlin program to find surface area of a cone

import java.util.*;
import kotlin.math.PI
fun main() {
    val sc = Scanner(System.`in`)
    println("Enter radius of the cone: ");
    val radius = sc.nextDouble();
    println("Enter slant height of the cone: ");
    val slantHeight = sc.nextDouble();
    sc.close();
    val area = PI*radius* (radius + slantHeight);
    println("Surface area of a cone is "+area);
}
```

```perl
# Write a Perl program to find surface area of a cone

print "Enter the radius: ";
my $radius = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = surfaceAreaOfCone($hours);
print "Surface area of cone : $res";

sub surfaceAreaOfCone
{
    my ($x) = @_;
    my $res = 3.14 * $radius * ($radius + $height);
    return $res ;
}
```

```php
// Write a PHP program to find surface area of a cone

<?php

function surfaceAreaOfCone($radius, $height) {
	return round(pi() * $radius * ($radius + $height), 2);
}

echo surfaceAreaOfCone(2,3)

?>
```

```python
# Write a Python program to find surface area of a cone

from math import pi


def findSurfaceAreaOfACone(radius: float, slantHeight: float) -> None:
    """
    find surface Area of A Cone
    Arguments:
        radius: float
        slantHeight: float
    Returns:
        SurfaceArea: float
    Surface area of cone = π * radius * (radius + slantHeight)
    """

    return pi * radius * (radius + slantHeight)


if __name__ == "__main__":
    Radius = float(input("Type Radius: "))
    slantHeight = float(input("Type slant height: "))

    print(findSurfaceAreaOfACone(Radius, slantHeight))

# contributed by MedMly20208 Mohamed Moulay
```

```r
# Write a R program to find surface area of a cone

radius = 2
slantHeight = 3
surfaceArea = pi * radius * ( radius + slantHeight )
cat("surfaceArea: ", surfaceArea)
```

```ruby
# Write a Ruby program to find surface area of a cone

radius=0.0;
height=0.0;
surfaceArea=0.0;

print "Enter radius: ";
radius = gets.chomp.to_f;

print "Enter slant height: ";
height = gets.chomp.to_f;

surfaceArea = 3.14 * radius * ( radius + height );

print "Surface area of cone is: ",surfaceArea.to_f.round(2);
```

```scala
// Write a Scala program to find surface area of a cone

import scala.io.StdIn._;

object surfaceAreaOfCone {
  def main(args:Array[String]):Unit={
    println("Enter the radius : ");
    var radius = readLine().toInt;
    println("Enter the height : ");
    var height = readLine().toInt;
    var result = 3.14 * radius * (radius+height);
    println("Surface area of cone :"+result);
  }
}
```

```swift
// Write a Swift program to find surface area of a cone

import Swift
import Foundation

var radius = 2.0
var height = 3.0

var surfaceArea = M_PI * radius * (radius + height)
print("Surface area of cone: ", surfaceArea)
```

````typescript
// Write a TypeScript program to find surface area of a cone

/**
 * @name This program finds the surface area of cone
 * @param {number} radius
 * @param {number} slantHeight
 * @returns {number}
 *
 * @example
 * ```ts
 * const area1: number = FindSurfaceAreaOfACone(2, 3) // 31.41592653589793
 * const area2: number = FindSurfaceAreaOfACone(5, 10) // 235.61944901923448
 * ```
 *
 * @author Tanishq Singh
 */
function FindSurfaceAreaOfACone(radius: number, slantHeight: number): number {
  const area = Math.PI * radius * (radius + slantHeight);

  return area;
}

// Console Tests
console.log("Area of cone of radius 2 and slant-height 3: ");
console.log(
  "That is " + FindSurfaceAreaOfACone(2, 3) + " // 31.41592653589793"
);

console.log("Area of cone of radius 5 and slant-height 10: ");
console.log(
  "That is " + FindSurfaceAreaOfACone(5, 10) + " // 235.61944901923448"
);
````
