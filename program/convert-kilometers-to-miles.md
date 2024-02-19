---
title: "Convert Kilometers To Miles"
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
    "RiteshK-611",
    "esivakumar18",
    "pokharel-nishan",
    "vedantpople4",
    "Medmly20208",
    "joao-vitor-souza",
    "rksp25",
    "tanishq-singh-2407",
    "WillLowrie",
    "VasireddyGanesh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-09-06T05:20:39Z
trackId: 4011
description: "Write a program to convert kilometers to miles."
---

## Table of contents

## Write a program to convert kilometers to miles

1 mile = 1.609344 kilometers

```
Input  : 8.04672
Output : 5
```

---

### C

```c
// Write a C program to convert kilometers to miles

#include <stdio.h>

int main()
{
    float kilometer;
    int miles;

    printf("Enter kilometer :    ");
    scanf("%f", &kilometer);

    miles = kilometer/1.609;

    printf("%f  kilometer is    :   %i  miles", kilometer, miles);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert kilometers to miles

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the kilometer : ");
    double km = Convert.ToDouble(Console.ReadLine());
    double miles = km/1.609;
    Console.WriteLine(km+" kilometer is "+miles+" miles");
  }
}
```

### C++

```cpp
// Write a C++ program to convert kilometers to miles

#include <iostream>

using namespace std;

int main() {
    // Write C++ code here
    float miles,kilometers;
    cout << "enter kilometers"<<endl;
    cin>>kilometers;

    cout<<"miles "<<kilometers/1.609;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert kilometers to miles

import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the kilometer :");
  var kilometer =double.parse(stdin.readLineSync());
  var miles = (kilometer / 1.60).round();
  print('Equivalent miles : $miles');
}
```

### F#

```fsharp
// Write a F# program to convert kilometers to miles

let kilometerToMiles km : float =
   km / 1.60

let miles = kilometerToMiles 8.04672

printfn "Equivalent miles : %f" miles
```

### Go

```go
// Write a Go program to convert kilometers to miles

package main

import "fmt"

func main() {
	var km float64
	fmt.Scanf("%f", &km)
	miles := 0.621 * km
	fmt.Println(miles)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert kilometers to miles

main :: IO ()
main = do
   putStrLn "Enter kilometers: "
   input1 <- getLine
   let kilometers = read input1 :: Float

   let miles = kilometers / 1.609344
   putStrLn $ show (miles)
```

### Java

```java
// Write a Java program to convert kilometers to miles

import java.util.Scanner;

public class ConvertKilometersToMiles{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter Kilometers:");
            double km = sc.nextDouble();

            double miles = km/(1.609);

            System.out.println("Distance in mile:" +miles);
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert kilometers to miles

/**
 * Add two numbers together
 * @param  {Float} Kilometers a distance with kilometers unit
 *
 * @return {Float}    the distance with miles unit
 */

function ConvertKilometersToMiles(Kilometers) {
  return Kilometers / 1.609;
}

//test
console.log(ConvertKilometersToMiles(8.04672));
```

### Julia

```julia
# Write a Julia program to convert kilometers to miles

println("Enter value in kilometers: ")
km = readline()
km = parse(Float64, km)
miles = round((km / 1.609); digits = 2)
println(km, " kilometers equals ", miles, " miles")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert kilometers to miles

import java.util.Scanner

fun main() {
    print("Enter Kilometers : ")
    println()
    var kilometers = readLine()

    println("Distance in mile : " + ConvertKilometersToMiles(kilometers!!.toDouble()))

}

private fun ConvertKilometersToMiles(km: Double): Double {
    val miles = km / 1.609;

    return  miles
}
```

### Perl

```perl
# Write a Perl program to convert kilometers to miles

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the kilometer : ";
my $km = <STDIN>;
my $miles = $km / 1.609;
print $km." kilometers are ".$miles." miles\n";
```

### PHP

```php
// Write a PHP program to convert kilometers to miles

<?php
$x = readline('Enter Kilometers: ');

$x1 = $x/1.609;
echo "Miles: $x1.\n";

?>
```

### Python

```python
# Write a Python program to convert kilometers to miles

def km_to_miles(value_in_km):
    return round(value_in_km / 1.609, 2)


print("Miles:\n", km_to_miles(float(input("Kilometers: "))))
```

### R

```r
# Write a R program to convert kilometers to miles

kilometers = 8.04672
miles = kilometers / 1.609344
cat("miles: ", miles)
```

### Ruby

```ruby
# Write a Ruby program to convert kilometers to miles

def kilometerToMiles(km)
  km / 1.609
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the Kilometer : '
  km = gets.chomp.to_i

  puts "#{km} kilometer is #{kilometerToMiles(km)} miles"
end
```

### Scala

```scala
// Write a Scala program to convert kilometers to miles

import scala.io.StdIn._;

object kmtoMiles {
  def main(args:Array[String]):Unit={
    println("Enter the Kilometer : ");
    var km = readLine();
    var miles = km.toDouble / 1.609;
    println(km+" kilometer is "+miles+" miles");
  }
}
```

### Swift

```swift
// Write a Swift program to convert kilometers to miles

import Swift
import Foundation

print("Enter kilometers: ")
var kilometers = Double(readLine()!)!
print("Miles: ", kilometers / 1.60934)
```

### TypeScript

````typescript
// Write a TypeScript program to convert kilometers to miles

/**
 *
 * @name This program convert kilometrs to miles
 * @param {number} kilometers
 * @returns {number}
 *
 * @example
 * ```ts
 * const mile1 = ConvertKilometersToMiles(8.04672) // 5
 * const mile2 = ConvertKilometersToMiles(16.08) // 10
 * ```
 *
 * @author Tanishq Singh
 */
const ConvertKilometersToMiles = (kilometers: number): number =>
  kilometers * 0.621371;

// Console Tests
console.log("Number of miles in 1.6 kilometers: ");
console.log("That is " + ConvertKilometersToMiles(1.6) + " // 0.9941936");

console.log("Numer of miles in 3.2 kilometers: ");
console.log("That is " + ConvertKilometersToMiles(3.2) + " // 1.9883872");
````

## Similar programs

- [Convert Kilometers To Miles](/program/convert-kilometers-to-miles)
- [Convert Feet To Miles](/program/convert-feet-to-miles)
- [Convert Miles To Feet](/program/convert-miles-to-feet)
- [Convert Miles To Inches](/program/convert-miles-to-inches)
- [Convert Inches To Miles](/program/convert-inches-to-miles)
- [Convert Meters To Miles](/program/convert-meters-to-miles)
- [Convert Miles To Meters](/program/convert-miles-to-meters)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
