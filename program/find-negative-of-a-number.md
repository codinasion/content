---
title: "Find Negative Of A Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
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
    "anandfresh",
    "AdityaNarayanPradhan",
    "esivakumar18",
    "vedantpople4",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "raphaelts3",
    "ynbh",
    "BiscuitCandy",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1810
description: "Write a program to find negative of a number."
---

## Table of contents

## Write a program to find negative of a number

```
Input  : 5
Output : -5
```

---

### C

```c
// Write a C program to find negative of a number

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    printf("%d\n", -1 * n);
}
```

### C#

```csharp
// Write a C# program to find negative of a number

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine("Negative number : -"+num);
  }
}
```

### C++

```cpp
// Write a C++ program to find negative of a number

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;cin>>n;
    cout<<(n*-1)<<'\n';
}

//Contributed by Raghav Garg
```

### F#

```fsharp
// Write a F# program to find negative of a number

let negativeOfNumber num : int =
  num

let result =  negativeOfNumber 5

printfn "Negative of given number : -%d" result
```

### Go

```go
// Write a Go program to find negative of a number

package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	ans := num * (-1)
	fmt.Println(ans)
}
```

### Java

```java
// Write a Java program to find negative of a number

import java.util.Scanner;

public class FindNegativeOfANumber {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        System.out.println(computeNegative(number));
        scanner.close();
    }

    public static int computeNegative(int number) {
        return -1 * number;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find negative of a number

function findNegativeOfANumber(num) {
  return num * -1;
}

const inverse = findNegativeOfANumber(5);
console.log(inverse);
```

### Perl

```perl
# Write a Perl program to find negative of a number

#!/usr/bin/perl
use warnings;
use strict;
print "Enter a number : ";
my $num = <STDIN>;
print "Negative Number : -".$num, "\n";
```

### PHP

```php
// Write a PHP program to find negative of a number

<?php

declare(strict_types=1);
printf("Input a number: ");
$fin = fopen("php://stdin", "r");
$line = fgets($fin);
printf("Output: %d\n", -intval($line));
```

### Python

```python
# Write a Python program to find negative of a number

def negative(n: int) -> int:
    return -n


if __name__ == "__main__":
    n = input("Enter an integer: ")
    print("Negative of", n, "is", negative(int(n)))
```

### Ruby

```ruby
# Write a Ruby program to find negative of a number

print "Enter a number : "
num = gets.chomp.to_i
num =num*-1
print "Negative : #{num}"
```

### Rust

```rust
// Write a Rust program to find negative of a number

fn negative_of_a_number(num: i32) -> i32 {
    return num*-1;
}

fn main() {
    let inverse = negative_of_a_number(5);
    println!("{}", inverse);
}
```

### Scala

```scala
// Write a Scala program to find negative of a number

object HelloWorld {
	def main(args: Array[String]): Unit = {
	 var n = scala.io.StdIn.readInt();

   println("Negative : " + n * -1);
	}
}
```

### Swift

```swift
// Write a Swift program to find negative of a number

import Swift
import Foundation

var n = 5
var negativeN = -1 * 5
print("negative of 5 : ", negativeN)
```

### TypeScript

```typescript
// Write a TypeScript program to find negative of a number

function findNegativeOfANumber(num: number) {
  return num * -1;
}

const inverse = findNegativeOfANumber(5);
console.log(inverse);
```
