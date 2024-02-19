---
title: "Convert Miles To Inches"
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
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "anandfresh",
    "vedantpople4",
    "rksp25",
    "joao-vitor-souza",
    "lukastomcisak",
    "LukasMikolaj",
    "sushmita2109",
    "aldyadk",
    "william-monroy",
    "manyadua16",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3090
description: "Write a program to convert miles to inches."
---

## Table of contents

## Write a program to convert miles to inches

1 mile = 63360 inches

```
Input  : 5
Output : 316800
```

---

### C

```c
// Write a C program to convert miles to inches

#include<stdio.h>
int main()
{
    int mile,inch;
    printf("Enter the miles you want to convert:\n");
    scanf("%d",&mile);
    inch=mile*63360;
    printf("%d INCHES\n",inch);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert miles to inches

using System;
public class ConvertMilesToInches
{
 public static void Main(string[] args)
    {
      if (args.Length == 0)
	    {
		    Console.WriteLine("Invalid args");
		    return;
	    }
        int miles = Int32.Parse( args[0]);
        Console.WriteLine(miles * 63360);
    }
}
```

### C++

```cpp
// Write a C++ program to convert miles to inches

#include <iostream>

int main() {
    double miles;
    std::cin >> miles;
    std::cout << miles * 63360 << std::endl;
    return 0;
}
```

### F#

```fsharp
// Write a F# program to convert miles to inches

let milesToInches miles : int =
  miles * 63360

let inches =  milesToInches 5

printfn "Equivalent inches : %d" inches
```

### Go

```go
// Write a Go program to convert miles to inches

package main

import "fmt"

func main() {
	var miles int
	fmt.Scanf("%d", &miles)
	inches := 63360 * miles
	fmt.Println(inches)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert miles to inches

main :: IO ()
main = do
   putStrLn "Enter miles: "
   input1 <- getLine
   let miles = read input1 :: Float

   let inches = miles * 63360
   putStrLn $ show (inches)
```

### Java

```java
// Write a Java program to convert miles to inches

import java.util.Scanner;

public class ConvertMilesToInches {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int miles;
        int inches;

        System.out.print("Input: ");
        miles = input.nextInt();

        input.close();

        inches = miles * 63360;

        System.out.printf("Output: %d", inches);
        System.out.println();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert miles to inches

function ConvertMilesToInches(miles) {
  return miles * 63360;
}

console.log("5 miles is", ConvertMilesToInches(5), "inches");
```

### Julia

```julia
# Write a Julia program to convert miles to inches

println("Enter value in miles: ")
miles = readline()
miles = parse(Float64, miles)
inches = round((miles * 63360); digits=2)
println(miles, " miles equals ", inches, " inches")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert miles to inches

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("$min miles into inches = " + ConvertMilesToInches(min!!.toDouble()))

}

private fun ConvertMilesToInches(miles: Double): Double {
    var inches = miles * 63360

    return inches
}
```

### Perl

```perl
# Write a Perl program to convert miles to inches

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $inches = $miles * 63360;
print $miles." miles is ".$inches." inches", "\n";
```

### PHP

```php
// Write a PHP program to convert miles to inches

<?php
	$x = readline('Enter Miles: ');

  $x1 = $x * 63360;
  echo "Inches: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert miles to inches

length = int(input("Input distance in miles: "))
d_inches = length * 63360

print("The distance in inches is %i inches." % d_inches)
```

### R

```r
# Write a R program to convert miles to inches

miles = 5
inches = miles * 63360
cat("inches: ", inches)
```

### Ruby

```ruby
# Write a Ruby program to convert miles to inches

print "Input: "

miles = gets.chomp.to_i
inches = miles * 63360

puts "Output: #{inches}"
```

### Scala

```scala
// Write a Scala program to convert miles to inches

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val miles = scala.io.StdIn.readDouble();
	  println("Inches: " + miles * 63360)
	}
}
```

### Swift

```swift
// Write a Swift program to convert miles to inches

import Swift
import Foundation

var miles = 5

var inches = miles * 63360
print("Inches: ", inches)
```

### TypeScript

```typescript
// Write a TypeScript program to convert miles to inches

/**
 * 1 mile = 63360 inches
 * @param {number} miles
 * @returns {number} converstion of miles to inches
 */

const ONE_MILE_PER_INCH: number = 63360;

export function convertMilesToInches(miles: number): number {
  return miles * ONE_MILE_PER_INCH;
}
```

## Similar programs

- [Convert Miles To Inches](/program/convert-miles-to-inches)
- [Convert Feet To Inches](/program/convert-feet-to-inches)
- [Convert Inches To Feet](/program/convert-inches-to-feet)
- [Convert Centimeters To Inches](/program/convert-centimeters-to-inches)
- [Convert Inches To Centimeters](/program/convert-inches-to-centimeters)
- [Convert Miles To Feet](/program/convert-miles-to-feet)
- [Convert Feet To Miles](/program/convert-feet-to-miles)
- [Convert Kilometers To Miles](/program/convert-kilometers-to-miles)
- [Convert Miles To Kilometers](/program/convert-miles-to-kilometers)
- [Convert Meters To Miles](/program/convert-meters-to-miles)
