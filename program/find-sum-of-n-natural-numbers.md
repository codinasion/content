---
title: "Find Sum Of N Natural Numbers"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "scala",
    "go",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "esivakumar18",
    "sancoLgates",
    "rksp25",
    "dineshlalam15",
    "joao-vitor-souza",
    "Khushi260",
    "PraaneshSelvaraj",
    "jyotik09",
    "grraghav120",
    "Harsh3341",
    "rahmat-dev",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1572
description: "Write a program to find sum of n natural numbers."
---

## Write a program to find sum of n natural numbers

```
Input  : 5
Output : 15
```

---

```c
// Write a C program to find sum of n natural numbers

#include <stdio.h>

int main(){

    int n,sum=0;;
    scanf("%d",&n);
    for(int i=1;i<=n;i++) sum+=i;
    printf("%d",sum);
    return 0;
}

//Contributed by Raghav Garg
```

```csharp
// Write a C# program to find sum of n natural numbers

using System;
public class Exercise3
{
    public static void Main()
{
   int i,n,sum=0;

	Console.Write("\n\n");
    Console.Write("Display n terms of natural number and their sum:\n");
    Console.Write("----------------------------------------------");
    Console.Write("\n\n");

   Console.Write("Input Value of terms : ");
   n= Convert.ToInt32(Console.ReadLine());
   Console.Write("\nThe first {0} natural number are :\n",n);
   for(i=1;i<=n;i++)
   {
     Console.Write("{0} ",i);
     sum+=i;
   }
   Console.Write("\nThe Sum of Natural Number upto {0} terms : {1} \n",n,sum);
  }
}
```

```cpp
// Write a C++ program to find sum of n natural numbers

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;cin>>n;
    int sum=0;
    for(int i=1;i<=n;i++)sum+=i;
    cout<<sum<<'\n';
}
```

```go
// Write a Go program to find sum of n natural numbers

package main

import "fmt"

func sumOfNumbers(nums int) int {
	return nums * (nums+1) / 2
}

func main() {
	var i int
	fmt.Print("Input Number: ")
	fmt.Scan(&i)
	fmt.Println(sumOfNumbers(i))
}
```

```javascript
// Write a JavaScript program to find sum of n natural numbers

function sumOfNumbers(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfNumbers(5));
```

```kotlin
// Write a Kotlin program to find sum of n natural numbers

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Sum of natural number $input is : " + FindSumOfNNaturalNumbers(input!!.toInt()))

}

private fun FindSumOfNNaturalNumbers(num: Int): Int {
    var sum = 0

    for (i in 1..num) {
        sum += i
    }

    return sum
}
```

```php
// Write a PHP program to find sum of n natural numbers

<?php

function find_sum_of_n_natural_numbers($n)
{
	return $n * ($n + 1) / 2;
}

echo find_sum_of_n_natural_numbers(5);
```

```python
# Write a Python program to find sum of n natural numbers

def find_sum_of_n_natural_numbers(x):
    return int(x * (x + 1) / 2)


print(find_sum_of_n_natural_numbers(5))
```

```ruby
# Write a Ruby program to find sum of n natural numbers

print "Enter a number : "
n = gets.chomp.to_i
sum = (n*(n+1))/2
print "Sum : #{sum}"
```

```rust
// Write a Rust program to find sum of n natural numbers

fn find_sum_of_n_natural_numbers(n: u16) -> u16 {
	return n * (n + 1) / 2;
}

fn main() {
	println!("{}", find_sum_of_n_natural_numbers(5));
}
```

```scala
// Write a Scala program to find sum of n natural numbers

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  var n = scala.io.StdIn.readInt();

	 //Sum using for loop
   var total = 0;
   for (i <- 0 to n) {
     total += i;
   }
   println(s"\nSum: ${total}");
	}
}
```

```swift
// Write a Swift program to find sum of n natural numbers

import Swift
import Foundation

var n = 5
var sum = (n * (n + 1)/2)
print("sum: ", sum)
```

```typescript
// Write a TypeScript program to find sum of n natural numbers

function sumOfNumbers(n: number): number {
  return (n * (n + 1)) / 2;
}

console.log(sumOfNumbers(5));
```
