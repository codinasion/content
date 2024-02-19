---
title: "Print Numbers From 1 To N Without Using A Loop"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
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
    "SaideepKondur",
    "swapnilmukherjee",
    "shaurya-clemson",
    "sahanasurapureddy",
    "namrata18s",
    "Rohan-Kalgutkar",
    "MaryamMansour",
    "harshraj8843",
    "vedantpople4",
    "esivakumar18",
    "sancoLgates",
    "anandfresh",
    "AviadCohen24",
    "SarthakSanjay",
    "hi-Kartik2004",
    "Medmly20208",
    "jfinley6",
    "loesking",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-02T16:20:24Z
trackId: 5076
description: "Write a program to print numbers from 1 to n without using a loop."
---

## Table of contents

## Write a program to print numbers from 1 to n without using a loop

```
Input  : 5
Output : 1 2 3 4 5
```

---

### C

```c
// Write a C program to print numbers from 1 to n without using a loop

#include <stdio.h>

void printNumbersFromOneToN(int n)
{

    if (n <= 0)
    {
        return;
    }

    printNumbersFromOneToN(n - 1);

    printf("%d ", n);
}

int main()
{
    int input;

    printf("Enter an Integer: \n");
    scanf("%d", &input);

    printNumbersFromOneToN(input);

    return 0;
}

/*
  Contributed by Medmly20208
*/
```

### C#

```csharp
// Write a C# program to print numbers from 1 to n without using a loop

using System;
namespace PrintNumbers{
    class Program{
        static void Main(string[] args){
            int number = int.Parse(Console.ReadLine());
            PrintByRecursion(number, 1);
        }
         private static void PrintByRecursion(int number, int currentNumber){
            if(currentNumber == number)
                Console.WriteLine($"{currentNumber}");
            else{
                Console.Write($"{currentNumber} ");
                PrintByRecursion(number, ++currentNumber);
            }
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print numbers from 1 to n without using a loop

// CPP Program to print 1 to N
// without loops and recursion
#include <iostream>
#define ll long long
using namespace std;

class A {
public:
    static ll a;
    A() { cout << a++ <<" "; }
};

ll A::a = 1;

// Driver Code
int main()
{
    ll N;  cin>>N;
    A obj[N];
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to print numbers from 1 to n without using a loop

import 'dart:io';

void printNumbers(int n) {
  if (n > 0) {
    printNumbers(n - 1);
    print(n);
  }
}

void main() {
  stdout.write('Enter a number: ');
  int n = int.parse(stdin.readLineSync()!);
  printNumbers(n);
}
```

### F#

```fsharp
// Write a F# program to print numbers from 1 to n without using a loop

let rec printNumbers n =
    if n > 0 then
        printNumbers (n - 1)
        printf "%d " n
    else
        ()

// Read input from the user
printf "Enter a number: "
let input = Console.ReadLine()
let n = int input

// Call the function to print numbers
printNumbers n
```

### Go

```go
// Write a Go program to print numbers from 1 to n without using a loop

package main

import "fmt"

func printNumbers(nums int) {
	if (nums <= 0) {
		return
	}
	printNumbers(nums-1)
	fmt.Println(nums)
}

func main() {
	printNumbers(5)
}
```

### Haskell

```haskell
-- Write a Haskell program to print numbers from 1 to n without using a loop

printNumbers :: Int -> IO ()
printNumbers n = go 1
  where
    go :: Int -> IO ()
    go current
      | current > n = return ()
      | otherwise = do
        putStrLn $ show current
        go (current + 1)

main :: IO ()
main = do
  putStrLn "Enter a number:"
  input <- getLine
  let n = read input :: Int
  printNumbers n
```

### JavaScript

```javascript
// Write a JavaScript program to print numbers from 1 to n without using a loop

function printNumbers(n) {
  if (n === 0) {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);
```

### Julia

```julia
# Write a Julia program to print numbers from 1 to n without using a loop

function print_numbers_recursive(current, n)
  if n<1
    println(-1)
    return
  end

  if current > n
      return
  end
  println(current)
  print_numbers_recursive(current + 1, n)
end

# passing parameters to the recursive function
n = 10
print_numbers_recursive(1, n)
```

### Kotlin

```kotlin
// Write a Kotlin program to print numbers from 1 to n without using a loop

fun main() {
  print("Enter number : ")
  println()
  var input = readLine()
  printNumber(input!!.toInt(), input!!.toInt()-1)
}

fun printNumber(originalNum: Int, num: Int): Int {
  println(originalNum-num)
  if (num == 0) {
   return originalNum
  }
  return printNumber(originalNum, num-1)
}
```

### Perl

```perl
# Write a Perl program to print numbers from 1 to n without using a loop

#!/usr/bin/perl
use strict;
use warnings;

# Function to print numbers from 1 to n without loop
sub print_numbers {
    my ($n) = @_;

    # Base case
    if ($n == 0) {
        return;
    }

    # Recursive call
    print_numbers($n - 1);

    # Print the current number
    print "$n ";
}

# Main Program
print "Enter a number: ";
my $num = <STDIN>;
chomp $num;

# Error handling for invalid input
if ($num !~ /^\d+$/ || $num < 1) {
    print "Please enter a positive integer.\n";
} else {
    print_numbers($num);
    print "\n";
}
```

### PHP

```php
// Write a PHP program to print numbers from 1 to n without using a loop

<?php
function print1ToN($n) {
 print implode("\n", range(1, $n));
}

print1ToN(5);

?>
```

### Python

```python
# Write a Python program to print numbers from 1 to n without using a loop

def print_numbers(n: int) -> None:
    if n <= 0:
        return

    print_numbers(n - 1)

    print(n)


user_input = int(input("Enter the value for n: "))
print_numbers(user_input)
```

### R

```r
# Write a R program to print numbers from 1 to n without using a loop

printNumbers <- function(n) {

  numbers <- seq(1, n)


  cat("Output:", numbers, "\n")
}


n <- 5
printNumbers(n)
```

### Ruby

```ruby
# Write a Ruby program to print numbers from 1 to n without using a loop

def printNumber(num)
  if num > 0
    printNumber(num - 1)
    print("#{num} ")
  end
end

puts printNumber(5)
```

### Rust

```rust
// Write a Rust program to print numbers from 1 to n without using a loop

fn print_numbers(n : i32){
    if n>0 {
        print_numbers(n-1);
        println!("{}", n);
    }
}

fn main(){
    let n = 5;
    print_numbers(n);
}
```

### Scala

```scala
// Write a Scala program to print numbers from 1 to n without using a loop

// Write a Scala program to print numbers from 1 to n
// Input  : 5
// Output : 1 2 3 4 5

object PrintNumbers extends App {
  def printNumbers(n: Int): Unit = {
    if (n > 0) {
      printNumbers(n - 1)
      print(s"$n ")
    }
  }
  print("Enter a number (n): ")
  val n = scala.io.StdIn.readInt()
  printNumbers(n)
}
```

### Swift

```swift
// Write a Swift program to print numbers from 1 to n without using a loop

import Swift
import Foundation

func printNumber(original:Int, n: Int) -> Int {
   print(original - n)
   if(n == 0) {
     return 0
   }
   return printNumber(original: original, n: n-1)
}

var num = 15
var result1 = printNumber(original: num, n: num-1)
```

### TypeScript

```typescript
// Write a TypeScript program to print numbers from 1 to n without using a loop

const print1ToN = (n: number): number => {
  n > 1 && print1ToN(n - 1);
  console.log(n);
};

print1ToN(5);
```

## Similar programs

- [Print Numbers From N To 1 Without Using A Loop](/program/print-numbers-from-n-to-1-without-using-a-loop)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Find Sum Of N Natural Numbers Using Formula](/program/find-sum-of-n-natural-numbers-using-formula)
- [Swap Two Numbers Without Using Third Variable](/program/swap-two-numbers-without-using-third-variable)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Convert A String To An Integer (without Using Built In Functions)](</program/convert-a-string-to-an-integer-(without-using-built-in-functions)>)
- [Print Pattern 1](/program/print-pattern-1)
