---
title: "Convert A String To An Integer"
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
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "ShounaKulkarni",
    "anandfresh",
    "harshraj8843",
    "Tushar12222",
    "RiteshK-611",
    "esivakumar18",
    "pokharel-nishan",
    "sancoLgates",
    "Deep-Chandra-Mathpal",
    "sureshsgith",
    "mrajen27",
    "avireni",
    "AryanKansagara",
    "brundabharadwaj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T16:32:28Z
trackId: 4403
description: "Write a program to convert a string to an integer."
---

## Table of contents

## Write a program to convert a string to an integer

```
Input  : "123"
Output : 123
```

---

### C

```c
// Write a C program to convert a string to an integer

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    char word[20];

    printf("Enter a string to convert into Integer  :   ");
    scanf("%s", word);

    num = atoi(word);

    printf("The Integer is  :   %i", num);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert a string to an integer

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine(Convert.ToInt16("123"));

  }
}
```

### C++

```cpp
// Write a C++ program to convert a string to an integer

#include <iostream>

using namespace std;

int string_to_integer(string str) {
	return stoi(str);
}

int main() {
	string s;
	cin >> s;
	cout << string_to_integer(s);
	return 0;
}
```

### Dart

```dart
// Write a Dart program to convert a string to an integer

import 'dart:convert';
void stringToInt(String s){
  int no = int.parse(s);
  print(no);
}

void main() {
  stringToInt("123");
}
```

### F#

```fsharp
// Write a F# program to convert a string to an integer

open System

let test = "123"
let mutable result = 0

if Int32.TryParse(test, &result) then
    printfn "%A" result
else
    fprintf stderr "Error: Not a number"
```

### Go

```go
// Write a Go program to convert a string to an integer

package main

import (
	"fmt"
	"strconv"
)

func StrtoInt(s string) int {
	//converting string to int

	num,err:=strconv.Atoi(s)

	if err!=nil{
		fmt.Println(err)
	}

	//returing number

	return num
}

func main(){
	fmt.Printf("Enter a String number:")
	var s string
	fmt.Scanf("%v",&s)
	//printing the output
	fmt.Println("After converting str to int:",StrtoInt(s))
}
```

### Java

```java
// Write a Java program to convert a string to an integer

import java.util.Scanner;
public class ConvertAStringToAnInteger {

	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		try{
		    System.out.print("Enter the string that needs to be converted to INT: ");
		    String string = sc.nextLine();
		    sc.close();
		    Integer intVal = Integer.valueOf(string);
		    System.out.print("Value converted is: " + intVal);

		}catch(Exception e){
		    System.out.println("Invalid input: " + e);
		}
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert a string to an integer

// Javascript program to convert a String to an Integer

function convertWithUnary(str) {
  // converts string representations of integers or decimals
  return +str;
}

function parseInteger(str, radix = 0) {
  // radix is an integer between 2 - 36
  return parseInt(str, radix);
}

function floor(str) {
  return Math.floor(str);
}

function round(str) {
  return Math.round(str);
}

// Examples:

console.log(convertWithUnary("2342")); // 2342
console.log(convertWithUnary("234.67")); // 234.67

console.log(Number("1234")); // 1234 - native JS Number Method
console.log(~~"1234"); // 1234 - Double Tilde - bitwise negation

console.log(parseInteger("321")); // 321
console.log(parseInteger("234.33")); // 234
console.log(parseInteger("6234sadf")); // 6234 - converts numbers in the string untill alphabets/special characters are found
console.log(parseInteger("0xD")); // 13 - converts 0xD hexadecimal-base 16 with Decimal base 10
console.log(parseInteger("0xD", 2)); // 0 - converts 0xD hexadecimal with radix 2
console.log(parseInteger("0xD", 36)); // 1201 - converts 0xD hexadecimal with radix 36
console.log(parseInteger("0xD", 42)); // NaN - returns Nan with radix out of range

console.log(floor("234.234")); // 234 // rounds down to the integer less than or equal to the given value
console.log(floor("234.999")); // 234 // rounds down to the integer less than or equal to the given value
console.log(floor("234adf.234")); // NaN // works only on string representations of numbers

console.log(round("234.234")); // 234 // rounds to the nearest integer
console.log(round("234.999")); // 235 // rounds to the nearest integer
console.log(round("234adf.234")); // NaN // works only on string representations of numbers
```

### Julia

```julia
# Write a Julia program to convert a string to an integer

println("Enter number in string: ")
str = readline()
int = parse(Int, str)
println("String to Integer: ", int)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert a string to an integer

import java.util.Scanner
fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter the string::")
    val inputString = scanner.nextLine();
    scanner.close();
    try {
        val integer = inputString.toInt();
        print("Integer value is::"+integer)
    } catch(exe:NumberFormatException) {
        print("Invalid Input")
    }
}
```

### Perl

```perl
# Write a Perl program to convert a string to an integer

$string = "123";
$num = int($string);

print "String to Integer conversion : $num\n";
```

### PHP

```php
// Write a PHP program to convert a string to an integer

<?php
	$str = (string)readline("input string of number: ");
	echo intval($str);
?>
```

### Python

```python
# Write a Python program to convert a string to an integer

n = input()
number = int(input())
print(number)
```

### R

```r
# Write a R program to convert a string to an integer

# Prompt the user for input
string_value <- readline(prompt="Enter: ")

# Convert the string to an integer
integer_value <- as.integer(string_value)

# Print the result
print(integer_value)
```

### Ruby

```ruby
# Write a Ruby program to convert a string to an integer

def stringToNumber(string)
  num = string.to_i
  num if num.to_s == string
end

puts stringToNumber '123'
```

### Scala

```scala
// Write a Scala program to convert a string to an integer

import scala.io.StdIn._;

object stringToInteger {
    def main(args:Array[String]):Unit={
        println("Enter a number in String : ");
        var n = readLine().toInt;
        println("String to Integer : "+n);
    }
}
```

### Swift

```swift
// Write a Swift program to convert a string to an integer

import Swift
import Foundation

Int("123")
// 123

Int("+123")
// 123

Int("-123")
// -123
```

### TypeScript

```typescript
// Write a TypeScript program to convert a string to an integer

const stringToInteger = (str: string): number => {
  return parseInt(str);
};

console.log(stringToInteger("123"));
```
