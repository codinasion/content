---
title: "Convert Centimeters To Feet"
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
    "anandfresh",
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "Shalevro2",
    "joao-vitor-souza",
    "lukastomcisak",
    "victoriacheng15",
    "rahmat-dev",
    "PoweredByCaffein",
    "grraghav120",
    "CodingWithHardik",
    "prathameshkarambelkar",
    "Shambu-K",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T16:39:12Z
trackId: 2366
description: "Write a program to convert centimeters to feet."
---

## Table of contents

## Write a program to convert centimeters to feet

1 foot = 30.48 centimeters

```
Input  : 152.4
Output : 5
```

---

### C

```c
// Write a C program to convert centimeters to feet

#include <stdio.h>

int main(){

    float length_in_cm;
    printf("Enter length in Centimeters: \n");
    scanf("%f", &length_in_cm);

    float length_in_ft = length_in_cm / 30.48;
    printf("Length in feet = %.2f \n", length_in_ft);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert centimeters to feet

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the centimeter : ");
    double centimeter = Convert.ToDouble(Console.ReadLine());
    double feet = centimeter / 30.48;
    Console.WriteLine(+centimeter+" centimeter is "+feet+" feet");
  }
}
```

### C++

```cpp
// Write a C++ program to convert centimeters to feet

#include <iostream>

using namespace std;

int main()
{
    float cm;cin>>cm;
    cout<<(cm/30.48)<<'\n';
    return 0;
}

//Contributed by Raghav Garg (grraghav120)
```

### Dart

```dart
// Write a Dart program to convert centimeters to feet

import 'dart:io';
void main(){
  print("Enter the centimeter :");
  double cm = double.parse(stdin.readLineSync()!);
  double feet = cm/30.48;
  print('Equivalent feet : $feet');
}
```

### F#

```fsharp
// Write a F# program to convert centimeters to feet

let centimeterToFeet cm : float =
  cm / 30.48

let feet = centimeterToFeet 152.4

printfn "Equivalent days : %f" feet
```

### Go

```go
// Write a Go program to convert centimeters to feet

package main

import "fmt"

func main() {
	var input float32

	fmt.Printf("Enter length in Centimeters: ")
	fmt.Scanf("%v", &input)
	fmt.Printf("[%v] cm is [%v] feet\n", input, input*0.0328084)

}
```

### Haskell

```haskell
-- Write a Haskell program to convert centimeters to feet

main :: IO ()
main = do
   putStrLn "Enter centimeters: "
   input1 <- getLine
   let centimeters = read input1 :: Float

   let feet = centimeters / 30.48
   putStrLn $ show (feet)
```

### Java

```java
// Write a Java program to convert centimeters to feet

import java.util.Scanner;

public class ConvertCentimetersToFeet {

	public static double centimetersToFeet(double cen) {
		return cen/30.48;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter length in Centimeters: ");
        double centimeters = scanner.nextDouble();
        double feets = centimetersToFeet(centimeters);
        System.out.println(centimeters + " centimeters is equal to " + feets + " feets.");
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert centimeters to feet

function convertCentimetersToFeet(centimeters) {
  return centimeters / 30.48;
}
console.log(convertCentimetersToFeet(152.4));
```

### Julia

```julia
# Write a Julia program to convert centimeters to feet

println("Enter value in centimeters: ")
cm = readline()
cm = parse(Float64, cm)
feet = round((cm / 30.48); digits = 2)
println(cm, " cm equals ", feet, " feet")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert centimeters to feet

import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter length in Centimeters: ")
    val length_in_cm: Double = number1.nextDouble()

    val length_in_ft: Double = length_in_cm / 30.48
    println("Length in Feet = $length_in_ft")
}
```

### Perl

```perl
# Write a Perl program to convert centimeters to feet

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the centimeter : ";
my $cm = <STDIN>;
my $feet = $cm / 30.48;
print $cm." centimeters are ".$feet." feet\n";
```

### PHP

```php
// Write a PHP program to convert centimeters to feet

<?php

$centimeters = 152.4;
$feet = $centimeters / 30.48;
echo $feet;
```

### Python

```python
# Write a Python program to convert centimeters to feet

def ConvertCentimetersToFeet(centimeters):
    return centimeters / 30.48


print(round(ConvertCentimetersToFeet(152.4)))
```

### R

```r
# Write a R program to convert centimeters to feet

centimeters = 152.4
feet = centimeters / 30.48
cat("feet: ", feet)
```

### Ruby

```ruby
# Write a Ruby program to convert centimeters to feet

print "Input: "

centimeters = gets.chomp.to_i
feets = centimeters / 30.48

puts "Output: #{feets}"
```

### Rust

```rust
// Write a Rust program to convert centimeters to feet

fn main() {
	let centimeters: f64 = 152.4;
	let feet: f64 = centimeters / 30.48;
	println!("{}", feet);
}
```

### Scala

```scala
// Write a Scala program to convert centimeters to feet

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val centimeters = scala.io.StdIn.readDouble();
	  println("Feet: " + centimeters / 30.48);
	}
}
```

### Swift

```swift
// Write a Swift program to convert centimeters to feet

import Swift
import Foundation

var centimeters = 152.4

var feet =  centimeters / 30.48
print("Feet: ", feet)
```

### TypeScript

```typescript
// Write a TypeScript program to convert centimeters to feet

function ConvertCentimetersToFeet(cm: number) {
  return (cm / 30.48).toFixed(2);
}

const cm = 152.4;
console.log(`Input: ${cm} cm`);
console.log(`${cm} cm is ${ConvertCentimetersToFeet(cm)} feet`);
```
