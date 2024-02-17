---
title: "Find Second Smallest Number In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "dart",
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
    "LeventCelik",
    "sushanth-0",
    "harshraj8843",
    "vedantpople4",
    "Tushar12222",
    "orimiles5",
    "sharvil1205",
    "joao-vitor-souza",
    "codingkush",
    "manny-uncharted",
    "danveb",
    "PraaneshSelvaraj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:33:34Z
trackId: 4476
description: "Write a program to find second smallest number in an array."
---

## Write a program to find second smallest number in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 2
```

---

```c
// Write a C program to find second smallest number in an array

#include <stdio.h>
#include <string.h>

main()
{
    int smallest, secondsmallest;
    int array[100], size, i;
    printf("\n How many elements do you want to enter: ");
    scanf("%d", &size);
    printf("\nEnter %d elements: ", size);
    for (i = 0 ; i < size; i++)
        scanf("%d", &array[i]);
    if (array[0] < array[1]) {
        smallest = array[0];
        secondsmallest = array[1];
    }
    else {
      smallest = array[1];
      secondsmallest = array[0];
    }
    for (i = 2; i < size; i++) {
        if (array[i] < smallest) {
        secondsmallest = smallest;
        smallest = array[i];
        }
        else if (array[i] < secondsmallest) {
            secondsmallest = array[i];
        }
    }
    printf(" \nSecond smallest element is %d", secondsmallest);
}
```

```csharp
// Write a C# program to find second smallest number in an array

using System;
namespace SecondSmallest
{
    class Program {
        static void Main(string[] args)
        {
            int min1, min2, i, n;
            int[] arr = new int[55];

            Console.Write("Enter the Size of Array : ");
            n = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter " + n + " Elements : ");
            for(i=0;i<n;i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }
            if(arr[0]<arr[1])
            {
                min1 = arr[0];
                min2 = arr[1];
            }
            else
            {
                min1 = arr[1];
                min2 = arr[0];
            }
            for(i=2;i<n;i++)
            {
                if(arr[i]<min1)
                {
                    min2 = min1;
                    min1 = arr[i];
                }
                else if(arr[i]<min2)
                {
                    min2 = arr[i];
                }
            }
            Console.WriteLine("Second Smallest Element :" + min2);
        }
    }
}
```

```cpp
// Write a C++ program to find second smallest number in an array

/* C++ program to find second number number in array */
#include <iostream>
using namespace std;
int main()
{
    int size;
    cout<<"Enter the size of array: ";
    cin>>size;
    int array[size];                            // array declaration

    for(int i=0;i<size;i++)
        cin>>array[i];                          // input array values

    int smallest=2147483647;                    // maximum integer values
    int secondsmall=2147483647;

    for(int i=0;i<size;i++){                    // logic for smallest and second smallest value
        if(smallest>array[i]){
            secondsmall=smallest;
            smallest=array[i];
        }
        if(secondsmall>array[i]&& array[i]>smallest)
            secondsmall=array[i];
    }

    cout<<"The second smallest number present in given array is "<<secondsmall;
    return 0;
}
```

```dart
// Write a Dart program to find second smallest number in an array

void minInArray(List<int> arr){
  int min = arr[0];
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  print(min);
}

void main() {
  minInArray([1,0,-1,3,-4,9]);
}
```

```go
// Write a Go program to find second smallest number in an array

package main

import (
	"fmt"
	"sort"
)

func main() {
	series := []int{1, -2, 4, 11, 16, 7, 18, 9}
	sort.Sort(sort.IntSlice(series))
	fmt.Println(series[1])
}
```

```java
// Write a Java program to find second smallest number in an array

import java.util.*;
class secondSmallest
{
    public static void main(String[] args)
	{
        Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number of elements in the array: ");
		int n=sc.nextInt();
		System.out.print("Enter " + n + " elements: ");
	  	int[] arr = new int[n];

		for(int i = 0; i < n; i++) arr[i]=sc.nextInt();

      	if(n<2) System.out.println("Invalid input: Array size less than 2");
      	else
      	{
        	int small = Integer.MAX_VALUE;
	    	int second_small = Integer.MAX_VALUE;

	    	for (int i = 0; i < n; i++)
	    	{
	        	if (arr[i] <= small)
	        	{
		        	second_small = small;
		        	small = arr[i];
	       	 	}
	        	else if (arr[i] <= second_small && arr[i] >= small)
	        	{
		        	second_small = arr[i];
	       	 	}
	    	}
        	System.out.print("Second smallest element of the array: " + second_small);
        }
    }
}
```

```javascript
// Write a JavaScript program to find second smallest number in an array

/* Problem: Write a JavaScript program to find second smallest number in an array 

nums = [1, 2, 3, 4, 5]
output = 2

nums = [55, 3, 1, -4, 109, 7]
output = 1

Brute Force
- use array sort method that returns an array in increasing order
- return the element at the 1st index (second smallest) 

Pseudocode
- edge case: if input array is empty we return 0
- manually sort input array in ascending order
- return element at 1st index

Time: O(n log n) for manually sorting the input array
Space: O(1) no extra memory needed 

===

Better Approach 
- perform 2 loops over input array where we check for the first smallest and second smallest numbers
- key is to initialize the smallest numbers as Infinity so any number we get from array will become smaller than Infinity

Pseudocode
- edge case: if input array is empty we return 0
- initialize firstSmallest as Infinity 
- initialize secondSmallest as Infinity
- iterate over input array once 
- check: if current element is smaller than firstSmallest ? 
-- set firstSmallest as current element
- iterate over input array again 
- check: if current element is smaller than secondSmallest && current element is greater than firstSmallest ? 
-- set secondSmallest as current element 
- return secondSmallest 

Time: O(n) we iterate over input array twice at O(2n) -> O(n)
Space: O(1) no extra memory needed 

*/

// function findSecondSmallestNumberInAnArray(nums) {
//     // edge case: if input array is empty we return 0
//     if(nums.length === 0) return 0;
//     nums.sort((a, b) => a - b);
//     return nums[1];
// };

function findSecondSmallestNumberInAnArray(nums) {
  if (nums.length === 0) return 0;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < firstSmallest) {
      firstSmallest = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < secondSmallest && nums[i] > firstSmallest) {
      secondSmallest = nums[i];
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallestNumberInAnArray([1, 2, 3, 4, 5]));
```

```julia
# Write a Julia program to find second smallest number in an array

array = [1,2,3,4,5]
second_smallest_element = sort(array)
println("The second smallest number is : ", second_smallest_element[2])
```

```perl
# Write a Perl program to find second smallest number in an array

@list= (1,2,3,4,5);
@sortedList = sort @list;
print "Second Smallest value : ".@sortedList[1];
```

```php
// Write a PHP program to find second smallest number in an array

<?php

function secondSmallest($arr) {
   sort($arr);
   return $arr[1];
}

echo secondSmallest([1,2,3,4,5]);

?>
```

```python
# Write a Python program to find second smallest number in an array

def find_len(n):
    l = [input(f"Element {i + 1}: ") for i in range(n)]
    l.sort()
    print("\nSecond smallest element is:", l[1])


size_list = int(input("What's the size of the list: "))
find_len(size_list)
```

```r
# Write a R program to find second smallest number in an array

numbers <- c(3, 1, 0, 1, 5, 9, 2, 6, 5, 3, 5)

# Function to find the second smallest number in an array
find_second_smallest <- function(numbers) {
    sorted_numbers <- sort(unique(numbers))
    if (length(sorted_numbers) >= 2) {
        return(sorted_numbers[2])
    } else {
        stop("Array must contain at least two distinct elements")
    }
}

# print the second smallest number
second_smallest <- find_second_smallest(numbers)
cat("The second smallest number in the array is:", second_smallest, "\n")
```

```ruby
# Write a Ruby program to find second smallest number in an array

def second_smallest_element(arr)
    arr = arr.sort
    return arr[1]
end

arr = [5,3,1,4,2]
print second_smallest_element(arr)
```

```rust
// Write a Rust program to find second smallest number in an array

fn main(){
    let arr = [1,2,3,4,6,7,8,10,14];
    let mut small = i32::MAX;
    let mut second_small = i32::MAX;
    for num in arr{
        if num < small{
            second_small = small;
            small = num;
        } else if num < second_small &&  num!=small {
            second_small = num;
        }
    }
    println!("{second_small}");
}
```

```scala
// Write a Scala program to find second smallest number in an array

object Scala_Array {

  def main(args: Array[String]): Unit = {
    val arr = Array(1, 2, 3, 4, 5);
    println("Original array :")
    for (x <- arr) {
      print(s"${x}, ")
    }
    var first_element, second_element, arr_size = arr.length;
    if (arr_size < 2) {
      println("\nArray size less than two.");
    } else {
      first_element = Int.MaxValue
      second_element = Int.MaxValue

      for (i <- 0 to arr_size - 1) {
        if (arr(i) < first_element) {
          second_element = first_element;
          first_element = arr(i);
        }

        else if (arr(i) < second_element && arr(i) != first_element)
          second_element = arr(i);
      }
      if (second_element == Integer.MAX_VALUE)
        println("\nNo second smallest element.");
      else
        println(
          s"\nThe second smallest element is : ${second_element}"
        );
    }
  }
}
```

```swift
// Write a Swift program to find second smallest number in an array

/**
 * Uses a simple two-pointers algorithm to find the second smallest element in an array of integers.
 */
func findSecondSmallest(_ array: [Int]) -> Int {
    var min1 = array[0]
    var min2 = array[1]
    if min2 < min1 {
        let temp = min1
        min1 = min2
        min2 = temp
    }
    for elm in array[1..<array.count] {
        if elm < min1 {
            min2 = min1
            min1 = elm
        }else if elm < min2 {
            min2 = elm
        }
    }
    return min2
}

func main() {
    print("Second smallest element is: ", findSecondSmallest([-3, 8, 9, 6, 2, 4, 1]));
}

main()
```

```typescript
// Write a TypeScript program to find second smallest number in an array

function findSecondSmallestNumberInAnArrayTs(numbersArr: number[]): number {
  let firstSmallest: number = Infinity;
  let secondSmallest: number = Infinity;

  numbersArr.forEach((num: number) => {
    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num > firstSmallest) {
      secondSmallest = num;
    }
  });

  return secondSmallest;
}
```
