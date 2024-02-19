---
title: "Swap Two Numbers Without Using Third Variable"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
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
    "lookwhoshere99",
    "ApurvaR1",
    "anandfresh",
    "harshraj8843",
    "abhisek-1221",
    "jfinley6",
    "vedantpople4",
    "Idanos99",
    "kishoredubey",
    "joao-vitor-souza",
    "Dheeraj0014",
    "mounaj5",
    "dht7",
    "sanmay321",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-15T04:21:47Z
trackId: 4060
description: "Write a program to swap two numbers without using third variable."
---

## Table of contents

## Write a program to swap two numbers without using third variable

```
Input  : 10 20
Output : 20 10
```

---

### C

```c
// Write a C program to swap two numbers without using third variable

#include <stdio.h>

int var1, var2;

int main(void){

    printf("Enter two numbers: ");
    scanf("%i %i", &var1, &var2);

    printf("Before\nNumber1: %d , Number2: %d\n",var1,var2);

    var1+=var2;
    var2=var1-var2;
    var1-=var2;

    printf("\nAfter\nNumber1: %d , Number2: %d\n",var1,var2);

    return 0;
}
```

### C#

```csharp
// Write a C# program to swap two numbers without using third variable

using System;

class GFG {
    public static void Main()
    {
        int x = 10;
        int y = 20;

        x = x + y;
        y = x - y;
        x = x - y;
        Console.WriteLine("After swapping: x = " + x + ", y = " + y);
    }
}
```

### C++

```cpp
// Write a C++ program to swap two numbers without using third variable

#include<iostream>
using namespace std;
int main()
{
    int a , b;
    cin >> a >> b;
    a = a + b;
    b = a - b;
    a = a - b;
    cout << a <<" "<<  b;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to swap two numbers without using third variable

import 'dart:io';

void main() {
  // Input two numbers
  stdout.write('Enter the first number: ');
  int num1 = int.parse(stdin.readLineSync()!);
  stdout.write('Enter the second number: ');
  int num2 = int.parse(stdin.readLineSync()!);

  // Swap the two numbers
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  // Output the swapped numbers
  print('After swapping:');
  print('First number = $num1');
  print('Second number = $num2');
}
```

### Go

```go
// Write a Go program to swap two numbers without using third variable

package main

import "fmt"

func main() {
	var a int
	fmt.Scanf("%d", &a)
	var b int
	fmt.Scanf("%d", &b)
	a = a + b
	b = a - b
	a = a - b
	fmt.Println(a, b)
}
```

### Haskell

```haskell
-- Write a Haskell program to swap two numbers without using third variable

main :: IO ()
main = do
    putStrLn "Enter two numbers separated by space:"
    input <- getLine
    let [num1, num2] = map read $ words input
    putStrLn $ "Before swapping: num1 = " ++ show num1 ++ ", num2 = " ++ show num2
    let (num1', num2') = swapNumbers num1 num2
    putStrLn $ "After swapping: num1 = " ++ show num1' ++ ", num2 = " ++ show num2'

swapNumbers :: Int -> Int -> (Int, Int)
swapNumbers num1 num2 = (num2, num1)
```

### Java

```java
// Write a Java program to swap two numbers without using third variable

import java.util.Scanner;

public class swap {

    public static void main(String[] args) {
        int num1,num2;
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the two numbers");
        num1=s.nextInt();
        num2=s.nextInt();
        System.out.println("Before swap: Number1 = " + num1 + " Number2 = " + num2);
        num1=num1+num2;
        num2=num1-num2;
        num1=num1-num2;
        System.out.println("After swap: Number1 = " + num1 + " Number2 = " + num2);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to swap two numbers without using third variable

let a = 10;
let b = 20;

//swap operations
a = a + b; //a = 15
b = a - b; //b = 5
a = a - b; //a = 10

//swap complete

console.log(a); //a is now 20
console.log(b); //b is now 10
```

### Kotlin

```kotlin
// Write a Kotlin program to swap two numbers without using third variable

fun main() {

    // declare and initialise given two numbers
    var first = 10
    var second = 20

    first = first - second
    second = first + second
    first = second - first

    // the result
    print("first = $first and second = $second")
}
```

### Perl

```perl
# Write a Perl program to swap two numbers without using third variable

#!/usr/bin/perl
$a=10;
$b=20;

$a=$a+$b;
$b=$a-$b;
$a=$a-$b;

print "\n The value of a and b after swap ";
print "\n The value of a : $a";
print "\n The value of b : $b";
```

### PHP

```php
// Write a PHP program to swap two numbers without using third variable

<?php

function swapValue($a, $b){
 $a=$a+$b;
 $b=$a-$b;
 $a=$a-$b;
 echo("a :".$a." ; b : ".$b);
}
swapValue(10, 20);

?>
```

### Python

```python
# Write a Python program to swap two numbers without using third variable

n1, n2 = int(input()), int(input())
n2, n1 = n1, n2
print(n1, n2)
```

### R

```r
# Write a R program to swap two numbers without using third variable

swapNumbers <- function(a, b) {
  cat("Before swapping: a =", a, ", b =", b, "\n")

  # Swapping without a third variable
  a <- a + b
  b <- a - b
  a <- a - b

  cat("After swapping: a =", a, ", b =", b)
}

# Test the function with the input 10 and 20
swapNumbers(10, 20)
```

### Ruby

```ruby
# Write a Ruby program to swap two numbers without using third variable

def swapTwoNumbersWithoutUsingThirdVariable num1, num2
    num1 = num1 + num2
    num2 = num1 - num2
    num1 = num1 - num2
    [num1, num2].join(" ")
end

puts swapTwoNumbersWithoutUsingThirdVariable 10, 20
```

### Scala

```scala
// Write a Scala program to swap two numbers without using third variable

object Main extends App {

    // Declaring as var (i.e. mutable variable)
    var a = 10
    var b = 20

    // Values before swap
    println("a: " + a)
    println("b: " + b)

    // Swap
    a = a + b
    b = a - b
    a = a - b

    // Values after swap
    println("a: " + a)
    println("b: " + b)

}
```

### TypeScript

```typescript
// Write a TypeScript program to swap two numbers without using third variable

let a: number = 10;
let b: number = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
```

## Similar programs

- [Swap Two Numbers](/program/swap-two-numbers)
- [Print Numbers From N To 1 Without Using A Loop](/program/print-numbers-from-n-to-1-without-using-a-loop)
- [Print Numbers From 1 To N Without Using A Loop](/program/print-numbers-from-1-to-n-without-using-a-loop)
- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
- [Find Sum Of N Natural Numbers Using Formula](/program/find-sum-of-n-natural-numbers-using-formula)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Find Maximum Of N Numbers](/program/find-maximum-of-n-numbers)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
