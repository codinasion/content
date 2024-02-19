---
title: "Find The Average Of All Numbers In An Array"
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
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "Rohan-Kalgutkar",
    "sushanth-0",
    "harshraj8843",
    "anandfresh",
    "vedantpople4",
    "Tushar12222",
    "D-I-J",
    "esivakumar18",
    "pokharel-nishan",
    "shashankgurunaga1",
    "Osher160",
    "jfinley6",
    "dineshlalam15",
    "Varun-Dhruv",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-01T16:56:04Z
trackId: 4908
description: "Write a program to find the average of all numbers in an array."
---

## Table of contents

## Write a program to find the average of all numbers in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 3
```

---

### C

```c
// Write a C program to find the average of all numbers in an array

#include <stdio.h>

int main() {
    int n, i;
    float sum = 0.0, avg;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array:\n");

    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    avg = sum / n;

    printf("The average of the elements in the array is: %f", avg);

    return 0;
}
```

### C#

```csharp
// Write a C# program to find the average of all numbers in an array

using System;
using System.Linq;
class Average {
   static void Main() {
      var arr = new int[] { 1,2,3,4,5 };
      double avg = Queryable.Average(arr.AsQueryable());
      Console.WriteLine("Average : "+avg);
   }
}
```

### C++

```cpp
// Write a C++ program to find the average of all numbers in an array

/****************************************************************************
*	Project:	FindTheAverageOfAllNumbersInAnArray									                *
*	File:		FindTheAverageOfAllNumbersInAnArray.cpp                    					       	*
*	Date: 		2023-01-31									        		*
*	Version: 	1.00														*
****************************************************************************/
#include <iostream> // cout,cin
#include <vector>  // vector

/****************************************************************************/
int FindTheAverageOfAllNumbersInAnArray(std::vector<int> arr);
/****************************************************************************/
int main()
{

    std::size_t size;

    std::cout << "enter size of arr" << std::endl;
    std::cin >> size;

    std::vector<int> arr;

    arr.resize(size); // resize to save time

    for(std::size_t i = 0; i < size; ++i)
    {
        std::cout << "enter element " << i << " of arr" << std::endl;
        std::cin >> arr[i];
    }

    std::cout << "Average of all nums in the arr: " << FindTheAverageOfAllNumbersInAnArray(arr);

    return 0;
}
/****************************************************************************/
int FindTheAverageOfAllNumbersInAnArray(std::vector<int> arr)
{
    int res = 0;

    for(std::size_t i = 0; i < arr.size(); ++i)
    {
        res += arr[i];
    }

    res /= arr.size();

    return res;
}
/****************************************************************************/
```

### Dart

```dart
// Write a Dart program to find the average of all numbers in an array

void avgOfArray(List<int> arr){
  double avg = 0;
  for(var i = 0 ; i < arr.length ; i++){
    avg += arr[i];
  }
  avg = avg / arr.length;
  print(avg);
}

void main() {
  avgOfArray([1,2,3,6,7]);
}
```

### F#

```fsharp
// Write a F# program to find the average of all numbers in an array

let avg aList =
    let rec sum = function
        | head :: tail -> head + (sum tail)
        | [] -> 0.
    sum aList / (aList |> List.length |> float)

let res = avg [ 1.; 2.; 3.; 4.; 5. ]
printfn "Average : %A" res
```

### Go

```go
// Write a Go program to find the average of all numbers in an array

package main

import "fmt"

func main() {
	array := []int{1, 2, 5, 3, 6, 4, 7, 8, 9, 10}
	n := len(array)
	sum := 0
	for i := 0; i < n; i++ {
		sum += (array[i])
	}
	avg := (float64(sum)) / (float64(n))
	fmt.Println(avg)
}
```

### Haskell

```haskell
-- Write a Haskell program to find the average of all numbers in an array

average :: Fractional a => [a] -> a
average numbers = sum numbers / fromIntegral (length numbers)


main :: IO ()
main = do

  let inputNumbers = [1, 2, 3, 4, 5]


  putStrLn $ "Input Array: " ++ show inputNumbers
  putStrLn $ "Average: " ++ show (average inputNumbers)
```

### Java

```java
// Write a Java program to find the average of all numbers in an array

public class FindTheAverageOfAllNumbersInAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println(average(arr));
    }
    static int average(int [] nums){
        int sum = 0;
        for(int element: nums){
            sum += element;
        }
      return sum/nums.length;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the average of all numbers in an array

const averageOfNumbers = arr => {
  return arr.reduce((a, v) => a + v) / arr.length;
};

console.log(averageOfNumbers([1, 2, 3, 4, 5]));
```

### Kotlin

```kotlin
// Write a Kotlin program to find the average of all numbers in an array

fun main() {
    val numArray = intArrayOf(1, 2, 3, 4, 5)
    var sum = 0
    numArray.forEach { x -> sum += x; }
    val average = sum / numArray.size
    println("The average is:$average")
}
```

### Perl

```perl
# Write a Perl program to find the average of all numbers in an array

#!/usr/bin/perl
sub average {
my @array = @_;
my $sum;
foreach (@array) { $sum += $_; }
return $sum/@array;
}

@dataArray = (1, 2, 3, 4, 5);
print average(@dataArray);
```

### PHP

```php
// Write a PHP program to find the average of all numbers in an array

<?php

function averageOfArray($arr) {
	return array_sum($arr)/sizeof($arr);
}

echo averageOfArray([1,2,3,4,5])

?>
```

### Python

```python
# Write a Python program to find the average of all numbers in an array

def listAverage(array, n1):
    arraysum = 0
    for j in range(n1):
        arraysum += array[j]
    avg = arraysum / (n1)
    return avg


###########  Main Program ########################

n = int(input("Enter the number of elements in the array"))
arr = []  # Initializing an empty array
for i in range(n):
    a = int(input("Enter  the element value :"))
    arr.append(a)
res = listAverage(arr, n)
print("The average of all the elements in the list is:", res)
```

### R

```r
# Write a R program to find the average of all numbers in an array

numbers <- c(1, 2, 3, 4, 5)

# Function to calculate the average
calculate_average <- function(numbers) {
    return(mean(numbers))
}

# Calculate the average and print the result
average <- calculate_average(numbers)
cat("The average is:", average, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find the average of all numbers in an array

def findTheAverageOfAllNumbersInAnArray numArray
    average = numArray.reduce(:+).to_f / numArray.count
    puts average.to_s.chomp(".0")
end

findTheAverageOfAllNumbersInAnArray [1,2,3,4,5]
```

### Rust

```rust
// Write a Rust program to find the average of all numbers in an array

fn main(){
    let numbers = vec![1,2,3,4,5,6,7,8,9,10];
    let avg: f32;
    let mut sum: i32 = 0;
    {
        for i in &numbers{
            sum = sum + i;
        }
        avg = sum as f32 / numbers.len() as f32;
    }
    println!("{}", avg);
}
```

### Scala

```scala
// Write a Scala program to find the average of all numbers in an array

object arrayAverage {
    def main(args:Array[String]):Unit={
        val nums: List[Int] = List(1, 2, 3, 4, 5);
        var total = 0.0;
        for ( i <- 0 to (nums.length - 1)) {
         total += nums(i);
        }
        val result =
        println("Array Average : "+total/nums.length);
    }
}
```

### Swift

```swift
// Write a Swift program to find the average of all numbers in an array

import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
var average = Double(numbers.reduce(0, +))/Double(numbers.count)
print("Average: ", average)
```

### TypeScript

```typescript
// Write a TypeScript program to find the average of all numbers in an array

const FindTheAverageOfAllNumbersInAnArray = (nums: number[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const avg: number = parseFloat((sum / nums.length).toFixed(2));
  console.log(avg);
  return avg;
};
export default FindTheAverageOfAllNumbersInAnArray;
```

## Similar programs

- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find Average Of Numbers By Recursion](/program/find-average-of-numbers-by-recursion)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Find Largest And Smallest Numbers In An Array](/program/find-largest-and-smallest-numbers-in-an-array)
- [Find Average Of Digits Of A Number](/program/find-average-of-digits-of-a-number)
- [Find Average Of Digits Of A Number By Recursion](/program/find-average-of-digits-of-a-number-by-recursion)
- [Reverse An Array](/program/reverse-an-array)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
