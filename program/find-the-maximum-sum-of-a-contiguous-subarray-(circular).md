---
title: "Find The Maximum Sum Of A Contiguous Subarray (circular)"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "swift",
    "typescript",
    "go",
    "python",
    "r",
  ]
contributors:
  [
    "magni5",
    "shokerm",
    "harshraj8843",
    "abdurafeyf",
    "pelegsch666",
    "joao-vitor-souza",
    "Shambu-K",
    "GuyEternal",
    "sreekeshiyer",
    "PoweredByCaffein",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-20T04:39:16Z
trackId: 2309
description: "Write a program to find the maximum sum of a contiguous subarray (circular)."
---

## Write a program to find the maximum sum of a contiguous subarray (circular)

Maximum sum of a circular subarray is the task of finding the contiguous subarray within a circular one-dimensional array of numbers which has the largest sum. For example, for the sequence of values `10, -3, -4, 7, 6, 5, -4, -1;` the contiguous subarray with the largest sum is `7, 6, 5,` with sum `18`.

```
Input  : [8, -8, 9, -9, 10, -11, 12]
Output : 22
```

---

```c
// Write a C program to find the maximum sum of a contiguous subarray (circular)

#include <stdio.h>

int max(int a, int b){
    if(a>b) return a;
    return b;
}

int min(int a, int b){
    if(a<b) return a;
    return b;
}

int main(){

    int n; //size of array
    int ans;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int total_sum = 0;
    int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];

    for(int i = 0; i < n; i++)
        total_sum+= arr[i];

    for(int i = 1; i < n; i++){

        curr_max = max(curr_max + arr[i], arr[i]);
        curr_min = min(curr_min + arr[i], arr[i]);

        max_subarr_sum = max(max_subarr_sum, curr_max);
        min_subarr_sum = min(min_subarr_sum, curr_min);
    }

    ans = max(max_subarr_sum, total_sum - min_subarr_sum);
    printf("%d \n", ans);

    return 0;
}
```

```csharp
// Write a C# program to find the maximum sum of a contiguous subarray (circular)

using System;

public class FindMaxContiguousSubarraySumCircular
{
    static int maxSubArraySumCircular(int[] a)
    {
        if (a.Length == 0) return 0;

        int sum = a[0];
        int currMax = a[0];
        int currMin = a[0];
        int maxTotal = a[0];
        int minTotal = a[0];

        for (int i = 1; i < a.Length; i++) {
            int val = a[i];

            currMax = val >= (currMax + val) ? val : (currMax + val);
            if (currMax > maxTotal)
                maxTotal = currMax;

            currMin = val < (currMin + val) ? val : (currMin + val);
            if (currMin < minTotal)
                minTotal = currMin;

            sum += val;
        }

        if (sum == minTotal)
            return maxTotal;

        return (sum - minTotal) > maxTotal ? (sum - minTotal) : maxTotal;
    }

    public static void Main ()
    {
        int[] a = {-2, -3, 4, -1, -2, 1, 5, -3};
        Console.Write("Max contiguous subarray sum (circular): " + maxSubArraySumCircular(a));
    }
}
```

```cpp
// Write a C++ program to find the maximum sum of a contiguous subarray (circular)

#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> arr;
    int n;
    int ans;
    while(cin >> n)
        arr.push_back(n);

    int total_sum = 0;
    int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];

    for(int i = 0; i < arr.size(); i++)
        total_sum+= arr[i];

    for(int i = 1; i < arr.size(); i++){
        curr_max = max(curr_max + arr[i], arr[i]);
        curr_min = min(curr_min + arr[i], arr[i]);

        max_subarr_sum = max(max_subarr_sum, curr_max);
        min_subarr_sum = min(min_subarr_sum, curr_min);
    }

    ans = max(max_subarr_sum, total_sum - min_subarr_sum);
    cout << ans << endl;

    return 0;
}
```

```go
// Write a Go program to find the maximum sum of a contiguous subarray (circular)

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Enter array elements separated by space:")
	line, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Failed to take input:", err)
	}

	inputArray, hasNegatives := stringToIntSlice(line)
	fmt.Println("Input Array:", inputArray)

	// We need the sum of contiguous sub-array in circular fashion
	if hasNegatives {
		// Try to think what happens if we do this and we get all +ve inputs
		inputArray = append(inputArray, inputArray[:len(inputArray)-1]...)
	}
	fmt.Println("Maximum sum:", findMaxSum(inputArray))
}

func findMaxSum(input []int) int {
	var max, curr int
	for _, v := range input {
		curr += v
		if curr > max {
			max = curr
		}

		if curr < 0 {
			curr = 0
		}
	}
	return max
}

func stringToIntSlice(input string) ([]int, bool) {
	// trim the space as \n in appended when we take input using bufio
	input = strings.TrimSpace(input)
	stringSlice := strings.Split(input, " ")
	hasNegatives := false
	var result []int
	for _, v := range stringSlice {
		temp, err := strconv.Atoi(v)
		if err != nil {
			log.Fatalln("Failed to convert string to int:", err)
		}
		if temp < 0 {
			hasNegatives = true
		}
		result = append(result, temp)
	}

	return result, hasNegatives
}
```

```java
// Write a Java program to find the maximum sum of a contiguous subarray (circular)

import java.util.Scanner;

public class FindMaxContiguousSubarraySumCircular{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int n;
        int total_sum = 0, ans;
        n = sc.nextInt();

        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
            total_sum+= arr[i];
        }

        int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];
        for(int i = 1; i < n; i++){
            curr_max = Math.max(curr_max + arr[i], arr[i]);
            curr_min = Math.min(curr_min + arr[i], arr[i]);

            max_subarr_sum = Math.max(max_subarr_sum, curr_max);
            min_subarr_sum = Math.min(min_subarr_sum, curr_min);
        }

        ans = Math.max(max_subarr_sum, total_sum - min_subarr_sum);
        System.out.println(ans);
        sc.close();
    }

}
```

```javascript
// Write a JavaScript program to find the maximum sum of a contiguous subarray (circular)

const maxSumSubarrayCircular = nums => {
  if (nums.length === 0) return 0;

  let sum = nums[0];

  let currMax = nums[0];
  let currMin = nums[0];
  let maxTotal = nums[0];
  let minTotal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let val = nums[i];

    currMax = Math.max(val, currMax + val);
    maxTotal = Math.max(currMax, maxTotal);

    currMin = Math.min(val, currMin + val);
    minTotal = Math.min(minTotal, currMin);

    sum += val;
  }

  if (sum == minTotal) return maxTotal;

  return Math.max(sum - minTotal, maxTotal);
};

var arr = [1, -2, 3, -2, 8, -5, 1, 7];
console.log(maxSumSubarrayCircular(arr));
```

```python
# Write a Python program to find the maximum sum of a contiguous subarray (circular)

# Python program for maximum contiguous circular sum problem


def max_cont_sum(a, n):
    # Corner Case
    if n == 1:
        return a[0]

    sum = 0
    for index in range(n):
        sum = sum + a[index]

    # Initialize every variable
    # with first value of array.
    current_maximum = a[0]
    max_so_far = a[0]
    current_minimum = a[0]
    min_so_far = a[0]

    # Concept of Kadane's Algorithm
    for i in range(1, n):
        # Kadane's Algorithm to find Maximum subarray sum.
        current_maximum = max(current_maximum + a[i], a[i])
        max_so_far = max(max_so_far, current_maximum)

        # Kadane's Algorithm to find Minimum subarray sum.
        current_minimum = min(current_minimum + a[i], a[i])
        min_so_far = min(min_so_far, current_minimum)

    if min_so_far == sum:
        return max_so_far

    # returning the maximum value
    return max(max_so_far, sum - min_so_far)


input_string = input("Input : ")

a = input_string.split(", ")
n = len(a)

arr = {}

for item in range(n):
    arr[item] = int(a[item])

print("Output : ", max_cont_sum(arr, n))
```

```r
# Write a R program to find the maximum sum of a contiguous subarray (circular)

# Function to find maximum sum of circular subarray
max_circular_sum <- function(arr) {
  n <- length(arr)

  # Case 1: Maximum sum of non-circular subarray
  max_non_circular_sum <- max_sum(arr)

  # Case 2: Maximum sum of circular subarray
  # In this case, we need to wrap around to the beginning of the array
  max_wrap_sum <- sum(arr) + max_sum(-arr)

  # Return the maximum of the two cases
  return(max(max_non_circular_sum, max_wrap_sum))
}

# Function to find maximum sum of non-circular subarray
max_sum <- function(arr) {
  n <- length(arr)
  max_so_far <- max_ending_here <- arr[1]

  for (i in 2:n) {
    max_ending_here <- max(arr[i], max_ending_here + arr[i])
    max_so_far <- max(max_so_far, max_ending_here)
  }

  return(max_so_far)
}

# Example usage
arr <- c(10, -3, -4, 7, 6, 5, -4, -1)
max_circular_sum(arr)
```

```swift
// Write a Swift program to find the maximum sum of a contiguous subarray (circular)

func maxSubarraySumCircular( nums: [Int]) -> Int {
        if (nums.count == 0) {
            return 0
        }

        var sum = nums[0]

        var currMax = nums[0]
        var currMin = nums[0]
        var maxTotal = nums[0]
        var minTotal = nums[0]

        var i = 1

        while (i < nums.count) {

            let val = nums[i]

            currMax = max(val, currMax + val)
            maxTotal = max(currMax, maxTotal)

            currMin = min(val, currMin + val)
            minTotal = min(minTotal, currMin)

            sum += val
            i += 1
        }

        if (sum == minTotal){
            return maxTotal
        }

        return max(sum - minTotal, maxTotal)
    }

var arr = [1,-2,3,-2]
print(maxSubarraySumCircular(nums:arr))
```

```typescript
// Write a TypeScript program to find the maximum sum of a contiguous subarray (circular)

const maxSumSubarrayCircularTs: any = (nums: number[]) => {
  if (nums.length === 0) return 0;

  let sum = nums[0];

  let currMax: number = nums[0];
  let currMin: number = nums[0];
  let maxTotal: number = nums[0];
  let minTotal: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let val: number = nums[i];

    currMax = Math.max(val, currMax + val);
    maxTotal = Math.max(currMax, maxTotal);

    currMin = Math.min(val, currMin + val);
    minTotal = Math.min(minTotal, currMin);

    sum += val;
  }

  if (sum == minTotal) return maxTotal;

  return Math.max(sum - minTotal, maxTotal);
};

var arr: number[] = [1, -2, 3, -2, 8, -5, 1, 7];
console.log(maxSumSubarrayCircularTs(arr));
```
