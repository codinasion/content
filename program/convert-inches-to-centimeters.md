---
title: "Convert Inches To Centimeters"
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
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "Ishay1997",
    "esivakumar18",
    "Osher160",
    "rksp25",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "MadhuS-1605",
    "sahooankeeta",
    "rakibul-islam-raju",
    "urlunaticguy",
    "Meldiron",
    "ynbh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 648
description: "Write a program to convert inches to centimeters."
---

## Write a program to convert inches to centimeters

1 inch = 2.54 centimeters

```
Input  : 5
Output : 12.7
```

---

```c
// Write a C program to convert inches to centimeters

#include<stdio.h>

int main()
{
    float inch,centimeter;
    printf("Enter the value in inch : ");
    scanf("%f",&inch);
    centimeter=inch*2.54;
    printf("The value in centimeter : %.2f",centimeter);
}
```

```csharp
// Write a C# program to convert inches to centimeters

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the inches : ");
    double inches = Convert.ToDouble(Console.ReadLine());
    double centimeter = inches * 2.54;
    Console.WriteLine(inches+" inches is "+centimeter+" centimeter");
  }
}
```

```cpp
// Write a C++ program to convert inches to centimeters

#include<iostream> //cout, cin

float ConvertToCm(int inches);

int main()
{
    int inches = 0;

    std::cin >> inches;

    std::cout << (ConvertToCm(inches));

    return 0;
}

float ConvertToCm(int inches)
{
    return inches * 2.54;
}
```

```dart
// Write a Dart program to convert inches to centimeters

import 'dart:io';
void main(){
  print("Enter the inches :");
  var inches = double.parse(stdin.readLineSync()!);
  var cm = inches * 2.54 ;
  print('Equivalent Centimeter: $cm');
}
```

```go
// Write a Go program to convert inches to centimeters

package main

import (
	"fmt"
)

func main() {
	var inches float64
	fmt.Println("Enter Inches:")
  fmt.Scan(&inches)
	fmt.Println("Week:", (inches * 2.54))
}
```

```java
// Write a Java program to convert inches to centimeters

import java.util.*;
class ConvertInchesToCentimeters
{
  public static double inchesToCentimeter(double in)
  {
    return in*2.54;
  }
  public static void main(String args[])
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter inches");
    double in=sc.nextDouble();
    System.out.println(inchesToCentimeter(in));
  }
}
```

```javascript
// Write a JavaScript program to convert inches to centimeters

/**
 *
 * @param {number} value - value of measurement in inches
 * @returns {number} value of measurement in centimeters
 */
function convertInchesToCentimeters(value) {
  return value * 2.54;
}
```

```julia
# Write a Julia program to convert inches to centimeters

print("Enter the inches : ")
inches = parse(Float64, readline(stdin))
cm = inches * 2.54
println("Equivalent Centimeter : ", cm)
```

```kotlin
// Write a Kotlin program to convert inches to centimeters

fun main() {
    print("Enter inches : ")
    println()
    var input = readLine()

    println("$input inches = " + ConvertInchesToCentimeters(input!!.toDouble()) + " centimeters")

}

private fun ConvertInchesToCentimeters(inches: Double): Double {
    var cm = inches *  2.54

    return cm
}
```

```perl
# Write a Perl program to convert inches to centimeters

print "Enter the inches  : ";
my $inches = <STDIN> ;
my $res = inchesToCentimetres();
print "Equivalent Centimetres : $res";

sub inchesToCentimetres
{

    my ($x) = @_;

    my $res = $inches * 2.54;

    return $res ;

}
```

```php
// Write a PHP program to convert inches to centimeters

<?php
	// Convert inches to centimeters.
	// 1 inch = 2.54 centimeters
	function convert_inches_to_centimeters($in) {
		if (!is_numeric($in)) {
			return null;
		}
		return $in * 2.54;
	}
	// Tests
	print_r(convert_inches_to_centimeters(5));          // 12.7
	print_r(convert_inches_to_centimeters(10));         // 25,4
	print_r(convert_inches_to_centimeters("5"));        // 12.7
	print_r(convert_inches_to_centimeters("Hello"));    // null
```

```python
# Write a Python program to convert inches to centimeters

inch_value = int(input("Enter the value in inch: "))
cm_value = 2.54 * inch_value

print(f"Input  : {inch_value}")
print(f"Output : {cm_value}")
```

```r
# Write a R program to convert inches to centimeters

inches = 5
centimeters = inches * 2.54
cat("Centimeters: ", centimeters)
```

```ruby
# Write a Ruby program to convert inches to centimeters

print "Enter the value in inch : "
inch = gets.chomp.to_f
cm = inch*2.54
print "The value in centimeter : #{cm}"
```

```scala
// Write a Scala program to convert inches to centimeters

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val inches = scala.io.StdIn.readDouble();
	  println("Centimeters: " + inches * 2.54);
	}
}
```

```swift
// Write a Swift program to convert inches to centimeters

import Foundation

let inch = 5

let centimeters = Double(inch) * 2.54

print(centimeters)
```

```typescript
// Write a TypeScript program to convert inches to centimeters

function inchesToCentimeters(inches: number): number {
  return inches * 2.54;
}

const inches = 10;
const centimeters = inchesToCentimeters(inches);
console.log(`${inches} inches is equal to ${centimeters} centimeters.`);
```
