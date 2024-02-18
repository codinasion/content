---
title: "Convert Weeks To Days"
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
    "harshraj8843",
    "anandfresh",
    "nicoleSosa",
    "akaliacius",
    "sohamhaldar",
    "esivakumar18",
    "vedantpople4",
    "R0-H-1T",
    "hugosmoreira",
    "jfinley6",
    "loesking",
    "AleksiUu",
    "SarthakSanjay",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5510
description: "Write a program to convert weeks to days."
---

## Table of contents

## Write a program to convert weeks to days

1 week = 7 days

```
Input  : 5
Output : 35
```

---

### C

```c
// Write a C program to convert weeks to days

#include <stdio.h>
int main()
{
    int days, week;
    printf("Enter the Week: ");
    scanf("%ld",&week);
    days = week * 7;
    printf("No of Days: %d\n", days);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert weeks to days

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the weeks:");
    double weeks = Convert.ToDouble(Console.ReadLine());
    double days = weeks * 7;
    Console.WriteLine(weeks + " weeks is "+ days + " days");
  }
}
```

### C++

```cpp
// Write a C++ program to convert weeks to days

// This programme converts weeks into days.

#include <bits/stdc++.h>
#define ll long long // for typing ease :)
using namespace std;

int main(){
    ll input;   cin>>input;
    ll ans = input*7; // as 1week = 7days
    cout<<ans<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to convert weeks to days

import 'dart:io';
void main(){
  print("Enter no of weeks :");
  var weeks=int.parse(stdin.readLineSync());
  var days = weeks*7;
  print(days);
}
```

### F#

```fsharp
// Write a F# program to convert weeks to days

let weeksToDays (weeks:int) =
    weeks * 7

let weeks = 5

let days = weeksToDays weeks

printfn "%d weeks is %d days" weeks days
```

### Go

```go
// Write a Go program to convert weeks to days

package main

import "fmt"

func main() {
	var weeks int
	fmt.Scanf("%d", &weeks)
	day := weeks * 7
	fmt.Println(day)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert weeks to days

main = do
    putStrLn "Please enter the number of weeks: "
    line <- getLine
    let weeks = (read line :: Int)
    let x = weeksToDays weeks

    putStrLn ("Number of days: " ++ show (weeksToDays weeks))

weeksToDays weeks = weeks * 7
```

### Java

```java
// Write a Java program to convert weeks to days

import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the number of weeks: ");
	    Scanner sc=new Scanner(System.in);
	    int week=sc.nextInt();
	    int days = week*7;
	   System.out.print(week+" weeks is "+days+ " days");

	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert weeks to days

let weeks = 5;
let days = weeks * 7;

console.log(days);
```

### Julia

```julia
# Write a Julia program to convert weeks to days

print("Enter the number of weeks: ")
weeks = parse(Int, readline())
days = weeks * 7
println("$weeks weeks is equal to $days days")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert weeks to days

fun main() {
    print("Enter Weeks : ")
    println()
    var input = readLine()
    println("$input weeks = " + (input!!.toInt() * 7) + " days")
}
```

### Perl

```perl
# Write a Perl program to convert weeks to days

print "Enter the no of weeks : ";
my $weeks = <STDIN> ;

my $res = week2Days($weeks);
print "Days conversion for the given weeks : $res days";

sub week2Days
{
    my ($x) = @_;
    my $res = $x * 7;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to convert weeks to days

<?php

function weeks2Days($week) {
  return $week * 7;

}

echo weeks2Days(5);
?>
```

### Python

```python
# Write a Python program to convert weeks to days

weeks = int(input("Please enter the number of weeks: "))
days = weeks * 7
print(days)
```

### R

```r
# Write a R program to convert weeks to days

# Program to convert weeks into days

# Taking input from user
weeks = as.integer(readline(prompt="Enter number of weeks: "))

# Calculating days
days = weeks * 7

# Printing output
print(paste(weeks, "weeks is equal to", days, "days"))
```

### Ruby

```ruby
# Write a Ruby program to convert weeks to days

require 'active_support/inflector'

def weeksToDays weeks
    days = weeks * 7
    weeks.to_s + " week".pluralize(weeks) + " is " + days.to_s + " days"
end

puts weeksToDays 1
```

### Rust

```rust
// Write a Rust program to convert weeks to days

fn main() {
    // Read the number of weeks from the user
    let mut weeks = String::new();
    println!("Enter the number of weeks: ");
    std::io::stdin().read_line(&mut weeks).expect("Failed to read input");

    // Convert the input string to a number
    let weeks: i32 = weeks.trim().parse().expect("Please enter a valid number");

    // Calculate the equivalent number of days
    let days = weeks * 7;

    // Print the result
    println!("{} weeks is equivalent to {} days.", weeks, days);
}
```

### Scala

```scala
// Write a Scala program to convert weeks to days

import scala.io.StdIn._;

object weeksToDays {
  def main(args:Array[String]):Unit={
    println("Enter the number of weeks : ");
    var weeks = readLine();
    var days = weeks.toInt * 7;
    println(weeks+" weeks is "+days+" days");
  }
}
```

### Swift

```swift
// Write a Swift program to convert weeks to days

import Swift
import Foundation

print("Enter weeks: ")
var weeks = Int(readLine()!)!
print("Days: ", weeks * 7)
```

### TypeScript

```typescript
// Write a TypeScript program to convert weeks to days

function convertWeeksToDays(weeks: number): number {
  return weeks * 7;
}

console.log("Days in the given weeks:", convertWeeksToDays(5));
```
