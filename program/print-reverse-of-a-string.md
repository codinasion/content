---
title: "Print Reverse Of A String"
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
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "Osher160",
    "jfinley6",
    "joao-vitor-souza",
    "Rainingcity",
    "greeshma-d",
    "Harsh3341",
    "guilherme-puida",
    "DheekshaGopika",
    "heySanj",
    "UsmanFani",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:04:28Z
trackId: 912
description: "Write a program to print reverse of a string."
---

## Table of contents

## Write a program to print reverse of a string

Reverse of a string is the string with the characters in reverse order. For example, the reverse of "hello" is "olleh".

```
Input  : abcd
Output : dcba
```

---

### C

```c
// Write a C program to print reverse of a string

#define _POSIX_C_SOURCE 200809L /* for getline*/

#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t, free */
#include <string.h> /* strlen */
#include <unistd.h> /* getline */

void PrintReverseOfAString(char *);


int main()
{
    size_t size = 100;

    char *str = NULL;

    getline(&str,&size,stdin);

    PrintReverseOfAString(str);

    free(str);

    return 0;
}

void PrintReverseOfAString(char *str)
{
    int size = strlen(str);
    int i = 0;

    for(i = size;i >= 0; --i)
    {
        printf("%c",str[i]);
    }
}
```

### C#

```csharp
// Write a C# program to print reverse of a string

using System;

namespace reverseString
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "", reverse = "";
            int Length = 0;
            Console.WriteLine("Enter a Word");
            str = Console.ReadLine();
            Length = str.Length - 1;
            while(Length>=0)
            {
                reverse = reverse + str[Length];
                Length--;
            }
            Console.WriteLine("Reverse word is : {0}",reverse);
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print reverse of a string

#include <iostream>
#include <string>

void SWAP(char& x, char& y){
	char t = x;
	x = y;
	y = t;
}

void PrintReverseOfAString(std::string s){
	int n = s.length();
	for(int i=0, j=n-1; i<j; i++, j--){
		SWAP(s[i], s[j]);
	}
	std::cout<<s<<std::endl;
}

int main(){
	std::string s;
	std::cin>>s;
	PrintReverseOfAString(s);
	return 0;
}
```

### Go

```go
// Write a Go program to print reverse of a string

package main

import "fmt"

func main() {
	var input, reverse string
	fmt.Scan(&input)
	for _, v := range input {
		reverse = string(v) + reverse
	}
	fmt.Println(reverse)
}
```

### Java

```java
// Write a Java program to print reverse of a string

public class PrintReverseOfAString {
    public static void main(String[] args) {

        String input = "abcd";
        String result = "";
        char ch;

        for (int i = 0; i < input.length(); i++) {
            ch = input.charAt(i);
            result = ch + result;
        }

        System.out.println(result);

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print reverse of a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("abcd"));
```

### Julia

```julia
# Write a Julia program to print reverse of a string

print("Enter a String: ")
str = readline(stdin)
println(reverse(str))
```

### Kotlin

```kotlin
// Write a Kotlin program to print reverse of a string

fun main() {
    print("Enter String to Reverse: ")
    val str = readln()
    println()
    print(reverseString(str))
}

private fun reverseString(str: String): String {
    var reverse = ""
    for (i in str.lastIndex downTo 0) {
        reverse += str[i]
    }
    return reverse
}
```

### Perl

```perl
# Write a Perl program to print reverse of a string

print "Enter a String : \n";
$string = <STDIN>;
print "Reverse String : ".scalar reverse("$string"), "\n";
```

### PHP

```php
// Write a PHP program to print reverse of a string

<?php
	echo strrev("Hello World!");
?>
```

### Python

```python
# Write a Python program to print reverse of a string

print(input("What would you like to reverse?: ")[::-1])
```

### Ruby

```ruby
# Write a Ruby program to print reverse of a string

# Program to reverse the inputted string...
def printReverseOfAString string
    puts string.reverse
end

print "Enter the string : "
string_input = gets

print "The reversed string is : "
printReverseOfAString string_input
```

### Rust

```rust
// Write a Rust program to print reverse of a string

fn reverse_string(string: &str) -> String {
    string.chars().rev().collect()
}

fn main() {
    println!("{}", reverse_string("abcd"));
}
```

### Scala

```scala
// Write a Scala program to print reverse of a string

object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val line = scala.io.StdIn.readLine();
 	  println(reverse(line));
 	}

 	def reverse(s: String): String = {
    if (s.isEmpty) ""
    else reverse(s.tail) + s.head
  }
 }
```

### Swift

```swift
// Write a Swift program to print reverse of a string

import Swift
import Foundation

let str = "Hello, world!"
let reversed = String(str.reversed())
print(reversed)
```

### TypeScript

```typescript
// Write a TypeScript program to print reverse of a string

function reverseString(str: string) {
  return str.split("").reverse().join("");
}

console.log(reverseString("abcd"));
```

## Similar programs

- [Print Reverse Of A String By Recursion](/program/print-reverse-of-a-string-by-recursion)
- [Print Reverse Of A Number](/program/print-reverse-of-a-number)
- [Reverse An Array](/program/reverse-an-array)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Length Of A String](/program/find-length-of-a-string)
- [Split String Into Array Of Characters](/program/split-string-into-array-of-characters)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Check Palindrome String](/program/check-palindrome-string)
