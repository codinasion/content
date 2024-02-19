---
title: "Swap Two Numbers"
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
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "pksX01",
    "hi-Kartik2004",
    "anandfresh",
    "esivakumar18",
    "Yasir761",
    "sancoLgates",
    "jfinley6",
    "vedantpople4",
    "Osher160",
    "joao-vitor-souza",
    "omagr",
    "grraghav120",
    "codingkush",
    "anastazir",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1712
description: "Write a program to swap two numbers."
---

## Table of contents

## Write a program to swap two numbers

```
Input  : 10 20
Output : 20 10
```

---

### C

```c
// Write a C program to swap two numbers

#include <stdio.h>

void SwapTwoNumbers(int *num1,int *num2);

int main()
{
    int num1 = 0;
    int num2 = 0;

    int is_good = scanf("%d %d",&num1,&num2);

    if(is_good != 2)
    {
        return -1;
    }

    SwapTwoNumbers(&num1,&num2);

    printf("%d %d",num1,num2);

    return 0;
}

void SwapTwoNumbers(int *num1,int *num2)
{
    int tmp = *num1;
    *num1 = *num2;
    *num2 = tmp;
}

/* contributed by osher harari*/
```

### C#

```csharp
// Write a C# program to swap two numbers

using System;
public class SwapNumbers
{
       public static void Main(string[] args)
         {
            int number1, number2, temp;
            Console.Write("Enter the First Number : ");
            number1 = int.Parse(Console.ReadLine());
            Console.Write("Enter the Second Number : ");
            number2 = int.Parse(Console.ReadLine());
            temp = number1;
            number1 = number2;
            number2 = temp;
            Console.Write("\nAfter Swapping ");
            Console.Write("\nFirst Number : "+number1);
            Console.Write("\nSecond Number : "+number2);
            Console.Read();
        }
}
```

### C++

```cpp
// Write a C++ program to swap two numbers

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a,b;cin>>a>>b;
    a=a+b;
    b=a-b;
    a=a-b;
    cout<<a<<" "<<b<<'\n';
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to swap two numbers

import 'dart:io';

void main() {
  print("Enter first number: ");
  double? a = double.parse(stdin.readLineSync()!);
  print("Enter second number: ");
  double? b = double.parse(stdin.readLineSync()!);
  print("Numbers before swapping: $a $b");
  var tmp;
  tmp = a;
  a = b;
  b = tmp;
  print("Numbers after swapping: $a $b");
}
```

### F#

```fsharp
// Write a F# program to swap two numbers

let mutable (a, b) = (10, 20)

let swap (left : 'a byref) (right : 'a byref) =
  let temp = left
  left <- right
  right <- temp

swap (&a) (&b)
printfn "a: %i ; b: %i" a b
```

### Go

```go
// Write a Go program to swap two numbers

package main

import "fmt"

func main() {
	var n1, n2 int
	fmt.Scanf("%d", &n1)
	fmt.Scanf("%d", &n2)
	n1 = n1 + n2
	n2 = n1 - n2
	n1 = n1 - n2
	fmt.Println(n1)
	fmt.Println(n2)
}
```

### Java

```java
// Write a Java program to swap two numbers

import java.util.*;
class Swap_With {
    public static void main(String[] args) {
       int x, y, t;// x and y are to swap
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter the value of X and Y");
       x = sc.nextInt();
       y = sc.nextInt();
       System.out.println("before swapping numbers: "+x +"  "+ y);
       /*swapping */
       t = x;
       x = y;
       y = t;
       System.out.println("After swapping: "+x +"   " + y);
       System.out.println( );
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to swap two numbers

// Program to swap two numbers using JavaScript
function swapTowNumbers(number_1, number_2) {
  let temp_number;
  temp_number = number_1;
  number_1 = number_2;
  number_2 = temp_number;
  return [number_1, number_2];
}

// taking input
const number_1 = 10;
const number_2 = 20;

// before the opearation
console.log(`before swaping numbers: a = ${number_1}, b = ${number_2}`);
// after the opearation
console.log(
  `after swaping numbers: a = ${swapTowNumbers(number_1, number_2)[0]}, b = ${
    swapTowNumbers(number_1, number_2)[1]
  }`
);
```

### Julia

```julia
# Write a Julia program to swap two numbers

print("Enter first number : ")
num1 = parse(Int64, readline(stdin))
print("Enter second number : ")
num2 = parse(Int64, readline(stdin))
num1 = num1+num2
num2 = num1-num2
num1 = num1-num2
println("After Swapping numbers")
println("First number : ", num1)
println("Second number : ", num2)
```

### Kotlin

```kotlin
// Write a Kotlin program to swap two numbers

fun main() {
    var firstVar= 10
    var secondVar=20

    secondVar = firstVar.apply{firstVar = secondVar}
    println(firstVar) // prints 20
    println(secondVar) // prints 10
  }
```

### Perl

```perl
# Write a Perl program to swap two numbers

#!/usr/bin/perl

$a=10;
$b=20;

$a=$a+$b;
$b=$a-$b;
$a=$a-$b;

print "\n The value of a and b after swap ";
print "\n The value of a : $a \n";
print "\n The value of b : $b \n";
```

### PHP

```php
// Write a PHP program to swap two numbers

<?php
	$a = 10;
	$b = 20;

	echo "Before a: ".$a.", b: ".$b."\n";

	$a = $a + $b;
	$b = $a - $b;
	$a = $a - $b;

	echo "After  a: ".$a.", b: ".$b;
?>
```

### Python

```python
# Write a Python program to swap two numbers

a = int(input())
b = int(input())
a, b = b, a
print(a)
print(b)
```

### R

```r
# Write a R program to swap two numbers

# Function to swap two numbers
swap_numbers <- function(a, b) {
  temp <- a
  a <- b
  b <- temp
  return(list(a = a, b = b))
}

# Accept input from the user
num1 <- as.numeric(readline("Enter the first number: "))
num2 <- as.numeric(readline("Enter the second number: "))

# Print the original numbers
cat("Original numbers: First number =", num1, ", Second number =", num2, "\n")

# Call the swap_numbers function
result <- swap_numbers(num1, num2)

# Print the swapped numbers
cat("Swapped numbers: First number =", result$a, ", Second number =", result$b, "\n")
```

### Ruby

```ruby
# Write a Ruby program to swap two numbers

def swapTwoNumbers num1, num2
    temp = num2
    num2 = num1
    num1 = temp
    puts [num1, num2].join(" ")
end

puts swapTwoNumbers 10, 20
```

### Scala

```scala
// Write a Scala program to swap two numbers

object Main extends App {
    var a = scala.io.StdIn.readInt()
    var b = scala.io.StdIn.readInt()

    println("Before Swapping a = " +a+ " b =" +b)

    a = a + b
    b = a - b
    a = a - b

    println("After Swapping a = " +a+ " b =" +b)
}
```

### Swift

```swift
// Write a Swift program to swap two numbers

import Swift
import Foundation

var temp = 0
var n1 = 23
var n2 = 45

print("Number 1 before swapping:", n1)
print("Number 2 before swapping:", n2)

temp = n1
n1 = n2
n2 = temp

print("\nNumber 1 after swapping:", n1)
print("Number 2 after swapping:", n2)
```

### TypeScript

```typescript
// Write a TypeScript program to swap two numbers

let n1 = 10;
let n2 = 20;

console.log("First Number :", n1);
console.log("Second Number :", n2);

[n1, n2] = [n2, n1];

console.log("First Number :", n1);
console.log("Second Number :", n2);
```

## Similar programs

- [Swap Two Numbers Without Using Third Variable](/program/swap-two-numbers-without-using-third-variable)
- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Find Maximum Of N Numbers](/program/find-maximum-of-n-numbers)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
