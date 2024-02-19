---
title: "Find Length Of A String"
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
    "harshraj8843",
    "esivakumar18",
    "anandfresh",
    "SoumyadiptoPal",
    "Preetiraj3697",
    "Oudeinguene",
    "Osher160",
    "vedantpople4",
    "Pinklemonade33",
    "hi-Kartik2004",
    "jfinley6",
    "Sttormx",
    "cachoureze",
    "hugosmoreira",
    "dineshlalam15",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5533
description: "Write a program to find length of a string."
---

## Table of contents

## Write a program to find length of a string

```
Input  : abcd
Output : 4
```

---

### C

```c
// Write a C program to find length of a string

# include <stdio.h>   /*printf */
# include <stdlib.h> /*size_t */

size_t FindLengthOfString(char *string);

int main()
{
	char string[] = "abcd";

	printf("%ld\n",FindLengthOfString(string));

	return 0;
}

size_t FindLengthOfString(char *string)
{
	size_t counter = 0;

	while(*string != '\0')
	{
		++counter;
		++string;
	}

	return counter;
}
```

### C#

```csharp
// Write a C# program to find length of a string

//Find the length of the inputted string in C#

using System;
public class Exercise2
{
    public static void Main()
{
    string str; /* Declares a string of size 100 */
    int l= 0;


      Console.Write("Input the string : ");
      str = Console.ReadLine();

         foreach(char chr in str)
        {
            l += 1;

        }

   Console.Write("Length of the string is : {0}\n\n", l);
	}
}
```

### C++

```cpp
// Write a C++ program to find length of a string

// This programme returns the length of the Inputted string.

#include <bits/stdc++.h>
using namespace std;

// Function that calculates the length of the string.
int lengthOfString(string s){

    int i=0;
    // Every string ends with a null character ('\0')
    while(s[i] != '\0'){
        i++;
    }
    return i;

}

//Driver code.
int main(){

    string s;
    cout<<"Enter the string ";
    cin>>s;
    int length = lengthOfString(s); // or use the predefined function length() syntax: <string_name>.length() --> returns length of the string.
    cout<<"The length of the inputted string is "<<length<<endl;

    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to find length of a string

import 'dart:io';

void main(List<String> args) {
  print('Enter string:');
  String? input = stdin.readLineSync()!;
  print(input.length);
}
```

### F#

```fsharp
// Write a F# program to find length of a string

let findLength (str: string) =
    str.Length

// Example usage
printfn "%d" (findLength "abcd") // Output: 4
```

### Go

```go
// Write a Go program to find length of a string

package main

import "fmt"

func main() {
	var str string
	fmt.Scanln(&str)
	var length = len(str)
	fmt.Println(length)
}
```

### Haskell

```haskell
-- Write a Haskell program to find length of a string

main::IO()

main = do
  let str = "abcd"
  print(length str)
```

### Java

```java
// Write a Java program to find length of a string

import java.util.Scanner;

public class FindLengthOfAString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the String: ");
        String s = sc.nextLine();
        System.out.println("Length of the String: " +s.length());
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find length of a string

let string = "abcd";

let lengthOfTheString = string.length;

console.log(lengthOfTheString);
```

### Julia

```julia
# Write a Julia program to find length of a string

println("Enter a String")
s=readline()

n=length(s)

println("The number of characters in the string: ",n)
```

### Kotlin

```kotlin
// Write a Kotlin program to find length of a string

fun findLength(string: String): Int {
    return string.length
}

fun main() {
    while (true) {
        print("Enter a string (or enter 'exit' to quit): ")
        val inputString = readLine()!!
        if (inputString == "exit") {
            break
        }
        val length = findLength(inputString)
        println("$length")
    }
}
```

### Perl

```perl
# Write a Perl program to find length of a string

$string = "abcd";

$string_len = length($string);

print "Length of String is: $string_len";
```

### PHP

```php
// Write a PHP program to find length of a string

<?php

function findLength($str){
 return strlen($str);
}
echo findLength('abcd')

?>
```

### Python

```python
# Write a Python program to find length of a string

def lengthOfString(s: str) -> int:
    return len(list(s))
```

### R

```r
# Write a R program to find length of a string

string = 'abcd'
cat("Length of the string : ", nchar(string))
```

### Ruby

```ruby
# Write a Ruby program to find length of a string

string = "abcd"

length_of_string = string.length

puts length_of_string
```

### Rust

```rust
// Write a Rust program to find length of a string

fn main() {
    // Declare a string variable and initialize it with the input string
    let input_string = "abcd";

    // Calculate the length of the string
    let length = input_string.len();

    // Print the result
    println!("The length of the input string is: {}", length);
}
```

### Scala

```scala
// Write a Scala program to find length of a string

object Main
{
    var str = "abcd"
    def main(args: Array[String])
    {
        println("String Length : " + str.length());
    }
}
```

### Swift

```swift
// Write a Swift program to find length of a string

import Swift
import Foundation

print("Enter string: ")
var string = readLine()!

print(string.length)
```

### TypeScript

```typescript
// Write a TypeScript program to find length of a string

function findLengthOfAString(text: string): number {
  return text.length;
}

console.log("Length of given text is:", findLengthOfAString("abcd"));
```

## Similar programs

- [Print Reverse Of A String](/program/print-reverse-of-a-string)
- [Find Area Of A Cuboid](/program/find-area-of-a-cuboid)
- [Print Reverse Of A String By Recursion](/program/print-reverse-of-a-string-by-recursion)
- [Find Surface Area Of A Cuboid](/program/find-surface-area-of-a-cuboid)
- [Find Area Of A Rectangle](/program/find-area-of-a-rectangle)
- [Check Palindrome String](/program/check-palindrome-string)
- [Find Volume Of A Cuboid](/program/find-volume-of-a-cuboid)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Find Perimeter Of A Rectangle](/program/find-perimeter-of-a-rectangle)
