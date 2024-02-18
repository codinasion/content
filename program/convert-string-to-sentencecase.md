---
title: "Convert String To Sentencecase"
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
    "rust",
  ]
contributors:
  [
    "shaurya-clemson",
    "akshithagunupati",
    "Shaileshalluri",
    "harshraj8843",
    "bhushanmarathe",
    "ariporat",
    "vedantpople4",
    "apurvagandhi",
    "RiteshK-611",
    "jfinley6",
    "Sri01729",
    "Osher160",
    "anandfresh",
    "rksp25",
    "Pinklemonade33",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-02T16:59:23Z
trackId: 5055
description: "Write a program to convert string to sentencecase."
---

## Table of contents

## Write a program to convert string to sentencecase

Sentence case is a style of writing in which the first letter of the first word is capitalized, while all other letters are in lowercase. However, there are some exceptions to this rule. For example, proper nouns (such as names of people, places, organizations, etc.) and acronyms (such as NASA, FBI, etc.) should always be capitalized, regardless of their position in the sentence. The first word after a colon or a semicolon may also be capitalized.

Here is an example of a sentence in sentence case: "**`The quick brown fox jumps over the lazy dog.`**" In this sentence, only the first letter of the first word is capitalized, while all other letters are in lowercase.

However, if the sentence contains proper nouns or acronyms, they should also be capitalized. For example: "**`John and Jane went to New York to visit the Museum of Modern Art (MoMA).`**" In this sentence, the first letter of the first word, as well as the proper nouns "John", "Jane", "New York", and "Museum of Modern Art", and the acronym "MoMA" are capitalized.

Here are some examples of converting strings to sentence cases:

Example 1:

```
Input  : "john and jane went to new york to visit the museum of modern art (moma)"
Output : "John and Jane went to New York to visit the Museum of Modern Art (MoMA)"
```

Example 2:

```
Input  : "the united nations (un) is an international organization"
Output : "The United Nations (UN) is an international organization"
```

Example 3:

```
Input  : "the cat is sleeping; however, the dog is awake"
Output : "The cat is sleeping; however, the dog is awake"
```

---

### C

```c
// Write a C program to convert string to sentencecase

#define _POSIX_C_SOURCE 200809L

#include <stdio.h>    /* printf, getline */
#include <stdlib.h>  /* free       */
#include <string.h> /* strlen */

const char *ConvertStringToSentenceCase(char *);

int main()
{
    size_t size = 100;
    char *str = NULL;

    /* user need to free the ptr given, will be malloced in case it's points to NULL */
    getline(&str,&size,stdin);

    printf("%s \n",ConvertStringToSentenceCase(str));

    free(str);

    return 0;
}

const char *ConvertStringToSentenceCase(char *str)
{
    char IsNewSentence[3] = {'.','?','!'};
    int is_new_sentence = 1;

    size_t i = 0;
    size_t j = 0;

    for(i = 0; i < strlen(str); ++i)
    {
        if((str[i] >= 'a') && (str[i] <= 'z') && (is_new_sentence))
        {
            str[i] -= 32;
            is_new_sentence = 0;
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (!is_new_sentence))
        {
            str[i] += 32;
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (is_new_sentence))
        {
            is_new_sentence = 1;
        }

        else
        {
            for(j = 0; j < 3; ++j)
            {
                if(IsNewSentence[j] == str[i])
                {
                    is_new_sentence = 1;
                }
            }
        }
    }

    return str;
}
```

### C#

```csharp
// Write a C# program to convert string to sentencecase

using System;


namespace ConvertStringToSentencecase
{
	internal class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Enter a sentence");
			string sentence = Console.ReadLine();
			Console.WriteLine(ToSentenceCase(sentence));
			Console.ReadLine();
		}

		static string ToSentenceCase(string sentence)
		{
			if (string.IsNullOrEmpty(sentence))
			{
				return sentence;
			}

			sentence = char.ToUpper(sentence[0]) + sentence.Substring(1);

			return sentence;
		}
	}
}
```

### C++

```cpp
// Write a C++ program to convert string to sentencecase

#include <iostream>

std::string& ConvertStringToSentencecase(std::string& str);

int main()
{
    std::string str;
    std::getline(std::cin,str);

    std::cout << ConvertStringToSentencecase(str) << '\n';

    return 0;
}

std::string& ConvertStringToSentencecase(std::string& str)
{
    char IsNewSentence[3] = {'.','?','!'};
    bool is_new_sentence = true;


    for(size_t i = 0; i < str.size(); ++i)
    {
        // checks if str[i] is the beginning of new sentence && not UpperCase.

        if((str[i] >= 'a') && (str[i] <= 'z') && (is_new_sentence))
        {
            str[i] -= 32;
            is_new_sentence = false;
        }

        // checks if str[i] is not the beginning of new sentence && UpperCase.

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (!is_new_sentence))
        {
            str[i] += 32;
        }

        // checks if str[i] is the beginning of new sentence && UpperCase.
        //if so, need to update the is_new_sentence for the next iteration.

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (is_new_sentence))
        {
            is_new_sentence = false;
        }

        //checks if str[i] is a char before new sentence/end of the string.

        else
        {
            for(size_t j = 0; j < 3; ++j)
            {
                if(IsNewSentence[j] == str[i])
                {
                    is_new_sentence = true;
                }
            }
        }
    }

    return str;
}
```

### Dart

```dart
// Write a Dart program to convert string to sentencecase

String convertToSentenceCase(String input, List<String> fixedWords) {
  // Converting the input to lowercase
  input = input.toLowerCase();

  // Capitalizing the first character
  if (input.isNotEmpty) {
    input = input[0].toUpperCase() + input.substring(1);
  }
  else {
    return("Empty string");
  }

  // Replacing lower case fixed words with upper case
  for (String fixedWord in fixedWords) {
    String fixedWordLowerCase = fixedWord.toLowerCase();
    if (input.contains(fixedWordLowerCase)) {
      input = input.replaceAll(fixedWordLowerCase, fixedWord);
    }
  }

  // Handling special cases for colon, semicolon, and full stop
  for (int i = 0; i < input.length - 1; i++) {
    if (input[i] == ':' || input[i] == ';' || input[i] == '.') {
      int j = i + 1;
      // Skip any whitespace
      while (j < input.length && input[j] == ' ') {
        j++;
      }
      if (j < input.length) {
        input = input.substring(0, j) + input[j].toUpperCase() + input.substring(j + 1);
      }
    }
  }

  return input;
}

void main() {
  String text1 = "john and jane went to new york to visit the museum of modern art (moma)";
  List<String> fixedWords1 = ["John", "Jane", "New York", "Museum of Modern Art", "MoMA"];
  print(convertToSentenceCase(text1, fixedWords1));

  String text2 = "the united nations (un) is an international organization";
  List<String> fixedWords2 = ["United Nations", "UN"];
  print(convertToSentenceCase(text2, fixedWords2));

  String text3 = "the cat is sleeping; however, the dog is awake";
  List<String> fixedWords3 = [];
  print(convertToSentenceCase(text3, fixedWords3));
}
```

### F#

```fsharp
// Write a F# program to convert string to sentencecase

open System

let toSentenceCase (input: string) =
    match input.Split([|' '|], StringSplitOptions.RemoveEmptyEntries) with
    | [||] -> ""  // Handle empty string case
    | [|head; tail|] ->
        String.concat " " [head.[0].ToString().ToUpper() + head.Substring(1); tail]
    | _ -> input  // Handle cases with more than one word

// Example usage
let inputString = "hello world"
let result = toSentenceCase inputString

printfn "Input: %s" inputString
printfn "Output: %s" result
```

### Go

```go
// Write a Go program to convert string to sentencecase

package main

import (
	"fmt"
	"strings"
	"unicode"
)

func sentenceCase(str string) string {
	newString := "" // return value
	cap := false    // letter capitalized if true
	punc := "!?."   // listed punctuation
	for index, x := range str {
		if index == 0 {
			if unicode.IsLower(x) {
				newString += string(unicode.ToUpper(x))
			} else if x == ' ' || strings.Contains(string(x), punc) {
				newString += string(x)
				cap = true
			} else {
				newString += string(x)
			}
		} else {
			if strings.Contains(string(x), punc) {
				newString += string(x)
				cap = true
			} else {
				if cap && unicode.IsLower(x) {
					newString += string(unicode.ToUpper(x))
					cap = false
				} else {
					newString += string(x)
				}
			}
		}
	}
	return newString
}

func main() {
	var str string
	str = "hello world"
	fmt.Println(sentenceCase(str))
}
```

### Java

```java
// Write a Java program to convert string to sentencecase

import java.util.Scanner;


public class ConvertStringToSentencecase {

    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        System.out.println("Enter the String");
        String inputString = scnr.nextLine();

        String s1 = inputString.substring(0, 1).toUpperCase();
        String s2 = inputString.substring(1);
        String sentence = inputString.substring(0, 1).toUpperCase() + inputString.substring(1);
        System.out.println(sentence);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to sentencecase

function sentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const result = sentenceCase("hello world");
console.log(result);
```

### Julia

```julia
# Write a Julia program to convert string to sentencecase

println("Enter s string: ")
sub = split(lowercase(readline()), " ")
n = length(sub)
s = titlecase(sub[1])

for i in 2:n
  global s = s * " " * sub[i]
end

println("Given string in sentencecase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to sentencecase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Sentence Case: " + ConvertStringToSentencecase(min!!.split(" ")))

}

private fun ConvertStringToSentencecase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,case) in args.withIndex()){
        if(index == 0) {
            buffer.append(case.get(0).uppercase()).append(case.subSequence(1,case.length))
        } else {
            buffer.append(" ").append(case)
        }
    }

    return buffer.toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to sentencecase

#!/usr/bin/perl

use strict;
use warnings;

sub sentence_case_with_replacement {
    my ($input, @fixed_words) = @_;
    my @sentences = split(/(\.|!|\?)\s+/, $input); # Split the input into sentences

    foreach my $sentence (@sentences) {
        $sentence =~ s/^\s+//; # Remove leading whitespace
        $sentence =~ s/\s+$//; # Remove trailing whitespace
        $sentence = ucfirst(lc($sentence)); # Convert to sentence case

        # Perform word replacements
        foreach my $word (@fixed_words) {
            $sentence =~ s/\b\Q$word\E\b/$word/gi; # Replace case-insensitively
        }
    }

    my $output = join(' ', @sentences); # Recombine the sentences with spaces

    return $output;
}

# Example
my $input_string1 = "john and jane went to new york to visit the museum of modern art (moma).";
my @fixed_words1 = ("John", "Jane","New York", "Museum of Modern Art", "MoMA");

my $output_string1 = sentence_case_with_replacement($input_string1, @fixed_words1);

print $output_string1 . "\n";

my $input_string2 = "the united nations (un) is an international organization.";
my @fixed_words2 = ("The United Nations", "UN");

my $output_string2 = sentence_case_with_replacement($input_string2, @fixed_words2);

print $output_string2 . "\n";

my $input_string3 = "the cat is sleeping; however, the dog is awake.";
my @fixed_words3 = ();

my $output_string3 = sentence_case_with_replacement($input_string3, @fixed_words3);

print $output_string3 . "\n";
```

### PHP

```php
// Write a PHP program to convert string to sentencecase

<?php

function sentenceCase($str) {
    return ucfirst($str);
}

echo sentenceCase('hello world');

?>
```

### Python

```python
# Write a Python program to convert string to sentencecase

# Returns a string with the first letter capitalized in a sentence
# The first letter of the string is capitalized if nothing but spaces or the listed punctuation is found
# Every first letter after the listed punctuation is also capitalized


def sentence_case(string: str):
    new_string = str()  # return value
    cap = bool()  # letter capitalized if true
    punc = ["!", "?", "."]  # listed punctuation
    for index, x in enumerate(string):
        if index == 0:
            if x.islower():
                new_string += x.upper()
            elif x in punc or x == " ":
                new_string += x
                cap = True
            else:
                new_string += x
        else:
            if x in punc:
                new_string += x
                cap = True
            else:
                if cap and x.islower():
                    new_string += x.upper()
                    cap = False
                else:
                    new_string += x

    return new_string


print(sentence_case(input()))
```

### Ruby

```ruby
# Write a Ruby program to convert string to sentencecase

def convertStringToSentenceCase string
    string.capitalize
end

puts convertStringToSentenceCase "hello world"
```

### Rust

```rust
// Write a Rust program to convert string to sentencecase

fn main(){
    let input = "hello world!";
    let mut ans = String::with_capacity(input.len());
    let mut next = true;
    for i in input.chars(){
        if next{
            ans.push(i.to_ascii_uppercase());
            next = false;
        } else {
            ans.push(i.to_ascii_lowercase());
        }
    }
    println!("{}", ans);
}
```

### Scala

```scala
// Write a Scala program to convert string to sentencecase

object SentenceCaseConverter {
  def main(args: Array[String]): Unit = {
    println("Enter a string:")
    val input = scala.io.StdIn.readLine()

    val sentenceCase = convertToSentenceCase(input)
    println("Sentence Case: " + sentenceCase)
  }

  def convertToSentenceCase(input: String): String = {
    if (input.isEmpty) {
      return ""
    }

    val words = input.toLowerCase.split(" ")
    if (words.nonEmpty) {
      words(0) = words(0).capitalize
    }

    words.mkString(" ")
  }
}
```

### Swift

```swift
// Write a Swift program to convert string to sentencecase

import Foundation

/**
 This Swift program converts a given string to sentence case, where only the first letter of the first word is capitalized.

 - Parameters:
   - input: The input string to be converted to sentence case.
 - Returns: The string in sentence case.

Sample Input:
Enter a string:
hello world

Sample Output:
String in Sentence Case: Hello world

 */
func stringToSentenceCase(input: String) -> String {
    guard let firstLetter = input.first else {
        return input
    }

    return String(firstLetter.uppercased()) + String(input.dropFirst())
}

// Main program
print("Enter a string:")
if let userInput = readLine() {
    let sentenceCaseResult = stringToSentenceCase(input: userInput)
    print("String in Sentence Case: \(sentenceCaseResult)")
} else {
    print("Invalid input. Please enter a valid string.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to sentencecase

const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(sentenceCase("hello world"));
```
