---
title: "Find The Maximum Sum Of A Contiguous Subarray"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "dart",
    "go",
    "python",
    "r",
  ]
contributors:
  [
    "Parvezkhan0",
    "hona9",
    "ApurvaR1",
    "harshraj8843",
    "apurvagandhi",
    "Tushar12222",
    "Ishay1997",
    "anandfresh",
    "cacti23",
    "manishankardurai",
    "joao-vitor-souza",
    "Dhana-s",
    "BiscuitCandy",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-07T06:42:07Z
trackId: 4166
description: "Write a program to find the maximum sum of a contiguous subarray."
---

## Write a program to find the maximum sum of a contiguous subarray

Maximum subarray problem is the task of finding the contiguous subarray within a one-dimensional array of numbers which has the largest sum. For example, for the sequence of values `−2, 1, −3, 4, −1, 2, 1, −5, 4;` the contiguous subarray with the largest sum is `4, −1, 2, 1,` with sum `6`.

```
Input  : [-2, -3, 4, -1, -2, 1, 5, -3]
Output : 7
```

---

```c
// Write a C program to find the maximum sum of a contiguous subarray

#include <stdio.h>

int maxSubArray(int arr[], int n)
{
    int max_so_far = arr[0];
    int max_ending_here = arr[0];
    int i;

    for (i = 1; i < n; i++)
    {
        max_ending_here = max(arr[i], max_ending_here + arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}

int main()
{
    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int max_sum = maxSubArray(arr, n);
    printf("Maximum subarray sum is %d", max_sum);
    return 0;
}
```

```csharp
// Write a C# program to find the maximum sum of a contiguous subarray

using System;

class Contiguous
{
    static int maxSubArraySum(int []a)
    {
        int size = a.Length;
        int max_so_far = int.MinValue,
            max_ending_here = 0;

        for (int i = 0; i < size; i++)
        {
            max_ending_here = max_ending_here + a[i];

            if (max_so_far < max_ending_here)
                max_so_far = max_ending_here;

            if (max_ending_here < 0)
                max_ending_here = 0;
        }

        return max_so_far;
    }

    public static void Main ()
    {
        int [] a = {-2, -3, 4, -1, -2, 1, 5, -3};
        Console.Write("Maximum contiguous sum is :" +maxSubArraySum(a));
    }

}
```

```cpp
// Write a C++ program to find the maximum sum of a contiguous subarray

#include <iostream>
#include <limits.h>

int main() {
  const int maxArraySize = 100;
  int arr[maxArraySize];
  int n = 0;

  std::cout << "Enter the size of array: ";
  std::cin >> n;

  if(n > maxArraySize) {
    std::cout << "Error: Input array size cannot be greater than " << maxArraySize << std::endl;
    return 1;
  }

  std::cout << "Enter the input values:" << std::endl;

  for(int i = 0; i < n; i++) {
    std::cin >> arr[i];
  }

  long long int sum = 0;
  long long int maxSum = LLONG_MIN;

  for(int i = 0; i < n; i++) {
    sum = 0;
    for(int j = i; j < n; j++) {
      sum += arr[j];
      maxSum = std::max(maxSum, sum);
    }
  }


  std::cout << "Maximum sum of contiguous elements of given array is: " << maxSum << std::endl;

  return 0;
}
```

```dart
// Write a Dart program to find the maximum sum of a contiguous subarray

import 'dart:math';
void maxsumSubarray(List<int> arr){
  int sum = 0;
  int maxSum = 0;
  for(var i = 0 ; i < arr.length ; i++){
    sum = max(sum + arr[i] , arr[i]);
    maxSum = max(sum , maxSum);
  }
  print(maxSum);
}

void main() {
  maxsumSubarray([1 , -1 , -2 , 3 , 5 ,1]);
}
```

```go
// Write a Go program to find the maximum sum of a contiguous subarray

package main

import (
	"fmt"
)

func maxSubarraySum(arr []int) int {
	maxSoFar := 0
	maxEndingHere := 0
	for _, num := range arr {
		maxEndingHere = maxEndingHere + num
		if maxEndingHere < 0 {
			maxEndingHere = 0
		} else if maxSoFar < maxEndingHere {
			maxSoFar = maxEndingHere
		}
	}
	return maxSoFar
}

func main() {
	arr := []int{-2, -3, 4, -1, -2, 1, 5, -3}
	fmt.Println("Maximum sum of a contiguous subarray:", maxSubarraySum(arr))
}
```

```java
// Write a Java program to find the maximum sum of a contiguous subarray

public class FindTheMaximumSumOfAContiguousSubarray {
    public static void main(String[] args) {
        int[] numberArray = {-2, -3, 4, -1, -2, 1, 5, -3};
        System.out.println("Maximum contiguous sum is "
          + maxSubArraySum(numberArray));
      }

      static int maxSubArraySum(int numberArray[]) {
        int size = numberArray.length;
        int maximum_so_far = Integer.MIN_VALUE, maximum_ending_here = 0;

        for (int i = 0; i < size; i++) {
          maximum_ending_here = maximum_ending_here + numberArray[i];
          if (maximum_so_far < maximum_ending_here)
            maximum_so_far = maximum_ending_here;
          if (maximum_ending_here < 0)
            maximum_ending_here = 0;
        }
        return maximum_so_far;
      }

}
```

```javascript
// Write a JavaScript program to find the maximum sum of a contiguous subarray

function getTheHighstSumInArr(arr) {
  if (arr.length === 1) return arr[0];

  const arrToWork = [...new Set(arr)]; // Remove duplicates
  const arrToSum = arrToWork.slice(-4); // Select the last 4 elements
  const maxSum = arrToSum.reduce((a, b) => a + b);

  return maxSum;
}
```

```python
# Write a Python program to find the maximum sum of a contiguous subarray

arr = list(map(int, input().split()))

sm = 0
mx = 0

for i in range(len(arr)):
    sm = max(sm + arr[i], arr[i])
    mx = max(mx, sm)

print(mx)
```

```r
# Write a R program to find the maximum sum of a contiguous subarray

findMaxSubarraySum <- function(arr) {
  max_so_far <- arr[1]
  max_ending_here <- arr[1]

  for (i in 2:length(arr)) {
    max_ending_here <- max(arr[i], max_ending_here + arr[i])
    max_so_far <- max(max_so_far, max_ending_here)
  }

  return(max_so_far)
}

# Test the function with the provided input
input_array <- c(-2, -3, 4, -1, -2, 1, 5, -3)
max_sum <- findMaxSubarraySum(input_array)
print(max_sum)
```
