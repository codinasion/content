---
title: "Check Palindrome String"
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
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "pedram-mohajer",
    "thecomputerfella",
    "anandfresh",
    "Tushar12222",
    "esivakumar18",
    "Aroskar17",
    "sancoLgates",
    "jfinley6",
    "rksp25",
    "joao-vitor-souza",
    "kangjung",
    "metaloozee",
    "rahmat-dev",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1538
description: "Write a program to check palindrome string."
---

## Write a program to check palindrome string

Palindrome string is a string that is same when read from left to right and right to left. For example, "aba" is a palindrome string, "abc" is not.

```
Input  : abba
Output : Palindrome String
```

---

```c
// Write a C program to check palindrome string

#include <stdio.h>
#include <string.h>

int main() {
    int i, j;
    char str[20] = "abba";

    j = strlen(str) - 1;

    while (i <= j) {
        if (str[i] != str[j]) {
            printf("Not a Palindrome String");
            return 0;
        } else {
            i++;
            j--;
        }
    }
    printf("Palindrome String");
    return 1;
}
```

```csharp
// Write a C# program to check palindrome string

using System;
namespace palindromecheck {
   class Program {
      static void Main(string[] args) {
         string string1, rev;
         Console.WriteLine ("Please enter a string : ");
         string1 = Console.ReadLine();
         char[] ch = string1.ToCharArray();
         Array.Reverse(ch);
         rev = new string(ch);
         bool b = string1.Equals(rev, StringComparison.OrdinalIgnoreCase);
         if (b == true) {
            Console.WriteLine("" + string1 + " is a Palindrome!");
         } else {
            Console.WriteLine(" " + string1 + " is not a Palindrome!");
         }
         Console.Read();
      }
   }
}
```

```cpp
// Write a C++ program to check palindrome string

#include <iostream>

using namespace std;

bool isPal (string text)
{

  int n = text.length ();

  for (int i = 0; i < n / 2; i++)
  {
    if (text[i] != text[n - i - 1])
      return false;
  }
  return true;
}

int main ()
{
  string text = "abba";

  if (isPal (text))
    {
      cout << "Palindrome String" << endl;
      return 0;
    }
  else
    {
      cout << "Not a Palindrome String" << endl;
      return 1;
    }

  return 1;
}
```

```dart
// Write a Dart program to check palindrome string

bool checkPalin(String s){
  int l = 0;
  int r = s.length - 1;
  while(l < r){
    if(s[l] != s[r]){
      return false;
    }
    l += 1;
    r -= 1;
  }
  return true;
}

void main() {
  print(checkPalin("abqa"));
}
```

```go
// Write a Go program to check palindrome string

package main

import "fmt"

func isPalindrome(str string) bool {
	var reverse string
	for _, v := range str {
		reverse = string(v) + reverse
	}
	return str == reverse
}

func main() {
	var input string

	fmt.Print("Input String: ")
	fmt.Scan(&input)

	if (isPalindrome(input)) {
		fmt.Println("Palindrome String")
	} else {
		fmt.Println("Not Palindrome String")
	}
}
```

```java
// Write a Java program to check palindrome string

import java.util.Scanner;

public class CheckPalindromeString {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		int i = 0;
		int j = str.length() - 1;
		boolean check = true;
		sc.close();
		while (i <= j) {
			if (str.charAt(i) != str.charAt(j)) {
				check = false;
				break;
			}
			i++;
			j--;
		}
		System.out.println((check) ? "Palindrome String" : "Not Palindrome String");
	}
}
```

```javascript
// Write a JavaScript program to check palindrome string

function checkPalindromeString(str) {
  const reverseStr = [...str].reverse().join("");
  return str === reverseStr;
}

console.log(
  checkPalindromeString("abba") ? "Palindrome String" : "Not Palindrome String"
);
```

```julia
# Write a Julia program to check palindrome string

function is_palindrome(str)
    cleaned_str = lowercase(strip(str))
    return cleaned_str == reverse(cleaned_str)
end

# Example usage:
input_str = "abba"
if is_palindrome(input_str)
    println("$input_str is a palindrome.")
else
    println("$input_str is not a palindrome.")
end
```

```kotlin
// Write a Kotlin program to check palindrome string

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Is $input palindrome : " + CheckPalindromeString(input!!))

}

private fun CheckPalindromeString(inputStr: String): Boolean {
    val sb = StringBuilder(inputStr)

    //reverse the string
    val reverseStr = sb.reverse().toString()

    //compare reversed string with input string
    return inputStr.equals(reverseStr, ignoreCase = true)
}
```

```perl
# Write a Perl program to check palindrome string

print "Enter a word :";
my $name=<STDIN>;
chomp($name);
@arr=split(//,$name);
$count=@arr;
$num=0;
for ($i=0;$i<$count;$i++){
    if ($arr[$i] eq $arr[$count-1]){
        $count--;
    }else{
        $num++;
        last;
    }
}
if ($num == 0){
    print "It is a palindrome";
}else{
    print "It is not a palindrome";
}
```

```php
// Write a PHP program to check palindrome string

<?php

function check_palindrome_string($str)
{
	return strrev($str) == $str;
}

echo check_palindrome_string('abba') ? 'Palindrome String' : 'Not Palindrome String';
```

```python
# Write a Python program to check palindrome string

def checkPalindromeString(str):
    return str == str[::-1]


print("Palindrome String" if checkPalindromeString("abba") else "Not Palindrome String")
```

```r
# Write a R program to check palindrome string

# Function to check if a string is a palindrome
isPalindrome <- function(s) {
  s <- tolower(s)
  s <- gsub(" ", "", s)
  rev_s <- paste(rev(unlist(strsplit(s, ""))), collapse = "")
  return(s == rev_s)
}

#input
user_input <- "racecar"

# Check if the user input is a palindrome and print YES or NO
if (isPalindrome(user_input)) {
  cat("Palindrome String\n")
} else {
  cat("Not Palindrome String\n")
}
```

```ruby
# Write a Ruby program to check palindrome string

print "Please enter a string: "
input_string = gets.chomp

def checkPalindromeString string
    if string.downcase == string.reverse.downcase
        "Palindrome String"
    else
        "Not Palindrome String"
    end
end

print checkPalindromeString input_string
```

```rust
// Write a Rust program to check palindrome string

fn check_palindrome_string(string: &str) {
	let reverse_string: String = string.chars().rev().collect();

	if string == reverse_string {
		println!("Palindrome String");
	} else {
		println!("Not Palindrome String");
	}
}

fn main() {
	check_palindrome_string("abba");
}
```

```scala
// Write a Scala program to check palindrome string

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val word = scala.io.StdIn.readLine();
	  val reverseWord = reverse(word);
	  if(reverseWord == word) {
	    println("Palindrome")
	  } else {
	    println("Not a Palindrome")
	  }
	}

	def reverse(s: String): String = {
   if (s.isEmpty) ""
   else reverse(s.tail) + s.head
 }
}
```

```swift
// Write a Swift program to check palindrome string

import Swift
import Foundation

func checkPalindrome(str: String) -> Bool {
   var reversedString = String(str.reversed())
   return str == reversedString
}

var str1 = "abba"
var result1 = checkPalindrome(str: str1)
print("Is String - \(str1) is palindrome?:", result1)

var str2 = "abba123"
var result2 = checkPalindrome(str: str2)
print("Is String - \(str2) is palindrome?:", result2)
```

```typescript
// Write a TypeScript program to check palindrome string

const checkPalindromeString = (text: string) => {
  text = text.toLowerCase();
  const n = text.length;
  let low = 0;
  let high = n - 1;

  while (high > low) {
    if (text[high] != text[low]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
};

/**
 * Test Case 1:
 * text = "abba"
 */

const string = "abba";
if (checkPalindromeString(string)) {
  console.log("Palindrome String");
} else {
  console.log("Not a Palindrome String");
}
```
