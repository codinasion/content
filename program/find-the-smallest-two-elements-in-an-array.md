---
title: "Find The Smallest Two Elements In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "ruby",
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
    "grinish21",
    "MohitKambli",
    "bharathbarma94",
    "harshraj8843",
    "zackbmz",
    "Parvezkhan0",
    "jcmlumacad1",
    "Amedi-Imbira",
    "hamzambo",
    "AdeosunDeji",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-12T12:48:17Z
trackId: 5068
description: "Write a program to find the smallest two elements in an array."
---

## Table of contents

## Write a program to find the smallest two elements in an array

```
Input  : arr[] = {12, 13, 1, 10, 34, 1}
Output : 1 1

Input  : arr[] = {10, 5, 10}
Output : 5 10
```

---

### C

```c
// Write a C program to find the smallest two elements in an array

#include <stdio.h>
#include <stdlib.h>

// Function to compare elements for qsort
int compare(const void * a, const void * b) {
    return (*(int*)a - *(int*)b);
}

// Function to find and print the smallest two elements
void findSmallestTwo(int arr[], int size) {
    // Sort the array
    qsort(arr, size, sizeof(int), compare);

    // Print the first two elements
    printf("Smallest two elements: %d %d\n", arr[0], arr[1]);
}

int main() {
    int arr1[] = {12, 13, 1, 10, 34, 1};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    printf("Input 1: ");
    for (int i = 0; i < size1; i++) {
        printf("%d ", arr1[i]);
    }
    printf("\n");
    findSmallestTwo(arr1, size1);

    printf("\n");

    int arr2[] = {10, 5, 10};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    printf("Input 2: ");
    for (int i = 0; i < size2; i++) {
        printf("%d ", arr2[i]);
    }
    printf("\n");
    findSmallestTwo(arr2, size2);

    return 0;
}
```

### C#

```csharp
// Write a C# program to find the smallest two elements in an array

using System;

class Program
{
    static void FindSmallestTwoElements(int[] arr)
    {
        if (arr.Length < 2)
        {
            Console.WriteLine("Array should have at least two elements.");
            return;
        }

        int smallest = int.MaxValue;
        int secondSmallest = int.MaxValue;

        foreach (int num in arr)
        {
            if (num < smallest)
            {
                secondSmallest = smallest;
                smallest = num;
            }
            else if (num < secondSmallest && num != smallest)
            {
                secondSmallest = num;
            }
        }

        Console.WriteLine($"Smallest Two Elements: {smallest} {secondSmallest}");
    }

    static void Main()
    {
        int[] arr1 = { 12, 13, 1, 10, 34, 1 };
        FindSmallestTwoElements(arr1);

        int[] arr2 = { 10, 5, 10 };
        FindSmallestTwoElements(arr2);
    }
}
```

### C++

```cpp
// Write a C++ program to find the smallest two elements in an array

#include <iostream>
#include <climits>

void findSmallestTwo(int arr[], int size) {
    if (size < 2) {
        std::cout << "Array size should be at least 2." << std::endl;
        return;
    }

    int firstSmallest = INT_MAX;
    int secondSmallest = INT_MAX;

    for (int i = 0; i < size; ++i) {
        if (arr[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest == INT_MAX) {
        std::cout << "There are not enough distinct elements in the array." << std::endl;
    } else {
        std::cout << "The smallest two elements are " << firstSmallest << " and " << secondSmallest << std::endl;
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

    findSmallestTwo(arr, size);

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find the smallest two elements in an array

import 'dart:io';

void findSmallestTwo(List<int> arr) {
  if (arr.length < 2) {
    print("Array should have at least two elements.");
    return;
  }

  int smallest = (arr[0] < arr[1]) ? arr[0] : arr[1];
  int secondSmallest = (arr[0] < arr[1]) ? arr[1] : arr[0];

  for (int i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  print("Smallest two elements in the array: $smallest $secondSmallest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findSmallestTwo(array);
}


/*

Command Prompt Execution:
dart find_the_smallest_two_elements_in_an_array.dart
Enter integers for the array separated by space:
10 11 9 1 20 3
Smallest two elements in the array: 1 3

*/
```

### F#

```fsharp
// Write a F# program to find the smallest two elements in an array

let input = [ 12; 13; 1; 10; 34; 1]

let sort = List.sort input

for i = 0 to 1 do
    printfn "%d" sort.[i]
```

### Go

```go
// Write a Go program to find the smallest two elements in an array

package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(smallestTwoElements([]int{12, 13, 1, 10, 34, 1}))
    fmt.Println(smallestTwoElements([]int{10, 5, 10}))
    fmt.Println(smallestTwoElements([]int{10, 10, 10}))
}

func smallestTwoElements(arr []int) []int {
    // sort the input array in ascending order
    sort.Sort(sort.IntSlice(arr))

    // return the first 2 elements
    return arr[:2]
}
```

### Java

```java
// Write a Java program to find the smallest two elements in an array

import java.util.Arrays;

public class Main {
    // Function to find and print the smallest two elements
    public static void findSmallestTwo(int[] arr) {
        // Sort the array
        Arrays.sort(arr);

        // Print the first two elements
        System.out.println("Smallest two elements: " + arr[0] + " " + arr[1]);
    }

    public static void main(String[] args) {
        int[] arr1 = {12, 13, 1, 10, 34, 1};
        System.out.print("Input 1: ");
        for (int value : arr1) {
            System.out.print(value + " ");
        }
        System.out.println();
        findSmallestTwo(arr1);

        System.out.println();

        int[] arr2 = {10, 5, 10};
        System.out.print("Input 2: ");
        for (int value : arr2) {
            System.out.print(value + " ");
        }
        System.out.println();
        findSmallestTwo(arr2);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the smallest two elements in an array

function findTheSmallestTwoElementsInAnArray(arr) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, 2);
}

console.log(findTheSmallestTwoElementsInAnArray([12, 13, 1, 10, 34, 1]));
console.log(findTheSmallestTwoElementsInAnArray([10, 5, 10]));
```

### Perl

```perl
# Write a Perl program to find the smallest two elements in an array

@input = (12, 13, 1, 10, 34, 1);
@input = sort { $a <=> $b } @input;
if(scalar @input < 2){
    print "Array should have atleast 2 elements";
}else{
    print "@input[0],@input[1]\n";
}
```

### PHP

```php
// Write a PHP program to find the smallest two elements in an array

<?php
function findSmallestTwo($arr) {
    // Sort the array in ascending order
    sort($arr);

    // Get the first two elements
    $smallestTwo = array_slice($arr, 0, 2);

    // Print the result
    echo "Smallest two elements: " . implode(' ', $smallestTwo) . "\n";
}

// Test cases
$arr1 = array(12, 13, 1, 10, 34, 1);
$arr2 = array(10, 5, 10);

echo "Input 1: " . implode(' ', $arr1) . "\n";
findSmallestTwo($arr1);

echo "\n";

echo "Input 2: " . implode(' ', $arr2) . "\n";
findSmallestTwo($arr2);
?>
```

### Python

```python
# Write a Python program to find the smallest two elements in an array

def main():
      """
            Return the two smallest elements from a nonempty Python list (array)
            1. Sort the array
            2. Return the first two elements from the sorted array

            Asymptotic analsis
            By sorting the sequence of the elements, elements will be placed next to each other. Therefore
            1. built in function sorted guarantees a worst case running time of O(n log n)
            2. return tuple assignment is in constant time O(1)

      """
      seq = [12, 13, 1, 10, 34]                                                # Test with various sequences

      smallest, second_smallest = find_two_smallest_elements(seq)             #unpacking tuple
      print(f'Smallest: {smallest} || Second smallest: {second_smallest}')

def find_two_smallest_elements(S):
      S_sorted = sorted(S)

      return (S_sorted[0], S_sorted[1])                                       # Return in tuple form

if __name__ == '__main__':
      main()
```

### R

```r
# Write a R program to find the smallest two elements in an array

findSmallestTwo <- function(arr) {
  n <- length(arr)

  if (n < 2) {
    print("Array should have at least two elements.")
    return(NULL)
  }

  # Sort the array in ascending order
  arr <- sort(arr)

  # Output the first two elements
  cat("Smallest two elements:", arr[1], arr[2], "\n")
}

# Example usage:
arr1 <- c(12, 13, 1, 10, 34, 1)
findSmallestTwo(arr1)

arr2 <- c(10, 5, 10)
findSmallestTwo(arr2)
```

### Ruby

```ruby
# Write a Ruby program to find the smallest two elements in an array

input = [12, 13, 1, 10, 34, 1];
if input.length() <= 1
  print "Array should contain atleast 2 elements"
else
  sort = input.sort
  result = "#{sort[0].to_i},#{sort[1].to_i}"
  print result
end
```

### TypeScript

```typescript
// Write a TypeScript program to find the smallest two elements in an array

function findTheSmallestTwoElements(arr: number[]): number[] {
  if (arr.length < 2) {
    throw new Error("Array should have at least two elemnts.");
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr.slice(0, 2);
}

const numbers = [5, 2, 8, 1, 7, 3];
const smallestTwo = findTheSmallestTwoElements(numbers);

console.log("Original Array:", numbers);
console.log("Smallest Two Elements:", smallestTwo);
```
