---
title: "Convert Miles To Feet"
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
    "Ishay1997",
    "anandfresh",
    "esivakumar18",
    "Shalevro2",
    "rksp25",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "MadhuS-1605",
    "RShalman",
    "anxkhn",
    "kashyap-kumar",
    "EniolaAdemola",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 331
description: "Write a program to convert miles to feet."
---

## Table of contents

## Write a program to convert miles to feet

1 mile = 5280 feet

```
Input  : 5
Output : 26400
```

---

### C

```c
// Write a C program to convert miles to feet

#include <stdio.h>

int main()
{
    int miles;
    scanf("%d", &miles);
    int feet = miles * 5280;
    printf("%d", feet);
}
```

### C#

```csharp
// Write a C# program to convert miles to feet

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the miles : ");
    double miles = Convert.ToDouble(Console.ReadLine());
    double feet = miles * 5280;
    Console.WriteLine(miles+" miles is "+feet+" feet");
  }
}
```

### C++

```cpp
// Write a C++ program to convert miles to feet

#include <iostream>

int main()
{
    float miles;
    std::cin >> miles;
    float feet = miles * 5280;
    std::cout << feet;
}
```

### Dart

```dart
// Write a Dart program to convert miles to feet

import 'dart:io';
void main(){
  print("Enter the miles :");
  var miles =int.parse(stdin.readLineSync()!);
  var feet = miles*5280;
  print('Equivalent feet : $feet');
}
```

### F#

```fsharp
// Write a F# program to convert miles to feet

let milesToFeet miles : int =
  miles * 5280

let feet =  milesToFeet 5

printfn "Equivalent feet : %d" feet
```

### Go

```go
// Write a Go program to convert miles to feet

package main

import (
	"fmt"
)

func main() {
	var miles float64
  fmt.Println("Enter Mile(s):")
  fmt.Scan(&miles)
	fmt.Println("Feet:", miles * 5280)
}
```

### Java

```java
// Write a Java program to convert miles to feet

import java.util.Scanner;

public class ConvertMilesToFeet {

	public static double milesToFeet(double miles) {
		return 5280*miles;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of miles: ");
        double miles = scanner.nextDouble();
        double feet = milesToFeet(miles);
        System.out.println(miles + " miles is equal to " + feet + " feet.");
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert miles to feet

console.log(
  "JavaScript program to convert miles to feet \n 1 mile = 5280 feet"
);

const milesToFeet = num => {
  return num * 5280;
};

miles = 10;
console.log("Input  : " + miles);
console.log("Output : " + milesToFeet(miles));
```

### Julia

```julia
# Write a Julia program to convert miles to feet

function miles_to_feet(miles::Float64)
    feet = miles * 5280
    return feet
end

# Example usage
miles = 5
feet = miles_to_feet(miles)
println("$miles miles = $feet feet")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert miles to feet

fun main() {
    print("Enter Miles : ")
    println()
    var input = readLine()

    println("$input miles = " + ConvertMilesToFeet(input!!.toDouble()) + " feet")

}

private fun ConvertMilesToFeet(miles: Double): Double {
    var feet = miles * 5280

    return feet
}
```

### Perl

```perl
# Write a Perl program to convert miles to feet

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the miles : ";
my $miles = <STDIN>;
my $feet =  $miles * 5280;
print $miles." miles is ".$feet." feet", "\n";
```

### PHP

```php
// Write a PHP program to convert miles to feet

<?php
    // 1 mile = 5280 feet

    // take input
    $m = (float)readline("Enter distance in miles: ");

    function convert($miles){
        return $miles*5280;
    }

    echo convert($m) . " feet";

?>
```

### Python

```python
# Write a Python program to convert miles to feet

print("Python program to convert miles to feet \n 1 mile = 5280 feet")


def milesToFeet(num):
    return num * 5280


miles = 10
feet = milesToFeet(miles)
print(f"Input  : {miles}")
print(f"Output : {feet}")
```

### R

```r
# Write a R program to convert miles to feet

# Function to convert miles to feet
miles_to_feet <- function(miles) {
  feet <- miles * 5280
  return(feet)
}

# Example usage
miles <- 5
feet <- miles_to_feet(miles)
cat(paste(miles, "miles is equal to", feet, "feet"))
```

### Ruby

```ruby
# Write a Ruby program to convert miles to feet

print "Enter miles : "
miles = gets.chomp.to_i
feet = miles * 5280
print "Feet : #{feet}"
```

### Rust

```rust
// Write a Rust program to convert miles to feet

use std::io;

fn main() {
    println!("Enter miles:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let miles: f32 = input.trim().parse().expect("Please enter a valid number");

    let feet = miles * 5280.0;

    println!("{} miles = {} feet", miles, feet);
}
```

### Scala

```scala
// Write a Scala program to convert miles to feet

import scala.io.StdIn._;

object milesToFeet {
  def main(args:Array[String]):Unit={
    var miles = readLine().toInt;
    println("Enter the miles : "+miles);
    var feet = miles * 5280;
    println(miles+" miles is "+feet+" feet");
  }
}
```

### Swift

```swift
// Write a Swift program to convert miles to feet

import Swift
import Foundation

print("Enter miles: ")
var miles = Double(readLine()!)!
print("Feet: ", miles * 5280)
```

### TypeScript

```typescript
// Write a TypeScript program to convert miles to feet

export type Miles = number;
export type Feets = number;

export function convertMilesToFeet(miles: Miles): Feets {
  return miles * 5280;
}
```
