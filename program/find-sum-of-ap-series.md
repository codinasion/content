---
title: "Find Sum Of Ap Series"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "srini696",
    "pradeepch2107",
    "ShivangiRai1310",
    "anandfresh",
    "harshraj8843",
    "vedantpople4",
    "neswatch",
    "pokharel-nishan",
    "pelegsch666",
    "ShivamK2002",
    "shashankgurunaga1",
    "harsha-desaraju",
    "RohithBoppey",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-03T06:25:20Z
trackId: 4360
description: "Write a program to find sum of ap series."
---

## Table of contents

## Write a program to find sum of ap series

An arithmetic progression (AP) is a sequence of numbers such that the difference of any two consecutive terms is a constant. The nth term of an AP is given by the formula a<sub>n</sub> = a<sub>1</sub> + (n-1)d where a<sub>1</sub> is the first term and d is the common difference.

```
Input  : 2, 5, 3
Output : 20
```

---

### C

```c
// Write a C program to find sum of ap series

#include <stdio.h>

int main()
{
    int a, n, d;
    int sum = 0;

    printf("Enter the first term in AP series   :   ");
    scanf("%i", &a);
    printf("Enter number of terms   :   ");
    scanf("%i", &n);
    printf("Enter common difference :   ");
    scanf("%i", &d);


    for (int i = 0; i < n; i++){
        sum += a + i * d;
    }


    printf("Sum of AP series is :   %i", sum);

    return 0;
}
```

### C#

```csharp
// Write a C# program to find sum of ap series

﻿using System;

public class FindSumOfApSeries
{
    /// <summary>
    /// Finds the sum of the AP serie at the n-th term
    /// </summary>
    /// <param name="a">First term</param>
    /// <param name="n">Position of the term (starts at 1)</param>
    /// <param name="d">Constant difference between terms</param>
    /// <returns>The sum of an arithmetic sequence at the n-th term</returns>
    public static int sumOfApSeries(int a, int n, int d)
    {
        int n_th_term = a + ((n - 1) * d);
        return n * ((a + n_th_term) / 2);
    }

    public static void Main()
    {
        int firstTerm, n, d;
        Console.WriteLine("Enter the first term : ");
        firstTerm = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter the position of the wanted sum (n value) : ");
        n = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter the constant between each term : ");
        d = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine(sumOfApSeries(firstTerm,n,d));
    }
}
```

### C++

```cpp
// Write a C++ program to find sum of ap series

#include <iostream>
#include <math.h>
#include <vector>

using namespace std;

int findArithmeticProgressionSum(vector<int> v) {

  int n = v.size();

  if (n == 1) {
    return v[0];
  }

  int a = v[0];
  int d = v[1] - a;

  int an = a + (n - 1) * d;

  return n / 2 * (a + an);
}

int main() {

  vector<int> v = {-2, 4, 10, 16, 22};

  cout << findArithmeticProgressionSum(v);

  return 0;
}
```

### Go

```go
// Write a Go program to find sum of ap series

package main

import "fmt"

func main() {
	var a int
	fmt.Scanf("%d", &a)
	var n int
	fmt.Scanf("%d", &n)
	var d int
	fmt.Scanf("%d", &d)
	sum := (2*a + ((n - 1) * d)) * n
	fmt.Println(sum / 2)
}
```

### Java

```java
// Write a Java program to find sum of ap series

/*Author: Shashank Gurunaga  */
import java.util.*;
import java.lang.*;

public class FindSumOfApSeries {
    public static int APsum(int a1, int n1, int d1) {
        int sumofap = 0;
        for (int i = 0; i < n1; i++) {
            sumofap += a1;
            a1 += d1;
        }
        return sumofap;
    }

    public static void main(String[] Args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();// The number of terms in then AP series
        int a = scanner.nextInt();// First term of the AP series
        int d = scanner.nextInt(); // Common difference of the AP series
        int res = APsum(a, n, d);
        System.out.println("Sum of the AP Series: " + res);
    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of ap series

function sumOfApSeries(firstTerm, commmonDifference, nthTerm) {
  const sumOfApSeries =
    (nthTerm / 2) * (2 * firstTerm + (nthTerm - 1) * commmonDifference);
  return sumOfApSeries;
}
console.log(sumOfApSeries(2, 3, 5));
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of ap series

/**
Program to find the sum of n-terms in an AP

The input to the program are a,n,d
a - first term
n - number of terms
d - common difference

Input : 2 5 3
Output for Sum of AP Series : 40

*/

fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output for Sum of AP Series : " + FindSumOfApSeries(nums!!.split(" ")))

}

private fun FindSumOfApSeries(args: List<String>): Int {
    var a: Int = args[0].toInt()
    var n: Int = args[1].toInt()
    var d: Int = args[2].toInt()
    var sum = ( n * (2*a + (n-1)*d) ) / 2

    return sum
}
```

### Perl

```perl
# Write a Perl program to find sum of ap series

sub sumOfApSeries{
  my ($firstTerm, $commmonDifference, $nthTerm) = @_;
  my $sumOfApSeries =
    ($nthTerm / 2) * (2 * $firstTerm + ($nthTerm - 1) * $commmonDifference);
  print $sumOfApSeries;
}
sumOfApSeries(2, 3, 5);
```

### PHP

```php
// Write a PHP program to find sum of ap series

<?php

function sumOfAP($a, $d, $n)
{
    $sum = 0;
    for ($i = 0; $i < $n; $i++)
    {
        $sum = $sum + $a;
        $a = $a + $d;
    }
    return $sum;
}

$n = 2;
$a = 5; $d = 3;
echo(sumOfAP($a, $d, $n));

?>
```

### Python

```python
# Write a Python program to find sum of ap series

# Program to find the sum of n-terms in an AP

# The input to the program are a,n,d
# a - first term
# n - number of terms
# d - common difference

a, n, d = list(map(int, input().split(" ")))

if n < 0:
    print("Error! Number of terms cannot be negative")
else:
    print((n / 2) * ((2 * a) + ((n - 1) * d)))
```

### R

```r
# Write a R program to find sum of ap series

sum_of_ap_series <- function(a, n, d) {
  an <- a + (n - 1) * d

  # Formula for the sum of n terms of AP
  sum_ap <- n * (a + an) / 2

  return(sum_ap)
}

a <- 2
n <- 5
d <- 3

result <- sum_of_ap_series(a, n, d)
cat("Output:", result, "\n")
```

### Rust

```rust
// Write a Rust program to find sum of ap series

fn main(){
    let a = 2;
    let n = 5;
    let d = 3;
    let last = a + (n-1)*d;
    let answer = (n*(a + last))/2;
    println!("{answer}");
}
```

### Scala

```scala
// Write a Scala program to find sum of ap series

object APSumCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter the first term (a1):")
    val a1 = scala.io.StdIn.readInt()

    println("Enter the number of terms (n):")
    val n = scala.io.StdIn.readInt()

    println("Enter the common difference (d):")
    val d = scala.io.StdIn.readInt()

    val sum = n * (2 * a1 + (n - 1) * d) / 2

    println(s"The sum of the arithmetic progression series is: $sum")
  }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of ap series

function sumOfApSeries(a: number, n: number, d: number): number {
  const a_n = a + (n - 1) * d;
  const part1 = n / 2;
  const part2 = a + a_n;
  return part1 * part2;
}
```
