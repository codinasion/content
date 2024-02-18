---
title: "Print Ascii Value Of A String"
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
    "scala",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "g-s-eire",
    "gsquareg2",
    "anandfresh",
    "joao-vitor-souza",
    "Ipankaj07",
    "MadhuS-1605",
    "Chirag8023",
    "krishan-here",
    "kangjung",
    "Arnab-K-S",
    "SRR-CODER",
    "sahooankeeta",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 578
description: "Write a program to print ascii value of a string."
---

## Table of contents

## Write a program to print ascii value of a string

ASCII value is the numeric representation of a character. For example, the ASCII value of the character 'A' is 65. The ASCII value of the character 'a' is 97. The ASCII value of the character '0' is 48. The ASCII value of the character ' ' is 32.

```
Input  : ABC
Output : 65 66 67
```

---

### C

```c
// Write a C program to print ascii value of a string

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    char str[100];
    int i=0;
    printf("Input : ");
    scanf("%s",str);

    printf("Output : ");
    while(str[i])
         printf("%d ",str[i++]);

    return 0;
}
```

### C#

```csharp
// Write a C# program to print ascii value of a string

using System;

namespace CSharpStringToASCII {
    public class PrintAsciiValueOfAString {
        // method to convert string and prints ASCII values
        public static void PrintAsciiValues(string userInput) {
            // error handling for invalid inputs
            try{
                // iterating through user input
                foreach(char c in userInput){
                    // converting char to int
                    int asciiValue = (int)c;
                    // printing relevant char and its ASCII value
                    Console.WriteLine($"Char: {c}, ASCII value: {asciiValue}");
                }
            }
            catch{
                Console.WriteLine("Invalid input");
            }
        }
        // main method
        public static void Main(string[] args) {
            // prompting user for input
            Console.Write("Enter a string: ");
            // read user input from input stream
            string userInput = Console.ReadLine();
            // calling method to print ASCII values of the input
            PrintAsciiValues(userInput);
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print ascii value of a string

#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    cin>>s;
    for(int i=0;i<s.size();i++)
    {
        cout<<(int)s[i]<<" ";
    }
    cout<<endl;

    return 0;
}
```

### Go

```go
// Write a Go program to print ascii value of a string

package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter Any Character to find ASCII : ")
	ch, _ := reader.ReadByte()
	fmt.Printf("\nThe ASCII value of '%c' : %d\n", ch, ch)
}
```

### Java

```java
// Write a Java program to print ascii value of a string

import java.util.*;
class PrintAsciiValueOfAString
{
  public static void printAscii(String s)
  {
    for(char c:s.toCharArray())
     System.out.print((int)(c)+" ");
  }
   public static void main(String args[])
   {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter string ");
      String s=sc.nextLine();
      printAscii(s);
   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print ascii value of a string

function PrintAsciiValueOfAString(s) {
  let ascii = "";
  for (let c of s) ascii += c.charCodeAt(0) + " ";
  return ascii;
}
let s = "ABC";
console.log("Input  :", s);
console.log("Output :", PrintAsciiValueOfAString(s));
```

### Kotlin

```kotlin
// Write a Kotlin program to print ascii value of a string

fun main() {
    var str = "ABC"
    for(element in str){
      print(element.code)
      print(" ")
    }
}
```

### PHP

```php
// Write a PHP program to print ascii value of a string

<?php

function asciiString($string){
$arr = str_split($string);
forEach($arr as $char){
 echo ord($char).' ';
}
}

asciiString('ABC');

?>
```

### Python

```python
# Write a Python program to print ascii value of a string

def ascii(s):
    for a in s:
        print(ord(a), end=" ")


ascii(input())
```

### Ruby

```ruby
# Write a Ruby program to print ascii value of a string

# Function to print ASCII value of a string
def print_ascii_value_of_a_string(string)
    string.each_byte do |char|
        print char, " "
    end
end

# Main function
def main
    string = "ABC"
    print_ascii_value_of_a_string(string)
end

# Call Main
main
```

### Scala

```scala
// Write a Scala program to print ascii value of a string

import scala.io.StdIn._;

object asciiValueString {
  def main(args:Array[String]):Unit={
    var str = readLine();
    println("Enter a String : "+str);
    var splitString = str.split("");
    splitString.foreach(x => {
      println(x.toInt)
    })
  }
}
```

### TypeScript

```typescript
// Write a TypeScript program to print ascii value of a string

function printASCIIofString(str: string) {
  str.split("").forEach(c => {
    console.log(c.charCodeAt(0));
  });
}

printASCIIofString("ABCd");
```
