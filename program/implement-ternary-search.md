---
title: "Implement Ternary Search"
languages:
  [
    "c",
    "c-plus-plus",
    "f-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "Parvezkhan0",
    "srivamsidandu",
    "chintanrupareliya",
    "Redzwinger",
    "prathebaAT",
    "harshraj8843",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-30T18:18:54Z
trackId: 5108
description: "Write a program to implement ternary search."
---

## Table of contents

## Write a program to implement ternary search

Ternary search is a divide and conquer algorithm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key (searched element).

### Pseudocode

```
procedure ternary_search
   A ← sorted array
   value ← value to be searched
   l ← leftmost index
   r ← rightmost index

   while l ≤ r do

      partition size = (r-l)/3
      mid1 = l + partition_size
      mid2 = r - partition_size

      if A[mid1] = value
         return mid1

      if A[mid2] = value
         return mid2

      if value < A[mid1]
         set r = mid1 - 1

      else if value > A[mid2]
         set l = mid2 + 1

      else
         set l = mid1 + 1
         set r = mid2 - 1

   end while

   return -1
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
// Write a C program to implement ternary search

#include <stdio.h>

int ternary_search(int A[], int n, int value) {
    int l = 0;
    int r = n - 1;

    while (l <= r) {
        int partition_size = (r - l) / 3;
        int mid1 = l + partition_size;
        int mid2 = r - partition_size;

        if (A[mid1] == value)
            return mid1;

        if (A[mid2] == value)
            return mid2;

        if (value < A[mid1])
            r = mid1 - 1;
        else if (value > A[mid2])
            l = mid2 + 1;
        else {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    return -1;
}

int main() {
    int n;

    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int A[n];

    printf("Enter the sorted array elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &A[i]);
    }

    int value;

    printf("Enter the value to be searched: ");
    scanf("%d", &value);

    int result = ternary_search(A, n, value);

    if (result != -1)
        printf("Element found at index %d\n", result);
    else
        printf("Element not found\n");

    return 0;
}
```

### C++

```cpp
// Write a C++ program to implement ternary search

#include <iostream>
using namespace std;

int ternarySearch(int ARay[], int size, int value)
{
    int l = 0;
    int r = size - 1;

    while (l <= r)
    {
        int halfIsgood = (r - l) / 3;
        int mid1 = l + halfIsgood;
        int mid2 = r - halfIsgood;

        if (ARay[mid1] == value)
        {
            return mid1;
        }

        if (ARay[mid2] == value)
        {
            return mid2;
        }

        if (value < ARay[mid1])
        {
            r = mid1 - 1;
        }
        else if (value > ARay[mid2])
        {
            l = mid2 + 1;
        }
        else
        {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    return -1;
}

int main()
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int size_ARay = sizeof(ARay) / sizeof(ARay[0]);
    int findThis = 4;

    int ansThing = ternarySearch(ARay, size_ARay, findThis);

    if (ansThing != -1)
    {
        cout << "Element found! It is located at index " << ansThing << endl;
    }
    else
    {
        cout << "ERROR! The given element does not exist in the current array :(" << endl;
    }

    return 0;
}

/* Cautiously Crafted By Redzwinger */
```

### F#

```fsharp
// Write a F# program to implement ternary search

let rec ternary_search (arr: int array) (value: int) (left: int) (right: int) =
    if left <= right then
        let partition_size = (right - left) / 3
        let mid1 = left + partition_size
        let mid2 = right - partition_size

        if arr.[mid1] = value then
            mid1
        elif arr.[mid2] = value then
            mid2
        elif value < arr.[mid1] then
            ternary_search arr value left (mid1 - 1)
        elif value > arr.[mid2] then
            ternary_search arr value (mid2 + 1) right
        else
            ternary_search arr value (mid1 + 1) (mid2 - 1)
    else
        -1

// Example usage
let list = [|1; 2; 3; 4; 5|]
let value = 4

let result = ternary_search list value 0 (Array.length list - 1)

printfn "List: %A" list
printfn "Value to be searched: %d" value
printfn "Output: %d" result
```

### Java

```java
// Write a Java program to implement ternary search

import java.util.Arrays;
import java.util.Scanner;

public class ImplementTernarySearch {
    public static int ternarySearch(int[] arr, int value) {
        int l = 0;
        int r = arr.length - 1;

        while (l <= r) {
            int partitionSize = (r - l) / 3;
            int mid1 = l + partitionSize;
            int mid2 = r - partitionSize;

            if (arr[mid1] == value) {
                return mid1;
            }

            if (arr[mid2] == value) {
                return mid2;
            }

            if (value < arr[mid1]) {
                r = mid1 - 1;
            } else if (value > arr[mid2]) {
                l = mid2 + 1;
            } else {
                l = mid1 + 1;
                r = mid2 - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        int[] inputArray = new int[size];

        System.out.println("Enter the elements of the  array:");
        for (int i = 0; i < size; i++) {
            inputArray[i] = scanner.nextInt();
        }

        // Sort the array using Arrays.sort()
        Arrays.sort(inputArray);

        System.out.print("Enter the value to search: ");
        int searchValue = scanner.nextInt();

        int result = ternarySearch(inputArray, searchValue);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found in the array.");
        }

        scanner.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to implement ternary search

const ImplementTernarySearch = (array, value) => {
  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    let mid1 = Math.floor(l + (r - l) / 3);
    let mid2 = Math.floor(r - (r - l) / 3);
    if (array[mid1] == value) {
      return mid1;
    }
    if (array[mid2] == value) {
      return mid2;
    }
    if (value < array[mid1]) {
      r = mid1 - 1;
    } else if (value > array[mid2]) {
      l = mid2 + 1;
    } else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }
};

// For Example
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = 5;
const result = ImplementTernarySearch(array, value);
if (result) {
  console.log("Value Found at index : " + result);
} else {
  console.log("Value Not Found");
}
```

### PHP

```php
// Write a PHP program to implement ternary search

<?php

function ternary_search($arr, $value) {
    $left = 0;
    $right = count($arr) - 1;

    while ($left <= $right) {
        $partition_size = ($right - $left) / 3;
        $mid1 = $left + $partition_size;
        $mid2 = $right - $partition_size;

        if ($arr[$mid1] === $value) {
            return $mid1;
        }

        if ($arr[$mid2] === $value) {
            return $mid2;
        }

        if ($value < $arr[$mid1]) {
            $right = $mid1 - 1;
        } elseif ($value > $arr[$mid2]) {
            $left = $mid2 + 1;
        } else {
            $left = $mid1 + 1;
            $right = $mid2 - 1;
        }
    }

    return -1;
}

// Example usage
$list = [1, 2, 3, 4, 5];
$value = 4;
$result = ternary_search($list, $value);

if ($result !== -1) {
    echo "Element found at index: $result";
} else {
    echo "Element not found in the array";
}

?>
```

### Python

```python
# Write a Python program to implement ternary search

def ternary_search(arr, value):
    l, r = 0, len(arr) - 1

    while l <= r:
        partition_size = (r - l) // 3
        mid1 = l + partition_size
        mid2 = r - partition_size

        if arr[mid1] == value:
            return mid1

        if arr[mid2] == value:
            return mid2

        if value < arr[mid1]:
            r = mid1 - 1
        elif value > arr[mid2]:
            l = mid2 + 1
        else:
            l = mid1 + 1
            r = mid2 - 1

    return -1

# Example usage
arr = [1, 2, 3, 4, 5]
value = 4
result = ternary_search(arr, value)

if result != -1:
    print(f"Element {value} found at index {result}")
else:
    print(f"Element {value} not found in the array")
```

### R

```r
# Write a R program to implement ternary search

ternary_search <- function(A, value)
  {
  l <- 1
  r <- length(A)

  while (l <= r) {
    partition_size <- (r - l) / 3
    mid1 <- floor(l + partition_size)
    mid2 <- ceiling(r - partition_size)

    if (A[mid1] == value)
      {
      return(mid1 - 1)
    }

    if (A[mid2] == value)
      {
      return(mid2 - 1)
    }

    if (value < A[mid1])
      {
      r <- mid1 - 1
    } else if (value > A[mid2])
      {
      l <- mid2 + 1
    } else
      {
      l <- mid1 + 1
      r <- mid2 - 1
    }
  }

  return(-1)
}

sorted_array <- c(1, 2, 3, 4, 5)
search_value <- 4
result <- ternary_search(sorted_array, search_value)

if (result == -1)
  {
  cat("ERROR! The given element does not exist in the current array :(\n")
} else
  {
  cat("Element found! It is located at index", result, "\n")
}

# Cautiously Crafted By Redzwinger #
```

### Ruby

```ruby
# Write a Ruby program to implement ternary search

def ternary_search(array, value)
    left = 0
    right = array.length - 1

    while left <= right
      partition_size = (right - left) / 3
      mid1 = left + partition_size
      mid2 = right - partition_size

      return mid1 if array[mid1] == value
      return mid2 if array[mid2] == value

      if value < array[mid1]
        right = mid1 - 1
      elsif value > array[mid2]
        left = mid2 + 1
      else
        left = mid1 + 1
        right = mid2 - 1
      end
    end

    return -1
  end

  # Example
  list = [1, 2, 3, 4, 5]
  value = 4
  result = ternary_search(list, value)

  if result != -1
    puts "Element #{value} found at index #{result}"
  else
    puts "Element #{value} not found in the array"
  end
```

### Rust

```rust
// Write a Rust program to implement ternary search

fn ternary_search(arr: &[i32], value: i32) -> Option<usize> {
    let mut l = 0;
    let mut r = arr.len() - 1;

    while l <= r {
        let partition_size = (r - l) / 3;
        let mid1 = l + partition_size;
        let mid2 = r - partition_size;

        if arr[mid1] == value {
            return Some(mid1);
        }

        if arr[mid2] == value {
            return Some(mid2);
        }

        if value < arr[mid1] {
            r = mid1 - 1;
        } else if value > arr[mid2] {
            l = mid2 + 1;
        } else {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    None
}

fn main() {
    let list = vec![1, 2, 3, 4, 5];
    let value = 4;

    match ternary_search(&list, value) {
        Some(index) => println!("Output: {}", index),
        None => println!("Element not found"),
    }
}
```

### TypeScript

```typescript
// Write a TypeScript program to implement ternary search

function ternarySearch(arr: number[], value: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const partitionSize = Math.floor((right - left) / 3);
    const mid1 = left + partitionSize;
    const mid2 = right - partitionSize;

    if (arr[mid1] === value) {
      return mid1;
    }

    if (arr[mid2] === value) {
      return mid2;
    }

    if (value < arr[mid1]) {
      right = mid1 - 1;
    } else if (value > arr[mid2]) {
      left = mid2 + 1;
    } else {
      // Adjust pointers based on the comparison with the target value
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1;
}

// Example
const list = [1, 2, 3, 4, 5];
const valueToSearch = 4;

const result = ternarySearch(list, valueToSearch);

console.log(`Output: ${result}`);
```

## Similar programs

- [Implement Linear Search](/program/implement-linear-search)
- [Implement Binary Search](/program/implement-binary-search)
- [Implement Jump Search](/program/implement-jump-search)
- [Implement Selection Sort](/program/implement-selection-sort)
- [Divide Two Numbers](/program/divide-two-numbers)
- [Print Ascii Value Of A String](/program/print-ascii-value-of-a-string)
- [Print Ascii Value Of A Character](/program/print-ascii-value-of-a-character)
- [Print Character Of An Ascii Value](/program/print-character-of-an-ascii-value)
- [Print String Of Ascii Values](/program/print-string-of-ascii-values)
- [Reverse An Array](/program/reverse-an-array)
