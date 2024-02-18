---
title: "Print Numbers From N To 1 Without Using A Loop"
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
    "srini696",
    "jcmlumacad1",
    "anandfresh",
    "Shubham-2110",
    "harshraj8843",
    "vedantpople4",
    "Tushar12222",
    "esivakumar18",
    "jfinley6",
    "Osher160",
    "dineshlalam15",
    "joao-vitor-souza",
    "KacperTKI",
    "sureshsgith",
    "kevenleone",
    "mrajen27",
    "Medmly20208",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-04T16:39:28Z
trackId: 4427
description: "Write a program to print numbers from n to 1 without using a loop."
---

## Table of contents

## Write a program to print numbers from n to 1 without using a loop

```
Input  : 5
Output : 5 4 3 2 1
```

---

### C

```c
// Write a C program to print numbers from n to 1 without using a loop

#include <stdio.h>


void PrintFromNto1NoLoop(int n);

int main()
{
    int n = 0;

    int is_good = scanf("%d",&n);

    if(is_good == -1)
    {
        return -1;
    }

    PrintFromNto1NoLoop(n);

    return 0;
}

void PrintFromNto1NoLoop(int n)
{
    if(n == 0)
    {
        return;
    }

    printf("%d ",n);
    PrintFromNto1NoLoop(n -1);
}
```

### C#

```csharp
// Write a C# program to print numbers from n to 1 without using a loop

using System;

class MainClass {
    public static void Main (string[] args) {
     int i = 5;
     i = i+1;
     begin:
     i = i - 1;
     Console.Write(" " + i + " ");
     if (i > 1)
     {
     goto begin;
     }
  }
}
```

### C++

```cpp
// Write a C++ program to print numbers from n to 1 without using a loop

// Write a program, that prints numbers from n to 1 without using a loop
#include <iostream>

// Instead of using a loop, this function just prints the current number and
// calls itself again with the number - 1(Recursion).
void PrintNum(int);

int main()
{
    std::cout << "Enter a num: ";
    int n;
    std::cin >> n;

    PrintNum(n);
    return 0;
}

void PrintNum(int n)
{
    // base case
    if (n > 0)
    {
        std::cout << n << " ";
        PrintNum(n - 1);
    }
    else
        std::cout << std::endl;

    return;
}
```

### Dart

```dart
// Write a Dart program to print numbers from n to 1 without using a loop

void printNTo1recur(int n){
  if(n == 0){
    return;
  }
  print(n);
  printNTo1recur(n-1);
}

void main() {
  printNTo1recur(5);
}
```

### Go

```go
// Write a Go program to print numbers from n to 1 without using a loop

package main

import (
	"fmt"
)

func main() {
	fmt.Printf("Enter a Number:")
	var n int
	fmt.Scanf("%d", &n)
	ans(n)
	fmt.Print("\n")
}
func ans(n int) {
	//without loop
	//using recursion
	if n < 1 {
		return
	}
	fmt.Printf("%d ", n)
	ans(n - 1)
}
```

### Haskell

```haskell
-- Write a Haskell program to print numbers from n to 1 without using a loop

printNumbers n = putStrLn (unwords (map show [n, n-1 .. 1]))

main = do
    let n = 5
    printNumbers n
```

### Java

```java
// Write a Java program to print numbers from n to 1 without using a loop

public class PrintNumbersFromNTo1WithoutUsingALoop {
    public static void main(String[] args) {
        print1ToN(5);
    }
    public static void print1ToN(int n){
        if(n == 1){
            System.out.print(n + " ");
            return;
        }
        print1ToN(n - 1);
        System.out.print(n + " ");
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print numbers from n to 1 without using a loop

const minNumber = 1;

function decreaseNumberWithoutLoop(number) {
  console.log(number);

  if (number > minNumber) {
    decreaseNumberWithoutLoop(number - 1);
  }
}

decreaseNumberWithoutLoop(5);
```

### Kotlin

```kotlin
// Write a Kotlin program to print numbers from n to 1 without using a loop

import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the number::")
    val number = scanner.nextInt();
    printNos(number);
}

fun printNos(n:Int) {
    if(n > 0) {
        val number = n.toString() + ' '
        print(number)
        printNos(n - 1);
    }
}
```

### Perl

```perl
# Write a Perl program to print numbers from n to 1 without using a loop

print "Enter a number : ";
my $n=<STDIN>;
print "\n";
sub printNos{
    my ($input) = @_;
        if($input > 0)
        {
            print $input + " ";
            printNos($input - 1);
        }
        return;
}

printNos($n);
```

### PHP

```php
// Write a PHP program to print numbers from n to 1 without using a loop

<?php
function printNum($n) {
  echo implode(' ',range($n, 1));
}

printNum(5);
?>
```

### Python

```python
# Write a Python program to print numbers from n to 1 without using a loop

def printNumbersFromNtoOneWithoutUsingALoop(number: int) -> None:
    """
    print Numbers From N to 1 Without Using a Loop
    Arguments:
        number:int
    Returns:
        None
    """

    if number == 0:
        return

    print(number, end=" ")
    printNumbersFromNtoOneWithoutUsingALoop(number - 1)


if __name__ == "__main__":
    number = int(input("Type A number : "))
    printNumbersFromNtoOneWithoutUsingALoop(number)


# contributed by MedMly20208 Mohamed Moulay
```

### R

```r
# Write a R program to print numbers from n to 1 without using a loop

print_numbers_reverse <- function(n) {
  if (n >= 1) {
    return(c(n, print_numbers_reverse(n - 1)))
  } else {
    return(NULL)
  }
}

result <- print_numbers_reverse(10)
print(result)
```

### Ruby

```ruby
# Write a Ruby program to print numbers from n to 1 without using a loop

def printNumbersFromNTo1WithoutUsingALoop num
    print [*1..num].reverse.join(" ")
end

puts printNumbersFromNTo1WithoutUsingALoop 5
```

### Rust

```rust
// Write a Rust program to print numbers from n to 1 without using a loop

fn printnumbers(n: i32){
    if n>0 {
        print!("{n} ");
        printnumbers(n-1);
    }
}

fn main(){
    let n = 5;
    printnumbers(n);
}
```

### Scala

```scala
// Write a Scala program to print numbers from n to 1 without using a loop

def printNumbers(n: Int): Unit = {
  if (n > 0) {
    print(s"$n ")
    printNumbers(n - 1)
  }
}

val input = 5
printNumbers(input)
```

### Swift

```swift
// Write a Swift program to print numbers from n to 1 without using a loop

import Swift
import Foundation

func printNumber(n: Int) -> Int {
   print(n)
   if(n == 1) {
     return 1
   }
   return printNumber(n: n-1)
}

var num = 5
var result1 = printNumber(n: num)
```

### TypeScript

```typescript
// Write a TypeScript program to print numbers from n to 1 without using a loop

const minNumber = 1;

function decreaseNumberWithoutLoop(number: number) {
  console.log(number);

  if (number > minNumber) {
    decreaseNumberWithoutLoop(number - 1);
  }
}

decreaseNumberWithoutLoop(5);
```
