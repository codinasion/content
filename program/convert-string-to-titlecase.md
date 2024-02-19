---
title: "Convert String To Titlecase"
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
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "RiteshK-611",
    "Aranarora",
    "Osher160",
    "NicholasCloud4",
    "rafaover",
    "joao-vitor-souza",
    "royninja",
    "victoriacheng15",
    "ntoniocp",
    "rahmat-dev",
    "kshitijv256",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-09-06T18:22:51Z
trackId: 2506
description: "Write a program to convert string to titlecase."
---

## Table of contents

## Write a program to convert string to titlecase

Titlecase is a style of writing in which the first letter of each word is capitalized.

```
Input  : "hello world"
Output : "Hello World"
```

---

### C

```c
// Write a C program to convert string to titlecase

#define _POSIX_C_SOURCE 200809L /* for getline*/

#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t, free */
#include <string.h> /* strlen */

void ConvertToTitleCase(char *str);


int main()
{
    size_t size = 100;
    char *str = NULL;

    getline(&str,&size,stdin);

    ConvertToTitleCase(str);

    printf("%s\n",str);

    free(str);

    return 0;
}



void ConvertToTitleCase(char *str)
{
    int len = strlen(str);
    int i = 0;
    int is_space = 0;

    if((str[i] >= 'a') && str[i] <= 'z')
    {
        str[i] -= 32;
    }

    for(i = 0; i < len; ++i)
    {
        if(str[i] == ' ')
        {
            is_space = 1;
        }

        else if(((str[i] >= 'a') && str[i] <= 'z')&& is_space)
        {
            str[i] -= 32;
            is_space = 0;
        }
    }
}
```

### C#

```csharp
// Write a C# program to convert string to titlecase

using System;
using System.Globalization;

namespace TitleCase
{
    class Program
    {
        static void Main(string[] args)
        {
            var textinfo = new CultureInfo("en-US", false).TextInfo;
            var textInfo = CultureInfo.CurrentCulture.TextInfo;

            //input
            String text = Console.ReadLine();
            //output
            Console.WriteLine(textinfo.ToTitleCase(text));
        }
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to titlecase

#include <iostream>
using namespace std;
int main()
{
    string s;
    getline(cin,s);
    int n=s.size();
    s[0]=toupper(s[0]);
    for(int i=0;i<n;i++){
        if(s[i-1]==' ') s[i]=toupper(s[i]);
    }
    cout<<s<<'\n';
    return 0;
}
```

### Go

```go
// Write a Go program to convert string to titlecase

package main

import (
	"fmt"
)

// Returns if the passed char is a lowercase letter
func isLowercaseLetter(char string) bool {
	return (char[0] >= 97 && char[0] <= 122)
}

// Returns if the passed char is a uppercase letter
func isUppercaseLetter(char string) bool {
	return (char[0] >= 65 && char[0] <= 90)
}

// Returns if the passed char is a letter (Comparing ascii codes)
func isLetter(char string) bool {
	return isLowercaseLetter(char) || isUppercaseLetter(char)
}

// Returns the passed character uppercased
func toUpperCaseChar(char string) string {
	if isLowercaseLetter(string(char[0])) {
		return string(char[0] - 32)
	}

	return char
}

func toLowerCaseChar(char string) string {
	if isUppercaseLetter(string(char)) {
		return string(char[0] + 32)
	}

	return char
}

// Returns the passed string but in Title Case
func toTitleCase(str string) string {
	titleCasedStr := ""

	for i := 0; i < len(str); i++ {
		char := string(str[i])

		if i == 0 || i > 0 && !isLetter(string(str[i-1])) {
			titleCasedStr += toUpperCaseChar(char)
		} else {
			titleCasedStr += toLowerCaseChar(char)
		}

	}

	return titleCasedStr
}

func main() {
	result := toTitleCase("hello###  world --##..00 program")
	fmt.Println(result)
}
```

### Java

```java
// Write a Java program to convert string to titlecase

import java.util.Scanner;

public class ConvertStringToTitlecase {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();
        String[] words = text.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            result.append(Character.toUpperCase(word.charAt(0))).append(word.substring(1)).append(" ");
        }
        System.out.println(result.toString().trim());
        input.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to titlecase

// Javascript code to convert a string to title case

function toTitleCase(str) {
  // split the string into an array of words
  strList = str.split(" ");
  // loop through the array of words and capitalize the first letter of each word
  return strList
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  // join the array of words back into a string and return it
}
console.log(toTitleCase("I'm a little tea pot"));
```

### Julia

```julia
# Write a Julia program to convert string to titlecase

println("Enter a string: ")
s = titlecase(readline())
println("Given string in titlecase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to titlecase

fun convertStringToTitlecase(text: String): String = text.split(" ")
	.map { it.toLowerCase().capitalize() }
	.joinToString(" ")

fun main() {
	println(convertStringToTitlecase("hello world"))
}
```

### Perl

```perl
# Write a Perl program to convert string to titlecase

print " Enter a pharse : ";
$title = <STDIN>;
$title =~ s/(\w+)/\u\L$1/g;
printf $title;
```

### PHP

```php
// Write a PHP program to convert string to titlecase

<?php

function convert_string_to_titlecase($string)
{
	$arrString = explode(" ", $string);
	$arrString = array_map(function ($value) {
		$result = strtoupper($value[0]) . substr($value, 1);
		return $result;
	}, $arrString);

	return implode(" ", $arrString);
}

echo convert_string_to_titlecase("hello world");
```

### Python

```python
# Write a Python program to convert string to titlecase

a = input()
print(a.title())
```

### Ruby

```ruby
# Write a Ruby program to convert string to titlecase

puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:capitalize).join(' ')
puts result
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to titlecase

function toTitleCase(str: string): string {
  const strArr = str.split(" ");
  return strArr.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(toTitleCase("hello world"));
```

## Similar programs

- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert String To Camelcase](/program/convert-string-to-camelcase)
- [Convert String To Pascalcase](/program/convert-string-to-pascalcase)
- [Print Hello World](/program/print-hello-world)
- [Convert String To Alternatingcase](/program/convert-string-to-alternatingcase)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Kebabcase](/program/convert-string-to-kebabcase)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
