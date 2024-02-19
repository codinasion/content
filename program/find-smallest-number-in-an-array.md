---
title: "Find Smallest Number In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "vinodr03",
    "esivakumar18",
    "jfinley6",
    "vedantpople4",
    "hi-Kartik2004",
    "hugosmoreira",
    "sureshsgith",
    "mrajen27",
    "castanedadev-edu",
    "Marsh-sudo",
    "thongncvn",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-02T17:59:34Z
trackId: 3942
description: "Write a program to find smallest number in an array."
---

## Table of contents

## Write a program to find smallest number in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 1
```

---

### C

```c
// Write a C program to find smallest number in an array

#include <stdio.h>

int main()
{
    //Initialize array
    int arr[] = {1, 2, 3, 4, 5};

    //Calculate length of array arr
    int length = sizeof(arr)/sizeof(arr[0]);

    //Initialize min with first element of array.
    int min = arr[0];

    //Loop through the array
    for (int i = 0; i < length; i++) {
        //Compare elements of array with min
       if(arr[i] < min)
           min = arr[i];
    }
    printf("Smallest element present in given array: %d\n", min);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find smallest number in an array

using System;
using System.Linq;
class Smallest {
   static void Main() {
      int[] arr = { 1, 2, 3, 4, 5 };
      Console.WriteLine(arr.Min());
   }
}
```

### C++

```cpp
// Write a C++ program to find smallest number in an array

// Programme to find the smallest element in the array...
#include <bits/stdc++.h>
#define ll long long // For typing ease.
using namespace std;

int main(){
    // Taking array limit input:
    cout<<"Enter the length of the array :";
    ll n;   cin>>n;
    ll a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    //Finding the smallest element present in the array :

    ll min = INT_MAX;
    for(int i=0;i<n;i++){
        if(a[i]<min){
            min=a[i];
        }
    }

    //Returning the value :
    cout<<"The smallest element present in the array is : "<<min<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### F#

```fsharp
// Write a F# program to find smallest number in an array

let numbers =[|1..5|]

printfn "%A"  (numbers |> Array.min)
```

### Go

```go
// Write a Go program to find smallest number in an array

package main

import "fmt"

func main() {
	var size, i int
	fmt.Scan(&size)
	arr := make([]int, size)
	for i = 0; i < size; i++ {
		fmt.Scan(&arr[i])
	}
	small := arr[0]
	for i = 0; i < size; i++ {
		if small > arr[i] {
			small = arr[i]
		}
	}
	fmt.Println(small)
}
```

### Java

```java
// Write a Java program to find smallest number in an array

import java.util.Scanner;

class FindSmallestNumberInAnArray {
	public static void main(String[] args) {
		System.out.println(FindSmallestNumberInAnArray.findSmallestNumber(new double[] { 100, 50.25, 10, 76, 3 }));
	}

	private static double findSmallestNumber(double[] array) {
		double smallest = array[0];

		for (int i = 0; i < array.length; i++) {
			double currentItem = array[i];

			if (currentItem < smallest) {
				smallest = currentItem;
			}
		}
		return smallest;
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to find smallest number in an array

function findSmallestNumberInAnArray(arr) {
  let smallestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  console.log(smallestNumber);
}

findSmallestNumberInAnArray([1, 2, 3, 4, 5]);
```

### Julia

```julia
# Write a Julia program to find smallest number in an array

array = [1,2,3,4,5]
smallest_element = sort(array)
println("The smallest number is : ", smallest_element[1])
```

### Kotlin

```kotlin
// Write a Kotlin program to find smallest number in an array

fun main() {
    val arr = arrayOf(1, 2, 3, 4, 5)
    val ints = arr.toList()

    println("Minimum: ${ints.min()}")
}
```

### Perl

```perl
# Write a Perl program to find smallest number in an array

use List::Util qw(min max);
my @arr = (1,2,3,4,5);
print "Smallest number : ".min(@arr);
```

### PHP

```php
// Write a PHP program to find smallest number in an array

<?php

function smallestNumber($array) {
  sort($array);
  return $array[0];
}

echo smallestNumber([1,2,3,4,5]);

?>
```

### Python

```python
# Write a Python program to find smallest number in an array

# PYTHON program to find smallest number
l = [int(l) for l in input("Create an array:").split(",")]
print("Your list is", l)
# Assign first element as minimum
min1 = l[0]
for i in range(len(l)):
    # check if other element is min than first element
    if l[i] < min1:
        min1 = l[i]
print("Smallest number in the list is ", min1)

# or use built-in python function: min(l)
```

### R

```r
# Write a R program to find smallest number in an array

# Function to find the smallest number in an array
find_smallest_in_array <- function(arr) {
  min_value <- min(arr)
  return(min_value)
}

# Example array
arr <- c(9, 4, 7, 2, 5, 10, 8, 3, 6)
# Replace this example array with your own data

# Find the smallest number in the array
smallest_number <- find_smallest_in_array(arr)

# Display the smallest number
cat("The smallest number in the array is:", smallest_number, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find smallest number in an array

def findSmallestNumberInAnArray array
    array.min
end

puts findSmallestNumberInAnArray [1,2,3,4,5]
```

### Rust

```rust
// Write a Rust program to find smallest number in an array

fn main() {
    // Define the array of numbers
    let numbers = [1, 2, 3, 4, 5];

    // Initialize a variable to store the smallest number
    let mut smallest = numbers[0];

    // Iterate over the array and find the smallest number
    for number in numbers.iter() {
        if *number < smallest {
            smallest = *number;
        }
    }

    // Print the smallest number
    println!("The smallest number is {}", smallest);
}
```

### Scala

```scala
// Write a Scala program to find smallest number in an array

object Scala_Array {

  def main(args: Array[String]): Unit = {
    val arr = Array(1, 2, 3, 4, 5);
    println("Original array :")
    for (x <- arr) {
      print(s"${x}, ")
    }
    var first_element, arr_size = arr.length;
      first_element = Int.MaxValue

      for (i <- 0 to arr_size - 1) {
        if (arr(i) < first_element) {
          first_element = arr(i);
        }

      }
        println(
          s"\nThe smallest element is : ${first_element}"
        );
  }
}
```

### Swift

```swift
// Write a Swift program to find smallest number in an array

import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
print("Smallest number: ", numbers.reduce(Int.max, { min($0, $1) }))
```

### TypeScript

```typescript
// Write a TypeScript program to find smallest number in an array

function FindSmallestNumberInAnArray(values: number[]) {
  let smallest = values[0]; // If values has length = 0, undefined is good
  for (let i = 1; i < values.length; i++) {
    if (smallest > values[i]) {
      smallest = values[i];
    }
  }
  return smallest;
}

FindSmallestNumberInAnArray([1, 4, -5, 2, 1]);
```

## Similar programs

- [Find Second Smallest Number In An Array](/program/find-second-smallest-number-in-an-array)
- [Find Largest And Smallest Numbers In An Array](/program/find-largest-and-smallest-numbers-in-an-array)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Find Second Largest Number In An Array](/program/find-second-largest-number-in-an-array)
- [Reverse An Array](/program/reverse-an-array)
- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Find The Smallest Three Elements In An Array](/program/find-the-smallest-three-elements-in-an-array)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Find Smallest Element In A Matrix](/program/find-smallest-element-in-a-matrix)
