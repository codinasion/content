---
title: "Implement Binary Search"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "scala",
    "dart",
    "go",
    "python",
    "rust",
  ]
contributors:
  [
    "Parvezkhan0",
    "grinish21",
    "srini696",
    "srivamsidandu",
    "Redzwinger",
    "prathebaAT",
    "amananand20",
    "Shivamk034",
    "Amedi-Imbira",
    "harshraj8843",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-19T07:18:44Z
trackId: 5192
description: "Write a program to implement binary search."
---

## Table of contents

## Write a program to implement binary search

Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.

Binary search looks for a particular item by comparing the middle most item of the collection. If a match occurs, then the index of item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero.

### Pseudocode

```
procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set lowerBound = 1
   Set upperBound = n

   while x not found
      if upperBound < lowerBound
         EXIT: x does not exists.

      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2

      if A[midPoint] < x
         set lowerBound = midPoint + 1

      if A[midPoint] > x
         set upperBound = midPoint - 1

      if A[midPoint] = x
         EXIT: x found at location midPoint
   end while

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
// Write a C program to implement binary search

#include <stdio.h>

int binarySearch(int ARay[], int thing, int findThis)
{
    int lowerBound = 0;
    int upperBound = thing - 1;

    while (lowerBound <= upperBound)
    {
        int mid = lowerBound + (upperBound - lowerBound) / 2;

        if (ARay[mid] == findThis)
        {
            return mid;
        }
        else if (ARay[mid] < findThis)
        {
            lowerBound = mid + 1;
        }
        else
        {
            upperBound = mid - 1;
        }
    }
    return -1;
}

int main()
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int thing = sizeof(ARay) / sizeof(ARay[0]);
    int findThis = 4;

    int neededThing = binarySearch(ARay, thing, findThis);

    if (neededThing != -1)
    {
        printf("Element found! It is located at index %d\n", neededThing);
    }
    else
    {
        printf("ERROR! The given element does not exist in the current array :(\n");
    }
    return 0;
}

/* Cautiously Crafted By Redzwinger */
```

### C#

```csharp
// Write a C# program to implement binary search

using System;

public class HelloWorld
{
    static int BinarySearch(int[] array, int size, int value)
    {
        int lowerBound = 0;
        int upperBound = size - 1;

        while (lowerBound <= upperBound)
        {
            int midPoint = lowerBound + (upperBound - lowerBound) / 2;

            if (array[midPoint] < value)
            {
                lowerBound = midPoint + 1;
            }
            else if (array[midPoint] > value)
            {
                upperBound = midPoint - 1;
            }
            else
            {
                return midPoint;
            }
        }

        return -1;
    }

    static void Main()
    {
        Console.Write("Enter sorted array elements separated by space: ");
        string[] inputArray = Console.ReadLine().Split(' ');

        int[] array = Array.ConvertAll(inputArray, int.Parse);

        Console.Write("Enter the value to search: ");
        int valueToSearch = int.Parse(Console.ReadLine());

        int index = BinarySearch(array, array.Length, valueToSearch);

        if (index != -1)
        {
            Console.WriteLine($"Value {valueToSearch} found at index {index}.");
        }
        else
        {
            Console.WriteLine($"Value {valueToSearch} not found in the array.");
        }
    }


}
```

### C++

```cpp
// Write a C++ program to implement binary search

#include <bits/stdc++.h>
using namespace std;

int binarySearch(int arr[], int size, int key) {
  int low = 0;
  int high = size - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

int main() {
  int size;
  cout << "Enter the size of the array: ";
  cin >> size;
  int arr[size];
  cout << "Enter the elements of the array in sorted order:\n";
  for (int i = 0; i < size; ++i) {
    cout << "Enter element " << (i + 1) << ": ";
    cin >> arr[i];
  }
  int key;
  cout << "Enter the key to search: ";
  cin >> key;
  int result = binarySearch(arr, size, key);
  if (result != -1) {
    cout << "Element found at index: " << result << endl;
  } else {
    cout << "Element not found in the array." << endl;
  }
  return 0;
}
```

### Dart

```dart
// Write a Dart program to implement binary search

int binarySearch(List<int> arr, int x) {
  int lowerBound = 0;
  int upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    int midPoint = (lowerBound + upperBound) ~/ 2;

    if (arr[midPoint] == x) {
      return midPoint;                //Element found return it's index
    } else if (arr[midPoint] < x) {
      lowerBound = midPoint + 1;      //Search in the right half
    } else {
      upperBound = midPoint - 1;      //Search in the left half
    }
  }
  return -1;
}

void main() {
  //Example Usage
  List<int> sortedArray = [1, 2, 3, 4, 5];
  int valueToSearch = 4;

  int resultIndex = binarySearch(sortedArray, valueToSearch);

  if (resultIndex != -1) {
    print('Elemenet $valueToSearch found at index $resultIndex');
  } else {
    print('Element $valueToSearch not found in the array');
  }
}
```

### Go

```go
// Write a Go program to implement binary search

package main

import (
    "fmt"
)

func binarySearch(sortedArray []int, findThis int) int {
    lowerBound := 0
    upperBound := len(sortedArray) - 1

    for lowerBound <= upperBound {
        mid := lowerBound + (upperBound-lowerBound)/2

        if sortedArray[mid] == findThis {
            return mid
        } else if sortedArray[mid] < findThis {
            lowerBound = mid + 1
        } else {
            upperBound = mid - 1
        }
    }
    return -1
}

func main() {
    sortedArray := []int{1, 2, 3, 4, 5, 6, 7}
    searchForNumber := 4
    foundAtIndex := binarySearch(sortedArray, searchForNumber)

    if foundAtIndex != -1 {
        fmt.Printf("Element %d located at index %d\n", searchForNumber, foundAtIndex)
    } else {
        fmt.Printf("Element %d not found !!!", searchForNumber)
    }
}

/* Cautiously Crafted By Redzwinger */
```

### Java

```java
// Write a Java program to implement binary search

import java.util.Scanner;
import java.util.Arrays;

public class ImplementBinarySearch {

    public static int binarysearch(int arr[],int value){

        int low = 0;
        int high = arr.length - 1;

        while(low <= high){
            int mid = (low+high)/2;

            if(arr[mid] == value){
                return mid;
            }
           else if(value < arr[mid]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }

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

        int result = binarysearch(inputArray, searchValue);

        if(result != -1){
            System.out.println("Element found at index: " + result);
        }
        else{
            System.out.println("Element not found in the array.");
        }

        scanner.close();


    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to implement binary search

function binarySearch(arr, x) {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (arr[midPoint] === x) {
      return midPoint; // Element found, return index
    } else if (arr[midPoint] < x) {
      lowerBound = midPoint + 1; // Search in the right half
    } else {
      upperBound = midPoint - 1; // Search in the left half
    }
  }

  return -1; // Element not found
}

// Example usage
const list = [1, 2, 3, 4, 5];
const value = 4;

const index = binarySearch(list, value);
if (index !== -1) {
  console.log("Output:", index); // Output: 3
} else {
  console.log("Element not found.");
}
```

### Python

```python
# Write a Python program to implement binary search

def main():
      seq = 1, 2, 3, 4, 5, 6, 7           # Test here. Seq should be sorted
      print(binary_search(seq, 90))

def binary_search(data, target):
      """
            locating a target value within a sorted sequence
            return True if target is found
      """
      left = 0
      right = len(data)-1

      while left <= right:
            mid = (left + right) // 2
            if target == data[mid]:                   # Found match!
                  return True
            elif target < data[mid]:                  # Search values left of mid
                  right = mid-1
            else:                                     # Search values right of mid
                  left = mid+1
      return False                                    # loop ended without success

if __name__ == '__main__':
      main()
```

### Rust

```rust
// Write a Rust program to implement binary search

use std::io;

fn binary_search(arr: &[i32], key: i32) -> Option<usize> {
  let mut low = 0;
  let mut high = arr.len() - 1;

  while low <= high {
    let mid = low + (high - low) / 2;

    if arr[mid] == key {
      return Some(mid);
    } else if arr[mid] < key {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  None
}

fn main() {
  let size: usize = read_input();
  let mut arr = read_array(size);
  let key: i32 = read_input();

  match binary_search(&arr, key) {
    Some(result) => println!("Element found at index: {}", result),
    None => println!("Element not found in the array."),
  }
}

fn read_input<T>() -> T
where
  T: std::str::FromStr,
  T::Err: std::fmt::Debug,
{
  let mut input = String::new();
  io::stdin().read_line(&mut input).expect("Failed to read input");
  input.trim().parse().expect("Invalid input")
}

fn read_array(size: usize) -> Vec<i32> {
  (0..size)
    .map(|_| read_input())
    .collect()
}
```

### Scala

```scala
// Write a Scala program to implement binary search

object HelloWorld {

  def binarySearch(arr: Array[Int], n: Int, x: Int): Int = {
    var lowerBound = 0
    var upperBound = n - 1

    while (lowerBound <= upperBound) {
      val midPoint = lowerBound + (upperBound - lowerBound) / 2

      if (arr(midPoint) < x)
        lowerBound = midPoint + 1
      else if (arr(midPoint) > x)
        upperBound = midPoint - 1
      else
        return midPoint // Element found
    }

    -1 // Element not found
  }

  def main(args: Array[String]): Unit = {
    // User input
    print("Enter the sorted array (comma-separated): ")
    val inputArray = scala.io.StdIn.readLine().split(",").map(_.toInt)

    print("Enter the size of the array: ")
    val size = scala.io.StdIn.readInt()

    print("Enter the value to be searched: ")
    val valueToSearch = scala.io.StdIn.readInt()

    val result = binarySearch(inputArray, size, valueToSearch)

    if (result != -1)
      println(s"Element $valueToSearch found at index $result")
    else
      println(s"Element $valueToSearch not found in the array")
  }
}
```
