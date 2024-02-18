---
title: "Find The Largest Two Elements In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "javascript",
    "kotlin",
    "typescript",
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "anandfresh",
    "srini696",
    "grinish21",
    "MohitKambli",
    "bharathbarma94",
    "chintanrupareliya",
    "joenjogu",
    "harshraj8843",
    "Amedi-Imbira",
    "kkiriky",
    "hamzambo",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-13T17:20:36Z
trackId: 5033
description: "Write a program to find the largest two elements in an array."
---

## Table of contents

## Write a program to find the largest two elements in an array

```
Input: arr[] = {12, 13, 1, 10, 34, 1}
Output: The largest two elements are 34 and 13

Input: arr[] = {10, 5, 10}
Output: The largest two elements are 10 and 5

Input: arr[] = {10, 10, 10}
Output: The largest two elements are 10 and 10
```

---

### C

```c
// Write a C program to find the largest two elements in an array

#include<stdio.h>
void FindLargestTwoElements(int arr[],int size){

    int firstMax, secondMax;

    if (size < 2) {
        printf("Array size should be at least 2 to find two largest elements.\n");
        return;
    }

    if (arr[0] > arr[1]) {
        firstMax = arr[0];
        secondMax = arr[1];
    } else {
        firstMax = arr[1];
        secondMax = arr[0];
    }

    for(int i=0;i<size;i++){
        if(arr[i]>firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if(arr[i]>secondMax && arr[i]!=firstMax){
            secondMax = arr[i];
        }
    }
    printf("The largest two elements are %d and %d\n", firstMax, secondMax);
}

int main()
{
    int arr1[] = {12, 13, 1, 10, 34, 1};
     int size1 = sizeof(arr1)/sizeof(arr1[0]);
    FindLargestTwoElements(arr1,size1);

    int arr2[] = {10, 5, 10};
     int size2 = sizeof(arr2)/sizeof(arr2[0]);
    FindLargestTwoElements(arr2,size2);

    int arr3[] = {10, 10, 10};
     int size3 = sizeof(arr3)/sizeof(arr3[0]);
    FindLargestTwoElements(arr3,size3);

    return 0;
}
```

### C#

```csharp
// Write a C# program to find the largest two elements in an array

using System;

class Program
{
    static void FindLargestTwoElements(int[] arr)
    {
        int firstLargest = int.MinValue;
        int secondLargest = int.MinValue;

        foreach (int num in arr)
        {
            if (num > firstLargest)
            {
                secondLargest = firstLargest;
                firstLargest = num;
            }
            else if (num > secondLargest && num != firstLargest)
            {
                secondLargest = num;
            }
        }

        if (secondLargest == int.MinValue)
        {
            Console.WriteLine("Array has less than two distinct elements.");
        }
        else
        {
            Console.WriteLine($"The largest two elements are {firstLargest} and {secondLargest}");
        }
    }

    static void Main()
    {
        int[] arr1 = { 12, 13, 1, 10, 34, 1 };
        FindLargestTwoElements(arr1);

        int[] arr2 = { 10, 5, 10 };
        FindLargestTwoElements(arr2);

        int[] arr3 = { 10, 10, 10 };
        FindLargestTwoElements(arr3);
    }
}
```

### C++

```cpp
// Write a C++ program to find the largest two elements in an array

#include <iostream>
#include <climits>

void findLargestTwo(int arr[], int size) {
    if (size < 2) {
        std::cout << "Array size should be at least 2." << std::endl;
        return;
    }

    int firstLargest = INT_MIN;
    int secondLargest = INT_MIN;

    for (int i = 0; i < size; ++i) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest == INT_MIN) {
        std::cout << "There are not enough distinct elements in the array." << std::endl;
    } else {
        std::cout << "The largest two elements are " << firstLargest << " and " << secondLargest << std::endl;
    }
}

int main() {
    int size;

    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    if (size <= 0) {
        std::cout << "Invalid array size." << std::endl;
        return 1;
    }

    int arr[size];

    std::cout << "Enter the elements of the array: ";
    for (int i = 0; i < size; ++i) {
        std::cin >> arr[i];
    }

    findLargestTwo(arr, size);

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find the largest two elements in an array

import 'dart:io';

void findLargestTwo(List<int> arr) {
  if (arr.length < 2) {
    print("Array should have at least two elements.");
    return;
  }

  int largest = (arr[0] > arr[1]) ? arr[0] : arr[1];
  int secondLargest = (arr[0] > arr[1]) ? arr[1] : arr[0];

  for (int i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  print("Largest two elements in the array: $largest $secondLargest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findLargestTwo(array);
}


/*

Command Prompt Execution:
dart find_the_largest_two_elements_in_an_array.dart
Enter integers for the array separated by space:
10 11 9 1 20 3
Largest two elements in the array: 20 11

*/
```

### F#

```fsharp
// Write a F# program to find the largest two elements in an array

let input = [ 12; 13; 1; 10; 34; 1]

let sort = List.sortDescending input

for i = 0 to 1 do
    printfn "%d" sort.[i]
```

### Go

```go
// Write a Go program to find the largest two elements in an array

package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(largestTwoElements([]int{12, 13, 1, 10, 34, 1}))
    fmt.Println(largestTwoElements([]int{10, 5, 10}))
    fmt.Println(largestTwoElements([]int{10, 10, 10}))
}

func largestTwoElements(arr []int) []int {
    // sort the input array in descending order
    sort.Sort(sort.Reverse(sort.IntSlice(arr)))

    // return the first 2 elements
    return arr[:2]
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the largest two elements in an array

function findLargestTwoElements(arr) {
  if (arr.length < 2) {
    console.log("Array should have at least two elements.");
    return;
  }

  // Sort the array in descending order
  arr.sort(function (a, b) {
    return b - a;
  });

  // Extract the first and second elements (largest and second largest)
  let largest = arr[0];
  let secondLargest = arr[1];

  return [largest, secondLargest];
}

// Example usage
let numbers = [10, 5, 8, 20, 15];
let result = findLargestTwoElements(numbers);

let letters = ["f", "o", "p", "w", "z"];
let result = findLargestTwoElements(letters);

console.log("Largest two numbers:", result);
```

### Kotlin

```kotlin
// Write a Kotlin program to find the largest two elements in an array

fun main() {
    val twoLargestElements = twoLargestElements(arrayOf(12, 13, 1, 10, 34, 1))
    println(twoLargestElements.joinToString())
}

fun twoLargestElements(array: Array<Int>): Array<Int> {
    return if (array.size < 2) {
        emptyArray()
    } else {
        val sortedArray = array.sortedArrayDescending()
        sortedArray.sliceArray(0..1)
    }
}
```

### Perl

```perl
# Write a Perl program to find the largest two elements in an array

@input = (12, 13, 1, 10, 34, 1);
@input = sort { $b <=> $a } @input;
if(scalar @input < 2){
    print "Array should have atleast 2 elements";
}else{
    print "@input[0],@input[1]\n";
}
```

### PHP

```php
// Write a PHP program to find the largest two elements in an array

<?php

function findLargestTwo($arr, $size) {
    if ($size < 2) {
        echo "Array size should be at least 2.\n";
        return;
    }

    $firstLargest = PHP_INT_MIN;
    $secondLargest = PHP_INT_MIN;

    for ($i = 0; $i < $size; ++$i) {
        if ($arr[$i] > $firstLargest) {

            $secondLargest = $firstLargest;
            $firstLargest = $arr[$i];
        } elseif ($arr[$i] > $secondLargest && $arr[$i] != $firstLargest) {

            $secondLargest = $arr[$i];
        }
    }

    if ($secondLargest == PHP_INT_MIN) {
        echo "There are not enough distinct elements in the array.\n";
    } else {
        echo "The largest two elements are $firstLargest and $secondLargest\n";
    }
}


echo "Enter the size of the array: ";
$size = intval(readline());

if ($size <= 0) {
    echo "Invalid array size.\n";
    exit(1);
}

echo "Enter the elements of the array (space-separated): ";
$input = trim(readline());
$arr = array_map('intval', explode(' ', $input));

findLargestTwo($arr, $size);

?>
```

### Python

```python
# Write a Python program to find the largest two elements in an array

def main():
      """
            Return the two largest elements from a nonempty Python list (array)
            1. Sort the array
            2. Return the last two elements from the sorted array

            Asymptotic analysis
            By sorting the sequence of the elements, elements will be placed next to each other. Therefore
            1. built in function sorted guarantees a worst case running time of O(n log n)
            2. return tuple assignment is in constant time O(1)

      """
      seq = [12, 13, 1, 10, 34, 35]                                                # Test with various sequences

      largest, second_largest = find_two_largest_elements(seq)                      #unpacking tuple
      print(f'Largest: {largest} || Second largest: {second_largest}')

def find_two_largest_elements(S):
      S_sorted = sorted(S)

      return (S_sorted[-2], S_sorted[-1])                                       # Return in tuple form

if __name__ == '__main__':
      main()
```

### R

```r
# Write a R program to find the largest two elements in an array

findLargestTwo <- function(arr) {
  # Check if the length of the array is less than 2
  if (length(arr) < 2) {
    cat("Array should have at least two elements.\n")
    return()
  }

  largest1 <- arr[1]
  largest2 <- arr[2]

  for (i in 3:length(arr)) {
    if (arr[i] > largest1) {
      largest2 <- largest1
      largest1 <- arr[i]
    } else if (arr[i] > largest2 && arr[i] != largest1) {
      largest2 <- arr[i]
    }
  }

  cat("The largest two elements are", largest1, "and", largest2, "\n")
}


arr1 <- c(12, 13, 1, 10, 34, 1)
findLargestTwo(arr1)

arr2 <- c(10, 5, 10)
findLargestTwo(arr2)

arr3 <- c(10, 10, 10)
findLargestTwo(arr3)
```

### TypeScript

```typescript
// Write a TypeScript program to find the largest two elements in an array

function findTheLargestTwoElementsInAnArray(arr: number[]) {
  if (arr.length < 2) {
    throw new Error("The length of the array must be at least 2.");
  }

  const max1 = Math.max(...arr);
  const filteredNumbers = arr.filter(num => num !== max1);
  const max2 = Math.max(...filteredNumbers);

  return { max1, max2 };
}

const list = [12, 13, 1, 10, 34, 1];
const { max1, max2 } = findTheLargestTwoElementsInAnArray(list);

console.log(`The largest two elements are ${max1} and ${max2}`);
```
