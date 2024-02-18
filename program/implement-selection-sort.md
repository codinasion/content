---
title: "Implement Selection Sort"
languages: ["c", "java", "kotlin", "julia", "dart", "php", "python", "rust"]
contributors:
  [
    "harshraj8843",
    "SaifullahBijapur",
    "Shivamk034",
    "MohitKambli",
    "bharathbarma94",
    "SapirKro",
    "ExileAS",
    "Amedi-Imbira",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 5327
description: "Write a program to implement selection sort."
---

## Table of contents

## Write a program to implement selection sort

Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

### Pseudocode

```
procedure selection sort
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i

      /* check the element to be minimum */

      for j = i+1 to n
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for

end procedure
```

### Example

```
Input  : [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
Output : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

### C

```c
// Write a C program to implement selection sort

#include <stdio.h>

// Function declarations
void swap(int *x, int *y);
void selectionSort(int arr[], size_t n);
void printArray(const int arr[], size_t size);

int main() {
    // Sample array to be sorted
    int arr[] = {8, 5, 2, 6, 9, 3, 1, 4, 0, 7};
    size_t n = sizeof(arr) / sizeof(arr[0]);

    // Sorting the array using the selection sort algorithm
    selectionSort(arr, n);

    // Displaying the sorted array
    printf("Sorted array: \n");
    printArray(arr, n);

    return 0;
}

// Function to swap two integers
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

// Function to perform selection sort on an array
void selectionSort(int arr[], size_t n) {
    // Traverse through all array elements
    for (size_t i = 0; i < n; i++) {
        // set current element as minimum
        size_t min_index = i;

        // Compare with the rest of the elements
        for (size_t j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // Swap the found minimum element with the current element
        if (min_index != i) {
            swap(&arr[min_index], &arr[i]);
        }
    }
}

// Function to print elements of an array
void printArray(const int arr[], size_t size) {
    for (size_t i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
```

### Dart

```dart
// Write a Dart program to implement selection sort

import 'dart:io';

void selectionSort(List<int> list) {
  int n = list.length;

  for (int i = 0; i < n - 1; i++) {
    int min = i;
    for (int j = i + 1; j < n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min != i) {
      int temp = list[min];
      list[min] = list[i];
      list[i] = temp;
    }
  }
}

void main() {
  print("Enter the integers separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> inputList = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();
  print("Input List: $inputList");
  selectionSort(inputList);
  print("Sorted List: $inputList");
}

/*

Command Prompt Execution:
dart implement_selection_sort.dart
Enter the integers separated by space:
9 4 10 1 5 2
Input List: [9, 4, 10, 1, 5, 2]
Sorted List: [1, 2, 4, 5, 9, 10]

*/
```

### Java

```java
// Write a Java program to implement selection sort

public class SelectionSort {

    public static void main(String[] args) {
        int[] sortedArray = selectionSort([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
        printArray(sortedArray);
    }

    public static int[] selectionSort(int[] list) {
        for (int i = 0; i < list.length - 1; i++) {
            int minInd = i;

            for (int j = i + 1; j < list.length; j++) {
                if (arr[j] < arr[minInd]) {
                    minInd = j;
                }
            }

            if (minInd != i) {
                int temp = arr[i];
                arr[i] = arr[minInd];
                arr[minInd] = temp;
            }
        }

        return arr;
    }

    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
```

### Julia

```julia
# Write a Julia program to implement selection sort

function selection_sort(arr)
    n = length(arr)

    for i in 1:n-1
        # Find the minimum element in the unsorted section of the array
        min_index = i
        for j in i+1:n
            if arr[j] < arr[min_index]
                min_index = j
            end
        end

        # Swap the minimum element with the first element
        if min_index != i
            arr[i], arr[min_index] = arr[min_index], arr[i]
        end
    end

    return arr
end

# Example describing the Selection Sort
arr = [64, 25, 12, 22, 11]
sorted_arr = selection_sort(arr)
println("Sorted array: ", sorted_arr)
```

### Kotlin

```kotlin
// Write a Kotlin program to implement selection sort

fun selectionSort(arr: IntArray) {
    val n = arr.size

    for (i in 0 until n - 1) {
        // Assume the current element is the minimum
        var minIndex = i

        // Check the rest of the array for a smaller element
        for (j in i + 1 until n) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // Swap the minimum element with the current element
        if (minIndex != i) {
            val temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
}

fun main() {
    // Example usage
    val arrayToSort = intArrayOf(64, 25, 12, 22, 11)

    println("Original Array: ${arrayToSort.joinToString()}")

    selectionSort(arrayToSort)

    println("Sorted Array: ${arrayToSort.joinToString()}")
}
```

### PHP

```php
// Write a PHP program to implement selection sort

<?php

function selectionSort(&$arr) {
    $n = count($arr);

    for ($i = 0; $i < $n - 1; $i++) {
        $min = $i;

        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j] < $arr[$min]) {
                $min = $j;
            }
        }

        // Swap the minimum element with the current element
        if ($min != $i) {
            $temp = $arr[$min];
            $arr[$min] = $arr[$i];
            $arr[$i] = $temp;
        }
    }
}

// Example usage:
$inputArray = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

echo "Input Array: [" . implode(", ", $inputArray) . "]\n";

selectionSort($inputArray);

echo "Sorted Array: [" . implode(", ", $inputArray) . "]\n";

?>
```

### Python

```python
# Write a Python program to implement selection sort

def main() -> None:
      pass

def selection_sort(collection: list[int]) -> list[int]:

      """
      Sorts a list in ascending order using the selection sort algorithm.

      :param collection: A list of integers to be sorted.
      :return: The sorted list.

      Examples:
      selection_sort([0, 5, 3, 2, 2])
      [0, 2, 2, 3, 5]
      """

      length = len(collection)
      for i in range(length-1):
            min_index = i
            for k in range(i+1, length):
                  if collection[k] < collection[min_index]:
                        min_index = k
            if min_index != i:
                  collection[i], collection[min_index] = collection[min_index], collection[i]
      return collection

if __name__ == '__main__':
      user_input = input("Enter numbers separated by a comma:\n").strip()
      unsorted = [int(item) for item in user_input.split(",")]
      sorted_list = selection_sort(unsorted)
      print("Sorted List:", sorted_list)
```

### Rust

```rust
// Write a Rust program to implement selection sort

use std::io;

fn selection_sort(arr: &mut Vec<i32>) {
    let n = arr.len();

    for i in 0..n {
        let mut min_index = i;

        for j in i + 1..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }

        if min_index != i {
            arr.swap(i, min_index);
        }
    }
}

fn main() {
    // Take user input for the array
    let mut numbers = Vec::new();
    println!("Enter numbers separated by spaces:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    for num in input.trim().split_whitespace() {
        if let Ok(n) = num.parse::<i32>() {
            numbers.push(n);
        }
    }

    println!("Original array: {:?}", numbers);

    selection_sort(&mut numbers);

    println!("Sorted array: {:?}", numbers);
}
```
