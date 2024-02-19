---
title: "Print Ascii Value Of A Character"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
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
  ]
contributors:
  [
    "lookwhoshere99",
    "ApurvaR1",
    "akshithagunupati",
    "anandfresh",
    "harshraj8843",
    "Tushar12222",
    "vedantpople4",
    "cacti23",
    "jfinley6",
    "kishoredubey",
    "joao-vitor-souza",
    "kituuu",
    "greeshma-d",
    "amitbatra31",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-15T03:48:25Z
trackId: 4137
description: "Write a program to print ascii value of a character."
---

## Table of contents

## Write a program to print ascii value of a character

ASCII value is the numeric representation of a character. For example, the ASCII value of the character 'A' is 65. The ASCII value of the character 'a' is 97. The ASCII value of the character '0' is 48. The ASCII value of the character ' ' is 32.

```
Input  : A
Output : 65
```

---

### C

```c
// Write a C program to print ascii value of a character

#include <stdio.h>
#include <setjmp.h> // For Exception Handling in C

jmp_buf savebuff;

#define TRY if (setjmp(savebuff) == 0)
#define CATCH else

// Declaring a function with exception handling
int printAscii(char c);

// Main function
int main()
{
    char ch;                         // Declaring Variable
    printf("Enter a character: \n"); // Input prompt
    scanf("%c", &ch);                // Reading input

    TRY
    {
        printf("The ASCII value of given character is %d", printAscii(ch));
    }
    CATCH
    {
        printf("ERROR!!! invalid input.\n");
    }

    return 0;
}

int printAscii(char c)
{
    int ascii = (int)c;
    if (ascii < 0 || ascii > 127)
    {
        longjmp(savebuff, 1);
    }

    return ascii;
}
```

### C#

```csharp
// Write a C# program to print ascii value of a character

using System;

public class AsciiValue
{
    public static void Main()
    {
        char c = 'A';
        int ascii = c;
        Console.Write("The ASCII value of " + c + " is: " + ascii);
    }
}
```

### C++

```cpp
// Write a C++ program to print ascii value of a character

#include <iostream>

int main() {
  std::string s;

  std:: cout << "Enter the single character: ";

  std::getline(std::cin, s);

  if(s.length() > 1) {
    std::cout << "Error: enter a single character only" << std::endl;
    return 1;
  }

  std:: cout << (int) s[0] << std:: endl;

  return 0;
}
```

### Dart

```dart
// Write a Dart program to print ascii value of a character

void convertToAscii(String c){
  int ascii = c.codeUnitAt(0);
  print(ascii);
}

void main() {
  convertToAscii("s");
}
```

### Go

```go
// Write a Go program to print ascii value of a character

package main

import "fmt"

func main() {
	var str string
	fmt.Scanf("%s", &str)
	for i := 0; i < len(str); i++ {
		fmt.Printf("%d", str[i])
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to print ascii value of a character

main :: IO ()
main = do
    putStrLn "Enter a character:"
    input <- getLine
    case input of
        [char] -> putStrLn $ "ASCII value of '" ++ [char] ++ "' is: " ++ show (asciiValue char)
        _      -> putStrLn "Invalid input. Please enter a single character."

asciiValue :: Char -> Int
asciiValue char = fromEnum char
```

### JavaScript

```javascript
// Write a JavaScript program to print ascii value of a character

function asciiValueOfCharacter(str) {
  let asciiValue = str.charCodeAt(0);
  console.log(asciiValue);
}

asciiValueOfCharacter("A");
```

### Julia

```julia
# Write a Julia program to print ascii value of a character

char = 'A'
println(" ascii value = ", Int(char))
```

### Kotlin

```kotlin
// Write a Kotlin program to print ascii value of a character

fun main() {
    print(ascii('Z'))
}
fun ascii(first: Char) = first.code
```

### Perl

```perl
# Write a Perl program to print ascii value of a character

print "Please enter a character: ";
$char = <STDIN>;
chomp $char;
print("Ascii value of " . substr($char, 0, 1) . " : " . ord($char) . "\n");
```

### PHP

```php
// Write a PHP program to print ascii value of a character

<?php

function asciiValue($str) {
   return ord($str);
}

echo asciiValue("A");

?>
```

### Python

```python
# Write a Python program to print ascii value of a character

ch = input("Enter character")
ascii_code = ord(ch)
print(ascii_code)
```

### R

```r
# Write a R program to print ascii value of a character

# Function to get ASCII value of a character
getAsciiValue <- function(char) {
  # Ensure that the input is a single character
  if (nchar(char) != 1) {
    stop("Please input a single character.")
  }

  # Convert the character to its ASCII value
  ascii_value <- as.integer(charToRaw(char))
  return(ascii_value)
}

# Test the function with the input 'A'
input_char <- "A"
ascii_value <- getAsciiValue(input_char)
print(ascii_value)
```

### Ruby

```ruby
# Write a Ruby program to print ascii value of a character

def printAsciiValueOfACharacter str
    puts str.ord
end

printAsciiValueOfACharacter "A"
```

### Scala

```scala
// Write a Scala program to print ascii value of a character

object Ascii{
    def main(args:Array[String]):Unit={
        var ch:Char='A'
        println("Character value: "+ch)
        println("ASCII value    : "+ch.toInt)
    }
}
```

### Swift

```swift
// Write a Swift program to print ascii value of a character

import Foundation

/**
 This Swift program prints the ASCII value of a given character.

 - Parameters:
   - character: The input character for which the ASCII value is to be printed.
Sample Input:
Enter a character:
A

Sample Output:
ASCII value of 'A': 65
 */
func printAsciiValue(of character: Character) {
    let asciiValue = character.asciiValue
    print("ASCII value of '\(character)': \(asciiValue ?? 0)")
}

// Main program
print("Enter a character:")
if let userInput = readLine(), let inputCharacter = userInput.first {
    printAsciiValue(of: inputCharacter)
} else {
    print("Invalid input. Please enter a valid character.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to print ascii value of a character

function asciiValueOfCharacter(str: string) {
  const asciiValue = str.charCodeAt(0);
  console.log(asciiValue);
}

asciiValueOfCharacter("A");
```

## Similar programs

- [Print Character Of An Ascii Value](/program/print-character-of-an-ascii-value)
- [Print Ascii Value Of A String](/program/print-ascii-value-of-a-string)
- [Print String Of Ascii Values](/program/print-string-of-ascii-values)
- [Check Special Character](/program/check-special-character)
- [Implement Ternary Search](/program/implement-ternary-search)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Check Digit](/program/check-digit)
- [Check Alphabet](/program/check-alphabet)
- [Check Consonant](/program/check-consonant)
