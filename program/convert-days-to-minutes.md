---
title: "Convert Days To Minutes"
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
    "go",
    "haskell",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "pokharel-nishan",
    "Medmly20208",
    "joao-vitor-souza",
    "jaypavasiya",
    "TechnicalAmanjeet",
    "rahmat-dev",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1403
description: "Write a program to convert days to minutes."
---

## Table of contents

## Write a program to convert days to minutes

1 day = 24 hours = 1440 minutes

```
Input  : 5
Output : 7200
```

---

### C

```c
// Write a C program to convert days to minutes

#include <stdio.h>

int main()
{
    int days, minutes;

    printf("Enter number of days : ");
    scanf("%i", &days);

    minutes = days * 1440;

    printf("Minutes :   %i", minutes);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert days to minutes

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the days : ");
    double days = Convert.ToDouble(Console.ReadLine());
    double mins = days * 1440;
    Console.WriteLine(days+" days are "+mins+" mins");
  }
}
```

### C++

```cpp
// Write a C++ program to convert days to minutes

#include <iostream>

using namespace std;

int main()
{
    int days;

    cout << "enter days" << endl;
    cin >> days;

    cout << "minutes:\t" << days * 1440 << endl;

    return 0;
}
```

### F#

```fsharp
// Write a F# program to convert days to minutes

let daysToMinutes days : int =
  days * 1440

let minutes =  daysToMinutes 5

printfn "Equivalent minutes : %d" minutes
```

### Go

```go
// Write a Go program to convert days to minutes

package main

import (
	"fmt"
)

func main() {
	var num_of_days int

	fmt.Println("Enter number of Days :")

  fmt.Scan(&num_of_days)

  fmt.Println("Total minutes :", num_of_days * 1440)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert days to minutes

main :: IO ()
main = do
    putStrLn "Enter days: "
    input1 <- getLine
    let days = read input1 :: Float

    let minutes = days *1440
    putStrLn $ show (minutes)
```

### Java

```java
// Write a Java program to convert days to minutes

import java.util.Scanner;

public class ConvertDaysToMinutes {
	public static void main(String[] args) throws Exception {
		System.out.print("Enter number of Days   : ");

		Scanner sc = new Scanner(System.in);

		int num_of_days = sc.nextInt();

		sc.close();

    Integer total_minute = num_of_days * 1440;

		System.out.println("Total Minute   : " + total_minute.toString());
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert days to minutes

console.log(
  "JavaScript program to convert Days to minutes \n 1 day = 1440 minute"
);

const daysToMinutes = num => {
  return num * 1440;
};

let days = 5;
console.log("Input  : " + days);
console.log("Output : " + daysToMinutes(days));
```

### Julia

```julia
# Write a Julia program to convert days to minutes

print("Enter the days : ")
hours = parse(Float64, readline(stdin))
minutes = hours * 1440
println("Equivalent minutes : ", minutes)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert days to minutes

import java.util.*
fun main()
{
    print("Enter number of Days : ")
    var num_of_days = readLine()

    val minutes = num_of_days!!.toInt() * 1440

    print("Total minutes : " + minutes.toString())
}
```

### Perl

```perl
# Write a Perl program to convert days to minutes

my $days = <STDIN>;
$minutes = $days * 1440;
print "minutes: $minutes"
```

### PHP

```php
// Write a PHP program to convert days to minutes

<?php
    // 1 Days = 1440 feet

    // take input
    $days = (float)readline("Enter distance in miles: ");

    function convert($days){
        return $days*5280;
    }

    echo convert($days) . " minutes.";

?>
```

### Python

```python
# Write a Python program to convert days to minutes

num_of_days = int(input("Enter number of days : "))

total_minutes = num_of_days * 1440

print(f"Total minutes in {num_of_days} is {total_minutes}")
```

### Ruby

```ruby
# Write a Ruby program to convert days to minutes

print("Enter Number of Days : ")
num_of_days = gets.chomp.to_i

total_minutes = num_of_days * 1440

print("Total minutes in #{num_of_days} days is #{total_minutes}.")
```

### Rust

```rust
// Write a Rust program to convert days to minutes

fn convert_days_to_minutes(days: u64) -> u64 {
	return days * 24 * 60;
}

fn main() {
	println!("{}", convert_days_to_minutes(5));
}
```

### Scala

```scala
// Write a Scala program to convert days to minutes

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val days = scala.io.StdIn.readInt();
	  println("Minutes: " + days * 1440);
	}
}
```

### Swift

```swift
// Write a Swift program to convert days to minutes

import Swift
import Foundation

var days = 5

var minutes = days * 1440
print("Minutes: ", minutes)
```

### TypeScript

```typescript
// Write a TypeScript program to convert days to minutes

function daysToMinutes(days: number) {
  // 👇️        hour  min
  return days * 24 * 60;
}

console.log(daysToMinutes(1)); // 👉️ 1440
```
