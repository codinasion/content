---
title: "Convert Days To Hours"
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
    "rafaover",
    "Preetiraj3697",
    "anandfresh",
    "Osher160",
    "vedantpople4",
    "0ME9A",
    "hi-Kartik2004",
    "hugosmoreira",
    "Medmly20208",
    "joao-vitor-souza",
    "rksp25",
    "greeshma-d",
    "PraaneshSelvaraj",
    "ritikal167",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 4265
description: "Write a program to convert days to hours."
---

## Table of contents

## Write a program to convert days to hours

1 day = 24 hours

```
Input  : 5
Output : 120
```

---

### C

```c
// Write a C program to convert days to hours

#include <stdio.h> /* printf, scanf*/

int ConvertDaysToHours(int days);

int main()
{
    int num = 0;

    int is_good = scanf("%d",&num);

    if(is_good != 1)
    {
        return -1;
    }

    printf("%d\n",ConvertDaysToHours(num));

    return 0;
}

int ConvertDaysToHours(int days)
{
    return days * 24;
}
```

### C#

```csharp
// Write a C# program to convert days to hours

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days :");
    double days = Convert.ToDouble(Console.ReadLine());
    double hours = days * 24;
    Console.WriteLine(days+ " days are "+ hours + " hours");
  }
}
```

### C++

```cpp
// Write a C++ program to convert days to hours

#include <iostream>
using namespace std;

int main()
{
    int days;

    cout<<"enter number of days"<<endl;
    cin>>days;

    cout<<"days :"<<days<<endl;
    cout<<"hours :"<<days*24<<endl;
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to convert days to hours

import 'dart:io';

void main() {
  //Asks user to enter number of days
  stdout.write('Enter the number of days: ');
  //Reads user input and parses it as integer
  int days = int.parse(stdin.readLineSync()!);

  //Converts days to hours
  int hours = days * 24;
  //Prints the result
  print('$days days = $hours hours');
}
```

### F#

```fsharp
// Write a F# program to convert days to hours

let convertDaysToHours (days : int) =
    days * 24

// Here's how to use the function:

let days = 5
let hours = convertDaysToHours days
printfn "%d" hours // Output: 120
```

### Go

```go
// Write a Go program to convert days to hours

package main

import "fmt"

func main() {
	var days int
	fmt.Scanf("%d", &days)
	hours := days * 24
	fmt.Println(hours)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert days to hours

main :: IO ()
main = do
    putStrLn "Enter days: "
    input1 <- getLine
    let days = read input1 :: Float

    let hours = days * 24
    putStrLn $ show (hours)
```

### Java

```java
// Write a Java program to convert days to hours

import java.util.Scanner;

public class ConvertDaysToHours {

	public static void main(String[] args) {

		long days;

		Scanner sc = new Scanner(System.in);

		System.out.print("Enter days: ");
		days = sc.nextInt();
		sc.close();

		long hours = days * 24;

		System.out.println(hours + " hr");

	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert days to hours

function convertDayToHours(days) {
  // 1 days = 24hours
  // 5 days = ? hours
  // 5 days = 5 * 24 = 120 hours

  return days * 24;
}

console.log(`${convertDayToHours(5)} Hours`);
```

### Julia

```julia
# Write a Julia program to convert days to hours

println("Enter value in days: ")
days = readline()
days = parse(Int, days)
hours = days * 24
println(days, " days equals ", hours, " hours")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert days to hours

import java.util.Scanner

fun main() {
    print("Enter number of Days : ")
    println()
    var num_of_days = readLine()

    println("Total hours : " + ConvertDaysToHours(num_of_days!!.toInt()))

}

private fun ConvertDaysToHours(nums: Int): Int {
    val hours = nums * 24;

    return  hours
}
```

### Perl

```perl
# Write a Perl program to convert days to hours

my $days = <STDIN>;
$hours = $days * 24;
print "hours: $hours"
```

### PHP

```php
// Write a PHP program to convert days to hours

<?php

function daysToHours($days) {
 return $days * 24 ;
}

echo daysToHours(5);

?>
```

### Python

```python
# Write a Python program to convert days to hours

def convert_day_to_hour(day):
    return day * 24


if __name__ == "__main__":
    day = int(input("Enter day : "))
    print("Hours : {}".format(convert_day_to_hour(day)))
```

### R

```r
# Write a R program to convert days to hours

days = 5
hours = days * 24
cat("hours: ", hours)
```

### Ruby

```ruby
# Write a Ruby program to convert days to hours

puts 'Insert the number of days to convert to hours: '
days_input = gets.chomp.to_i
result = days_input * 24
puts "Days converted to hours: #{result}"
```

### Rust

```rust
// Write a Rust program to convert days to hours

use std::io;

fn main() {
    println!("Enter the number of days: ");

    let mut days = String::new();
    io::stdin().read_line(&mut days).expect("Failed to read input");

    let days: u32 = match days.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Please enter a valid number of days");
            return;
        }
    };

    let hours = days * 24;
    println!("{} days is equal to {} hours", days, hours);
}
```

### Swift

```swift
// Write a Swift program to convert days to hours

import Swift
import Foundation

print("Enter days: ")
var days = Int(readLine()!)!
print("Hours: ", days * 24)
```

### TypeScript

```typescript
// Write a TypeScript program to convert days to hours

function convertDaysToHours(days: number) {
  // 1 days = 24hours
  // 5 days = ? hours
  // 5 days = 5 * 24 = 120 hours

  const hours = days * 24;
  console.log(hours);
}

convertDaysToHours(5);
```

## Similar programs

- [Convert Days To Hours](/program/convert-days-to-hours)
- [Convert Hours To Weeks](/program/convert-hours-to-weeks)
- [Convert Weeks To Hours](/program/convert-weeks-to-hours)
- [Convert Minutes To Days](/program/convert-minutes-to-days)
- [Convert Days To Minutes](/program/convert-days-to-minutes)
- [Convert Seconds To Days](/program/convert-seconds-to-days)
- [Convert Days To Seconds](/program/convert-days-to-seconds)
- [Convert Weeks To Days](/program/convert-weeks-to-days)
- [Convert Days To Weeks](/program/convert-days-to-weeks)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
