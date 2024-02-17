---
title: "Find Perimeter Of A Rectangle"
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
    "anandfresh",
    "harshraj8843",
    "Preetraj2002",
    "esivakumar18",
    "vedantpople4",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "Khushi260",
    "prathameshkarambelkar",
    "Mohitt0",
    "grraghav120",
    "vishalpattnaik",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:38:35Z
trackId: 1735
description: "Write a program to find perimeter of a rectangle."
---

## Write a program to find perimeter of a rectangle

Perimeter of rectangle = 2 × (`Length` + `Width`)

```
Length : 2
Width  : 3

Perimeter : 10
```

---

```c
// Write a C program to find perimeter of a rectangle

#include <stdio.h>

int main(){
    int len,breadth;
    scanf("%d",&len);
    scanf("%d",&breadth);
    printf("%d\n",2*(len+breadth));
    return 0;
}

//Contributed by Raghav Garg
```

```csharp
// Write a C# program to find perimeter of a rectangle

using System;

class Rectangle
{
    public static int Main()
    {
        float length    = 0.0F;
        float width   = 0.0F;
        float perimeter = 0.0F;

        Console.Write("Enter the value of length: ");
        length = float.Parse(Console.ReadLine());

        Console.Write("Enter the value of width: ");
        width = float.Parse(Console.ReadLine());

        perimeter = 2 * (length + width);

        Console.WriteLine("Perimeter of rectangle: "+perimeter);
        return 0;
    }
}
```

```cpp
// Write a C++ program to find perimeter of a rectangle

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int length,width;
    cin>>length>>width;
    cout<<2*(length+width)<<'\n';
}
```

```dart
// Write a Dart program to find perimeter of a rectangle

import 'dart:io';
void main(){
  print("Enter the length :");
  var length = int.parse(stdin.readLineSync());
  print("Enter the width :");
  var width = int.parse(stdin.readLineSync());
  var perimeter =  2 * (length + width);
  print('Perimeter of rectangle  : $perimeter');
}
```

```fsharp
// Write a F# program to find perimeter of a rectangle

let perimeterOfRectangle length width : int =
  2 * (length + width)

let perimeter = perimeterOfRectangle 2 3

printfn "Perimeter of rectangle : %d" perimeter
```

```go
// Write a Go program to find perimeter of a rectangle

package main

import "fmt"

func main() {
	var length int
	var width int
	fmt.Scanf("%d", &length)
	fmt.Scanf("%d", &width)
	perimeter := 2 * (length + width)
	fmt.Println(perimeter)
}
```

```haskell
-- Write a Haskell program to find perimeter of a rectangle

main :: IO ()
main = do
     putStrLn "Enter length: "
     input1 <- getLine
     let length = read input1 :: Float

     putStrLn "Enter width: "
     input2 <- getLine
     let width = read input2 :: Float

     let perimeter = 2 * (length + width)
     putStrLn $ show (perimeter)
```

```java
// Write a Java program to find perimeter of a rectangle

public class FindPerimeterOfARectangle
 {
   public static void main (String args[])
    {

		int length ,width, perimeter;
        length = 2;
        width = 3;
        perimeter  = 2 * (length + width);
        System.out.println("Perimeter of Rectangle is: "+perimeter);
    }
}
```

```javascript
// Write a JavaScript program to find perimeter of a rectangle

function FindPerimeterOfARectangle(length, width) {
  // Perimeter fo rectangle = 2(l*w);

  let permiter = 2 * (length + width);
  return permiter;
}

console.log(
  "Perimeter of rectangle is ",
  FindPerimeterOfARectangle(5, 2) + "cm"
);
```

```julia
# Write a Julia program to find perimeter of a rectangle

print("Enter the length: ")
length = parse(Float64, readline(stdin))
print("Enter the width: ")
width = parse(Float64, readline(stdin))
perimeter = 2 * (length + width)
println("Perimeter of rectangle: ", perimeter)
```

```kotlin
// Write a Kotlin program to find perimeter of a rectangle

import java.util.Scanner

fun main() {

    val number1 = Scanner(System.`in`)
    println("Enter Length: ")
    val length: Double = number1.nextDouble()

    val number2 = Scanner(System.`in`)
    println("Enter Width: ")
    val width: Double = number2.nextDouble()

    val perimeter = 2 * (length + width)
    println("The Perimeter of Rectangle is $perimeter")
}
```

```perl
# Write a Perl program to find perimeter of a rectangle

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the length : ";
my $length = <STDIN>;
print "Enter the width : ";
my $width = <STDIN>;
my $result = 2 * ($length+$width);
print "Perimeter of rectangle : ".$result. "\n";
```

```php
// Write a PHP program to find perimeter of a rectangle

<?php

$lenght = (int)readline('Lenght :');
$breadth = (int)readline('Breadth :');
$perimeter = NULL;

// Calculate perimeter of rectangle
$perimeter = 2 * ($lenght + $breadth);

echo "\nThe Perimeter of rectangle = " . $perimeter . " units"

?>


<!-- Contributed by Mohit Prajapat ..... Github Mohitt0 -->
```

```python
# Write a Python program to find perimeter of a rectangle

print("Perimeter:", 2 * (int(input("Length: ")) + int(input("Width: "))))
```

```r
# Write a R program to find perimeter of a rectangle

# Prompt the user for input
length <- as.numeric(readline("Length: "))
width <- as.numeric(readline("Width: "))

# Calculate perimeter
perimeter <- 2 * (length + width)

# Print the result
cat("Perimeter:", perimeter)
```

```ruby
# Write a Ruby program to find perimeter of a rectangle

print "Enter Length : "
l = gets.chomp.to_i
print "Enter Width : "
w = gets.chomp.to_i
perimeter = 2*(l+w)
print "Perimeter : #{perimeter}"
```

```scala
// Write a Scala program to find perimeter of a rectangle

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val length = scala.io.StdIn.readDouble();
	  val width = scala.io.StdIn.readDouble();
	  val perimeter = 2 * (length + width) ;
	  println("Perimeter of a rectangle: " + perimeter);
	}
}
```

```swift
// Write a Swift program to find perimeter of a rectangle

import Swift
import Foundation

var length = 2
var width = 3

var perimeter =  2 * (length + width)
print("Perimeter: ", perimeter)
```

```typescript
// Write a TypeScript program to find perimeter of a rectangle

function FindPerimeterOfARectangle(length: number, width: number) {
  // Perimeter fo rectangle = 2(l*w);

  const perimeter = 2 * (length + width);
  return perimeter;
}

console.log(
  "Perimeter of rectangle is ",
  FindPerimeterOfARectangle(5, 2) + "cm"
);
```
