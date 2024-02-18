---
title: "Split String Into Array Of Characters"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "NimrodBZB",
    "sancoLgates",
    "anafvana",
    "joao-vitor-souza",
    "mhdsabah",
    "PravunathSingh",
    "gdguesser",
    "PraaneshSelvaraj",
    "Vignesh-dev07",
    "greeshma-d",
    "Sivam2313",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-02T16:40:24Z
trackId: 2535
description: "Write a program to split string into array of characters."
---

## Table of contents

## Write a program to split string into array of characters

```
Input  : "hello world"
Output : ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
```

---

### C

```c
// Write a C program to split string into array of characters

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

int main()
{
  size_t arrayLength = 0, allocatedSize = 8;
  int *array = malloc(sizeof(*array) * allocatedSize);
  char str[1024];
  fgets(str, 1024, stdin);
  for (int i = 0; i < strlen(str); ++i)
  {
    if (arrayLength == allocatedSize)
    {
      array = realloc(array, allocatedSize *= 2);
      assert(array);
    }
    assert(arrayLength < allocatedSize);
    array[arrayLength++] = str[i];
  }
  printf("[");
  for (int i = 0; i < arrayLength; ++i)
  {
    printf("'");
    printf("%c ", array[i]);
    printf("', ");
  }
  printf("]");
  free(array);
  return 0;
}
```

### C#

```csharp
// Write a C# program to split string into array of characters

using System;

public class Reverse
{
    public static void Main()
    {
        var input = "I Love Open Source";
        var arrayOfCharacters = input.ToCharArray();

        Console.WriteLine(arrayOfCharacters);
    }
}
```

### C++

```cpp
// Write a C++ program to split string into array of characters

#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    getline(cin, s);
    char arr[s.size()];

    for (int i = 0; i < s.size(); i++)
    {
        arr[i] = s[i];
    }

    for (int i = 0; i < s.size(); i++)
    {
        cout << arr[i] << " ";
    }
}
```

### Go

```go
// Write a Go program to split string into array of characters

package main

import "fmt"

func splitStringIntoArray(str string) {
	var arr []string
	for _, v := range str {
		arr = append(arr, string(v))
	}
	fmt.Printf("%+q", arr)
}

func main() {
	str := "hello world"
	splitStringIntoArray(str)
}
```

### Haskell

```haskell
-- Write a Haskell program to split string into array of characters

-- String is aliased to [Char], thus no operation is needed to split a string into an array of chars

-- However, the expected output is ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"].
-- Double quotes would indicate this is an array of strings. This operation can be performed as follows:

-- String into array of single-character strings
module Main where

characters :: [Char] -> [[Char]]
characters [] = []
characters (x:xs)
    | null xs = [[x]]
    | otherwise = [x]:characters xs

main :: IO ()
main = do
  let result = characters "Hii there"
  print result
```

### Java

```java
// Write a Java program to split string into array of characters

import java.util.*;


class SplitStringintoArrayofCharacters{
	public static void main(String[] args){

		Scanner sc = new Scanner(System.in);
		String s;
		System.out.print("Input : ");

		s = sc.nextLine();
		int n = s.length();
		char[] arr = new char[n];
		for (int i=0;i<n;i++){
			arr[i] = s.charAt(i);

		}

		System.out.print("\nOutput : [");
		for (int i=0;i<n;i++){
			System.out.print('"'+""+arr[i]+""+'"');
			if (i!= n-1) System.out.print(", ");
		}
		System.out.print("]\n");
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to split string into array of characters

function splitStringIntoArrayOfCharacters(str) {
  // Method 1
  let charArray = str.split("");
  console.log(charArray);

  // Method 2
  let charArray = [];
  for (let i = 0; i < str.length; i++) {
    charArray.push(str[i]);
  }
  console.log(charArray);
}

splitStringIntoArrayOfCharacters("Hello World");
```

### Perl

```perl
# Write a Perl program to split string into array of characters

#!/usr/bin/perl
use warnings;
use strict;
print "Enter a word : ";
my $word = <STDIN>;
my @arr=split (//, $word);
print "@arr";
```

### PHP

```php
// Write a PHP program to split string into array of characters

<?php

	$str = "hello world";

	// method 1
	print_r(str_split($str));

	// method 2
	print_r(preg_split("//", $str , -1, PREG_SPLIT_NO_EMPTY));

?>
```

### Python

```python
# Write a Python program to split string into array of characters

# input string
string = input("Input :")
if string.startswith('"'):
    print("Output :", list(string[1:-1]))
else:
    print("Output :", list(string))
```

### Ruby

```ruby
# Write a Ruby program to split string into array of characters

str = gets.chomp
arr = str.split("")
print arr
```

### TypeScript

```typescript
// Write a TypeScript program to split string into array of characters

function splitStringIntoArrayOfCharacters(str: string) {
  // Method 1
  let charArray = str.split("");
  console.log(charArray);

  // Method 2
  let charArray = [];
  for (let i = 0; i < str.length; i++) {
    charArray.push(str[i]);
  }
  console.log(charArray);
}

splitStringIntoArrayOfCharacters("Hello World");
```
