---
title: "Find Average Of Numbers"
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
    "julia",
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "vedantpople4",
    "esivakumar18",
    "jfinley6",
    "rksp25",
    "joao-vitor-souza",
    "thekavikumar",
    "koookee",
    "tanishq-singh-2407",
    "Harsh3341",
    "grraghav120",
    "KaptainCS3",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:16:19Z
trackId: 1855
description: "Write a program to find average of numbers."
---

## Table of contents

## Write a program to find average of numbers

Average of numbers is the sum of all numbers divided by the number of numbers.

```
Input  : 1 2 3 4 5
Output : 3
```

---

### C

```c
// Write a C program to find average of numbers

#include <stdio.h>
int main()
{
    int numEl, i, size = 10;
    float num[size], result = 0.00, avg;

    printf("Enter the numbers of elements: ");
    scanf("%d", &numEl);
    while (numEl > size || numEl < 1)
    {
        printf("Enter a valid range (1 - 10).\n");
        printf("Enter the number of element again: ");
        scanf("%d", &numEl);
    }
    for (i = 0; i < numEl; ++i)
    {
        scanf("%f", &num[i]);
        result += num[i];
    }

    avg = result / numEl;
    printf("Average :%.2f", avg);
    return 0;
}
```

### C#

```csharp
// Write a C# program to find average of numbers

using System;
using System.IO;
public class Average
{
  public static void Main()
  {
     double number1,number2,number3,number4;

     Console.Write("Enter the First number: ");
     number1 = Convert.ToDouble(Console.ReadLine());

     Console.Write("Enter the Second number: ");
     number2 = Convert.ToDouble(Console.ReadLine());

     Console.Write("Enter the third number: ");
     number3 = Convert.ToDouble(Console.ReadLine());

     Console.Write("Enter the fourth number: ");
     number4 = Convert.ToDouble(Console.ReadLine());

     double result = (number1 + number2 + number3 + number4) / 4;
     Console.WriteLine("The average of {0}, {1}, {2}, {3} is: {4} ",
  number1, number2, number3, number4, result);
   }
}
```

### C++

```cpp
// Write a C++ program to find average of numbers

#include<iostream>
using namespace std;
int main(){
    int numEl, i, size = 10;
    float num[size], result = 0.0, avg;

    cout << "Enter the numbers of elements :";
    cin >> numEl;
    while (numEl > size || numEl < 1)
    {
        cout << "Enter a valid range (1 - 10).\n" ;
        cout <<"Enter the number of element again :";
        cin >> numEl
    }
    for (i = 0; i < numEl; ++i)
    {
        cin >> num[i];
        result += num[i];
    }
    avg = result / numEl;
   cout << "Average :%.2f" << avg;
    return 0;
}
```

### Go

```go
// Write a Go program to find average of numbers

package main

import "fmt"

func main() {
	arr := [5]int{1, 2, 3, 4, 5}
	var sum int
	for i := 0; i < 5; i++ {
		sum += arr[i]
	}
	fmt.Println(float64(sum / len(arr)))

}
```

### Java

```java
// Write a Java program to find average of numbers

class FindAverageOfNumbers {
    public static void main(String[] args) {
        int num = 12345;
        int sum = 0;
        int size = 0;

        while (num != 0) {
            sum += num % 10;
            size++;
            num = num / 10;
        }

        int average = sum / size;

        System.out.println(average);
    }
}
```

### JavaScript

````javascript
// Write a JavaScript program to find average of numbers

/**
 *
 * @name This program find average of numbers given.
 * @param {number[]} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1 = FindAverageOfNumbers(2, 4, 6) // 4
 * const avg2 = FindAverageOfNumbers(1, 2, 3, 4, 5) // 3
 * ```
 */
function FindAverageOfNumbers(...nums) {
  let sum = 0;
  nums.map(val => (sum += val));

  return sum / nums.length;
}

// Console Tests
console.log("Average of 2, 4, and 6.");
console.log("That is" + FindAverageOfNumbers(2, 4, 6) + "// 4");

console.log("Average of 1, 2, and 3.");
console.log("That is" + FindAverageOfNumbers(1, 2, 3) + "// 2");

console.log("Average of 12, and 43.");
console.log("That is" + FindAverageOfNumbers(12, 43) + "// 27.5");
````

### Julia

```julia
# Write a Julia program to find average of numbers

using Statistics
A = [1 2 3 4 5]
println(mean(A))
```

### Kotlin

```kotlin
// Write a Kotlin program to find average of numbers

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Average of number $input is : " + FindAverageOfNumbers(input!!))

}

private fun FindAverageOfNumbers(input: String): Double {
    val list = input.toCharArray().map(Character::getNumericValue)

    val avg = list.average()

    return avg
}
```

### Perl

```perl
# Write a Perl program to find average of numbers

print "Enter the number of elements: ";
my $n = <STDIN>;
chomp $n;
my $sum = 0;
for (my $i = 0; $i < $n; $i++) {
  print "Enter element " . ($i+1) . ": ";
  my $num = <STDIN>;
  chomp $num;
  $sum += $num;
}
my $average = $sum / $n;
printf "Average = %.2f\n", $average;
```

### PHP

```php
// Write a PHP program to find average of numbers

<?php
$input = readline("Enter numbers seperated by a space: ");
$arr = explode(" ", $input);
$sumOfNums = 0;
for ($i = 0; $i <= count($arr); $i++) {
    $sumOfNums += $arr[$i];
}
$average = $sumOfNums / count($arr);
echo "The average is $average";
?>
```

### Python

```python
# Write a Python program to find average of numbers

lst = list(map(int, input().split(" ")))
sum = 0
for i in range(0, len(lst)):
    sum = sum + lst[i]
print(sum / len(lst))

# Contributed by Raghav Garg
```

### Ruby

```ruby
# Write a Ruby program to find average of numbers

def findAverageOfNumbers numArray
    average = (numArray.reduce(:+) / numArray.count.to_f).to_s
    puts average.to_s.gsub(/(\.)0+$/, '')  #to_s.gsub method strips any trailing zeros
end

findAverageOfNumbers [1,2,3,4,5]
```

### Rust

```rust
// Write a Rust program to find average of numbers

fn main(){
    let numbers = vec![1,2,3,4,5,6,7,8,9,10];
    let avg: f32;
    let mut sum: i32 = 0;
    {
        for i in &numbers{
            sum = sum + i;
        }
        avg = sum as f32 / numbers.len() as f32;
    }
    println!("{}", avg);
}
```

### Scala

```scala
// Write a Scala program to find average of numbers

object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  var nums = Array(1, 2, 3, 4, 5);

 	  //Sum using for loop
    var total = 0.0;
    for ( i <- 0 to (nums.length - 1)) {
      total += nums(i);
    }
    println(s"\nAverage value of the array elements is: ${total/nums.length}");
 	}
 }
```

### Swift

```swift
// Write a Swift program to find average of numbers

import Swift
import Foundation

var myArray : [Int] = [1,2,3,4,5]
var arraySum = myArray.reduce(0, +)
var length = myArray.count
var average = Double(arraySum)/Double(length)

print("Array:", myArray)
print("Average:", average)
```

### TypeScript

````typescript
// Write a TypeScript program to find average of numbers

/**
 *
 * @name This program find average of numbers given.
 * @param {number[]} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1: number = FindAverageOfNumbersTs(2, 4, 6) // 4
 * const avg2: number = FindAverageOfNumbersTs(1, 2, 3, 4, 5) // 3
 * ```
 */
function FindAverageOfNumbersTs(...nums: number[]): number {
  let sum = 0;
  nums.map(val => (sum += val));

  return sum / nums.length;
}

// Console Tests
console.log("Average of 2, 4, and 6.");
console.log("That is" + FindAverageOfNumbersTs(2, 4, 6) + "// 4");

console.log("Average of 1, 2, and 3.");
console.log("That is" + FindAverageOfNumbersTs(1, 2, 3) + "// 2");

console.log("Average of 12, and 43.");
console.log("That is" + FindAverageOfNumbersTs(12, 43) + "// 27.5");
````
