---
title: "Find Sum Of Gp Series"
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
    "Shreyash3110",
    "shaurya-clemson",
    "vamsipasam2000",
    "Rohan-Kalgutkar",
    "bhushanmarathe",
    "Monika-Tiyyagura",
    "harshraj8843",
    "AshitaSingamsetty",
    "anandfresh",
    "AdityaNarayanPradhan",
    "pritish1906",
    "pelegsch666",
    "shashankgurunaga1",
    "leslieyip02",
    "Medmly20208",
    "hi-Kartik2004",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T16:40:28Z
trackId: 4971
description: "Write a program to find sum of gp series."
---

## Table of contents

## Write a program to find sum of gp series

A geometric progression (GP) is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio. The nth term of a GP is given by the formula a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup> where a<sub>1</sub> is the first term and r is the common ratio.

```
Input  : 2, 3, 3
Output : 54
```

---

### C

```c
// Write a C program to find sum of gp series

#include <stdio.h>
#include <math.h>

int main()
{
    int a, r, n;
    printf("Enter first number of the GP series : ");
    scanf("%d", &a);
    printf("Enter the common ratio of the GP series : ");
    scanf("%d", &r);
    printf("Enter the length of the series : ");
    scanf("%d", &n);

    float power = pow(r, n);
    float ans = (a * (power - 1) / (n - 1));

    printf("The sum of the given GP series is: %f \n", ans);
}
```

### C#

```csharp
// Write a C# program to find sum of gp series

using System;
class GP {
    static float sumOfGP(float a, float r, int n)
    {
        float sum = 0;
        for (int i = 0; i < n; i++)
        {
            sum = sum + a;
            a = a * r;
        }
        return sum;
    }

    static public void Main ()
    {
        Console.WriteLine((sumOfGP(2, 3, 3)));
    }
}
```

### C++

```cpp
// Write a C++ program to find sum of gp series

//Programme to calculate the sum of Gp series.
// Formula --> (a(r^n - 1))/ (n -1)
#include <bits/stdc++.h>
#define ll long long
using namespace std;
ll solve(){

    return 0;
}
int main(){
    float a,r,n;
    // here a--> first number of the Gp series.
    // r--> common ratio.
    // n --> the limit of the series.

    //Taking input;
    cout<<"Enter first number of the GP series : ";
    cin>>a;
    cout<<"Enter the common ratio of the GP series : ";
    cin>>r;
    cout<<"Enter the length of the series : ";
    cin>>n;

    // Calculations;
    float power = pow(r,n);
    float ans = (a*(power - 1)/(n-1));

    //Return ans;
    cout<<"The sum of the given GP series is: " <<ans<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to find sum of gp series

import 'dart:math';

void main() {

  int a1 = 2; // First term of the GP
  int r = 3; // Common ratio
  int n = 3; // Number of terms

  // Calculating the sum of the GP series
  double sum = calculateGPSum(a1, r, n);

  // Printing the output
  print("Sum of GP series: $sum");
}

double calculateGPSum(int a1, int r, int n) {
  // Using the formula for the sum of GP series
  return a1 * (pow(r, n) - 1) / (r - 1);
}
```

### F#

```fsharp
// Write a F# program to find sum of gp series

open System

let sumOfGP (a: float) (r: float) (n: int) : float =
    if r = 1.0 then float n * a
    else a * (pown r n - 1.0) / (r - 1.0)

// Function to safely parse float values
let tryParseFloat (str: string) : Option<float> =
    match Double.TryParse(str) with
    | (true, value) -> Some value
    | _ -> None

// Function to safely parse int values
let tryParseInt (str: string) : Option<int> =
    match Int32.TryParse(str) with
    | (true, value) -> Some value
    | _ -> None

// Read inputs from user
printfn "Enter the first term (a):"
let a =
    match Console.ReadLine() |> tryParseFloat with
    | Some value -> value
    | None -> failwith "Invalid input for the first term"

printfn "Enter the common ratio (r):"
let r =
    match Console.ReadLine() |> tryParseFloat with
    | Some value -> value
    | None -> failwith "Invalid input for the common ratio"

printfn "Enter the number of terms (n):"
let n =
    match Console.ReadLine() |> tryParseInt with
    | Some value -> value
    | None -> failwith "Invalid input for the number of terms"

// Calculate and print the sum
printfn "Sum of GP series: %f" (sumOfGP a r n)
```

### Go

```go
// Write a Go program to find sum of gp series

package main
import (
	"fmt"
)
func pow (base,exponent int) int{
	result := 1
	for i:= 0; i < exponent ; i++ {
		result *= base
	}
	return result
}
func main(){
	var a,r,n int
	fmt.Printf("Enter the first term (a) : ")
	fmt.Scanln(&a)
	fmt.Printf("Enter the common ratio (r) : ")
	fmt.Scanln(&r)
	fmt.Printf("Enter the number of terms (n) : ")
	fmt.Scanln(&n)
	sum:= a* (1-pow(r,n))/(1-r)
	fmt.Printf("Output : %d", sum)
}
```

### Haskell

```haskell
-- Write a Haskell program to find sum of gp series

-- Function to calculate the sum of a GP series
gpSum :: Double -> Double -> Int -> Double
gpSum a1 r n = a1 * (1 - r^n') / (1 - r)
    where n' = fromIntegral n

-- Main function
main :: IO ()
main = do
    putStrLn "Enter the first term, common ratio, and number of terms (separated by commas):"
    input <- getLine
    let [a1, r, n] = map read (wordsWhen (==',') input)

    -- Calculate the sum and print the result
    let result = gpSum a1 r (round n)
    putStrLn $ "Sum of the GP series: " ++ show result

-- Helper function to split a string into a list of words using a delimiter
wordsWhen :: (Char -> Bool) -> String -> [String]
wordsWhen p s = case dropWhile p s of
    "" -> []
    s' -> w : wordsWhen p s''
        where (w, s'') = break p s'
```

### Java

```java
// Write a Java program to find sum of gp series

/* Author: Shashank Gurunaga */
import java.lang.Math;
import java.util.*;

public class findgpseriessum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        float a0, r, i, an;
        int n;
        float sum = 0;

        System.out.println("Enter the first number in the G.P. series: ");
        a0 = scanner.nextFloat();
        System.out.println("Enter the number of digits  in the G.P. series ");
        n = scanner.nextInt();
        System.out.print("Enter the  ratio of G.P. series ");
        r = scanner.nextFloat();

        sum = (float) ((a0 * (1 - Math.pow(r, n + 1))) / (1 - r));
        an = (float) (a0 * (1 - Math.pow(r, n - 1)));

        System.out.println("nth term of G.P:" + an);
        System.out.println("Sum of the G.P:" + sum);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of gp series

function sumOfGpSeries(firstTerm, commonRatio, numOfTerms) {
  if (Number.isFinite(numOfTerms)) {
    if (commonRatio === 1) return firstTerm * numOfTerms;
    else {
      return (
        (firstTerm * (Math.pow(commonRatio, numOfTerms) - 1)) /
        (commonRatio - 1)
      );
    }
  } else {
    if (Math.abs(commonRatio) < 1) return firstTerm / (1 - commonRatio);
    else {
      throw "The Geometric progression is diverging and hence its sum cannot be calculated";
    }
  }
}

// console.log(sumOfGpSeries(1, 1, 5))
// console.log(sumOfGpSeries(1, 2, 5))
// console.log(sumOfGpSeries(0.5, 20, Infinity))
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of gp series

fun main() {
    val a1 = 2 // First term of the GP
    val r = 3  // Common ratio of the GP
    val n = 3  // Number of terms in the series

    val sum = findSumOfGP(a1, r, n)
    println("Sum of the GP series: $sum")
}

fun findSumOfGP(a1: Int, r: Int, n: Int): Int {
    // Formula to find the sum of a GP: S = a * (1 - r^n) / (1 - r)
    val sum = a1 * (1 - Math.pow(r.toDouble(), n.toDouble()).toInt()) / (1 - r)
    return sum
}
```

### Perl

```perl
# Write a Perl program to find sum of gp series

sub sum_of_gp {
    my ($a1, $r, $n) = @_;


    my $sum = $a1 * (int($r)**$n - 1) / ($r - 1);
    return $sum;
}


my $a1 = 2;
my $r = 3;
my $n = 3;


print "Sum of the GP series: ", sum_of_gp($a1, $r, $n), "\n";
```

### PHP

```php
// Write a PHP program to find sum of gp series

<?php

function sumOfGP($a, $r, $n)
{
    $sum = 0;
    for ($i = 0; $i < $n; $i++)
    {
        $sum = $sum + $a;
        $a = $a * $r;
    }
    return $sum;
}


echo(sumOfGP(2, 3, 3));


?>
```

### Python

```python
# Write a Python program to find sum of gp series

def findSumOfGpSeries(firstNumber, ratio, length):
    power = pow(ratio, length)
    ans = firstNumber * (power - 1) / (ratio - 1)

    return ans


if __name__ == "__main__":
    firstNumber = float(input("give first number:\n"))
    ratio = float(input("give ratio:\n"))
    length = float(input("give length:\n"))
    print("The sum of the given gp series is ")
    print(findSumOfGpSeries(firstNumber, ratio, length))
```

### R

```r
# Write a R program to find sum of gp series

# Function to calculate the sum of a GP series
sum_of_gp <- function(a1, r, n) {
  if (r == 1) {
    # If the common ratio is 1, use the simple formula for sum of n terms of an AP
    return(a1 * n)
  } else {
    # Calculate the sum using the GP sum formula
    return(a1 * (1 - r^n) / (1 - r))
  }
}

# Example usage with the given input
a1 <- 2   # First term
r <- 3    # Common ratio
n <- 3    # Number of terms

result <- sum_of_gp(a1, r, n)
cat("Sum of the GP series:", result, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find sum of gp series

def sum_of_gp(a1, r, n)

  sum = a1 * (r**n - 1) / (r - 1)
  return sum
end


a1 = 2
r = 3
n = 3


puts "Sum of the GP series: #{sum_of_gp(a1, r, n)}"
```

### Rust

```rust
// Write a Rust program to find sum of gp series

fn sum_of_gp(a: u32, r: u32, n: u32) -> u32 {
    a * (u32::pow(r, n) - 1) / (r - 1)
}

fn main() {
    let a = 2;
    let r = 3;
    let n = 3;

    println!("{}", sum_of_gp(a, r, n));
}
```

### Scala

```scala
// Write a Scala program to find sum of gp series

object GpSumCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter the first term (a1) of the GP:")
    val a1 = scala.io.StdIn.readDouble()

    println("Enter the common ratio (r) of the GP:")
    val r = scala.io.StdIn.readDouble()

    println("Enter the number of terms (n) in the GP:")
    val n = scala.io.StdIn.readInt()

    val gpSum = calculateGpSum(a1, r, n)
    println(s"Sum of the GP series: $gpSum")
  }

  def calculateGpSum(a1: Double, r: Double, n: Int): Double = {
    if (r == 1) {
      return a1 * n
    }

    val gpSum = a1 * (1 - Math.pow(r, n)) / (1 - r)
    gpSum
  }
}
```

### Swift

```swift
// Write a Swift program to find sum of gp series

import Foundation

func sumOfGP(a1: Double, r: Double, n: Int) -> Double {
    if r == 1 {
        // If the common ratio is 1, use the simple formula for sum of n terms of an AP
        return a1 * Double(n)
    } else {
        // Calculate the sum using the GP sum formula
        return a1 * (1 - Foundation.pow(r, Double(n))) / (1 - r)
    }
}

// Example usage with the given input
let a1 = 2.0   // First term
let r = 3.0    // Common ratio
let n = 3      // Number of terms

let result = sumOfGP(a1: a1, r: r, n: n)
print("Sum of the GP series:", result)
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of gp series

function sumOfGP(a1: number, r: number, n: number): number {
  // Calculate the sum of the first n terms of the geometric progression
  const sum = (a1 * (1 - Math.pow(r, n))) / (1 - r);

  return sum;
}

console.log(sumOfGP(2, 3, 3));

//contributed by peleg mazuz
```

## Similar programs

- [Find Sum Of Ap Series](/program/find-sum-of-ap-series)
- [Find The Cofactor Of A Matrix](/program/find-the-cofactor-of-a-matrix)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Print Fibonacci Series Without Recursion](/program/print-fibonacci-series-without-recursion)
- [Print Fibonacci Series By Recursion](/program/print-fibonacci-series-by-recursion)
- [Find Sum Of N Natural Numbers Using Formula](/program/find-sum-of-n-natural-numbers-using-formula)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Find Sum Of Numbers By Recursion](/program/find-sum-of-numbers-by-recursion)
- [Implement Binary Search](/program/implement-binary-search)
- [Find Sum Of N Natural Numbers](/program/find-sum-of-n-natural-numbers)
