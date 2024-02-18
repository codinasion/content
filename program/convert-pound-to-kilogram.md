---
title: "Convert Pound To Kilogram"
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
    "hyperion912",
    "SoumyadiptoPal",
    "estelacruz",
    "pksX01",
    "sohamhaldar",
    "akaliacius",
    "Preetiraj3697",
    "pokharel-nishan",
    "patel-aum",
    "impeccable16",
    "queenkatherinecodes",
    "ankitjaiswal0391",
    "Shalevro2",
    "Dimarond",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 6887
description: "Write a program to convert pound to kilogram."
---

## Table of contents

## Write a program to convert pound to kilogram

1 pound = 0.453592 kg

```
Input  : 1
Output : 0.453592
```

---

### C

```c
// Write a C program to convert pound to kilogram

#include<stdio.h>

int main()
{
    const float kg = 0.453592;
    float pounds;

    printf("Enter weight in Pounds : \n");
    scanf("%f", &pounds);

    printf("Weight in Kilogram is %f\n", (pounds * kg));

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert pound to kilogram

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the pounds : ");
    double pounds = Convert.ToDouble(Console.ReadLine());
    double kg = pounds * 0.453592 ;
    Console.WriteLine(pounds+" pounds is "+kg+" kilograms");
  }
}
```

### C++

```cpp
// Write a C++ program to convert pound to kilogram

#include<bits/stdc++.h>
using namespace std;


 int main(){
int n;
    cout<<"enter the value in pound"<<endl;
cin>>n;
cout<<"the value in kilogram ="<<.43592*n<<"kg"<<endl;


     return 0;
 }
```

### Dart

```dart
// Write a Dart program to convert pound to kilogram

import 'dart:io';
void main(){
  print("enter the no. of pounds");
  double kilogram;
  double pounds = double.parse(stdin.readLineSync()!);
  kilogram=pounds*(0.453592);
  print("$kilogram");

}
```

### F#

```fsharp
// Write a F# program to convert pound to kilogram

let poundsToKilograms (pounds: float) =
    let kilograms = pounds * 0.453592
    printfn "%f pounds is equal to %f kilograms" pounds kilograms

let main () =
    printfn "Enter a weight in pounds: "
    let input = System.Console.ReadLine()
    match float.TryParse(input) with
    | true, pounds -> poundsToKilograms pounds
    | _ -> printfn "Invalid input"

main()
```

### Go

```go
// Write a Go program to convert pound to kilogram

//GitHub User: @estelacruz

//Task: Write a GO program to convert pounds to kilogram
// Given: 1 pound = 0.453592 kg

package main

import "fmt"

func main() {
	var pounds float64
	var kilograms float64
	//collect user input
	fmt.Println("Input (lbs): ")
	fmt.Scan(&pounds)
	//convert
	kilograms = pounds * 0.453592
	//print output, round to two decimals
	fmt.Printf("%.2f\n", kilograms)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert pound to kilogram

main = do
    putStrLn "Enter weight in pounds: "
    line <- getLine
    let pounds = (read line :: Double)
    putStrLn (line ++ " pounds equal to " ++ show (poundsTokilos pounds) ++ " kilograms.")

poundsTokilos pounds = pounds * 0.453592
```

### Java

```java
// Write a Java program to convert pound to kilogram

import java.util.Scanner;

public class ConvertPoundToKilogram {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.print("Enter pound     :   ");
        double pound = input.nextFloat();

        double  kilogram = pound * 0.453592;

        System.out.println("Kilogram    :   " + kilogram);

        input.close();

    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert pound to kilogram

function poundToKilogram(pounds) {
  let kilogram = pounds * 0.453592;
  return kilogram;
}

console.log(poundToKilogram(1));
```

### Julia

```julia
# Write a Julia program to convert pound to kilogram

println("Enter the weight in pounds");

pounds=readline()
pounds=parse(Float64, pounds)

kg=pounds*0.453592

println("The weight in kilograms= ", kg)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert pound to kilogram

fun main() {
    poundToKg(2.2)
}

fun poundToKg(wtPound: Double){
    val wtKg = wtPound * 0.453592
    print("$wtPound pounds is equal to $wtKg Kilograms.")
}
```

### Perl

```perl
# Write a Perl program to convert pound to kilogram

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the pounds : ";
my $pounds = <STDIN>;
my $kg = $pounds * 0.453592;
print "Equivalent Kilogram : ".$kg, "\n";
```

### PHP

```php
// Write a PHP program to convert pound to kilogram

<?php

function poundsToKilogram($pounds){
    return $pounds * 0.453592;
}

// Example usage:
$weightInPounds = 10;
$weightInKilograms = poundsToKilogram($weightInPounds);

echo $weightInPounds . ' pounds is equal to ' . $weightInKilograms . ' kilograms.';

?>
```

### Python

```python
# Write a Python program to convert pound to kilogram

# ask user input
pounds = float(input("Enter weight in pounds: "))

# convert input to kg
kilograms = pounds * 0.453592

# print output
print(str(pounds) + " pounds is " + str(kilograms) + " kilograms")
```

### R

```r
# Write a R program to convert pound to kilogram

# Prompt the user to enter a weight in pounds
cat("Enter a weight in pounds: ")
pounds <- as.numeric(readline())

# Convert the weight from pounds to kilograms
kilograms <- pounds / 2.20462

# Display the result
cat(paste(pounds, "pounds is", round(kilograms, 2), "kilograms\n"))
```

### Ruby

```ruby
# Write a Ruby program to convert pound to kilogram

def poundToKilogram(pounds)
  pounds * 0.453592
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the pounds : '
  pounds = gets.chomp.to_i

  puts "#{pounds} pounds is #{poundToKilogram(pounds)} kilogram"
end
```

### Rust

```rust
// Write a Rust program to convert pound to kilogram

use std::io;

fn main() {
    // Prompt the user to enter a weight in pounds
    println!("Enter a weight in pounds:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let pounds: f64 = input.trim().parse().expect("Invalid input");

    // Convert the weight from pounds to kilograms
    let kilograms = pounds / 2.20462;

    // Display the result
    println!("{} pounds is {:.2} kilograms", pounds, kilograms);
}
```

### Scala

```scala
// Write a Scala program to convert pound to kilogram

import scala.io.StdIn._;

object poundsToKilogram{
  def main(args:Array[String]):Unit={
    val pounds = readLine().toInt;
    println("Please enter the pounds : "+pounds);
    val kg = pounds * 0.453592;
    println("Equivalent Kilogram :"+kg);
  }
}
```

### Swift

```swift
// Write a Swift program to convert pound to kilogram

// gets input from the user
let input = readLine()

if let pounds = Double(input ?? ""){
    //converts pounds to kilograms
    let kilograms = pounds * 0.453592
    //displays the result in terminal
    print(kilograms)
}else{
    //handles invalid input
    print("Invalid Input. Please enter a number.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert pound to kilogram

function poundToKilogram(pounds: number): number {
  const kilogram: number = pounds * 0.453592;
  return kilogram;
}
const pounds = prompt("Enter weight in pounds:");
console.log(poundToKilogram(pounds));
```
