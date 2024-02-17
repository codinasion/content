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

## Write a program to print elements of an array

```
Input  : [1, 2, 3, 4, 5]
Output : 1 2 3 4 5
```

---

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

```dart
// Write a Dart program to print elements of an array

void main(List<String> args) {
  List<dynamic> list = [1, "2", false, 3.5];
  print(list);
}
```

```fsharp
// Write a F# program to print elements of an array

let printArrayElements (arr : int[]) =
    for i in arr do
        printf "%d " i

// Here's how to use the function:
let arr = [|1; 2; 3; 4; 5|]
printArrayElements arr // Output: 1 2 3 4 5
```

```go
// Write a Go program to print elements of an array

package main

import "fmt"

func main() {
	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Println(arr)
}
```

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

```javascript
// Write a JavaScript program to print elements of an array

let array = [1, 2, 3, 4, 5];
console.log(...array);

// here ... is spread operator
```

```julia
# Write a Julia program to print elements of an array

arr = [1,2,3,4,5]
foreach(println, arr)
```

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

```perl
# Write a Perl program to print elements of an array

@num = (1, 2, 3, 4, 5);
print "@num\n";
```

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

```python
# Write a Python program to print elements of an array

arr = [1, 2, 3, 4, 5]

for num in arr:
    print(num, end=" ")
```

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

```ruby
# Write a Ruby program to print elements of an array

def printArrayElements array
    puts array.join(" ")
end

printArrayElements [1,2,3,4,5]
```

```rust
// Write a Rust program to print elements of an array

fn main() {
    let arr = [1, 2, 3, 4, 5];

    for i in 0..arr.len() {
        println!("{}", arr[i]);
    }
}
```

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

```swift
// Write a Swift program to print elements of an array

import Swift
import Foundation

var myArray : [Int] = [1,2,3,4,5]

for i in myArray {
  print(i)
}
```

```typescript
// Write a TypeScript program to print elements of an array

function printElementsOfAnArray(array: any[]): void {
  console.log(...array);
}

printElementsOfAnArray(["1", "2", "3", "4"]);
```