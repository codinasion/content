---
title: "Find Sum Of N Natural Numbers Using Formula"
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
    "typescript",
    "julia",
    "scala",
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
    "Shaileshalluri",
    "REVERB283",
    "harshraj8843",
    "VRtheKing",
    "champati-v",
    "AdityaNarayanPradhan",
    "Ishay1997",
    "gsquareg2",
    "anandfresh",
    "vedantpople4",
    "yesayajones",
    "SarthakSanjay",
    "Varun-Dhruv",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:04:32Z
trackId: 5337
description: "Write a program to find sum of n natural numbers using formula."
---

## Table of contents

## Write a program to find sum of n natural numbers using formula

formula: n(n+1)/2

```
Input  : 5
Output : 15
```

---

### C

```c
// Write a C program to find sum of n natural numbers using formula

#include <stdio.h>

int main()
{
    long n;
    scanf("%ld", &n);
    long sum = (n * (n + 1)) / 2;
    printf("%ld\n", sum);
}
```

### C#

```csharp
// Write a C# program to find sum of n natural numbers using formula

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Enter a number:");
    double n = Convert.ToDouble(Console.ReadLine());
    double result = n * (n+1)/2;
    Console.WriteLine("Sum of natural numbers : "+result);
  }
}
```

### C++

```cpp
// Write a C++ program to find sum of n natural numbers using formula

// Sum of N natural numbers Time complexity O(1) and space Complexity O(1);

#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){
    ll n;   cin>>n;
    ll sum = (n*(n+1))/2; // Mathematical formula for Sum of N natural numbers.
    cout<<sum<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### F#

```fsharp
// Write a F# program to find sum of n natural numbers using formula

// function to calculate the sum of the first n natural numbers
let sumOfNaturalNumbers n =
    n * (n + 1) / 2

let n = 10

printfn "%d" (sumOfNaturalNumbers n)
```

### Go

```go
// Write a Go program to find sum of n natural numbers using formula

package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	sum := (num * (num + 1)) / 2
	fmt.Println(sum)
}
```

### Haskell

```haskell
-- Write a Haskell program to find sum of n natural numbers using formula

sumOfNaturalNumbers :: Integer -> Integer
sumOfNaturalNumbers n = n * (n + 1) `div` 2

main :: IO ()
main = do
  putStrLn "Enter the value of n:"
  input <- getLine
  let n = read input :: Integer
  let result = sumOfNaturalNumbers n
  putStrLn $ "The sum of the first " ++ show n ++ " natural numbers is: " ++ show result
```

### Java

```java
// Write a Java program to find sum of n natural numbers using formula

import java.util.Scanner;

public class FindSumOfNNaturalNumbersUsingFormula {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(sumOfnNaturalNumbers(num));
}
    static int sumOfnNaturalNumbers(int n){
        return (n*(n+1))/2;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of n natural numbers using formula

const FindSumOfNNaturalNumbersUsingFormula = n => {
  let sum = (n * (n + 1)) / 2;
  //return sum of n natural numbers
  return sum;
};

//Find sum of 5 natural numbers
console.log(FindSumOfNNaturalNumbersUsingFormula(5));
```

### Julia

```julia
# Write a Julia program to find sum of n natural numbers using formula

function SumOfN(n::Int)
    return (n*(n+1))/2
end
println("Enter the number: ")
n_s = readline()
n = parse(Int, n_s)
println("The sum of first ", n," natural numbers is ", SumOfN(n))
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of n natural numbers using formula

fun main() {
    var value = 5
    println((value*(value+1))/2)
}
```

### Perl

```perl
# Write a Perl program to find sum of n natural numbers using formula

print "Enter a number: ";
my $num = <STDIN> ;

my $res = sumOfNaturalNumber($num);
print "Sum of natural number : $res";

sub sumOfNaturalNumber
{
    my ($x) = @_;
    my $res = $num * ($num+1)/2;
    return $res ;
}
```

### PHP

```php
// Write a PHP program to find sum of n natural numbers using formula

<?php

function sumOfnaturalNumbers($num) {
   return $num * ($num+1)/2;
}

echo sumOfnaturalNumbers(5);

?>
```

### Python

```python
# Write a Python program to find sum of n natural numbers using formula

n = int(input("Enter the nth number : "))


def sumOfnNaturalNumber(n):
    sum = int(n * ((n + 1) / 2))
    return sum


print("Total sum : ", sumOfnNaturalNumber(n))
```

### R

```r
# Write a R program to find sum of n natural numbers using formula

sum_natural <- function(n) {
  sum <- n*(n+1)/2
  return(sum)
}
n<-10
result<-sum_natural(n)
cat("Sum of the first",n,"natural numbers is:",result)
```

### Ruby

```ruby
# Write a Ruby program to find sum of n natural numbers using formula

def sumOfNaturalNumber(num)
  num * (num+1)/2
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter a Number : '
  num = gets.chomp.to_i

  puts "Sum of Natural Number : #{sumOfNaturalNumber(num)}"
end
```

### Rust

```rust
// Write a Rust program to find sum of n natural numbers using formula

use std::io;

fn main() {
    println!("Enter a number:");
    let mut n = String::new();
    io::stdin().read_line(&mut n).expect("Failed to read input.");
    let n: u32 = n.trim().parse().expect("Please enter a valid number.");

    let sum = n * (n + 1) / 2;

    println!("The sum of the first {} natural numbers is {}", n, sum);
}
```

### Scala

```scala
// Write a Scala program to find sum of n natural numbers using formula

import scala.io.StdIn._;

object sumOfNaturalNumber {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        var sum = n*(n+1)/2;
        println("Sum of Natural Number : "+sum);
    }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of n natural numbers using formula

const FindSumOfNNaturalNumbersUsingFormula = (n: number): number => {
  const sum: number = (n * (n + 1)) / 2;
  //console.log(sum)
  return sum;
};
console.log(FindSumOfNNaturalNumbersUsingFormula(5));
export default FindSumOfNNaturalNumbersUsingFormula;
```
