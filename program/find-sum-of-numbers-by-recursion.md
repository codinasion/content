---
title: "Find Sum Of Numbers By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "scala",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "bharathbarma94",
    "harshraj8843",
    "anandfresh",
    "AshitaSingamsetty",
    "roberanegussie",
    "AdityaNarayanPradhan",
    "YAbargil",
    "rafaover",
    "esivakumar18",
    "Osher160",
    "joao-vitor-souza",
    "rksp25",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-21T13:09:15Z
trackId: 3322
description: "Write a program to find sum of numbers by recursion."
---

## Table of contents

## Write a program to find sum of numbers by recursion

```
Input  : 1 2 3 4 5
Output : 15
```

---

### C

```c
// Write a C program to find sum of numbers by recursion

#include <stdio.h> /* scanf, printf */
#include <stdlib.h> /*malloc, free*/

int FindSum(int *arr,int size);
void InitArr(int *arr,int size);
int main()
{
    int *arr = NULL;
    int size = 0;
    printf("how many  elements you want to insert?\n");
    if(1 != scanf("%d",&size))
    {
        return -1;
    }

    arr = (int *)malloc(size * sizeof(int));

    if (arr == NULL)
    {
        return -1;
    }

    InitArr(arr,size);

    printf("%d\n",FindSum(arr,size));

    free(arr);

    return 0;
}

void InitArr(int *arr,int size)
{
    int i = 0;
    printf("please enter all of the elements:\n");

    for(i = 0; i < size; ++i)
    {
        if(scanf("%d",arr + i)!= 1)
        {
            free(arr);
            exit(1);
        }
    }
}


int FindSum(int *arr,int size)
{
    if (size == 1)
    {
        return arr[0];
    }

    return arr[size -1] + FindSum(arr,size -1);
}
```

### C#

```csharp
// Write a C# program to find sum of numbers by recursion

using System;

public class FindSumOfNumbersByRecursion {

    public int sumOfNumbersByRecursion(int n) {
        int sum;
        if (n == 1){
            return 1;
        }
        else{
            sum = sumOfNumbersByRecursion(n - 1) + n;
            return sum;
        }
    }
    public static void Main(String[] args){
        FindSumOfNumbersByRecursion n = new FindSumOfNumbersByRecursion();
        Console.Write("Input  : ");
        for(int i = 1; i <= 5; i++){
            Console.Write(i + " ");
        }
        Console.WriteLine(" ");
        Console.WriteLine("Output : {0}", n.sumOfNumbersByRecursion(5));

    }
}
```

### C++

```cpp
// Write a C++ program to find sum of numbers by recursion

#include <iostream>
using namespace std;

int sumOfNumbersByRecursion(int a[], int n, int x)
{
    if (n == x)
    {
        return 0;
    }
    return a[x] + sumOfNumbersByRecursion(a, n, x + 1);
}
int main()
{
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    cout << sumOfNumbersByRecursion(a, n, 0) << "\n";
    return 0;
}
```

### Go

```go
// Write a Go program to find sum of numbers by recursion

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func sumRecursive(num int) int {
	if num == 0 {
		return 0
	}
	return num%10 + sumRecursive(num/10)
}

func main() {
	var input string

	fmt.Println("Input :")
	fmt.Scanln(&input)

	numberStrings := strings.Fields(input)
	numbers := make([]int, len(numberStrings))

	for i, numStr := range numberStrings {
		num, _ := strconv.Atoi(numStr)
		numbers[i] = num
	}

	sum := 0
	for _, num := range numbers {
		sum += sumRecursive(num)
	}
	fmt.Println("Output :", sum)
}
```

### Java

```java
// Write a Java program to find sum of numbers by recursion

import java.util.Scanner;

public class FindSumOfNumbersByRecursion {

    static int sum_of_digit(int n) {
        if (n == 0)
            return 0;
        return (n % 10 + sum_of_digit(n / 10));
    }

    public static void main(String args[]) {
        Scanner my_scanner = new Scanner(System.in);
        System.out.print("Input : ");
        int num = my_scanner.nextInt();;
        int result = sum_of_digit(num);
        System.out.println("Sum of digits in " + num + " is " + result);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of numbers by recursion

function sumOfNumbersByRecursion(num) {
  let sum = 0;
  if (num > 0) {
    sum = (num % 10) + sumOfNumbersByRecursion(Math.floor(num / 10));
  }
  return sum;
}

console.log(sumOfNumbersByRecursion(12345));
```

### Perl

```perl
# Write a Perl program to find sum of numbers by recursion

sub sumOfNumbersByRecursion {
  my ($num) = @_;
  $sum = 0;
  if ($num > 0) {
    $sum = ($num % 10) + sumOfNumbersByRecursion(($num / 10));
  }
  return $sum;
}

print sumOfNumbersByRecursion(12345);
```

### PHP

```php
// Write a PHP program to find sum of numbers by recursion

<?php

function calculateSum($numbers, $index, $currentSum) {

     if ($index == count($numbers)) {
        return $currentSum;
    } else {

        return calculateSum($numbers, $index + 1, $currentSum + $numbers[$index]);
    }
}
// Taking input from the user
echo "Enter space-separated numbers: ";
$input = readline();
$numbers = explode(' ', $input);
$numbers = array_map('intval', $numbers);
$result = calculateSum($numbers, 0, 0);
echo "Sum of the numbers is: $result\n";
?>
```

### Python

```python
# Write a Python program to find sum of numbers by recursion

from typing import List


def recursive_sum(numbers: List[int]) -> int:
    if len(numbers) != 0:
        return numbers[-1] + recursive_sum(numbers[:-1])
    return 0


print(recursive_sum([1, 2, 3, 4, 5]))  # Output: 15
```

### Ruby

```ruby
# Write a Ruby program to find sum of numbers by recursion

puts "Add the numbers you want to sum using recursion"
input = gets.chomp
numbers = input.split(" ").map(&:to_i)

def sum_of_numbers(numbers)
  if numbers == []
    0
  else
    numbers[0] + sum_of_numbers(numbers[1..-1])
  end
end

puts "Sum: #{sum_of_numbers(numbers)}"
```

### Scala

```scala
// Write a Scala program to find sum of numbers by recursion

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val number = scala.io.StdIn.readInt();
	  println(sum(number));
	}

	def sum(n: Int): Int = {
   if (n == 0)
    return 0;
   else
    return n + sum(n-1)
 }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of numbers by recursion

function RecursiveSumOfNums(num: number): number {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + RecursiveSumOfNums(Math.floor(num / 10));
}

console.log(RecursiveSumOfNums(12345));
```

## Similar programs

- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Find Sum Of N Natural Numbers By Recursion](/program/find-sum-of-n-natural-numbers-by-recursion)
- [Find Sum Of Cubes Of Numbers By Recursion](/program/find-sum-of-cubes-of-numbers-by-recursion)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Find Sum Of Squares Of Numbers By Recursion](/program/find-sum-of-squares-of-numbers-by-recursion)
- [Find Sum Of N Natural Numbers](/program/find-sum-of-n-natural-numbers)
- [Find Sum Of Digits Of A Number By Recursion](/program/find-sum-of-digits-of-a-number-by-recursion)
- [Find Sum Of Cubes Of Numbers](/program/find-sum-of-cubes-of-numbers)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find Sum Of Squares Of Numbers](/program/find-sum-of-squares-of-numbers)
