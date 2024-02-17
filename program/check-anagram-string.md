---
title: "Check Anagram String"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
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
    "anandfresh",
    "akaliacius",
    "abhisek-1221",
    "Preetiraj3697",
    "nishadmahmud",
    "andrey100f",
    "deepakkhanna18",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 6642
description: "Write a program to check anagram string."
---

## Write a program to check Anagram strings

Two strings are said to be anagrams if they make a meaningful word by rearranging or shuffling the letters of the string. In other words, we can say that two strings are anagrams if they contain the same characters but in different order.

```
Input  : pan, nap
Output : Anagram Strings
```

---

```c
// Write a C program to check anagram string

#include<stdio.h>
#include<string.h>
int SIZE = 1000;
int isAnagram(char s1[],char s2[]){
	if(strlen(s1) != strlen(s2)) return 0;
	int mp[26] = {0};
	for(int i = 0;i<strlen(s1);i++){
		mp[s1[i] - 'a']++;
		mp[s2[i] - 'a']--;
	}
	for(int i=0;i<26;i++)
		if(mp[i]!=0) return 0;

	return 1;
}
void main() {
	char s1[SIZE],s2[SIZE];
	printf("Enter string1: ");
	scanf("%s",s1);

	printf("\nEnter string2: ");
	scanf("%s",s2);

	int flag = isAnagram(s1,s2);
	if(flag == 1)
		printf("%s and %s are anagrams\n",s1,s2);
	else
		printf("%s and %s are not anagrams\n",s1,s2);

}
```

```csharp
// Write a C# program to check anagram string

using System;

public class Anagram {
   public static void Main () {
      string str1 = "pan";
      string str2 =  "nap";
      char[] ch1 = str1.ToLower().ToCharArray();
      char[] ch2 = str2.ToLower().ToCharArray();
      Array.Sort(ch1);
      Array.Sort(ch2);
      string val1 = new string(ch1);
      string val2 = new string(ch2);
      if (val1 == val2) {
         Console.WriteLine("Anagram Strings");
      } else {
         Console.WriteLine("Not an Anagram Strings");
      }
   }
}
```

```cpp
// Write a C++ program to check anagram string

#include <iostream>
#include <algorithm>
using namespace std;

// Function to check if two strings are anagrams
bool areAnagrams(string str1, string str2) {
    // If the strings have different lengths, they cannot be anagrams
    if (str1.length() != str2.length()) return false;

    // Sort both strings
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());

    // If the sorted strings are equal, they are anagrams
    return str1 == str2;
}

int main() {
    string s1, s2;

    // Take input from user for both strings
    cin>> s1 >> s2;

    // Check if the strings are anagrams and output result
    if (areAnagrams(s1, s2)) cout << "Anagram Strings" << endl;
    else cout << "Not Anagram Strings" << endl;
}
```

```dart
// Write a Dart program to check anagram string

import 'dart:io';
import 'dart:core';

void main(){
    stdout.write("Enter first string: ");
    String? str1 = stdin.readLineSync();
    stdout.write("Enter second string: ");
    String? str2 = stdin.readLineSync();
    List <String> str1_lst = str1!.split('');
    List <String> str2_lst = str2!.split('');
    str1_lst.sort();
    str2_lst.sort();
    if (str1_lst.join() == str2_lst.join()){
        print("$str1 and $str2 are anagrams.");
    }
    else{
        print("$str1 and $str2 are not anagrams.");
    }
}
```

```fsharp
// Write a F# program to check anagram string

let isAnagram (s1:string) (s2:string) =
    let sortedS1 = s1.ToLower().ToCharArray() |> Array.sort
    let sortedS2 = s2.ToLower().ToCharArray() |> Array.sort
    sortedS1 = sortedS2

let s1 = "pan"
let s2 = "nap"

if isAnagram s1 s2 then
    printfn "Anagram Strings"
else
    printfn "Not Anagram Strings"
```

```go
// Write a Go program to check anagram string

package main
import (
	"fmt"
	"sort"
)
func sortString(str string) string {
	// Convert the string to a slice of runes
	runeSlice := []rune(str)

	// Sort the slice of runes
	sort.Slice(runeSlice, func(i, j int) bool {
		return runeSlice[i] < runeSlice[j]
	})

	// Convert the sorted slice of runes back to a string
	sortedString := string(runeSlice)

	return sortedString
}
func AreAnagrams(a string,b string){
	a = sortString(a)
	b = sortString(b)
	if a==b{
		fmt.Println("Anagram strings")
	} else{
		fmt.Println("Not Anagram strings")
	}
}
func main(){
	AreAnagrams("pan","nap")
}
```

```haskell
-- Write a Haskell program to check anagram string

import Data.List
main = do
    putStrLn "enter word 1: "
    word1 <- getLine

    putStrLn "enter word 2: "
    word2 <- getLine

    putStrLn (toResult word1 word2)

toResult [] [] = "word1 and word2 are empty"
toResult [] word2 = "word1 is empty!"
toResult word1 [] = "word2 is empty!"

toResult word1 word2
    | sort word1 == sort word2 = "Strings are Anagrams"
    | otherwise = "Strings are not Anagrams"
```

```javascript
// Write a JavaScript program to check anagram string

const anagramChecker = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};

// console.log(anagramChecker('aAbb', 'bBaa'))
```

```julia
# Write a Julia program to check anagram string

function is_anagram(str1::String, str2::String)
    # Remove any spaces and convert both strings to lowercase
    str1 = replace(lowercase(str1), r"\s+" => "")
    str2 = replace(lowercase(str2), r"\s+" => "")

    # Check if the length of both strings is the same
    if length(str1) != length(str2)
        return false
    end

    # Sort the characters in both strings and check if they are equal
    if sort(collect(str1)) == sort(collect(str2))
        return true
    else
        return false
    end
end

# Example usage
println("Enter 2 Strings") #take input
str1 = readline()
str2 = readline()

if is_anagram(str1, str2)
    println("Anagram Strings")
else
    println("Not Anagram Strings")
end
```

```kotlin
// Write a Kotlin program to check anagram string

fun anagramChecker(s: String, t: String): Boolean {
    if (s.length != t.length) return false

    val sMap = mutableMapOf<Char, Int>()
    val tMap = mutableMapOf<Char, Int>()

    for (i in s.indices){
        sMap[s[i]] = sMap.getOrDefault(s[i], 0) + 1
        tMap[t[i]] = tMap.getOrDefault(t[i], 0) + 1
    }

    for (ch in sMap.keys){
        if (sMap[ch] != tMap[ch]) return false
    }
    return true
}

//println(anagramChecker("pan", "nap"))
```

```perl
# Write a Perl program to check anagram string

use warnings;
use strict;
print "Enter the first word : ";
my $word1 = <STDIN>;
print "Enter the second word : ";
my $word2 = <STDIN>;
my $letters1 = join "", sort split "", $word1;
my $letters2 = join "", sort split "", $word2;
print $letters1;
print $letters2;
if ($letters1 eq $letters2) {
  print "String are Anagram";
}
else {
  print "String are not Anagram";
}
```

```php
// Write a PHP program to check anagram string

<?php

function anagram($pharse1, $pharse2){
   $status = 'Not an Anagram Strings';
  if($pharse1 && $pharse2){
   $pharse1=strtolower(str_replace(" ","", $pharse1));
   $pharse2=strtolower(str_replace(" ","", $pharse2));
   $pharse1 = str_split($pharse1);
   $pharse2 = str_split($pharse2);
   sort($pharse1);
   sort($pharse2);
   if($pharse1 === $pharse2){
   $status = 'Anagram Strings';
   }
  }
  return $status;

}

echo anagram('pan' , 'nap');
?>
```

```python
# Write a Python program to check anagram string

# Function to check if string is anagram or not
def isanagram(str1,str2):
    return sorted(str1)== sorted(str2):


string1 = input()
string2 = input()
if isanagram(string1,string2) == True
    print("Anagram Strings")
else:
    print("Not Anagram Strings")
```

```r
# Write a R program to check anagram string

checkAnagram <- function(string1, string2) {
  if (nchar(string1) != nchar(string2)) {
    return("Not Anagram Strings")
  } else {
    if (all(sort(strsplit(string1, "")[[1]]) == sort(strsplit(string2, "")[[1]]))) {
      return("Anagram Strings")
    } else {
      return("Not Anagram Strings")
    }
  }
}

# Here's how to use the function:

string1 <- "pan"
string2 <- "nap"
result <- checkAnagram(string1, string2)
cat(result) # Output: Anagram Strings
```

```ruby
# Write a Ruby program to check anagram string

def checkAnagram str1, str2
    if str1.reverse == str2
        "Anagram Strings"
    else
        "Not Anagram Strings"
    end
end

puts checkAnagram "pan", "nap"
```

```rust
// Write a Rust program to check anagram string

use std::io;

fn main() {

  let mut buff = String::new();

  io::stdin().read_line(&mut buff);

  let strs: Vec<&str> = buff.split(",").collect();

  let mut char_vec_a : Vec<char> = strs[0].to_owned().chars().collect();
  let mut char_vec_b : Vec<char> = strs[1].to_owned().chars().collect();

  char_vec_a.sort();
  char_vec_b.sort();

  if  char_vec_a==char_vec_b {
      println!("Anagram Strings");
  } else {
      println!("Not Anagram Strings");
  }

}
```

```scala
// Write a Scala program to check anagram string

def areAnagram(str1: String, str2: String): Boolean =
  str1.sorted == str2.sorted

println(areAnagram("pan", "nap"))
```

```swift
// Write a Swift program to check anagram string

func sortedString(str: String) -> String {
    let str1 = str.sorted()
    let str2 = String(str1)
    return str2
}

func AreAnagram(str1: String, str2: String){
    let str1lowerCase = str1.lowercased()
    let str2lowerCase = str2.lowercased()
    let str1 = sortedString(str: str1lowerCase)
    let str2 = sortedString(str: str2lowerCase)
    if str1 == str2 {
        print("Are Anagram")
    }
    else {
        print("Are not Anagram")
    }
}

AreAnagram(str1: "listen", str2: "SiLent")
```

```typescript
// Write a TypeScript program to check anagram string

function isAnagram(str1: string, str2: string): boolean {
  // Remove any whitespace and convert to lowercase
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to count the number of occurrences of each letter
  const counts1 = {};
  const counts2 = {};

  // Count the occurrences of each letter in the first string
  for (const char of str1) {
    counts1[char] = (counts1[char] || 0) + 1;
  }

  // Count the occurrences of each letter in the second string
  for (const char of str2) {
    counts2[char] = (counts2[char] || 0) + 1;
  }

  // Compare the counts of each letter
  for (const char in counts1) {
    if (counts1[char] !== counts2[char]) {
      return false;
    }
  }

  return true;
}

// Read user input for the two strings
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the first string: ", str1 => {
  readline.question("Enter the second string: ", str2 => {
    // Check if the strings are anagrams of each other
    if (isAnagram(str1, str2)) {
      console.log(`${str1} and ${str2} are anagrams of each other.`);
    } else {
      console.log(`${str1} and ${str2} are not anagrams of each other.`);
    }

    // Close the readline interface
    readline.close();
  });
});
```
