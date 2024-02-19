---
title: "Convert String To Vowelcase"
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
    "SaideepKondur",
    "rajatpandey441",
    "Shubham-2110",
    "anandfresh",
    "anejman",
    "namrata18s",
    "Shaileshalluri",
    "harshraj8843",
    "apurvagandhi",
    "RiteshK-611",
    "esivakumar18",
    "HadasBrave",
    "gbauermann",
    "Fukurokudzu",
    "cacti23",
    "ob-codes",
    "rksp25",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T17:05:57Z
trackId: 4929
description: "Write a program to convert string to vowelcase."
---

## Table of contents

## Write a program to convert string to vowelcase

Vowelcase is a style of writing in which all vowels are converted to uppercase and all consonants are converted to lowercase.

```
Input  : "hello world"
Output : "hEllO wOrld"
```

---

### C

```c
// Write a C program to convert string to vowelcase

#include <stdio.h>

int main()
{
  char mystring[30];

  printf("Please input string for conversion: ");

  scanf("%[^\n]s", &mystring);

  for (size_t i = 0; i < sizeof(mystring); i++)
  {
    if (mystring[i] >=65 && mystring[i] <=90)
    {
      mystring[i] += 32;
    }

    switch (mystring[i])
    {
    case 'a':
      mystring[i] = 'A';
      break;

    case 'e':
      mystring[i] = 'E';
      break;

    case 'i':
      mystring[i] = 'I';
      break;

    case 'o':
      mystring[i] = 'O';
      break;

    case 'u':
      mystring[i] = 'U';
      break;

    default:
      break;
    }
  }
  printf("Converted string in Vowelcase is %s", mystring);

  return 0;
}
```

### C#

```csharp
// Write a C# program to convert string to vowelcase

using System;

public class ConvertStringToVowelcase
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter a text to convert");
        var text = Console.ReadLine();
        Console.WriteLine(ConvertTextToVowelCase(text ?? ""));
        Console.ReadLine();
    }

    private static string ConvertTextToVowelCase(string text)
    {
        var result = string.Empty;

        foreach (var letter in text)
        {
            switch (letter) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    result += char.ToUpper(letter);
                    break;
                default:
                    result += char.ToLower(letter);
                    break;
            }
        }

        return result;
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to vowelcase

#include <iostream>
#include <string>

using namespace std;

int main() {
	string str;

	cout << "Enter the string:" << endl;

	getline(cin, str);

	for (char &c : str) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        c = toupper(c);
    } else if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        continue;
    } else {
        c = tolower(c);
    }
	}

	cout << "String to vowel case:\n" << str << endl;

	return 0;
}
```

### Dart

```dart
// Write a Dart program to convert string to vowelcase

import 'dart:io';

String toVowelCase(String input) {
  List<String> vowels = ['a', 'e', 'i', 'o', 'u'];

  String result = '';
  for (int i = 0; i < input.length; i++) {
    if (vowels.contains(input[i].toLowerCase())) {
      result += input[i].toUpperCase();
    } else {
      result += input[i].toLowerCase();
    }
  }

  return result;
}

void main() {
  // Take user input
  print("Enter a string:");
  String? userInput = stdin.readLineSync();

  if (userInput != null) {
    // Convert to vowel-case and print the result
    String vowelCaseString = toVowelCase(userInput);
    print("Vowel-case: $vowelCaseString");
  }
}
```

### F#

```fsharp
// Write a F# program to convert string to vowelcase

let convertToVowelCase (inputString: string) =
    let vowels = "aeiouAEIOU"

    let isVowel (c: char) = vowels.Contains(c)

    let applyVowelCase (c: char) =
        if isVowel c then System.Char.ToUpper(c) else System.Char.ToLower(c)

    let result = inputString.ToCharArray() |> Array.map applyVowelCase |> System.String

    result

// Example usage:
let input = "hello world"
let output = convertToVowelCase input
printfn "Input: %s\nOutput: %s" input output
```

### Go

```go
// Write a Go program to convert string to vowelcase

package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "hello world"

	// Convert all vowels to uppercase.
	vowels := []string{"a", "e", "i", "o", "u"}
	for _, vowel := range vowels {
		str = strings.Replace(str, vowel, strings.ToUpper(vowel), -1)
	}

	// Convert all consonants to lowercase.
	consonants := []string{"b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"}
	for _, consonant := range consonants {
		str = strings.Replace(str, consonant, strings.ToLower(consonant), -1)
	}

	fmt.Println(str)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert string to vowelcase

import Data.Char (toLower, toUpper)

vowelCase :: String -> String
vowelCase [] = [] -- base case for empty string
vowelCase (x:xs)
    | elem x "aeiouAEIOU" = toUpper x : vowelCase xs -- if vowel, convert to uppercase
    | otherwise = toLower x : vowelCase xs -- if consonant, convert to lowercase

main :: IO ()
main = do
    putStrLn "Enter a string:"
    input <- getLine
    let result = vowelCase input
    putStrLn $ "Vowel-case converted string: " ++ result
```

### Java

```java
// Write a Java program to convert string to vowelcase

public class ConvertStringToVowelcase {
  public static void main(String[] args) {
    String val = "Hello world!";
    val.toLowerCase().chars().mapToObj(c -> (char) c).forEach(c -> {
      if ("aeiou".contains(c.toString())) {
        System.out.print(Character.toUpperCase(c));
      } else {
        System.out.print(c);
      }
    });
  }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to vowelcase

const vowelCase = str => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()),
      ""
    );
};

console.log(vowelCase("hello world"));
```

### Julia

```julia
# Write a Julia program to convert string to vowelcase

println("Enter a string: ")
sub = split(lowercase(readline()), "")
vowels = SubString{String}["a","e","i","o","u"]
s = ""

for i in sub
  if i in vowels
    global s = s * uppercase(i)
  else
    global s = s * i
  end
end

println("Given string in vowelcase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to vowelcase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Vowel Case: " + ConvertStringToVowelcase(min!!.split(" ")))

}

private fun ConvertStringToVowelcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index1,case) in args.withIndex()){
        if(index1 != 0) {
            buffer.append(" ")
        }
        for((index2,ch) in case.withIndex()){
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                buffer.append(ch.uppercase())
            }else{
                buffer.append(ch.lowercase())
            }
        }
    }

    return buffer.toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to vowelcase

print "Enter a string: ";
chomp(my $str = <STDIN>);
my $result = '';
$str = lc($str);
foreach my $char (split //, $str)
{
  if ($char =~ /[aeiou]/)
  {
    $result .= uc($char);
  }
  else
  {
    $result .= lc($char);
  }}
print $result;
```

### PHP

```php
// Write a PHP program to convert string to vowelcase

<?php
	function vowelCase($str) {
	  $vowels = ['a','e','i','o','u'];
	  $res = '';
	  for($i=0; $i< strlen($str); $i++){
	    if (in_array(strtolower($str[$i]), $vowels)){
	      $res .= strtoupper($str[$i]);
	    } else {
	      $res .= strtolower($str[$i]);
	    }
	  }
	  return $res;
	}

echo vowelCase('hello world');
?>
```

### Python

```python
# Write a Python program to convert string to vowelcase

def Check_Vow(char, vowels):
    if char in vowels:
        return char.upper()
    return char.lower()


def vowelCasePy(string_):
    vowels = "AaEeIiOoUu"
    new_string = ""
    for char in string_:
        new_string += Check_Vow(char, vowels)
    return new_string
```

### R

```r
# Write a R program to convert string to vowelcase

convertToVowelcase <- function(inputString) {
  # Define a function to check if a character is a vowel
  isVowel <- function(char) {
    vowels <- c("a", "e", "i", "o", "u")
    char <- tolower(char)  # Convert character to lowercase
    return(char %in% vowels)
  }

  # Convert the string to a vector of characters
  charVector <- strsplit(inputString, NULL)[[1]]

  # Convert each character to vowelcase
  result <- sapply(charVector, function(char) {
    if (isVowel(char)) {
      return(toupper(char))  # Convert vowel to uppercase
    } else {
      return(tolower(char))  # Convert consonant to lowercase
    }
  })

  # Combine the characters back into a string
  resultString <- paste(result, collapse = "")

  return(resultString)
}

# Example usage
inputString <- "Programming IS Fun"
outputString <- convertToVowelcase(inputString)
cat("Input  : ", inputString, "\n")
cat("Output : ", outputString, "\n")
```

### Ruby

```ruby
# Write a Ruby program to convert string to vowelcase

module Vowelcase

  VOWELS = %w[a e i o u]

  def self.vowel(string)
    result = ""
    string.chars { |c| VOWELS.include?(c) ? result += c.upcase : result += c.downcase }
    result
  end
end

puts Vowelcase.vowel("hello world") # => hEllO wOrld
```

### Rust

```rust
// Write a Rust program to convert string to vowelcase

fn to_vowel_case(input: &str) -> String {
    let mut result = String::new();

    for c in input.chars() {
        match c.to_lowercase().next().unwrap() {
            'a' | 'e' | 'i' | 'o' | 'u' => result.push(c.to_uppercase().next().unwrap()),
            _ => result.push(c.to_lowercase().next().unwrap()),
        }
    }

    result
}

fn main() {
    let input1 = "hello world";
    let output1 = to_vowel_case(input1);
    println!("Input: {}\nOutput: {}\n", input1, output1);

    let input2 = "Programming IS Fun";
    let output2 = to_vowel_case(input2);
    println!("Input: {}\nOutput: {}\n", input2, output2);

    let input3 = "Rust Language";
    let output3 = to_vowel_case(input3);
    println!("Input: {}\nOutput: {}\n", input3, output3);
}
```

### Swift

```swift
// Write a Swift program to convert string to vowelcase

func convertToVowelCase(_ input: String) -> String {
    let vowels: Set<Character> = ["a", "e", "i", "o", "u"]

    let result = input.map { char -> Character in
        if vowels.contains(char.lowercased().first ?? Character("")) {
            return char.uppercased().first ?? char
        } else {
            return char.lowercased().first ?? char
        }
    }

    return String(result)
}

// Example usage
let inputString = "hello world"
let result = convertToVowelCase(inputString)
//print(inputString)
print("Input: \(inputString)")
print("Output: \(result)")
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to vowelcase

const vowelCase = (str: string): string => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()),
      ""
    );
};

console.log(vowelCase("hello world"));
```

## Similar programs

- [Convert String To Consonantcase](/program/convert-string-to-consonantcase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Reversecase](/program/convert-string-to-reversecase)
- [Convert String To Alternatingcase](/program/convert-string-to-alternatingcase)
- [Print Hello World](/program/print-hello-world)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Kebabcase](/program/convert-string-to-kebabcase)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
