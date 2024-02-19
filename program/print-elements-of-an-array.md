---
title: "Print Elements Of An Array"
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
    "harshraj8843",
    "pranavsilimkhan",
    "anandfresh",
    "esivakumar18",
    "Amirth24",
    "gsquareg2",
    "Preetiraj3697",
    "vedantpople4",
    "grraghav120",
    "Pinklemonade33",
    "hugosmoreira",
    "jfinley6",
    "Sttormx",
    "SarthakSanjay",
    "dineshlalam15",
    "AleksiUu",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-15T19:07:35Z
trackId: 5465
description: "Write a program to print elements of an array."
---

## Table of contents

## Write a program to print elements of an array

```
Input  : [1, 2, 3, 4, 5]
Output : 1 2 3 4 5
```

---

### C

```c
// Write a C program to print elements of an array

# include <stdio.h>

// Prints int array
void PrintArray(int *array)
{
	int len = sizeof(array);
	for (int i = 0; i < len; ++i)
	{
		printf("%d\n", array[i]);
	}
}

void main()
{
	int array[] = {1, 2, 3, 4};
	PrintArray(array);
}
```

### C#

```csharp
// Write a C# program to print elements of an array

using System;
public class Example
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        foreach (int i in array) {
            Console.Write("{0} ", i);
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print elements of an array

#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    for(int i=0;i<n;i++) cout<<v[i]<<" ";
    cout<<'\n';
    return 0;
}

// Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to print elements of an array

void main(List<String> args) {
  List<dynamic> list = [1, "2", false, 3.5];
  print(list);
}
```

### F#

```fsharp
// Write a F# program to print elements of an array

let printArrayElements (arr : int[]) =
    for i in arr do
        printf "%d " i

// Here's how to use the function:
let arr = [|1; 2; 3; 4; 5|]
printArrayElements arr // Output: 1 2 3 4 5
```

### Go

```go
// Write a Go program to print elements of an array

package main

import "fmt"

func main() {
	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Println(arr)
}
```

### Haskell

```haskell
-- Write a Haskell program to print elements of an array

showArr :: Show a => [a] -> String
showArr [x] = show x
showArr (x:xs) = show x ++ " " ++ showArr xs

printArr :: Show a => [a] -> IO ()
printArr = (putStrLn . showArr)

main :: IO ()
main = do
    input <- getLine
    let arr = read input :: [Int]
    printArr arr
```

### Java

```java
// Write a Java program to print elements of an array

public class PrintElementsOfAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        printArrayElements(arr);
    }
    static void printArrayElements(int [] nums){
        for(int element: nums){
            System.out.print(element + " ");
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print elements of an array

let array = [1, 2, 3, 4, 5];
console.log(...array);

// here ... is spread operator
```

### Julia

```julia
# Write a Julia program to print elements of an array

arr = [1,2,3,4,5]
foreach(println, arr)
```

### Kotlin

```kotlin
// Write a Kotlin program to print elements of an array

fun main() {
   val array = intArrayOf(1, 2, 3, 4, 5)
   for (element in array) {
        print(element)
        print(' ')
    }
}
```

### Perl

```perl
# Write a Perl program to print elements of an array

@num = (1, 2, 3, 4, 5);
print "@num\n";
```

### PHP

```php
// Write a PHP program to print elements of an array

<?php

function printElements($arr) {
  foreach($arr as $item){
    echo $item . "\n";
}
}

printElements([1,2,3,4,5])

?>
```

### Python

```python
# Write a Python program to print elements of an array

arr = [1, 2, 3, 4, 5]

for num in arr:
    print(num, end=" ")
```

### R

```r
# Write a R program to print elements of an array

# Function to print elements in an array
printArrayElements <- function(arr) {
  n <- length(arr)

  for (i in 1:n) {
    cat(" ", arr[i])
  }
}

# Function call
myArray <- c(1, 2, 3, 4, 5)
printArrayElements(myArray)
```

### Ruby

```ruby
# Write a Ruby program to print elements of an array

def printArrayElements array
    puts array.join(" ")
end

printArrayElements [1,2,3,4,5]
```

### Rust

```rust
// Write a Rust program to print elements of an array

fn main() {
    let arr = [1, 2, 3, 4, 5];

    for i in 0..arr.len() {
        println!("{}", arr[i]);
    }
}
```

### Scala

```scala
// Write a Scala program to print elements of an array

object printArray {
    def main(args:Array[String]):Unit={
        val nums: List[Int] = List(1, 2, 3, 4, 5);
        for ( i <- 0 to (nums.length - 1)) {
         print(nums{i});
        }
    }
}
```

### Swift

```swift
// Write a Swift program to print elements of an array

import Swift
import Foundation

var myArray : [Int] = [1,2,3,4,5]

for i in myArray {
  print(i)
}
```

### TypeScript

```typescript
// Write a TypeScript program to print elements of an array

function printElementsOfAnArray(array: any[]): void {
  console.log(...array);
}

printElementsOfAnArray(["1", "2", "3", "4"]);
```

## Similar programs

- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Find The Smallest Three Elements In An Array](/program/find-the-smallest-three-elements-in-an-array)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Reverse An Array](/program/reverse-an-array)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
- [Print Pattern 1](/program/print-pattern-1)
