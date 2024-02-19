---
title: "Convert String To Kebabcase"
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
    "julia",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "rsitters",
    "RiteshK-611",
    "roshan798",
    "Osher160",
    "jfinley6",
    "joao-vitor-souza",
    "rahmat-dev",
    "CodingWithHardik",
    "PoweredByCaffein",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-02T16:42:03Z
trackId: 2449
description: "Write a program to convert string to kebabcase."
---

## Table of contents

## Write a program to convert string to kebabcase

Kebabcase is a style of writing in which all letters are lowercase and spaces are replaced with hyphens.

```
Input  : "hello world"
Output : "hello-world"
```

---

### C

```c
// Write a C program to convert string to kebabcase

#include<stdio.h>
#include<string.h>
char* toKababCase(char *str) {
	int flag = 0,index = 0;
	char c[1000];
	for(int i=0;i<strlen(str);i++){
		if(str[i] ==' '){
			flag = 1;
		}
		else{
			if(flag==1 && str[i] != '\0') {
				flag = 0;
				str[index++] = '-';
			}
			str[index++] = tolower(str[i]);
		}
	}
	str[index] = '\0';
	return str;
}
void main() {
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("String in Kababase: %s",toKababCase(str));
}
```

### C#

```csharp
// Write a C# program to convert string to kebabcase

using System;
using System.Text.RegularExpressions;

public class KebabCase
{
    public static void Main()
    {
        //Prompts user to enter a string
        Console.WriteLine("Please enter a string: ");

        //Reads user input
        string input = Console.ReadLine();

        //Regular expression pattern to match non-alphanumeric characters
        string pattern = "[^a-zA-Z0-9]+";

        //Replacement string for non-alphanumeric characters
        string replacement = "-";

        //Converts input string to kebab case
        string kebabCase = Regex.Replace(input, pattern, replacement).ToLower();

        //Prints kebab case string
        Console.WriteLine(kebabCase);
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to kebabcase

#include <iostream> // cout, cin

void ConvertToKebabcase(std::string &);


int main()
{
    std::string str;

    std::getline(std::cin,str);

    ConvertToKebabcase(str);

    std::cout << str << std::endl;

    return 0;
}

void ConvertToKebabcase(std::string &str)
{
    for(std::size_t i = 0; i < str.size(); ++i)
    {
        if(str[i] == ' ')
        {
            str[i] = '-';
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z'))
        {
            str[i] += 32;
        }
    }
}
```

### Go

```go
// Write a Go program to convert string to kebabcase

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// We are using a bufio reader as the scanf method does not allow taking arbitrary number inputs with spaces
	reader := bufio.NewReader(os.Stdin)

	line, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Failed to take input:", err)
	}

	fmt.Printf("Input: %s", line)
	line = strings.ReplaceAll(line, " ", "-")
	fmt.Printf("Output: %s", line)
}
```

### Java

```java
// Write a Java program to convert string to kebabcase

import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    System.out.println("Input  : ");
	    Scanner sc=new Scanner(System.in);
	    String a=sc.nextLine();
	    String b=a.replace(' ','-');
	    System.out.println(b.toLowerCase());
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to kebabcase

function kebabCase() {
  let givenString = str.split("");
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] == " ") {
      givenString[i] = "-";
    }
  }
  givenString = givenString.join("");
  return console.log(givenString);
}

kebabCase("hello world");
```

### Julia

```julia
# Write a Julia program to convert string to kebabcase

println("Enter a string: ")
s = readline()
s = replace(lowercase(s), " " => "-")
println("Given string in kebabcase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to kebabcase

fun convertStringToKebabcase(text: String): String = text.toLowerCase().replace(" ", "-")

fun main() {
	println(convertStringToKebabcase("hello world"))
}
```

### Perl

```perl
# Write a Perl program to convert string to kebabcase

#!/usr/bin/perl
use v5.14;
use strict;
use warnings;
print "Enter a string : ";
my $str = lc(<STDIN>);
$str=~s/ /-/g;
say $str;
```

### PHP

```php
// Write a PHP program to convert string to kebabcase

<?php

function convert_string_to_kebabcase($string)
{
	return str_replace(" ", "-", strtolower($string));
}

echo convert_string_to_kebabcase("hello world");
```

### Python

```python
# Write a Python program to convert string to kebabcase

a = input("Input : ")
b = a.replace(" ", "-")
print("Output : ", b.lower())
```

### Ruby

```ruby
# Write a Ruby program to convert string to kebabcase

puts "Please enter a string: "
input_string = gets

def convertStringToKebabCase(string)
    string.downcase.gsub(" ", "-")
end

puts convertStringToKebabCase(input_string)
```

### Rust

```rust
// Write a Rust program to convert string to kebabcase

fn convert_string_to_kebabcase(text: String) -> String {
	return text.to_lowercase().replace(" ", "-");
}

fn main() {
	let text: String = String::from("hello world");
	println!("{}", convert_string_to_kebabcase(text));
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to kebabcase

function kebabCase(str: any) {
  let givenString = str.split("");
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === " ") {
      givenString[i] = "-";
    }
  }
  givenString = givenString.join("");
  return console.log(givenString);
}

kebabCase("hello world");
```

## Similar programs

- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert String To Snakecase](/program/convert-string-to-snakecase)
- [Convert String To Reversecase](/program/convert-string-to-reversecase)
- [Print Hello World](/program/print-hello-world)
- [Convert String To Constantcase](/program/convert-string-to-constantcase)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Titlecase](/program/convert-string-to-titlecase)
