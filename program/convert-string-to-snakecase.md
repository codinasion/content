---
title: "Convert String To Snakecase"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
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
    "aharonlevy",
    "RiteshK-611",
    "Roybas2001",
    "dinanz",
    "roshan798",
    "harmanbatheja15",
    "BarAzenkot",
    "rafaover",
    "hi-Kartik2004",
    "joao-vitor-souza",
    "ShruAgarwal",
    "Mux199",
    "CodingWithHardik",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T05:03:09Z
trackId: 3119
description: "Write a program to convert string to snakecase."
---

## Table of contents

## Write a program to convert string to snakecase

Snakecase is a style of writing in which all letters are lowercase and spaces are replaced with underscores.

```
Input  : "hello world"
Output : "hello_world"
```

---

### C

```c
// Write a C program to convert string to snakecase

#include<stdio.h>
#include<string.h>
#include<ctype.h>
char* toSnakecase(char* str) {
	for(int i=0;i<strlen(str);i++) {
		if(str[i]==' ')
			str[i] = '_';
		else
			str[i] = tolower(str[i]);
	}
	return str;
}
void main() {
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("String in snakecase: %s\n",toSnakecase(str));
}
```

### C#

```csharp
// Write a C# program to convert string to snakecase

using System;

public class Program{
    public static void Main()
    {
        Console.Write("Enter text: ");
        string input = Console.ReadLine();

        Console.WriteLine(input.ToLower().Replace(" ", "_"));
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to snakecase

#include <iostream>
using namespace std;
int main()
{
    string s,ans="";
    getline(cin,s);
    int n=s.size();
    for(int i=0;i<n;i++){
        if(s[i]==' ') ans+="_";
        else ans+=s[i];
    }
    cout<<ans<<'\n';
    return 0;
}
```

### Go

```go
// Write a Go program to convert string to snakecase

package main

import (
	"fmt"
	"strings"
)

func main() {

	word := "words in string"
	res := ""
	words := strings.Fields(word)
	for w := range words {
		res += words[w]
		res += "_"
	}

	fmt.Println(res[:len(res)-1])
}
```

### Java

```java
// Write a Java program to convert string to snakecase

import java.util.Scanner;
class StringToSnakecase
{
	public static void main(String []args)
	{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your word: ");
        String x = "";
        x+=sc.nextLine();
        sc.close();

        StringBuilder string = new StringBuilder(x);

        for (int i = 0; i < string.length(); ++i) {
            if (string.charAt(i) == ' ' && i < string.length() - 1)
                string.setCharAt(i,'_');
            }
        System.out.println(string);

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to snakecase

function toSnakeCase(str) {
  // Replace any non-word characters with underscores
  let snakeCase = str.replace(/\W+/g, "_");

  // Convert to lowercase
  snakeCase = snakeCase.toLowerCase();

  // Remove underscores from the beginning and end of the string
  snakeCase = snakeCase.replace(/^_+|_+$/g, "");

  return snakeCase;
}

// Prompt the user to enter a string
const inputString = prompt("Enter a string to convert to snakecase:");

// Convert the string to snakecase
const snakeCaseString = toSnakeCase(inputString);

// Display the snakecase string
console.log(snakeCaseString);
```

### Julia

```julia
# Write a Julia program to convert string to snakecase

println("Enter a string: ")
s = readline()
s = replace(lowercase(s), " " => "_")
println("Given string in snakecase: ", s)
```

### Perl

```perl
# Write a Perl program to convert string to snakecase

my $str = 'hello world';
$_ = $str;
$_ = lc;
s/\s+/_/g;
print;
```

### PHP

```php
// Write a PHP program to convert string to snakecase

<?php
// This will replace the space to an underscore.
// Then it will take the newly formed string convert it to lower casing.
// So in the str_replace("What you want to change", "What it should be changed into", "Your input")
echo strtolower(str_replace(" ", "_", "hello world"));
```

### Python

```python
# Write a Python program to convert string to snakecase

# Input some string
value = input("Enter text: ")

# Converts the whole string to lowercase & replaces the spaces with underscore
print(value.lower().replace(" ", "_"))
```

### Ruby

```ruby
# Write a Ruby program to convert string to snakecase

def convert_string_to_snakecase(user_string)
  user_string.split(' ').join('_').downcase
end

puts convert_string_to_snakecase('Time tO chaNgE')
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to snakecase

function snakecase(str: any) {
  let givenString = str.split("");
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === " ") {
      givenString[i] = "_";
    }
  }
  givenString = givenString.join("");
  return console.log(givenString);
}

snakecase("hello world");
```
