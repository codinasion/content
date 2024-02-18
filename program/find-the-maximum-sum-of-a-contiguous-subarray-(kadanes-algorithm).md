---
title: "Find The Maximum Sum Of A Contiguous Subarray (kadanes Algorithm)"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "go",
    "php",
    "python",
  ]
contributors: ["harshraj8843", "pradeepch2107"]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 3918
description: "Write a program to find the maximum sum of a contiguous subarray (kadanes algorithm)."
---

## Table of contents

## Write a program to find the maximum sum of a contiguous subarray (kadane's algorithm)

Kadane's algorithm is used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers. For example, for the sequence of values `−2, 1, −3, 4, −1, 2, 1, −5, 4;` the contiguous subarray with the largest sum is `4, −1, 2, 1,` with sum `6`.

```
Input  : [1, 2, 3, -2, 5]
Output : 9
```

---

### C

```c
// Write a C program to find the maximum sum of a contiguous subarray (kadanes algorithm)

#include <stdio.h>

int maximumSumOfAContiguousSubarray(int a[], int n)
{
    int max_sum = a[0], current_sum = 0;

    for (int i = 0; i < n; i++)
    {
        current_sum += a[i];
        if (current_sum > max_sum)
        {
            max_sum = current_sum;
        }
        if (current_sum < 0)
        {
            current_sum = 0;
        }
    }
    return max_sum;
}
int main()
{
    int n;
    scanf("%d", &n);
    int a[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("%d\n", maximumSumOfAContiguousSubarray(a, n));
    return 0;
}
```

### C#

```csharp
// Write a C# program to find the maximum sum of a contiguous subarray (kadanes algorithm)

using System;

public class FindTheMaximumSumOfAContiguousSubArrayKadanesAlgorithm{
	static int maxSumOfAContiguousSubArray(int []a){
		int maxSum=0;
		int sum=0;
		for(int i=0;i<a.Length;i++){
			sum=sum+a[i];
			if(sum>maxSum){
				maxSum=sum;
			}
			if(sum<0){
				sum=0;
			}
		}
		return maxSum;
	}
	public static void Main(string [] args){
		int []a={1, 2, 3, -2, 5};
		Console.Write("Input  : ");
		for(int i=0;i<a.Length;i++){
		    Console.Write("{0} ",a[i]);
		}
		Console.WriteLine(" ");
		Console.WriteLine("Output : {0}",maxSumOfAContiguousSubArray(a));
	}
}
```

### C++

```cpp
// Write a C++ program to find the maximum sum of a contiguous subarray (kadanes algorithm)

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    int sum=0,maxi_sum=0;
    for(int i=0;i<n;i++){
        sum+=v[i];
        maxi_sum=max(maxi_sum,sum);
        if(sum<0) sum=0;
    }
    cout<<maxi_sum<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to find the maximum sum of a contiguous subarray (kadanes algorithm)

package main

import "fmt"

// TC - O(n) | SC - O(1)
func KadaneAlgorithm(array []int) int {
	maxEndingHere := array[0]
	maxSoFar := array[0]

	for i := 1; i < len(array); i++ {
		num := array[i]
		maxEndingHere = max(num, maxEndingHere+num)
		maxSoFar = max(maxSoFar, maxEndingHere)
	}
	return maxSoFar
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	arr1 := []int{1, 2, 3, -2, 5}
	arr2 := []int{2, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	arr3 := []int{31, -2, -3, -4, -5, -6, -7, -8, -9, -10}
	arr4 := []int{4, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10}
	arr5 := []int{5, 4, -6, 7, 8}
	fmt.Println(KadaneAlgorithm(arr1))
	fmt.Println(KadaneAlgorithm(arr2))
	fmt.Println(KadaneAlgorithm(arr3))
	fmt.Println(KadaneAlgorithm(arr4))
	fmt.Println(KadaneAlgorithm(arr5))
}
```

### Java

```java
// Write a Java program to find the maximum sum of a contiguous subarray (kadanes algorithm)

public class FindTheMaximumSumOfAContiguousSubarray{
//(kadane'sAlgorithm)
    public static void main(String[] args) {
    int[] numberArray = {-2, 1, 9, 4, -1, 2, -2, -5, 4};
    System.out.println("Maximum contiguous sum is "
      +  maxSubArraySum(numberArray));
  }
  static int maxSubArraySum(int numberArray[])
    {
        int max_so_far = numberArray[0];
        int curr_max = numberArray[0];

        for (int i = 1; i < numberArray.length; i++)
        {
            curr_max = Math.max(numberArray[i], curr_max+numberArray[i]);
            max_so_far = Math.max(max_so_far, curr_max);
        }
        return max_so_far;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the maximum sum of a contiguous subarray (kadanes algorithm)

function maximumContiguousSum(arr) {
  let sum = 0;
  let i = 0;
  let maxsum = -Infinity;
  while (i < arr.length) {
    sum += arr[i];
    maxsum = Math.max(maxsum, sum);
    if (sum < 0) {
      sum = 0;
    }
    i++;
  }
  return maxsum;
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maximumContiguousSum(arr)); //7
```

### Kotlin

```kotlin
// Write a Kotlin program to find the maximum sum of a contiguous subarray (kadanes algorithm)

import kotlin.math.max

fun main() {
    val a = intArrayOf(-2, -3, 4, -1, -2, 1, 5, -3)
    println(maxSubArraySum(a))
}


fun maxSubArraySum(a: IntArray): Int {
    val size = a.size
    var best = Int.MIN_VALUE
    var sum = 0
    for (i in 0 until size) {
        sum = max(a[i], sum + a[i])
        best = max(best, sum)
    }
    return best
}
```

### PHP

```php
// Write a PHP program to find the maximum sum of a contiguous subarray (kadanes algorithm)

<?php

function maxSubArraySum($a, $size)
{
	$max_so_far = PHP_INT_MIN;
	$max_ending_here = 0;

	for ($i = 0; $i < $size; $i++)
	{
		$max_ending_here = $max_ending_here + $a[$i];
		if ($max_so_far < $max_ending_here)
			$max_so_far = $max_ending_here;

		if ($max_ending_here < 0)
			$max_ending_here = 0;
	}
	return $max_so_far;
}

$a = array(-2, -3, 4, -1, -2, 1, 5, -3);
$n = count($a);
$max_sum = maxSubArraySum($a, $n);
echo "Maximum sum of contiguous subarray : " ,$max_sum;

?>
```

### Python

```python
# Write a Python program to find the maximum sum of a contiguous subarray (kadanes algorithm)

# Python program to find maximum contiguous subarray


# Function to find the maximum contiguous subarray
def maxSubArraySum(a, size):
    max_so_far = a[0]
    max_ending_here = a[0]

    for i in range(1, size):
        max_ending_here = max_ending_here + a[i]
        if max_so_far < max_ending_here:
            max_so_far = max_ending_here

        if max_ending_here < 0:
            max_ending_here = 0
    return max_so_far


# Driver function to check the above function


a = [-2, -3, 4, -1, -2, 1, 5, -3]

print("Maximum contiguous sum is", maxSubArraySum(a, len(a)))
```

### Ruby

```ruby
# Write a Ruby program to find the maximum sum of a contiguous subarray (kadanes algorithm)

module Subarray

  def self.max_sub(arr)

    max_so_far = arr.first
    max_ending_here = 0
    start = 0
    stop = 0
    playhead = 0

    arr.each_with_index do |el, i|

      max_ending_here += el
      if max_so_far < max_ending_here
        max_so_far = max_ending_here
        start = playhead
        stop = i
      end

      if max_ending_here < 0
        max_ending_here = 0
        playhead = i+1
      end

    end

    sub_arr_length = stop - start + 1
    sub_arr = arr[start, sub_arr_length]
    return max_so_far, sub_arr.to_s

  end

end

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
puts Subarray.max_sub(arr)
# => 6
# => [4, -1, 2, 1]
```

### TypeScript

```typescript
// Write a TypeScript program to find the maximum sum of a contiguous subarray (kadanes algorithm)

function maximumContiguousSum(arr: number[]): number {
  let sum: number = 0;
  let i: number = 0;
  let maxsum: number = -Infinity;

  while (i < arr.length) {
    sum += arr[i];
    maxsum = Math.max(maxsum, sum);
    if (sum < 0) {
      sum = 0;
    }
    i++;
  }

  return maxsum;
}

const arr: number[] = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maximumContiguousSum(arr)); //7
```
