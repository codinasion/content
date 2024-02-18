---
title: "Convert Minutes To Hours"
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
    "anandfresh",
    "esivakumar18",
    "Osher160",
    "hi-Kartik2004",
    "rksp25",
    "joao-vitor-souza",
    "tanishq-singh-2407",
    "samilieberman",
    "sidharthbh8",
    "ba-ppp",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 3502
description: "Write a program to convert minutes to hours."
---

## Table of contents

## Write a program to convert minutes to hours

1 hour = 60 minutes

```
Input  : 300
Output : 5
```

---

### C

```c
// Write a C program to convert minutes to hours

#include <stdio.h> /* printf, scanf */

int ConvertMinToHours(int minutes);

int main()
{
    int minutes = 0;

    if(1 != scanf("%d",&minutes))
    {
        return -1;
    }

    printf("%d\n",ConvertMinToHours(minutes));

    return 0;
}

int ConvertMinToHours(int minutes)
{
    return minutes / 60;
}
```

### C#

```csharp
// Write a C# program to convert minutes to hours

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes : ");
    double minutes = Convert.ToDouble(Console.ReadLine());
    double hours = minutes / 60;
    Console.WriteLine(minutes+" minutes is "+hours+" hours");
  }
}
```

### C++

```cpp
// Write a C++ program to convert minutes to hours

// This programme converts minutes to hours
#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;
int main(){
    // Taking user input
    cout<<"Enter the minutes :";
    ll min; cin>>min;

    // Displaying output
    cout<<min<<" minutes = ";
    cout<<min/60.0<<" hour(s)"<<endl;  // since 60 min = 1hour
}

/*
Author : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to convert minutes to hours

import 'dart:io';
void main(){
  print("Enter the minutes :");
  int minutes = int.parse(stdin.readLineSync()!);
  int hours = minutes~/60;
  print('Equivalent hours : $hours');
}
```

### F#

```fsharp
// Write a F# program to convert minutes to hours

let minutesToHours mins : int =
   mins / 60

let hours = minutesToHours 300

printfn "Equivalent hours : %d" hours
```

### Go

```go
// Write a Go program to convert minutes to hours

package main
import ("fmt"
        "math")

func minutesToHours(nums int) float64 {
  hours := float64(nums) / 60;
  // round to get 2 digits
  return math.Round(hours * 100) / 100;
}

func main() {
  test := minutesToHours(80)
  fmt.Println(test)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert minutes to hours

main :: IO ()
main = do
   putStrLn "Enter minutes: "
   input1 <- getLine
   let minutes = read input1 :: Float

   let hours = minutes / 60
   putStrLn $ show (hours)
```

### Java

```java
// Write a Java program to convert minutes to hours

import java.util.Scanner;

public class ConvertMinutesToHours {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            System.out.print("Enter Minutes:");
            int minutes = input.nextInt();

            float hours = minutes / 60;

            System.out.println("Time in Hours is: " + hours + " hour");
        }

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert minutes to hours

/**
 *
 * @name This program converts minutes to hours
 * @param {number} minutes
 * @returns {number} hours
 *
 */

function ConvertMinutesToHours(minutes) {
  return minutes / 60;
}

// Console Tests
console.log(
  "How many hours is 60 minutes? " + ConvertMinutesToHours(60) + " hour"
);
console.log(
  "How many hours is 1,440 minutes? " + ConvertMinutesToHours(1440) + " hours"
);
console.log(
  "How many hours is 525,600 minutes? " +
    ConvertMinutesToHours(525600) +
    " hours"
);
```

### Julia

```julia
# Write a Julia program to convert minutes to hours

println("Enter value in minutes: ")
minutes = readline()
minutes = parse(Int, minutes)
hours = round(minutes / 60)
hours = convert(Int, hours)
println(minutes, " minutes equals ", hours, " hours")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert minutes to hours

import java.util.Scanner
import kotlin.math.roundToInt

fun main() {
    print("Enter minutes : ")
    println()
    var min = readLine()

    println("Time in Hours is: " + ConvertMinutesToHours(min!!.toDouble()))

}

private fun ConvertMinutesToHours(min: Double): Double {
    val hours = min / 60

    return  hours
}
```

### Perl

```perl
# Write a Perl program to convert minutes to hours

my $minutes = <STDIN>;
$hours = $minutes / 60;
print "hours: $hours"
```

### PHP

```php
// Write a PHP program to convert minutes to hours

<?php
$x = readline('Enter Minutes: ');

$x1 = $x/60;
echo "Hours: $x1 \n";

?>
```

### Python

```python
# Write a Python program to convert minutes to hours

def format_time(minutes):
    hours_total = minutes // 60
    minutes_total = minutes % 60
    time_string = "{} hours and {} minutes".format(hours_total, minutes_total)
    return time_string


print(format_time(int(input())))
```

### R

```r
# Write a R program to convert minutes to hours

minutes = 300
hours = minutes / 60
cat("hours: ", hours)
```

### Ruby

```ruby
# Write a Ruby program to convert minutes to hours

print "Enter minutes : \n"
minutes = gets.chomp.to_i
hours = minutes / 60
print "Hours : #{hours}"
```

### Rust

```rust
// Write a Rust program to convert minutes to hours

use std::io;

fn main() {
    println!("Enter the number of minutes:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");

    let minutes: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of minutes.");
            return;
        }
    };

    let hours = minutes / 60;

    println!("{} minutes is equal to {} hours.", minutes, hours);
}
```

### Scala

```scala
// Write a Scala program to convert minutes to hours

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Hours: " + minutes / 60)
	}
}
```

### Swift

```swift
// Write a Swift program to convert minutes to hours

import Swift
import Foundation

print("Enter minutes: ")
var minutes = Int(readLine()!)!
print("Hours: ", minutes / 60)
```

### TypeScript

````typescript
// Write a TypeScript program to convert minutes to hours

/**
 *
 * @name This program convert minutes to hours
 * @param {number} minutes
 * @returns {number}
 *
 * @example
 * ```js
 * const hours1 = ConvertMinutesToHours(60) // 1
 * const hours2 = ConvertMinutesToHours(120) // 2
 * ```
 *
 * @author Tanishq Singh
 */
function ConvertMinutesToHours(minutes: number): number {
  const minutesInHour = 60;

  return minutes / minutesInHour;
}

// Console Tests
console.log("Numer of hours in 180 minutes: ");
console.log("That is " + ConvertMinutesToHours(180) + " // 3");

console.log("Numer of hours in 360 minutes: ");
console.log("That is " + ConvertMinutesToHours(3024000) + " // 6");
````
