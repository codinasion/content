---
title: "Find Sum Of Squares Of Numbers"
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
    "anvithayerneni",
    "swapnilmukherjee",
    "SaideepKondur",
    "lululululu0907",
    "anandfresh",
    "rakibul-islam-raju",
    "harshraj8843",
    "Tushar12222",
    "Ayush-Sarda",
    "esivakumar18",
    "gsquareg2",
    "bnzone",
    "Noga212",
    "jfinley6",
    "SarthakSanjay",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-29T12:31:10Z
trackId: 5250
description: "Write a program to find sum of squares of numbers."
---

## Table of contents

## Write a program to find sum of squares of numbers

Suppose you have a list of numbers, and you want to find the sum of the squares of those numbers. For example, if you have the list `[1, 2, 3]`, you want to find the sum of the squares of those numbers, which is `1^2 + 2^2 + 3^2 = 14`.

```
Input  : 1 2 3 4 5
Output : 55
```

---

### C

```c
// Write a C program to find sum of squares of numbers

#include <stdio.h>

int sum_squares(int input[],int n);

int main()
{
    printf("Enter the size of the input array :");
    int n;  scanf("%d",&n);
    int input[n];


    printf("Enter the values :\n");
    for(int i =0;i<n;i++){
        scanf("%d" , &input[i]);
    }

    sum_squares(input,n);

    return 0;
}

int sum_squares(int input[], int n)
{
    int i=0;
    int sum=0;

    for (i=0; i<n ; ++i)
    {
        sum+=(input[i]*input[i]);
    }

    printf("sum = %d\n",sum);

    return sum;
}
```

### C#

```csharp
// Write a C# program to find sum of squares of numbers

using System;
using System.Linq;
namespace exercise
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 1, 2, 3 };
            Console.WriteLine("Sum of squares of elements: " + squares(nums));

        }
        public static int squares(int[] nums)
        {
            int squares_sum = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                squares_sum = squares_sum + (int)Math.Pow(nums[i], 2);
            }
            return (int)squares_sum;
        }
    }
}
```

### C++

```cpp
// Write a C++ program to find sum of squares of numbers

// Calculates the sum of square of the inputted numbers.
#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){
    ll n;   cin>>n;
    ll sum=0;
    for(int i=0;i<n;i++){
        ll input;   cin>>input;
        sum+= input*input;
    }

    cout<<sum<<endl;

    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to find sum of squares of numbers

int sumOfSq(List<int> arr){
  int sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += (arr[i] * arr[i]);
  }
  return sum;
}
void main(){
  List<int> arr = [1 ,2 ,3 ,4 ,5];
  print(sumOfSq(arr));
}
```

### F#

```fsharp
// Write a F# program to find sum of squares of numbers

// a function to calculate the sum of squares
let sumOfSquares numbers =
    numbers
    |> List.map (fun x -> x * x) // Square each element
    |> List.sum                // Sum the squared elements

// Reads a list of numbers from the user
printfn "Enter a list of numbers separated by spaces:"
let input = System.Console.ReadLine()
let numbers = input.Split(' ') |> Array.toList |> List.map int

// Calculate and print the sum of squares
let result = sumOfSquares numbers
printfn "The sum of squares of the numbers is %d" result
```

### Go

```go
// Write a Go program to find sum of squares of numbers

package main

import "fmt"

func findSumOfSquaresOfNumbers(arr []int) int {
   sum := 0
   for e := range arr {
      sum += e * e
   }
   return sum
}

func main(){
   fmt.Println(findSumOfSquaresOfNumbers([]int{1, 2, 3, 4, 5}))
}
```

### Haskell

```haskell
-- Write a Haskell program to find sum of squares of numbers

-- Define a function to calculate the sum of squares
sumOfSquares :: [Int] -> Int
sumOfSquares [] = 0
sumOfSquares (x:xs) = x^2 + sumOfSquares xs

-- Main function to read input and print output
main :: IO ()
main = do
  putStrLn "Enter a list of numbers separated by spaces:"
  input <- getLine
  let numbers = map read (words input) :: [Int]
  let result = sumOfSquares numbers
  putStrLn $ "Sum of squares: " ++ show result
```

### Java

```java
// Write a Java program to find sum of squares of numbers

import java.util.Scanner;
public class Main
{
    public static int SquareSum(int a[],int size)
    {
        int sum=0;
        int square=0;
        for(int i=0;i<size;i++)
        {
            square=a[i]*a[i];
            sum=sum+square;
        }
        return sum;
    }

    public static void main(String[] args)
    {
        int j=0;
        int[] arr=new int[40];
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of array");
        int size=sc.nextInt();
        System.out.println("Enter the elements");
        for(int i=0;i<size;i++)
              arr[i]=sc.nextInt();
        System.out.print("Sum of squares of elements is : "+SquareSum(arr,size));
     }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of squares of numbers

let input = [1, 2, 3, 4, 5];

let sumOfSquaresOfNumbers = 0;

for (let i = 0; i < input.length; i++) {
  sumOfSquaresOfNumbers = sumOfSquaresOfNumbers + Math.pow(input[i], 2);
}

console.log(sumOfSquaresOfNumbers);
```

### Julia

```julia
# Write a Julia program to find sum of squares of numbers

function sum_of_squares(numbers::Array{Int, 1})
    return sum(x -> x^2, numbers)
end

function get_user_input()
    println("Enter numbers separated by spaces:")
    input_line = readline()
    try
        return [parse(Int, x) for x in split(input_line)]
    catch
        println("Error: Invalid input. Please enter only integers separated by spaces.")
        return []
    end
end

# Main program execution
numbers = get_user_input()
if !isempty(numbers)
    println("Sum of squares: ", sum_of_squares(numbers))
else
    println("No valid input provided.")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of squares of numbers

fun main() {
   val array = intArrayOf(1,2,3)
   var sum = 0
   for (element in array) {
       sum += (element * element)
   }
   println(sum)
}
```

### Perl

```perl
# Write a Perl program to find sum of squares of numbers

my $array = [1, 2, 3, 4, 5];
my $iter_sum = 0;
for my $each (@$array) {
    $iter_sum += $each * $each;
}
print $iter_sum;
```

### PHP

```php
// Write a PHP program to find sum of squares of numbers

<?php

function sumofSquares($n)
{
    $sum = 0;
    for ($i = 1; $i <= count($n); $i++)
        $sum += ($i * $i);

    return $sum;
}


echo sumofSquares([1,2,3,4,5]);


?>
```

### Python

```python
# Write a Python program to find sum of squares of numbers

numbers = [1, 2, 3, 4, 5]
sum = 0
for num in numbers:
    sum = sum + num**2

print(sum)
```

### R

```r
# Write a R program to find sum of squares of numbers

numbers <- c(1, 2, 3, 4, 5)
square_sum <- sum(numbers^2)

print(paste("The sum of squares of the numbers is:", square_sum))
```

### Ruby

```ruby
# Write a Ruby program to find sum of squares of numbers

def findSumOfSquaresOfNumbers numArray
    sum = 0
    numArray.each {|num| sum += num ** 2 }
    puts sum
end

findSumOfSquaresOfNumbers [1, 2, 3, 4, 5]
```

### Rust

```rust
// Write a Rust program to find sum of squares of numbers

fn sum_of_squares(numbers: &[i32]) -> i32 {
    let mut sum = 0;
    for &num in numbers {
        sum += num * num;
    }
    sum
}
```

### Scala

```scala
// Write a Scala program to find sum of squares of numbers

val numbers = List(1, 2, 3, 4, 5)
val sum = numbers.map(num => num * num).sum

println(sum)
```

### Swift

```swift
// Write a Swift program to find sum of squares of numbers

import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
var sum = 0
for i in numbers {
  sum = sum + i * i
}

print(sum)
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of squares of numbers

function sumOfSquares(numbers: number[]): number {
  let sum = 0;
  for (const number of numbers) {
    sum += number * number;
  }
  return sum;
}
```
