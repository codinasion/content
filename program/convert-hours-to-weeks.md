---
title: "Convert Hours To Weeks"
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
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "anandfresh",
    "Shalevro2",
    "rksp25",
    "joao-vitor-souza",
    "inorishizuka",
    "grraghav120",
    "rahmat-dev",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1596
description: "Write a program to convert hours to weeks."
---

## Table of contents

## Write a program to convert hours to weeks

1 week = 7 days = 168 hours

```
Input  : 840
Output : 5
```

---

### C

```c
// Write a C program to convert hours to weeks

//Contributed by Raghav Garg (grraghav120)
//ConvertHoursToWeeks.c

// 1 week = 7 days = 168 hours

// 168 hrs=1 week
// 1 hrs=1/168 week

#include <stdio.h>

int main()
{
    float hours;
    scanf("%f",&hours);
    printf("%0.2f\n",(hours/168));
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert hours to weeks

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double weeks = hours / 168;
    Console.WriteLine(hours+" hours are "+weeks+" weeks");
  }
}
```

### C++

```cpp
// Write a C++ program to convert hours to weeks

///ConvertHoursToWeeks.cpp

// Write a C++ program to convert hours to weeks
// 1 week = 7 days = 168 hours

// 168 hrs=1 week
// 1 hrs=1/168 week
#include <iostream>

using namespace std;

int main()
{
    float hours;cin>>hours;
    cout<<(hours/168)<<'\n';
}

//Contributed by Raghav Garg
```

### F#

```fsharp
// Write a F# program to convert hours to weeks

let hoursToWeeks hours : int =
  hours / 168

let weeks =  hoursToWeeks 840

printfn "Equivalent weeks : %d" weeks
```

### Go

```go
// Write a Go program to convert hours to weeks

// Created by: Ky Duong
// Hacktoberfest 2022
// Environment: https://go.dev/play/
// Language: GO
// Github: https://github.com/inorishizuka

// Declare Main Package
package main

// Import input output package, lets us use things such as Print
import "fmt"

// Main Function
func main() {
	// Initilize Input and output functions
	input := 840
	output := input / (24 * 7)
	// Print Results
	fmt.Println(output)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert hours to weeks

main :: IO ()
main = do
   putStrLn "Enter hours: "
   input1 <- getLine
   let hours = read input1 :: Float

   let weeks = hours / 168
   putStrLn $ show (weeks)
```

### Java

```java
// Write a Java program to convert hours to weeks

import java.util.Scanner;

public class ConvertHoursToWeeks {
    public static double hoursToWeeks(double hours) {
        return hours / (24 * 7);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of hours: ");
        double hours = scanner.nextDouble();
        double weeks = hoursToWeeks(hours);
        System.out.println(hours + " hours is equal to " + weeks + " weeks.");
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert hours to weeks

function convertHoursToWeeks(hours) {
  // 168 hours = 1 week
  // 840 hours = x week
  // 168x = 840
  // x = 840 / 168

  let weeks = hours / 168;
  return weeks;
}

console.log(convertHoursToWeeks(840) + " weeks");
```

### Julia

```julia
# Write a Julia program to convert hours to weeks

println("Enter value in hours: ")
hours = readline()
hours = parse(Int, hours)
weeks = round((hours / 168); digits = 0)
weeks = convert(Int, weeks)
println(hours, " hours equals ", weeks, " complete weeks")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert hours to weeks

fun main() {
    print("Enter Seconds : ")
    println()
    var hr = readLine()

    try {
        println("$hr hours = " + ConvertHoursToWeeks(hr!!.toInt()) + " weeks")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToWeeks(hr: Int): Int {
    val hourToWeek = hr / 168

    return  hourToWeek
}
```

### Perl

```perl
# Write a Perl program to convert hours to weeks

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the hours : ";
my $hours = <STDIN>;
my $weeks = $hours / 168;
print $hours." hours is ".$weeks." weeks", "\n";
```

### PHP

```php
// Write a PHP program to convert hours to weeks

<?php

function convert_hours_to_weeks($hours)
{
	return $hours / 24 / 7;
}

echo convert_hours_to_weeks(840);
```

### Python

```python
# Write a Python program to convert hours to weeks

# Contributed by Raghav Garg (grraghav120)
##ConvertHoursToWeeks.py

# 1 week = 7 days = 168 hours

# 168 hrs=1 week
# 1 hrs=1/168 week


hours = int(input())
print(hours / 168)
```

### R

```r
# Write a R program to convert hours to weeks

hours = 840
weeks = hours / 168
cat("weeks: ", weeks)
```

### Ruby

```ruby
# Write a Ruby program to convert hours to weeks

print "Enter hours : \n"
hours = gets.chomp.to_i
weeks = hours / 168
print "Weeks : #{weeks}"
```

### Rust

```rust
// Write a Rust program to convert hours to weeks

fn convert_hours_to_weeks(hours: u16) -> u16 {
	return hours / 24 / 7;
}

fn main() {
	println!("{}", convert_hours_to_weeks(840));
}
```

### Scala

```scala
// Write a Scala program to convert hours to weeks

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val hours = scala.io.StdIn.readInt();
	  println("Weeks: " + hours / 168);
	}
}
```

### Swift

```swift
// Write a Swift program to convert hours to weeks

import Swift
import Foundation

var hours = 840

var weeks = hours / 168
print("Weeks: ", weeks)
```

### TypeScript

```typescript
// Write a TypeScript program to convert hours to weeks

function convertHoursToWeeks(hours: number) {
  // 168 hours = 1 week
  // 840 hours = x week
  // 168x = 840
  // x = 840 / 168

  const weeks = hours / 168;
  return weeks;
}

console.log(convertHoursToWeeks(840) + " weeks");
```

## Similar programs

- [Convert Hours To Weeks](/program/convert-hours-to-weeks)
- [Convert Hours To Days](/program/convert-hours-to-days)
- [Convert Days To Hours](/program/convert-days-to-hours)
- [Convert Minutes To Weeks](/program/convert-minutes-to-weeks)
- [Convert Weeks To Minutes](/program/convert-weeks-to-minutes)
- [Convert Days To Weeks](/program/convert-days-to-weeks)
- [Convert Weeks To Days](/program/convert-weeks-to-days)
- [Convert Seconds To Weeks](/program/convert-seconds-to-weeks)
- [Convert Weeks To Seconds](/program/convert-weeks-to-seconds)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
