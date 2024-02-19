---
title: "Check Upper Case"
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
    "go",
    "php",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "jfinley6",
    "joao-vitor-souza",
    "grraghav120",
    "MadhuS-1605",
    "krishan-here",
    "ynbh",
    "jaypavasiya",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:02:05Z
trackId: 1126
description: "Write a program to check upper case."
---

## Table of contents

## Write a program to check upper case

Check if the given character is upper case (A-Z).

```
Input  : A
Output : Upper Case
```

---

### C

```c
// Write a C program to check upper case

#include <stdio.h>

int main(){

    char ch;
    scanf("%c",&ch);
    if(ch>='A' && ch<='Z') printf("Upper Case");
    else printf("Not Upper Case");
    return 0;
}
```

### C#

```csharp
// Write a C# program to check upper case

using System;

public class charCase
{
    static void Main(string[] args)
    {
        char ch;

        Console.WriteLine("Enter any character: ");
        ch = Convert.ToChar(Console.ReadLine());

        if (ch >= 'a' && ch <= 'z')
        {
            Console.WriteLine(ch + " is a lowercase alphabet ");
        }
        else if (ch >= 'A' && ch <= 'Z')
        {
            Console.WriteLine(ch + " is a uppercase alphabet ");
        }
        else
        {
            Console.WriteLine(ch + " is not an alphabet ");
        }

        Console.ReadLine();
    }
}
```

### C++

```cpp
// Write a C++ program to check upper case

#include <iostream>

using namespace std;

int main()
{
    char alphabet;
    cin>>alphabet;
    if(int(alphabet)>=65 && int(alphabet)<=90){
        cout<<"Upper Case"<<endl;
    }else{
        cout<<"Not Upper Case"<<endl;
    }
    return 0;
}
```

### Go

```go
// Write a Go program to check upper case

package main

import (
	"fmt"
	"strings"
)

func main() {
	var char string
	fmt.Println("Enter character:")
	fmt.Scan(&char)
	if char == strings.ToUpper(char) {
		fmt.Println("Upper Case")
	} else {
		fmt.Println("Not Upper Case")
	}
}
```

### Java

```java
// Write a Java program to check upper case

class checkUpper {
    public static void main(String[] args) {
         char val = 'A';
        if (Character.isUpperCase(val)) {
         System.out.println("Character is in Uppercase!");
      }else {
         System.out.println("Character is in Lowercase!");
      }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check upper case

/**
 *
 * @param {string} character
 * @returns {boolean} whether `character` is uppercase or nott
 */
function checkUpperCase(character) {
  /**
   * Better implenetation than converting the character toUpperCase and checking.
   */
  const isUpperCase = /^[A-Z]*$/.test(character);
  return isUpperCase ? "Upper Case" : "Not Upper Case";
}
```

### Julia

```julia
# Write a Julia program to check upper case

char = 'A'
if(isuppercase(char))
  println("Upper case")
else
  println("Not an Upper case")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check upper case

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)

  //Input Character
  print("Enter a character : ")
  val char = scanner.next()[0]

  val upperCase = char.isUpperCase()
  if(upperCase){
      println("Upper Case")
  } else{
      println("Not Upper Case")
  }
}
```

### Perl

```perl
# Write a Perl program to check upper case

my $str = <STDIN>;
if ($str eq uc $str) {
  print "upper case\n";
} else {
  print "lower case\n";
}
```

### PHP

```php
// Write a PHP program to check upper case

<?php
	$str = readline('Enter letter: ');

  if (ctype_upper($str)) {
    echo 'Uppercase';
  } else {
    echo 'Lowercase';
  }
?>
```

### Python

```python
# Write a Python program to check upper case

print("Upper Case" if input()[0].isupper() else "Lower Case")
```

### Ruby

```ruby
# Write a Ruby program to check upper case

puts "Please enter a letter to check if it's uppercase: "
input_letter = gets.chomp

def checkUpperCase letter
    if (letter == letter.upcase)
        "Upper Case"
    else
        "Not Upper Case"
    end
end

puts checkUpperCase input_letter
```

### Rust

```rust
// Write a Rust program to check upper case

fn check_upper_case(char: char) -> &'static str {
    let is_upper_case = char.is_uppercase();

    if is_upper_case {
        return "Upper Case";
    }

    return "Not Upper Case";
}

fn main() {
    let character = check_upper_case('a');
    println!("{}", character);
}
```

### Scala

```scala
// Write a Scala program to check upper case

object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val line = scala.io.StdIn.readChar();
 	  if(line.isUpper) {
 	    println("upper case");
 	  } else {
 	    println("lower case");
 	  }
 	}
 }
```

### Swift

```swift
// Write a Swift program to check upper case

import Swift
import Foundation

var x: Character = "a"
print("a is uppercase: ", x.isUppercase)

var y: Character = "K"
print("K is uppercase: ", y.isUppercase)
```

### TypeScript

```typescript
// Write a TypeScript program to check upper case

function checkUpperCase(character: string) {
  /**
   * Better implenetation than converting the character toUpperCase and checking.
   */
  const isUpperCase = /^[A-Z]*$/.test(character);
  return isUpperCase ? "Upper Case" : "Not Upper Case";
}
```

## Similar programs

- [Check Lower Case](/program/check-lower-case)
- [Check Special Character](/program/check-special-character)
- [Check Digit](/program/check-digit)
- [Check Alphabet](/program/check-alphabet)
- [Check Vowel](/program/check-vowel)
- [Check Consonant](/program/check-consonant)
- [Find The Trace Of A Matrix](/program/find-the-trace-of-a-matrix)
- [Check Valid Date](/program/check-valid-date)
- [Check Integer Or Float](/program/check-integer-or-float)
- [Check Even Or Odd Number](/program/check-even-or-odd-number)
