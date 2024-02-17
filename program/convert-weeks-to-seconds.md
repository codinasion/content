---
title: "Convert Weeks To Seconds"
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
    "saintramon",
    "esivakumar18",
    "joao-vitor-souza",
    "TechnicalAmanjeet",
    "grraghav120",
    "PraaneshSelvaraj",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 3035
description: "Write a program to convert weeks to seconds."
---

## Write a program to convert weeks to seconds

1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

```
Input  : 5
Output : 3024000
```

---

```c
// Write a C program to convert weeks to seconds

#include <stdio.h>

// Write a C program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000



void main()
{
    int num;

    printf("Enter number of weeks : ");
    scanf("%d", &num);

    int total_seconds;

    total_seconds = num * 604800;

    printf("\nTotal Seconds is  : %d\n", total_seconds);
}

// Contributed by Technical Amanjeet
```

```csharp
// Write a C# program to convert weeks to seconds

// Write a C# program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

using System;
namespace Sample {
   class Demo {
      static void Main(string[] args) {
         int num1 = 5;
         int num2 = num1 * 604800;

         Console.WriteLine("Total Seconds :  {0}", num2);
      }
   }
}

// Writtern by Technical Amanjeet
```

```cpp
// Write a C++ program to convert weeks to seconds

/**
 * @file ConvertWeeksToSeconds.cpp
 * @author Jasmin, Ramon Emmiel P. (ramonjasmin8@gmail.com)
 * @brief
 * @version 0.1
 * @date 2023-02-28
 * @copyright Copyright (c) 2023
 */

#include <iostream>
using namespace std;

int convertWeeksToSeconds(int);

int main(){
    int sampleInput = 5;
    int sampleOutput = convertWeeksToSeconds(sampleInput);

    cout << "INPUT: " << sampleInput << endl;
    cout << "OUTPUT: " << sampleOutput << endl;
}

int convertWeeksToSeconds(int weeks){
    return (weeks * 604800);
}
```

```dart
// Write a Dart program to convert weeks to seconds

import 'dart:io';

// Write a Dart program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

void main() {
  print('Enter Number of Weeks : ');
  int num_of_weeks = int.parse(stdin.readLineSync());

  int total_seconds = num_of_weeks * 604800;

  print('Total Seconds : \n$total_seconds');
}

// Contributed by Technical Amanjeet.
```

```fsharp
// Write a F# program to convert weeks to seconds

// Write a F# program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

main = do
 let num_of_weeks = 5
 let total_seconds = num_of_weeks * 604800
 putStrLn "Total no of seconds is:"
 print (total_seconds)


//  contributed by Technical amanjeet
```

```go
// Write a Go program to convert weeks to seconds

package main

// Write a GO program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000


import "fmt"

func main(){
  var num_of_weeks int

  fmt.Println("Enter nummber of weeks :")
  fmt.Scan(&num_of_weeks)

	var num_of_seconds int
	num_of_seconds = num_of_weeks * 604800

  fmt.Println("Total Seconds in given week is ", num_of_weeks * 10080)
}

// Contributed by Technical Amanjeet
```

```haskell
-- Write a Haskell program to convert weeks to seconds

main :: IO ()
main = do
    putStrLn "Enter a number of Weaks, and I will convert it to Seconds"
    input <- getLine
    let weeks = read input :: Float
    let seconds = weeks * 604800
    putStrLn $ show (weeks) ++ " weeks is equal to " ++ show (seconds) ++ " seconds."
```

```java
// Write a Java program to convert weeks to seconds

import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
		System.out.println(n*604800);
	}
}

//Contributed by Raghav Garg
```

```javascript
// Write a JavaScript program to convert weeks to seconds

function convertWeeksToSeconds(weeks) {
  // 1 day = 24 * 3600 = 86400 seconds
  // 1 week = 7 * 86400 = 604800 seconds
  // therefore, 5 weeks has 5 * 604800 seconds = 3024000

  let weeksToSeconds = weeks * 604800;
  return weeksToSeconds;
}

console.log(convertWeeksToSeconds(5));
```

```julia
# Write a Julia program to convert weeks to seconds

# Write a Julia program to convert weeks to seconds

# 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

# Input  : 5
# Output : 3024000

num = 5
weaks = num

seconds = weaks * 604800

println(seconds)

# # while loop
# while i > 0

#     # Printing values of Array
#     println(i)

#     # Updating iterator globally
#     global i -= 1

# # Ending Loop
# end

# contributed by Technical Amanjeet
```

```kotlin
// Write a Kotlin program to convert weeks to seconds

import java.util.Scanner

// Write a Kotlin program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

fun main(){
  print("Enter number of weeks : ")

  // Creates an instance which takes input from standard input (keyboard)
    val reader = Scanner(System.`in`)

    // nextInt() reads the next integer from the keyboard
    var num_of_weaks:Int = reader.nextInt()

  val total_seconds_in_weaks = num_of_weaks * 604800

  println("Total Minutes in given weaks is ${total_seconds_in_weaks}")
}

// contributed by technical amanjeet
```

```perl
# Write a Perl program to convert weeks to seconds

use warnings;
use 5.010;

sub w_to_s {
  my($c)=@_;
  return ($c * 604800);
}


print "Input ( W ): ";
$weeks=<STDIN>;

$seconds=c_to_f($weeks);
say "Output ( S ): $seconds";
```

```php
// Write a PHP program to convert weeks to seconds

<?php

    // Write a PHP program to convert weeks to seconds

    // 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

    // Input  : 5
    // Output : 3024000

    // take input
    $weeks = (float)readline("Enter distance in miles: ");

    function convert($weeks){
        return $weeks*604800;
    }

    echo convert($weeks) . " Seconds";

?>


// contributed by Technical Amanjeet
```

```python
# Write a Python program to convert weeks to seconds

# Write a Python program to convert weeks to seconds

# 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

# Input  : 5
# Output : 3024000

num_of_weeks = input("Enter Weeks : ")

num_of_weeks = int(num_of_weeks)

total_seconds = num_of_weeks * 604800

print(f"Total seconds in ${num_of_weeks} is ${total_seconds}")

# Contributed by technical amanjeet
```

```r
# Write a R program to convert weeks to seconds

number_of_seconds<-604800

noOfweeks<-scan(what = integer(),n=1);

result = number_of_seconds * noOfweeks;

print(result)
```

```ruby
# Write a Ruby program to convert weeks to seconds

print "Enter Weeks : "
week = gets.chomp.to_i
seconds = week * 604800
print "Seconds : #{seconds}"
```

```rust
// Write a Rust program to convert weeks to seconds

fn convert_weeks_to_seconds(weeks: i32) -> i32
{
  let seconds =  weeks*7*24*60*60*60;

  return seconds;
}

fn main()
{
  let weeks = 5;
 let seconds =  convert_weeks_to_seconds(weeks);

 println!("{}", minutes);

}
```

```scala
// Write a Scala program to convert weeks to seconds

object Main extends App
{
  def seconds[T](weeks: T)(implicit ev: Numeric[T]) =
    ev.times(weeks * 604800)

  val weeks = 5

  println("Weaks : " + weaks)

  println("\Seconds : " + seconds(weaks))

}
```

```swift
// Write a Swift program to convert weeks to seconds

// Write a Swift program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000


import Foundation

let weeks = readLine()

let weeks_in_int = Int(myString!)

let seconds = weeks_in_int! * 604800

print(cube)

// contributed by technical amanjeet
```

```typescript
// Write a TypeScript program to convert weeks to seconds

function convertWeeksToSeconds(weeks: number) {
  const seconds = weeks * 7 * 24 * 60 * 60;

  return seconds;
}

const weeks = 5;
const seconds = convertWeeksToSeconds(weeks);

console.log(seconds);

// contributed by technical Amanjeet
```
