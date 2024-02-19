---
title: "Implement Jump Search"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "typescript",
    "dart",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "bharathbarma94",
    "Shivamk034",
    "chintanrupareliya",
    "PunugupatiSaikumar",
    "srivamsidandu",
    "anandfresh",
    "anurag1807-atom",
    "av-techspot",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 5253
description: "Write a program to implement jump search."
---

## Table of contents

## Write a program to implement jump search

Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

For example, suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.

### Pseudocode

```
procedure jump_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set block size = √n

   while A[min(block size, n)-1] < x do
      prev = block size
      block size = block size + √n
      if prev >= n
         return not found

   end while

   while A[prev] < x do
      prev = prev + 1

      if prev == min(block size, n)
         return not found

   end while

   if A[prev] == x
      return prev

   return not found
end procedure
```

### Example

```
list = [1,2,3,4,5]
value = 4

Output : 3
```

---

### C

```c
// Write a C program to implement jump search

#include <stdio.h>
#include <math.h>

int jumpSearch(int arr[], int n, int x) {
    int blockSize = sqrt(n);
    int prev = 0;

    while (arr[(int)(fmin(blockSize, n) -1 )] < x) {
        prev = blockSize;
        blockSize += sqrt(n);
        if (prev >= n)
            return -1;
    }

    while (arr[prev] < x) {
        prev++;

        if (prev == fmin(blockSize, n))
            return -1;
    }

    if (arr[prev] == x)
        return prev;

    return -1;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    int x = 5;
    int result = jumpSearch(arr, n, x);

    if (result != -1)
        printf("Output: %d\n", result);
    else
        printf("Value not found in the list\n");

    return 0;
}
```

### C#

```csharp
// Write a C# program to implement jump search

using System;

class JumpSearch
{
    public static int JumpSearchFunction(int[] arr, int target)
    {
        int n = arr.Length;
        int step = (int)Math.Floor(Math.Sqrt(n));
        int prev = 0;

        while (arr[Math.Min(step, n) - 1] < target)
        {
            prev = step;
            step += (int)Math.Floor(Math.Sqrt(n));
            if (prev >= n)
                return -1;
        }

        while (arr[prev] < target)
        {
            prev++;

            if (prev == Math.Min(step, n))
                return -1;
        }

        if (arr[prev] == target)
            return prev;

        return -1;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine("Enter the number of elements in the array:");
        int n = int.Parse(Console.ReadLine());
        int[] arr = new int[n];

        Console.WriteLine("Enter the elements of the array in sorted order and enter to input next number:");
        for (int i = 0; i < n; i++)
        {
            arr[i] = int.Parse(Console.ReadLine());
        }

        Console.WriteLine("Enter the element to search:");
        int target = int.Parse(Console.ReadLine());

        int result = JumpSearchFunction(arr, target);

        if (result == -1)
        {
            Console.WriteLine("Element not found in the array.");
        }
        else
        {
            Console.WriteLine($"Element found at index {result}.");
        }
    }
}
```

### C++

```cpp
// Write a C++ program to implement jump search

#include <iostream>
#include <vector>
#include <cmath>

// Jump Search function
int jumpSearch(std::vector<int>& arr, int target) {
    int n = arr.size();
    int step = sqrt(n); // Jump step size

    int prev = 0;
    while (arr[std::min(step, n) - 1] < target) {
        prev = step;
        step += sqrt(n);
        if (prev >= n)
            return -1; // Element not found
    }

    while (arr[prev] < target) {
        prev++;
        if (prev == std::min(step, n))
            return -1; // Element not found
    }

    if (arr[prev] == target)
        return prev;

    return -1; // Element not found
}

int main() {
    std::vector<int> arr;
    int n, target;

    std::cout << "Enter the number of elements in the array: ";
    std::cin >> n;

    std::cout << "Enter " << n << " sorted elements:" << std::endl;
    for (int i = 0; i < n; i++) {
        int num;
        std::cin >> num;
        arr.push_back(num);
    }

    std::cout << "Enter the element you want to search for: ";
    std::cin >> target;

    int index = jumpSearch(arr, target);

    if (index != -1) {
        std::cout << "Element " << target << " found at index " << index << std::endl;
    } else {
        std::cout << "Element " << target << " not found in the array." << std::endl;
    }

    return 0;
}
```

### Dart

```dart
// Write a Dart program to implement jump search

import 'dart:math';

int jumpSearch(List<int> array, int x) {
  int n = array.length;
  int blockSize = sqrt(n).toInt();
  int prev = 0;

  // Jump to the right block
  while (array[min(blockSize, n) - 1] < x) {
    prev = blockSize;
    blockSize += sqrt(n).toInt();
    if (prev >= n) {
      return -1; // Element not found
    }
  }

  // Linear search within the block
  while (array[prev] < x) {
    prev++;
    if (prev == min(blockSize, n)) {
      return -1; // Element not found
    }
  }

  if (array[prev] == x) {
    return prev; // Element found at index prev
  }

  return -1; // Element not found
}

void main() {
  List<int> list = [1, 2, 3, 4, 5];
  int value = 4;

  int result = jumpSearch(list, value);

  if (result != -1) {
    print('Element $value found at index $result');
  } else {
    print('Element $value not found in the list');
  }
}
```

### Java

```java
// Write a Java program to implement jump search

import java.util.*;

public class ImplementJumpSearch {

    public static int implementJumpSearch(int[] arr, int x ){

        //calculating the block size to be jumped
        double blockSize = Math.floor(Math.sqrt(arr.length));
        int prev = 0;

        // Finding the block where element could be present
        while (arr[(int) (Math.min(blockSize, arr.length) - 1)] < x) {
            prev = (int)blockSize;
            blockSize += Math.floor(Math.sqrt(arr.length));

            if (prev >= arr.length) {
                return -1; // Element Not present
            }
        }

        // Linear search within the block
        while (arr[prev] < x) {
            prev++;

            if (prev ==Math.min(blockSize, arr.length)) {
                return -1; // Element Not present
            }
        }

        // If the element is present
        if (arr[prev] == x) {
            return prev;
        }

        return -1;
    }


    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the size of the array:");
        int size = scanner.nextInt();

        int[] inputArray = new int[size];

        System.out.println("Enter the elements of the array:");
        for(int i=0;i<size;i++){
            inputArray[i] = scanner.nextInt();
        }

        Arrays.sort(inputArray);

        System.out.println("Enter the value to search:");

        int searchValue = scanner.nextInt();

        int result = ImplementJumpSearch.implementJumpSearch(inputArray,searchValue);
        if(result==-1){
            System.out.println("value not present");
        }
        else{
            System.out.println("Element found at index: "+result);
        }
        scanner.close();

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to implement jump search

function jumpSearch(arr, a) {
  const n = arr.length;
  let blockSize = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(blockSize, n) - 1] < a) {
    prev = blockSize;
    blockSize += Math.floor(Math.sqrt(n));

    if (prev >= n) {
      return -1;
    }
  }

  while (arr[prev] < a) {
    prev++;
    if (prev === Math.min(blockSize, n)) {
      return -1;
    }
  }

  if (arr[prev] === a) {
    return prev;
  }

  return -1;
}

const input = [1, 2, 3, 4, 5];
const search = 4;
const res = jumpSearch(input, search);

if (res !== -1) {
  console.log(`Element ${search} found at index ${res}`);
} else {
  console.log(`Element ${search} not found`);
}
```

### PHP

```php
// Write a PHP program to implement jump search

<?php
function jumpSearch($arr, $x) {
    $n = count($arr);
    $blockSize = (int) sqrt($n);
    $prev = 0;

    while ($arr[min($blockSize, $n) - 1] < $x) {
        $prev = $blockSize;
        $blockSize += (int) sqrt($n);
        if ($prev >= $n) {
            return -1; // Element not found
        }
    }

    while ($arr[$prev] < $x) {
        $prev++;
        if ($prev == min($blockSize, $n)) {
            return -1;
        }
    }

    if ($arr[$prev] == $x) {
        return $prev;
    }

    return -1;
}

echo "Enter array elements separated by space: ";
$input = trim(fgets(STDIN));
$inputArray = explode(" ", $input);
$inputArray = array_map('intval', $inputArray);

echo "Enter the value to search for: ";
$searchValue = intval(trim(fgets(STDIN)));

$result = jumpSearch($inputArray, $searchValue);

if ($result == -1) {
    echo "Element not found in the array\n";
} else {
    echo "Element found at index " . $result . "\n";
}
?>
```

### Python

```python
# Write a Python program to implement jump search

import math


def jump_search(arr, x, n):
    block_size = math.sqrt(n)

    while arr[int(min(block_size, n) - 1)] < x:
        prev = block_size
        block_size += math.sqrt(n)
        if prev >= n:
            return -1

    while arr[int(prev)] < x:
        prev += 1

        if prev == min(block_size, n):
            return -1

    if arr[int(prev)] == x:
        return int(prev)

    return -1


if __name__ == '__main__':
    list = [1, 2, 3, 4, 5]
    value = 4
    n = len(list)
    print(jump_search(list, value, n))
```

### Rust

```rust
// Write a Rust program to implement jump search

use std::io;

fn jump_search(arr: &[i32], x: i32) -> Option<usize> {
    let n = arr.len();

    let block_size = (n as f64).sqrt() as usize;


    let mut block_idx = 0;
    while block_idx < n && arr[block_idx] < x {
        block_idx += block_size;
    }
    let mut i = block_idx - block_size;
    while i < n && arr[i] < x {
        i += 1;
    }
    if i < n && arr[i] == x {
        Some(i)
    } else {
        None
    }
}

fn main() {

    println!("Enter a sorted list of integers separated by spaces:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let arr: Vec<i32> = input
        .trim()
        .split_whitespace()
        .filter_map(|s| s.parse().ok())
        .collect();

    println!("Enter the element to search:");
    let mut search_element = String::new();
    io::stdin()
        .read_line(&mut search_element)
        .expect("Failed to read line");

    let x: i32 = search_element.trim().parse().expect("Invalid input");


    match jump_search(&arr, x) {
        Some(index) => println!("Element {} found at index {}", x, index),
        None => println!("Element {} not found in the list", x),
    }
}
```

### TypeScript

```typescript
// Write a TypeScript program to implement jump search

function jumpSearch(arr: number[], x: number): number {
  const n = arr.length;
  let blockSize = Math.floor(Math.sqrt(n));
  let prev = 0;

  // Jumping to the right block
  while (arr[Math.min(blockSize, n) - 1] < x) {
    prev = blockSize;
    blockSize += Math.floor(Math.sqrt(n));

    if (prev >= n) {
      return -1; // Not found
    }
  }

  // Linear search within the block
  while (arr[prev] < x) {
    prev++;

    if (prev === Math.min(blockSize, n)) {
      return -1; // Not found
    }
  }

  // If the element is found
  if (arr[prev] === x) {
    return prev;
  }

  return -1; // Not found
}

// Example usage
const exampleInput = [1, 2, 3, 4, 5];
const valueToSearch = 4;
const res = jumpSearch(exampleInput, valueToSearch);

if (res !== -1) {
  console.log(`Element ${valueToSearch} found at index ${res}`);
} else {
  console.log(`Element ${valueToSearch} not found`);
}
```

## Similar programs

- [Implement Linear Search](/program/implement-linear-search)
- [Move All Zeroes To End Of Array](/program/move-all-zeroes-to-end-of-array)
- [Implement Ternary Search](/program/implement-ternary-search)
- [Implement Binary Search](/program/implement-binary-search)
- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Find The Smallest Three Elements In An Array](/program/find-the-smallest-three-elements-in-an-array)
- [Implement Selection Sort](/program/implement-selection-sort)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Find The Largest Three Elements In An Array](/program/find-the-largest-three-elements-in-an-array)
