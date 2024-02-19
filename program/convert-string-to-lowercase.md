---
title: "Convert String To Lowercase"
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
    "dart",
    "go",
    "php",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "sancoLgates",
    "ofirtzabari",
    "rksp25",
    "joao-vitor-souza",
    "lukastomcisak",
    "manyadua16",
    "victoriacheng15",
    "PraaneshSelvaraj",
    "kshitijv256",
    "ashu6378",
    "Ingrzs",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2683
description: "Write a program to convert string to lowercase."
---

## Table of contents

## Write a program to convert string to lowercase

```
Input  : "Hello World"
Output : "hello world"
```

---

### C

```c
// Write a C program to convert string to lowercase

#include<stdio.h>
#include<conio.h>
int main ()
{
char str[30];
int i;
printf (" Enter the string: ");
scanf (" %s", &str); // take a string

 // use for loop to change string from upper case to lower case
 for ( i = 0; i <= strlen (str); i++)
 {
// The ASCII value of A is 65 and Z is 90
 if (str[i] >= 65 && str[i] <= 90)
 str[i] = str[i] + 32; /* add 32 to string character to convert into lower case. */
 }
printf (" \n Upper Case to Lower case string is: %s", str);
return 0;
}
```

### C#

```csharp
// Write a C# program to convert string to lowercase

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Program
{
    static void Main()
    {
        String input;
        String output;

        Console.Write("Input : ");
        input = Console.ReadLine();

        output = input.ToLower();

        Console.WriteLine("Output : " + output);
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to lowercase

#include <iostream>

using namespace std;

int main()
{
    string s;
    getline(cin,s);
    for(int i=0;i<s.size();i++) s[i]=tolower(s[i]);
    cout<<s<<'\n';
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert string to lowercase

String lower(str) {
  return str.toLowerCase();
}

void main() {
  const myString = 'Hello World';
  print(lower(myString));
}
```

### Go

```go
// Write a Go program to convert string to lowercase

package main

import (
	"fmt"
	"strings"
)

func main() {
	var str = "Hello World"
	fmt.Println(strings.ToLower(str))
}
```

### Java

```java
// Write a Java program to convert string to lowercase

import java.util.Scanner;

public class ConvertStringToLowercase {

	public static String ConvertStringToLowercase(String s) {
		return s.toLowerCase();
	}

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);
		 String s = scanner.nextLine();
		 System.out.println(ConvertStringToLowercase(s));
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to lowercase

function ConvertStringToLowercase(param) {
  return param.toLowerCase();
}
console.log(ConvertStringToLowercase("Hello World"));
```

### Julia

```julia
# Write a Julia program to convert string to lowercase

println("Enter a string: ")
s = lowercase(readline())
println("Given string in lowercase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to lowercase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("Lower Case: " + ConvertStringToLowercase(input!!))

}

private fun ConvertStringToLowercase(args: String): String {
    return args.lowercase().toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to lowercase

my $str = <STDIN>;
print lc $str;
```

### PHP

```php
// Write a PHP program to convert string to lowercase

<?php
	$x = readline('Enter String: ');

  echo strtolower($x);
?>
```

### Python

```python
# Write a Python program to convert string to lowercase

a = input()
print(a.lower())
```

### R

```r
# Write a R program to convert string to lowercase

convertStringToLowercase <- function(str){
    answer <- tolower(str);
print(answer)
}

convertStringToLowercase("Hello World")
# hello world
```

### Ruby

```ruby
# Write a Ruby program to convert string to lowercase

print "Enter String : "
str = gets.chomp
print "Lowecase : #{str.downcase}"
```

### Swift

```swift
// Write a Swift program to convert string to lowercase

import Swift
import Foundation

let str = "HELLO WORLD"
let lowercase = String(str.lowercased())
print(lowercase)
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to lowercase

function convertToLowercase(str: string): string {
  return str.toLowerCase();
}

const str = "Hello World";
console.log(`Input: ${str}`);
const result = convertToLowercase(str);
console.log(`Output: ${result}`);
```

## Similar programs

- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Print Hello World](/program/print-hello-world)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Reversecase](/program/convert-string-to-reversecase)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Kebabcase](/program/convert-string-to-kebabcase)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
- [Convert String To Consonantcase](/program/convert-string-to-consonantcase)
- [Convert String To Vowelcase](/program/convert-string-to-vowelcase)
- [Split String Into Array Of Words](/program/split-string-into-array-of-words)
