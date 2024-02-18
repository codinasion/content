---
title: "Find The Largest Three Elements In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "f-sharp",
    "javascript",
    "kotlin",
    "typescript",
    "dart",
    "go",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "grinish21",
    "PunugupatiSaikumar",
    "mkdwl",
    "Redzwinger",
    "Shivamk034",
    "Amedi-Imbira",
    "harshraj8843",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-01T14:01:57Z
trackId: 5165
description: "Write a program to find the largest three elements in an array."
---

## Table of contents

## Write a program to find the largest three elements in an array

```
Input  : arr[] = {10, 4, 3, 50, 23, 90}
Output : 90, 50, 23

Input  : arr[] = {10, 4, 3, 50, 23, 90, 1, 100, 49}
Output : 100, 90, 50
```

---

### C

```c
// Write a C program to find the largest three elements in an array

#include <stdio.h>

void TheBigThree(int ARay[], int n)
{
    int Largest = ARay[0], secondLargest = ARay[0], thirdLargest = ARay[0];

    for (int i = 1; i < n; ++i) {
        if (ARay[i] > Largest)
        {
            thirdLargest = secondLargest;
            secondLargest = Largest;
            Largest = ARay[i];
        }
        else if (ARay[i] > secondLargest)
        {
            thirdLargest = secondLargest;
            secondLargest = ARay[i];
        }
        else if (ARay[i] > thirdLargest)
        {
            thirdLargest = ARay[i];
        }
    }

    printf("\n The three largest elements are: %d, %d, %d\n", Largest, secondLargest, thirdLargest);
}

int main()
{
    int n;
    printf("\n [Note: The Array should have at least three elements.]\n\n");
    printf(" Please enter the size of the array: ");
    scanf("%d", &n);

    if (n < 3)
    {
        printf("\n ERROR! Input Array Size < 3 \n");
        return 1;
    }

    int* ARei = malloc(n * sizeof(int));
    printf("\n Now, enter the elements of the array:\n");

    for (int i = 0; i < n; ++i)
    {
        printf(" Element %d: ", i + 1);
        scanf("%d", &ARei[i]);
    }

    TheBigThree(ARei, n);
    free(ARei);

    return 0;
}

/* Cautiously Crafted By Redzwinger */
```

### C++

```cpp
// Write a C++ program to find the largest three elements in an array

#include <iostream>
using namespace std;

void TheBigThree(int ARay[], int n)
{
    int Largest = ARay[0], secondLargest = ARay[0], thirdLargest = ARay[0];

    for (int i = 1; i < n; ++i) {
        if (ARay[i] > Largest)
        {
            thirdLargest = secondLargest;
            secondLargest = Largest;
            Largest = ARay[i];
        }
        else if (ARay[i] > secondLargest)
        {
            thirdLargest = secondLargest;
            secondLargest = ARay[i];
        }
        else if (ARay[i] > thirdLargest)
        {
            thirdLargest = ARay[i];
        }
    }

    cout << "\n The three largest elements are: " << Largest << ", " << secondLargest << ", " << thirdLargest << "\n";
}

int main()
{
    int n;
    cout << "\n [Note: The Array should have at least three elements.]\n\n";
    cout << " Please enter the size of the array: ";
    cin >> n;

    if (n < 3)
    {
        cout << "\n ERROR! Input Array Size < 3 \n";
        return 1;
    }

    int* ARei = new int[n];
    cout << "\n Now, enter the elements of the array:\n";

    for (int i = 0; i < n; ++i)
    {
        cout << " Element " << i + 1 << ": ";
        cin >> ARei[i];
    }

    TheBigThree(ARei, n);
    delete[] ARei;

    return 0;
}

/* Cautiously Crafted By Redzwinger */
```

### Dart

```dart
// Write a Dart program to find the largest three elements in an array

import 'dart:io';

void main() {
  print("Enter the size of the array:");
  int size = int.parse(stdin.readLineSync()!);

  List<int> arr = [];

  for (int i = 0; i < size; i++) {
    print("Enter element ${i + 1}:");
    int element = int.parse(stdin.readLineSync()!);
    arr.add(element);
  }

  List<int> largestThree = findLargestThreeElements(arr);

  print("The largest three elements in the array are:");
  for (int i = 0; i < largestThree.length; i++) {

    print("${i + 1}: ${largestThree[i]}");
    print(" ");
  }
}

List<int> findLargestThreeElements(List<int> arr) {
  arr.sort((a, b) => b.compareTo(a)); // Sort the array in descending order
  List<int> largestThree = [];

  for (int i = 0; i < 3 && i < arr.length; i++) {
    largestThree.add(arr[i]);
  }

  return largestThree;
}
```

### F#

```fsharp
// Write a F# program to find the largest three elements in an array

let input = [ 10; 4; 3; 50; 23; 90 ]

let sort = List.sortDescending input

for i = 0 to 2 do
    printfn "%d" sort.[i]
```

### Go

```go
// Write a Go program to find the largest three elements in an array

package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(largestThreeElements([]int{10, 4, 3, 50, 23, 90}))
    fmt.Println(largestThreeElements([]int{10, 4, 3, 50, 23, 90, 1, 100, 49}))
}

func largestThreeElements(arr []int) []int {
    // sort the input array in descending order
    sort.Sort(sort.Reverse(sort.IntSlice(arr)))

    // return the first 3 elements
    return arr[:3]
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the largest three elements in an array

function largestThreeElements(arr) {
  if (arr.length < 3) return "Input array should have alteast 3 elements";

  arr = arr.sort((a, b) => {
    return b - a;
  });
  return arr.slice(0, 3);
}

console.log(largestThreeElements([10, 4, 3, 50, 23, 90]));
```

### Kotlin

```kotlin
// Write a Kotlin program to find the largest three elements in an array

fun findLargestThreeElements(arr: IntArray) {
    if (arr.size < 3) {
        println("Array size should be at least 3.")
        return
    }

    // Sort the array in descending order
    arr.sortDescending()

    // Print the first three elements
    println("Largest three elements in the array are:")
    for (i in 0 until 3) {
        print("${arr[i]}, ")
    }
}

fun main() {
    val arr1 = intArrayOf(10, 4, 3, 50, 23, 90)
    findLargestThreeElements(arr1)

    val arr2 = intArrayOf(10, 4, 3, 50, 23, 90, 1, 100, 49)
    findLargestThreeElements(arr2)
}
```

### PHP

```php
// Write a PHP program to find the largest three elements in an array

<?php
$input = array(10, 4, 3, 50, 23, 90);

if(count($input) < 3 ) {
    echo "Array should have a minimum of 3 elements";
} else {
rsort($input);
$arrlength = count($input);
echo $input[0].",".$input[1].",".$input[2];
}
?>
```

### Python

```python
# Write a Python program to find the largest three elements in an array

def main():
      seq = [10, 4, 3, 50, 23, 90, 1, 100, 49]
      print(largest_three_elements(seq))

def largest_three_elements(S):
      """ Return the three largest elements of sequence S """
      max1 = S[0]
      max2 = S[0]
      max3 = S[0]

      for val in S:
            if val > max1:
                  max3 = max2
                  max2 = max1
                  max1 = val
            elif val > max2:
                  max3 = max2
                  max2 = val
            elif val > max3:
                  max3 = val
      return (max1, max2, max3)

if __name__ == '__main__':
      main()
```

### R

```r
# Write a R program to find the largest three elements in an array

TheBigThree <- function(ARay)
  {
  if (length(ARay) < 3)
    {
    stop("ERROR! Input Array Size < 3")
  }

  sorted_arr <- sort(ARay, decreasing = TRUE)

  largest_three <- sorted_arr[1:3]

  cat("Output: ", paste(largest_three, collapse = ", "), "\n")
}

ARay <- c(10, 4, 3, 50, 23, 90)
TheBigThree(ARay)

ARay2 <- c(10, 4, 3, 50, 23, 90, 1, 100, 49)
TheBigThree(ARay2)

# Cautiously Crafted By Redzwinger #
```

### Rust

```rust
// Write a Rust program to find the largest three elements in an array

use std::io;

fn main() {
    println!("Enter the size of the array:");
    let mut size = String::new();
    io::stdin().read_line(&mut size).expect("Failed to read line");
    let size: usize = size.trim().parse().expect("Invalid input");
    let mut numbers = Vec::new();

    println!("Enter {} elements:", size);
    for _ in 0..size {
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line");
        let number: i32 = input.trim().parse().expect("Invalid input");
        numbers.push(number);
    }
    numbers.sort_by(|a, b| b.cmp(a));


    println!("The largest three elements are:");
    for i in 0..3 {
        println!("{}", numbers[i]);
    }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find the largest three elements in an array

function findLargestThreeElements(arr: number[]): number[] {
  if (arr.length < 3) {
    throw new Error("Array should have at least three elements");
  }

  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Return the first three elements
  return arr.slice(0, 3);
}

const test_input: number[] = [10, 4, 3, 50, 23, 90];
const test_output: number[] = findLargestThreeElements(test_input);
console.log("Input:", test_input);
console.log("Output:", test_output);
```
