---
title: "Convert Seconds To Minutes"
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
    "phbrgnomo",
    "harshraj8843",
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "Shalevro2",
    "Osher160",
    "joao-vitor-souza",
    "jyotik09",
    "sourav9599",
    "c0d3-br3ak9r",
    "praveenscience",
    "renanlmiranda",
    "YasiOnFire",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-07T18:25:30Z
trackId: 352
description: "Write a program to convert seconds to minutes."
---

## Table of contents

## Write a program to convert seconds to minutes

1 minute = 60 seconds

```
Input  : 300
Output : 5
```

---

### C

```c
// Write a C program to convert seconds to minutes

#include <stdio.h> /* printf, scanf */

int ConvertSecondsToMinutes(int seconds);


int main()
{
    int seconds = 0;
    int is_good = 0;

    printf("please enter a number in seconds:\n");

    is_good = scanf("%d",&seconds);

    if(is_good != 1)
    {
        return -1;
    }

    printf("the number in minutes: %d \n",ConvertSecondsToMinutes(seconds));

    return 0;
}

int ConvertSecondsToMinutes(int seconds)
{
    return (seconds / 60);
}
```

### C#

```csharp
// Write a C# program to convert seconds to minutes

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double minutes = seconds / 60;
    Console.WriteLine(seconds+" seconds is "+minutes+" minutes");
  }
}
```

### C++

```cpp
// Write a C++ program to convert seconds to minutes

/*
Author -> Abhinav Prabhat
Edit -> Kartikeya Saini
Date   -> 12-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    double sec;
    cout << "\n\nEnter in seconds -> ";
    cin >> sec;

    cout << sec << " seconds in minutes is -> " << sec / 60.0 << endl
         << endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert seconds to minutes

import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int minutes = seconds~/60;
  print('Equivalent minutes : $minutes');
}
```

### F#

```fsharp
// Write a F# program to convert seconds to minutes

let secondsToMinutes seconds : int =
  seconds / 60

let minutes =  secondsToMinutes 300

printfn "Equivalent minutes : %d" minutes
```

### Go

```go
// Write a Go program to convert seconds to minutes

package main

import (
		"fmt"
)

func secondsToMinutes(inSeconds int) string {
		minutes := inSeconds / 60
		seconds := inSeconds % 60
		str := fmt.Sprintf("d:d", minutes, seconds)
		return str
}

func main() {
		fmt.Println("300 seconds in minutes : ", secondsToMinutes(300))
		fmt.Println("9999 seconds in minutes : ", secondsToMinutes(9999))
		fmt.Println("660 seconds in minutes : ", secondsToMinutes(660))
}
```

### Java

```java
// Write a Java program to convert seconds to minutes

import java.util.Scanner;

public class ConvertSecondsToMinutes {
	public static double secondsToMinutes(double sec) {
		return sec/60.0;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of minutes: ");
        double minutes = scanner.nextDouble();
        double seconds = secondsToMinutes(minutes);
        System.out.println(minutes + " minutes is equal to " + seconds + " seconds.");
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert seconds to minutes

/**
 *
 * @param {number} seconds - value of seconds
 * @returns {number} value of minutes
 */
function secondsToMinutes(seconds) {
  return seconds / 60;
}

console.log("Input: 300");
console.log("Output:", secondsToMinutes(300));
```

### Julia

```julia
# Write a Julia program to convert seconds to minutes

println("Enter value in seconds: ")
seconds = readline()
seconds = parse(Int, seconds)
minutes = round((seconds / 60); digits = 2)
println(seconds, " seconds equals ", minutes, " minutes")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert seconds to minutes

import java.util.*
fun main(args: Array<String>)
{
    var seconds = readLine()?.toInt()
    val minutes = seconds / 60
    println(minutes)
}
```

### Perl

```perl
# Write a Perl program to convert seconds to minutes

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the seconds : ";
my $seconds = <STDIN>;
my $minutes =  $seconds / 60;
print $seconds." seconds is ".$minutes." minutes", "\n";
```

### PHP

```php
// Write a PHP program to convert seconds to minutes

<?php
	// Convert seconds to minutes.
	// 1 min = 60 secs.
	function convert_seconds_to_minutes($sec) {
		if (!is_numeric($sec)) {
			return null;
		}
		return $sec / 60;
	}
	// Tests
	print_r(convert_seconds_to_minutes(60));        // 1
	print_r(convert_seconds_to_minutes(160));       // 2.66
	print_r(convert_seconds_to_minutes("600"));     // 10
	print_r(convert_seconds_to_minutes("Hello"));   // null or empty
```

### Python

```python
# Write a Python program to convert seconds to minutes

def convert_seconds_to_minutes(sec):
    return round(sec / 60, 2)


seconds = int(input("Input : "))
print("Output :", convert_seconds_to_minutes(seconds))
```

### R

```r
# Write a R program to convert seconds to minutes

# Function to convert seconds to minutes
convert_seconds_to_minutes <- function(seconds) {
  # Check if the input is numeric
  if (!is.numeric(seconds)) {
    stop("Input must be a numeric value representing seconds.")
  }

  # Perform the conversion
  minutes <- seconds / 60

  # Return the result
  return(minutes)
}

# Example usage
seconds_input <- as.numeric(readline("Enter seconds: "))
result <- convert_seconds_to_minutes(seconds_input)

# Print the result
cat("Converted minutes:", result, "\n")
```

### Ruby

```ruby
# Write a Ruby program to convert seconds to minutes

print "Enter seconds : \n"
seconds = gets.chomp.to_i
minutes = seconds / 60
print "Minutes : #{minutes}"
```

### Rust

```rust
// Write a Rust program to convert seconds to minutes

use std::io;

fn main() {
    println!("Enter the number of seconds:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");

    let seconds: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of seconds.");
            return;
        }
    };

    let minutes = seconds / 60;
    let remainder_sec = seconds - (minutes * 60);

    println!("{} seconds is equal to {} minutes {} seconds.", seconds, minutes, remainder_sec);
}
```

### Scala

```scala
// Write a Scala program to convert seconds to minutes

import scala.io.StdIn._;

object secondsToMinutes {
  def main(args:Array[String]):Unit={
    var seconds = readLine().toInt;
    println("Enter the seconds : "+seconds);
    var minutes = seconds / 60;
    println(seconds+" seconds is "+minutes+" minutes");
  }
}
```

### Swift

```swift
// Write a Swift program to convert seconds to minutes

import Swift
import Foundation

print("Enter seconds: ")
var seconds = Int(readLine()!)!
print("Minutes: ", seconds / 60)
```

### TypeScript

```typescript
// Write a TypeScript program to convert seconds to minutes

const ConvertSecondsToMinutes = (seconds: number): number => seconds / 60;

console.log("Input: 300");
console.log("Output:", ConvertSecondsToMinutes(300));
```

## Similar programs

- [Convert Minutes To Seconds](/program/convert-minutes-to-seconds)
- [Convert Hours To Seconds](/program/convert-hours-to-seconds)
- [Convert Seconds To Hours](/program/convert-seconds-to-hours)
- [Convert Days To Seconds](/program/convert-days-to-seconds)
- [Convert Seconds To Days](/program/convert-seconds-to-days)
- [Convert Weeks To Seconds](/program/convert-weeks-to-seconds)
- [Convert Seconds To Weeks](/program/convert-seconds-to-weeks)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
- [Convert Hours To Minutes](/program/convert-hours-to-minutes)
- [Convert Days To Minutes](/program/convert-days-to-minutes)
