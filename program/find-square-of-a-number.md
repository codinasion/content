---
title: "Find Square Of A Number"
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
    "Anujsharma002",
    "esivakumar18",
    "Osher160",
    "joao-vitor-souza",
    "AmanjeetCogoport",
    "darkbits018",
    "Ipankaj07",
    "SidharthSarangi",
    "ashankritwik07",
    "MadhuS-1605",
    "KaptainCS3",
    "muhammadjufry",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 42
description: "Write a program to find square of a number."
---

## Table of contents

## Write a program to find square of a number

```
Input  : 5
Output : 25
```

---

### C

```c
// Write a C program to find square of a number

#include <stdio.h>

int FindSquare(int num);

int main()
{
	int num = 0;

	int is_good = scanf("%d", &num);
	if (is_good != 1)
	{
		return -1;
	}

	printf("%d",FindSquare(num));

    return 0;
}

int FindSquare(int num)
{
	return num* num;
}
```

### C#

```csharp
// Write a C# program to find square of a number

namespace HelloWorld
{
    class Hello {
        static void Main(string[] args)
        {
            int num = 5;
            int square_of_num = num * num
            System.Console.WriteLine(square_of_num);
        }
    }
}
```

### C++

```cpp
// Write a C++ program to find square of a number

#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int n  ;
    cout<<"Enter a no. : "<<endl;
    cin>>n ;

    cout<<"Square of "<<n<<" is "<<pow(n,2) ;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find square of a number

import 'dart:math';

void main() {
  // create our number values
  double no = 4.00;
  // print the squre roots
  print("square root of ${no1} is ${pow(no,2)}");
}
```

### F#

```fsharp
// Write a F# program to find square of a number

main = do
 let num = 5
 let square = num * num
 putStrLn "Square of number is:"
 print (square)
```

### Go

```go
// Write a Go program to find square of a number

package main

import (
	"fmt"
)

func main() {
	var num int

	fmt.Println("Enter number:")
	fmt.Scan(&num)
  fmt.Println("Square of the given number is:", num*num)
}
```

### Java

```java
// Write a Java program to find square of a number

package MyClass;
import java.util.Scanner;
public class FindSquareOfANumber {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		long  number = sc.nextLong();
		long square = number * number;

		System.out.println(square);

	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to find square of a number

const squareNum = num => {
  return num ** 2;
};

number = 2;
console.log("Input  : " + number);
console.log("Output : " + squareNum(number));
```

### Julia

```julia
# Write a Julia program to find square of a number

# Write a Julia program to find square of a number

# Input  : 5
# Output : 25


num = 5
square  = num * num

println(square)



# contributed by Technical Amanjeet
```

### Kotlin

```kotlin
// Write a Kotlin program to find square of a number

fun main(args: Array<String>) {
    val base = 5
    val exponent = 2
    val result = Math.pow(base.toDouble(), exponent.toDouble())

    println("Answer = $result")
}
```

### Perl

```perl
# Write a Perl program to find square of a number

# Write a Perl program to find square of a number

# Input  : 5
# Output : 25


print "Enter a number: ";
$n = <STDIN>;
# $n = 121
$square = $n * $n;


print "$square";
```

### PHP

```php
// Write a PHP program to find square of a number

<?php

fscanf(STDIN, "%d", $n);

echo $n * $n . "\n";

?>
```

### Python

```python
# Write a Python program to find square of a number

print(int(input()) ** 2)
```

### R

```r
# Write a R program to find square of a number

num<-scan(what = integer(),n=1);

print(num * num)
```

### Ruby

```ruby
# Write a Ruby program to find square of a number

def find_square_of_a_number(number)
    number**2
  end

  puts find_square_of_a_number(5)
```

### Rust

```rust
// Write a Rust program to find square of a number

fn square(num: i32) -> i32
{

  let square_of_num = num*num;

  return square_of_num
}

fn main()
{
 let square =  square(5);

 println!("{}", square);
}
```

### Scala

```scala
// Write a Scala program to find square of a number

object Main extends App {


  val num = 5
  val square = num * num


  println("square : " + square)


}
```

### Swift

```swift
// Write a Swift program to find square of a number

//
// // Write a Swift program to find square of a number

// Input  : 5
// Output : 25
//
//  Created by Technical Amanjeet
//

import Foundation

let myString = readLine()
let number = Int(myString!)
let square = number! * number!
print(square)
```

### TypeScript

```typescript
// Write a TypeScript program to find square of a number

function FindSquareOfANumber(num: number) {
  return num ** 2;
}

const number = 5;
console.log("Input  :", number);
console.log("Output :", FindSquareOfANumber(number));
```

## Similar programs

- [Find Square Root Of A Number](/program/find-square-root-of-a-number)
- [Find Area Of A Square](/program/find-area-of-a-square)
- [Find Perimeter Of A Square](/program/find-perimeter-of-a-square)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Find Power Of A Number By Recursion](/program/find-power-of-a-number-by-recursion)
- [Check Prime Number](/program/check-prime-number)
- [Find Negative Of A Number](/program/find-negative-of-a-number)
