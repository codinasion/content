---
title: "Check Digit"
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
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "Osher160",
    "UrielOfir",
    "rksp25",
    "joao-vitor-souza",
    "gh0stsniper",
    "sarahloher",
    "aritra-tech",
    "rsk2",
    "grraghav120",
    "PoweredByCaffein",
    "Tyrell04",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2930
description: "Write a program to check digit."
---

## Table of contents

## Write a program to check digit

Check wether given character is a digit (0-9).

```
Input  : 1
Output : Digit
```

---

### C

```c
// Write a C program to check digit

#include <stdio.h> /* printf, scanf */

int IsDigit(char check_me);

int main()
{
    char check_me = 0;

    int is_good = scanf("%c",&check_me);

    if(is_good != 1)
    {
        return -1;
    }

    is_good = IsDigit(check_me);

    if(is_good)
    {
        printf("Digit\n");
    }

    else
    {
        printf("Not a digit\n");

    }

    return 0;
}

int IsDigit(char check_me)
{
    return ((check_me >= '0') && (check_me <= '9')) ? 1 : 0;
}
```

### C#

```csharp
// Write a C# program to check digit

using System;

public class CheckDigit
{
    public static void Main(string[] args)
    {
        Console.Write("Enter the character: ");
        var c = Console.ReadLine();
        var isDigit = int.TryParse(c, out var value) && (0 <= value) && (9 >= value);
        Console.WriteLine(isDigit ? "Entered character is a digit" : "Entered character is not a digit");
    }
}
```

### C++

```cpp
// Write a C++ program to check digit

#include <iostream>
using namespace std;

int main(){
    char ch;
    cin>>ch;
    if(ch>='0' && ch<='9') cout<<"Digit"<<'\n';
    else cout<<"Not Digit"<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to check digit

package main

import (
	"fmt"
	"log"
)

func main() {
	var input string
	fmt.Printf("Enter the value of your choice: ")
	fmt.Scanf("%s", &input)

	if len(input) == 0 {
		log.Println("Looks like you didn't enter anything. Please enter a digit to continue!")
		return
	}

	if len(input) > 1 {
		log.Println("Please enter only one digit!")
		return
	}

	// ASCII Values for-
	// 0-9	45-57
	for _, v := range input {
		if v >= 45 && v <= 57 {
			fmt.Println("Input is a DIGIT!")
		} else {
			fmt.Println("Input is NOT a digit!")
		}
	}

}
```

### Java

```java
// Write a Java program to check digit

import java.util.Scanner;

public class CheckDigit {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.nextLine().charAt(0);
        sc.close();

        if (ch >= '0' & ch <= '9') {
            System.out.println("Digit");
        } else {
            System.out.println("Not a Digit");

        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check digit

function isNumDigit(dig) {
  return /^[0-9]$/.test(dig) ? "Yes, digit" : "No, not a digit";
}
console.log(isNumDigit("1"));
console.log(isNumDigit("w"));
console.log(isNumDigit("6.9"));
```

### Julia

```julia
# Write a Julia program to check digit

print("Enter a number : ")
num = readline(stdin)
if tryparse(Float64, num) !== nothing
    println("Digit")
else
    println("Not a Digit")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check digit

import java.util.Scanner

fun main() {
    print("Enter input : ")
    println()
    var input = readLine()

    println("$input is a : " + CheckIsDigit(input!!))

}

private fun CheckIsDigit(str: String): String {
    val chars = str.toCharArray()
    for (x in chars) {
        if(!x.isDigit()){
            return  "not a Digit"
        }
    }

    return "Digit"
}
```

### Perl

```perl
# Write a Perl program to check digit

$x = 1;

if (length(do { no warnings "numeric"; $x & "" })){
   print "Digit\n";
} else {
   print "Not a digit\n";
}
```

### PHP

```php
// Write a PHP program to check digit

<?php
function checkDigit($digits) {
    if (ctype_digit($digits)) {
        echo "Digit\n";
    } else {
        echo "Not a digit\n";
    }
}
checkDigit('1')
?>
```

### Python

```python
# Write a Python program to check digit

# Checks if the input number
num = input("Enter a number: ")


# Solution
def checDigit(num):
    try:
        (int(num))
        return True
    except ValueError:
        return False


if checDigit(num):
    print("Digit")
else:
    print("Not Digit")
```

### Ruby

```ruby
# Write a Ruby program to check digit

#Author: suryapoojary0
#Date: "13-10-2022"

puts "Input a digit to check if it's a digit"

#check_digit function checks if the num is a digit or not a digit.

num = gets.to_i

def check_digit(num)

	unless num >= 10
		puts "Digit"
	else
		puts "Not a Digit"
	end
end

#call thr function

check_digit(num)
```

### Scala

```scala
// Write a Scala program to check digit

object checkDigit
{
    def main(args:Array[String])
    {
        val result = '1'.isDigit
        println(result)
    }
}
```

### Swift

```swift
// Write a Swift program to check digit

import Swift
import Foundation

extension String {
   var isNumeric: Bool {
       return !isEmpty && range(of: "[^0-9]", options: .regularExpression) == nil
   }
}

print("1".isNumeric) //true
print("9".isNumeric) //true
print("A".isNumeric) //false
print("a".isNumeric) //false
print("&".isNumeric) //false
```

### TypeScript

```typescript
// Write a TypeScript program to check digit

function isNumDigitTS(dig: string) {
  return /^[0-9]$/.test(dig) ? "Yes, digit" : "No, not a digit";
}
console.log(isNumDigitTS("1"));
console.log(isNumDigitTS("w"));
console.log(isNumDigitTS("6.9"));
```
