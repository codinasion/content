---
title: "Print Inverted Pyramid Pattern"
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
    "dart",
    "go",
    "haskell",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "jcmlumacad1",
    "Shreyash3110",
    "kenroulier",
    "shaurya-clemson",
    "sahanasurapureddy",
    "harshraj8843",
    "apurvagandhi",
    "Roybas2001",
    "anandfresh",
    "gsquareg2",
    "Medmly20208",
    "txsnxm",
    "SarthakSanjay",
    "jfinley6",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-03T16:28:14Z
trackId: 4979
description: "Write a program to print inverted pyramid pattern."
---

## Table of contents

## Write a program to print inverted pyramid pattern

```
Input   : 5

Output :
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

---

### C

```c
// Write a C program to print inverted pyramid pattern

#include <stdio.h>

int main()
{

    int number, i, j, limitNumber;
    printf("enter a number");
    scanf("%d", &number);

    limitNumber = number;

    for (i = 1; i <= number; i++)
    {

        for (j = 1; j <= limitNumber; j++)
        {
            printf("%d ", j);
        }
        printf("\n");

        limitNumber--;
    }

    return 0;
}
```

### C#

```csharp
// Write a C# program to print inverted pyramid pattern

using System;
namespace Pattern
{
    public class InvertedPyramid
    {
        public static void Main()
        {
            Console.Write("Enter Number of Rows :");
            int rows = Convert.ToInt32(Console.ReadLine());
            for (int i = rows; i >= 1; i--)
            {
                for (int j = 1; j <= i; j++)
                {
                    Console.Write(j + " ");
                }
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print inverted pyramid pattern

#include <iostream>

int main()
{
    // Write C++ code here
    int input, i, j, edge;

    std::cout << "input a number : " << std::endl;
    std::cin >> input;

    edge = input;

    for (i = 1; i <= input; i++)
    {
        for (j = 1; j <= edge; j++)
        {
            std::cout << j << " ";
        }

        std::cout << "\n";

        edge = edge - 1;
    }

    return 0;
}
```

### Dart

```dart
// Write a Dart program to print inverted pyramid pattern

void main() {
  int n = 5;
  for (int i = n; i >= 1; i--) {
    final list = [];
    for (int j = 1; j <= i; j++) {
      list.add(j);
    }
    print(list.join(' '));
  }
}
```

### Go

```go
// Write a Go program to print inverted pyramid pattern

package main

import (
	"fmt"
)

func main() {
	var rows int
	fmt.Print("Input: ")
	fmt.Scanln(&rows)

	for i := rows; i >= 1; i-- {
		for j := 1; j <= i; j++ {
			fmt.Print(j, " ")
		}
		fmt.Println("")
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to print inverted pyramid pattern

main = do
  let n = 5
  mapM_ (putStrLn . unwords . map show) [[1..x] | x <- [n,n-1..1]]
```

### Java

```java
// Write a Java program to print inverted pyramid pattern

import java.util.*;
public class PrintInvertedPyramidPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.close();
        for (int i = t; i > 0; i--) {
            for (int j = 1; j < i + 1; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print inverted pyramid pattern

//inverted pyramid
for (let a = 5; a >= 1; a--) {
  let str = " ";
  for (let i = 1; i <= a; i++) {
    str += i + " ";
  }
  console.log(str);
}
```

### Julia

```julia
# Write a Julia program to print inverted pyramid pattern

function print_inverted_pyramid(n)
  for i in 1:n
      for j in 1:(n-i+1)
          print(j, " ")
      end
      println()
  end
end

# sending parameters to function
n = 5
print_inverted_pyramid(n)
```

### Kotlin

```kotlin
// Write a Kotlin program to print inverted pyramid pattern

fun main() {
    printInvertedPyramid(5);
}

fun printInvertedPyramid(rows: Int){
    for (i in rows downTo 1) {
        for (j in 1..i) {
            print("$j ")
        }
        println()
    }
}
```

### PHP

```php
// Write a PHP program to print inverted pyramid pattern

<?php
    // The for loop is used to echo the inverted pyramid.
    // The if statement is purely to let a user put in a value of choice

    // In the for loop I use $i as the index, the value of $i is the user input. As long as $i is bigger than 0 it will substract 1 from the value of $i
    for ($i = 5; $i > 0; $i--) {

        // In the for loop I use $j as the index.
        // $j has a base value of 1. As long as $j is smaller or equal to $i it will add 1 to the base value of $j.
        for ($j = 1; $j <= $i; $j++) {

            // Here $j will be outputting the number 1 (Base value of $j) to the number that is the base value of $i
            echo "$j ";
        }

        // The echo "<br>" is used to put everything on seperated lines
        echo "\n";
    }

?>
```

### Python

```python
# Write a Python program to print inverted pyramid pattern

# print inverted pyramid pattern


def printInvertedPyramidPattern(number: int):
    endNumber = number

    for i in range(0, number):
        for j in range(1, endNumber + 1):
            print(j, end=" ")

        print("")
        endNumber = endNumber - 1


if __name__ == "__main__":
    number = int(input("type a number:"))
    printInvertedPyramidPattern(number)
```

### Ruby

```ruby
# Write a Ruby program to print inverted pyramid pattern

puts "Enter the inverted pyramid number to display: "
user_input = gets.to_i
def printInvertedPyramidPattern number
    (1..number).each { |i| print "#{i} "}
    puts
    printInvertedPyramidPattern(number - 1) if number > 0
end

printInvertedPyramidPattern user_input
```

### Rust

```rust
// Write a Rust program to print inverted pyramid pattern

//  	Rust function to print an inverted pyramid pattern
//Example:
//  Input   : 5
//  Output :
//	1 2 3 4 5
//	1 2 3 4
//	1 2 3
//	1 2
//	1

use std::io;

fn print_inverted_triangle(n: u32) {

    let mut limit = n+1;

    for _i in 1 .. n+1 {

        for j in 1 .. limit {
            print!("{} ", j);
        }

	limit = limit - 1;
        println!();
    }
}

fn main() {

	// the input string and this main function can be removed. This is simply for testing

	println!("Enter the number of levels to print");
	let mut input_num = String::new();
	let _rtrn = io::stdin().read_line(&mut input_num);
	let n: u32 = input_num.trim().parse().expect("Input not an integer");

	// example of how to call the function and print out the results of the inverted pyramid.
    	print_inverted_triangle(n);
}
```

### Scala

```scala
// Write a Scala program to print inverted pyramid pattern

// Write a Scala program to print inverted pyramid pattern

object InvertedPyramidPattern {
  def main(args: Array[String]): Unit = {
    print("Input: ")
    val n = scala.io.StdIn.readInt()
    print (n)
    print("\n")
    printInvertedPyramid(n)
  }

  def printInvertedPyramid(n: Int): Unit = {
    for (i <- n to 1 by -1) {
      for (j <- 1 to i) {
        print(j + " ")
      }
      println()
    }
  }
}
```

### Swift

```swift
// Write a Swift program to print inverted pyramid pattern

func printInvertedPyramid(_ n: Int) {
    for i in stride(from: n, to: 0, by: -1) {
        for j in 1...i {
            print(j, terminator: " ")
        }
        print()
    }
}

// Example usage with input 5
let input = 5
printInvertedPyramid(input)
```

### TypeScript

```typescript
// Write a TypeScript program to print inverted pyramid pattern

const invertedPyramid = (num: number): number => {
  for (let n = num; n >= 1; n--) {
    let str = "";
    for (let i = 1; i <= n; i++) {
      str += i + " ";
    }
    console.log(str);
  }
};

invertedPyramid(5);
```
