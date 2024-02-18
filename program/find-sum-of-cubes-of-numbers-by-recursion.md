---
title: "Find Sum Of Cubes Of Numbers By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "apurvagandhi",
    "roberanegussie",
    "esivakumar18",
    "joao-vitor-souza",
    "greeshma-d",
    "vedha-vikash-pixel",
    "UsmanFani",
    "darkbits018",
    "grraghav120",
    "yk-jp",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1787
description: "Write a program to find sum of cubes of numbers by recursion."
---

## Table of contents

## Write a program to find sum of cubes of numbers by recursion

```
Input  : 1 2 3 4 5
Output : 225
```

---

### C

```c
// Write a C program to find sum of cubes of numbers by recursion

#include <stdio.h>

int addNumbers(int n);

int main() {

  int num;
  printf("Enter a positive integer: ");
  scanf("%d", &num);
  printf("Sum = %d", addNumbers(num));
  return 0;
}

int addNumbers(int n) {
  if (n != 0)
    return (n*n*n + addNumbers(n - 1));
  else
    return n;
}
```

### C#

```csharp
// Write a C# program to find sum of cubes of numbers by recursion

using System;
public class FindSumOfCubesOfNumbersByRecursion
{
    public int sumOfCubesOfNumbersByRecursion(int[] a, int sum, int i) {
        if (i >= a.Length)
            return sum;
        sum += (a[i] * a[i] * a[i]);
        return sumOfCubesOfNumbersByRecursion(a,sum,++i);
    }
    public static void Main(string[] args)
    {
        FindSumOfCubesOfNumbersByRecursion n = new FindSumOfCubesOfNumbersByRecursion();
        int[] a = { 1, 2, 3, 4, 5 };
        Console.Write("Input  : ");
        for (int i = 0; i < a.Length; i++) {
            Console.Write("{0} ",a[i]);
        }
        Console.WriteLine(" ");
        Console.WriteLine("Output : {0}", n.sumOfCubesOfNumbersByRecursion(a,0,0));
    }
}
```

### C++

```cpp
// Write a C++ program to find sum of cubes of numbers by recursion

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int FindSumOfCubesOfNumbersByRecursion(vector<int> arr, int n){
    if(n==1) return pow(arr[0],3);
    return pow(arr[n-1],3)+FindSumOfCubesOfNumbersByRecursion(arr,n-1);
}

int main()
{
    int n;cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    int res=FindSumOfCubesOfNumbersByRecursion(v,n);
    cout<<res<<'\n';
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to find sum of cubes of numbers by recursion

package main

import (
	"fmt"
)

func sumOfCubes(numbers []int) int {
	// Base case
	if len(numbers) == 0 {
		return 0
	}

	// Recursive case
	return numbers[0]*numbers[0]*numbers[0] + sumOfCubes(numbers[1:])
}

func main() {
	// Get the input numbers
	numbers := []int{1, 2, 3, 4, 5}

	// Find the sum of the cubes
	sum := sumOfCubes(numbers)

	// Print the output
	fmt.Println("The sum of the cubes is", sum)
}
```

### Java

```java
// Write a Java program to find sum of cubes of numbers by recursion

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindSumOfCubesOfNumbersByRecursion {

    public static void main(String[] args) {

        List<Integer> arr = new ArrayList<>(Arrays.asList(1 , 2, 3, 4, 5));   //array to get sum

        System.out.println(cubesum(arr,0,0));
    }

    public static int cubesum(List<Integer> arr,int i,int sum) {                //recursive function
        if(i >= arr.size()){
            return sum;
        }
        sum += (arr.get(i) * arr.get(i) * arr.get(i));
        return cubesum(arr,++i,sum);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of cubes of numbers by recursion

function FindSumOfCubesOfNumbersByRecursion(num) {
  let sumOfCubesOfNumber = 0;
  if (num > 0) {
    sumOfCubesOfNumber =
      Math.pow(num % 10, 3) +
      FindSumOfCubesOfNumbersByRecursion(Math.floor(num / 10));
  }
  return sumOfCubesOfNumber;
}

console.log(FindSumOfCubesOfNumbersByRecursion(12345));
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of cubes of numbers by recursion

import kotlin.math.pow

fun main() {
    print("Enter the numbers:")
    val nums = readln()
    print("Sum of Cubes of Number: ${sumOfCubes(nums)}")
}

private fun sumOfCubes(nums: String): Int {
    val list = mutableListOf<Int>()
    var str = ""
    nums.forEach {
        if (it == ' ') {
            list.add(str.toInt())
            str = ""
        } else str += it
    }
    if (str != "") list.add(str.toInt())
    return sumRecursion(0, list)
}

private fun sumRecursion(index: Int, nums: MutableList<Int>): Int {
    if (index == nums.lastIndex) return nums[index].toDouble().pow(3).toInt()

    return nums[index].toDouble().pow(3).toInt() + sumRecursion(index + 1, nums)
}
```

### PHP

```php
// Write a PHP program to find sum of cubes of numbers by recursion

<?php
  $n = readline('Enter Number: ');
  echo "Sum of cubes: ".Sum($n);

  function Sum($n) {
    if($n == 1)
      return 1;
    else
      return ($n**3 + Sum($n-1));
  }
?>
```

### Python

```python
# Write a Python program to find sum of cubes of numbers by recursion

from decimal import Decimal, DecimalException


def culc_sum_of_cubes_of_numbers(nums, res):
    if len(nums) <= 0:
        # when every numbers in the nums are calculated, array is empty and return result
        return res

    # pop the number from the nums array and add it to the result
    num = nums.pop()
    res += num**3
    return culc_sum_of_cubes_of_numbers(nums, res)


def convert_input_to_numbers_list(user_input):
    try:
        # separate the user input by empty space
        nums = user_input.split()

        nums = [Decimal(num) for num in nums]

    except (ValueError, DecimalException):
        print(f"Please enter valid input.")
        exit()

    return nums


def main():
    # receive a user input
    user_input = input(f"Enter the numbers (e.g. 1 2 3 4 5): ")
    nums = convert_input_to_numbers_list(user_input)

    res = culc_sum_of_cubes_of_numbers(nums, 0)
    print(f'the result of "{user_input}" = {res}')


main()
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of cubes of numbers by recursion

function FindSumOfCubesOfNumbersByRecursion(num: number): number {
  let sumOfCubesOfNumber = 0;
  if (num > 0) {
    sumOfCubesOfNumber =
      Math.pow(num % 10, 3) +
      FindSumOfCubesOfNumbersByRecursion(Math.floor(num / 10));
  }
  return sumOfCubesOfNumber;
}

console.log(FindSumOfCubesOfNumbersByRecursion(12345));
```
