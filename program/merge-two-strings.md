---
title: "Merge Two Strings"
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
    "r",
    "rust",
  ]
contributors:
  [
    "einan202",
    "harshraj8843",
    "anandfresh",
    "Preetiraj3697",
    "esivakumar18",
    "tom-laplace",
    "vipulkmr02",
    "james-tharit",
    "iamtejasmane",
    "SarthakSanjay",
    "Varun-Dhruv",
    "Dcastro99",
    "dineshlalam15",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-23T09:27:22Z
trackId: 5423
description: "Write a program to merge two strings."
---

## Table of contents

## Write a program to merge two strings

```
Input  : ABC DEF
Output : ABCDEF
```

---

### C

```c
// Write a C program to merge two strings

#include <stdio.h>
#include <string.h>

int main() {
	char str1[20], str2[20], merged[40];
	scanf("%s %s", str1, str2);
	strcpy(merged, str1);
	strcat(merged, str2);

	printf("%s", merged);
	return 0;
}
```

### C#

```csharp
// Write a C# program to merge two strings

using System;
class Program
{
    static void Main()
    {
        string s1 = "ABC";
        string s2 = "DEF";
        Console.WriteLine(string.Concat(s1, s2));
        Console.ReadLine();
    }
}
```

### C++

```cpp
// Write a C++ program to merge two strings

// Concatenates two strings.
#include <bits/stdc++.h>
#define ll long long
using namespace std;

string Concat(string a, string b){
    return a+b;
}
int main(){
    string s,s2;   cin>>s>>s2;
    cout<<Concat(s,s2)<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to merge two strings

String _mergeStrings(String str1, String str2) {
  return str1 + str2;
}

void main() {
  print(_mergeStrings('ABC', 'DEF'));
}
```

### F#

```fsharp
// Write a F# program to merge two strings

let mergeStrings str1 str2 =
    String.Concat([|str1; str2|])

// Example usage
let merged = mergeStrings "ABC" "DEF"
printfn "%s" merged // Outputs "ABCDEF"
```

### Go

```go
// Write a Go program to merge two strings

package main

import "fmt"

func merge(a, b string) string {
	return a + b
}
func main() {
	var str1 string
	var str2 string

	fmt.Println("Enter two strings:")
	fmt.Scanln(&str1)
	fmt.Scanln(&str2)

	fmt.Println(merge(str1, str2))
}
```

### Java

```java
// Write a Java program to merge two strings

import java.util.Scanner;

public class MergeTwoStrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter String 1: ");
        String s1 = sc.nextLine();
        System.out.print("Enter String 2: ");
        String s2 = sc.nextLine();
        System.out.println("Resultant String: " +s1 + s2);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to merge two strings

function mergeStrings(str1, str2) {
  return str1 + str2;
}

console.log(mergeStrings("ABC", "DEF"));
```

### Julia

```julia
# Write a Julia program to merge two strings

print("Enter the first string : ")
s1 = readline()
print("Enter the second string : ")
s2 = readline()
s = s1 * s2
print("Merged String : "*s)
```

### Kotlin

```kotlin
// Write a Kotlin program to merge two strings

fun main(args: Array<String>) {
    val a = "Hello"
    val b = "World"
    val c = a.plus(" ").plus(b)
    val d = a + " " + b

    println(c)
    println(d)
}
```

### Perl

```perl
# Write a Perl program to merge two strings

$str1 = "ABC";
$str2 = "DEF";

$merge = $str1.$str2;

print $merge;
```

### PHP

```php
// Write a PHP program to merge two strings

<?php

function mergeStrings($str1, $str2){
  return $str1.$str2;
}

echo mergeStrings('ABC', 'DEF');

?>
```

### Python

```python
# Write a Python program to merge two strings

# This python script calculates the  concatenation of two given strings str1 and str2

string1 = str(input("Enter a string  : "))
string2 = str(input("Enter another string : "))


def mergeString(str1: str, str2: str) -> str:
    return str1 + str2


print("Merged String : ", mergeString(string1, string2))
```

### R

```r
# Write a R program to merge two strings

string1 = 'ABC'
string2 = 'DEF'
cat("Merged String : ", paste(string1, string2))
```

### Ruby

```ruby
# Write a Ruby program to merge two strings

def mergeStrings(str1, str2)
   puts str1+str2;
end

mergeStrings('ABC', 'DEF')
```

### Rust

```rust
// Write a Rust program to merge two strings

fn merge_two_strings(str1: &str, str2: &str) -> String {
    let mut str3 = String::new();
    str3.push_str(str1);
    str3.push_str(str2);
    return str3
}

fn main() {
    println!("{}", merge_two_strings("ABC", "DEF"));
}
```

### Scala

```scala
// Write a Scala program to merge two strings

import scala.io.StdIn._;

object mergeStrings {
    def main(args:Array[String]):Unit={
        println("Enter the String1 : ");
        var string1 = readLine();
        println("Enter the String2 : ");
        var string2 = readLine();
        var mergedString = string1+string2;
        println("Merged String : "+mergedString);
    }
}
```

### Swift

```swift
// Write a Swift program to merge two strings

import Swift
import Foundation

print("Enter string1: ")
var string1 = readLine()!

print("Enter string2: ")
var string2 = readLine()!

print(string1 + string2)
```

### TypeScript

```typescript
// Write a TypeScript program to merge two strings

const MergeTwoStrings = (s1: string, s2: string): string => {
  return s1.concat(s2.toString());
};
export default MergeTwoStrings;
```
