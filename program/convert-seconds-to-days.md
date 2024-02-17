---
title: "Convert Seconds To Days"
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
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "Shalevro2",
    "rksp25",
    "joao-vitor-souza",
    "SyarifulMsth",
    "PoweredByCaffein",
    "bettoarcaya",
    "BiscuitCandy",
    "boatwrong",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3644
description: "Write a program to convert seconds to days."
---

## Write a program to convert seconds to days

1 day = 24 hours = 1440 minutes = 86400 seconds

```
Input  : 432000
Output : 5
```

---

```c
// Write a C program to convert seconds to days

#include <stdio.h>

int main(int argc, char **argv)
{
    float seconds, minutes, hours, days;

    // Prompt user for input
    printf("Enter time in seconds:\n");
    scanf("%f", &seconds);

    // Convert seconds to minutes, to hours, to days
    minutes = seconds / 60.0;
    hours = minutes / 60.0;
    days = hours / 24.0;

    // Output result
    printf("Time in Days: %f\n", days);

    return 0;
}
```

```csharp
// Write a C# program to convert seconds to days

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the seconds : ");
    double seconds = Convert.ToDouble(Console.ReadLine());
    double days = seconds / 86400;
    Console.WriteLine(seconds+" seconds is "+days+" days");
  }
}
```

```cpp
// Write a C++ program to convert seconds to days

/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float seconds;
    cout << "\n\nSeconds -> ";
    cin >> seconds;

    float days;
    days = seconds / (60 * 60 * 24);

    cout << "\nNumber of days in " << seconds << " seconds is -> " << days << endl
         << endl;

    return 0;
}
```

```dart
// Write a Dart program to convert seconds to days

import 'dart:io';
void main(){
  print("Enter the seconds :");
  int seconds = int.parse(stdin.readLineSync()!);
  int days = seconds~/86400;
  print('Equivalent days : $days');
}
```

```fsharp
// Write a F# program to convert seconds to days

let secondsToDays secs : int =
   secs / 86400

let days = secondsToDays 432000

printfn "Equivalent days : %d" days
```

```go
// Write a Go program to convert seconds to days

package main

import "fmt"

func main() {
	var input float64
	fmt.Printf("Input: ")
	fmt.Scan(&input)
	fmt.Printf("Output: %.5f\n", input/86400)
}
```

```haskell
-- Write a Haskell program to convert seconds to days

main :: IO ()
main = do
   putStrLn "Enter seconds: "
   input1 <- getLine
   let seconds = read input1 :: Float

   let days = seconds / 86400
   putStrLn $ show (days)
```

```java
// Write a Java program to convert seconds to days

import java.util.Scanner;

public class ConvertSecondsToDays {

	public static int ConvertSectoDay(int seconds) {
		return seconds / 86400;
	}


	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
	    int seconds = scanner.nextInt();

		System.out.println(ConvertSectoDay(seconds));
	}

}
```

```javascript
// Write a JavaScript program to convert seconds to days

// JavaScript program convert seconds into days
// Function convert second into day
function ConvertSectoDay(input) {
  let day = parseInt(input / (24 * 3600));
  document.write(`${day} days`);
}

// Given n is in seconds
let input = 432000;
ConvertSectoDay(input);
```

```julia
# Write a Julia program to convert seconds to days

println("Enter value in seconds: ")
seconds = readline()
seconds = parse(Int, seconds)
days = round(seconds / 86400)
days = convert(Int, days)
println(seconds, " seconds equals ", days, " days")
```

```kotlin
// Write a Kotlin program to convert seconds to days

import java.util.Scanner

fun main() {
    print("Enter Seconds : ")
    println()
    var sec = readLine()

    try {
        println("$sec seconds to days : " + ConvertSecondsToDays(sec!!.toInt()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertSecondsToDays(sec: Int): Int {
    val secToDays = sec / 86400

    return  secToDays
}
```

```perl
# Write a Perl program to convert seconds to days

my $seconds = <STDIN>;
$days = $seconds / 86400;
print "days: $days"
```

```php
// Write a PHP program to convert seconds to days

<?php
$x = readline('Enter Seconds: ');

$x1 = $x/86400;
echo "Days: $x1 \n";

?>
```

```python
# Write a Python program to convert seconds to days

def seconds_to_days(seconds):
    return seconds // 86400


if __name__ == "__main__":
    seconds = int(input())
    print(seconds_to_days(seconds))
```

```ruby
# Write a Ruby program to convert seconds to days

print "Enter seconds : \n"
seconds = gets.chomp.to_i
days = seconds / 86400
print "Days : #{days}"
```

```rust
// Write a Rust program to convert seconds to days

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

    let days = seconds / 86400;

    println!("{} seconds is equal to {} days.", seconds, days);
}
```

```scala
// Write a Scala program to convert seconds to days

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val seconds = scala.io.StdIn.readInt();
	  println("Days: " + seconds / 86400)
	}
}
```

```swift
// Write a Swift program to convert seconds to days

import Swift
import Foundation

var seconds = 432000

var days = seconds / 86400
print("Days: ", days)
```

```typescript
// Write a TypeScript program to convert seconds to days

function converSecondsToDays(seconds: number): number {
  const day = 86400; //Seconds in 24 Hours
  return Math.round(seconds / day);
}

console.log(converSecondsToDays(432000));
```
