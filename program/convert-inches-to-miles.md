---
title: "Convert Inches To Miles"
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
    "RiteshK-611",
    "esivakumar18",
    "joao-vitor-souza",
    "prathameshkarambelkar",
    "grraghav120",
    "rahmat-dev",
    "sumeetk10",
    "nickdark",
    "greeshma-d",
    "Summiedev",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1182
description: "Write a program to convert inches to miles."
---

## Write a program to convert inches to miles

1 mile = 63360 inches

```
Input  : 316800
Output : 5
```

---

```c
// Write a C program to convert inches to miles

#include <stdio.h>

int main(){

    int n;
    scanf("%d",&n);
    printf("%d",n/63360);
    return 0;
}
```

```csharp
// Write a C# program to convert inches to miles

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the inches : ");
    double inches = Convert.ToDouble(Console.ReadLine());
    double miles = inches / 63360;
    Console.WriteLine(inches+" inches is "+miles+" miles");
  }
}
```

```cpp
// Write a C++ program to convert inches to miles

/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float inches;
    cout << "Enter the distance in inches -> ";
    cin >> inches;

    cout << "Distance in miles -> " << inches / 63360 << endl
         << endl;

    return 0;
}
```

```dart
// Write a Dart program to convert inches to miles

import 'dart:io';
void main(){
    stdout.write("Input: ");

    var output_miles = (int.parse(stdin.readLineSync()!)/63360);
    print("Output: ${output_miles.toInt()}");
}
```

```fsharp
// Write a F# program to convert inches to miles

let inchesToMiles (inches: int) =
    inches / 63360

let miles = inchesToMiles 316800
printfn "Equivalent Miles : %d" miles
```

```go
// Write a Go program to convert inches to miles

package main

import "fmt"

func convertInchesToMiles(inches int) float64 {
	return float64(inches / 63360)
}

func main() {
	fmt.Println(convertInchesToMiles(950700))
}
```

```java
// Write a Java program to convert inches to miles

import java.util.Scanner;

public class ConvertInchesToMiles {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter Inches:");
            int inches = sc.nextInt();

            int mile = inches/63360;
            System.out.println("Miles:"+mile);
        }
    }
}
```

```javascript
// Write a JavaScript program to convert inches to miles

function inchesToMiles(inches) {
  // 1 mile = 63360 inches
  // 316800 inches = x miles
  // 63360 x = 316800
  // x = 316800 / 63360

  let miles = inches / 63360;
  return miles;
}

console.log("Converting Inches to Miles", inchesToMiles(12345) + " miles");
```

```julia
# Write a Julia program to convert inches to miles

println("Enter value in inches: ")
inches = readline()
inches = parse(Float64, inches)
miles = round((inches / 63360); digits = 2)
println(inches, " inches equals ", miles, " miles")
```

```kotlin
// Write a Kotlin program to convert inches to miles

import java.util.Scanner

fun main() {
    val number1 = Scanner(System.`in`)
    println("Enter the Length: ")
    val inches: Double = number1.nextDouble()


    val miles = inches / 63360
    println("$inches inches to miles is $miles ")
}
```

```perl
# Write a Perl program to convert inches to miles

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the inches : ";
my $inches = <STDIN>;
my $miles = $inches/63360;
print $inches." inches is ".$miles." miles", "\n";
```

```php
// Write a PHP program to convert inches to miles

<?php

function convert_inches_to_miles($inch)
{
	return $inch / 63360;
}

echo convert_inches_to_miles(316800);
```

```python
# Write a Python program to convert inches to miles

input_inches = int(input("Input: "))
output_miles = int(input_inches / 63360)
print(f"Output: {output_miles}")
```

```r
# Write a R program to convert inches to miles

inches = 316800
miles = inches / 63360
cat("miles: ", miles)
```

```ruby
# Write a Ruby program to convert inches to miles

def inchesToMiles(inches)
  inches / 63360
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the inches : '
  inches = gets.chomp.to_i

  puts "#{inches} inches is #{inchesToMiles(inches)} miles"
end
```

```rust
// Write a Rust program to convert inches to miles

fn convert_inches_to_miles(inch: u64) -> u64 {
	return inch / 63360;
}

fn main() {
	println!("{}", convert_inches_to_miles(316800));
}
```

```scala
// Write a Scala program to convert inches to miles

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val inches = scala.io.StdIn.readDouble();
	  println("miles: " + inches / 63360);
	}
}
```

```swift
// Write a Swift program to convert inches to miles

import Swift
import Foundation

print("Enter inches: ")
var inches = Int(readLine()!)!
print("Miles: ", inches / 63360)
```

```typescript
// Write a TypeScript program to convert inches to miles

function inchesToMiles(inches: number) {
  // 1 mile = 63360 inches
  // 316800 inches = x miles
  // 63360 x = 316800
  // x = 316800 / 63360

  const miles = inches / 63360;
  return miles;
}

console.log("Converting Inches to Miles", inchesToMiles(12345) + " miles");
```
