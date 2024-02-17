---
title: "Convert Inches To Feet"
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
    "SambitAmanta",
    "Preetiraj3697",
    "ANUSHRAV01",
    "anandfresh",
    "patel-aum",
    "hi-Kartik2004",
    "rksp25",
    "ob-codes",
    "grraghav120",
    "anafvana",
    "Sttormx",
    "hugosmoreira",
    "gtierrezandres",
    "Varun-Dhruv",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5617
description: "Write a program to convert inches to feet."
---

## Write a program to convert inches to feet

1 foot = 12 inches

```
Input  : 60
Output : 5
```

---

```c
// Write a C program to convert inches to feet

#include <stdio.h>

int main()
{
  float num, result;

  printf("Please enter inches: ");
  scanf("%f", &num);

  result = num / 12.0;

  printf("%0.2f inches equals to %0.2f feet", num, result);

  return 0;
}
```

```csharp
// Write a C# program to convert inches to feet

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter inches:");
    double inches = Convert.ToDouble(Console.ReadLine());
    double feet = inches / 12;
    Console.WriteLine(inches+ " inches is "+feet + " Feet");
  }
}
```

```cpp
// Write a C++ program to convert inches to feet

#include<bits/stdc++.h>
using namespace std;
int main()
{
    int inches;
    cin>>inches;
    int foot=(int)inches/12;
    cout<<foot<<'\n';
    return 0;
}
```

```dart
// Write a Dart program to convert inches to feet

import 'dart:io';

void main() {
  print('Enter value in inches:');
  String? input = stdin.readLineSync()!;
  double result = (double.parse(input)) / 12;
  print(result.toStringAsFixed(2));
}
```

```fsharp
// Write a F# program to convert inches to feet

let inchesToFeet (inches: float) =
    inches / 12.0

// Example usage
let feet = inchesToFeet 60.0
printfn "%f" feet // Output: 5.0
```

```go
// Write a Go program to convert inches to feet

package main

import "fmt"

func main() {
	var inches float64
	var feets float64
	fmt.Scanf("%f", &inches)
	feets = inches / 12
	fmt.Println(feets)
}
```

```haskell
-- Write a Haskell program to convert inches to feet

-- Inches to feet with integer result
inchesToFeet:: Int -> Int
inchesToFeet i = div i 12

-- Inches to feet with float result
inchesToFeetFloat :: Int -> Float
inchesToFeetFloat i = fromIntegral i / 12

main :: IO ()
main = do
  -- Convert 12 inches to feet
  let feet = inchesToFeet 12
  -- Convert 12 inches to feet (float result)
  let feetFloat = inchesToFeetFloat 12
  -- Print the results
  putStrLn $ "12 inches is equivalent to " ++ show feet ++ " feet (integer result)."
  putStrLn $ "12 inches is equivalent to " ++ show feetFloat ++ " feet (float result)."
```

```java
// Write a Java program to convert inches to feet

import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the inch value: ");
	    Scanner sc=new Scanner(System.in);
	    int inches=sc.nextInt();
	    int feet = inches/12;
	   System.out.print(inches+" inches is "+feet+ " feet");

	}
}
```

```javascript
// Write a JavaScript program to convert inches to feet

function inchesToFeet(inch) {
  return Math.round(inch / 12);
}

console.log(inchesToFeet(60));
```

```julia
# Write a Julia program to convert inches to feet

println("Enter length in inches:")
inches = parse(Float64, readline())
feet = inches / 12
println("$inches inches is equal to $feet feet.")
```

```kotlin
// Write a Kotlin program to convert inches to feet

fun main() {
    print("Enter inches : ")
    println()
    var input = readLine()

    println("$input inches = " + ConvertInchesToFeet(input!!.toDouble()) + " feet")

}

private fun ConvertInchesToFeet(inches: Double): Double {
    var cm = inches / 12

    return cm
}
```

```perl
# Write a Perl program to convert inches to feet

print "Enter the inch value : ";
my $inch = <STDIN> ;

my $res = inches2Feet($inch);
print "Feet conversion for the given inch : $res feet";

sub inches2Feet
{
    my ($x) = @_;
    my $res = $x / 12;
    return $res ;
}
```

```php
// Write a PHP program to convert inches to feet

<?php

function inchesToFeet($inch){
  return round($inch/12, 2);
}

echo(inchesToFeet(60));

?>
```

```python
# Write a Python program to convert inches to feet

print(round(float(input()) / 12, 2))
```

```r
# Write a R program to convert inches to feet

# function to convert inches to feet
inches_to_feet <- function(inches) {
  feet <- inches / 12
  return(feet)
}

result <- inches_to_feet(24)
print(result)
```

```ruby
# Write a Ruby program to convert inches to feet

print "Please enter the inch value: ";
inches = gets.chomp.to_f;

feet = inches/12;

print "The value in feet : #{feet.to_f.round(2)}"
```

```rust
// Write a Rust program to convert inches to feet

fn main() {
    // Prompt the user for the number of inches
    println!("Enter the number of inches: ");

    // Read the user input and store it in a variable
    let mut inches = String::new();
    std::io::stdin().read_line(&mut inches)
        .expect("Failed to read line");

    // Check if the input is empty
    if inches.trim().is_empty() {
        println!("Please enter a valid number");
        return;
    }

    // Convert the input to a number
    let inches: u32 = inches.trim().parse()
        .expect("Please enter a valid number");

    // Convert inches to feet
    let feet = inches / 12;

    // Print the result
    println!("{} inches is equal to {} feet", inches, feet);
}
```

```scala
// Write a Scala program to convert inches to feet

import scala.io.StdIn._;

object inchesToFeet {
  def main(args:Array[String]):Unit={
    println("Enter the inch value : ");
    var inches = readLine();
    var feet = inches.toInt / 12;
    println(inches+" inches is "+feet+" feet");
  }
}
```

```swift
// Write a Swift program to convert inches to feet

func inchesToFeet(inches: Int) -> Int {
    let feet = inches / 12
    return feet
}

print("Input: ", terminator: "")
let inches = Int(readLine()!)!
let feet = inchesToFeet(inches: inches)
print("Output: \(feet)")
```

```typescript
// Write a TypeScript program to convert inches to feet

const ConvertInchesToFeet = (Inches: number): number => {
  const result: number = parseFloat((Inches / 12).toFixed(2));
  return result;
};
export default ConvertInchesToFeet;
```
