---
title: "Convert String To Alternatingcase"
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
    "swift",
    "typescript",
    "julia",
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
    "vamsipasam2000",
    "patilanuja",
    "kenroulier",
    "bhushanmarathe",
    "moaldeen",
    "pedram-mohajer",
    "pranavsilimkhan",
    "anandfresh",
    "harshraj8843",
    "apurvagandhi",
    "Tushar12222",
    "AdityaNarayanPradhan",
    "Pinklemonade33",
    "jfinley6",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-01T16:58:56Z
trackId: 5316
description: "Write a program to convert string to alternatingcase."
---

## Table of contents

## Write a program to convert string to alternatingcase

Alternatingcase is a style of writing in which each letter is converted to its opposite case.

```
Input  : "hello world"
Output : "hElLo WoRlD"
```

---

### C

```c
// Write a C program to convert string to alternatingcase

#include <stdio.h>

int main()
{
    char str[10000] = "hello world";
    int cap = 0;
    for (int i = 0; str[i]; i++)
    {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) // if it is alphabet
        {
            if (cap == 0) // this need to be lowercase
            {
                if (str[i] >= 'A' && str[i] <= 'Z')
                {
                    str[i] = (char)((str[i] - 'A') + 'a'); // convert uppercase to lowercase
                }
                cap = 1;
            }
            else
            { // this need to be uppercase
                if (str[i] >= 'a' && str[i] <= 'z')
                {
                    str[i] = (char)((str[i] - 'a') + 'A'); // convert lowercase to uppercase
                }
                cap = 0;
            }
        }
    }
    printf("%s\n", str);
}
```

### C#

```csharp
// Write a C# program to convert string to alternatingcase

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a String:");
    string str = Console.ReadLine();
    string x = "";
    for (int i = 0; i < str.Length; i++) {
      char ch = str[i];
      if (i%2 == 0) {
        x += Char.ToLower(ch);
      }
      else {
        x += Char.ToUpper(ch);
      }
    }
    Console.WriteLine("Alternating Case :"+x);
  }
}
```

### C++

```cpp
// Write a C++ program to convert string to alternatingcase

#include <iostream>
#include <string>
#include <cctype>

using namespace std;

// Replaces all characters in string to the opposite case
string AlternateCase(string str) {
	int len = str.length();
	bool cap = false;
	for (int i = 0; i < len; i++) {
		if (cap == false) {
			str[i] = toupper(str[i]);
			cap = true;
		}
		else if (cap == true) {
			str[i] = tolower(str[i]);
			cap = false;
		}
	}
	return str;
}


int main()
{
	string str = "Hello World";
	str = AlternateCase(str);
	cout << str;
}
```

### Dart

```dart
// Write a Dart program to convert string to alternatingcase

void alterCase(String s){
  s = s.toLowerCase();
  String answer = "";
  int cap = 0;
  for(var i = 0 ; i < s.length ; i++){
    if(s[i] == " "){
      answer += s[i];
      continue;
    }
    if(cap % 2 != 0){
      answer += s[i].toUpperCase();
    }
    else{
      answer += s[i];
    }
    cap += 1;
  }
  print(answer);
}


void main() {
  alterCase("Hello World");
}
```

### F#

```fsharp
// Write a F# program to convert string to alternatingcase

open System

let alternatingCase (input: string) =
    let convert (c: char) (isUpper: bool) =
        match Char.IsLetter c with
        | true -> if isUpper then Char.ToUpper c else Char.ToLower c
        | false -> c

    let rec loop (str: string) (index: int) (isUpper: bool) =
        if index < str.Length then
            let updatedChar = convert str.[index] isUpper
            let nextIsUpper = if Char.IsLetter str.[index] then not isUpper else isUpper
            updatedChar.ToString() + loop str (index + 1) nextIsUpper
        else
            ""

    loop input 0 false  // Start with lowercase for the first character

// Example usage
let result = alternatingCase "hello world"
printfn "%s" result
```

### Go

```go
// Write a Go program to convert string to alternatingcase

package main

import (
	"fmt"
	"strings"
)

func main() {
	input := "hello world"
	output := ""
	for i, r := range input {
		if i%2 == 0 {
			output += strings.ToUpper(string(r))
		} else {
			output += strings.ToLower(string(r))
		}
	}
	fmt.Println(output)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert string to alternatingcase

import Data.Char (toLower, toUpper)

-- Function to convert a string to alternating case
toAlternatingCase :: String -> String
toAlternatingCase = go True
  where
    go _ [] = []
    go toLowerCase (x:xs)
      | toLowerCase && x /= ' ' = toLower x : go (not toLowerCase) xs
      | x /= ' ' = toUpper x : go (not toLowerCase) xs
      | otherwise = x : go toLowerCase xs

-- Main function to demonstrate the conversion
main :: IO ()
main = do
  let input = "hello world"
  putStrLn $ toAlternatingCase input
```

### Java

```java
// Write a Java program to convert string to alternatingcase

import java.util.Scanner;
public class alternatingCase {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter a string :");
      String str = sc.nextLine();
      str = str.toLowerCase();
      char[] ch = str.toCharArray();
      for(int i=0; i<ch.length; i=i+2){
         ch[i] = Character.toUpperCase(ch[i]);
      }
      System.out.println(new String(ch));
   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to alternatingcase

function alternatingCase(str) {
  return str
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

console.log(alternatingCase("hello world"));
```

### Julia

```julia
# Write a Julia program to convert string to alternatingcase

print("Enter a string: ")
str = readline(stdin)
println(String([i%2 == 0 ? uppercase(c) : c for (i, c) in enumerate(str)]))
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to alternatingcase

fun alternatingCase(input: String): String {
    return input.mapIndexed { index, char ->
        if (index % 2 == 0) {
            char.toLowerCase()
        } else {
            char.toUpperCase()
        }
    }.joinToString("")
}

fun main() {
    println("Enter a string: ")
    val inputString = readLine() ?: ""
    val convertedString = alternatingCase(inputString)
    println("Alternating Case String: $convertedString")
}
```

### Perl

```perl
# Write a Perl program to convert string to alternatingcase

#!/usr/bin/perl
use strict;
use warnings;

my $str = 'hello world';
my @spl = split('', $str);
my $index = 0;
foreach my $i (@spl)
{
    if ($index%2==0) {
    print lc("$i");
    } else{
    print uc("$i");
    }
    $index++;
}
```

### PHP

```php
// Write a PHP program to convert string to alternatingcase

<?php

function alternatingCase($str) {

    $do_caps = false;
    $result = '';
    for ($i = 0; $i < strlen($str); $i++)
    {
      $char = substr($str, $i, 1);
      if (stripos('abcdefghijklmnopqrstuvwxyz', $char) !== false)
      {
            if ($do_caps)
            {
                $char = strtoupper($char);
                $do_caps = false;
            }
            else
            {
                $do_caps = true;
            }
      }
      $result .= $char;
    }
    return $result;
}

echo alternatingCase("hello world")

?>
```

### Python

```python
# Write a Python program to convert string to alternatingcase

input = input("Enter a String : ")
res = ""
for idx in range(len(input)):
    if not idx % 2:
        res = res + input[idx].lower()
    else:
        res = res + input[idx].upper()

print("The alternate case string : " + str(res))
```

### R

```r
# Write a R program to convert string to alternatingcase

convert_to_alternating_case <- function(input_string) {
  result <- ""
  to_upper <- FALSE  # Start with converting the first character to lowercase

  for (char in strsplit(input_string, NULL)[[1]]) {
    if (char %in% letters) {
      if (to_upper) {
        result <- paste0(result, toupper(char))
      } else {
        result <- paste0(result, tolower(char))
      }
      to_upper <- !to_upper  # Switch the case for the next character
    } else {
      result <- paste0(result, char)
    }
  }
  return(result)
}

# Example usage
input_str <- "hello world"
output_str <- convert_to_alternating_case(input_str)

# Print the result
cat("Input String: ", input_str, "\n")
cat("Output String: ", output_str, "\n")
```

### Ruby

```ruby
# Write a Ruby program to convert string to alternatingcase

def stringAlternateCase string
    newstr = []
    string.split("").each_with_index do |word, i|
        i.even? ? newstr << word.downcase : newstr << word.upcase
    end
    puts newstr.join("")
end

stringAlternateCase "hello world"
```

### Rust

```rust
// Write a Rust program to convert string to alternatingcase

// This RUST program requires the convert_case (ccase) routines
//	for details see - https://docs.rs/convert_case/latest/convert_case/
// Convert case must be added to the Cargo.toml file:
//	command:$ cargo add convert_case

use convert_case::{Case, Casing};
use std::io;

fn convert_string_to_alternatingcase(strin: &str) -> String{

	// use the string in (strin) varible as the source to change to alternating case
	let s: String = String::from(strin);

 	// use the to_case call to convert and return to the answer to the caller
	let ans = s.to_case(Case::Alternating);
	return ans;
}

fn main(){

	// the input string and this main function can be removed. This is simply for testing
	let mut strin = String::new();
	let _rtrn = io::stdin().read_line(&mut strin);

	let dum = convert_string_to_alternatingcase(&strin);

	// print out the results of the conversion.
	println!("{}", dum);
}
```

### Scala

```scala
// Write a Scala program to convert string to alternatingcase

fun alternatingCase(input: String): String {
    return input.mapIndexed { index, char ->
        if (index % 2 == 0) {
            char.toLowerCase()
        } else {
            char.toUpperCase()
        }
    }.joinToString("")
}

fun main() {
    println("Enter a string: ")
    val inputString = readLine() ?: ""
    val convertedString = alternatingCase(inputString)
    println("Alternating Case String: $convertedString")
}
```

### Swift

```swift
// Write a Swift program to convert string to alternatingcase

import Foundation

func toAlternatingCase(_ input: String) -> String {
    var result = ""
    var shouldUppercase = false

    for character in input {
        if character.isLetter {
            if shouldUppercase {
                result += character.uppercased()
            } else {
                result += character.lowercased()
            }
            shouldUppercase.toggle()
        } else {
            result += String(character)
        }
    }

    return result
}

let inputString = "hello world"
let outputString = toAlternatingCase(inputString)
print(outputString)
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to alternatingcase

const alternatingCase = (str: string): string => {
  return str
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
};

console.log(alternatingCase("hello world"));
```
