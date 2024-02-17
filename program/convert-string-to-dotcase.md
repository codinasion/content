---
title: "Convert String To Dotcase"
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
    "neswatch",
    "RiteshK-611",
    "AdityaNarayanPradhan",
    "rafaover",
    "joao-vitor-souza",
    "rahmat-dev",
    "CodingWithHardik",
    "PoweredByCaffein",
    "grraghav120",
    "prasanta10",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-20T17:34:12Z
trackId: 2422
description: "Write a program to convert string to dotcase."
---

## Write a program to convert string to dotcase

Dotcase is a style of writing in which all letters are lowercase and spaces are replaced with periods.

```
Input  : "hello world"
Output : "hello.world"
```

---

```c
// Write a C program to convert string to dotcase

#include <stdio.h>

int main()
{
    char str[10000] = "hello world";

    for (int i = 0; str[i]; i++)
    {
        if (str[i] > 'A' && str[i] < 'Z')
        {
            str[i] = (char)((str[i] - 'A') + 'a');
        }
        if (str[i] == ' ')
        {
            str[i] = '.';
        }
    }

    printf("%s\n", str);
}
```

```csharp
// Write a C# program to convert string to dotcase

﻿using System;

public class ConvertStringToDotcase
{
    /// <summary>
    /// Converts the given String to dot case, which replaces all the spaces by dots
    /// </summary>
    /// <example>
    /// <code>
    /// // Usage
    /// Console.WriteLine(convertStringToDotcase("Hello World"));
    /// // Output
    /// hello.world
    /// </code>
    /// </example>
    /// <param name="s"></param>
    /// <returns></returns>
    public static string convertStringToDotcase(string s)
    {
        return s.ToLower().Replace(' ', '.');
    }

	public static void Main() {
	    Console.WriteLine("Enter a string :");
	    string demoInput = Console.ReadLine();
	    Console.WriteLine(convertStringToDotcase(demoInput));
	}
}
```

```cpp
// Write a C++ program to convert string to dotcase

#include <iostream>
using namespace std;
int main()
{
    string s,ans="";
    getline(cin,s);
    int n=s.size();
    for(int i=0;i<n;i++){
        if(s[i]==' ') ans+=".";
        else ans+=s[i];
    }
    cout<<ans<<'\n';
    return 0;
}
```

```go
// Write a Go program to convert string to dotcase

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
	line = strings.ReplaceAll(line, " ", ".")
	fmt.Printf("Output: %s", line)
}
```

```java
// Write a Java program to convert string to dotcase

import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    String a=sc.nextLine();
	    String b=a.replace(' ','.');
	    System.out.println(b.toLowerCase());
	}
}
```

```javascript
// Write a JavaScript program to convert string to dotcase

function dotcase(str) {
  let givenString = str.split("");
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] == " ") {
      givenString[i] = ".";
    }
  }
  givenString = givenString.join("");
  return console.log(givenString);
}

dotcase("hello world");
```

```julia
# Write a Julia program to convert string to dotcase

println("Enter a string: ")
s = readline()
s = replace(lowercase(s), " " => ".")
println("Given string in dotcase: ", s)
```

```kotlin
// Write a Kotlin program to convert string to dotcase

fun convertStringToDotcase(text: String): String = text.toLowerCase().replace(" ", ".")

fun main() {
	println(convertStringToDotcase("hello world"))
}
```

```perl
# Write a Perl program to convert string to dotcase

#!/usr/bin/perl
use v5.14;
use strict;
use warnings;
print "Enter a string : ";
my $str = lc(<STDIN>);
$str=~s/ /./g;
say $str;
```

```php
// Write a PHP program to convert string to dotcase

<?php

function convert_string_to_dotcase($string)
{
	return str_replace(" ", ".", strtolower($string));
}

echo convert_string_to_dotcase("hello world");
```

```python
# Write a Python program to convert string to dotcase

a = input()
b = a.replace(" ", ".")
print(b.lower())
```

```ruby
# Write a Ruby program to convert string to dotcase

puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:downcase).join('.')
puts result
```

```rust
// Write a Rust program to convert string to dotcase

fn convert_string_to_dotcase(text: String) -> String {
	return text.to_lowercase().replace(" ", ".");
}

fn main() {
	let text: String = String::from("hello world");
	println!("{}", convert_string_to_dotcase(text));
}
```

```typescript
// Write a TypeScript program to convert string to dotcase

function kebabCase(str: any) {
  let givenString = str.split("");
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === " ") {
      givenString[i] = ".";
    }
  }
  givenString = givenString.join("");
  return console.log(givenString);
}

kebabCase("hello world");
```
