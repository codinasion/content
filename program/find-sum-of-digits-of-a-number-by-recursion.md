---
title: "Find Sum Of Digits Of A Number By Recursion"
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
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "telatin",
    "anandfresh",
    "sancoLgates",
    "esivakumar18",
    "joao-vitor-souza",
    "grraghav120",
    "greeshma-d",
    "Harsh3341",
    "SRR-CODER",
    "demperor-music",
    "UsmanFani",
    "rakibul-islam-raju",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 733
description: "Write a program to find sum of digits of a number by recursion."
---

## Table of contents

## Write a program to find sum of digits of a number by recursion

Suppose we have a number `n` and we want to find the sum of its digits. For example, if `n = 123`, then the sum of its digits is `1 + 2 + 3 = 6`.

Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. In this case, we can use recursion to find the sum of digits of a number.

```
Input  : 123
Output : 6
```

---

### C

```c
// Write a C program to find sum of digits of a number by recursion

#include <stdio.h>

int FindSumOfDigitsOfANumberByRecursion(int n){
    if(n>0){
        return n%10+FindSumOfDigitsOfANumberByRecursion(n/10);
    }
}

int main(){
    int n;
    scanf("%d",&n);
    int res=FindSumOfDigitsOfANumberByRecursion(n);
    printf("%d",res);
    return 0;
}

//Contributed by Raghav Garg
```

### C#

```csharp
// Write a C# program to find sum of digits of a number by recursion

using System;
class Digits{
static int SumOfDigit(int n)
{
    if (n == 0)
        return 0;

    return(n % 10 + SumOfDigit(n / 10));
}

public static void Main()
{
    int n = 1234;
    int ans = SumOfDigit(n);
    Console.Write("Sum of digits : " + ans);
}
}
```

### C++

```cpp
// Write a C++ program to find sum of digits of a number by recursion

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int sum_of_digits(int n)
{
    if(n==0)
    {
        return 0;
    }
    int x=n%10;
    int s=n/10;
    return x+sum_of_digits(s);
}


int main() {
	int number;
	cin>>number;
	cout<<sum_of_digits(number)<<endl;


	return 0;
}
```

### Go

```go
// Write a Go program to find sum of digits of a number by recursion

package main

import "fmt"

func sumRecursive(nums int) int {
	if (nums == 0) {
		return 0
	}
	return nums % 10 + sumRecursive(nums / 10)
}

func main() {
	var i int
	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)
	fmt.Println(sumRecursive(i))
}
```

### Java

```java
// Write a Java program to find sum of digits of a number by recursion

public class FindSumOfDigitsOfANumberByRecursion {
    public static void main(String[] args) {

        int num = 12345;
        System.out.print(sum(num));
    }

    static int sum(int num) {
        if (num == 0) {
            return 0;
        }

        return (num % 10 + sum(num / 10));
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find sum of digits of a number by recursion

function sumOfDigits(num) {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
  }
}

sumOfDigits(12345);

console.log("Sum of Digits of sumOfDigits(12345) is", sumOfDigits(12345));
```

### Kotlin

```kotlin
// Write a Kotlin program to find sum of digits of a number by recursion

class FindSumOfDigitsOfANumberByRecursion {
    fun findSum(num: Int): Int {
        return recursiveSum(num)
    }

    private fun recursiveSum(num: Int): Int {
        if (num == 0) return 0
        val digit = num / 10
        return num % 10 + recursiveSum(digit)
    }
}
```

### Perl

```perl
# Write a Perl program to find sum of digits of a number by recursion

#!/usr/bin/perl

use strict;
use warnings;

sub sum_of_digits {
    my $n = shift;
    if ($n == 0) {
        return 0;
    }
    else {
        my $last_digit = $n % 10;
        my $rest_of_number = int($n / 10);
        return $last_digit + sum_of_digits($rest_of_number);
    }
}

if (scalar @ARGV > 0) {
   my $n = shift @ARGV;
   my $sum = sum_of_digits($n);
   print "Input:   $n\nOutput:  $sum\n";
} else {
   die "ERROR: Missing input number\n";
}
```

### PHP

```php
// Write a PHP program to find sum of digits of a number by recursion

<?php
  function recursiveAdd($arg) {
    if ($arg>9) {
        return $arg%10 + recursiveAdd(floor($arg/10));
    } else {
        return $arg;
    }
  }

  echo recursiveAdd(123456789);
?>
```

### Python

```python
# Write a Python program to find sum of digits of a number by recursion

def sum_of_digit(n):
    if n == 0:
        return 0
    return n % 10 + sum_of_digit(int(n / 10))


num = int(input())
result = sum_of_digit(num)
print(result)
```

### Ruby

```ruby
# Write a Ruby program to find sum of digits of a number by recursion

def SumOfDigits(num,sum)
	if num > 0
		sum += (num % 10);
		SumOfDigits(num / 10,sum);
	else
	    return sum;
	end
end

print "Enter a number: ";
number = gets.chomp.to_i;

result = SumOfDigits(number, 0);
print "Sum of digits: ",result;
```

### Rust

```rust
// Write a Rust program to find sum of digits of a number by recursion

use std::io;
use std::io::Write;

fn main() {
    let mut num = String::new();
    let mut sum: i64 = 0;

    print!("Insert number: ");
    io::stdout().flush().unwrap();

    io::stdin()
        .read_line(&mut num)
        .expect("Failed to read line");

    let mut num: i64 = num
        .trim()
        .parse()
        .expect("Please enter a valid number!");

    while num > 0 {
        sum += num%10;
        num /= 10
    }
    println!("{sum}");
}
```

### Scala

```scala
// Write a Scala program to find sum of digits of a number by recursion

object sumOfDigits{
def calc (num:Int): Int = if(num == 0) 0 else (num % 10) + calc(num/10)
def main(args:Array[String]) {
println(calc(123))
}
}
```

### TypeScript

```typescript
// Write a TypeScript program to find sum of digits of a number by recursion

function sumOfDigits(num: number): number {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
  }
}

console.log("Sum of Digits -> 12345 is", sumOfDigits(12345));
```
