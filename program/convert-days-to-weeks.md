---
title: "Convert Days To Weeks"
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
    "perl",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "jsing120",
    "anandfresh",
    "pokharel-nishan",
    "tom-laplace",
    "vedantpople4",
    "hi-Kartik2004",
    "hugosmoreira",
    "manishankardurai",
    "joao-vitor-souza",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 4381
description: "Write a program to convert days to weeks."
---

## Table of contents

## Write a program to convert days to weeks

1 week = 7 days

```
Input  : 35
Output : 5
```

---

### C

```c
// Write a C program to convert days to weeks

#include <stdio.h>

int main(){
    int days, weeks, remainder;

    printf("Enter the number of days    :   ");
    scanf("%d", &days);

    weeks = days / 7;
    remainder = days % 7;


    if (remainder == 0){
        printf("Weeks   :   %d", weeks);
    }
    else {
         printf("Weeks  :   %d      Days    :   %d", weeks, remainder );
    }
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert days to weeks

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days : ");
    double days = Convert.ToDouble(Console.ReadLine());
    double weeks = days / 7;
    Console.WriteLine(days+" days is "+weeks+" weeks");
  }
}
```

### C++

```cpp
// Write a C++ program to convert days to weeks

// This programme coverts inputted days count to weeks...

#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;

int main(){

    //Taking user input...
    cout<<"Enter the number of days : ";
    ll days;     cin>>days;

    //Converting days to weeks by dividing by 7;
    float weeks = (float)days/7.0;

    // Displaying the output with a maximum digit shown being two, using the setprecision()
    cout<<days<<" day(s) "<<"= "<< setprecision(2) <<weeks <<" week(s)";

    return 0;

}

/*
Author : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to convert days to weeks

import 'dart:io';
void main(){
  print("Enter the days :");
  var days =int.parse(stdin.readLineSync());
  var weeks = days/7;
  print('Equivalent weeks : $weeks');
}
```

### F#

```fsharp
// Write a F# program to convert days to weeks

let daysToWeeks days : int =
   days / 7

let weeks = daysToWeeks 35

printfn "Equivalent weeks : %d" weeks
```

### Go

```go
// Write a Go program to convert days to weeks

package main

import "fmt"

func main() {
	var days int
	fmt.Scanf("%d", &days)
	weeks := float64(days / 7)
	fmt.Println(weeks)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert days to weeks

main :: IO ()
main = do
    putStrLn "Enter days: "
    input1 <- getLine
    let days = read input1 :: Float

    let weeks = days / 7
    putStrLn $ show (weeks)
```

### Java

```java
// Write a Java program to convert days to weeks

import java.util.*;
import java.io.*;

public class Main
{
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in);
	    int daysInputed = sc.nextInt();
        int weeksOutput = daysInputed/7;
	    System.out.println(weeksOutput);
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert days to weeks

function convertDaysToWeek(days) {
  return days / 7;
}
console.log(convertDaysToWeek(35));
```

### Julia

```julia
# Write a Julia program to convert days to weeks

println("Enter value in days: ")
days = readline()
days = parse(Int, days)
weeks = convert(Int, days / 7)
println(days, " days equals ", weeks, " weeks")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert days to weeks

import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the days::")
    val inputDays = scanner.nextInt();
    scanner.close();
    val weeks = inputDays/7;
    print("No of Weeks::"+weeks)
}
```

### Perl

```perl
# Write a Perl program to convert days to weeks

my $days = <STDIN>;
$weeks = $days / 7;
print "weeks: $weeks"
```

### PHP

```php
// Write a PHP program to convert days to weeks

<?php

function daysToWeeks($days) {
  return floor($days / 7);
}

$days = 35;
echo daysToWeeks($days); // Output: 5

?>
```

### Python

```python
# Write a Python program to convert days to weeks

print(int(input()) / 7)
```

### R

```r
# Write a R program to convert days to weeks

days = 35
weeks = days / 7
cat("weeks: ", weeks)
```

### Ruby

```ruby
# Write a Ruby program to convert days to weeks

def daysToWeeks(days)
  days / 7
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the days : '
  days = gets.chomp.to_i

  puts "#{days} days is #{daysToWeeks(days)} weeks"
end
```

### Rust

```rust
// Write a Rust program to convert days to weeks

fn main() {
    // Read the number of days from the user
    let mut days = String::new();
    println!("Enter the number of days: ");
    std::io::stdin().read_line(&mut days).expect("Failed to read input");

    // Convert the input to a number
    let days: i32 = match days.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid number of days.");
            return;
        }
    };

    // Calculate the number of weeks
    let weeks = days / 7;

    // Print the result
    println!("{} days is equivalent to {} weeks.", days, weeks);
}
```

### Scala

```scala
// Write a Scala program to convert days to weeks

import scala.io.StdIn._;

object daysToWeeks {
  def main(args:Array[String]):Unit={
    println("Enter the number of days : ");
    var days = readLine();
    var weeks = days.toInt / 7;
    println(days+" days is "+weeks+" weeks");
  }
}
```

### Swift

```swift
// Write a Swift program to convert days to weeks

import Swift
import Foundation

print("Enter days: ")
var days = Int(readLine()!)!
print("Weeks: ", days / 7)
```

### TypeScript

````typescript
// Write a TypeScript program to convert days to weeks

/**
 *
 * @name This program convert days to week
 * @param {number} days
 * @returns {number}
 *
 * @example
 * ```ts
 * const weeks1 = ConvertDaysToWeeks(35) // 7
 * const weeks2 = ConvertDaysToWeeks(7) // 1
 * ```
 *
 * @author Tanishq Singh
 */
const ConvertDaysToWeeks = (days: number): number => days / 7;

// Console Tests
console.log("Number of weeks in 14 days: ");
console.log("That is " + ConvertDaysToWeeks(14) + " // 2");

console.log("Numer of weeks in 28 days: ");
console.log("That is " + ConvertDaysToWeeks(28) + " // 4");
````
