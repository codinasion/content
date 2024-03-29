---
title: "Convert String To Uppercase"
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
    "perl",
    "scala",
    "go",
    "php",
    "python",
    "r",
  ]
contributors:
  [
    "rakibul-islam-raju",
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "anandfresh",
    "cacti23",
    "rksp25",
    "greeshma-d",
    "HeYPoonam",
    "Robert-Capra",
    "vishalpattnaik",
    "Mudi-Igbinoba",
    "protoi",
    "zenoctrl",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-01T15:08:25Z
trackId: 3526
description: "Write a program to convert string to uppercase."
---

## Table of contents

## Write a program to convert string to uppercase

```
Input  : "Hello World"
Output : "HELLO WORLD"
```

---

### C

```c
// Write a C program to convert string to uppercase

#include<stdio.h>
#include<stdbool.h>

bool convertor(char str[]){
    int i=0;
    while(str != NULL && str[i] != '\0'){            // checking for end of string
        if((int)str[i] >= 97 && (int)str[i] <= 122) //making the lower case letters upper case
            str[i] = (str[i] - (97-65));
        i++;
    }
}

int main(){
    char mystring[] = "Hello World.";
    convertor(mystring);
    printf("%s", mystring);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert string to uppercase

using System;
namespace Uppercase {
  class Uppercase {
    public static void Main(string [] args) {
     Console.WriteLine ("Please enter a string : ");
      //string str = "chocolate";
     string str = Console.ReadLine();
      string result = str.ToUpper();
      Console.WriteLine("Uppercase of the given string: "+result);

      Console.ReadLine();
    }
  }
}
```

### C++

```cpp
// Write a C++ program to convert string to uppercase

#include <iostream>

int main() {
  std::string s;

  std::cout << "Enter the input" << std::endl;

  std::getline(std::cin, s);

  int strLen = s.length();

  for(int i = 0; i < strLen; i++) {
    char ch = s[i];
    s[i] = toupper(ch);
  }


  std::cout << "Output: " << s << std::endl;

}
```

### Go

```go
// Write a Go program to convert string to uppercase

package main

import (
    "fmt"
    "strings"
)

func main() {
    var str = "HelLo World"
    var str_upper = strings.ToUpper(str)
    fmt.Printf(str_upper)
}
```

### Java

```java
// Write a Java program to convert string to uppercase

import java.util.Scanner;

public class ConvertStringToUppercase {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        scanner.close();
        System.out.println(str.toUpperCase());
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to uppercase

const convertStringToUpperCase = string => {
  return string.toUpperCase();
};
```

### Julia

```julia
# Write a Julia program to convert string to uppercase

println("Enter a string: ")
s = readline()
println("Given string in uppercase: ", uppercase(s))
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to uppercase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("Camel Case: " + ConvertStringToUppercase(input!!))

}

private fun ConvertStringToUppercase(args: String): String {
    return args.uppercase().toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to uppercase

my $str = <STDIN>;
print uc $str;
```

### PHP

```php
// Write a PHP program to convert string to uppercase

<!DOCTYPE html>
<html>
<body>

<?php
$inputString = "Hello World";
echo "Input: $inputString";
$toUpperCase = strtoupper($inputString);

echo "<br>\n Output: $toUpperCase";
?>

</body>
</html>
```

### Python

```python
# Write a Python program to convert string to uppercase

print(input().upper())
```

### R

```r
# Write a R program to convert string to uppercase

string = "test hello world"
cat(toupper(string))
```

### Ruby

```ruby
# Write a Ruby program to convert string to uppercase

print "Enter string : \n"
word = gets.chomp
print(word.upcase)
```

### Scala

```scala
// Write a Scala program to convert string to uppercase

def convert_to_uppercase(string: String): String = {
  string.toUpperCase()
}

println(convert_to_uppercase("Hello World"))
```

### Swift

```swift
// Write a Swift program to convert string to uppercase

import Swift
import Foundation

let str = "hello world"
let uppercased = String(str.uppercased())
print(uppercased)
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to uppercase

function stringToUppercase(str: string) {
  console.log(str.toUpperCase());
}

stringToUppercase("hello world");
```

## Similar programs

- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Print Hello World](/program/print-hello-world)
- [Convert String To Reversecase](/program/convert-string-to-reversecase)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Convert String To Consonantcase](/program/convert-string-to-consonantcase)
- [Convert String To Vowelcase](/program/convert-string-to-vowelcase)
- [Split String Into Array Of Words](/program/split-string-into-array-of-words)
- [Convert String To Titlecase](/program/convert-string-to-titlecase)
- [Convert String To Alternatingcase](/program/convert-string-to-alternatingcase)
- [Convert String To Constantcase](/program/convert-string-to-constantcase)
