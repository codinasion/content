---
title: "Find Sum Of N Natural Numbers By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "go",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "rksp25",
    "joao-vitor-souza",
    "PravunathSingh",
    "greeshma-d",
    "shivanshi-s",
    "gdguesser",
    "sksachin7z2",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2822
description: "Write a program to find sum of n natural numbers by recursion."
---

## Write a program to find sum of n natural numbers by recursion

```
Input  : 5
Output : 15
```

---

```c
// Write a C program to find sum of n natural numbers by recursion

#include <stdio.h>

int sumByRecursion(int n);

int main() {

  int num;
  printf("Enter a positive integer: ");
  scanf("%d", &num);
  printf("Sum = %d", sumByRecursion(num));
  return 0;
}

int sumByRecursion(int n) {
  if (n != 0)
    return n + sumByRecursion(n - 1);
  else
    return n;
}
```

```csharp
// Write a C# program to find sum of n natural numbers by recursion

using System;
class SumOfNaturalNumbers
{
static void Main(string[] args)
    {
	Console.Write(" How many numbers to sum : ");
	int n = Convert.ToInt32(Console.ReadLine());
    Console.Write(" The sum of natural numbers is : {1}\n\n", n,SumOfTen(1,n));
    }

static int SumOfTen(int min, int max)
    {
    return CalcuSum(min, max);
    }

static int CalcuSum(int min, int val)
    {
    if (val == min)
        return val;
    return val + CalcuSum(min, val - 1);
    }
}
```

```cpp
// Write a C++ program to find sum of n natural numbers by recursion

#include <iostream>
using namespace std;
int sum_of_natural_numbers(int n)
{
if(n == 0)
return 0;
return n + sum_of_natural_numbers(n - 1);
}

int main()
{
int n;
cout << "\nEnter the number : ";
cin >> n;
cout << "\n Sum of " << n << " Natural Numbers is "<< sum_of_natural_numbers(n);
cout << endl;
return 0;
}
```

```fsharp
// Write a F# program to find sum of n natural numbers by recursion

open System
let rec sum last first=
        if last = 0 then first
        else  sum (last-1)(last+first)
let result = sum 5 0
Console.WriteLine("The sum of first 5 integers is {0}\t", result)
```

```go
// Write a Go program to find sum of n natural numbers by recursion

package main

func findSumOfNNaturalNumbersByRecursion(n int) int {
	if n == 0 {
		return 0
	}
	return n + findSumOfNNaturalNumbersByRecursion(n-1)
}

func main() {
	println(findSumOfNNaturalNumbersByRecursion(5))
}
```

```java
// Write a Java program to find sum of n natural numbers by recursion

import java.util.*;
import java.lang.*;

class GFG
{

    public static int recurSum(int n)
    {
        if (n <= 1)
            return n;
        return n + recurSum(n - 1);
    }


    public static void main(String args[])
    {
        int n = 5; //range of number
        System.out.println(recurSum(n));
    }
}
```

```javascript
// Write a JavaScript program to find sum of n natural numbers by recursion

function sumOfNNaturalNumber(num) {
  let sumOfNaturalNum = 0;
  if (num > 0) {
    sumOfNaturalNum = num + sumOfNNaturalNumber(num - 1);
  }
  return sumOfNaturalNum;
}

console.log(sumOfNNaturalNumber(7));
```

```kotlin
// Write a Kotlin program to find sum of n natural numbers by recursion

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Sum of natural number $input using recursion is : " + FindSumOfNNaturalNumbersByRecursion(input!!.toInt()))

}

private fun FindSumOfNNaturalNumbersByRecursion(num: Int): Int {
    val sum = addNumbers(num)

    return sum
}

private fun addNumbers(num: Int): Int {
    if (num != 0)
        return num + addNumbers(num - 1)
    else
        return num
}
```

```php
// Write a PHP program to find sum of n natural numbers by recursion

<!-- issue #2835 -->
<?php
function Sum($n)
{
if ($n <= 1)
return $n;
return $n + Sum ($n - 1 );
}

// enter the range in the sum function
echo Sum(5)
?>
```

```python
# Write a Python program to find sum of n natural numbers by recursion

def recursive_sum(n: int) -> int:
    if n != 0:
        return n + recursive_sum(n - 1)
    return 0


print(recursive_sum(int(input())))
```

```r
# Write a R program to find sum of n natural numbers by recursion

sum<-function(n){
    if (n<=1){
        return(n)
        }else{
        return(n+sum(n-1))
    }
}
sum(5)
```

```rust
// Write a Rust program to find sum of n natural numbers by recursion

fn main() {
    let n = 10;
    let sum = sum_of_n_natural_numbers(n);
    println!("Sum of first {} natural numbers is {}", n, sum);
}

fn sum_of_n_natural_numbers(n: i32) -> i32 {
    if n == 0 {
        return 0;
    }
    return n + sum_of_n_natural_numbers(n - 1);
}
```

```typescript
// Write a TypeScript program to find sum of n natural numbers by recursion

function sumOfNNaturalNumber(num: number): number {
  let sumOfNaturalNum = 0;
  if (num > 0) {
    sumOfNaturalNum = num + sumOfNNaturalNumber(num - 1);
  }
  return sumOfNaturalNum;
}

console.log(sumOfNNaturalNumber(5));
```
