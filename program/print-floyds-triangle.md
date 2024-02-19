---
title: "Print Floyds Triangle"
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
contributors: ["harshraj8843"]
pubDatetime: 2022-01-26
modDatetime: 2023-11-07T16:19:56Z
trackId: 5487
description: "Write a program to print floyds triangle."
---

## Table of contents

## Write a program to print floyd's triangle

Floyd's triangle is a right-angled triangle of natural numbers, used in computer science as an example of a space-filling curve. It is named after Robert Floyd. It is defined by filling the rows of the triangle with consecutive numbers, starting with a 1 in the top left corner.

```
Input  : 5

Output :
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

---

### C

```c
// Write a C program to print floyds triangle

#include <stdio.h>
int main() {
 int n,i,j,k = 1;
 n = 5;

 for(i = 1; i <= n; i++) {
    for(j=1;j <= i; j++)
         printf("%3d", k++);

      printf("\n");
  }

 return 0;
}
```

### C#

```csharp
// Write a C# program to print floyds triangle

using System;

namespace FloydsTriangle
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the number of rows:\t");
            int row = int.Parse(Console.ReadLine());
            int i, j, value = 1;
            for (i = 1; i <= row; i++)
            {
                for (j = 1; j <= i; j++)
                {
                    Console.Write(value + " ");
                    value++;
                }
                Console.WriteLine();
            }
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print floyds triangle

#include <bits/stdc++.h>
using namespace std;

void printFloydTriangle(int n)
{
    int i, j, val = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
            cout << val++ << " ";
        cout << endl;
    }
}

int main()
{
    printFloydTriangle(5);
    return 0;
}
```

### Dart

```dart
// Write a Dart program to print floyds triangle

import "dart:io";

void printFloydsTriangle(int rows) {
  int n = 1;
  for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) {
      stdout.write("$n ");
      n++;
    }
    print("");
  }
}

void main() {
  printFloydsTriangle(5);
}
```

### F#

```fsharp
// Write a F# program to print floyds triangle

let printFloydsTriangle n =
    let mutable count = 1
    for i = 1 to n do
        for j = 1 to i do
            printf "%d " count
            count <- count + 1
        printfn ""

// Example usage with input 5
printFloydsTriangle 5
```

### Go

```go
// Write a Go program to print floyds triangle

package main
import "fmt"

func printFloydsTriangle(num int) {
	start := 1

	for i := 1; i <= num; i++ {
		for j := 1; j <= i; j++ {
			fmt.Print(start, " ")
			start++
		}
		fmt.Println()
	}
}

func main(){
	printFloydsTriangle(3)
}
```

### Haskell

```haskell
-- Write a Haskell program to print floyds triangle

floyd :: Int -> IO ()
floyd n = mapM_ putStrLn [concatMap showWithSpace [k..k+i] | (i,k) <- zip [0..n-1] (scanl (+) 1 [1..n-1])]
  where showWithSpace x = show x ++ " "

main :: IO ()
main = do
  putStrLn "Enter the number of rows:"
  n <- readLn
  floyd n
```

### Java

```java
// Write a Java program to print floyds triangle

import java.util.Scanner;
class FloydTriangleExample
{
    public static void main(String args[])
    {
       int rows, number = 1, counter, j;
       Scanner input = new Scanner(System.in);
       System.out.println("Enter the number of rows for floyd's triangle");
       rows = input.nextInt();
       System.out.println("Floyd's triangle");
       System.out.println("****************");
       for ( counter = 1 ; counter <= rows ; counter++ )
       {
           for ( j = 1 ; j <= counter ; j++ )
           {
                System.out.print(number+" ");
                number++;
           }
           System.out.println();
       }
   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print floyds triangle

let printFloydsTriangle = num => {
  let count = 1;

  for (let i = 1; i <= num; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str = str + count + " ";
      count++;
    }
    console.log(str.trim());
  }
};

printFloydsTriangle(5);
```

### Julia

```julia
# Write a Julia program to print floyds triangle

function createFlyodTriangle(numberOfRows)
 printNo =1;
 for a=0:numberOfRows
    for b=1:a
     print(printNo," ")
     printNo= printNo+1
    end
 println(" ")
 end
end

createFlyodTriangle(5)
```

### Kotlin

```kotlin
// Write a Kotlin program to print floyds triangle

fun main() {
    printFlyod(5);
}

fun printFlyod(rows: Int){
    var number = 1
    for (i in 1..rows) {
        for (j in 1..i) {
            print("$number ")
            ++number
        }
        println()
    }
}
```

### Perl

```perl
# Write a Perl program to print floyds triangle

use strict;
use warnings;

sub displayFloydTriangle {
  my $numRows = shift;
  print "\ndisplaying a $numRows row Floyd's triangle:\n\n";
  my $maxVal = int($numRows * ($numRows + 1) / 2);
  my $digit = 0;
  foreach my $row (1 .. $numRows) {
    my $col = 0;
    my $output = '';
    foreach (1 .. $row) {
      ++$digit;
      ++$col;
      my $colMaxDigit = $maxVal - $numRows + $col;
      $output .= sprintf " %*d", length($colMaxDigit), $digit;
    }
    print "$output\n";
  }
  return;
}

my @counts;
@counts = @ARGV;
@counts = (5) unless @ARGV;

foreach my $count (@counts) {
  displayFloydTriangle($count);
}
```

### PHP

```php
// Write a PHP program to print floyds triangle

<?php

function floydsTriangle($n)
{
    $val = 1;

    for($i = 1; $i <= $n; $i++)
    {
        for($j = 1; $j <= $i; $j++)
        {
            print($val." ");
            $val++;
        }
        print("\n");
    }
}


floydsTriangle(5);

?>
```

### Python

```python
# Write a Python program to print floyds triangle

rows = int(input("Enter no. of rows "))

num = 1
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()
```

### R

```r
# Write a R program to print floyds triangle

print_floyds_triangle <- function(n) {
  num <- 1
  for(i in 1:n) {
    for(j in 1:i) {
      cat(num, " ")
      num <- num + 1
    }
    cat("\n")
  }
}

# Example usage
n <- 5
print_floyds_triangle(n)
```

### Ruby

```ruby
# Write a Ruby program to print floyds triangle

def floydsTriangle(rows)
  max = (rows * (rows + 1)) / 2
  widths = ((max - rows + 1)..max).map {|n| n.to_s.length + 1}
  n = 0
  rows.times do |r|
   puts (0..r).map {|i| n += 1; "%#{widths[i]}d" % n}.join
  end
end

floydsTriangle(5)
```

### Rust

```rust
// Write a Rust program to print floyds triangle

fn print_triangle(n: u32) {
    let mut current = 1;

    for i in 1 ..= n {
        for _ in 0 .. i {
            print!("{} ", current);
            current = current + 1;
        }
        println!("");
    }
}

fn main() {
    let n = 5;

    print_triangle(n);
}
```

### Scala

```scala
// Write a Scala program to print floyds triangle

object FloydsTraingle {
    def main(args: Array[String]): Unit = {
        //Ask the user for the number of rows
        println("Enter the number of rows for Floyd’s Traingle:")
        val numRows = scala.io.StdIn.readInt()
        var num = 1
        for (i <- 1 to numRows) {
            for (j <- 1 to i) {
                print(s"$num ")
                num += 1
            }
            println()
        }
    }
}
```

### Swift

```swift
// Write a Swift program to print floyds triangle

//program to print Floyd's triangle in swift lang.
let row=7  // change row value to see the change in Floyd's triangle length
var num=1  // initialize the number to be 1
for x in 1...row{
  for _ in 1...x{
    //print and iterate num value
    print(num,terminator:" ")
    num+=1
  }
  //move to next line
  print("")
}
```

### TypeScript

```typescript
// Write a TypeScript program to print floyds triangle

"use strict";
const floydsTriangle = (n: number): void => {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + count + " ";
      count++;
    }
    console.log(str.trim());
  }
};

floydsTriangle(5);
```

## Similar programs

- [Print Pascals Triangle](/program/print-pascals-triangle)
- [Find Area Of A Right Angled Triangle](/program/find-area-of-a-right-angled-triangle)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Find Sum Of N Natural Numbers](/program/find-sum-of-n-natural-numbers)
- [Find Sum Of N Natural Numbers By Recursion](/program/find-sum-of-n-natural-numbers-by-recursion)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Print Numbers From N To 1 Without Using A Loop](/program/print-numbers-from-n-to-1-without-using-a-loop)
- [Print Numbers From 1 To N Without Using A Loop](/program/print-numbers-from-1-to-n-without-using-a-loop)
