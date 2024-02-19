---
title: "Convert Fahrenheit To Kelvin"
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
    "anandfresh",
    "champati-v",
    "Subham5401",
    "RoniRan542",
    "RiteshK-611",
    "pandfun",
    "dipankr",
    "laurenszlosek",
    "ammarfitwalla",
    "sankalp-12",
    "sunny2329",
    "gantanikhilraj",
    "Osmiuth",
    "khapaev",
    "KyleMcIndoe",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 7363
description: "Write a program to convert fahrenheit to kelvin."
---

## Table of contents

## Write a program to convert fahrenheit to kelvin

(1°F − 32) × 5/9 + 273.15 = 255.928K

```
Input  : 1
Output : 255.928
```

---

### C

```c
// Write a C program to convert fahrenheit to kelvin

#include <stdio.h>

double ConvertFahrenheitToKelvin(double fahrenheit)
{
    return (fahrenheit + 459.67) * (5.0 / 9.0);
}

int main()
{
    printf("1 (should convert to 255.928): %f\n", ConvertFahrenheitToKelvin(1));
    printf("0 (should convert to 255.372): %f\n", ConvertFahrenheitToKelvin(0));
    printf("1000 (should convert to 810.928): %f\n", ConvertFahrenheitToKelvin(1000));
    printf("-50 (should convert to 227.594): %f\n", ConvertFahrenheitToKelvin(-50));

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert fahrenheit to kelvin

class Program {
    static double convertFK(double f) {
        double celc = (f - 32) * (5/9);
        return celc + 273;
    }

    public static void main(string[] args) {
        Console.WriteLine("Enter temp :");
        double temp = Console.ReadLine();
        Console.WriteLine(convertFK(temp) + " degrees Kelvin");
    }
}
```

### C++

```cpp
// Write a C++ program to convert fahrenheit to kelvin

#include <iostream>

using namespace std;

double ConvertFahrenheitToKelvin(double fahrenheit)
{
    return (fahrenheit + 459.67) * (5.0 / 9.0);
}

int main()
{
    string input;
    cout << "enter a number to convert from ('exit' to exit): ";
    getline(cin, input);
    while (input != "exit")
    {
        double fern = stod(input);
        cout << ConvertFahrenheitToKelvin(fern) << endl;
        getline(cin, input);
    }
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert fahrenheit to kelvin

import 'dart:io';

void main() {
  stdout.write('Enter the temperature in Fahrenheit: ');
  double fahrenheit = double.parse(stdin.readLineSync()!);

  double kelvin = (fahrenheit + 459.67) * (5 / 9);

  print('$fahrenheit degrees Fahrenheit is equal to $kelvin Kelvin.');
}
```

### F#

```fsharp
// Write a F# program to convert fahrenheit to kelvin

let fahrenheitToKelvin fahrenheit : float =
  (fahrenheit-32.0) * 0.56 + 273.15

let kelvin = fahrenheitToKelvin 1.0

printfn "Equivalent value in kelvin : %f" kelvin
```

### Go

```go
// Write a Go program to convert fahrenheit to kelvin

package main

import "fmt"

func main() {
	var fahrenheit float64
	fmt.Print("Enter temperature in Fahrenheit: ")
	fmt.Scanln(&fahrenheit)

	kelvin := (fahrenheit + 459.67) * 5 / 9
	fmt.Printf("%.3f Kelvin\n", kelvin)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert fahrenheit to kelvin

main :: IO ()
main = do
    putStrLn "Enter temperature in Fahrenheit: "
    input <- getLine
    let fahrenheit = read input :: Float

    let kelvin = (fahrenheit - 32) * 5/9 + 273.15
    putStrLn $ "Given Fahrenheit in Kelvin: " ++ show(kelvin) ++ " K"
```

### Java

```java
// Write a Java program to convert fahrenheit to kelvin

import java.util.Scanner;

public class ConvertFahrenheitToKelvin {

    public static double FahrentoKelvin(double n){
        return (n-32)*(5/9)+273.15;
    }

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        Double value = scan.nextDouble();
        FahrentoKelvin(value);
        System.out.println(value);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert fahrenheit to kelvin

const fahrenheit = prompt();
const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
console.log(`${kelvin.toFixed(3)}K`);
```

### Julia

```julia
# Write a Julia program to convert fahrenheit to kelvin

println("Enter temperature in Fahrenheit:")
fahrenheit = parse(Float64, readline())

if isnan(fahrenheit)
    println("Invalid input. Please enter a valid number.")
else
    kelvin = (fahrenheit - 32) * 5/9 + 273.15
    println("Temperature in Kelvin: $kelvin")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to convert fahrenheit to kelvin

fun main() {

    print("Enter temperature in Fahrenheit: ")
    val fahrenheit = readLine()?.toDoubleOrNull()

    if (fahrenheit == null) {
        println("Invalid input. Please enter a valid number.")
        return
    }

    val kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

    println("Temperature in Kelvin: $kelvin")
}
```

### Perl

```perl
# Write a Perl program to convert fahrenheit to kelvin

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the fahrenheit : ";
my $fahrenheit = <STDIN>;
my $kelvin = ($fahrenheit - 32.0) * 0.56 + 273.15;
print $fahrenheit." fahrenheit is ".$kelvin." kelvin", "\n";
```

### PHP

```php
// Write a PHP program to convert fahrenheit to kelvin

<?php

declare(strict_types=1);

function fahrenheitToKelvin(int|float $fahrenheit): float {
    return round(($fahrenheit - 32) * 5/9 + 273.15, 3);
}

echo "Enter temperature in Fahrenheit: ";
$fahrenheit = (float) fgets(STDIN);
$kelvin = fahrenheitToKelvin($fahrenheit);

echo "The Kelvin equivalent of {$fahrenheit}°F is $kelvin K.\n";
```

### Python

```python
# Write a Python program to convert fahrenheit to kelvin

def fahrenheit_to_kelvin(temp_f):
    try:
        temp_k = (temp_f - 32) * 5 / 9 + 273.15
        return temp_k
    except TypeError as e:
        print(f"Error: The input temperature must be a numerical value. {e}")
    except Exception as e:
        print(f"An unexpected error occurred. {e}")


if __name__ == "__main__":
    fahrenheit = int(input("Fahrenheit input: "))
    print("Kelvin:", fahrenheit_to_kelvin(fahrenheit))
```

### R

```r
# Write a R program to convert fahrenheit to kelvin

fahrenheit_to_kelvin <- function(fahrenheit) {
  kelvin <- (fahrenheit - 32) * (5/9) + 273.15
  return(kelvin)
}

cat("Enter temperature in Fahrenheit: ")
fahrenheit <- as.numeric(readline())

if (is.na(fahrenheit)) {
  cat("Invalid input. Please enter a valid number.")
} else {
  kelvin <- fahrenheit_to_kelvin(fahrenheit)
  cat("Temperature in Kelvin:", kelvin)
}
```

### Ruby

```ruby
# Write a Ruby program to convert fahrenheit to kelvin

puts "Let's convert Fahrenheit to Kelvin"
puts 'Insert the Fahrenheit temperature'
fahrenheit_input = gets.chomp.to_f          #Takes input from the user and converts it into float value.
kelvin = (fahrenheit_input + 459.67) * 5/9
puts "Temperature converted: #{kelvin}"
```

### Rust

```rust
// Write a Rust program to convert fahrenheit to kelvin

use std::io;

fn main() {
    println!("Enter temperature in Fahrenheit: ");

    let mut fahrenheit = String::new();
    io::stdin().read_line(&mut fahrenheit)
        .expect("Failed to read input");

    let fahrenheit: f64 = match fahrenheit.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a valid number.");
            return;
        }
    };

    let kelvin = (fahrenheit - 32.0) * (5.0/9.0) + 273.15;

    println!("Temperature in Kelvin: {:.2}", kelvin);
}
```

### Scala

```scala
// Write a Scala program to convert fahrenheit to kelvin

import scala.io.StdIn._;

object fahrenheitToKelvin {
  def main(args:Array[String]):Unit={
    val fahrenheit = readLine().toInt;
    println("Enter the fahrenheit : "+fahrenheit);
    val kelvin = (fahrenheit - 32) * 5/9 + 273.15 ;
    println("Equivalent kelvin :"+kelvin);
  }
}
```

### Swift

```swift
// Write a Swift program to convert fahrenheit to kelvin

func fahrenheitToKelvin(fahrenheit: Double) -> Double {
    let kelvin = (fahrenheit + 459.67) * 5/9
    return kelvin
}

print("Enter temperature in Fahrenheit: ")
if let input = readLine(), let fahrenheit = Double(input) {
    let kelvin = fahrenheitToKelvin(fahrenheit: fahrenheit)
    print("Temperature in Kelvin: \(kelvin)")
} else {
    print("Invalid input. Please enter a valid temperature in Fahrenheit.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert fahrenheit to kelvin

function convertFahrenheitToKelvin(fahrenheit: number): string {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

console.log("Given Fahrenheit in Kelvin:", convertFahrenheitToKelvin(1));
```

## Similar programs

- [Convert Fahrenheit To Celsius](/program/convert-fahrenheit-to-celsius)
- [Convert Celsius To Fahrenheit](/program/convert-celsius-to-fahrenheit)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Find Sum Of Numbers By Recursion](/program/find-sum-of-numbers-by-recursion)
- [Find Sum Of N Natural Numbers](/program/find-sum-of-n-natural-numbers)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert Hours To Days](/program/convert-hours-to-days)
