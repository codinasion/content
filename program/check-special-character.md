---
title: "Check Special Character"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "swift",
    "typescript",
    "scala",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "0ME9A",
    "joao-vitor-souza",
    "Marsh-sudo",
    "prajwalprogrammer",
    "Suraj-Kumar-07",
    "vedang-eng",
    "PoweredByCaffein",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-09-01T12:41:39Z
trackId: 2961
description: "Write a program to check special character."
---

## Table of contents

## Write a program to check special character

Check if given character is a special character (not a letter or a number).

```
Input  : @
Output : Special Character
```

---

### C

```c
// Write a C program to check special character

#include <stdio.h>

void charCheck(char ch){
	if ( !(((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122))) && !(ch >= 48 && ch <= 57)  )
        printf("Special Character");
    else
        printf("Not a Special Character");
}

// Driver Code
int main()
{
    char ch;
    scanf("%c", &ch);
	charCheck(ch);
	return 0;
}
```

### C#

```csharp
// Write a C# program to check special character

using System;
using System.Text.RegularExpressions;
class SpecialCharacters{

public static void onlySpecialchars(String str)
{
String regex = "[^a-zA-Z0-9]+";

Regex rgex = new Regex(regex);

if (str == null)
{
	Console.WriteLine("Not a Special Character");
	return;
}

MatchCollection matchedAuthors = rgex.Matches(str);

if (matchedAuthors.Count != 0)
	Console.WriteLine("Special Character");
else
	Console.WriteLine("Not a Special Character");
}

public static void Main(String []args)
{

String str = "@";

onlySpecialchars(str);
}
}
```

### C++

```cpp
// Write a C++ program to check special character

#include <iostream>
using namespace std;

void charCheck(char input_char){
	if ( !(((input_char >= 65 && input_char <= 90) || (input_char >= 97 && input_char <= 122))) && !(input_char >= 48 && input_char <= 57)  )
		cout << "Special Character ";
    else
        cout<<"Not A Special Character";
}

// Driver Code
int main()
{
	char input;
    cin>>input;
	charCheck(input);
	return 0;
}
```

### Java

```java
// Write a Java program to check special character

import java.util.*;

public class SpecialChar {

    public static void main(String[] args) {

        String specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}";

        System.out.println("Enter the Character : ");
        Scanner scanner = new Scanner(System.in);

        char c = scanner.next().charAt(0);
        if (specialCharacters.contains(Character.toString(c))) {

            System.out.println("Special character");
        } else {
            System.out.println("Not a Special character");

        }

    }

}
```

### JavaScript

```javascript
// Write a JavaScript program to check special character

// function to check for special character
function checkSpecialCharacter(char) {
  const reg = /[^a-zA-Z0-9]/g;
  return reg.test(char);
}

const callFun = checkSpecialCharacter("*");
console.log(callFun);
```

### Kotlin

```kotlin
// Write a Kotlin program to check special character

package com.includehelp.basic

import java.util.*


fun main(args: Array<String>) {

    val scanner = Scanner(System.`in`)

    //Input Character
    print("Enter Character : ")
    val char = scanner.next()[0]

    when {
        char.isDigit() ->
        char.isLetter() ->
        else -> println("Special Character")
    }
}
```

### Perl

```perl
# Write a Perl program to check special character

print "Please enter a character: ";
my $char = <STDIN>;
chomp $char;

if ($char =~ /[^a-zA-Z0-9]/) {
    print "Special Character\n";
} else {
    print "Not a Special Character\n";
}
```

### PHP

```php
// Write a PHP program to check special character

<?php
  $string = readLine("Enter String: ");
  if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $string)) {
    echo "one or more 'special characters' found";
  } else {
    echo "no 'special characters' found";
  }
?>
```

### Python

```python
# Write a Python program to check special character

import re


# function to check for special character
def run(string):
    regex = re.compile("[@_!#$%^&*()<>?/\|}{~:]")
    if regex.search(string) == None:
        print("Not a special character found!")
    else:
        print("This is a special character")


# driver code
if __name__ == "__main__":
    user = input("Input:")
    run(user)
```

### Scala

```scala
// Write a Scala program to check special character

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val string = scala.io.StdIn.readLine();
	  if(string.matches("^[a-zA-Z0-9]*$")){
	    println("String does not contain Special Charaters");
	  } else {
	    println("String contains Special Charaters");
	  }
	}
}
```

### Swift

```swift
// Write a Swift program to check special character

import Swift
import Foundation

let characterset = CharacterSet(charactersIn:
   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
)
let givenCharacter = "@"

if givenCharacter.rangeOfCharacter(from: characterset.inverted) != nil {
   print("Special Character")
} else {
  print("Not a Special Character")
}
```

### TypeScript

```typescript
// Write a TypeScript program to check special character

function checkSpecialCharacter(str: string) {
  let isSpecialCharacter = "false";
  const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (format.test(str)) {
    isSpecialCharacter = "true";
  } else {
    isSpecialCharacter = "false";
  }

  console.log(isSpecialCharacter);
}

checkSpecialCharacter(">");
```
