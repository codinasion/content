---
title: "Convert Miles To Meters"
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
    "pokharel-nishan",
    "vedantpople4",
    "rksp25",
    "joao-vitor-souza",
    "Mudi-Igbinoba",
    "jaypavasiya",
    "avireni",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3781
description: "Write a program to convert miles to meters."
---

## Table of contents

## Write a program to convert miles to meters

1 mile = 1609.34 meters

```
Input  : 5
Output : 8046.72
```

---

### C

```c
// Write a C program to convert miles to meters

#include <stdio.h>

int main() {
    float miles;

    printf("Enter the distance in miles    :    ");
    scanf("%f", &miles);

    double meter = miles * 1609.34;

    printf("Meter   :   %.2f", meter);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert miles to meters

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double meters = miles * 1609;
    Console.WriteLine(miles+" miles is "+meters+" meters");
  }
}
```

### C++

```cpp
// Write a C++ program to convert miles to meters

#include<bits/stdc++.h>
using namespace std;
int main()
{
    int miles;
    float meter;
    cout<<"enter distance in miles"<<endl;
    cin>>miles;
    meter = miles * 1609.34;
    cout <<"converted from miles to meter\n"<<meter<<" meter\n";
    return 0;
}
```

### F#

```fsharp
// Write a F# program to convert miles to meters

let milesToMeters miles : int =
   miles * 1609

let meters = milesToMeters 5

printfn "Equivalent meters : %d" meters
```

### Go

```go
// Write a Go program to convert miles to meters

package main

import "fmt"

func main() {
	var miles float64
	fmt.Scanf("%f", &miles)
	meters := miles * 1609
	fmt.Println(meters)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert miles to meters

main :: IO ()
main = do
   putStrLn "Enter miles: "
   input1 <- getLine
   let miles = read input1 :: Float

   let meters = miles * 1609.344
   putStrLn $ show (meters)
```

### Java

```java
// Write a Java program to convert miles to meters

import java.util.*;
import java.io.*;
import java.text.*;
// import java.lang;
public class Main
{
	public static void main(String[] args) {
	    DecimalFormat df = new DecimalFormat("0.00");
	    Scanner sc=new Scanner(System.in);
	    int miles=sc.nextInt();
		System.out.println(df.format(miles*1609.344));
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert miles to meters

const conversionFactor = 1609.344;

const convertMilesToMeters = miles => {
  const milesToMeters = miles * conversionFactor;
  return milesToMeters;
};

console.log(convertMilesToMeters(5));
```

### Julia

```julia
# Write a Julia program to convert miles to meters

println("Enter value in miles: ")
miles = readline()
miles = parse(Float64, miles)
meters = round((miles * 1609.34); digits = 2)
println(miles, " miles equals ", meters, " meters")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert miles to meters

import java.util.Scanner

fun main() {
    print("Enter Miles : ")
    println()
    var miles = readLine()

    println("$miles miles in meters : " + ConvertMilesToMeters(miles!!.toInt()))

}

private fun ConvertMilesToMeters(miles: Int): Double {
    val meter = miles*1609.344;

    return  meter
}
```

### Perl

```perl
# Write a Perl program to convert miles to meters

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $meter = $miles * 1609;
print "Equivalent meters : ".$meter, "\n";
```

### PHP

```php
// Write a PHP program to convert miles to meters

<?php
$x = readline('Enter Miles: ');

$x1 = $x * 1609.344;
echo "Meters: $x1.\n";

?>
```

### Python

```python
# Write a Python program to convert miles to meters

conversionFactor = 1609.344


def convertMilesToMeters(miles):
    milesToMeters = miles * conversionFactor
    return milesToMeters


print(convertMilesToMeters(5))
```

### R

```r
# Write a R program to convert miles to meters

miles = 5
meters = miles * 1609.34
cat("meters: ", meters)
```

### Ruby

```ruby
# Write a Ruby program to convert miles to meters

print "Enter miles : \n"
miles = gets.chomp.to_i
meters = miles * 1609.34
print "Meters : #{meters}"
```

### Scala

```scala
// Write a Scala program to convert miles to meters

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val miles = scala.io.StdIn.readDouble();
	  println("Meters: " + miles * 1609.34)
	}
}
```

### Swift

```swift
// Write a Swift program to convert miles to meters

import Swift
import Foundation

print("Enter miles: ")
var miles = Double(readLine()!)!
print("Meters: ", miles * 1609.34)
```

### TypeScript

```typescript
// Write a TypeScript program to convert miles to meters

function getMeters(miles: number) {
  return miles * 1609.344;
}
console.log(getMeters(5));
```

## Similar programs

- [Convert Meters To Miles](/program/convert-meters-to-miles)
- [Convert Miles To Inches](/program/convert-miles-to-inches)
- [Convert Feet To Miles](/program/convert-feet-to-miles)
- [Convert Inches To Miles](/program/convert-inches-to-miles)
- [Convert Miles To Feet](/program/convert-miles-to-feet)
- [Convert Kilometers To Miles](/program/convert-kilometers-to-miles)
- [Convert Miles To Kilometers](/program/convert-miles-to-kilometers)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
