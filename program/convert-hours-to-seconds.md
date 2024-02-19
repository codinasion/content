---
title: "Convert Hours To Seconds"
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
    "aayushxrj",
    "esivakumar18",
    "Sairaviteja27",
    "rksp25",
    "joao-vitor-souza",
    "greeshma-d",
    "grraghav120",
    "shivampipalwa",
    "MufaddalHakim",
    "rahmat-dev",
    "rakibul-islam-raju",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1152
description: "Write a program to convert hours to seconds."
---

## Table of contents

## Write a program to convert hours to seconds

1 hour = 60 minutes = 3600 seconds

```
Input  : 5
Output : 18000
```

---

### C

```c
// Write a C program to convert hours to seconds

#include <stdio.h>

int main(){

    int n;
    scanf("%d",&n);
    printf("%d",n*3600);
    return 0;
}

//Contributed by Raghav Garg
```

### C#

```csharp
// Write a C# program to convert hours to seconds

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double seconds = hours * 3600;
    Console.WriteLine(hours+" hours is "+seconds+" seconds");
  }
}
```

### C++

```cpp
// Write a C++ program to convert hours to seconds

#include<bits/stdc++.h>
using namespace std;

int main()
{
    long double sec,hours;
    // take input
    cin>>hours;

    // 1 hour = 60 minutes = 3600 seconds
    sec = hours*3600;

    cout<<sec;
}
```

### Dart

```dart
// Write a Dart program to convert hours to seconds

import 'dart:io';
void main(){
  print("Enter the hours :");
  var hours = int.parse(stdin.readLineSync()!);
  var seconds =  hours * 3600;
  print('Equivalent seconds  : $seconds');
}
```

### F#

```fsharp
// Write a F# program to convert hours to seconds

let hoursToSeconds hours : int =
  hours * 3600

let seconds = hoursToSeconds 5

printfn "Equivalent Seconds : %d" seconds
```

### Go

```go
// Write a Go program to convert hours to seconds

// Created by: Ravi Teja
// Language: GO
// Github: https://github.com/Sairaviteja27

// Declare Main Package
package main

// Import input output package, lets us use things such as Print
import "fmt"

// Main Function
func main() {
	var hours int
	fmt.Println("Enter number of hours :")
	fmt.Scan(&hours)
	fmt.Println("Number of seconds is ", hours*3600)
}
```

### Java

```java
// Write a Java program to convert hours to seconds

import java.util.*;

public class ConvertHoursToSeconds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int hours = sc.nextInt();
        long seconds = hours * 60 * 60;
        System.out.println(seconds);
        sc.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert hours to seconds

function HoursToSeconds(hours) {
  // 1 hour = 60 minutes;
  // 1 minute = 60 seconds;
  // 1 hour = 60 mins * 60sec = 3600 seconds

  let minutes = hours * 60;
  let seconds = minutes * 60;
  return seconds;
}

console.log(HoursToSeconds(5) + " seconds");
```

### Julia

```julia
# Write a Julia program to convert hours to seconds

print("Enter the hours : ")
hours = parse(Float64, readline(stdin))
seconds = hours * 3600
println("Equivalent seconds : ", seconds)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert hours to seconds

fun main() {
    print("Enter weeks : ")
    println()
    var input = readLine()

    try {
        println("$input hours = " + ConvertHoursToSeconds(input!!.toInt()) + " seconds")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToSeconds(hr: Int): Int {
    val hoursToSeconds = hr * 3600

    return  hoursToSeconds
}
```

### Perl

```perl
# Write a Perl program to convert hours to seconds

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the hours : ";
my $hours = <STDIN>;
my $seconds = $hours * 3600;
print $hours." hours is ".$seconds." seconds", "\n";
```

### PHP

```php
// Write a PHP program to convert hours to seconds

<?php
$x = readline('Enter hours: ');

$x1 = $x*60*60;
echo "Seconds :: $x1.\n";

 ?>
```

### Python

```python
# Write a Python program to convert hours to seconds

hours = int(input())

# convers to seonds
seconds = hours * 60 * 60
print(seconds)
```

### R

```r
# Write a R program to convert hours to seconds

hours = readline("hours: ");
hours = as.integer(hours);
seconds = hours * 3600
cat("seconds: ", seconds)
```

### Ruby

```ruby
# Write a Ruby program to convert hours to seconds

def hoursToSeconds(hours)
  hours * 3600
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the hours : '
  hours = gets.chomp.to_i

  puts "#{hours} hours is #{hoursToSeconds(hours)} seconds"
end
```

### Rust

```rust
// Write a Rust program to convert hours to seconds

fn convert_hours_to_seconds(hours: u64) -> u64 {
	return hours * 60 * 60;
}

fn main() {
	println!("{}", convert_hours_to_seconds(5));
}
```

### Scala

```scala
// Write a Scala program to convert hours to seconds

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val hours = scala.io.StdIn.readInt();
	  println("Seconds: " + hours * 3600);
	}
}
```

### Swift

```swift
// Write a Swift program to convert hours to seconds

import Swift
import Foundation

print("Enter hours: ")
var hours = Int(readLine()!)!
print("Seconds: ", hours * 3600)
```

### TypeScript

```typescript
// Write a TypeScript program to convert hours to seconds

function HoursToSeconds(hours: number) {
  // 1 hour = 60 minutes;
  // 1 minute = 60 seconds;
  // 1 hour = 60 mins * 60sec = 3600 seconds

  const minutes = hours * 60;
  const seconds = minutes * 60;
  return seconds;
}

console.log(HoursToSeconds(5) + " seconds");
```

## Similar programs

- [Convert Hours To Seconds](/program/convert-hours-to-seconds)
- [Convert Seconds To Minutes](/program/convert-seconds-to-minutes)
- [Convert Minutes To Seconds](/program/convert-minutes-to-seconds)
- [Convert Seconds To Days](/program/convert-seconds-to-days)
- [Convert Days To Seconds](/program/convert-days-to-seconds)
- [Convert Weeks To Seconds](/program/convert-weeks-to-seconds)
- [Convert Seconds To Weeks](/program/convert-seconds-to-weeks)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
- [Convert Hours To Minutes](/program/convert-hours-to-minutes)
- [Convert Hours To Days](/program/convert-hours-to-days)
