---
title: "Convert Hours To Days"
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
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "RiteshK-611",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "PravunathSingh",
    "vsmay98",
    "Frey0-0",
    "kshitijv256",
    "PoweredByCaffein",
    "victoriacheng15",
    "jason0kenyon",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2638
description: "Write a program to convert hours to days."
---

## Table of contents

## Write a program to convert hours to days

1 day = 24 hours

```
Input  : 120
Output : 5
```

---

### C

```c
// Write a C program to convert hours to days

#include<stdio.h>

double ConvertHoursToDays(int hours){
    double days = hours / 24.0;
    return days;
}

int main()
{
    int hours = 120;
    double days = ConvertHoursToDays(hours);
    printf("%f",days);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert hours to days

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hours : ");
    double hours = Convert.ToDouble(Console.ReadLine());
    double days = hours / 24;
    Console.WriteLine(hours+" hours is "+days+" days");
  }
}
```

### C++

```cpp
// Write a C++ program to convert hours to days

#include <bits/stdc++.h>
using namespace std;

void convertSectoDay(int n)
{
  int day = n / (24 * 3600);

  n = n % (24 * 3600);
  int hour = n / 3600;

  n %= 3600;
  int minutes = n / 60;

  n %= 60;
  int seconds = n;

  cout << day << " "
       << "days " << hour
       << " "
       << "hours " << minutes << " "
       << "minutes " << seconds << " "
       << "seconds " << endl;
}

int main()
{
  // Given n is in hours
  int n;
  cout << "Enter the number of hours: ";
  cin >> n;
  int seconds = n * 3600;
  convertSectoDay(seconds);
  return 0;
}
```

### Dart

```dart
// Write a Dart program to convert hours to days

import 'dart:io';
void main(){
  print("Enter the hours :");
  int hours = int.parse(stdin.readLineSync()!);
  int days = hours ~/ 24;
  print('Equivalent days : $days');
}
```

### F#

```fsharp
// Write a F# program to convert hours to days

let hoursToDays hours : int =
   hours / 24

let days = hoursToDays 120

printfn "Equivalent days : %d" days
```

### Go

```go
// Write a Go program to convert hours to days

package main

import "fmt"

func main() {
	var hours int

	fmt.Printf("Enter hours: ")
	fmt.Scanf("%d", &hours)

	fmt.Println("Input:", hours, "hours")
	fmt.Printf("Output: %0.2f day(s)\n", float64(hours)/24.0)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert hours to days

main :: IO ()
main = do
    putStrLn "Enter a number of hours, and I will convert it to days"
    input <- getLine
    let hours = read input :: Float
    let days = hours/24.0
    putStrLn $ show (hours) ++ " hours is equal to " ++ show (days) ++ " days."
```

### Java

```java
// Write a Java program to convert hours to days

class ConvertedHoursToDays
{
    public static void main(String[] args)
    {
        int hours = 115;
        float days = hours / 24f;
        System.out.println(days);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert hours to days

function convertHoursToDays(hours) {
  return hours / 24;
}

const hours = 120;
console.log(`Input: ${hours} ${hours > 1 ? "hours" : "hour"}`);
const result = convertHoursToDays(hours);
console.log(`Output: ${result} ${result > 1 ? "days" : "day"}`);
```

### Julia

```julia
# Write a Julia program to convert hours to days

println("Enter value in hours: ")
hours = readline()
hours = parse(Int, hours)
days = round(hours / 24)
days = convert(Int, days)
println(hours, " hours equals ", days, " days")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert hours to days

fun main() {
    print("Enter hours : ")
    println()
    var input = readLine()

    try {
        println("$input hours = " + ConvertHoursToDays(input!!.toDouble()) + " days")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertHoursToDays(hr: Double): Double {
    val hoursToDays = hr / 24

    return  hoursToDays
}
```

### Perl

```perl
# Write a Perl program to convert hours to days

my $hours = <STDIN>;
$days = $hours / 24;
print "days: $days"
```

### PHP

```php
// Write a PHP program to convert hours to days

<?php
	$x = readline('Enter Hours: ');

  $x1 = $x / 24;
  echo "Days: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert hours to days

def hours2days(hours):
    days = hours / 24
    return days


print(hours2days(120))
```

### R

```r
# Write a R program to convert hours to days

hours = 120
days = hours / 24
cat("days: ", days)
```

### Ruby

```ruby
# Write a Ruby program to convert hours to days

def ConvertHoursToDays(hours)
  (hours/24.0).round(1)
end

hours = 48
puts "#{hours} hours is #{ConvertHoursToDays(hours)} days"
```

### Scala

```scala
// Write a Scala program to convert hours to days

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val hours = scala.io.StdIn.readInt();
	  println("Days: " + hours / 24);
	}
}
```

### Swift

```swift
// Write a Swift program to convert hours to days

import Swift
import Foundation

var hours = 120

var days = hours / 24
print("Days: ", days)
```

### TypeScript

```typescript
// Write a TypeScript program to convert hours to days

function convertHoursToDays(hours: number): number {
  const days = hours / 24;
  return days;
}

// Test Cases
console.log(convertHoursToDays(120));
console.log(convertHoursToDays(792));
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
