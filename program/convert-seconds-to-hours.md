---
title: "Convert Seconds To Hours"
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
    "JahnabDutta",
    "vedantpople4",
    "hi-Kartik2004",
    "joao-vitor-souza",
    "rksp25",
    "astitva0011",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3721
description: "Write a program to convert seconds to hours."
---

## Table of contents

## Write a program to convert seconds to hours

1 hour = 60 minutes = 3600 seconds

```
Input  : 18000
Output : 5
```

---

### C

```c
// Write a C program to convert seconds to hours

#include <stdio.h>

int main() {
  float hours,sec;
  //taking input as hours
  printf("How many hours?:");
  scanf("%f",&hours);
  //converting
  sec=hours*3600;
  //Output
  printf("%.2f",sec);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert seconds to hours

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double hours = seconds / 3600;
    Console.WriteLine(seconds+" seconds is "+hours+" hours");
  }
}
```

### C++

```cpp
// Write a C++ program to convert seconds to hours

// To convert Seconds to hours
#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;
int main(){
    //Taking input.
    cout<<"Enter the seconds : ";
    ll secs;    cin>>secs;

    //Displaying output
    cout<<secs<<" seconds are "<<secs/3600<<" hour(s)"<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### F#

```fsharp
// Write a F# program to convert seconds to hours

let secondsToHours secs : int =
   secs / 3600

let hours = secondsToHours 18000

printfn "Equivalent hours : %d" hours
```

### Go

```go
// Write a Go program to convert seconds to hours

package main

import "fmt"

func main() {
	var seconds int
	fmt.Scanf("%d", &seconds)
	hours := float64(seconds / 3600)
	fmt.Println(hours)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert seconds to hours

main :: IO ()
main = do
   putStrLn "Enter seconds: "
   input1 <- getLine
   let seconds = read input1 :: Float

   let hours = seconds / 3600
   putStrLn $ show (hours)
```

### Java

```java
// Write a Java program to convert seconds to hours

import java.util.*;
import java.io.*;
import java.text.*;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
		System.out.println(n/3600);
	}
}

// Contributed by Raghav Garg (@grraghav120)
```

### JavaScript

```javascript
// Write a JavaScript program to convert seconds to hours

function secondsToHMS(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hourDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var minDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var secDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return hourDisplay + minDisplay + secDisplay;
}

console.log(secondsToHMS(18000));
```

### Julia

```julia
# Write a Julia program to convert seconds to hours

println("Enter value in seconds: ")
seconds = readline()
seconds = parse(Int, seconds)
hours = round(seconds / 3600)
hours = convert(Int, hours)
println(seconds, " seconds equals ", hours, " hours")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert seconds to hours

import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    println("$sec seconds in hours : " + ConvertSecondsToHours(sec!!.toInt()))

}

private fun ConvertSecondsToHours(sec: Int): Int {
    val hour = sec / 3600;

    return  hour
}
```

### Perl

```perl
# Write a Perl program to convert seconds to hours

my $seconds = <STDIN>;
$hours = $seconds / 3600;
print "hours: $hours"
```

### PHP

```php
// Write a PHP program to convert seconds to hours

<?php
	$x = readline('Enter seconds: ');

  $x1 = $x / 3600;
  echo "Hours: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert seconds to hours

def convertSecondsToHours(seconds):
    return seconds / 3600


seconds = 18000
print("Input: " + str(seconds))
print("Output: " + str(convertSecondsToHours(seconds)))
```

### R

```r
# Write a R program to convert seconds to hours

seconds = 18000
hours = seconds / 3600
cat("hours: ", hours)
```

### Ruby

```ruby
# Write a Ruby program to convert seconds to hours

print "Enter seconds : \n"
seconds = gets.chomp.to_i
hours = seconds / 3600
print "Hours : #{hours}"
```

### Rust

```rust
// Write a Rust program to convert seconds to hours

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

    let hours = seconds / 3600;

    println!("{} seconds is equal to {} hours.", seconds, hours);
}
```

### Scala

```scala
// Write a Scala program to convert seconds to hours

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val seconds = scala.io.StdIn.readInt();
	  println("Hours: " + seconds / 3600)
	}
}
```

### Swift

```swift
// Write a Swift program to convert seconds to hours

import Swift
import Foundation

print("Enter seconds: ")
var seconds = Int(readLine()!)!

print("Hours: ", seconds/3600)
```

### TypeScript

```typescript
// Write a TypeScript program to convert seconds to hours

function secondsToHMS(d: number): string {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  const hourDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  const minDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  const secDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return hourDisplay + minDisplay + secDisplay;
}

console.log(secondsToHMS(61));
```
