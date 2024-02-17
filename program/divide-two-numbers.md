---
title: "Divide Two Numbers"
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
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "nicoleSosa",
    "esivakumar18",
    "Osher160",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "Zeuhz-Droid",
    "praveenscience",
    "renanlmiranda",
    "Arun8850",
    "anastazir",
    "ashankritwik07",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 105
description: "Write a program to divide two numbers."
---

## Write a program to divide two numbers

```
Input  : 2 4
Output : 0.5
```

---

```c
// Write a C program to divide two numbers

#include <stdio.h> /* printf, scanf */

/* divides number1 with number2 */
float DivideTwoNumbers(int num1, int num2);

int main()
{
    int num1 = 0;
    int num2 = 0;
    printf("please enter two numbers to divide\n");

    if(scanf("%d%d",&num1,&num2) != 2)
    {
        return -1;
    }

    printf("%.2f\n",DivideTwoNumbers(num1,num2));

    return 0;
}

float DivideTwoNumbers(int num1, int num2)
{
    return (((float)num1 / num2));
}
```

```csharp
// Write a C# program to divide two numbers

using System;
namespace Sample {
   class Demo {
      static void Main(string[] args) {
         int num1 = 50;
         int num2 = 25;
         int result;
         result = num1 / num2;
         Console.WriteLine("Division: Value is {0}", result);
      }
   }
}
```

```cpp
// Write a C++ program to divide two numbers

#include <iostream> // cout, cin
using namespace std;

float Divide2Numbers(int x, int y);

int main()
{
    int x = 0;
    int y = 0;

    cout << "please enter two numbers to divide:" << endl;

    cin >> x;
    cin >> y;

    cout << Divide2Numbers(x,y);
}

float Divide2Numbers(int x, int y)
{
    return ((static_cast<float> (x)) / y);
}
```

```dart
// Write a Dart program to divide two numbers

import 'dart:io';
void main(){
  print("Enter the number 1 :");
  var num1 = double.parse(stdin.readLineSync()!);
  print("Enter the number 2 :");
  var num2 = double.parse(stdin.readLineSync()!);
  var divide = num1/num2;
  print('Division of two given numbers : $divide');
}
```

```fsharp
// Write a F# program to divide two numbers

let divideTwoNumbers num1 num2 : float =
  num1 / num2

let result =  divideTwoNumbers 2.0 4.0

printfn "Division of given two numbers : %f" result
```

```go
// Write a Go program to divide two numbers

package main

import (
	"fmt"
	"math"
)

func divide(dividend int, divisor int) int {
	output := dividend / divisor

	return output
}

func main() {
	output := divide(10, 2)
	fmt.Println(output)

	output := divide(2, 4)
	fmt.Println(output)
}
```

```java
// Write a Java program to divide two numbers

package MyClass;
import java.util.Scanner;
public class DivideTwoNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		double a = sc.nextInt();
		double b = sc.nextInt();

		 double divide = a / b;
		System.out.println(divide);

	}

}
```

```javascript
// Write a JavaScript program to divide two numbers

// Program to divide two numbers using JavaScript
function divideTwoNumbers(num1, num2) {
  if (num2 === 0) {
    console.error("Divide by Zero Error!");
    return null;
  }
  return num1 / num2;
}

// Testing on Browser
// const n1 = prompt("Num 1: ");
// const n2 = prompt("Num 2: ");
// alert(divideTwoNumbers(n1, n2));

// Console Tests
const n1 = 15;
const n2 = 5;
console.log("Normal Case");
console.log(`Input: n1 = ${n1} and n2 = ${n2}`);
console.log(`Output: ${divideTwoNumbers(n1, n2)}`);
console.log("Edge Case");
console.log(`Input: n1 = ${n1} and n2 = 0`);
console.log(`Output: ${divideTwoNumbers(n1, 0)}`);
```

```julia
# Write a Julia program to divide two numbers

print("Enter the first number: ")
num1 = parse(Float64, readline(stdin))
print("Enter the second number: ")
num2 = parse(Float64, readline(stdin))
println("Output: ", num1 / num2)
```

```kotlin
// Write a Kotlin program to divide two numbers

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val a = scanner.nextDouble()
  val b = scanner.nextDouble()

  val division = a / b
  println(division)
}
```

```perl
# Write a Perl program to divide two numbers

#!/usr/bin/perl
use warnings;
use strict;
print "Enter a number 1 : ";
my $number1 = <STDIN>;
print "Enter a number 2 : ";
my $number2 = <STDIN>;
print "Division of given two numbers :".$number1/$number2, "\n";
```

```php
// Write a PHP program to divide two numbers

<?php
	// Program to divide two numbers.
	function divide_two_numbers($num1, $num2 = 1) {
		if (!is_numeric($num1) || !is_numeric($num2) || $num2 == 0) {
			return null;
		}
		return $num1 / $num2;
	}
	// Tests
	print_r(divide_two_numbers(2, 4));        // 0.5
	print_r(divide_two_numbers(15, "5"));     // 3
	print_r(divide_two_numbers("600", 0));    // null or empty
	print_r(divide_two_numbers("Hello"));     // null or empty
```

```python
# Write a Python program to divide two numbers

a, b = map(int, input().split())
ans = a / b
print(ans)
```

```r
# Write a R program to divide two numbers

a <- 2
b <- 4

c <- a / b

print(paste("Output is: ", c))
```

```ruby
# Write a Ruby program to divide two numbers

print "Enter first number : "
a = gets.chomp.to_f
print "Enter second number : "
b = gets.chomp.to_f
c=a/b
print "Answer : %.1f" %c
```

```rust
// Write a Rust program to divide two numbers

fn main()
{
    let a = 2;
    let b = 4;
    let c = a / b;

    println!("Division of {0} and {1} is {2}", a, b, a as f32/ b as f32);
}
```

```scala
// Write a Scala program to divide two numbers

import scala.io.StdIn._;

object divideNumbers {
  def main(args:Array[String]):Unit={
    val num1 = readLine().toFloat;
    println("Enter the number 1 : "+num1);
    val num2 = readLine().toFloat;
    println("Enter the number 2 : "+num2);
    val div = num1/num2;
    println("Division of given two numbers :"+div);
  }
}
```

```swift
// Write a Swift program to divide two numbers

import Swift
import Foundation

func divide(num1: Double, num2: Double) -> Double {
  return num1/num2
}

var result = divide(num1:2, num2:8)
print("Result: ", result)
```

```typescript
// Write a TypeScript program to divide two numbers

const firstNumber = 2;
const secondNumber = 4;

function divide(n1: number, n2: number): number {
  return n1 / n2;
}

console.log("First Number: ", firstNumber);
console.log("Second Number: ", secondNumber);

console.log("Output : ", divide(firstNumber, secondNumber));
```
