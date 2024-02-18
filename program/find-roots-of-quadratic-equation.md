---
title: "Find Roots Of Quadratic Equation"
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
    "0ME9A",
    "akkshayTandon",
    "PavanKumarCB",
    "isyuricunha",
    "Aditya062003",
    "dhavall13",
    "mahinsa2345",
    "abhisek-1221",
    "Roybas2001",
    "champati-v",
    "pranay136",
    "GREEDnim",
    "roberanegussie",
    "Ariel201711",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 7471
description: "Write a program to find roots of quadratic equation."
---

## Table of contents

## Write a program to find roots of quadratic equation

Use the quadratic formula to find the roots of the quadratic equation

x = $\(-b &plusmn \sqrt\(b^2 - 4ac\)\)/2a$

The input will be the coefficients of $x^2$, $x$, and the constant $c$.

```
Input  : 1 2 1
Output : -1 -1
```

---

### C

```c
// Write a C program to find roots of quadratic equation

#include <math.h>
#include <stdio.h>
int main() {
    double a, b, c, discriminant, root1, root2, realPart, imagPart;
    printf("Enter coefficients a, b and c: ");
    scanf("%lf %lf %lf", &a, &b, &c);

    discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        root1 = (-b + sqrt(discriminant)) / (2 * a);
        root2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("root1 = %.2lf and root2 = %.2lf", root1, root2);
    }

    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        printf("root1 = root2 = %.2lf;", root1);
    }

    else {
        realPart = -b / (2 * a);
        imagPart = sqrt(-discriminant) / (2 * a);
        printf("root1 = %.2lf+%.2lfi and root2 = %.2f-%.2fi", realPart, imagPart, realPart, imagPart);
    }

    return 0;
}
```

### C#

```csharp
// Write a C# program to find roots of quadratic equation

using System;
public class FindRootsOfQuadraticEquation
{
    static (double, double) quadraticEquation(int a, int b, int c)
    {
        double result1;
        double result2;
        double root = Math.Sqrt((b * b) - (4 * a * c));
        result1 = (-b + root) / 2 * a;
        result2 = (-b - root) / 2 * a;
        return (result1, result2);
    }
    public static void Main(string[] args)
    {
        int a = 1; int b = 2; int c = 1;
        Console.WriteLine("Input  :  {0} {1} {2}", a, b, c);
        Console.WriteLine("Output : {0}", quadraticEquation(a, b, c));
    }
}
```

### C++

```cpp
// Write a C++ program to find roots of quadratic equation

#include <iostream>
#include <cmath>
using namespace std;

int main() {

    float a, b, c, x1, x2, discriminant, realPart, imaginaryPart;
    cout << "Enter coefficients a, b and c: ";
    cin >> a >> b >> c;
    discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        x1 = (-b + sqrt(discriminant)) / (2*a);
        x2 = (-b - sqrt(discriminant)) / (2*a);
        cout << "Roots are real and different." << endl;
        cout << "x1 = " << x1 << endl;
        cout << "x2 = " << x2 << endl;
    }

    else if (discriminant == 0) {
        cout << "Roots are real and same." << endl;
        x1 = -b/(2*a);
        cout << "x1 = x2 =" << x1 << endl;
    }

    else {
        realPart = -b/(2*a);
        imaginaryPart = sqrt(-discriminant)/(2*a);
        cout << "Roots are complex and different."  << endl;
        cout << "x1 = " << realPart << "+" << imaginaryPart << "i" << endl;
        cout << "x2 = " << realPart << "-" << imaginaryPart << "i" << endl;
    }

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find roots of quadratic equation

import 'dart:io';
import 'dart:math';

void main() {
  // take input for the coefficients of x^2, x, and constant c
  print('Enter the coefficients of x^2, x, and constant c separated by spaces:');
  List<String> input = stdin.readLineSync()!.split(' ');

  // parse the input to doubles
  double coefficientOfXSquare = double.parse(input[0]);
  double coefficientOfX = double.parse(input[1]);
  double constantTerm = double.parse(input[2]);

  // calculate the discriminant
  double discriminant = pow(coefficientOfX, 2) - 4 * coefficientOfXSquare * constantTerm;

  // check if the discriminant is positive, negative, or zero
  if (discriminant > 0) {
    // two real and distinct roots
    double root1 = (-coefficientOfX + sqrt(discriminant)) / (2 * coefficientOfXSquare);
    double root2 = (-coefficientOfX - sqrt(discriminant)) / (2 * coefficientOfXSquare);
    print('The roots are: $root1 and $root2');
  } else if (discriminant == 0) {
    // one real and repeated root
    double root = -coefficientOfX / (2 * coefficientOfXSquare);
    print('The roots are: $root and $root');
  } else {
    // two complex roots
    double realPart = -coefficientOfX / (2 * coefficientOfXSquare);
    double imaginaryPart = sqrt(-discriminant) / (2 * coefficientOfXSquare);
    print('The roots are: $realPart + ${imaginaryPart}i and $realPart - ${imaginaryPart}i');
  }
}
```

### F#

```fsharp
// Write a F# program to find roots of quadratic equation

// F# program to find roots of quadratic equation using the quadratic formula.

let findRoots (a:float, b:float, c:float) =
    let disc = b * b - 4.0 * a * c // Calculate the discriminant
    if disc < 0.0 then
        None // No real roots
    else
        let sqrtDisc = sqrt disc // Calculate the square root of the discriminant
        let root1 = (-b + sqrtDisc) / (2.0 * a) // Calculate the first root
        let root2 = (-b - sqrtDisc) / (2.0 * a) // Calculate the second root
        Some (root1, root2) // Return the roots as Some tuple

let a = 1
let b = 2
let c = 1

// Call the findRoots function with the coefficients and pattern match the result
match findRoots (a, b, c) with
| None -> printfn "No real roots" // If there are no real roots, print the message
| Some (root1, root2) -> printfn "%.0f %.0f" root1 root2 // Print the roots as integers
```

### Go

```go
// Write a Go program to find roots of quadratic equation

package main

import (
	"fmt"
	"math"
)

func findRoots(a, b, c float64) (float64, float64, error) {
	discriminant := b*b - 4*a*c
	if discriminant < 0 {
		return 0, 0, fmt.Errorf("Equation has no real roots")
	}
	root1 := (-b + math.Sqrt(discriminant)) / (2 * a)
	root2 := (-b - math.Sqrt(discriminant)) / (2 * a)
	return root1, root2, nil
}

func main() {
	a := 1.0
	b := 2.0
	c := 1.0
	root1, root2, err := findRoots(a, b, c)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("The roots are %.2f and %.2f", root1, root2)
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to find roots of quadratic equation

-- Haskell program to find roots of quadratic equation using the quadratic formula.

quadraticRoots :: Integral a => a -> a -> a -> (a, a)
quadraticRoots a b c
    | d >= 0    = (div (e + isqrt d) (2 * a), div (e - isqrt d) (2 * a)) -- Real roots
    | otherwise = (-1, -1)                                             -- Complex roots
    where
        d = b * b - 4 * a * c
        e = -b
        isqrt = floor . sqrt . fromIntegral

main :: IO ()
main = do
    let (root1, root2) = quadraticRoots 1 2 1
    putStrLn $ "Roots: " ++ show [root1, root2]
```

### Java

```java
// Write a Java program to find roots of quadratic equation

import java.util.Scanner;
class FindRootsOfQuadraticEquation
{
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);

        double a=in.nextDouble();
        double b=in.nextDouble();
        double c=in.nextDouble();

        double param=(b*b)-(4*a*c);
        double root1=( -b+Math.sqrt(param) )/(2*a);
        double root2=(  b+Math.sqrt(param) )/(2*a);

        System.out.println(root1 +" "+root2);

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find roots of quadratic equation

function findQuadEquationRoots(a, b, c) {
  if (!a) throw new Error("Not a quadratic equation!");

  const descriminant = b ** 2 - 4 * a * c;
  const solutionPart1 = (-b / 2) * a;

  if (!descriminant) return solutionPart1;
  if (descriminant < 0) throw new Error("No Solution!");

  const solutionPart2 = (descriminant ** 0.5 / 2) * a;

  const solutions = [
    solutionPart1 + solutionPart2,
    solutionPart1 - solutionPart2,
  ];

  return solutions;
}

const solutions = findQuadEquationRoots(1, -5, 6);
console.log(solutions);
```

### Julia

```julia
# Write a Julia program to find roots of quadratic equation

function find_roots(a,b,c)              #Define a function to find roots of quadratic equation
    det = b^2 - 4*a*c                   #Calculate discriminant

    if det >= 0                         #real roots
        root1 = (-b + sqrt(det))/(2*a)
        root2 = (-b - sqrt(det))/(2*a)
        println("Real roots: $root1, $root2")

    else                                #imaginary roots
        real_part = -b/(2*a)
        imag_part = sqrt(-det)/(2*a)
        println("Complex roots: $real_part+$imag_part i, $real_part - $imag_part i")
    end
end

#Take user input:
println("Format of quadratic equation: b^2-4*a*c")

println("Enter the value of a: ")
a_f = readline()
a = parse(Float64, a_f)

println("Enter the value of b: ")
b_f = readline()
b = parse(Float64, b_f)

println("Enter the value of c: ")
c_f = readline()
c = parse(Float64, c_f)

find_roots(a,b,c)
```

### Kotlin

```kotlin
// Write a Kotlin program to find roots of quadratic equation

fun main(args: Array<String>) {

    val a = 2.3
    val b = 4
    val c = 5.6
    val root1: Double
    val root2: Double
    val output: String

    val determinant = b * b - 4.0 * a * c

    // condition for real and different roots
    if (determinant > 0) {
        root1 = (-b + Math.sqrt(determinant)) / (2 * a)
        root2 = (-b - Math.sqrt(determinant)) / (2 * a)

        output = "root1 = %.2f and root2 = %.2f".format(root1, root2)
    }
    // Condition for real and equal roots
    else if (determinant == 0.0) {
        root2 = -b / (2 * a)
        root1 = root2

        output = "root1 = root2 = %.2f;".format(root1)
    }
    // If roots are not real
    else {
        val realPart = -b / (2 * a)
        val imaginaryPart = Math.sqrt(-determinant) / (2 * a)

        output = "root1 = %.2f+%.2fi and root2 = %.2f-%.2fi".format(realPart, imaginaryPart, realPart, imaginaryPart)
    }

    println(output)
}
```

### Perl

```perl
# Write a Perl program to find roots of quadratic equation

#!/usr/bin/perl

use strict;
use warnings;

# Default coefficients
my $a = 1;
my $b = 3;
my $c = 1;

my $discriminant = ($b**2) - (4 * $a * $c);

if ($discriminant >= 0) {
    my $root1 = (-$b + sqrt($discriminant)) / (2 * $a);
    my $root2 = (-$b - sqrt($discriminant)) / (2 * $a);
    if ($discriminant > 0) {
        print "$root1, $root2";
    } else {
        print "$root1, $root2";
    }
} else {
    print "No real roots exist\n";
}
```

### PHP

```php
// Write a PHP program to find roots of quadratic equation

<?php
// Give the input values for the formula
$inputA = 5;
$inputB = 10;
$inputC = 2;

// $sumD is the part of the equation that is inside of the square root
$sumD = pow($inputB, 2) - 4 * $inputA * $inputC;

// The rest of the equation. Everything is put in () so it is calculated in the right order.
$outputPositive = (-$inputB + pow($sumD, 0.5)) / (2 * $inputA);
$outputNegative = (-$inputB - pow($sumD, 0.5)) / (2 * $inputA);

echo "x = $outputPositive &nbsp; or &nbsp; x = $outputNegative";
```

### Python

```python
# Write a Python program to find roots of quadratic equation

#Importing Complex math module
import cmath

print("Enter the quadratic equation in the format: ax^2+bx+c")

a=int(input("Enter a"))
b=int(input("Enter b"))
c=int(input("Enter c"))

#Evaluating the discriminant using formula: d= b^2-4ac
d = (b**2)-(4*a*c)

#Finding the roots of equation using formula: (-b-(d)^1/2)/4a and (-b+(d)^1/2)/4a
root1 = (-b-cmath.sqrt(d))/(2*a)
root2 = (-b+cmath.sqrt(d))/(2*a)

print('The roots of quadratic equations are: ',root1, root2)
```

### R

```r
# Write a R program to find roots of quadratic equation

# Function to find roots of a quadratic equation
findRoots <- function(a, b, c) {
  discriminant <- b^2 - 4 * a * c

  if (discriminant < 0) {
    return(NULL)  # No real roots
  } else {
    sqrtDiscriminant <- sqrt(discriminant)
    root1 <- (-b + sqrtDiscriminant) / (2 * a)
    root2 <- (-b - sqrtDiscriminant) / (2 * a)
    return(c(root1, root2))  # Return the roots as a vector
  }
}

# Example usage
a <- 1
b <- 2
c <- 1

roots <- findRoots(a, b, c)

if (is.null(roots)) {
  cat("No real roots\n")
} else {
  cat("Roots:", roots[1], roots[2], "\n")
}
```

### Ruby

```ruby
# Write a Ruby program to find roots of quadratic equation

puts "Enter the coefficients of the quadratic equation (ax^2 + bx + c = 0):"
puts "Enter a:"
a = gets.chomp.to_i
puts "Enter b:"
b = gets.chomp.to_i
puts "Enter c:"
c = gets.chomp.to_i

discriminant = b**2 - 4*a*c     #calculate the discriminant

if discriminant < 0
  real_part = -b / (2*a)
  imag_part = Math.sqrt(-discriminant) / (2*a)
  puts "The roots are complex numbers: #{real_part} + #{imag_part}i and #{real_part} - #{imag_part}i"
elsif discriminant == 0
  root = -b / (2*a)
  puts "The root is #{root}."
else
  root1 = (-b + Math.sqrt(discriminant)) / (2*a)
  root2 = (-b - Math.sqrt(discriminant)) / (2*a)
  puts "The roots are real numbers: #{root1} and #{root2}."
end
```

### Rust

```rust
// Write a Rust program to find roots of quadratic equation

// Rust program to get the roots of a quadratic equation

fn roots(a:f32, b:f32, c:f32) {

    let disc:f32 = b * b - 4.0 * a * c;
    let root_a:f32 = (-b + disc.sqrt()) / (2.0 * a);
    let root_b:f32 = (-b - disc.sqrt()) / (2.0 * a);

    println!("Root1 = {}  ", root_a);
    println!("Root2 = {}  ", root_b);
}

fn main() {
    roots(1.0,-5.0,6.0);
}
```

### Scala

```scala
// Write a Scala program to find roots of quadratic equation

import scala.math.sqrt
object Main {
  def main(args: Array[String]) {
    val a = 2
    val b = 5
    val c = 3
    val root1 = (-b + sqrt(b*b - 4*a*c))/(2*a)
    val root2 = (-b - sqrt(b*b - 4*a*c))/(2*a)
    println("Roots of the quadratic equation are: " + root1 + " and " + root2)
  }
}
```

### Swift

```swift
// Write a Swift program to find roots of quadratic equation

import Foundation

func findRoots(a: Double, b: Double, c: Double) -> (Double, Double) {
    let delta = b * b - 4 * a * c
    let sqrtDelta = sqrt(abs(delta))
    let root1 = (-b + sqrtDelta) / (2 * a)
    let root2 = (-b - sqrtDelta) / (2 * a)
    return (root1, root2)
}

let input = "1 2 1"
let coefficients = input.components(separatedBy: " ").compactMap(Double.init)
let (root1, root2) = findRoots(a: coefficients[0], b: coefficients[1], c: coefficients[2])
print("\(root1) \(root2)")
```

### TypeScript

```typescript
// Write a TypeScript program to find roots of quadratic equation

function findQuadEquationRoots(a: number, b: number, c: number) {
  if (!a) throw new Error("Not a quadratic equation!");

  const descriminant = b ** 2 - 4 * a * c;
  const solutionPart1 = (-b / 2) * a;

  if (!descriminant) return solutionPart1;
  if (descriminant < 0) throw new Error("No Solution!");

  const solutionPart2 = (descriminant ** 0.5 / 2) * a;

  const solutions = [
    solutionPart1 + solutionPart2,
    solutionPart1 - solutionPart2,
  ];

  return solutions;
}

const solutions = findQuadEquationRoots(1, -5, 6);
console.log(solutions);
```
