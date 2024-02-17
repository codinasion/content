---
title: "Find Minimum Of N Numbers"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "roberanegussie",
    "sancoLgates",
    "rafaover",
    "deveshpandee",
    "vfon98",
    "amiqyolo",
    "grraghav120",
    "ba-ppp",
    "GilAzani",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T04:59:30Z
trackId: 3750
description: "Write a program to find minimum of n numbers."
---

## Write a program to find minimum of n numbers

```
Input  : 10 20 30 40 50
Output : 10
```

---

```c
// Write a C program to find minimum of n numbers

#include <stdio.h>

int findMinimumOfNNumbers(int* arr, int n)
{
	int min = arr[0], i;
	//in defualt the first num in arr is the minimum

	for(i = 1; i < n ; i++)
	{
		if (arr[i] < min)
		{
			min = arr[i];
		}
	}
	return (min);
}
```

```csharp
// Write a C# program to find minimum of n numbers

using System;

public class FindMinimumOfNNumbers {
    public static void Main(String[] args){
        int[] arr = { 10, 20, 30, 40, 50 };
        Console.Write("Input  : ");
        for (int i = 0; i < 5; i++)
        {
            Console.Write(arr[i] + " ");
        }
        int min = arr[0];
        for (int i = 0; i < 5; i++)
        {
            if (arr[i] < min)
            {
                min = arr[i];
            }
        }
        Console.WriteLine();
        Console.WriteLine("Output : " + min);
    }
}
```

```cpp
// Write a C++ program to find minimum of n numbers

#include<iostream>
using namespace std;

int main(){
    int min,k;
    cin>>min;
    while(cin>>k){
        if(k<min){
            min=k;
        }
    }
    cout<<min;
}
```

```go
// Write a Go program to find minimum of n numbers

package main

import "fmt"

func main() {
	arr := [...]int{10, 20, 30, 40, 50}
	min_num := arr[0]
	for _, value := range arr {
		if (value < min_num) {
			min_num = value
		}
	}
	fmt.Println(min_num)
}
```

```haskell
-- Write a Haskell program to find minimum of n numbers

minNum:: Ord b => [b]-> b
minNum [x] = x
minNum (x:x':xs) = minNum ((if x <= x' then x else x'):xs)

main = print (minNum [10, 20, 30, 40, 50])
```

```java
// Write a Java program to find minimum of n numbers

import java.util.*;

public class FindMinimumOfNNumbers {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter number of elements in the array:");
    int n = sc.nextInt();
    int[] arr = new int[n];

    System.out.println("Enter elements of array:");
    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    int mini = Integer.MAX_VALUE;
    for (int i = 0; i < n; i++) {
      if (arr[i] < mini) mini = arr[i];
    }

    System.out.println("Minimum value: " + mini);
  }
}
```

```javascript
// Write a JavaScript program to find minimum of n numbers

/**
 * function to find minimum of n numbers
 * @param {Array.<number>} inputArray - The input array
 * @returns {number|string} - The minimum value from inputArray or the error message
 */
const findMinimumOfNNumbers = inputArray => {
  if (!Array.isArray(inputArray)) {
    return "Error: Input should be array";
  }

  if (inputArray.length === 0) {
    return "Error: Input array should not be empty";
  }

  // Ignore invalid numbers from input array
  const validNumbers = inputArray.filter(input => Number.isFinite(input));

  if (validNumbers.length === 0) {
    return "Error: Input array should have at least one valid number";
  }

  let minimumValue = validNumbers[0];

  validNumbers.forEach(number => {
    if (number < minimumValue) {
      minimumValue = number;
    }
  });

  return minimumValue;
};

console.log(findMinimumOfNNumbers("random string"));
console.log(findMinimumOfNNumbers([]));
console.log(findMinimumOfNNumbers(["10"]));
console.log(findMinimumOfNNumbers([10]));
console.log(findMinimumOfNNumbers([10, "20", undefined, 100, NaN]));
console.log(findMinimumOfNNumbers([10, -20, 50, 99]));
```

```kotlin
// Write a Kotlin program to find minimum of n numbers

fun main() {
   val n = arrayOf(10, 20, 30, 40, 50)
   findMiniOfNumber(n)
}

fun findMiniOfNumber(arr: Array<Int>) {
    var min = Int.MAX_VALUE
    for (i in arr) {
        min = min.coerceAtMost(i)
    }
    println(min)
}
```

```perl
# Write a Perl program to find minimum of n numbers

#!/usr/bin/perl
use strict;
use warnings;
my @array = sort { $a <=> $b } qw(10 20 30 40 50);
print "min: $array[0]\n";
```

```php
// Write a PHP program to find minimum of n numbers

<?php

	echo min(10, 20, 30, 40, 50);
?>
```

```python
# Write a Python program to find minimum of n numbers

def find_minimum_of_n_numbers(numbers):
    sorted_nums = sorted(numbers)
    return sorted_nums[0]
```

```ruby
# Write a Ruby program to find minimum of n numbers

def find_minimum_of_n_numbers(numbers)
  sorted_numbers = numbers.sort
  # many methods to get it:
  # sorted_numbers[0]
  # sorted_numbers.first
  sorted_numbers.min
end

puts find_minimum_of_n_numbers([300, 50, 10, 2, 20, 34, 45])
```

```rust
// Write a Rust program to find minimum of n numbers

fn find_minimum_of_n_numbers(nums: &mut [i32]) -> i32 {
    nums.sort();
    return nums[0];
}

// testing
fn main() {
    let mut arr: [i32; 4] = [1, 5, 3, 6];
    let rs = find_minimum_of_n_numbers(&mut arr);
    println!("Minimum of n numbers is {:?}", rs);
}
```

```swift
// Write a Swift program to find minimum of n numbers

import Swift
import Foundation

let numbers = [10, 20, 30, 40, 50]
print("Minimum number: ", numbers.reduce(Int.max, { min($0, $1) }))
```

```typescript
// Write a TypeScript program to find minimum of n numbers

function findMinimumOfNNumbers(...args: Array<number>) {
  const numbers = [...args];

  const sortedNumbers = numbers.sort((a, b) => a - b);

  return sortedNumbers[0];
}
```
