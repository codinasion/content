---
title: "Convert String To Constantcase"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "ShounaKulkarni",
    "harshraj8843",
    "apurvagandhi",
    "NimrodBZB",
    "RiteshK-611",
    "Roybas2001",
    "AdityaNarayanPradhan",
    "jfinley6",
    "Osher160",
    "rksp25",
    "joao-vitor-souza",
    "sam-mugo",
    "castanedadev-edu",
    "Marsh-sudo",
    "greeshma-d",
    "dmosc",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T05:02:32Z
trackId: 3966
description: "Write a program to convert string to constantcase."
---

## Table of contents

## Write a program to convert string to constantcase

Constantcase is a style of writing in which all letters are uppercase and spaces are replaced with underscores.

```
Input  : "hello world"
Output : "HELLO_WORLD"
```

---

### C

```c
// Write a C program to convert string to constantcase

#include <stdio.h>

int main()
{
    char str[10000] = "hello world";

    for (int i = 0; str[i]; i++)
    {
        if (str[i] > 'a' && str[i] < 'z')
        {
            str[i] = (char)((str[i] - 'a') + 'A');
        }
        if (str[i] == ' ')
        {
            str[i] = '_';
        }
    }

    printf("%s\n", str);
}
```

### C#

```csharp
// Write a C# program to convert string to constantcase

using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(ConvertToConstantCase("Hello world!"));
    }

    public static string ConvertToConstantCase(string input)
    {
        return input.Replace(' ', '_').ToUpper();
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to constantcase

#include <iostream>
/////////////////////////////////////////////////////////////////////
void ConvertStringToConstantcase(std::string&);
/////////////////////////////////////////////////////////////////////
int main()
{
    std::string input;

    getline(std::cin,input);

    ConvertStringToConstantcase(input);

    std::cout << input << std::endl;

    return 0;
}
/////////////////////////////////////////////////////////////////////
void ConvertStringToConstantcase(std::string& str)
{
    for(size_t i = 0; i < str.size(); ++i)
    {
        if(str[i] == ' ')
        {
            str[i] = '_';
        }

        else if(str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;
        }
    }
}
/////////////////////////////////////////////////////////////////////
```

### Go

```go
// Write a Go program to convert string to constantcase

package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "hello world"

	// Convert all letters to uppercase.
	str = strings.ToUpper(str)

	// Replace all spaces with underscores.
	str = strings.Replace(str, " ", "_", -1)

	fmt.Println(str)
}
```

### Java

```java
// Write a Java program to convert string to constantcase

import java.util.Scanner;

public class ConvertStringToConstantcase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        System.out.print("Input: ");
        String b = a.replace(' ', '_');
        System.out.println(b.toUpperCase());

        sc.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to constantcase

function stringToConstantcase(str) {
  let splitLettersArray = str.toUpperCase().split("");

  for (let i = 0; i < splitLettersArray.length; i++) {
    if (splitLettersArray[i] === " ") {
      splitLettersArray[i] = "_";
    }
  }

  console.log(splitLettersArray.join(""));
}

stringToConstantcase("hello world");
```

### Julia

```julia
# Write a Julia program to convert string to constantcase

println("Enter a string: ")
s = readline()
s = replace(uppercase(s), " " => "_")
println("Given string in constantcase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to constantcase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Constant Case: " + ConvertStringToConstantcase(min!!.split(" ")))

}

private fun ConvertStringToConstantcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day.uppercase());
        } else {
            buffer.append("_").append(day.uppercase())
        }
    }

    return buffer.toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to constantcase

my $str = 'hello world';
$_ = $str;
$_ = uc;
s/\s+/_/g;
print;
```

### PHP

```php
// Write a PHP program to convert string to constantcase

<?php
// Give an input to covert to a constantcase
$input = "hello world";

// Replace the space with an underscore
$output = str_replace(" ", "_", $input);

// Echo the output in uppercase
echo strtoupper($output);
```

### Python

```python
# Write a Python program to convert string to constantcase

if __name__ == "__main__":
    word = [str(word) for word in input("Type your word:..").split(" ")]
    string = "_".join(word)
    print(string.upper())
```

### Ruby

```ruby
# Write a Ruby program to convert string to constantcase

puts "Please enter a string: "
input_string = gets

def converStringToConstantCase string
    string.upcase.gsub(" ", "_")
end

puts converStringToConstantCase input_string
```

### Scala

```scala
// Write a Scala program to convert string to constantcase

object convertStringToConstantcase {
    def printConstantcase(str: String): String = {

        //Array of string to store the words
        val strArray = str.split(" ")
        val strArrayLength = strArray.length
        //Variable to store the final string
        var finalStr = ""
        //Loop to iterate over the words
        for (i <- 0 until strArrayLength) {
            finalStr += strArray(i).toUpperCase
            // If it is not the last word of the string add underscore then proceed
            if (i != strArrayLength - 1) {
                finalStr += "_"
            }
        }
        return finalStr
  }
    def main(args: Array[String]): Unit = {
        val str = "Hello World"
    	println(printConstantcase(str))
  }

}
```

### Swift

```swift
// Write a Swift program to convert string to constantcase

import Foundation

func convertToConstantCase(input: String) -> String {
    return input.uppercased().replacingOccurrences(of: " ", with: "_")
}

// Taking input from the user
print("Enter a string: ", terminator: "")
if let userInput = readLine() {
    let output = convertToConstantCase(input: userInput)
    print("Constant Case: \(output)")
} else {
    print("Invalid input")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to constantcase

const convertStringToConstantCase = (text: string): string => {
  return text.replace(" ", "_").toUpperCase();
};

console.log(convertStringToConstantCase("hello world")); // HELLO_WORLD
```

## Similar programs

- [Convert String To Snakecase](/program/convert-string-to-snakecase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert String To Kebabcase](/program/convert-string-to-kebabcase)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
- [Convert String To Reversecase](/program/convert-string-to-reversecase)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Consonantcase](/program/convert-string-to-consonantcase)
- [Convert String To Vowelcase](/program/convert-string-to-vowelcase)
- [Convert String To Titlecase](/program/convert-string-to-titlecase)
