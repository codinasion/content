---
title: "Convert Minutes To Days"
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
    "rsitters",
    "RiteshK-611",
    "esivakumar18",
    "anandfresh",
    "pokharel-nishan",
    "sancoLgates",
    "Osher160",
    "joao-vitor-souza",
    "mrajen27",
    "samilieberman",
    "akansharai2023",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 4313
description: "Write a program to convert minutes to days."
---

## Write a program to convert minutes to days

1 day = 24 hours = 1440 minutes

```
Input  : 7200
Output : 5
```

---

```c
// Write a C program to convert minutes to days

#include <stdio.h>

int main()
{
    int minutes;
    printf("Enter Minutes   :   ");
    scanf("%i", &minutes);

    int days = minutes / 1440;

    printf("Days    :   %i", days);
    return 0;
}
```

```csharp
// Write a C# program to convert minutes to days

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the minutes :");
    double mins = Convert.ToDouble(Console.ReadLine());
    double days = mins / 1440;
    Console.WriteLine(mins + " minutes is "+ days + " days");
  }
}
```

```cpp
// Write a C++ program to convert minutes to days

/****************************************************************************
*	Project:	ConvertMinutesToDays						                *
*	File:		ConvertMinutesToDays.cpp           					       	*
*	Date: 		2023-01-31									        		*
*	Version: 	1.00														*
****************************************************************************/

#include <iostream>

/****************************************************************************/
int ConvertMinutesToDays(int min);
/****************************************************************************/
int main()
{
    int minutes = 0;

    std::cout << "Enter num of minutes\n";

    std::cin >> minutes;

    std::cout << ConvertMinutesToDays(minutes);

    return 0;
}
/****************************************************************************/
int ConvertMinutesToDays(int min)
{
    //1440 minutes in a day
    return min / 1440;
}
/****************************************************************************/
```

```dart
// Write a Dart program to convert minutes to days

import 'dart:io';
void main(){
  print("Enter the minutes :");
  var minutes =int.parse(stdin.readLineSync());
  var days = minutes/1440;
  print('Equivalent days : $days');
}
```

```fsharp
// Write a F# program to convert minutes to days

let minutesToDays mins : int =
   mins / 1440

let days = minutesToDays 7200

printfn "Equivalent days : %d" days
```

```go
// Write a Go program to convert minutes to days

package main

import ("fmt")

func minutesToDays(i int) int {
	return (i / 24 / 60)
}

func main() {
	fmt.Println("Input Minutes: ")
	var i int
	fmt.Scanln(&i)
	fmt.Printf("%d minutes = %d days \n", i, minutesToDays(i))
}
```

```haskell
-- Write a Haskell program to convert minutes to days

main :: IO ()
main = do
   putStrLn "Enter minutes: "
   input1 <- getLine
   let minutes = read input1 :: Float

   let days = minutes / 1440
   putStrLn $ show (days)
```

```java
// Write a Java program to convert minutes to days

import java.util.Scanner;
class ConvertMinutes2Days {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter minutes: ");
    int minutes = input.nextInt();
    input.close();
    int days = minutes/1440;
    System.out.print("No of days: " + days);
  }
}
```

```javascript
// Write a JavaScript program to convert minutes to days

/**
 *
 * @name This program converts minutes to days
 * @param {number} minutes
 * @returns {number} days
 *
 */

function ConvertMinutesToDays(minutes) {
  return minutes / 24 / 60;
}

// Console Tests
console.log(
  "How many days is 7,200 minutes? " + ConvertMinutesToDays(7200) + " days"
);
console.log(
  "How many days is 21,600 minutes? " + ConvertMinutesToDays(21600) + " days"
);
console.log(
  "How many days is 525,600 minutes? " + ConvertMinutesToDays(525600) + " days"
);
```

```julia
# Write a Julia program to convert minutes to days

println("Enter value in minutes: ")
minutes = readline()
minutes = parse(Int, minutes)
days = convert(Int, minutes / 1440)
println(minutes, " minutes equals ", days, " days")
```

```kotlin
// Write a Kotlin program to convert minutes to days

import java.util.Scanner

fun main() {
    val input = Scanner(System.`in`)
    print("Enter minutes: ")
    val minutes = input.nextInt()
    val days = minutes/1440;
    print("No of days:"+days)
}
```

```perl
# Write a Perl program to convert minutes to days

my $minutes = <STDIN>;
$days = $minutes / 1440;
print "days: $days"
```

```php
// Write a PHP program to convert minutes to days

<?php
$x = readline('Enter Minutes: ');

$x1 = $x/1440;
echo "Days: $x1 \n";

?>
```

```python
# Write a Python program to convert minutes to days

def ConvertSectoDay(n):
    seconds = n * 60

    days = seconds // (24 * 3600)

    print(days)


n = int(input())
ConvertSectoDay(n)
```

```r
# Write a R program to convert minutes to days

minutes = 7200
days = minutes / 1440
cat("days: ", days)
```

```ruby
# Write a Ruby program to convert minutes to days

#Function to convert minutes to days
def minutes_to_days(minutes)
    days = minutes / 1440
    return days
end

#Asks for user input
puts "Enter the number of minutes: "
minutes = gets.chomp.to_f

#Calls function to convert the user input
converted_days = minutes_to_days(minutes)
#Prints the input and output
puts "Input: #{minutes}"
puts "Output: #{converted_days}"
```

```rust
// Write a Rust program to convert minutes to days

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

    let days = minutes / 1440;

    println!("{} minutes is equal to {} days.", minutes, days);
}
```

```scala
// Write a Scala program to convert minutes to days

import scala.io.StdIn._;

object minutesToDays {
  def main(args:Array[String]):Unit={
    println("Enter the minutes : ");
    var minutes = readLine();
    var days = minutes.toInt / 1440;
    println(minutes+" minutes are "+days+" days");
  }
}
```

```swift
// Write a Swift program to convert minutes to days

import Swift
import Foundation

var minutes = 7200

var days = minutes / 1440
print("Days: ", days)
```

```typescript
// Write a TypeScript program to convert minutes to days

const minutesToDays = (minutes: number): number => {
  return minutes / 24 / 60;
};

console.log(minutesToDays(7200));
```
