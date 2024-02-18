---
title: "Convert Minutes To Weeks"
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
    "RiteshK-611",
    "anandfresh",
    "pokharel-nishan",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "saroshfarhan",
    "shivampipalwa",
    "MadhuS-1605",
    "thweetkomputer",
    "rahmat-dev",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1004
description: "Write a program to convert minutes to weeks."
---

## Table of contents

## Write a program to convert minutes to weeks

1 week = 7 days = 168 hours = 10080 minutes

```
Input  : 50400
Output : 5
```

---

### C

```c
// Write a C program to convert minutes to weeks

#include <stdio.h>

int main()
{
    int week, minutes;

    printf("Enter minutes   :   ");
    scanf("%i", &minutes);

    week = minutes/10080;

    printf("Weeks   :   %i", week);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert minutes to weeks

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes : ");
    double minutes = Convert.ToDouble(Console.ReadLine());
    double weeks = minutes/10080;
    Console.WriteLine(minutes+" minutes is "+weeks+" weeks");
  }
}
```

### C++

```cpp
// Write a C++ program to convert minutes to weeks

#include<bits/stdc++.h>
using namespace std;

int main()
{
    long long int mins, weeks;
    cin>>mins;

    // 1 week = 7 days = 168 hours = 10080 minutes
    weeks=mins/10080;
    cout<<weeks;

}
```

### Dart

```dart
// Write a Dart program to convert minutes to weeks

import 'dart:io';
void main(){
  print("Enter the minutes :");
  var minutes = int.parse(stdin.readLineSync()!);
  var weeks = minutes~/10080;
  print('Equivalent weeks : $weeks');
}
```

### F#

```fsharp
// Write a F# program to convert minutes to weeks

let minutestoWeeks mins : int =
  mins / 10080

let weeks =  minutestoWeeks 50400

printfn "Equivalent weeks : %d" weeks
```

### Go

```go
// Write a Go program to convert minutes to weeks

package main

import (
	"fmt"
)

func main() {
	var minutes float64
  fmt.Println("Enter minute:")
  fmt.Scan(&minutes)
  fmt.Println("Week:",(minutes/10080))
}
```

### Java

```java
// Write a Java program to convert minutes to weeks

import java.util.*;
import java.lang.*;

public class ConvertMinutesToWeeks {
    public static void main(String[] args) {
        System.out.println(new Scanner(System.in).nextInt() / 10080);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert minutes to weeks

function ConvertMinutesToWeeks(minutes) {
  // 1 day = 1440 minutes
  // 1 week = 10080 minutes

  let days = minutes / 1440;
  let week = days / 7;
  return week;
}

console.log(ConvertMinutesToWeeks(50400) + " weeks");
```

### Julia

```julia
# Write a Julia program to convert minutes to weeks

println("Enter value in minutes: ")
minutes = readline()
minutes = parse(Int, minutes)
weeks = round((minutes / 10080); digits = 0)
weeks = convert(Int, weeks)
println(minutes, " minutes equals ", weeks, " complete weeks")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert minutes to weeks

fun main() {
    print("Enter minutes : ")
    println()
    var input = readLine()

    try {
        println("$input minutes = " + ConvertMinutesToWeeks(input!!.toDouble()) + " weeks")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertMinutesToWeeks(minutes: Double): Double {
    val days = minutes / 1440;
    val week = days / 7;

    return  week
}
```

### Perl

```perl
# Write a Perl program to convert minutes to weeks

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the minutes : ";
my $minutes = <STDIN>;
my $weeks = $minutes / 10080;
print $minutes." minutes is ".$weeks." weeks", "\n";
```

### PHP

```php
// Write a PHP program to convert minutes to weeks

<?php

function convert_minutes_to_weeks($minutes)
{
	return $minutes / 60 / 24 / 7;
}

echo convert_minutes_to_weeks(50400);
```

### Python

```python
# Write a Python program to convert minutes to weeks

if __name__ == "__main__":
    minutes = int(input())
    weeks = int(minutes / 10080)
    print(weeks)
```

### R

```r
# Write a R program to convert minutes to weeks

minutes = 50400
weeks = minutes / 10080
cat("Weeks: ", weeks)
```

### Ruby

```ruby
# Write a Ruby program to convert minutes to weeks

def minutesToWeeks(minutes)
  minutes / 10080
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the minutes : '
  minutes = gets.chomp.to_i

  puts "#{minutes} minutes is #{minutesToWeeks(minutes)} weeks"
end
```

### Rust

```rust
// Write a Rust program to convert minutes to weeks

fn convert_minutes_to_weeks(minutes: u64) -> u64 {
	return minutes / 60 / 24 / 7;
}

fn main() {
	println!("{}", convert_minutes_to_weeks(50400));
}
```

### Scala

```scala
// Write a Scala program to convert minutes to weeks

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Weeks: " + minutes / 10080);
	}
}
```

### Swift

```swift
// Write a Swift program to convert minutes to weeks

import Swift
import Foundation

var minutes = 50400

var weeks = minutes / 10080
print("Weeks: ", weeks)
```

### TypeScript

```typescript
// Write a TypeScript program to convert minutes to weeks

function ConvertMinutesToWeeks(minutes: number) {
  // 1 day = 1440 minutes
  // 1 week = 10080 minutes

  const days = minutes / 1440;
  const week = days / 7;
  return week;
}

console.log(ConvertMinutesToWeeks(50400) + " weeks");
```
