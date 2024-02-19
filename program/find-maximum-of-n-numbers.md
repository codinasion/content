---
title: "Find Maximum Of N Numbers"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "KarmakarRahul",
    "vedantpople4",
    "jfinley6",
    "joao-vitor-souza",
    "avireni",
    "Zeuhz-Droid",
    "ynbh",
    "SeppeWillems13",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 673
description: "Write a program to find maximum of n numbers."
---

## Table of contents

## Write a program to find maximum of n numbers

```
Input  : 10 20 30 40 50
Output : 50
```

---

### C

```c
// Write a C program to find maximum of n numbers

#include <stdio.h>

/**
 * find_max - find the maximum value
 * @n: array
 * @len: length of array
 *
 * Return: max
 */

int findMaximumOfNNumbers(int n[], int len)
{
    int max = 0, i = 0;

    while (i < len)
    {
        if (n[i] > max)
        {
            max = n[i];
        }
        i++;
    }
    return (max);
}
```

### C#

```csharp
// Write a C# program to find maximum of n numbers

﻿public class FindMaximumOfNNumbers
{
    public static int findMaximum(int... numbers)
    {
        // return maximum value in the array
        return Arrays.stream(numbers).max().getAsInt();
    }
    public static void main(String[] args)
    {
        System.out.println(findMaximum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    }
}
```

### C++

```cpp
// Write a C++ program to find maximum of n numbers

#include <bits/stdc++.h>

using namespace std;

int main()
{

    int n;
    cin >> n;

    vector<int> v(n);

    for (int i = 0; i < n; i++)
    {
        cin >> v[i];
    }

    int maxx = INT_MIN;

    for (int i = 0; i < n; i++)
    {

        if (maxx < v[i])
        {

            maxx = v[i];
        }
    }
    cout << "Maximum : " << maxx;

    return 0;
}
```

### Go

```go
// Write a Go program to find maximum of n numbers

package main

import "fmt"

func main() {
	arr := []int{2, 4, 5, 6, 7, 8, 9, 10, 11, 25}
	max_num := arr[0]
	for i := 0; i < len(arr); i++ {
		if arr[i] > max_num {
			max_num = arr[i]
		}
	}
	fmt.Println(max_num)
}
```

### Java

```java
// Write a Java program to find maximum of n numbers

import java.util.Scanner;
public class Largest_Number
{
    public static void main(String[] args)
    {
        int n, max;
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of elements in the array:");
        n = s.nextInt();
        int a[] = new int[n];
        System.out.println("Enter elements of array:");
        for(int i = 0; i < n; i++)
        {
            a[i] = s.nextInt();
        }
        max = a[0];
        for(int i = 0; i < n; i++)
        {
            if(max < a[i])
            {
                max = a[i];
            }
        }
        System.out.println("Maximum value:"+max);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find maximum of n numbers

const getMaximum = (...nums) => {
  let arr = [...nums];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
};
```

### Kotlin

```kotlin
// Write a Kotlin program to find maximum of n numbers

fun main() {
    val arr = arrayOf(1, 2, 3, 4, 5)
    val ints = arr.toList()

    println("Maximum: ${ints.max()}")
}
```

### Perl

```perl
# Write a Perl program to find maximum of n numbers

use 5.010;
use List::Util qw(max);

say max( 10, 20, 30, 40, 50);
```

### PHP

```php
// Write a PHP program to find maximum of n numbers

<?php
echo(max(10, 20, 30, 40, 50));
?>
```

### Python

```python
# Write a Python program to find maximum of n numbers

print(
    "Max number is:",
    max([int(input()) for _ in range(int(input("How many numbers: ")))]),
)
```

### Ruby

```ruby
# Write a Ruby program to find maximum of n numbers

def findMaximumOfNumbers *nums
    nums.max
end

puts findMaximumOfNumbers(10, 20, 30, 40, 50)
```

### Swift

```swift
// Write a Swift program to find maximum of n numbers

import Swift
import Foundation

let numbers = [10, 20, 30, 40, 50]
print("Maximum number: ", numbers.reduce(Int.min, { max($0, $1) }))
```

### TypeScript

```typescript
// Write a TypeScript program to find maximum of n numbers

function findMaximumOfNNumbers(...args: Array<number>) {
  const numbers = [...args];
  let max = 0;
  for (const x of numbers) {
    if (x > max) max = x;
  }

  return max;
}
```

## Similar programs

- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
- [Swap Two Numbers](/program/swap-two-numbers)
- [Find The Largest Three Elements In An Array](/program/find-the-largest-three-elements-in-an-array)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Swap Two Numbers Without Using Third Variable](/program/swap-two-numbers-without-using-third-variable)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find The Maximum Sum Of A Contiguous Subarray (kadanes Algorithm)](</program/find-the-maximum-sum-of-a-contiguous-subarray-(kadanes-algorithm)>)
- [Find The Maximum Sum Of A Contiguous Subarray](/program/find-the-maximum-sum-of-a-contiguous-subarray)
