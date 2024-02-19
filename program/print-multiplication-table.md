---
title: "Print Multiplication Table"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "go",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "Preetraj2002",
    "james-tharit",
    "apurvagandhi",
    "anandfresh",
    "esivakumar18",
    "AbhinavPrabhat01",
    "jfinley6",
    "codingkush",
    "Chirag8023",
    "metaloozee",
    "xinwei47",
    "joao-vitor-souza",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-04T18:35:09Z
trackId: 1686
description: "Write a program to print multiplication table."
---

## Table of contents

## Write a program to print multiplication table

```
Input  : 2

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

---

### C

```c
// Write a C program to print multiplication table

#include <stdio.h>
int main() {
  int n, i;
  printf("Input: ");
  scanf("%d", &n);
  for (i = 1; i <= 10; ++i) {
    printf("%d x %d = %d \n", n, i, n * i);
  }
  return 0;
}
```

### C#

```csharp
// Write a C# program to print multiplication table

using System;
public class Multiplication
{
    public static void Main()
{
   int j,n;
   Console.Write("Enter a number to generate multiplication table: ");
   n= Convert.ToInt32(Console.ReadLine());
   Console.Write("\n");
   for(j=1;j<=10;j++)
   {
     Console.Write("{0} X {1} = {2} \n",n,j,n*j);
   }
  }
}
```

### C++

```cpp
// Write a C++ program to print multiplication table

/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

#include <iostream>

using namespace std;

int main()
{

    int number;

    cout << "\n\nEnter the number whose table you want -> ";
    cin >> number;

    int temp = 1;

    while (temp < 11)
    {
        cout << number << " x " << temp << " = " << number * temp << endl;
        temp++;
    }

    return 0;
}
```

### Go

```go
// Write a Go program to print multiplication table

package main

import (
	"fmt"
)

func main() {
	// Get the number from the user
	var number int
	fmt.Print("Enter a number: ")
	fmt.Scanf("%d", &number)

	// Print the multiplication table
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d x %d = %d\n", number, i, number*i)
	}
}
```

### Java

```java
// Write a Java program to print multiplication table

import java.util.Scanner;
public class TableExample
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.print("Enter number: ");
//reading a number whose table is to be print
int num=sc.nextInt();
//loop start execution form and execute until the condition i<=10 becomes false
for(int i=1; i <= 10; i++)
{
//prints table of the entered number
System.out.println(num+" * "+i+" = "+num*i);
}
}
}
```

### JavaScript

```javascript
// Write a JavaScript program to print multiplication table

function PrintMultiplicationTable() {
  const number = parseInt(prompt("Enter an integer:"));
  const range = parseInt(prompt("Enter a range:"));

  for (let i = 1; i <= range; i++) {
    const prod = number * i;
    console.log(`${number} x ${i} = ${prod}`);
  }
  return;
}
```

### Julia

```julia
# Write a Julia program to print multiplication table

print("Enter a number : ")
num = parse(Int64, readline(stdin))
for i in 1:10
    println("$num x $i = ",num*i)
end
```

### Perl

```perl
# Write a Perl program to print multiplication table

&table(2);

sub table{

	my $i = 1;
	my $loop;

	foreach $loop(@_){
		for($i;$i<=10;$i++){
		  my $ans = $i*$loop;
	      print"$loop x $i = $ans \n";
		}
	   print"\n";
	}
}
```

### PHP

```php
// Write a PHP program to print multiplication table

<?php

function multiplicationTable($n)
{
    for ($i = 1; $i <= 10; $i++) {
        echo "$n * $i = " . $n * $i . "\n";
    }
}

$n = (int) readline();
multiplicationTable($n);

?>
```

### Python

```python
# Write a Python program to print multiplication table

n = int(input())

for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")
```

### R

```r
# Write a R program to print multiplication table

# Take user input for the number
number <- as.numeric(readline("Input: "))

# Validate input
if (!is.numeric(number)) {
  cat("Invalid input. Please enter a valid number.")
} else {
  # Print multiplication table
  for (i in 1:10) {
    result <- number * i
    cat(number, "x", i, "=", result, "\n")
  }
}
```

### Ruby

```ruby
# Write a Ruby program to print multiplication table

# Multiplication table in ruby...

puts "Enter the number whose multiples must be shown : "
user_input = gets
def printMultiplicationTable number
    numArray = (1..10).to_a
    numArray.each do |num|
        puts "#{number} x #{num} = #{num*number}"
    end

end
printMultiplicationTable Integer (user_input)
```

### Rust

```rust
// Write a Rust program to print multiplication table

use std::io::{self, Write};

fn main() {
   print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut str = String::new();
    match io::stdin().read_line(&mut str) {
        Ok(_) => (),
        Err(err) => println!("Could not parse input: {}", err)
    }

    print_multi_table(&str);

}


fn print_multi_table(str:&String) {
    let n:i8 = str.trim().parse().expect("Failed to parse");
    let mut i = 1;
    while i <= 10 {
        println!("{n} x {i} = {}",n*i);
        i=i+1;
    };
}
```

### Scala

```scala
// Write a Scala program to print multiplication table

def multab(tblnum: Int) = {
    var tab = 0
    for (i <-(1 to 10)) { tab += tblnum
    println(tblnum+ " x " +i+ " = "+ tab)
 }}
multab(2)
```

### Swift

```swift
// Write a Swift program to print multiplication table

import Swift
import Foundation

print("Enter number: ")
var tablenumber = Int(readLine()!)!
print("Enter range: ")
var tableRange = Int(readLine()!)!

print("Multiplication table of \(tablenumber): ")
for j in 1...tableRange{
	print("\(tablenumber) * \(j) = \(tablenumber * j)")
}
```

### TypeScript

```typescript
// Write a TypeScript program to print multiplication table

const printMultiplicationTable = (num: number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

printMultiplicationTable(2);
```

## Similar programs

- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Swap Two Numbers](/program/swap-two-numbers)
- [Find The Smallest Two Elements In An Array](/program/find-the-smallest-two-elements-in-an-array)
- [Find The Largest Two Elements In An Array](/program/find-the-largest-two-elements-in-an-array)
- [Find The Smallest Three Elements In An Array](/program/find-the-smallest-three-elements-in-an-array)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Print Pattern 1](/program/print-pattern-1)
- [Find Minimum Of N Numbers](/program/find-minimum-of-n-numbers)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
