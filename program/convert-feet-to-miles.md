---
title: "Convert Feet To Miles"
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
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "NicholasCloud4",
    "rafaover",
    "rksp25",
    "joao-vitor-souza",
    "MadhuS-1605",
    "jyotik09",
    "anxkhn",
    "praveenscience",
    "EniolaAdemola",
    "melko",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 377
description: "Write a program to convert feet to miles."
---

## Table of contents

## Write a program to convert feet to miles

1 mile = 5280 feet

```
Input  : 26400
Output : 5
```

---

### C

```c
// Write a C program to convert feet to miles

#include <stdio.h>

int main()
{
    int feet;
    scanf("%d", &feet);
    int miles = feet / 5280;
    printf("%d", miles);
    // float miles = feet / 5280.0;
    // printf("%f", miles);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert feet to miles

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the feet : ");
    double feet = Convert.ToDouble(Console.ReadLine());
    double miles = Math.Round(feet / 5280, 2);
    Console.WriteLine(feet+" feet is "+miles+" miles");
  }
}
```

### C++

```cpp
// Write a C++ program to convert feet to miles

#include <iostream>

int main()
{
    float feet;
    std::cin >> feet;
    float miles = feet / 5280;
    std::cout << feet;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert feet to miles

import 'dart:io';
void main(){
  print("Enter the feet :");
  int feet = int.parse(stdin.readLineSync()!);
  int miles = feet~/5280;
  print('Equivalent miles : $miles');
}
```

### F#

```fsharp
// Write a F# program to convert feet to miles

let feetToMiles feet : int =
  feet / 5280

let miles =  feetToMiles 26400

printfn "Equivalent miles : %d" miles
```

### Go

```go
// Write a Go program to convert feet to miles

package main

import (
	"fmt"
)

func main() {
	var feet float64
  fmt.Println("Enter Feet(s):")
  fmt.Scan(&feet)
  fmt.Println("Feet:", (feet / 5280))
}
```

### Java

```java
// Write a Java program to convert feet to miles

import java.util.Scanner;
public class ConvertFeetToMiles {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("This program will convert feet to miles!");
        System.out.print("Enter feet: ");
        int feet = scan.nextInt(); //scanning for user input of feet

        int miles = feet / 5280; //conversion for feet to miles
        System.out.println("Miles: " + miles); //output result in miles
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert feet to miles

function feetToMiles(feet) {
  return feet / 5280;
}

console.log("JS program to convert feet to miles: 1 mile = 5280 feet");
let input = 26400;
console.log(`${input} feet is ${feetToMiles(input)} miles`); // 5
```

### Julia

```julia
# Write a Julia program to convert feet to miles

println("Enter value in feet: ")
feet = readline()
feet = parse(Float64, feet)
miles = round((feet / 5280); digits = 2)
println(feet, " feet equals ", miles, " miles")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert feet to miles

fun main() {
    print("Enter Feet : ")
    println()
    var input = readLine()

    println("$input feet = " + ConvertFeetToMiles(input!!.toDouble()) + " miles")

}

private fun ConvertFeetToMiles(feet: Double): Double {
    var miles = feet / 5280

    return miles
}
```

### Perl

```perl
# Write a Perl program to convert feet to miles

print "Enter the feet  : ";
my $feet = <STDIN> ;

my $res = feetToMiles();
print "Equivalent Miles : $res";

sub feetToMiles
{
    my ($x) = @_;
    my $res = $feet / 5280;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to convert feet to miles

<?php
	// Convert feet to miles.
	// 1 mile = 5280 feet
	function convert_feet_to_miles($ft) {
		if (!is_numeric($ft)) {
			return null;
		}
		return $ft / 5280;
	}
	// Tests
	print_r(convert_feet_to_miles(5280));      // 1
	print_r(convert_feet_to_miles(15280));     // 2.89
	print_r(convert_feet_to_miles("5280"));    // 1
	print_r(convert_feet_to_miles("Hello"));   // null or empty
```

### Python

```python
# Write a Python program to convert feet to miles

print("Python program to convert feet to miles \n 1 mile = 5280 feet")


def feetToMiles(num):
    return num / 5280


feet = 26400
miles = feetToMiles(feet)
print(f"Input  : {feet}")
print(f"Output : {miles}")
```

### Ruby

```ruby
# Write a Ruby program to convert feet to miles

puts "Please enter number of feet: "

feet = gets.chomp.to_f
miles = feet / 5280

puts "It's #{miles} miles"
```

### Rust

```rust
// Write a Rust program to convert feet to miles

fn main() {
    println!("This program converts feet to miles. Enter input:");

    let mut input = String::new();
    std::io::stdin().read_line(&mut input).expect("error getting input!");

    let feet: f64 = input.trim().parse().expect("Input is not a valid number");
    let miles = feet / 5280.0;

    println!("Miles: {miles}");
}
```

### Scala

```scala
// Write a Scala program to convert feet to miles

import scala.io.StdIn._;

object feetToMiles {
  def main(args:Array[String]):Unit={
    println("Enter the feet value : ");
    var feet = readLine();
    var miles = feet.toDouble / 5280;
    println(feet+" feet is "+miles+" miles");
  }
}
```

### Swift

```swift
// Write a Swift program to convert feet to miles

import Swift
import Foundation

var feet = 26400

var miles = feet / 5280
print("Miles: ", miles)
```

### TypeScript

```typescript
// Write a TypeScript program to convert feet to miles

function feetToMiles(feet: number): number {
  const miles = feet / 5280;
  return miles;
}

console.log(feetToMiles(26400));
```
