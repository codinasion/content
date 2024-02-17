---
title: "Reverse Words In A String"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "scala",
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "itskarelleh",
    "harshraj8843",
    "mktana",
    "Parvezkhan0",
    "SapirKro",
    "fdlpm",
    "andysama79",
    "hamzambo",
    "mukulbindal",
    "andrysatko",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-11T16:25:46Z
trackId: 4997
description: "Write a program to reverse words in a string."
---

## Write a program to reverse words in a string

```
Input  : "Hello World"
Output : "World Hello"
```

---

```c
// Write a C program to reverse words in a string

#include <stdio.h>
#include <string.h>

void reverseWords(char *str) {
    int start = 0;
    int end = strlen(str) - 1;

    // Reverse the whole string
    while (start < end) {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }

    // Reverse individual words
    start = 0;
    while (str[start] != '\0') {
        // Skip spaces
        while (str[start] == ' ') {
            start++;
        }

        // Find the end of the current word
        end = start;
        while (str[end] != ' ' && str[end] != '\0') {
            end++;
        }

        // Reverse the current word
        int wordStart = start;
        int wordEnd = end - 1;
        while (wordStart < wordEnd) {
            char temp = str[wordStart];
            str[wordStart] = str[wordEnd];
            str[wordEnd] = temp;
            wordStart++;
            wordEnd--;
        }

        // Move to the next word
        start = end;
    }
}

int main() {
    char input[] = "Hello World";

    printf("Input : %s\n", input);

    reverseWords(input);

    printf("Output: %s\n", input);

    return 0;
}
```

```csharp
// Write a C# program to reverse words in a string

using System;

class Program
{
    static string ReverseWords(string inputString)
    {
        // Split the input string into an array of words
        string[] wordsArray = inputString.Split(' ');

        // Reverse the array of words
        Array.Reverse(wordsArray);

        // Join the reversed array of words to form the reversed string
        string reversedString = string.Join(" ", wordsArray);

        return reversedString;
    }

    static void Main()
    {
        string inputString = "Hello World";
        string output = ReverseWords(inputString);

        Console.WriteLine($"Input : \"{inputString}\"");
        Console.WriteLine($"Output: \"{output}\"");
    }
}
```

```cpp
// Write a C++ program to reverse words in a string

#include <iostream>
#include <sstream>
#include <vector>

void reverseWords(std::string& str) {
    std::istringstream iss(str);
    std::vector<std::string> words;

    // Split the string into words
    while (iss >> str) {
        words.push_back(str);
    }

    // Reverse the order of words
    std::reverse(words.begin(), words.end());

    // Construct the reversed string
    str.clear();
    for (const auto& word : words) {
        str += word + " ";
    }

    // Remove the trailing space
    if (!str.empty()) {
        str.pop_back();
    }
}

int main() {
    std::string input;

    // Input string
    std::cout << "Enter a string: ";
    std::getline(std::cin, input);

    // Reverse the words in the string
    reverseWords(input);

    // Output the reversed string
    std::cout << "Reversed string: " << input << std::endl;

    return 0;
}
```

```dart
// Write a Dart program to reverse words in a string

void main() {
  String input = "Hello World";

  // Reverse the words in the string
  String reversedString = reverseWords(input);

  // Output the reversed string
  print("Reversed string: $reversedString");
}

String reverseWords(String input) {
  List<String> words = input.split(" ");

  // Reverse the order of words
  List<String> reversedWords = List.from(words.reversed);

  // Construct the reversed string
  String reversedString = reversedWords.join(" ");

  return reversedString;
}
```

```fsharp
// Write a F# program to reverse words in a string

let reverseWords (input: string) =
    let words = input.Split([|' '|], System.StringSplitOptions.RemoveEmptyEntries)
    let reversed = System.String.Join(" ", words |> Array.rev)
    reversed

// Example usage:
let inputString = "Hello World"
let outputString = reverseWords inputString
printfn "Input:  %s" inputString
printfn "Output: %s" outputString

//This program defines a function reverseWords that takes a string as input,
//splits it into words, reverses the array of words,
//and then joins them back into a string with spaces.
//The example usage demonstrates reversing the words in the input string "Hello World".
```

```go
// Write a Go program to reverse words in a string

package main

import (
	"fmt"
	"strings"
)

// reverseWords reverses the order of words in a given string.
func reverseWords(input string) string {
	// Split the input string into words.
	words := strings.Fields(input)

	// Reverse the order of words using a two-pointer approach.
	for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
		words[i], words[j] = words[j], words[i]
	}

	// Join the reversed words into a string and return.
	return strings.Join(words, " ")
}

func main() {
	// Example usage of reverseWords function.
	inputString := "Hello World"
	reversedResult := reverseWords(inputString)
	fmt.Println(reversedResult)
}
```

```java
// Write a Java program to reverse words in a string

class ReverseWordsInAString {

	/**
	 * This program reverses the words in a string<br><br>
	 *
	 * <b>input:</b> The input String for which the words to be reversed<br><br>
	 *
	 * <b>Returns a new String</b><br><br>
	 *
	 * <b>Example:</b><br><br>
	 * input: hello world<br><br>
	 * output: world hello<br><br>
	 * */
	public static String reverseWordsInAString(String input) {

		// Check if the string is null or blank
		if (input == null || input.isBlank()) {
			return input;
		}

		// Split the string to get the words
		String[] words = input.split(" ");

		// Join the string back in reverse order
		StringBuilder result = new StringBuilder();
		for (int i = words.length - 1; i >= 0; --i) {
			result.append(words[i] + " ");
		}

		// Return the result
		return result.toString().trim();
	}

	public static void main(String[] args) {
		System.out.println(reverseWordsInAString("Hello World"));
	}

}
```

```javascript
// Write a JavaScript program to reverse words in a string

//Write a JavaScript program to reverse words in a string #5007
//Input  : "Hello World"
//Output : "World Hello"

const string = "Hello World";

function reverseString(str) {
  const reversedWords = str.split(" ").reverse().join(" ");
  return reversedWords;
}

console.log("String reverse:", reverseString(string));
```

```kotlin
// Write a Kotlin program to reverse words in a string

fun main() {
    println(reverseWordsInAString("Hello World"))
}

/**
* reversed the words in a string
* Input  : "Hello World"
* Output : "World Hello"
* @param words the string to be reversed
 */
fun reverseWordsInAString(words : String) : String {
    return words.split(" ").reversed().joinToString(" ")
}
```

```perl
# Write a Perl program to reverse words in a string

#!/usr/bin/perl

use strict;
use warnings;

sub reverse_words {
    my ($input_string) = @_;

    # Split the input string into words
    my @words = split /\s+/, $input_string;

    # Reverse the order of words
    my $output_string = join ' ', reverse @words;

    return $output_string;
}

# Example usage
my $input_string = "Hello World";
my $output_string = reverse_words($input_string);

print "Input  : \"$input_string\"\n";
print "Output : \"$output_string\"\n";
```

```php
// Write a PHP program to reverse words in a string

<?php

#PHP program to reverse words in a string

# Check if a string to reverse was passed in, if not, show error and usage message.
if(isset($argv[1])){

	$string = $argv[1]; # Grab string to be reversed from input argument

	$words = preg_split('/\s+/', $string); # Split string at whitespaces, resulting in an array of words

	$words = array_reverse($words); # Reverse the words array

	$reversed_string = join(" ", $words); # Join words array back to a single string using a space between words

	echo $reversed_string;  # Output the resulting reversed string.
	exit(0); # Successful exit
}

else{

	echo "No string was provided.\r\nUsage: php ", __FILE__, " \"String to reverse\"\r\n";
	exit(1); # Error exit
}

?>
```

```python
# Write a Python program to reverse words in a string

def reverse_words_in_string(string:str) -> str:
    '''Returns the reverse of words in string
       input: str
    '''

    # If string is blank, return
    if not string:
        return string

    # Split the words
    words = string.split(" ")
    # Reverse and join the words
    return " ".join(reversed(words))

if __name__ == "__main__":
    result = reverse_words_in_string("hello world")
    print(result)
```

```scala
// Write a Scala program to reverse words in a string

object ReverseWordsInAString {
  def main(args: Array[String]): Unit =  {
    val inputString = scala.io.StdIn.readLine()
    val reversedWords = reverseWords(inputString)
    println(reversedWords)
  }

  def reverseWords(input: String): String = {
    val words = input.split(" ")
    val reversedWords = words.reverse
    val result = reversedWords.mkString(" ")
    result
  }
}
```

```typescript
// Write a TypeScript program to reverse words in a string

function reverseWords(input: string): string {
  const words = input.split(" ");
  const reversedWords = words.reverse().join(" ");
  return reversedWords;
}

const input = "Hello World";
console.log(reverseWords(input));
```
