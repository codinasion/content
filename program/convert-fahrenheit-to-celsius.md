---
title: "Convert Fahrenheit To Celsius"
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
    "kenroulier",
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "Medmly20208",
    "vedantpople4",
    "D-Gagan",
    "hi-Kartik2004",
    "jfinley6",
    "yesayajones",
    "AleksiUu",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-02T15:34:30Z
trackId: 5013
description: "Write a program to convert fahrenheit to celsius."
---

## Table of contents

## Write a program to convert fahrenheit to celsius

celsius = (fahrenheit - 32) \* 5/9

```
Input ( F )  : -40
Output ( C ) : -40
```

---

### C

```c
// Write a C program to convert fahrenheit to celsius

#include <stdio.h>

int main()
{

    float celsius, fahrenheit;

    printf("enter fahrenheit \n");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5 / 9;

    printf("celsuis is %f", celsius);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert fahrenheit to celsius

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the fahrenheit : ");
    double fahrenheit = Convert.ToDouble(Console.ReadLine());
    double celcius =  (fahrenheit - 32) * 5/9;
    Console.WriteLine(fahrenheit+" fahrenheit is "+celcius+" celcius");
  }
}
```

### C++

```cpp
// Write a C++ program to convert fahrenheit to celsius

#include <iostream>

int main()
{
    // Write C++ code here
    float fahrenheit, celsius;
    std::cout << "enter fahrenhait value : " << std::endl;
    std::cin >> fahrenheit;

    celsius = (fahrenheit - 32) * 5 / 9;

    std::cout << "fahrenheit " << fahrenheit << std::endl;
    std::cout << "celcius :" << celsius;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert fahrenheit to celsius

import 'dart:io';
void main(){
  print("Enter the Fahrenheit :");
  var fahrenheit =int.parse(stdin.readLineSync());
  var celsius = (fahrenheit - 32) * 5/9;
  print('Equivalent Celsius : $celsius');
}
```

### F#

```fsharp
// Write a F# program to convert fahrenheit to celsius

let fahrenheitToCelsius fahrenheit : float =
   (fahrenheit - 32.0) * 5.0/9.0

let celcius = fahrenheitToCelsius -40.0

printfn "Equivalent celcius : %f" celcius
```

### Go

```go
// Write a Go program to convert fahrenheit to celsius

package main

import "fmt"

func main() {
	var ftemp float64 = 0
	fmt.Scanf("%f", &ftemp)
	ctemp := (ftemp - 32) * 0.556
	fmt.Printf("%.2f", ctemp)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert fahrenheit to celsius

main :: IO ()
main = do
    putStrLn "Enter temperature in Fahrenheit: "
    input <- getLine
    let fahrenheit = read input :: Float

    let celsius = (fahrenheit - 32) * 5/9
    putStrLn $ "Given Fahrenheit in Celsius: " ++ show(celsius) ++ " °C"
```

### Java

```java
// Write a Java program to convert fahrenheit to celsius

import java.util.Scanner;
public class ConvertFahrenheitToCelsius {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input (ºF): ");
        int fahrenheit = sc.nextInt();
        sc.close();
        System.out.print("Output (ºC): ");
        int celcius = (fahrenheit - 32) * 5 / 9;
        System.out.println(celcius);
    }
}

// You can use float, double or any other data type according to convinience.
```

### JavaScript

```javascript
// Write a JavaScript program to convert fahrenheit to celsius

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("Given Fahrenheit in Celsius:", convertFahrenheitToCelsius(50));
```

### Julia

```julia
# Write a Julia program to convert fahrenheit to celsius

println("Enter value in Fahrenheit: ")
fahrenheit = readline()
fahrenheit = parse(Float64, fahrenheit)
celsius = round((fahrenheit - 32) * 5/9; digits = 2)
println("Given Fahrenheit in Celsius: ", celsius, " °C")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert fahrenheit to celsius

fun main() {
    print("Enter fahrenheit : ")
    println()
    var input = readLine()
    println("$input fahrenheit = " + ((input!!.toDouble() -32) * 5/9) + " celsius")
}
```

### Perl

```perl
# Write a Perl program to convert fahrenheit to celsius

print "Enter the Fahrenheit: ";
my $fahrenheit = <STDIN> ;

my $res = fahrenheitToCelsius($fahrenheit);
print "Fahrenheit to Celsius : $res";

sub fahrenheitToCelsius
{
    my ($x) = @_;
    my $res = ($fahrenheit -32) * 5/9;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to convert fahrenheit to celsius

<?php

function fahrenheit2Celsius($fahrenheit) {
    return round(($fahrenheit - 32) * 5/9, 2);
}

echo fahrenheit2Celsius(-40);

?>
```

### Python

```python
# Write a Python program to convert fahrenheit to celsius

# convert fahrenheit to celsius


def convertFahrenheitToCelsius(fahrenheit):
    return (fahrenheit - 32) * (5 / 9)


if __name__ == "__main__":
    fahrenheit = int(input("give fahrenheit :"))

    print(convertFahrenheitToCelsius(fahrenheit))
```

### R

```r
# Write a R program to convert fahrenheit to celsius

fahrenheit = -40
celsius = (fahrenheit - 32) * 5/9
cat("celsius: ", celsius)
```

### Ruby

```ruby
# Write a Ruby program to convert fahrenheit to celsius

def convertFahrenheitToCelcius degrees
    puts ((degrees - 32) * 5) / 9
end

convertFahrenheitToCelcius(-40)
```

### Rust

```rust
// Write a Rust program to convert fahrenheit to celsius

// Rust function to convert fahrenheit to celsius

use std::io;

fn convert_fahrenheit_to_celsius(fahrin: &str) -> String{

    	let fahrin: f32 = fahrin.trim().parse().expect("Must enter a temperature °C");
    	let celsius = ((fahrin - 32.0) * 5.0) / 9.0;

	let celout = format!("{}", celsius);
	return celout;
}

fn main(){
	// the input string and this main function can be removed. This is simply for testing

	println!("Enter the temperature in fharenheit");
  	let mut fahrenheit = String::new();
	let _rtn = io::stdin().read_line(&mut fahrenheit);

	let celsius = convert_fahrenheit_to_celsius(&fahrenheit);

	// print out the results of the conversion.
	let len = fahrenheit.len();
	fahrenheit.truncate(len - 1);
	println!();
	println!("{}°F is {}°C", fahrenheit, celsius);

}
```

### Scala

```scala
// Write a Scala program to convert fahrenheit to celsius

import scala.io.StdIn._;

object fahrenheitToCelsius {
    def main(args:Array[String]):Unit={
        println("Enter the Fahrenheit : ");
        var f = readLine().toInt;
        var celcius = (f-32) * 5/9;
        println("Fahrenheit to Celcius conversion : "+celcius);
    }
}
```

### Swift

```swift
// Write a Swift program to convert fahrenheit to celsius

import Swift
import Foundation

print("Enter fahrenheit: ")
var fahrenheit = Int(readLine()!)!
print("Celsius: ", (fahrenheit - 32) * 5/9)
```

### TypeScript

```typescript
// Write a TypeScript program to convert fahrenheit to celsius

function convertFahrenheitToCelsius(fahrenheit: number): string {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

console.log("Given Fahrenheit in Celsius:", convertFahrenheitToCelsius(50));
```
