---
title: "Check Integer Or Float"
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
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "LeventCelik",
    "sahanasurapureddy",
    "VinayReddy-vr",
    "joao-vitor-souza",
    "priya1011",
    "codingkush",
    "mrajen27",
    "tanishq-singh-2407",
    "hrishibargal",
    "Forsigg",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-06T10:06:42Z
trackId: 4521
description: "Write a program to check integer or float."
---

## Table of contents

## Write a program to check integer or float

```
Input  : 1
Output : Integer
```

---

### C

```c
// Write a C program to check integer or float

#include <stdio.h>

int main() {

    char number[100];

    int flag = 0;

    printf("Enter the number to check integer or float: ");

    scanf("%s", number);

    //loop through each character of input

    for (int i = 0; number[i] != 0; i++) {

    //if decimal "." is found, it means it is float

        if (number[i] == '.') {

            flag = 1;

            break;

        }

    }

    if (flag)

    {

       printf("\n%s is a floating-point number.\n", number);

    }

    else{

       printf("\n%s is an integer number.\n", number);

    }

    return 0;

}
```

### C#

```csharp
// Write a C# program to check integer or float

using System;
namespace NumCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            int n;
            double d;
            Console.Write("Enter any number : ");
            d = double.Parse(Console.ReadLine());
            n = (int) d;
            if (n == d)
            {
                Console.WriteLine("Number is Integer");
            }
            else
            {
                Console.WriteLine("Number is Float");
            }
            Console.ReadLine();
        }
    }
}
```

### C++

```cpp
// Write a C++ program to check integer or float

// C++ Program to Check Whether a Number is Integer or Not using While loop

#include <iostream>

using namespace std;

int main() {

    char random_number[100];

    int f = 0, i = 0;

    cout << "Enter the number to check integer or float: ";

    cin >> random_number;

    while (random_number[i++] != '\0') {

        if (random_number[i] == '.') {

            f = 1;

            break;

        }

    }

    if (f)

        cout << endl << random_number << " is a floating-point number.\n";

    else

        cout << endl << random_number << " is an integer number.\n";

    return 0;

}
```

### Dart

```dart
// Write a Dart program to check integer or float

void main() {
  dynamic a = 1;
  print(a is int
      ? "Integer"
      : a is double
          ? "Float"
          : "Unknown");
}
```

### Go

```go
// Write a Go program to check integer or float

package main

import (
	"fmt"
	"log"
)

func main() {
	var input string
	fmt.Printf("Enter the number to check integer or float: ")
	fmt.Scanf("%s", &input)

	if len(input) == 0 {
		log.Println("Looks like you didn't enter anything. Please enter a number to continue!")
		return
	}

	flag := true

	for i := 0; i < len(input); i++{
		if input[i] == '.'{
			flag = false
			break
		}
	}

	if flag{
		fmt.Println("Integer")
	}else{
		fmt.Println("Float")
	}

}
```

### Java

```java
// Write a Java program to check integer or float

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CheckIntegerOrFloat {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String number = br.readLine();
        boolean isInt = false;
        boolean isFloat = false;
        try {
            Integer.parseInt(number);
            isInt = true;
        } catch (NumberFormatException ignored) {

        }

        try {
            Float.parseFloat(number);
            isFloat = true;
        } catch (NumberFormatException ignored) {

        }

        if (isInt) {
            System.out.println("Integer");
        } else if (isFloat) {
            System.out.println("Float");
        } else {
            System.out.println("Neither Integer nor Float");
        }

    }
}
```

### JavaScript

````javascript
// Write a JavaScript program to check integer or float

/**
 * @name This program check the number is integer or float
 * @param {number} number
 * @returns {string}
 *
 * @example
 * ```js
 * const _int   = CheckIntegerOrFloat(2) // Integer
 * const _float = CheckIntegerOrFloat(3.21) // Float
 * ```
 *
 * @author Tanishq Singh
 */
function CheckIntegerOrFloat(number) {
  return number % 1 === 0 ? "Integer" : "Float";
}

// Console Tests
console.log(CheckIntegerOrFloat(2) + " // Integer");
console.log(CheckIntegerOrFloat(5.3) + " // Float");
````

### Julia

```julia
# Write a Julia program to check integer or float

i = 1
if (typeof(i) == Int64)
    println("Integer")
elseif(typeof(i) == Float64)
    println("Float")
else
    println("Invalid Type")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check integer or float

import java.util.*;
fun main() {
    val sc = Scanner(System.`in`)
    println("Enter the number: ");
    val number = sc.nextLine()
    var isInteger = false;
    var isFloat = false;
    try {
        number.toInt()
        isInteger = true;
    } catch (e: NumberFormatException)  {
    }
    try {
        number.toFloat()
        isFloat = true;
    } catch (e: NumberFormatException)  {
    }
    if (isInteger) {
        println("Integer");
    } else if (isFloat) {
        println("Float");
    } else {
        println("Neither float or Integer");
    }
}
```

### Perl

```perl
# Write a Perl program to check integer or float

print "Enter a number: ";
my $input = <STDIN>;
print "\nGiven number is Integer\n" if ($input =~/^-?\d+$/);
print "\nGiven number is Float\n" if ($input =~/^-?\d*\.\d+$/);
```

### PHP

```php
// Write a PHP program to check integer or float

<?php

function checkIntegerOrFloat($num) {
	echo strpos($num,'.') !== false ? 'Float' : 'Integer';
}

echo checkIntegerOrFloat(1);

?>
```

### Python

```python
# Write a Python program to check integer or float

def check_integer_or_float(input_str: str) -> None:
    if "." in input_str:
        print("Float")
    else:
        print("Integer")


guess = input()
check_integer_or_float(guess)
```

### R

```r
# Write a R program to check integer or float

# Function to check if a number is an integer or a float
checkNumberType <- function(number) {
  if (is.integer(number)) {
    return("Integer")
  } else if (is.numeric(number)) {
    return("Float")
  } else {
    return("Not a valid number")
  }
}

# Example usage
inputNumber <- 3.14
result <- checkNumberType(inputNumber)
cat("Input:", inputNumber, "\nOutput:", result, "\n")
```

### Ruby

```ruby
# Write a Ruby program to check integer or float

num = 1
if num.integer?
    print 'Integer'
else
    print 'Float'
end
```

### Rust

```rust
// Write a Rust program to check integer or float

/// # Author
/// Written by Levent Çelik, 2023.


/// Finds the index of a character in a string.
///
/// # Arguments
///
/// `s` - String in which to search for target.
/// `target` - Character to search in s.
///
/// # Returns
///
/// Option unwrapping to the index of target in s.
fn find_char_index(s: &str, target: char) -> Option<usize> {
    s.char_indices()
        .find(|&(_, c)| c == target)
        .map(|(index, _)| index)
}

/// Prints whether the input string represents an integer value or a floating
/// point value. Note that this function uses mathematical logic; i.e.,
/// "5.0" -> Integer.
///
/// # Arguments
///
/// `num` - String representing an number
///
/// # Returns
///
/// ()
///
/// # Safety
///
/// Does not check whether the input is valid. So, "abc" -> Integer
///
fn integer_or_float_extended(num: &str) {
    match find_char_index(&num, '.') {
        Some(index) => {
            if index == num.len()-1 {
            println!("Integer");
            return;
            }
            for i in index+1..num.len() {
                if num.chars().nth(i).map_or(false, |c| c != '0') {
                    println!("Float");
                    return;
                }
            }
            println!("Integer");
        },
        None => println!("Integer")
    }
}

/// Prints whether the input string represents an integer value or a floating
/// point value. Note that this function uses programming logic; i.e.,
/// "5.0" -> Float.
///
/// # Arguments
///
/// `num` - String representing an number
///
/// # Returns
///
/// ()
///
/// # Safety
///
/// Does not check whether the input is valid. So, "abc" -> Integer
fn integer_or_float(num: &str) {
    match find_char_index(&num, '.') {
        Some(index) => println!("Float"),
        None => println!("Integer")
    }

}

fn main() {
    let text = "5.0";
    integer_or_float(&text);
    integer_or_float_extended(&text);
}
```

### Scala

```scala
// Write a Scala program to check integer or float

import scala.io.StdIn._;

object intergerOrFloat {
  def main(args:Array[String]):Unit={
    println("Enter a number :");
    var n = readLine();
    var result = n.toIntOption.isDefined;
    if(result){
        println("Integer");
    } else {
        println("Float");
    }
  }
}
```

### Swift

```swift
// Write a Swift program to check integer or float

//Write a Swift program to check integer or float
import Foundation

func checkNumberType(_ number: String) -> String {
    if let integerValue = Int(number) {
        return "Integer"
    } else if let floatValue = Float(number) {
        return "Float"
    } else {
        return "Not a valid number"
    }
}

if let userInput = readLine() {
    let result = checkNumberType(userInput)
    print("Input: \(userInput)\nOutput: \(result)")
} else {
    print("Invalid input")
}
```

### TypeScript

````typescript
// Write a TypeScript program to check integer or float

/**
 * @name This program check the number is integer or float
 * @param {number} number
 * @returns {string}
 *
 * @example
 * ```ts
 * const _int: number   = CheckIntegerOrFloat(2) // Integer
 * const _float: number = CheckIntegerOrFloat(3.21) // Float
 * ```
 *
 * @author Tanishq Singh
 */
function CheckIntegerOrFloat(number: number): "Integer" | "Float" {
  return number % 1 === 0 ? "Integer" : "Float";
}

// Console Tests
console.log(CheckIntegerOrFloat(2) + " // Integer");
console.log(CheckIntegerOrFloat(5.3) + " // Float");
````
