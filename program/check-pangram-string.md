---
title: "Check Pangram String"
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
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "Osher160",
    "rksp25",
    "joao-vitor-souza",
    "amoghrajesh",
    "MufaddalHakim",
    "Denice-S",
    "rakibul-islam-raju",
    "Jordan6794",
    "metaloozee",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-05T18:14:51Z
trackId: 1260
description: "Write a program to check pangram string."
---

## Table of contents

## Write a program to check pangram string

A pangram is a sentence containing every letter in the English Alphabet.

```
Input  : The quick brown fox jumps over the lazy dog
Output : Pangram sentence
```

---

### C

```c
// Write a C program to check pangram string

#include <stdio.h> /*printf, scanf */
#include <string.h> /* strlen */
#include <ctype.h> /* tolower */

int isPangram(char *str);

int main()
{
    /* assuming string won't be greater then 100 chars */
    char str[100] = {0};

    fgets(str,100,stdin);

    if(isPangram(str))
    {
        printf("Pangram sentence\n");
    }

    else
    {
        printf("Not a pangram\n");
    }

    return 0;
}

int isPangram(char *str)
{
    char abc[26] = {0};
    size_t i = 0;
    int idx = 0;

    for(i = 0; i < strlen(str); ++i)
    {
        idx = tolower(str[i]) - 'a';

        if(idx >= 0 && idx <= 25)
        {
            ++abc[idx];
        }
    }

    for(i = 0; i < 26; ++i)
    {
        if(abc[i] == 0)
        {
            /* false */
            return 0;
        }
    }

    /* true */
    return 1;
}
```

### C#

```csharp
// Write a C# program to check pangram string

using System;
class Pangram {
    public static bool checkPangram(string str)
    {
        bool[] mark = new bool[26];
        int index = 0;

        for (int i = 0; i < str.Length; i++) {
            if ('A' <= str[i] && str[i] <= 'Z')
                index = str[i] - 'A';
            else if ('a' <= str[i] && str[i] <= 'z')
                index = str[i] - 'a';
            else
                continue;

            mark[index] = true;
        }

        for (int i = 0; i <= 25; i++)
            if (mark[i] == false)
                return (false);
        return (true);
    }

    public static void Main()
    {
        string str = "The quick brown fox jumps over the lazy dog";

        if (checkPangram(str) == true)
            Console.WriteLine(str + " \n is a pangram.");
        else
            Console.WriteLine(str + " \n is not a pangram.");
    }
}
```

### C++

```cpp
// Write a C++ program to check pangram string

#include <iostream>

using namespace std;

bool IsPangram(string str);

int main()
{
    string str;
    cout << "Input  : ";
    getline(cin,str);

    cout << "Output : ";
    if(IsPangram(str) == 1) {
        cout << "Pangram sentence";
    } else {
        cout << "Not a Pangram sentence";
    }

    return 0;
}

bool IsPangram(string str)
{
    int arr[26] = {0};

    for(size_t i = 0; i < str.size(); ++i) {
        if((tolower(str[i]) >= 'a') && (tolower(str[i]) <= 'z')) {
            ++arr[tolower(str[i]) - 'a'];
        }
    }

    for(size_t i = 0; i < 26; ++i) {
        if(!arr[i]) {
            return false;
        }
    }

    return true;
}
```

### Dart

```dart
// Write a Dart program to check pangram string

bool isPangram(String text){
  Set<String> letters = "abcdefghijklmnopqrstuvwxyz".split("").toSet();
  text.toLowerCase().split("").forEach((l) => letters.remove(l));
  return letters.length == 0;
}

void main() {
  print(isPangram("The quick brown fox jumps over the lazy dog"));
}
```

### Go

```go
// Write a Go program to check pangram string

package main

import "fmt"

func checkIfPangram(s string) bool {
	if len(s) < 26 {
		return false
	}
	var data = make(map[rune]bool)
	for _, i := range s {
		data[i] = true
	}
	return len(data) == 26
}

func main() {
	var s string
	fmt.Scanln(&s)

	isPangram := checkIfPangram(s)

	if isPangram {
		fmt.Printf("%s is a pangram\n", s)
	} else {
		fmt.Printf("%s is not a pangram\n", s)
	}
}
```

### Java

```java
// Write a Java program to check pangram string

import java.util.*;

public class CheckPangramString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        boolean[] mark = new boolean[26];

        for (int i = 0; i < str.length(); i++) {
            if ('A' <= str.charAt(i) && str.charAt(i) <= 'Z') {
                mark[str.charAt(i) - 'A'] = true;
            } else if ('a' <= str.charAt(i) && str.charAt(i) <= 'z') {
                mark[str.charAt(i) - 'a'] = true;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (!mark[i]) {
                System.out.println("Not a pangram");
                sc.close();
                return;
            }
        }

        System.out.println("Pangram Sentence");
        sc.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check pangram string

function checkPangramString(string) {
  let isPangram = false;

  const lowerCasedSentence = string.toLowerCase();
  const letters = lowerCasedSentence.match(/[a-z]/g);
  const uniqueLetters = new Set(letters);

  if (uniqueLetters.size === 26) {
    isPangram = true;
  }

  if (isPangram) {
    return "Pangram sentence";
  } else {
    return "Not Pangram sentence";
  }
}
```

### Julia

```julia
# Write a Julia program to check pangram string

function ispangram(input::AbstractString)
    input = lowercase(input)
    letters = Set('a':'z')
    for ch in input
        delete!(letters, ch)
    end
    isempty(letters)
end

if ispangram("The quick brown fox jumps over the lazy dog")
  println("Pangram")
else
 println("Not a Pangram")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check pangram string

fun main() {
    print("Enter text : ")
    println()
    var input = readLine()

    try {
        println("Is Pangram = " + CheckPangramString(input!!))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun CheckPangramString(statement: String): Boolean {
    val letters = "abcdefghijklmnopqrstuvwxyz".split("")
    return statement.lowercase().split("").containsAll(letters)

}
```

### Perl

```perl
# Write a Perl program to check pangram string

$string="The quick brown fox jumps over the lazy dog";
$string = lc($string);
$string =~ s/\s*//g;
$string =~s/(.)(?=.*?\1)//g;
print $string;
print length($string);
if(length($string) == 26){
    print 'Pangram Sentence';
} else {
    print 'Not a Pangram Sentence';
}
```

### PHP

```php
// Write a PHP program to check pangram string

<?php
function isPangram($param) {

		$sentences = strtolower(trim($param));
		$letters = str_split("thequickbrownfoxjumpsoverthelazydog");

		foreach ($letters as $letter) {
			if (!strstr($sentences, $letter))
				return 'Not a Pangram sentence';
		}

		return 'Pangram sentence';
	}

echo isPangram('The quick brown fox jumps over the lazy dog');
?>
```

### Python

```python
# Write a Python program to check pangram string

import string

alphabet = set(string.ascii_lowercase)


def ispangram(str):
    return sum(1 for i in set(str) if 96 < ord(i) <= 122) == 26


string = input()
if ispangram(string) == True:
    print("Pangram sentence")
else:
    print("Not pangram sentence")
```

### Ruby

```ruby
# Write a Ruby program to check pangram string

def pangram (string)
   # downcase the string, scan it for letters of the alphabet (a-z), remove duplicates and examine the length of the returned array
   if string.downcase.scan(/[a-z]/).uniq.length == 26
     puts "Pangram sentence"
   else
     puts "Not a Pangram sentence"
   end
end
```

### Swift

```swift
// Write a Swift program to check pangram string

import Swift
import Foundation

func CheckPangram(str: String) -> Bool {
   let lowercaseString = str.lowercased()
   let alphabet = "abcdefghijklmnopqrstuvwxyz"
   for l in alphabet {
      if !lowercaseString.contains(l) {
         return false
      }
   }
   return true
}

let str1 = "The quick brown fox jumps over the lazy dog"
print("'\(str1)' is pangram?:", CheckPangram(str: str1))
```

### TypeScript

```typescript
// Write a TypeScript program to check pangram string

/**
 *
 * @param {string} string - the string to be checked
 * @returns {string} if the string is Pangram or not
 */

const checkPangramString = (string: string) => {
  string = string.toLowerCase();

  const len: number = string.length;
  const alphabets: string = "abcdefghijklmnopqrstuvwxyz";
  const aplhabetsArray: string[] = alphabets.split("");

  for (let i: number = 0; i < len; i++) {
    const elem = string[i];
    const index = aplhabetsArray.indexOf(elem);

    if (index !== -1) {
      aplhabetsArray.splice(index, 1);
    }
  }

  if (!aplhabetsArray.length === true) {
    return "Pangram sentence";
  } else {
    return "Not a pangram sentence";
  }
};

// Test Case
console.log(checkPangramString("The quick brown fox jumps over the lazy dog"));
// Returns Pangram sentence
```

## Similar programs

- [Check Alphabet](/program/check-alphabet)
- [Convert String To Sentencecase](/program/convert-string-to-sentencecase)
- [Check Palindrome String](/program/check-palindrome-string)
- [Find Length Of A String](/program/find-length-of-a-string)
- [Check Digit](/program/check-digit)
- [Check Vowel](/program/check-vowel)
- [Check Consonant](/program/check-consonant)
- [Print Reverse Of A String](/program/print-reverse-of-a-string)
- [Check Special Character](/program/check-special-character)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
