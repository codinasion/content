---
title: "Check Vowel"
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
    "python",
    "r",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "gh0stsniper",
    "grraghav120",
    "YaSh8202",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:06:00Z
trackId: 1761
description: "Write a program to check vowel."
---

## Table of contents

## Write a program to check vowel

Vowel check is a simple program to check whether a character is a vowel or not.

```
Input  : a
Output : Vowel
```

---

### C

```c
// Write a C program to check vowel

#include <stdio.h>

int main(){

    char ch;
    scanf("%c",&ch);
    if(ch=='a' || ch=='A' || ch=='e' || ch=='E' || ch=='i' || ch=='I' || ch=='o' || ch=='O' || ch=='u' || ch=='U') printf("Vowel");
    else printf("Not Vowel");
    return 0;
}

//Contributed by Raghav Garg
```

### C#

```csharp
// Write a C# program to check vowel

using System;

public class vowelChar
{
    static void Main(string[] args)
    {
        char ch;

        Console.WriteLine("Enter any character: ");
        ch = Convert.ToChar(Console.ReadLine());

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            Console.WriteLine(ch + " is a Vowel.");
        }
        else
        {
            Console.WriteLine(ch + " is not a Vowel.");
        }
    }
}
```

### C++

```cpp
// Write a C++ program to check vowel

#include <iostream>
using namespace std;

int main(){

    char ch;
    cin>>ch;
    if(ch=='a' || ch=='A' || ch=='e' || ch=='E' || ch=='i' || ch=='I' || ch=='o' || ch=='O' || ch=='u' || ch=='U') cout<<("Vowel")<<'\n';
    else cout<<("Not Vowel")<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to check vowel

package main

import "fmt"

func main() {
	var input string
	fmt.Printf("Enter Letter: ")
	fmt.Scan(&input)

	if (input == "a") || (input == "e") || (input == "i") || (input == "o") || (input == "u") || (input == "A") || (input == "E") || (input == "I") || (input == "O") || (input == "U"){
		fmt.Printf("%v is a vowel\n", input)
	} else {
		fmt.Printf("%v is NOT a vowel\n", input)
	}

}
```

### Java

```java
// Write a Java program to check vowel

import java.util.Scanner;

public class CheckVowel {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String letter = scanner.nextLine().toLowerCase();
        isVowel(letter);
        scanner.close();
    }

    public static void isVowel(String letter) {
        String vowels = "aeiou";
        if (vowels.contains(letter))
            System.out.println("Vowel");
        else
            System.out.println("Not a Vowel");

    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check vowel

function checkVowels(str) {
  let isVowel = "";
  if (
    str == "a" ||
    str == "e" ||
    str == "i" ||
    str == "o" ||
    str == "u" ||
    str == "A" ||
    str == "E" ||
    str == "I" ||
    str == "O" ||
    str == "U"
  ) {
    isVowel = "Vowel";
  } else {
    isVowel = "Is not a Vowel";
  }
  return isVowel;
}

console.log(checkVowels("U"));
```

### Julia

```julia
# Write a Julia program to check vowel

function vowelOrConsonant(char)
    char = lowercase(char)
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') println("Vowel");
    else
        println("Consonant");
    end
end
vowelOrConsonant('a');
```

### Kotlin

```kotlin
// Write a Kotlin program to check vowel

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("$input is " + CheckVowel(input!!.first()))

}

private fun CheckVowel(ch: Char): String {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        return "Vowel"
    }

    return "Not Vowel"
}
```

### PHP

```php
// Write a PHP program to check vowel

<?php
	$str = readline('Enter letter: ');

  if ($str == 'a'
  || $str == 'e'
  || $str == 'i'
  || $str == 'o'
  || $str == 'u'
  || $str == 'A'
  || $str == 'E'
  || $str == 'I'
  || $str == 'O'
  || $str == 'U') {
    echo 'Vowel';
  }
  else {
    echo 'Is not a Vowel';
  }
?>
```

### Python

```python
# Write a Python program to check vowel

ch = input()
if (
    ch == "a"
    or ch == "A"
    or ch == "e"
    or ch == "E"
    or ch == "i"
    or ch == "I"
    or ch == "o"
    or ch == "O"
    or ch == "u"
    or ch == "U"
):
    print("Vowel")
else:
    print("Not Vowel")
# Contributed by Raghav Garg
```

### R

```r
# Write a R program to check vowel

checkVowel = function(char){
    if(char %in% c('a', 'e', 'i', 'o', 'u','A','E','I','O','U'))
        print("Vowel")
    else
        print("Consonant")
}

checkVowel('a')
# Output
# Vowel

checkVowel('E')
# Output
# Vowel
```

### Ruby

```ruby
# Write a Ruby program to check vowel

#Author: suryapoojary0
#date: "13-10-2022"
puts "Input a letter in uppercase or smallcase"
crux = ["a", "e" , "i", "o", "u", "A", "E", "I", "O", "U"]

num = gets.strip

if crux.include?(num) then
        puts "Vowel"
else                                                    puts "Not a Vowel"
end
```

### Scala

```scala
// Write a Scala program to check vowel

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val line = scala.io.StdIn.readChar();
	  val vowels: String = "AEIOUaeiou";
	  if(vowels.contains(line)) {
	    println("is a vowel");
	  } else {
	    println("is not a vowel")
	  }
	}
}
```

### Swift

```swift
// Write a Swift program to check vowel

import Swift
import Foundation

var given = "a"

if ((given == "a")
    || (given == "e")
    || (given == "i")
    || (given == "o")
    || (given == "u")
    || (given == "A")
    || (given == "E")
    || (given == "I")
    || (given == "O")
    || (given == "U")) {
  print("\(given) is a vowel")
} else {
  print("\(given) is not a vowel")
}
```

### TypeScript

```typescript
// Write a TypeScript program to check vowel

function checkVowels(str: string) {
  let isVowel = "";
  if (
    str == "a" ||
    str == "e" ||
    str == "i" ||
    str == "o" ||
    str == "u" ||
    str == "A" ||
    str == "E" ||
    str == "I" ||
    str == "O" ||
    str == "U"
  ) {
    isVowel = "Vowel";
  } else {
    isVowel = "Is not a Vowel";
  }
  return isVowel;
}

console.log(checkVowels("U"));
```

## Similar programs

- [Check Special Character](/program/check-special-character)
- [Check Digit](/program/check-digit)
- [Check Alphabet](/program/check-alphabet)
- [Check Consonant](/program/check-consonant)
- [Check Upper Case](/program/check-upper-case)
- [Check Lower Case](/program/check-lower-case)
- [Check Valid Date](/program/check-valid-date)
- [Check Integer Or Float](/program/check-integer-or-float)
- [Check Even Or Odd Number](/program/check-even-or-odd-number)
- [Check Prime Number](/program/check-prime-number)
