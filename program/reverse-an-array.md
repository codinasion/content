---
title: "Reverse An Array"
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
    "julia",
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
    "namrata18s",
    "REVERB283",
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "gsquareg2",
    "Osher160",
    "vedantpople4",
    "hi-Kartik2004",
    "hugosmoreira",
    "Sdfeagt",
    "dineshlalam15",
    "loesking",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-01T16:40:04Z
trackId: 4950
description: "Write a program to reverse an array."
---

## Table of contents

## Write a program to reverse an array

```
Input  : [1, 2, 3, 4, 5]
Output : [5, 4, 3, 2, 1]
```

---

### C

```c
// Write a C program to reverse an array

#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t */
/*****************************************************************/
/* function to reverse the arr, O(N) */
void ReverseAnArray(int *arr, size_t size);

/* function to print the array*/

void PrintArr(int *arr,size_t size);
/*****************************************************************/
int main()
{
    int *arr = NULL;
    size_t size = 0;
    size_t i = 0;
    int new_elem = 0;
    printf("size of the arr:");
    scanf("%lu",&size);

    printf("\nplease enter elements:");

    arr = (int *) malloc(size * sizeof(int));

    for(i = 0; i < size;++i)
    {
        scanf("%d",&new_elem);

        arr[i] = new_elem;
    }

    ReverseAnArray(arr,size);

    PrintArr(arr,size);

    free(arr);

    return 0;
}
/*****************************************************************/
void ReverseAnArray(int *arr, size_t size)
{
    size_t i = 0;
    size_t rev = size - 1;
    int tmp = 0;

    for(i = 0; i< (size/2); ++i, --rev)
    {
        tmp = arr[i];

        arr[i] = arr[rev];
        arr[rev] = tmp;
    }
}
/*****************************************************************/
void PrintArr(int *arr,size_t size)
{
    size_t i = 0;

    printf("\n");

    for(i = 0; i < size;++i)
    {
        printf("%d ",arr[i]);
    }
}
```

### C#

```csharp
// Write a C# program to reverse an array

using System;

public class Reverse
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        Array.Reverse(array);

        Console.WriteLine(String.Join(',', array));
    }
}
```

### C++

```cpp
// Write a C++ program to reverse an array

#include <bits/stdc++.h>
#define ll long long // fot typing ease ll = long long
using namespace std;

int main(){
    // configuring the input
    cout<<"Enter the length of the array:";
    ll n;   cin>>n;
    ll a[n];
    ll ans[n]; // temp

    //Taking array input
    cout<<"Enter the "<<n<<" numbers : ";
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    //Reverse the array
    for(int i=0;i<n;i++){
        ans[i] = a[n-1-i];
    }

    // Changing the reverse array to the inputted array.
    for(int i=0;i<n;i++){
        a[i]=ans[i];
    }

    // Show the reversed array
    cout<<"The reversed array is :"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to reverse an array

void main(){
    var myList = [1, 2, 3, 4, 5];
    var reversedList = new List.from(myList.reversed);
    print(reversedList);
}
```

### F#

```fsharp
// Write a F# program to reverse an array

// function to reverse an array
let reverseArray (arr: int array) =
    let mutable reversedArr = Array.zeroCreate arr.Length
    for i = 0 to arr.Length - 1 do
        reversedArr.[arr.Length - 1 - i] <- arr.[i]
    reversedArr

let inputArray = [|1; 2; 3; 4; 5|]
let reversedArray = reverseArray inputArray
printfn "%A" reversedArray
```

### Go

```go
// Write a Go program to reverse an array

package main

import "fmt"

func main() {
	var arr = []int{5, 2, 3, 4, 5, 7, 8, 9}
	for i := len(arr) - 1; i >= 0; i-- {
		fmt.Print(arr[i], " ")
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to reverse an array

reverse_list :: [Int] -> [Int]
reverse_list = \list ->
    case list of
        [] -> []
        x:xs -> reverse_list xs ++ [x]
main = print (reverse [1, 2, 3, 4, 5])
```

### Java

```java
// Write a Java program to reverse an array

import java.util.Arrays;

public class ReverseAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println(Arrays.toString(reverseArray(arr)));
    }
    public static int [] reverseArray(int [] arr){
        int [] reverseArray = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            reverseArray[i] = arr[arr.length - 1 -i];
        } return reverseArray;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to reverse an array

const revArr = arr => {
  arr.reverse();
  console.log(arr);
};

revArr([1, 2, 3, 4, 5]);
```

### Julia

```julia
# Write a Julia program to reverse an array

array = Vector(1:5)
println(reverse(array))
```

### Kotlin

```kotlin
// Write a Kotlin program to reverse an array

fun main() {
    val arr: Array<Int?> = arrayOf(1, 2, 3, 4, 5)
	arr.reverse();
    println(arr.contentToString())
}
```

### Perl

```perl
# Write a Perl program to reverse an array

use strict;
use warnings;
use 5.010;

my @array = qw(1 2 3 4 5);
my @rev = reverse @array;
say join ' ', @rev;
```

### PHP

```php
// Write a PHP program to reverse an array

<?php

function reverseArray($array) {
  return array_reverse($array);
}

print_r(reverseArray([1,2,3,4,5]));

?>
```

### Python

```python
# Write a Python program to reverse an array

print(
    list(
        map(
            lambda x: int(x.strip()),
            input().replace("[", "").replace("]", "").split(","),
        )
    )[::-1]
)
```

### R

```r
# Write a R program to reverse an array

# Function to reverse an array
reverse_array <- function(arr) {
  return(rev(arr))
}

# Example usage
input_array <- c(1, 2, 3, 4, 5)
output_array <- reverse_array(input_array)

# Print the result
cat("Input array: ", input_array, "\n")
cat("Reversed array: ", output_array, "\n")
```

### Ruby

```ruby
# Write a Ruby program to reverse an array

a = [1, 2, 3, 4, 5]
puts "Reverse of the given array : #{a.reverse()}\n\n"
```

### Rust

```rust
// Write a Rust program to reverse an array

fn main() {
    // Declare the array to be reversed
    let mut arr = [1, 2, 3, 4, 5];

    // Reverse the array in place
    arr.reverse();

    // Print the reversed array
    println!("{:?}", arr);
}
```

### Scala

```scala
// Write a Scala program to reverse an array

import scala.io.StdIn._;

object arrayReverse {
    def main(args:Array[String]):Unit={
        val mylist: List[Int] = List(1, 2, 3, 4, 5);
        println("Array Reverse : "+mylist.reverse);
    }
}
```

### Swift

```swift
// Write a Swift program to reverse an array

import Swift
import Foundation

var numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print("Reversed Array: ", numbers)
```

### TypeScript

```typescript
// Write a TypeScript program to reverse an array

const reverseArray = (arr: number[]): number[] => {
  return arr.reverse();
};

console.log(reverseArray([1, 2, 3, 4, 5]));
```
