---
title: "Convert Minutes To Seconds"
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
    "Ishay1997",
    "saintramon",
    "sancoLgates",
    "auleki",
    "anshu-6537",
    "tanishq-singh-2407",
    "codingkush",
    "AshishSharma1203",
    "grraghav120",
    "metal-oopa",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-10T15:49:29Z
trackId: 1876
description: "Write a program to convert minutes to seconds."
---

## Write a program to convert minutes to seconds

1 minute = 60 seconds

```
Input  : 5
Output : 300
```

---

```c
// Write a C program to convert minutes to seconds

#include <stdio.h>

int main(){
    int n;
    scanf("%d",&n);
    printf("%d\n",n*60);
    return 0;
}

//Contributed by Raghav Garg
```

```csharp
// Write a C# program to convert minutes to seconds

// C# program to convert minutes in seconds

using System;

class GFG
{


static void convertMinutes(int n)
{
int  seconds;


	seconds = n * 60;

	Console.WriteLine(seconds);
}

// Driver code
public static void Main ()
{
	int n = Console.ReadLine();
	convertMinutes(n);
}
}
```

```cpp
// Write a C++ program to convert minutes to seconds

/**
 * NAME: JASMIN, RAMON EMMIEL P.
 * DATE: February 24, 2023
 * COUNTRY: Philippines
 */

#include <iostream>
using namespace std;

int convertMinutesToSeconds(int);

int main(){

    int sampleMinute = 5;

    cout << convertMinutesToSeconds(sampleMinute) << endl;

    return 0;
}

int convertMinutesToSeconds(int minutes){
    return minutes*60;
}
```

```dart
// Write a Dart program to convert minutes to seconds

void main() {
  print(convertMinutesToSeconds());
}

int convertMinutesToSeconds({int days = 5}) {
  int secondsInMinute = 60;
  return secondsInMinute * days;
}
```

```fsharp
// Write a F# program to convert minutes to seconds

let minutesToSeconds mins : int =
  mins * 60

let seconds =  minutesToSeconds 5

printfn "Equivalent seconds : %d" seconds
```

```go
// Write a Go program to convert minutes to seconds

package main

import "fmt"

func minutesToSeconds(nums int) int {
	return nums * 60
}

func main() {
	var i int

	fmt.Print("Input Minutes: ")
	fmt.Scan(&i)
	fmt.Println(minutesToSeconds(i))
}
```

```haskell
-- Write a Haskell program to convert minutes to seconds

main :: IO ()
main = do
   putStrLn "Enter minutes: "
   input1 <- getLine
   let minutes = read input1 :: Float

   let seconds = minutes * 60
   putStrLn $ show (seconds)
```

```java
// Write a Java program to convert minutes to seconds

import java.util.Scanner;
class minutesToSeconds
{
	int sec;
	void seconds(int m)
	{
	  sec=m*60;
	}
	public static void main(String[] arg)
	{
	int min;
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter Minutes");
	min=sc.nextInt();
	minutesToSeconds res=new minutesToSeconds();
	res.seconds(min);
	System.out.println("Seconds: "+res.sec);
	}
}
```

````javascript
// Write a JavaScript program to convert minutes to seconds

/**
 *
 * @name This program converts minutes into seconds
 * @param {number} minutes
 * @returns {number} seconds
 *
 * @example
 * ```js
 * const area1 = ConvertMinutesToSeconds(5) // 300
 * const area2 = ConvertMinutesToSeconds(1) // 60
 * ```
 */
function ConvertMinutesToSeconds(minutes) {
  return minutes * 60;
}

// Console Tests
console.log("Number of seconds in 5 minutes.");
console.log("That is" + ConvertMinutesToSeconds(5) + "// 300");

console.log("Number of seconds in 15 minutes.");
console.log("That is" + ConvertMinutesToSeconds(15) + "// 900");

console.log("Number of seconds in 2.5 minutes.");
console.log("That is" + ConvertMinutesToSeconds(2.5) + "// 150");
````

```julia
# Write a Julia program to convert minutes to seconds

println("Enter value in minutes: ")
min = parse(Int, readline())
sec = min * 60
println(min, " minutes equals ", sec, " seconds")
```

```kotlin
// Write a Kotlin program to convert minutes to seconds

import java.util.concurrent.TimeUnit

fun main(args: Array<String>) {

    val minutes: Long = 180
    val seconds = TimeUnit.MINUTES.toSeconds(minutes)
    println("$minutes Minutes = $seconds seconds")
}
```

```perl
# Write a Perl program to convert minutes to seconds

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the minutes : ";
my $mins = <STDIN>;
my $seconds = $mins * 60;
print $mins." minutes are ".$seconds." seconds\n";
```

```php
// Write a PHP program to convert minutes to seconds

<?php
  $x = readline('Enter Minutes: ');

  $x1 = $x * 60;
  echo "Seconds: $x1 \n";
?>
```

```python
# Write a Python program to convert minutes to seconds

# asking for input
totalminutes = input(f"Enter the minutes: ")

# checking for only digit in input
if totalminutes.isdigit():
    # converting string type to int type
    totalminutes = int(totalminutes)

    # calculating on basis of formula
    totalSeconds = totalminutes * 60

    # printing the output
    print(f"Total time: {totalSeconds} seconds")

# user type input other than digit
else:
    print(f"Please enter valid input.")
```

```r
# Write a R program to convert minutes to seconds

minutes = 5
seconds = minutes * 60
cat("seconds: ", seconds)
```

```ruby
# Write a Ruby program to convert minutes to seconds

def convert_to_seconds(minutes)
    seconds_in_minute = 60
    return minutes * seconds_in_minute
end
```

```rust
// Write a Rust program to convert minutes to seconds

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

    let seconds = minutes * 60;

    println!("{} minutes is equal to {} seconds.", minutes, seconds);
}
```

```scala
// Write a Scala program to convert minutes to seconds

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val minutes = scala.io.StdIn.readInt();
	  println("Seconds: " + minutes * 60);
	}
}
```

```swift
// Write a Swift program to convert minutes to seconds

import Swift
import Foundation

var minutes = 5

var seconds = minutes * 60
print("Seconds: ", seconds)
```

````typescript
// Write a TypeScript program to convert minutes to seconds

/**
 *
 * @name This program converts minutes into seconds
 * @param {number} minutes
 * @returns {number} seconds
 *
 * @example
 * ```ts
 * const area1 = ConvertMinutesToSecondsTS(5) // 300
 * const area2 = ConvertMinutesToSecondsTS(1) // 60
 * ```
 */
function ConvertMinutesToSecondsTS(minutes: number) {
  return minutes * 60;
}

// Console Tests
console.log("Number of seconds in 5 minutes.");
console.log("That is" + ConvertMinutesToSecondsTS(5) + "// 300");

console.log("Number of seconds in 15 minutes.");
console.log("That is" + ConvertMinutesToSecondsTS(15) + "// 900");

console.log("Number of seconds in 2.5 minutes.");
console.log("That is" + ConvertMinutesToSecondsTS(2.5) + "// 150");
````
