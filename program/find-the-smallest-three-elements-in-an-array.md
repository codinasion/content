---
title: "Find The Smallest Three Elements In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "scala",
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "grinish21",
    "anandfresh",
    "MohitKambli",
    "srivamsidandu",
    "PunugupatiSaikumar",
    "joenjogu",
    "Redzwinger",
    "harshraj8843",
    "dimitris1208",
    "mktana",
    "CoffeeFrog101",
    "Amedi-Imbira",
    "zackbmz",
    "Shivamk034",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-02T13:39:38Z
trackId: 5222
description: "Write a program to find the smallest three elements in an array."
---

## Table of contents

## Write a program to find the smallest three elements in an array

```
Input  : arr[] = {10, 4, 3, 50, 23, 90}
Output : 3 4 10

Input  : arr[] = {12, 13, 1, 10, 34, 1}
Output : 1 1 10
```

---

### C

```c
// Write a C program to find the smallest three elements in an array

#include <stdio.h>

void findSmallestThree(int ARay[], int thingy)
{
    if (thingy < 3)
    {
        printf("ERROR! Input Array Size < 3\n");
        return;
    }

    int first, second, third;

    first = second = third = ARay[0];

    for (int i = 1; i < thingy; i++)
    {
        if (ARay[i] < first)
        {
            third = second;
            second = first;
            first = ARay[i];
        }
        else if (ARay[i] < second)
        {
            third = second;
            second = ARay[i];
        }
        else if (ARay[i] < third)
        {
            third = ARay[i];
        }
    }

    printf("The smallest three elements: %d %d %d\n", first, second, third);
}

int main()
{
    int ARay[] = { 10, 4, 3, 50, 23, 90 };
    int thing = sizeof(ARay) / sizeof(ARay[0]);
    findSmallestThree(ARay, thing);

    int ARay2[] = { 12, 13, 1, 10, 34, 1 };
    int thing2 = sizeof(ARay2) / sizeof(ARay2[0]);
    findSmallestThree(ARay2, thing2);

    return 0;
}

/* Cautiously Crafted By Redzwinger */
```

### C++

```cpp
// Write a C++ program to find the smallest three elements in an array

#include <iostream>
#include <algorithm>
using namespace std;

void findSmallestThree(int arr[],int size){


sort(arr,arr + size);

for (int i = 0; i < min(size, 3); ++i) {
    cout << arr[i] << " ";
}
}

int main(){

int arr[]= { 10, 4, 3, 50, 23, 90};//example used
int size = sizeof(arr) / sizeof(arr[0]);
findSmallestThree(arr, size);

return 0;



}
```

### Dart

```dart
// Write a Dart program to find the smallest three elements in an array

import 'dart:io';

void findSmallestThree(List<int> arr) {
  if (arr.length < 3) {
    print("Array should have at least three elements.");
    return;
  }

  int firstSmallest = double.maxFinite.toInt();
  int secondSmallest = double.maxFinite.toInt();
  int thirdSmallest = double.maxFinite.toInt();

  for (int i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = arr[i];
    } else if (arr[i] < thirdSmallest) {
      thirdSmallest = arr[i];
    }
  }

  print("Smallest three elements in the array: $firstSmallest $secondSmallest $thirdSmallest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findSmallestThree(array);
}


/*

Command Prompt Execution:
dart find_the_smallest_three_elements_in_an_array.dart
Enter integers for the array separated by space:
10 9 8 7 6 55 44 33 22 11 101
Smallest three elements in the array: 6 7 8

*/
```

### F#

```fsharp
// Write a F# program to find the smallest three elements in an array

let input = [ 10; 4; 3; 50; 23; 90]

let sort = List.sort input

for i = 0 to 2 do
    printfn "%d" sort.[i]
```

### Go

```go
// Write a Go program to find the smallest three elements in an array

package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(smallestThreeElements([]int{10, 4, 3, 50, 23, 90}))
    fmt.Println(smallestThreeElements([]int{12, 13, 1, 10, 34, 1}))
}

func smallestThreeElements(arr []int) []int {
    // sort the input array in ascending order
    sort.Sort(sort.IntSlice(arr))

    // return the first 3 elements
    return arr[:3]
}
```

### Java

```java
// Write a Java program to find the smallest three elements in an array

import java.util.Arrays;

class SmallestThreeNumbers {
    public static void main(String[] args) {
        // Example array of numbers
        int[] arr = {10, 4, 3, 50, 23, 90};

        // Find and print the smallest three numbers
        int[] smallestThree = findSmallestThreeElementsInAnArray(arr);
        if(arr.length >= 3 ) {
            System.out.println("Smallest three numbers: " + Arrays.toString(smallestThree));
        }
    }

    public static int[] findSmallestThreeElementsInAnArray(int[] arr) {
        if (arr.length < 3) {
            System.out.println("Array size should be at least 3");
            return null;
        }
        else if (arr.length == 3){
            return arr;
        }
        // Create a temporary array so the original stays unaffected
        int[] tempArray = Arrays.copyOf(arr, arr.length);

        // Sort the new array in ascending order
        Arrays.sort(tempArray);

        // Create a new array to store the smallest three numbers
        int[] smallestThree = new int[3];
        for (int i = 0; i < 3; i++) {
            smallestThree[i] = tempArray[i];
        }

        return smallestThree;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the smallest three elements in an array

//Write a JavaScript program to find the smallest three elements in an array
// Input  : arr[] = {10, 4, 3, 50, 23, 90}
// Output : 3 4 10

// Input  : arr[] = {12, 13, 1, 10, 34, 1}
// Output : 1 1 10

let array = [10, 4, 3, 50, 23, 90];

function threeSmallElements(num) {
  num.sort((a, b) => Math.min(a - b));
  return num.slice(0, 3);
}

console.log("the answer is", threeSmallElements(array));
```

### Kotlin

```kotlin
// Write a Kotlin program to find the smallest three elements in an array

fun main() {
    val threeSmallestElements = threeSmallestElements(arrayOf(12, 13, 1, 10, 34, 1))
    println(threeSmallestElements)
}

fun threeSmallestElements(array: Array<Int>): Array<Int> {
    return if (array.size < 3) {
        emptyArray()
    } else {
        val sortedArray = array.sortedArray()
        sortedArray.sliceArray(0..2)
    }
}
```

### Perl

```perl
# Write a Perl program to find the smallest three elements in an array

@input = (10, 4, 3, 50, 23, 90);
@input = sort { $a <=> $b } @input;
if(scalar @input < 3){
    print "Array should have atleast 3 elements";
}else{
    print "@input[0],@input[1],@input[2]\n";
}
```

### PHP

```php
// Write a PHP program to find the smallest three elements in an array

<?php
// ready to execute
function findSmallestThree($arr) {
// Sort the array in ascending order
sort($arr);

$smallestThree = array_slice($arr, 0, 3);

// Print the result
echo "Smallest three elements: " . implode(' ', $smallestThree);
}

// Test cases
$arr1 = array(10, 4, 3, 50, 23, 90);
$arr2 = array(12, 13, 1, 10, 34, 1);

echo "Input 1: " . implode(' ', $arr1) . "\n";
findSmallestThree($arr1);

echo "\n\n";

echo "Input 2: " . implode(' ', $arr2) . "\n";
findSmallestThree($arr2);
?>
```

### Python

```python
# Write a Python program to find the smallest three elements in an array

def main():
      seq = [12, 13, 1, 10, 34, 1]
      print(smallest_three_elements(seq))

def smallest_three_elements(S):
      """ Return the three smallest elements of sequence S """
      min1 = S[0]
      min2 = S[0]
      min3 = S[0]

      for val in S:
            if val < min1:
                  min3 = min2
                  min2 = min1
                  min1 = val
            elif val < min2:
                  min3 = min2
                  min2 = val
            elif val < min3:
                  min3 = val
      return (min1, min2, min3)

if __name__ == '__main__':
      main()
```

### Ruby

```ruby
# Write a Ruby program to find the smallest three elements in an array

input = [10, 4, 3, 50, 23, 90];
if input.length() < 2
  print "Array should contain atleast 3 elements"
else
  sort = input.sort
  result = "#{sort[0].to_i},#{sort[1].to_i},#{sort[2].to_i}"
  print result
end
```

### Rust

```rust
// Write a Rust program to find the smallest three elements in an array

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
    numbers.sort();

    println!("The smallest three elements are:");
    for i in 0..3 {
        println!("{}", numbers[i]);
    }
}
```

### Scala

```scala
// Write a Scala program to find the smallest three elements in an array

import scala.io.StdIn.readLine

object SmallestThreeElements {
  def main(args: Array[String]): Unit = {
    println("Enter array elements separated by space:")
    val input = readLine()
    val arr = input.split(" ").map(_.toInt)

    // Initialize variables to store the smallest elements
    var firstMin = Int.MaxValue
    var secondMin = Int.MaxValue
    var thirdMin = Int.MaxValue

    // Loop to find the smallest elements
    for (num <- arr) {
      if (num < firstMin) {
        thirdMin = secondMin
        secondMin = firstMin
        firstMin = num
      } else if (num < secondMin) {
        thirdMin = secondMin
        secondMin = num
      } else if (num < thirdMin) {
        thirdMin = num
      }
    }

    // Print the result
    println("Smallest three elements are:")
    println(s"$firstMin $secondMin $thirdMin")
  }
}

SmallestThreeElements.main(Array())
```

### TypeScript

```typescript
// Write a TypeScript program to find the smallest three elements in an array

function findSmallestThreeElements(arr: number[]): number[] {
  if (arr.length < 3) {
    throw new Error("Array should have at least three elements");
  }

  const sortedArray = arr.slice().sort((a, b) => a - b);

  return sortedArray.slice(0, 3);
}

// Example usage
const example_input_array = [10, 5, 8, 2, 7, 1, 3];
const output_array = findSmallestThreeElements(example_input_array);
console.log("Smallest three elements:", output_array);
```
