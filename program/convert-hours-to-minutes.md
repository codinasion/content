---
title: "Convert Hours To Minutes"
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
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "tanishq-singh-2407",
    "Hsanchez9711",
    "watacodes",
    "mon842",
    "SekarMylsamy",
    "mrajen27",
    "sureshsgith",
    "PraaneshSelvaraj",
    "brundabharadwaj",
    "Medmly20208",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 4635
description: "Write a program to convert hours to minutes."
---

## Write a program to convert hours to minutes

1 hour = 60 minutes

```
Input  : 5
Output : 300
```

---

```c
// Write a C program to convert hours to minutes

#include<stdio.h>
void main()
{
    int x;
    printf("Input: ");
    scanf("%d", &x);
    printf("Output : %d\n", x*60);
}
```

```csharp
// Write a C# program to convert hours to minutes

using System;

/**
 * ConvertHoursToMinutes
 */
public class ConvertHoursToMinutes {

    static void Main(string[] args)
    {
        Console.WriteLine("Enter Hours ");
        int input = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Input: " + input);
        Console.WriteLine("Output: " + (input * 60));
    }
}
```

```cpp
// Write a C++ program to convert hours to minutes

#include <iostream>
using namespace std;

int main()
{
    int x;
    cout << "Input: " ;
    cin >> x;
    cout << "Output: " << x*60 <<endl;
    return 0;
}
```

```dart
// Write a Dart program to convert hours to minutes

import 'dart:io';
void main(){
  print("Enter the hours :");
  var hours =int.parse(stdin.readLineSync());
  var minutes = hours * 60;
  print('Equivalent minutes : $minutes');
}
```

```fsharp
// Write a F# program to convert hours to minutes

let hoursToMinutes hours : int =
   hours * 60

let minutes = hoursToMinutes 5

printfn "Equivalent minutes : %d" minutes
```

```go
// Write a Go program to convert hours to minutes

package main

import "fmt"

func main() {

  var hours int
  var minutes int
  fmt.Println("Please enter hours:")
  fmt.Scanf("%d", &hours)
  minutes = hours * 60
  fmt.Println(minutes , " Minutes")
}
```

```haskell
-- Write a Haskell program to convert hours to minutes

module  Main where

hoursToMins :: Int -> Int
hoursToMins hours = hours * 60
```

```java
// Write a Java program to convert hours to minutes

import java.util.Scanner;

/**
 * ConvertHoursToMinutes
 */
public class ConvertHoursToMinutes {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input: ");
        int x = sc.nextInt();
        sc.close();
        System.out.println("Output: " + (x * 60));
    }
}
```

```javascript
// Write a JavaScript program to convert hours to minutes

let hours = 2;

function convertHoursToMinutes(hour) {
  return hour * 60;
}

console.log(convertHoursToMinutes(hours));
```

```julia
# Write a Julia program to convert hours to minutes

println("Enter value in hours: ")
hours = readline()
hours = parse(Int, hours)
minutes = hours * 60
println(hours, " hours equals ", minutes, " minutes")
```

```kotlin
// Write a Kotlin program to convert hours to minutes

import java.util.Scanner

fun main() {
    val hour = Scanner(System.`in`)
    println("Enter the hours: ")
    val hours: Int = hour.nextInt()
    val minutes = hours *60
    println("$hours  hours to minutes is $minutes ")
}
```

```perl
# Write a Perl program to convert hours to minutes

print "Enter the hours: ";
my $hours = <STDIN> ;

my $res = hoursToMinutes($hours);
print "$hours hours is $res minutes";

sub hoursToMinutes
{
    my ($x) = @_;
    my $res = $hours * 60;
    return $res ;
}
```

```php
// Write a PHP program to convert hours to minutes

<?php

function hours2Minutes($hours) {
	return $hours * 60;
}

echo hours2Minutes(5)

?>
```

```python
# Write a Python program to convert hours to minutes

def convertHoursToMinutes(hours: float) -> float:
    """
    convert hours to minutes
    Arguments:
        hours:float
    Returns:
        minutes:float
    """

    return hours * 60


if __name__ == "__main__":
    hours = float(input("Type number of hours: "))
    print("Number of minutes is:", convertHoursToMinutes(hours))


# contributed by MedMly20208 Mohamed Moulay
```

```r
# Write a R program to convert hours to minutes

hours = 5
minutes = hours * 60
cat("minutes: ", minutes)
```

```ruby
# Write a Ruby program to convert hours to minutes

print "Enter hours : "
hours = gets.chomp.to_i
minutes = hours * 60
print "Minutes : #{minutes}"
```

```rust
// Write a Rust program to convert hours to minutes

use std::io;

fn main() {
    println!("Enter the number of hours:");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input.");

    let hours: u32 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number of hours.");
            return;
        }
    };

    let minutes = hours * 60;

    println!("{} hours is equal to {} minutes.", hours, minutes);
}
```

```scala
// Write a Scala program to convert hours to minutes

import scala.io.StdIn._;

object hoursToMinutes {
  def main(args:Array[String]):Unit={
    println("Enter the hours : ");
    var hours = readLine();
    var minutes = hours.toInt * 60;
    println(hours+" hours is "+minutes+" minutes");
  }
}
```

```swift
// Write a Swift program to convert hours to minutes

import Swift
import Foundation

print("Enter hours: ")
var hours = Int(readLine()!)!
print("Minutes: ", hours * 60)
```

````typescript
// Write a TypeScript program to convert hours to minutes

/**
 *
 * @name This program convert hours to minutes
 * @param {number} hours
 * @returns {number}
 *
 * @example
 * ```ts
 * const minutes1: number = ConvertHoursToMinutes(3) // 180
 * const minutes2: number = ConvertHoursToMinutes(1.5) // 90
 * ```
 *
 * @author Tanishq Singh
 */
function ConvertHoursToMinutes(hours: number): number {
  const minutesInHour = 60;

  return hours * minutesInHour;
}

// Console Tests
console.log("Numer of minutes in 1 hours: ");
console.log("That is " + ConvertHoursToMinutes(1) + " // 60");

console.log("Numer of minutes in 2 hours: ");
console.log("That is " + ConvertHoursToMinutes(2) + " // 120");
````
