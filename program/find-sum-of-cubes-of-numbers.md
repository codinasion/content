---
title: "Find Sum Of Cubes Of Numbers"
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
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "namrata18s",
    "anandfresh",
    "harshraj8843",
    "mcwhopper63",
    "esivakumar18",
    "jfinley6",
    "rksp25",
    "joao-vitor-souza",
    "MadhuS-1605",
    "rajdip-b",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:16:32Z
trackId: 853
description: "Write a program to find sum of cubes of numbers."
---

## Table of contents

## Write a program to find sum of cubes of numbers

Suppose you have a list of numbers, and you want to find the sum of the cubes of those numbers. For example, if you have the list `[1, 2, 3]`, you want to find the sum of the cubes of those numbers, which is `1^3 + 2^3 + 3^3 = 36`.

```
Input  : 1 2 3 4 5
Output : 225
```

---

### C

```c
// Write a C program to find sum of cubes of numbers

#include <stdio.h>

int main() {
    int size;
    scanf("%d", &size);
    int arr[size];
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i] * arr[i] * arr[i];
    }
    printf("%d\n", sum);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find sum of cubes of numbers

using System;
using System.Linq;
using System.Collections.Generic;
public class SumOfCubes {
   public static void Main() {
      List<int> list = new List<int> { 1, 2, 3, 4, 5 };
      IEnumerable<int> res = list.AsQueryable().Select(c => c * c * c);
      Console.WriteLine("Sum of cubes of numbers : ");
      int result = 0;
      foreach (int n in res)
      result += n;
      Console.WriteLine(result);
   }
}
```

### C++

```cpp
// Write a C++ program to find sum of cubes of numbers

#include <iostream>
using namespace std;

int main() {
    int size;
    cin>>size;
    int arr[size];
    for(int i=0;i<size;i++){
        cin>>arr[i];
    }
    int sum=0;
    for(int i=0;i<size;i++){
        sum+=arr[i]*arr[i]*arr[i];
    }
    cout<<sum;
    return 0;
}
```

### Go

```go
// Write a Go program to find sum of cubes of numbers

package main

import "fmt"

func findArraySum(arr []int) int {
	res := 0
	for i := 0; i < len(arr); i++ {
		res += arr[i] * arr[i] * arr[i]
	}
	return res
}

func main() {
	fmt.Println(findArraySum([]int{1, 2, 3, 4, 5}))
}
```

### Java

```java
// Write a Java program to find sum of cubes of numbers

import java.util.Scanner;

public class FindSumOfCubesOfNumbers {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = 0;
        for (int i = 0; i < size; i++) {
            sum += Math.pow(arr[i], 3);
        }
        System.out.println(sum);
        sc.close();
    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of cubes of numbers

const sumOfCubes = function (arr) {
  return arr.map(x => (x *= x * x)).reduce((a, b) => a + b);
};
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of cubes of numbers

import java.util.Scanner

fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output: " + FindSumOfCubesOfNumbers(nums!!.split(" ")))

}

private fun FindSumOfCubesOfNumbers(args: List<String>): Double {
    var result = 0.0
    val exponent = 3.0
    for (base in args){
        var cube = Math.pow(base.toDouble(), exponent.toDouble())
        result = result + cube
    }

    return result
}
```

### Perl

```perl
# Write a Perl program to find sum of cubes of numbers

my $array = [1, 2, 3, 4, 5];
my $iter_sum = 0;
for my $each (@$array) {
    $iter_sum += $each * $each * $each;
}
print $iter_sum;
```

### PHP

```php
// Write a PHP program to find sum of cubes of numbers

<?php
$n = readline('Enter Number: ');
$i = 1;
$sum = 0;

while($i <= $n) {
  $sum += $i**3;
  $i++;
}

echo "Sum of cubes is: $sum";
?>
```

### Python

```python
# Write a Python program to find sum of cubes of numbers

from functools import reduce

print(
    "Sum of cubes:",
    reduce(
        lambda x, y: x + y**3,
        [int(input()) for _ in range(int(input("How many numbers: ")))],
    ),
)
```

### R

```r
# Write a R program to find sum of cubes of numbers

# Function to find the sum of cubes of numbers
sumOfCubes <- function(numbers) {
  return(sum(numbers^3))
}

# Example usage
inputNumbers <- c(1, 2, 3, 4, 5)
outputSum <- sumOfCubes(inputNumbers)

cat("Input Numbers: ", inputNumbers, "\n")
cat("Sum of Cubes  : ", outputSum, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find sum of cubes of numbers

def findSumOfCubesOfNumbers numArray
    puts numArray.sum{|num| num**3 }
end

findSumOfCubesOfNumbers [1,2,3,4,5]
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of cubes of numbers

function sumOfCubeOfNumbers(num: number): number {
  if (num === 0) {
    return 0;
  } else {
    return Math.pow(num % 10, 3) + sumOfCubeOfNumbers(Math.floor(num / 10));
  }
}

console.log("Sum of Cube of numbers", sumOfCubeOfNumbers(12345));
```
