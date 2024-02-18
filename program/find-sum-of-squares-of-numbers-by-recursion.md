---
title: "Find Sum Of Squares Of Numbers By Recursion"
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
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "rakibul-islam-raju",
    "sancoLgates",
    "patel-aum",
    "anandfresh",
    "Osher160",
    "joao-vitor-souza",
    "Ipankaj07",
    "ridsuteri",
    "Ritesh-Dabral",
    "kangjung",
    "UsmanFani",
    "AthiraKadampatta",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 481
description: "Write a program to find sum of squares of numbers by recursion."
---

## Table of contents

## Write a program to find sum of squares of numbers by recursion

```
Input  : 1 2 3 4 5
Output : 55
```

---

### C

```c
// Write a C program to find sum of squares of numbers by recursion

#include <stdio.h>

long long int recursiveSqSum(int *arr, int index){
    if(index<0) return 0;
    long long int val = recursiveSqSum(arr, index-1);
    return val + (arr[index]*arr[index]);
}

int main() {
    int input[] = {1,2,3,4,5};
    long long int size = sizeof(input)/sizeof(input[0]);
    printf("%lld",recursiveSqSum(input, size-1));
    return 0;
}
```

### C#

```csharp
// Write a C# program to find sum of squares of numbers by recursion

using System;

class sumOfSquares {
  static int Sum(int n) {
    if(n == 1)
      return 1;
    else
      return (n*n + Sum(n-1));
  }

  static void Main(string[] args) {
    string n;int res;
    Console.WriteLine("Enter a Number: ");
    n = Console.ReadLine();
    res=Convert.ToInt32(n);
    Console.WriteLine("Sum of squares of first "+res+" natural numbers: " + Sum(res));
  }
}
```

### C++

```cpp
// Write a C++ program to find sum of squares of numbers by recursion

#include <iostream> // cout,cin
#include <vector> // vector

//wrapper for FindSumOfSquaresRec
int FindSumOfSquares(std::vector<int>& nums);
// Find a square of numbers by recursion
int FindSumOfSquaresRec(std::vector<int>& nums,size_t idx);

int main()
{
    size_t size = 0;

    std::cout << "please enter the size of the array:" << std::endl;
    std::cin >> size;

    std::cout << "please enter elements of the array in ascending order:" << std::endl;

    int tmp = 0;
    std::vector<int> nums;

    for(size_t i = 0; i < size; ++i)
    {
        std::cin >> tmp;
        nums.push_back(tmp);
    }

    std::cout << FindSumOfSquares(nums) << std::endl;

    return 0;
}

int FindSumOfSquares(std::vector<int>& nums)
{
    return FindSumOfSquaresRec(nums,nums.size() - 1);
}


int FindSumOfSquaresRec(std::vector<int>& nums,size_t idx)
{
    if(idx == 0)
    {
        return nums[idx] * nums[idx];
    }

    int square_of = nums[idx] * nums[idx];

    return square_of + FindSumOfSquaresRec(nums,idx - 1);
}
```

### Go

```go
// Write a Go program to find sum of squares of numbers by recursion

package main

import "fmt"

func sumSquareRecursive(arr []int, index int) int {
	if index < 0 {
		return 0
	}
	return arr[index] * arr[index] + sumSquareRecursive(arr, index - 1)
}

func main() {
	input := []int{1, 2, 3, 4, 5}
	fmt.Println(sumSquareRecursive(input, len(input) - 1))
}
```

### Java

```java
// Write a Java program to find sum of squares of numbers by recursion

import java.util.Arrays;

class FindSumOfSquaresOfNumbersByRecursion {
    public static void main(String[] args) {
        String input = "1 2 3 4 5";
        int[] arr = Arrays.stream(input.split(" ")).mapToInt(Integer::parseInt).toArray();
        int n = arr.length;
        System.out.println("Result : " + sumOfSquares(arr, n)); // 55
    }

    private static int sumOfSquares(int[] arr, int n) {
        if (n == 0) {
            return 0;
        }
        return (arr[n - 1] * arr[n - 1]) + sumOfSquares(arr, n - 1);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of squares of numbers by recursion

function FindSumOfSquaresOfNumbersByRecursion(number) {
  if (number.split(" ").length <= 1) {
    return Number(number.split(" ", 1)) ** 2;
  }
  return (
    Number(number.split(" ", 1)) ** 2 +
    FindSumOfSquaresOfNumbersByRecursion(
      number.substring(number.indexOf(" ") + 1, number.length)
    )
  );
}

let number = "1 2 3 4 5";
console.log("Input  :", number);
console.log("Output :", FindSumOfSquaresOfNumbersByRecursion(number));
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of squares of numbers by recursion

class FindSumOfSquaresOfNumbersByRecursion {
    fun sumOfSquares(nums: IntArray): Int {
        return recursiveSum(nums, 0)
    }

    private fun recursiveSum(nums: IntArray, index: Int): Int {
        if (index > nums.lastIndex) return 0
        return nums[index] * nums[index] + recursiveSum(nums, index + 1)
    }

}
```

### PHP

```php
// Write a PHP program to find sum of squares of numbers by recursion

<?php

function recursiveSum($numbers)
{
    if (count($numbers) == 1) {
        return pow((int) $numbers[0], 2);
    } else {
        return pow($numbers[0], 2) + recursiveSum(array_slice($numbers, 1));
    }
}


$numbers = explode(" ", readline());

echo recursiveSum($numbers) . "\n";

?>
```

### Python

```python
# Write a Python program to find sum of squares of numbers by recursion

x = input("Enter the integers in string form : ").replace(" ", "")


def squarer(x):
    if int(x) < 10:
        return x**2
    first_digit = int(str(x)[0])
    return first_digit**2 + squarer(int(str(x)[1:]))


print(squarer(x))
```

### Ruby

```ruby
# Write a Ruby program to find sum of squares of numbers by recursion

# frozen_string_literal: true

puts 'This program calculates the sum of squares of numbers.'
puts 'Enter the numbers separated by spaces'

input_array = gets.chomp.split(' ').map(&:to_i)

puts "Sum of squares is #{input_array.sum { |num| num * num }}"
```

### Scala

```scala
// Write a Scala program to find sum of squares of numbers by recursion

object SumOfSquares {
  def findSumOfSquaresByRecursion(input: String): Int = {
    val numList = input.split(" ").map(_.toInt)

    if (numList.length <= 1) {
      math.pow(numList.head, 2).toInt
    } else {
      val headSquare = math.pow(numList.head, 2).toInt
      val restOfNumbers = numList.tail.mkString(" ")
      headSquare + findSumOfSquaresByRecursion(restOfNumbers)
    }
  }

  def main(args: Array[String]): Unit = {
    val number = "1 2 3 4 5"
    val result = findSumOfSquaresByRecursion(number)

    println(s"Input  : $number")
    println(s"Output : $result")
  }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of squares of numbers by recursion

function sum_sq(array: any) {
  let sum = 0,
    i = array.length;
  while (i--) sum += Math.pow(array[i], 2);
  return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4, 5]));
```
