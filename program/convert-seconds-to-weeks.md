---
title: "Convert Seconds To Weeks"
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
    "anandfresh",
    "esivakumar18",
    "sancoLgates",
    "Osher160",
    "ofirtzabari",
    "rksp25",
    "joao-vitor-souza",
    "Mudi-Igbinoba",
    "tanishq-singh-2407",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-11T01:05:35Z
trackId: 3620
description: "Write a program to convert seconds to weeks."
---

## Write a program to convert seconds to weeks

1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

```
Input  : 3024000
Output : 5
```

---

```c
// Write a C program to convert seconds to weeks

#include <stdio.h> /* printf, scanf*/

int ConvertSecondsToWeeks(int seconds);

int main()
{
    int seconds = 0;

    scanf("%d",&seconds);

    printf("%d\n",ConvertSecondsToWeeks(seconds));

    return 0;
}

int ConvertSecondsToWeeks(int seconds)
{
    return (seconds / 604800);
}
```

```csharp
// Write a C# program to convert seconds to weeks

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double weeks = seconds / 604800;
    Console.WriteLine(seconds+" seconds is "+weeks+" weeks");
  }
}
```

```cpp
// Write a C++ program to convert seconds to weeks

#include <bits/stdc++.h>
using namespace std;

int ConvertSecondsToWeek(int seconds) {
	int secInWeek = 60 * 60 * 24 * 7;

	return seconds / secInWeek;
}

int main() {
    int n = 129600;
    cout << ConvertSecondsToWeek(604800)  << " // 1 \n";
    cout << ConvertSecondsToWeek(3024000) << " // 5 \n";

	return 0;
}
```

```dart
// Write a Dart program to convert seconds to weeks

import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int weeks = seconds~/604800;
  print('Equivalent weeks : $weeks');
}
```

```fsharp
// Write a F# program to convert seconds to weeks

let secondsToWeeks secs : int =
   secs / 604800

let weeks = secondsToWeeks 3024000

printfn "Equivalent weeks : %d" weeks
```

```go
// Write a Go program to convert seconds to weeks

package main

import "fmt"

func secondToWeeks(nums int) int {
	return nums / 604800
}

func main() {
	var i int
	fmt.Print("Enter Seconds: ")
	fmt.Scan(&i);
	fmt.Println(secondToWeeks(i))
}
```

```haskell
-- Write a Haskell program to convert seconds to weeks

main :: IO ()
main = do
   putStrLn "Enter seconds: "
   input1 <- getLine
   let seconds = read input1 :: Float

   let weeks = seconds / 604800
   putStrLn $ show (weeks)
```

```java
// Write a Java program to convert seconds to weeks

import java.util.Scanner;

public class ConvertSecondsToWeeks {

	public static int ConvertSecondsToWeeks(int seconds) {
		return seconds / 604800;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int seconds = scanner.nextInt();
		System.out.println(ConvertSecondsToWeeks(seconds));

	}

}
```

```javascript
// Write a JavaScript program to convert seconds to weeks

const secsToMins = 1 / 60;
const minsToHrs = 1 / 60;
const hrsToDays = 1 / 24;
const daysToWeeks = 1 / 7;

const convertSecondsToWeeks = seconds => {
  const secsToWeeks =
    seconds * secsToMins * minsToHrs * hrsToDays * daysToWeeks;
  return secsToWeeks;
};

console.log(convertSecondsToWeeks(3024000));
```

```julia
# Write a Julia program to convert seconds to weeks

println("Enter value in seconds: ")
seconds = readline()
seconds = parse(Int, seconds)
weeks = round(seconds / 604800)
weeks = convert(Int, weeks)
println(seconds, " seconds equals ", weeks, " complete weeks")
```

```kotlin
// Write a Kotlin program to convert seconds to weeks

import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    try {
        println("$sec seconds to weeks : " + ConvertSecondsToWeeks(sec!!.toInt()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertSecondsToWeeks(sec: Int): Int {
    val secToWeeks = sec / 604800

    return  secToWeeks
}
```

```perl
# Write a Perl program to convert seconds to weeks

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the seconds : ";
my $seconds = <STDIN>;
my $weeks = $seconds / 604800;
print $seconds." seconds is ".$weeks." weeks", "\n";
```

```php
// Write a PHP program to convert seconds to weeks

<?php
$x = readline('Enter Seconds: ');

$x1 = $x / 604800;
echo "Weeks: $x1 \n";

?>
```

```python
# Write a Python program to convert seconds to weeks

secsToMins = 1 / 60
minsToHrs = 1 / 60
hrsToDays = 1 / 24
daysToWeeks = 1 / 7


def convertSecondsToWeeks(seconds):
    secsToWeeks = seconds * secsToMins * minsToHrs * hrsToDays * daysToWeeks
    return secsToWeeks


print(convertSecondsToWeeks(3024000))
```

```r
# Write a R program to convert seconds to weeks

seconds = 3024000
weeks = seconds / 604800
cat("weeks: ", weeks)
```

```ruby
# Write a Ruby program to convert seconds to weeks

print "Enter seconds : \n"
seconds = gets.chomp.to_i
weeks = seconds / 604800
print "Days : #{weeks}"
```

```rust
// Write a Rust program to convert seconds to weeks

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

    let weeks = seconds / 604800;

    println!("{} seconds is equal to {} weeks.", seconds, weeks);
}
```

```scala
// Write a Scala program to convert seconds to weeks

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val seconds = scala.io.StdIn.readInt();
	  println("Days: " + seconds / 604800)
	}
}
```

```swift
// Write a Swift program to convert seconds to weeks

import Swift
import Foundation

var seconds = 3024000

var weeks = seconds / 604800
print("Weeks: ", weeks)
```

````typescript
// Write a TypeScript program to convert seconds to weeks

/**
 *
 * @name This program convert seconds to weeks
 * @param {number} seconds
 * @returns {number}
 *
 * @example
 * ```js
 * const week1 = ConvertSecondsToWeeks(604800) // 1
 * const week2 = ConvertSecondsToWeeks(1209600) // 2
 * ```
 */
function ConvertSecondsToWeeks(seconds: number): number {
  const secondsInWeek = 60 * 60 * 24 * 7;
  return seconds / secondsInWeek;
}

// Console Tests
console.log("Numer of weeks in 604800 seconds: ");
console.log("That is " + ConvertSecondsToWeeks(604800) + " // 1");

console.log("Numer of weeks in 3024000 seconds: ");
console.log("That is " + ConvertSecondsToWeeks(3024000) + " // 5");
````
