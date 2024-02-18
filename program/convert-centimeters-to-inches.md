---
title: "Convert Centimeters To Inches"
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
    "RiteshK-611",
    "esivakumar18",
    "anandfresh",
    "Osher160",
    "Medmly20208",
    "joao-vitor-souza",
    "grraghav120",
    "viktiwari12",
    "Robert-Capra",
    "ahasunos",
    "PoweredByCaffein",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 3398
description: "Write a program to convert centimeters to inches."
---

## Table of contents

## Write a program to convert centimeters to inches

1 inch = 2.54 centimeters

```
Input  : 12.7
Output : 5
```

---

### C

```c
// Write a C program to convert centimeters to inches

#include <stdio.h> /* printf, scanf */

float ConvertToInches(float cm);

int main()
{
    float cm = 0;

    if(1 != scanf("%f",&cm))
    {
        return -1;
    }

    printf("%f\n",ConvertToInches(cm));

    return 0;
}


float ConvertToInches(float cm)
{
    return cm / 2.54;
}
```

### C#

```csharp
// Write a C# program to convert centimeters to inches

//ISSUE #3400
using System;

class centimetersToInches
{
    public static double convertCmToInch(double centimeters){
        return centimeters/2.54;
    }
    static void Main()
    {
        double centimeters = 12.7;

        Console.WriteLine("Input  : " + centimeters + $" {(centimeters == 1 ? "centimeter" : "centimeters")}");
        double result = convertCmToInch(centimeters);
        Console.WriteLine("Output : "+ result.ToString() + $" {(result == 1 ? "inch" : "inches")}");
    }
}
```

### C++

```cpp
// Write a C++ program to convert centimeters to inches

#include <iostream>

using namespace std;


int main() {
    // Write C++ code here
     float centimeters;

    cout << "enter centimeters"<<endl;
    cin>>centimeters;


    cout<<centimeters/2.54;

    return 0;
}
```

### F#

```fsharp
// Write a F# program to convert centimeters to inches

let centimeterToInches cm : float =
   cm / 2.54

let inches = centimeterToInches 12.7

printfn "Equivalent inches : %f" inches
```

### Go

```go
// Write a Go program to convert centimeters to inches

package main

import "fmt"

func main() {
	var input float32
	fmt.Printf("Input: ")
	fmt.Scanf("%v", &input)

	fmt.Printf("Output: %.2f inch(es)\n", input/2.54)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert centimeters to inches

main :: IO ()
main = do
   putStrLn "Enter centimeters: "
   input1 <- getLine
   let centimeters = read input1 :: Float

   let inches = centimeters / 2.54
   putStrLn $ show (inches)
```

### Java

```java
// Write a Java program to convert centimeters to inches

import java.util.*;
import java.io.*;
import java.text.*;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    double n=sc.nextDouble();
		System.out.println(n/2.54);
	}
}

// Contributed by Raghav Garg (@grraghav120)
```

### JavaScript

```javascript
// Write a JavaScript program to convert centimeters to inches

/*ISSUE #3407*/
function centimetersToInch(centimeters) {
  return centimeters / 2.54;
}

const centimeters = 12.7;
console.log(
  `Input: ${centimeters} ${centimeters > 1 ? "centimeters" : "centimeter"}`
);
const result = centimetersToInch(centimeters);
console.log(`Output: ${result} ${result == 1 ? "inch" : "inches"}`);
```

### Julia

```julia
# Write a Julia program to convert centimeters to inches

println("Enter value in centimeters: ")
cm = readline()
cm = parse(Float64, cm)
inches = round((cm / 2.54); digits = 2)
println(cm, " centimeters equals ", inches, " inches")
```

### Kotlin

```kotlin
// Write a Kotlin program to convert centimeters to inches

package exercisesV2

fun centimetersToInches() {

    val cm = 100
    val inches = cm / 2.54

    println("CM(%s) => Inches(%.3f)"
            .format(cm, inches))
}
```

### Perl

```perl
# Write a Perl program to convert centimeters to inches

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the inches : ";
my $inches = <STDIN>;
my $centimeters = $inches / 2.54;
print $inches." inches are ".$centimeters." centimeters\n";
```

### PHP

```php
// Write a PHP program to convert centimeters to inches

<?php
  $x = readline('Enter Centimeters: ');

  $x1 = $x / 2.54;
  echo "Inches: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert centimeters to inches

n = float(input())
print(n / 2.54)
```

### R

```r
# Write a R program to convert centimeters to inches

centimeters = 12.7
inches = centimeters / 2.54
cat("inches: ", inches)
```

### Ruby

```ruby
# Write a Ruby program to convert centimeters to inches

# frozen_string_literal: true

def convertCentimetersToInches(centimeters)
  inches = centimeters / 2.54
  inches.to_i == inches ? inches.to_i : inches.round(2)
end

if $PROGRAM_NAME == __FILE__
  print 'Input  : '
  centimeters = gets.chomp.to_f
  inches = convertCentimetersToInches(centimeters)
  puts "Output : #{inches}"
end
```

### Scala

```scala
// Write a Scala program to convert centimeters to inches

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val centimeters = scala.io.StdIn.readDouble();
	  println("Inches: " + centimeters / 2.54)
	}
}
```

### Swift

```swift
// Write a Swift program to convert centimeters to inches

import Swift
import Foundation

print("Enter centimeters: ")
var centimeters = Double(readLine()!)!
print("Inches: ", centimeters / 2.54)
```

### TypeScript

```typescript
// Write a TypeScript program to convert centimeters to inches

const cm = 1;

console.log(`cm:${cm} = in:${cmToIn(cm)}`);

function cmToIn(cm: any) {
  return cm / 2.54;
}
```
