---
title: "Find Sum Of Numbers"
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
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "Tushar12222",
    "esivakumar18",
    "rafaover",
    "Shalevro2",
    "Osher160",
    "joao-vitor-souza",
    "MadhuS-1605",
    "greeshma-d",
    "error707-persona",
    "EniolaAdemola",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-23T03:06:11Z
trackId: 956
description: "Write a program to find sum of numbers."
---

## Table of contents

## Write a program to find sum of numbers

```
Input  : 1 2 3 4 5
Output : 15
```

---

### C

```c
// Write a C program to find sum of numbers

#include <stdio.h> /* scanf, printf */
#include <stdlib.h> /*malloc, free*/

int FindSum(int *arr,int size);

/* taken from the recursion program */
void InitArr(int *arr,int size);

int main()
{
    int *arr = NULL;
    int size = 0;
    printf("how many  elements you want to insert?\n");
    if(1 != scanf("%d",&size))
    {
        return -1;
    }

    arr = (int *)malloc(size * sizeof(int));

    if (arr == NULL)
    {
        return -1;
    }

    InitArr(arr,size);

    printf("%d\n",FindSum(arr,size));

    free(arr);

    return 0;
}

void InitArr(int *arr,int size)
{
    int i = 0;
    printf("please enter all of the elements:\n");

    for(i = 0; i < size; ++i)
    {
        if(scanf("%d",arr + i)!= 1)
        {
            free(arr);
            exit(1);
        }
    }
}

int FindSum(int *arr,int size)
{
    int ret = 0;
    int i = 0;

    for(i = 0; i < size; ++i)
    {
        ret += arr[i];
    }

    return ret;
}
```

### C#

```csharp
// Write a C# program to find sum of numbers

using System;
  public class SumOfDigits
   {
     public static void Main(string[] args)
      {
       int  n,sum=0,m;
       Console.Write("Enter a number: ");
       n= int.Parse(Console.ReadLine());
       while(n>0)
       {
        m=n%10;
        sum=sum+m;
        n=n/10;
       }
       Console.Write("Sum of digits : "+sum);
     }
  }
```

### C++

```cpp
// Write a C++ program to find sum of numbers

#include <iostream>

int main() {
    int n, sum = 0;
    std::cout << "Enter numbers to sum up (enter a non-numeric value to quit):" << std::endl;

    // Read in numbers and add them to the sum variable
    while (std::cin >> n) {
        sum += n;
    }

    // Output the sum
    std::cout << "The sum of the entered numbers is " << sum << std::endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find sum of numbers

void sumToN(int n){
  double answer = (n * (n+1)) / 2;
  print(answer);
}

void main() {
  sumToN(10);
}
```

### Go

```go
// Write a Go program to find sum of numbers

package main
import "fmt"
func findArraySum(arr []int) int{
   res := 0
   for i:=0; i<len(arr); i++ {
      res += arr[i]
   }
   return res
}

func main(){
   fmt.Println(findArraySum([]int{1, 2, 3, 4, 5}))
}
```

### Java

```java
// Write a Java program to find sum of numbers

import java.util.*;
import java.lang.*;

public class FindSumOfNumbers{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");

        int sum=0;
        for (int i=0;i<input.length;i++){
            sum = sum + Integer.parseInt(input[i]);
        }
        System.out.println(sum);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of numbers

function sumOfNumbers(num) {
  let sumOfNum = 0;
  if (num === 0) {
    return 0;
  } else if (num === 10) {
    return 10;
  } else {
    sumOfNum = (num % 10) + sumOfNumbers(Math.floor(num / 10));
  }

  return sumOfNum;
}

console.log("Sum of Numbers", sumOfNumbers(12345));
```

### Perl

```perl
# Write a Perl program to find sum of numbers

my $array = [1, 2, 3, 4, 5];
my $iter_sum = 0;
for my $each (@$array) {
    $iter_sum += $each;
}
print $iter_sum;
```

### PHP

```php
// Write a PHP program to find sum of numbers

<?php
  $a = array(1,2,3,4,5);
  echo array_sum($a);
  //OR
  echo "\n";
  echo array_sum(range(1, 5));
?>
```

### Python

```python
# Write a Python program to find sum of numbers

print("Python program to find sum of numbers")

sumNum = [1, 2, 3, 4, 5]  # Numbers we want to sum
sum = 0

# displays the range of numbers we want to sum
print("Input : " + " ".join(map(str, sumNum)))

# loop the array and sum each item then add to the sum variable
for i in range(0, len(sumNum)):
    sum += sumNum[i]

print("Output : " + str(sum))
```

### Ruby

```ruby
# Write a Ruby program to find sum of numbers

puts "write the numbers you want to add"
input = gets.chomp
sum_of_numbers = 0
input.split(" ").each do |number|
  sum_of_numbers += number.to_i
end
puts "the sum of the numbers is #{sum_of_numbers}"
```

### Swift

```swift
// Write a Swift program to find sum of numbers

import Swift
import Foundation

var myArray : [Int] = [1,2,3,4,5]
var arraySum = myArray.reduce(0, +)

print("Array:", myArray)
print("Sum:", arraySum)
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of numbers

function sumOfNumbers(num: number) {
  let sumOfNum = 0;
  if (num === 0) {
    return 0;
  } else {
    sumOfNum = (num % 10) + sumOfNumbers(Math.floor(num / 10));
  }

  return sumOfNum;
}

console.log("Sum of Numbers", sumOfNumbers(12345));
```
