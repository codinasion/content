---
title: "Find Second Largest Number In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "sancoLgates",
    "roshan798",
    "saintramon",
    "rafaover",
    "joao-vitor-souza",
    "HeYPoonam",
    "shailendrakanherkar18",
    "mrajen27",
    "Mudi-Igbinoba",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:26:07Z
trackId: 3556
description: "Write a program to find second largest number in an array."
---

## Table of contents

## Write a program to find second largest number in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 4
```

---

### C

```c
// Write a C program to find second largest number in an array

#include<stdio.h>
#include<limits.h>
int secondLargest(int *arr,int size) {
	if(size<2) return -1;
	int largest = INT_MIN,secondLargest = INT_MIN;
	for(int i=0;i<size;i++) {
		if(arr[i]>largest){
			secondLargest = largest;
			largest = arr[i];
		}
		else if(arr[i]>secondLargest)
			secondLargest = arr[i];
	}
return secondLargest;
}
void main(){
	int n;
	printf("Enter number of element in the array: ");
	scanf("%d",&n);
	int arr[n];
	printf("Enter %d array elements: ");
	for(int i=0;i<n;i++)
		scanf("%d",&arr[i]);
	int secondLargestValue = secondLargest(arr,n);
	if(secondLargestValue!=-1)
		printf("Second largest value in the array: %d\n",secondLargest(arr,n));
	else
		printf("Cannot find second largest number\n");

}
```

### C#

```csharp
// Write a C# program to find second largest number in an array

using System;
using System.Collections;

public class SecondLargest
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5};
        Array.Sort(array);
        Array.Reverse(array);
        Console.WriteLine("Second highest value in the array : " + array[1]);
    }
}
```

### C++

```cpp
// Write a C++ program to find second largest number in an array

/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

/*

#   Important Point
    The given code is longer than usual because I have handled all the corner cases ,
    Like all the elements being same and more.

*/
#include <iostream>

using namespace std;

int main()
{

    int size;
    cout << "\n\nEnter the size of the array -> ";
    cin >> size;

    int arr[size];

    cout << "\nEnter the elements of array -> \n";
    int temp = 0;

    while (temp < size)
    {
        cin >> arr[temp];
        temp++;
    }

    int largest = INT_MIN;

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] == largest)
        {
            arr[i] = INT_MIN;
        }
    }

    largest = INT_MIN;
    int tick = 0;

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] > largest)
        {
            tick = 1;
            largest = arr[i];
        }
    }
    if (tick == 1)
    {
        cout << "\nThe second largest number in array is -> " << largest << endl
             << endl;
    }
    else
    {
        cout << "\nAll the elements are equal" << endl
             << endl;
    }

    return 0;
}
```

### Go

```go
// Write a Go program to find second largest number in an array

// Golang program to find the second largest elements
// from the array

package main

import "fmt"

func main() {
	var large1 int = 0
	var large2 int = 0
	var arr [5]int

	arr[0] = 5
	arr[1] = 34
	arr[2] = 7
	arr[3] = 39
	arr[4] = 21

	large1 = arr[0]
	for i := 1; i <= 4; i++ {
		if large1 < arr[i] {
			large2 = large1
			large1 = arr[i]
		} else if large2 < arr[i] {
			large2 = arr[i]
		}
	}
	fmt.Println("Second largest element is: ", large2)
}
```

### Java

```java
// Write a Java program to find second largest number in an array

public class FindSecondLargestNumberInAnArray{

    public static void main(String[] args) {

        int[] arr =  {5,4,3,2,1};

        System.out.println(returnSecondLargest(arr));

    }
    public static int returnSecondLargest(int[] arr) {
        for(int i=0; i<arr.length; i++){

            int minIndex = i;

            for(int j=i+1; j<arr.length; j++){
                if(arr[i] > arr[j]){
                    minIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr[arr.length-2];
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find second largest number in an array

function findSecondLargestNumberInAnArray(arr) {
  let maxNum = Math.max(...arr);

  let indexOfMaxNum = arr.indexOf(maxNum);

  arr.splice(indexOfMaxNum, 1);

  return Math.max(...arr);
}
console.log(findSecondLargestNumberInAnArray([1, 20, 30]));
console.log(findSecondLargestNumberInAnArray([10, 100, 1000]));
console.log(findSecondLargestNumberInAnArray([1, 2, 3, 4, 5]));
```

### Julia

```julia
# Write a Julia program to find second largest number in an array

array = [1,2,3,4,5]
second_largest_element = sort(array, rev=true)
println("The second largest number is : ", second_largest_element[2])
```

### Kotlin

```kotlin
// Write a Kotlin program to find second largest number in an array

fun main() {
    val inputArray = arrayOf<Int>(1, 2, 3, 4, 5)
    find2ndLargest(inputArray)
}

fun find2ndLargest(array:Array<Int>){
    var first:Int;var second:Int
    if(array.size < 2){
        System.out.print(" Invalid Input ");
        return;
    }
    first = Integer.MIN_VALUE; second = Integer.MIN_VALUE;
    for (i in 0..array.size-1) {
        /* If current element is greater than
        first then update both first and second */
        if (array[i] > first) {
            second = first;
            first = array[i];
        }

        /* If arr[i] is in between first and
               second then update second  */
        else if (array[i] > second && array[i] != first)
            second = array[i]
    }
    if (second == Integer.MIN_VALUE) {
        println(
            "There is no second largest"
                    + " element\n"
        );
    }
    else {
        println(
            "The second largest element"
                    + " is " + second
        );
    }
}
```

### Perl

```perl
# Write a Perl program to find second largest number in an array

@list= (1,2,3,4,5);
@sortedList = sort @list;
print "Second Largest value : ".@sortedList[$#sortedList-1];
```

### PHP

```php
// Write a PHP program to find second largest number in an array

<?php

	function secondLargest(array $arr) {

		$arr = array_unique($arr); // remove duplicate, in case we have multiple same largest numbers
		sort($arr);
		return $arr[sizeof($arr)-2];
	}

	echo secondLargest(array(1, 2, 3, 4, 5))."\n";
	echo secondLargest(array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10))."\n";
	echo secondLargest(array(1123, 244, 35, 466, 57, 6, 7, 823, 9, 12310, 10));
?>
```

### Python

```python
# Write a Python program to find second largest number in an array

list1 = [10, 20, 4, 45, 99]

mx = max(list1[0], list1[1])
secondmax = min(list1[0], list1[1])
n = len(list1)
for i in range(2, n):
    if list1[i] > mx:
        secondmax = mx
        mx = list1[i]
    elif list1[i] > secondmax and mx != list1[i]:
        secondmax = list1[i]
    elif mx == secondmax and secondmax != list1[i]:
        secondmax = list1[i]

print("Second highest number is : ", str(secondmax))
```

### Ruby

```ruby
# Write a Ruby program to find second largest number in an array

puts 'Enter various numbers: '
numbers = gets.chomp.split
numbers_array = numbers.map(&:to_i)

puts ''
puts "Sorted Array: #{numbers_array.sort}"

second_max = numbers_array.uniq.sort[-2]

puts "Second Largest Number: #{second_max}"
```

### Swift

```swift
// Write a Swift program to find second largest number in an array

import Swift
import Foundation

func secondlargestNumber(a:[Int])->Int{
   var arr = a

   for x in 0..<arr.count{
      for y in x+1..<arr.count{
         if (arr[x]>arr[y]) {
            let t = arr[x]
            arr[x] = arr[y]
            arr[y] = t
         }
      }
   }
   return arr[arr.count-2]
}

var arr = [1, 2, 3, 4, 5]

print("Second Largest Number: ", secondlargestNumber(a:arr))
```

### TypeScript

```typescript
// Write a TypeScript program to find second largest number in an array

function findSecondLargestNumberInAnArray(inputArray: Array<number>): number {
  if (inputArray instanceof Array && inputArray.length) {
    const maxNum: number = Math.max(...inputArray);

    const indexOfMaxNum: number = inputArray.indexOf(maxNum);

    inputArray.splice(indexOfMaxNum, 1);

    return Math.max(...inputArray);
  }
  return 0;
}
console.log(findSecondLargestNumberInAnArray([1, 20, 30]));
console.log(findSecondLargestNumberInAnArray([10, 100, 1000]));
console.log(findSecondLargestNumberInAnArray([1, 2, 3, 4, 5]));
```

## Similar programs

- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Find Second Smallest Number In An Array](/program/find-second-smallest-number-in-an-array)
- [Find Largest And Smallest Numbers In An Array](/program/find-largest-and-smallest-numbers-in-an-array)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Reverse An Array](/program/reverse-an-array)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Find The Average Of All Numbers In An Array](/program/find-the-average-of-all-numbers-in-an-array)
- [Find The Largest Three Elements In An Array](/program/find-the-largest-three-elements-in-an-array)
