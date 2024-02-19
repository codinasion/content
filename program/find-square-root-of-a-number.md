---
title: "Find Square Root Of A Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
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
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "roberanegussie",
    "Sri01729",
    "sancoLgates",
    "erezcal1",
    "hi-Kartik2004",
    "rafaover",
    "shailendrakanherkar18",
    "saiprakash255",
    "huseyinkoclar",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:32:42Z
trackId: 3591
description: "Write a program to find square root of a number."
---

## Table of contents

## Write a program to find square root of a number

Square root of a number is the number that when multiplied by itself gives the original number. For example, square root of 4 is 2 because 2 _ 2 = 4. Similarly, square root of 9 is 3 because 3 _ 3 = 9.

```
Input  : 4
Output : 2
```

---

### C

```c
// Write a C program to find square root of a number

#include <stdio.h>
#include <math.h>

int main()
{

    int input;
    int output;
    printf("Enter the input number \n");
    scanf("%d", &input);
    output = sqrt(input);
    printf("%d", output);
}
```

### C#

```csharp
// Write a C# program to find square root of a number

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    double sqrt = Math.Sqrt(num);
    Console.WriteLine("Square root of "+num+" is : "+sqrt);
  }
}
```

### C++

```cpp
// Write a C++ program to find square root of a number

// This programme calculates the square root of a number
#include <bits/stdc++.h>
#define ll long long // for typing ease
using namespace std;

int main(){
    //taking input
    double num;
    cout<<"Enter the Number : ";
    cin>> num;

    //Showing output.
    cout<< "The square root of "<< num <<" is "<< sqrt(num) <<endl; // pow(num, 0.5) --> also works.
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### Go

```go
// Write a Go program to find square root of a number

package main
import ("fmt")

func main() {
  var i float64

  fmt.Print("Type a number: ")
  fmt.Scan(&i)
  result := math.Sqrt(i)
  fmt.Println("Your square root is:", result)
}
```

### Haskell

```haskell
-- Write a Haskell program to find square root of a number

import Data.Fixed

squareRoot :: Double -> Double
squareRoot x = (squareroot x) / 1
   where squareroot = (** (1/2))

main :: IO ()
main = do
   let num = 25
   print (squareRoot num)
```

### Java

```java
// Write a Java program to find square root of a number

// LNpue Number £5 ---F? 45
import java.util.*;

class FindSquareRootOfANumber {

    public static void main(String[] args) {

        int n;

        System.out.print("Enter a number: ");
        Scanner r = new Scanner(System.in);
        n = r.nextInt();
        r.close();

        double m =  Math.sqrt(n);
        System.out.println("The square root of " + n + " is " + m);

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find square root of a number

function squareRootOfANumber(num) {
  return Math.sqrt(num);
}

const number = 4;
console.log("Input  :", number);
console.log("Output :", squareRootOfANumber(number));
```

### Julia

```julia
# Write a Julia program to find square root of a number

print("Enter a number: ")
number = parse(Float64, readline(stdin))
println("Square root of given number: ", sqrt(number))
```

### Perl

```perl
# Write a Perl program to find square root of a number

print "Enter any number : ";
my $num = <STDIN>;
print "Square root of $num : " .sqrt($num). "\n";
```

### PHP

```php
// Write a PHP program to find square root of a number

<?php

	$input = 4;

	// Using exponent operator of PHP
	echo $input**(1/2). "\r\n";

	//  Using sqrt() function of PHP
	echo sqrt($input). "\r\n";

	// Using pow() function of PHP
	echo pow($input, 0.5);
?>
```

### Python

```python
# Write a Python program to find square root of a number

import math

base = int(input("Enter base: "))

print("\nResult:", math.sqrt(base))
```

### R

```r
# Write a R program to find square root of a number

num = 4
cat("Square root  : ", sqrt(num))
```

### Ruby

```ruby
# Write a Ruby program to find square root of a number

puts "Enter a number:"
input = Integer(gets.chomp)
result = Math.sqrt(input)
puts "Square root of #{input} is: #{result}"
```

### Scala

```scala
// Write a Scala program to find square root of a number

import scala.math._
object Main extends App {
    println(s"Square root of 4 : ${sqrt(4)}");
}
```

### Swift

```swift
// Write a Swift program to find square root of a number

import Swift
import Foundation

print ("The value of sqrt(4.0) : ", sqrt(4.0))

print ("The value of sqrt(25.0) : ",sqrt(25.0))

print ("The value of sqrt(4.4) : ",sqrt(4.4))
```

### TypeScript

```typescript
// Write a TypeScript program to find square root of a number

function FindSquareRootOfANumber(num: number) {
  return Math.sqrt(num);
}

const number = 5;
console.log("Input  :", number);
console.log("Output :", FindSquareRootOfANumber(number));
```

## Similar programs

- [Find Cube Root Of A Number](/program/find-cube-root-of-a-number)
- [Find Square Of A Number](/program/find-square-of-a-number)
- [Find Digital Root Of A Number](/program/find-digital-root-of-a-number)
- [Find Area Of A Square](/program/find-area-of-a-square)
- [Find Perimeter Of A Square](/program/find-perimeter-of-a-square)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Power Of A Number By Recursion](/program/find-power-of-a-number-by-recursion)
