---
title: "Check Alphabet"
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
    "go",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "james-tharit",
    "harshraj8843",
    "esivakumar18",
    "anandfresh",
    "sancoLgates",
    "rksp25",
    "joao-vitor-souza",
    "ronaldvimal",
    "jyotik09",
    "Ipankaj07",
    "grraghav120",
    "rahmat-dev",
    "PraaneshSelvaraj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-12T00:32:41Z
trackId: 1512
description: "Write a program to check alphabet."
---

## Table of contents

## Write a program to check alphabet

Check that the given character is an alphabet or not (a-z, A-Z).

```
Input  : a
Output : Alphabet
```

---

### C

```c
// Write a C program to check alphabet

//CheckAlphabet.c

#include <stdio.h>

int main()
{
    char ch;
    scanf("%c",&ch);
    if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z')) printf("Alphabet\n");
    else printf("Not Alphabet\n");
    return 0;
}
```

### C#

```csharp
// Write a C# program to check alphabet

﻿using System;

class CheckAlphabet {

    static public void Main()
    {
        Console.WriteLine("Input a character: ");
        char ch = (char)Console.Read();

        if (Char.IsLetter(ch)) {
             Console.WriteLine(ch + " is an alphabet");
        } else {
             Console.WriteLine(ch + " is not an alphabet");
        }

    }
}
```

### C++

```cpp
// Write a C++ program to check alphabet

//Contributed by Raghav Garg
//CheckAlphabet.cpp
#include <iostream>

using namespace std;

int main()
{
    char ch;
    cin>>ch;
    if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z')) cout<<"Alphabet"<<'\n';
    else cout<<"Not Alphabet"<<'\n';
}
```

### Go

```go
// Write a Go program to check alphabet

package main

import (
	"fmt"
	"regexp"
)

var isAlphabet = regexp.MustCompile(`^[a-zA-Z]`).MatchString

func main() {
	var str string
	fmt.Print("Input a character: ")
	fmt.Scan(&str)

	if (isAlphabet(str)) {
		fmt.Println("Alphabet")
	} else {
		fmt.Println("Non Alphabet")
	}
}
```

### Java

```java
// Write a Java program to check alphabet

import java.util.Scanner;

class CheckAlphabet {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Input a character: ");

        char ch = input.next().charAt(0);

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            System.out.println(ch + " is an alphabet");
        } else {
            System.out.println(ch + " is not an alphabet");
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check alphabet

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char) ? "Alphabet" : "Not Alphabet";
}

console.log(isCharacterALetter("a"));
console.log(isCharacterALetter("Z"));
console.log(isCharacterALetter("!"));
```

### Kotlin

```kotlin
// Write a Kotlin program to check alphabet

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Is $input is an alphabet : " + CheckAlphabet(input!!))

}

private fun CheckAlphabet(inputStr: String): Boolean {
    val c = inputStr.first()
    if (c in 'a'..'z' || c in 'A'..'Z')
        return true
    else
        return false
}
```

### PHP

```php
// Write a PHP program to check alphabet

<?php

function check_alphabet($text)
{
	return ctype_alpha($text);
}

echo check_alphabet('a') ? 'Alphabet' : 'Non Alphabet';
```

### Python

```python
# Write a Python program to check alphabet

alphabet = input("")
# checking using isalpha() function.
if alphabet.isalpha():
    print("Alphabet")
else:
    print("Not an Alphabet")
```

### Ruby

```ruby
# Write a Ruby program to check alphabet

print "Enter a string: ";
str = gets.chomp;

puts case
when str.match(/\d/)
    "Input string contains numbers";
when str.match(/[a-zA-Z]/)
    "Input string contains letters";
else
    "Invalid choice";
end
```

### Rust

```rust
// Write a Rust program to check alphabet

use std::io::{self, Write};

fn main() {
    print!("Input: ");
    io::stdout().flush().expect("flush failed!");

    let mut input = String::new();
    match io::stdin().read_line(&mut input) {
        Ok(_) => (),
        Err(err) => println!("Could not read input: {}", err),
    }

    match input.trim().parse::<i32>() {
        Ok(n) => print_multi_table(n),
        Err(_) => println!("Input is not a valid number."),
    }
}

fn print_multi_table(n: i32) {
    let mut i = 1;
    while i <= 10 {
        println!("{n} x {i} = {result}", n = n, i = i, result = n * i);
        i += 1;
    }
}
```

### Scala

```scala
// Write a Scala program to check alphabet

object alphabets {
  def main(args:Array[String]):Unit={
    val ch = 'a';
    val result = ch.isLetter;
    println("Alphabet : "+result);
  }
}
```

### Swift

```swift
// Write a Swift program to check alphabet

import Swift
import Foundation

extension String {
    var isAlphabet: Bool {
        return !isEmpty && range(of: "[^a-zA-Z]", options: .regularExpression) == nil
    }
}

print("A".isAlphabet) //true
print("a".isAlphabet) //true
print("1".isAlphabet) //false
print("&".isAlphabet) //false
```

### TypeScript

```typescript
// Write a TypeScript program to check alphabet

function isCharacterALetter(char: string): string {
  return /[a-zA-Z]/.test(char) ? "Alphabet" : "Not Alphabet";
}

console.log(isCharacterALetter("a"));
console.log(isCharacterALetter("Z"));
console.log(isCharacterALetter("!"));
```

## Similar programs

- [Check Special Character](/program/check-special-character)
- [Check Pangram String](/program/check-pangram-string)
- [Check Digit](/program/check-digit)
- [Check Vowel](/program/check-vowel)
- [Check Consonant](/program/check-consonant)
- [Check Upper Case](/program/check-upper-case)
- [Check Lower Case](/program/check-lower-case)
- [Check Valid Date](/program/check-valid-date)
- [Check Integer Or Float](/program/check-integer-or-float)
- [Check Even Or Odd Number](/program/check-even-or-odd-number)
