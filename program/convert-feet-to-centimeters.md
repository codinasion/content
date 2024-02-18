---
title: "Convert Feet To Centimeters"
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
    "RiteshK-611",
    "esivakumar18",
    "Osher160",
    "Omer-Levi",
    "sharvil1205",
    "rksp25",
    "TrentGlimp",
    "DiamonndAde",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2986
description: "Write a program to convert feet to centimeters."
---

## Table of contents

## Write a program to convert feet to centimeters

1 foot = 30.48 centimeters

```
Input  : 5
Output : 152.4
```

---

### C

```c
// Write a C program to convert feet to centimeters

#include <stdio.h> /*printf, scanf*/

double ConvertToCm(double feet);

int main()
{
    double feet = 0;

    if(1 != scanf("%lf",&feet))
    {
        return -1;
    }

    printf("%.1f\n",ConvertToCm(feet));

    return 0;
}


double ConvertToCm(double feet)
{
    return feet * 30.48;
}
```

### C#

```csharp
// Write a C# program to convert feet to centimeters

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet : ");
    double feet = Convert.ToDouble(Console.ReadLine());
    double centimeter = feet * 30.48;
    Console.WriteLine(feet+" feet is "+centimeter+" centimeter");
  }
}
```

### C++

```cpp
// Write a C++ program to convert feet to centimeters

#include <iostream>

#define FOOT 30.48

int main() {
    int num = 0;
    std::cin >> num;
    std::cout << num*FOOT;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert feet to centimeters

import 'dart:io';
void main(){
  print("Enter the feet :");
  int feet = int.parse(stdin.readLineSync()!);
  double cm = feet * 30.48;
  print('Equivalent centimeter : $cm');
}
```

### F#

```fsharp
// Write a F# program to convert feet to centimeters

let feetToCentimeter feet : float =
  feet * 30.48

let cm =  feetToCentimeter 5.0

printfn "Equivalent centimeter : %f" cm
```

### Go

```go
// Write a Go program to convert feet to centimeters

package main

import "fmt"

func feet_to_centimeters(feet float32) {
	centimeters := feet * 30.48

	fmt.Printf("Input: %f\nOutput: %f", feet, centimeters)

}

func main() {
	var number float32
	fmt.Scanln(&number)
	feet_to_centimeters(number)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert feet to centimeters

main :: IO ()
main = do
   putStrLn "Enter feet: "
   input1 <- getLine
   let feet = read input1 :: Float

   let centimeters = feet * 30.48
   putStrLn $ show (centimeters)
```

### Java

```java
// Write a Java program to convert feet to centimeters

import java.util.*;
class convert_feet_to_centimeters
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter feet: ");
        double ft = sc.nextDouble();
        System.out.println(ft + " feet = " + ft*30.48 + " cm");
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert feet to centimeters

let oneFoot = 30.48;
function feetToCentimeters(feet) {
  let result = oneFoot * feet;
  console.log(`${feet} feet = ${result} centimeters`);
}
feetToCentimeters(5);
```

### Julia

```julia
# Write a Julia program to convert feet to centimeters

println("Enter value in feet: ")
feet = readline()
feet = parse(Float64, feet)
cm = round((feet * 30.48); digits=2)
println(feet, " feet equals ", cm, " centimeters")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert feet to centimeters

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("$min feet into centimeters = " + ConvertFeetToCentimeters(min!!.toDouble()))

}

private fun ConvertFeetToCentimeters(feet: Double): Double {
    var cm = feet * 30.48

    return cm
}
```

### Perl

```perl
# Write a Perl program to convert feet to centimeters

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the feet : ";
my $feet = <STDIN>;
my $centimeter = $feet * 30.48 ;
print $feet." feet is ".$centimeter." centimeters", "\n";
```

### PHP

```php
// Write a PHP program to convert feet to centimeters

<?php
	$x = readline('Enter Feet: ');

  $x1 = $x * 30.48;
  echo "Centimeters: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert feet to centimeters

oneFoot = 30.48


def feetToCentimeters(feet):
    result = oneFoot * feet
    print(f"{feet} feet = {result} centimeters")


feetToCentimeters(5)
```

### R

```r
# Write a R program to convert feet to centimeters

feet = 5
centimeters = feet * 30.48
cat("centimeters: ", centimeters)
```

### Ruby

```ruby
# Write a Ruby program to convert feet to centimeters

print "Enter feet : \n"
feet = gets.chomp.to_i

centimeters = feet * 30.48
print "centimeters : #{centimeters}"
```

### Scala

```scala
// Write a Scala program to convert feet to centimeters

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val feet = scala.io.StdIn.readDouble();
	  println("Centimeters: " + feet * 30.48)
	}
}
```

### Swift

```swift
// Write a Swift program to convert feet to centimeters

import Swift
import Foundation

var foot = 5.0
var centimeters = foot * 30.48
print("centimeters: ",centimeters)
```

### TypeScript

```typescript
// Write a TypeScript program to convert feet to centimeters

// TypeScript program to convert feet to centimeters
function convertFeetToCent(i: number): number {
  return i * 30.48;
}

console.log(convertFeetToCent(1));
```
