---
title: "Convert Weeks To Minutes"
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
    "pokharel-nishan",
    "esivakumar18",
    "joao-vitor-souza",
    "TechnicalAmanjeet",
    "imtiyaz786",
    "ynbh",
    "venkat-siddarth",
    "kashyap-kumar",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1080
description: "Write a program to convert weeks to minutes."
---

## Table of contents

## Write a program to convert weeks to minutes

1 week = 7 days = 168 hours = 10080 minutes

```
Input  : 5
Output : 50400
```

---

### C

```c
// Write a C program to convert weeks to minutes

#include <stdio.h>


int weekToMinutes(int weeks){

    return weeks * 10080;

}


int main()
{
    int weeks;

    printf("Enter weeks :   ");
    scanf("%i", &weeks);

    printf("Total minutes is    :   %i", weekToMinutes(weeks));

    return 0;

}
```

### C#

```csharp
// Write a C# program to convert weeks to minutes

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the weeks : ");
    double weeks = Convert.ToDouble(Console.ReadLine());
    double minutes = weeks * 10080;
    Console.WriteLine(weeks+" weeks is "+minutes+" minutes");
  }
}
```

### C++

```cpp
// Write a C++ program to convert weeks to minutes

/**
 * Write a C++ program to convert weeks to minutes
 * 1 week = 7 days = 168 hours = 10080 minutes
 * Input  : 5
 * Output : 50400
 */

#include <iostream>
#include <cmath>
using namespace std;

int weeksToMinutes(int weeks){
    return (weeks*10080);
}

int main(){
    int n;
    cout << "Enter number of weeks: ";
    cin >> n;
    cout << "Minutes: " << weeksToMinutes(n) << endl;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert weeks to minutes

import 'dart:io';
void main(){
  print("Enter the weeks :");
  int weeks = int.parse(stdin.readLineSync()!);
  int minutes = weeks * 10080 ;
  print('Equivalent minutes : $minutes');
}
```

### F#

```fsharp
// Write a F# program to convert weeks to minutes

let weeksToMinutes weeks : int =
  weeks * 10080

let minutes =  weeksToMinutes 5

printfn "Equivalent minutes : %d" minutes
```

### Go

```go
// Write a Go program to convert weeks to minutes

package main

import "fmt"

func main(){
  var num_of_weeks int
  fmt.Println("Enter nummber of weeks :")
  fmt.Scan(&num_of_weeks)
  fmt.Println("Total minutes in given week is ", num_of_weeks * 10080)
}
```

### Java

```java
// Write a Java program to convert weeks to minutes

import java.util.Scanner;

class ConvertWeeksToMinutes {
    public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		System.out.print("Enter no of weeks: ");
		int week = input.nextInt();

		int minute = convertIntoMinute(week);

		System.out.print("There are " + minute + " minutes in " + week + " weeks.");
    }


	static int convertIntoMinute( int week) {

		return week * 7 * 24 * 60;
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert weeks to minutes

/**
 *
 * @param {number} weeks
 * @returns {number} number of minutes in `weeks`
 */
function convertWeeksToMinutesInJS(weeks) {
  return weeks * 7 * 24 * 60;
}

console.log(convertWeeksToMinutesInJS(5));
```

### Julia

```julia
# Write a Julia program to convert weeks to minutes

println("Enter value in weeks: ")
weeks = readline()
weeks = parse(Int, weeks)
minutes = weeks * 10080
println(weeks, " weeks equals ", minutes, " minutes")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert weeks to minutes

import java.util.Scanner

fun main(){
  print("Enter number of weeks : ")

  // Creates an instance which takes input from standard input (keyboard)
    val reader = Scanner(System.`in`)

    // nextInt() reads the next integer from the keyboard
    var num_of_weaks:Int = reader.nextInt()

  val total_minutes_in_weaks = num_of_weaks * 10080

  println("Total Minutes in given weaks is ${total_minutes_in_weaks}")
}
```

### Perl

```perl
# Write a Perl program to convert weeks to minutes

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the weeks : ";
my $weeks = <STDIN>;
my $minutes = $weeks * 10080;
print $weeks." weeks is ".$minutes." minutes", "\n";
```

### PHP

```php
// Write a PHP program to convert weeks to minutes

<?php
  $x = readline('Enter Weeks: ');

  $x1 = $x * 10080;
  echo "Minutes: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert weeks to minutes

print("Minutes:", 10080 * int(input("Week(s): ")))
```

### R

```r
# Write a R program to convert weeks to minutes

No_of_minutes_in_a_week<-10080
noOfweeks<-scan(what = integer(),n=1);

print(noOfweeks*No_of_minutes_in_a_week)
```

### Ruby

```ruby
# Write a Ruby program to convert weeks to minutes

puts "Enter number or weeks: "
num_of_weeks = gets.chomp.to_i

total_minutes = num_of_weeks * 10080

puts "Total Minutes in " + num_of_weeks.to_s + " weeks is " + total_minutes.to_s
```

### Rust

```rust
// Write a Rust program to convert weeks to minutes

fn convert_weeks_to_minutes(weeks: i32) -> i32 {
    return weeks*7*24*60;
}

fn main() {
   let minutes =  convert_weeks_to_minutes(5);
   println!("{}", minutes);
}
```

### Scala

```scala
// Write a Scala program to convert weeks to minutes

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val weeks = scala.io.StdIn.readInt();
	  println("Minutes: " + weeks * 10080);
	}
}
```

### Swift

```swift
// Write a Swift program to convert weeks to minutes

import Swift
import Foundation

print("Enter weeks: ")
var weeks = Int(readLine()!)!
print("Minutes: ", weeks * 10080)
```

### TypeScript

```typescript
// Write a TypeScript program to convert weeks to minutes

function convertWeeksToMinutesInTS(weeks: number) {
  return weeks * 7 * 24 * 60;
}

console.log(convertWeeksToMinutesInTS(5));
```
