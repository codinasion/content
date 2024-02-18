---
title: "Check Lower Case"
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
    "perl",
    "scala",
    "dart",
    "go",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "james-tharit",
    "harshraj8843",
    "Tushar12222",
    "esivakumar18",
    "hyperion912",
    "Osher160",
    "yashasvini121",
    "jfinley6",
    "rksp25",
    "tahakocabuga",
    "s4lat",
    "greeshma-d",
    "Forsigg",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:01:22Z
trackId: 4334
description: "Write a program to check lower case."
---

## Table of contents

## Write a program to check lower case

Check if given character is lower case (a-z).

```
Input  : a
Output : Lower Case
```

---

### C

```c
// Write a C program to check lower case

#include <stdio.h> /*printf, scanf*/

int IsLowerCase(char character);

int main()
{
    char character = 0;

    int is_good = scanf("%c",&character);

    if(is_good != 1)
    {
        return -1;
    }

    if(IsLowerCase(character))
    {
        printf("lower case\n");
    }

    return 0;
}


int IsLowerCase(char character)
{
    if(character <= 'z' && character >= 'a')
    {
        return 1;
    }

    return 0;
}
```

### C#

```csharp
// Write a C# program to check lower case

using System;
using System.Linq;
namespace StringCheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(lowerCase("a"));
        }
        public static bool lowerCase(string str1)
        {
           return str1 == str1.ToLower();
        }
    }
}
```

### C++

```cpp
// Write a C++ program to check lower case

#include <iostream>
using namespace std;

void checkLowerCase(char ch){
    if(ch >= 'a' && ch <= 'z'){
        cout << "Lower Case";
    }
    else if(ch >= 'A' && ch <= 'Z'){
        cout << "Upper Case";
    }
    else{
        cout << "The character is not an alphabet";
    }
}

int main(){
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    checkLowerCase(ch);
    return 0;
}
```

### Dart

```dart
// Write a Dart program to check lower case

void checkLower(String c){
  int ascii = c.codeUnitAt(0);
  if(ascii >= 97 && ascii <= 122){
    print("Character is in lower case.");
  }
  else{
    print("Character is not in lower case.");
  }
}

void main() {
  checkLower("s");
}
```

### Go

```go
// Write a Go program to check lower case

package main

import (
	"fmt"
	"unicode"
)

func main() {
	var char rune
	fmt.Scanf("%c", &char)
	if unicode.IsLower(char) {
		fmt.Printf("Character '%c' is lower case\n", char)
	} else {
		fmt.Printf("Character '%c' is not in lower case\n", char)
	}
}
```

### Java

```java
// Write a Java program to check lower case

import java.util.Scanner;

public class CheckLowerCase {
    public static void main(String []args) {
        Scanner my_scanner = new Scanner(System.in);
        System.out.print("Enter a character : ");
        String val = my_scanner.next();
        char ch = val.charAt(0);
        if (Character.isLowerCase(ch)) {
            System.out.println("Lower Case");
        } else {
            System.out.println("Upper Case");
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check lower case

function checkLowerCase(str) {
  let asciiValue = str.charCodeAt(0);

  if (asciiValue >= 97 && asciiValue <= 123) {
    console.log("It is Lower Case");
  } else {
    console.log("It is not Lower Case");
  }
}

checkLowerCase("a");
```

### Julia

```julia
# Write a Julia program to check lower case

char = 'a'
if(islowercase(char))
  println("Lower Case")
else
  println("Not a Lower Case")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check lower case

import java.util.*
import kotlin.test.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)

    //Input Character
    print("Enter a character : ")
    val char = scanner.next()[0]

    val lowerCase = char.isLowerCase()
    if(lowerCase){
        println("Lower Case")
    } else{
        println("Not Lower Case")
    }
}
```

### Perl

```perl
# Write a Perl program to check lower case

my $str = <STDIN>;
if ($str eq lc $str) {
  print "lower case\n";
} else {
  print "UPPER CASE\n";
}
```

### PHP

```php
// Write a PHP program to check lower case

<?php

function checkLowerCase($char) {
   return ctype_lower($char) ? 'Lower Case' : ' Not a Lower Case';
}

echo checkLowerCase('a');

?>
```

### Python

```python
# Write a Python program to check lower case

def is_lower_case(char: str) -> bool:
    if char.lower() == char:
        return True
    else:
        return False


char_inp = input()
if char_inp.isalpha():
    if is_lower_case(char_inp):
        print("Lower Case")
    else:
        print("Not Lower Case")
else:
    print("Not a valid string")
```

### Ruby

```ruby
# Write a Ruby program to check lower case

puts "Enter a letter to check if it's lowercase: "
user_input = gets

def checkLowerCase letter
    puts letter == letter.downcase ? "Lowercase" : "Not Lowercase"
end

checkLowerCase user_input
```

### Rust

```rust
// Write a Rust program to check lower case

use std::io::{self, Write};

fn main() {
   print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut str = String::new();
    match io::stdin().read_line(&mut str) {
        Ok(_) => (),
        Err(err) => println!("Could not parse input: {}", err)
    }

    for i in str.chars() {
        if i.is_uppercase() {
          println!("Output: Upper Case");
            return;
        }
    }
    println!("Output: Lower Case")
}
```

### Scala

```scala
// Write a Scala program to check lower case

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val line = scala.io.StdIn.readChar();
	  if(line.isLower) {
	    println("lower case");
	  } else {
	    println("upper case")
	  }
	}
}
```

### Swift

```swift
// Write a Swift program to check lower case

import Swift
import Foundation

var x: Character = "a"
print("a is lowercase: ", x.isLowercase)

var y: Character = "K"
print("K is lowercase: ", y.isLowercase)
```

### TypeScript

```typescript
// Write a TypeScript program to check lower case

function checkLowerCase(character: string) {
  if (character == character.toLowerCase()) {
    return "Lower Case";
  } else {
    return "Not Lower Case";
  }
}
```
