---
title: "Split String Into Array Of Words"
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
    "abhisek-1221",
    "Preetiraj3697",
    "ANUSHRAV01",
    "ashish07-07",
    "WHJang-0421",
    "james-tharit",
    "patel-aum",
    "hi-Kartik2004",
    "anandfresh",
    "sahilg2931",
    "vedantpople4",
    "loesking",
    "hugosmoreira",
    "grraghav120",
    "dineshlalam15",
    "Varun-Dhruv",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5638
description: "Write a program to split string into array of words."
---

## Table of contents

## Write a program to split string into array of words

```
Input  : "hello world"
Output : ["hello", "world"]
```

---

### C

```c
// Write a C program to split string into array of words

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char input[] = "hello world";
    char **words = malloc(sizeof(char*) * strlen(input));
    int word_count = 0;
    char *token = strtok(input, " ");
    while (token != NULL) {
        words[word_count] = malloc(sizeof(char) * (strlen(token) + 1));
        strcpy(words[word_count], token);
        word_count++;
        token = strtok(NULL, " ");
    }
    for (int i = 0; i < word_count; i++) {
        printf("%s\n", words[i]);
        free(words[i]);
    }
    free(words);
    return 0;
}
```

### C#

```csharp
// Write a C# program to split string into array of words

using System;
class SPLIT {

    static void Main(string[] args)
    {
        String str = "hello world";
        char[] spearator = { ' ' };
        String[] strlist = str.Split(spearator);

        foreach(String s in strlist)
        {
            Console.WriteLine(s);
        }
        Console.ReadKey();
    }
}
```

### C++

```cpp
// Write a C++ program to split string into array of words

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    string s,res="";
    getline(cin,s);
    vector<string> ans;
    for(int i=0;i<s.size();i++){
        if(s[i]==' '){
            ans.push_back(res);
            res="";
        }
        else res+=s[i];
    }
    ans.push_back(res);
    for(auto &it: ans) cout<<it<<'\n';
    return 0;
}
```

### Dart

```dart
// Write a Dart program to split string into array of words

import 'dart:io';

void main() {
  print('Enter a string:');
  String? input = stdin.readLineSync();
  List<String>? words = input?.split(' ');
  print(words);
}
```

### F#

```fsharp
// Write a F# program to split string into array of words

let splitIntoWords (str: string) =
    str.Split([|' '|], StringSplitOptions.RemoveEmptyEntries)

// Example usage
let words = splitIntoWords "hello world"
printfn "%A" words // Output: [|"hello"; "world"|]
```

### Go

```go
// Write a Go program to split string into array of words

package main

import (
	"fmt"
	"strings"
)

func splitStringIntoArray(str string) {
	arr := strings.Split(str, " ")
	semiformat := fmt.Sprintf("%q\n", arr)
	tokens := strings.Split(semiformat, " ")
	fmt.Printf(strings.Join(tokens, ", "))
}

func main() {
	str := "hello world"
	splitStringIntoArray(str)
}
```

### Haskell

```haskell
-- Write a Haskell program to split string into array of words

main = do
  putStrLn "Insert a string to convert: "
  line <- getLine
  print (words line)
```

### Java

```java
// Write a Java program to split string into array of words

import java.util.Arrays;
import java.util.Scanner;

public class SplitStringIntoArrayOfWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the String: ");
        String str = sc.nextLine();
        System.out.println(Arrays.toString(splitString(str)));
    }
    static String [] splitString(String str){
        String [] result = str.split(" ");
        return result;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to split string into array of words

function stringToArray(str) {
  return str.split(" ");
}

console.log(stringToArray("hello world"));
```

### Julia

```julia
# Write a Julia program to split string into array of words

function split_string(text::String)
    words = split(text)
    return words
end

text = "Hello World"
words = split_string(text)
println(words)
```

### Kotlin

```kotlin
// Write a Kotlin program to split string into array of words

import java.util.Scanner

fun main() {
    val input = Scanner(System.`in`)
    print("Enter a string: ")
    var string: String = input.nextLine()
    var splitString = string.split(" ")
    print(splitString)
}
```

### Perl

```perl
# Write a Perl program to split string into array of words

my $str ='hello world';
my @arr=split (/ /, $str);
print "@arr";
```

### PHP

```php
// Write a PHP program to split string into array of words

<?php

function string2Array($str) {
 print_r(explode(" ", $str));
}

string2Array('hello world');

?>
```

### Python

```python
# Write a Python program to split string into array of words

print(input().split(" "))
```

### R

```r
# Write a R program to split string into array of words

string <- "hello world"
words <- strsplit(string, " ")[[1]]
result <- paste(shQuote(words), collapse=", ")
cat(sprintf("[%s]", result))
```

### Ruby

```ruby
# Write a Ruby program to split string into array of words

def stringToArray(string)
  string.split(' ')
end

print stringToArray("hello world")
```

### Rust

```rust
// Write a Rust program to split string into array of words

fn split_string(s: &str) -> Vec<&str> {
  s.split_whitespace().collect()
}

fn main() {
  let s = "hello world";
  let words = split_string(s);
  println!("{:?}", words);
}
```

### Scala

```scala
// Write a Scala program to split string into array of words

object Main {
    def main(args: Array[String]) {
        print("Enter a string: ")
        val input = Console.in.readLine()
        val output = input.split(" ")
        println(output.mkString("[", ", ", "]"))
    }
}
```

### Swift

```swift
// Write a Swift program to split string into array of words

if let str = readLine() {
   print("String of array is  \(str.split(separator: " "))")
}
```

### TypeScript

```typescript
// Write a TypeScript program to split string into array of words

const SplitStringIntoArrayOfWords = (s: string): string[] => {
  const arrayOfWords: string[] = s.split(" ");
  return arrayOfWords;
};
export default SplitStringIntoArrayOfWords;
```

## Similar programs

- [Split String Into Array Of Characters](/program/split-string-into-array-of-characters)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Print Hello World](/program/print-hello-world)
- [Convert String To Titlecase](/program/convert-string-to-titlecase)
- [Convert String To Alternatingcase](/program/convert-string-to-alternatingcase)
- [Convert String To Dotcase](/program/convert-string-to-dotcase)
- [Convert String To Kebabcase](/program/convert-string-to-kebabcase)
- [Convert String To Pathcase](/program/convert-string-to-pathcase)
