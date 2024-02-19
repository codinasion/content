---
title: "Convert Days To Seconds"
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
    "RiteshK-611",
    "harshraj8843",
    "esivakumar18",
    "anandfresh",
    "Osher160",
    "sancoLgates",
    "rksp25",
    "joao-vitor-souza",
    "auleki",
    "grraghav120",
    "YaSh8202",
    "sashithaf16",
    "CodingWithHardik",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-10T12:36:56Z
trackId: 1900
description: "Write a program to convert days to seconds."
---

## Table of contents

## Write a program to convert days to seconds

1 day = 24 hours = 1440 minutes = 86400 seconds

```
Input  : 5
Output : 432000
```

---

### C

```c
// Write a C program to convert days to seconds

#include<stdio.h> /* printf, scanf */

int ConvertToSeconds(int days);

int main()
{
    int days = 0;

    if(1 != scanf("%d",&days))
    {
        return -1;
    }

    printf("%d\n",ConvertToSeconds(days));

    return 0;
}

int ConvertToSeconds(int days)
{
    return days * 60 * 1440;
}
```

### C#

```csharp
// Write a C# program to convert days to seconds

public class ConvertDaysToSeconds
{
	private const int NoOfHoursInADay = 24;
    private const int NoOfMinutesForAnHour = 60;
    private const int NoOfSecondsForAMinute = 60;

    public static void Main()
    {
		Console.WriteLine("Please enter the no. of days to be converted to seconds");

        string userInput = Console.ReadLine();
        double value;

        if (double.TryParse(userInput, out value) && Convert.ToDouble(userInput) > 0)
        {
			Console.WriteLine($"Converted amount in seconds :  {CalculateSecondsForDays(Convert.ToDouble(userInput))}");
		}
        else
        {
			Console.WriteLine("INVALID INPUT !!!");
        }
    }

    private static double CalculateSecondsForDays(double noOfDays)
    {
		double totalHours = Convert.ToDouble(noOfDays) * NoOfHoursInADay;
        double totalMinutes = totalHours * NoOfMinutesForAnHour;
        return totalMinutes * NoOfSecondsForAMinute;
    }
}
```

### C++

```cpp
// Write a C++ program to convert days to seconds

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;cin>>n;
    cout<<(n*86400)<<'\n';
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to convert days to seconds

int convertDaysToSeconds(int days) {
  int hours = 24, minutes = 60, seconds = 60, secondsInADay;
  secondsInADay = hours * minutes * seconds;
  return (days * secondsInADay).round();
}
```

### F#

```fsharp
// Write a F# program to convert days to seconds

let daysToSeconds days : int =
  days * 86400

let seconds =  daysToSeconds 5

printfn "Equivalent seconds : %d" seconds
```

### Go

```go
// Write a Go program to convert days to seconds

package main

import "fmt"

func daysToSeconds(nums int) int {
	return nums * 86400
}

func main() {
	var i int
	fmt.Print("Input Days: ")
	fmt.Scan(&i)
	fmt.Println(daysToSeconds(i))
}
```

### Haskell

```haskell
-- Write a Haskell program to convert days to seconds

main :: IO ()
main = do
    putStrLn "Enter days: "
    input1 <- getLine
    let days = read input1 :: Float

    let seconds = days * 86400
    putStrLn $ show (seconds)
```

### Java

```java
// Write a Java program to convert days to seconds

import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n = sc.nextInt();
	    int res=(n* 86400);
		System.out.println(res);
	 }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert days to seconds

function convertDaysToSeconds(days) {
  return days * 24 * 60 * 60;
}
console.log(convertDaysToSeconds(5));
```

### Julia

```julia
# Write a Julia program to convert days to seconds

println("Enter value in days: ")
days = readline()
days = parse(Int, days)
seconds = days * 86400
println(days, " days equals ", seconds, " seconds")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert days to seconds

fun main() {
    print("Enter number of Days : ")
    println()
    var num_of_days = readLine()

    println("$num_of_days days = " + ConvertDaysToSeconds(num_of_days!!.toInt()) + " seconds")

}

private fun ConvertDaysToSeconds(days: Int): Int {
    val seconds = days * 24 * 60 * 60

    return  seconds
}
```

### Perl

```perl
# Write a Perl program to convert days to seconds

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the days : ";
my $days = <STDIN>;
my $seconds = $days * 86400;
print $days." days are ".$seconds." seconds\n";
```

### PHP

```php
// Write a PHP program to convert days to seconds

<?php
  $x = readline('Enter Days: ');

  $x1 = $x * 86400;
  echo "Seconds: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert days to seconds

a = int(input())

print(a * 86400)

# Contributed by Raghav Garg
```

### R

```r
# Write a R program to convert days to seconds

convertDaysToSeconds = function(days) {
  return(days * 24 * 60 * 60)
}

print(convertDaysToSeconds(5))
#output: 432000
```

### Ruby

```ruby
# Write a Ruby program to convert days to seconds

def convert_days_to_seconds(days = 5)
  hours = 24
  minutes = 60
  seconds = 60
  seconds_in_day = hours * minutes * seconds
  return (seconds_in_day * days).round()
end
```

### Rust

```rust
// Write a Rust program to convert days to seconds

use std::io;

fn main() {
    println!("Enter the number of days:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");

    let days: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of days.");
            return;
        }
    };

    let seconds = days * 86400;

    println!("{} days is equal to {} seconds.", days, seconds);
}
```

### Scala

```scala
// Write a Scala program to convert days to seconds

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val days = scala.io.StdIn.readInt();
	  println("Seconds: " + days * 86400);
	}
}
```

### Swift

```swift
// Write a Swift program to convert days to seconds

import Swift
import Foundation

var days = 5

var seconds = days * 86400
print("Seconds: ", seconds)
```

### TypeScript

```typescript
// Write a TypeScript program to convert days to seconds

function convertDaysToSeconds(days: number): number {
  let hours = 24,
    minutes = 60,
    seconds = 60,
    secondsInADay;
  secondsInADay = hours * minutes * seconds;
  return Math.round(days * secondsInADay);
}

console.log(convertDaysToSeconds(5));
```

## Similar programs

- [Convert Seconds To Days](/program/convert-seconds-to-days)
- [Convert Seconds To Hours](/program/convert-seconds-to-hours)
- [Convert Hours To Seconds](/program/convert-hours-to-seconds)
- [Convert Minutes To Seconds](/program/convert-minutes-to-seconds)
- [Convert Seconds To Minutes](/program/convert-seconds-to-minutes)
- [Convert Seconds To Weeks](/program/convert-seconds-to-weeks)
- [Convert Weeks To Seconds](/program/convert-weeks-to-seconds)
- [Convert Days To Minutes](/program/convert-days-to-minutes)
- [Convert Minutes To Days](/program/convert-minutes-to-days)
- [Convert Hours To Days](/program/convert-hours-to-days)
