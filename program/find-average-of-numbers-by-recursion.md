---
title: "Find Average Of Numbers By Recursion"
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
    "scala",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "srini696",
    "pradeepch2107",
    "Shubham-2110",
    "psmanam",
    "akshithagunupati",
    "sahanasurapureddy",
    "1movemate",
    "AdityaNarayanPradhan",
    "anandfresh",
    "UrielOfir",
    "dineshlalam15",
    "tirumalarakesh",
    "mrajesh09",
    "vagesh-verma",
    "swapn652",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 4611
description: "Write a program to find average of numbers by recursion."
---

## Write a program to find average of numbers by recursion

Average of numbers is the sum of all numbers divided by the number of numbers. For example, the average of 1, 2, 3, 4, 5 is 3. The average of 1, 2, 3, 4, 5, 6 is 3.5.

Average of numbers can be calculated by recursion. The average of numbers is the sum of the first number and the average of the rest of the numbers. The average of the rest of the numbers is the sum of the second number and the average of the rest of the numbers. The average of the rest of the numbers is the sum of the third number and the average of the rest of the numbers. And so on.

```
Input  : 1 2 3 4 5
Output : 3
```

---

```c
// Write a C program to find average of numbers by recursion

#include <stdio.h>

float findSumByRecursion(int a[], int index, int n)
{
    if (index == n)
    {
        return 0;
    }

    return a[index] + findSumByRecursion(a, index + 1, n);
}
int main()
{
    int input[10000], n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &input[i]);
    }

    float sum = findSumByRecursion(input, 0, n);

    printf("Average : %f\n", sum / n);
}
```

```csharp
// Write a C# program to find average of numbers by recursion

using System;
class Average {

    static double average(int []a, int n)
    {

        int sum = 0;

        for (int i = 0; i < n; i++)
            sum += a[i];

        return (double)sum / n;
    }

    public static void Main ()
    {

        int []arr = {1, 2, 3, 4, 5};
        int n = arr.Length;

        Console.Write(average(arr, n));
    }
}
```

```cpp
// Write a C++ program to find average of numbers by recursion

#include <iostream>
using namespace std;

double FindAverageByRecursion(double arr[], int index, int num)
{
    if (index == num)
    {
        return 0;
    }
    double total = arr[index] + FindAverageByRecursion(arr, index + 1, num);
    if (index == 0)
        return total / num;
    return total;
}
int main()
{
    int numEle;
    cout << "Enter the number of elements :";
    cin >> numEle;

    double arr[numEle];
    for (int i = 0; i < numEle; ++i)
    {
        cin >> arr[i];
    }
    cout << "Average : " << FindAverageByRecursion(arr, 0, numEle);
    return 0;
}
```

```fsharp
// Write a F# program to find average of numbers by recursion

let rec average (numbers : int list) =
    match numbers with
    | [] -> 0.0 // Base case: empty list, return 0
    | x::xs -> (float x + average xs * float (List.length xs)) / float (List.length numbers)

let input = [1; 2; 3; 4; 5]
let result = average input

printfn "Average of numbers: %.1f" result
```

```java
// Write a Java program to find average of numbers by recursion

import java.util.Scanner;

public class FindAverageOfDigitsOfANumberByRecursion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(findAverage(num));
    }
    static double findAverage(int num){
        return helper(num,0,0);
    }
    static double helper(int num, int sum, int count){
        if(num == 0){
            return (double)sum/count;
        } return helper(num/10, sum + num%10, count+1);
    }
}
```

```javascript
// Write a JavaScript program to find average of numbers by recursion

function avgRec(a, i, n) {
  if (i == n - 1) return a[i];

  if (i == 0) return (a[i] + avgRec(a, i + 1, n)) / n;

  return a[i] + avgRec(a, i + 1, n);
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

console.log(avgRec(arr, 0, n));
```

```kotlin
// Write a Kotlin program to find average of numbers by recursion

// a is array, i is index and n is size of array
fun avgRec(a: IntArray, i: Int, n: Int): Double {
    // for last element
    if (i == n - 1) return a[i].toDouble()

    // When index is 0, divide sum computed so far by n and compute sum
    return if (i == 0) (a[i] + avgRec(a, i + 1, n)) / n else a[i] + avgRec(a, i + 1, n)
}

fun main() {
    val arr = intArrayOf(1, 2, 3, 4, 5)
    val avgByRecursion = (avgRec(arr, 0, arr.size));
    println("Average By Recursion = $avgByRecursion")
}
```

```perl
# Write a Perl program to find average of numbers by recursion

#!/usr/bin/perl

use strict;
use warnings;

sub calc_average {
    my ($numbers_ref, $start_index, $end_index) = @_;
    if ($start_index > $end_index) {
        return 0;
    }

    elsif ($start_index == $end_index) {
        return $numbers_ref->[$start_index];
    }

    else {
        my $mid_index = int(($start_index + $end_index) / 2);
        my $left_average = calc_average($numbers_ref, $start_index, $mid_index);
        my $right_average = calc_average($numbers_ref, $mid_index+1, $end_index);
        my $total_sum = $left_average + $right_average;
        my $average_value = int($total_sum / 2);
        return $average_value;
    }
}

my @numbers = (1, 2, 3, 4, 5);
my $average_value = calc_average(\@numbers, 0, $#numbers);
print "The average value is $average_value\n";
```

```php
// Write a PHP program to find average of numbers by recursion

<?php

function averageRecursion($a, $i, $n)
{
    if ($i == $n - 1)
        return $a[$i];

    if ($i == 0)
        return (($a[$i] + averageRecursion($a, $i + 1, $n)) / $n);

    return ($a[$i] + averageRecursion($a, $i + 1, $n));
}


$arr = [1,2,3,4,5];
$n = sizeof($arr);

echo averageRecursion($arr, 0, $n);

?>
```

```python
# Write a Python program to find average of numbers by recursion

def avgRec(a, i, n):
    if i == n - 1:
        return a[i]

    if i == 0:
        return (a[i] + avgRec(a, i + 1, n)) / n

    return a[i] + avgRec(a, i + 1, n)


arr = [1, 2, 3, 4, 5]
n = len(arr)
print(avgRec(arr, 0, n))
```

```r
# Write a R program to find average of numbers by recursion

calculate_average <- function(numbers, n) {
  if (n == 1) {
    return(numbers[1])
  } else {
    return((numbers[n] + (n - 1) * calculate_average(numbers, n - 1)) / n)
  }
}

numbers <- c(1, 2, 3, 4, 5)
result <- calculate_average(numbers, length(numbers))

cat("Average of numbers is:", result, "\n")
```

```ruby
# Write a Ruby program to find average of numbers by recursion

def calculate_average(numbers, index = 0)
  if index == numbers.length - 1
    return numbers[index].to_f
  else
    return numbers[index].to_f + calculate_average(numbers, index + 1)
  end
end

def main
  puts "Enter numbers separated by spaces:"
  input = gets.chomp
  numbers = input.split.map(&:to_i)

  if numbers.empty?
    puts "No numbers entered. Exiting program."
  else
    average = calculate_average(numbers) / numbers.length
    puts "The average of #{numbers.join(', ')} is: #{average}"
  end
end

main
```

```rust
// Write a Rust program to find average of numbers by recursion

use std::io;
use std::str::FromStr;

fn average_recursive(numbers: &[i32], sum: f64, count: usize) -> f64 {
    match numbers {
        [] => sum / count as f64,
        [first, rest @ ..] => {
            let new_sum = sum + *first as f64;
            let new_count = count + 1;
            average_recursive(rest, new_sum, new_count)
        }
    }
}

fn main() {
    println!("Enter numbers separated by space:");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let numbers: Vec<i32> = input
        .split_whitespace()
        .filter_map(|num| i32::from_str(num).ok())
        .collect();

    if numbers.is_empty() {
        println!("No numbers entered.");
        return;
    }

    let avg = average_recursive(&numbers, 0.0, 0);
    println!("The average is {}", avg);
}
```

```scala
// Write a Scala program to find average of numbers by recursion

//Write a Scala program to find average of numbers by recursion

object AverageCalculator {
  def main(args: Array[String]): Unit = {
    println("Enter numbers separated by space:")
    val input = scala.io.StdIn.readLine()
    val numbers = input.split(" ").map(_.toInt).toList

    if (numbers.nonEmpty) {
      val average = calculateAverage(numbers)
      println(s"Average: $average")
    } else {
      println("Please enter at least one number.")
    }
  }

  def calculateAverage(numbers: List[Int]): Double = {
    def helper(list: List[Int], sum: Int, count: Int): Double = {
      list match {
        case Nil => sum.toDouble / count
        case head :: tail => helper(tail, sum + head, count + 1)
      }
    }
    helper(numbers, 0, 0)
  }
}
```

```swift
// Write a Swift program to find average of numbers by recursion

import Foundation
/*

This Swift program calculates the average of a list of numbers using recursion. The user is prompted to input a series of numbers separated by spaces. The program then employs a recursive algorithm to compute the sum of the provided numbers, and subsequently, calculates and displays their average. In the event of invalid input, the program notifies the user and prompts for a valid list of numbers. This implementation is designed for simplicity and educational purposes, offering a basic example of recursive function usage in Swift.

Sample Input:
    Enter a list of numbers separated by spaces:
    5.0 10.0 15.0 20.0

Sample Output:
    Numbers: [5.0, 10.0, 15.0, 20.0]
    Average: 12.5

*/



func calculateAverage(numbers: [Double]) -> Double {
    return sumOfNumbers(numbers: numbers) / Double(numbers.count)
}

func sumOfNumbers(numbers: [Double]) -> Double {
    guard let firstNumber = numbers.first else {
        return 0
    }
    let remainingNumbers = Array(numbers.dropFirst())
    return firstNumber + sumOfNumbers(numbers: remainingNumbers)
}

// Get input from the user
print("Enter a list of numbers separated by spaces:")
if let input = readLine(), !input.isEmpty {
    let numbers = input.split(separator: " ").compactMap { Double($0) }

    if !numbers.isEmpty {
        let average = calculateAverage(numbers: numbers)
        print("Numbers: \(numbers)")
        print("Average: \(average)")
    } else {
        print("Invalid input. Please enter valid numbers.")
    }
} else {
    print("Invalid input. Please enter valid numbers.")
}
```

```typescript
// Write a TypeScript program to find average of numbers by recursion

function average_of_numbers(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }
  const innerArray: number[] = arr.slice(1);
  return (
    (arr[0] + average_of_numbers(innerArray) * innerArray.length) / arr.length
  );
}

const array = [1, 2, 3, 4, 5];
console.log(average_of_numbers(array));
```
