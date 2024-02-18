---
title: "Find Largest Number In An Array"
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
    "julia",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "Tushar12222",
    "sancoLgates",
    "rafaover",
    "VIBER1",
    "grraghav120",
    "victoriacheng15",
    "gdguesser",
    "aldyadk",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:27:43Z
trackId: 2894
description: "Write a program to find largest number in an array."
---

## Table of contents

## Write a program to find largest number in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 5
```

---

### C

```c
// Write a C program to find largest number in an array

#include <stdio.h>

int main()
{
    int n,maxi=0;
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    for(int i=0;i<n;i++){
        if(maxi<arr[i]){
            maxi=arr[i];
        }
    }
    printf("%d",maxi);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find largest number in an array

using System;
namespace Largest
{
    class Program
    {
        public static void Main()
        {
            int n;
            float large;
            int[] a = new int[50];
            Console.WriteLine("Enter the size of Array");
            string s = Console.ReadLine();
            n = Int32.Parse(s);
            Console.WriteLine("Enter the array elements");
            for (int i = 0; i < n; i++)
            {
                string s1 = Console.ReadLine();
                a[i] = Int32.Parse(s1);
            }
            Console.Write("");
            large = a[0];
            for (int i = 1; i < n; i++)
            {
                if (a[i] > large)
                    large = a[i];
            }
            Console.WriteLine("Largest element in the array is {0}", large);
        }
    }

}
```

### C++

```cpp
// Write a C++ program to find largest number in an array

#include <iostream>
using namespace std;

int main(){
    int n,maxi=0;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++){
        maxi=max(maxi,arr[i]);
    }
    cout<<maxi<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to find largest number in an array

void largestInArray(List<int> arr){
  int max = arr[0];
  for(var i = 0  ; i < arr.length ; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  print(max);
}

void main() {
  largestInArray([1,2,3,100,5,66]);
}
```

### Go

```go
// Write a Go program to find largest number in an array

package main

func findLargestNumberInAnArray(arr []int) int {
	var largest int
	for _, v := range arr {
		if v > largest {
			largest = v
		}
	}
	return largest
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	println(findLargestNumberInAnArray(arr))
}
```

### Haskell

```haskell
-- Write a Haskell program to find largest number in an array

maxNum :: Ord a => [a] -> a
maxNum [x] = x
maxNum (x:x':xs) = maxNum ((if x >= x' then x else x'):xs)

main = print (maxNum [1, 2, 3, 4, 5])
```

### Java

```java
// Write a Java program to find largest number in an array

public class LargestInArrayExample{
public static int getLargest(int[] a, int total){
int temp;
for (int i = 0; i < total; i++)
        {
            for (int j = i + 1; j < total; j++)
            {
                if (a[i] > a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
       return a[total-1];
}
public static void main(String args[]){
int a[]={1,2,3,4,5};

System.out.println("Largest: "+getLargest(a,5));

}}
```

### JavaScript

```javascript
// Write a JavaScript program to find largest number in an array

function FindLargestNumberInAnArray(arr) {
  return Math.max(...arr);
}

console.log(
  "Largest Number in array [1, 2, 3, 4, 5] is",
  FindLargestNumberInAnArray([1, 2, 3, 4, 5])
);
```

### Julia

```julia
# Write a Julia program to find largest number in an array

array = [1,2,3,4,5]
largest_element = sort(array, rev=true)
println("The largest number is : ", largest_element[1])
```

### Kotlin

```kotlin
// Write a Kotlin program to find largest number in an array

fun main() {
    val arr = arrayOf(1, 2, 3, 4, 5)
    val ints = arr.toList()

    println("Largest: ${ints.max()}")
}
```

### Perl

```perl
# Write a Perl program to find largest number in an array

use List::Util qw(min max);
my @arr = (1, 2, 3, 4, 5);
print max(@arr), "\n";
```

### PHP

```php
// Write a PHP program to find largest number in an array

<?php

	function find_largest_number_in_an_array($arr) {
		return max($arr);
	}

	$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	echo find_largest_number_in_an_array($arr);

?>
```

### Python

```python
# Write a Python program to find largest number in an array

print(max(map(lambda x: int(x), list(input("Enter the values: ").strip().split()))))
```

### Ruby

```ruby
# Write a Ruby program to find largest number in an array

puts 'Enter various numbers: '
numbers = gets.chomp.split
numbers_array = numbers.map(&:to_i)
puts ''
puts "Sorted Array: #{numbers_array.sort}"
puts "Max Number: #{numbers_array.max}"
```

### Scala

```scala
// Write a Scala program to find largest number in an array

object LargestElement {
    def main(args: Array[String]) {
        var IntArray = Array(1, 2, 3, 4, 5)
        var count:Int=0
        var large:Int=0

        large=IntArray(0)
        while(count<IntArray.size)
        {
            if(large<IntArray(count))
                large=IntArray(count)
            count=count+1
        }
        printf("Largest element is: %d\n",large)
    }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find largest number in an array

function FindLargestNumberInAnArray(array: Array<number>): number | string {
  let max = 0;
  for (const num of array) {
    max = Math.max(max, num);
  }

  return max;
}

const array = [1, 2, 3, 4, 5];
console.log(`Input: [${array}]`);
const result = FindLargestNumberInAnArray(array);
console.log(`Output: ${result}`);
```
