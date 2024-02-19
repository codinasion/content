---
title: "Print Character Of An Ascii Value"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "kotlin",
    "ruby",
    "typescript",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "akkshayTandon",
    "jfinley6",
    "gsquareg2",
    "JoshuaT35",
    "pokharel-nishan",
    "erezcal1",
    "joao-vitor-souza",
    "brundabharadwaj",
    "sai-ram-pendyala",
    "jatt7568",
    "grraghav120",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T04:57:20Z
trackId: 1026
description: "Write a program to print character of an ascii value."
---

## Table of contents

## Write a program to print character of an ascii value

ASCII value is the numeric representation of a character. For example, the ASCII value of the character 'A' is 65. The ASCII value of the character 'a' is 97. The ASCII value of the character '0' is 48. The ASCII value of the character ' ' is 32.

```
Input  : 65
Output : A
```

---

### C

```c
// Write a C program to print character of an ascii value

#include <stdlib.h>
#include <conio.h>

int main(){
    char my_ch;
    printf("Enter A character \n");
    scanf("%c",&my_ch);
    int result=(int)my_ch;
    printf("%d",result);
}
```

### C#

```csharp
// Write a C# program to print character of an ascii value

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.Write("Enter ASCII value : ");
        int input = Convert.ToInt32(Console.ReadLine());
        Console.Write("The character is : ");
        Console.Write(Convert.ToChar(input));
    }
}
```

### C++

```cpp
// Write a C++ program to print character of an ascii value

#include <iostream>
using namespace std;

int main(){
    char ch;
    cout<<"Enter a Character"<<'\n';
    cin>>ch;
    cout<<(int)ch<<'\n';
}
```

### Go

```go
// Write a Go program to print character of an ascii value

package main

import "fmt"

func main() {
  var asciiValue int
  fmt.Println("Enter ASCII value:")
  fmt.Scan(&asciiValue)
	character := rune(asciiValue)

	fmt.Printf("Character corresponding to ASCII Code %d = %c\n", asciiValue, character)
}
```

### Java

```java
// Write a Java program to print character of an ascii value

import java.util.Scanner;

public class PrintCharacterOfAnAsciiValue {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a value to find corresponding character");
        int number = input.nextInt();

        char asciiChar = (char)number;
        System.out.println("The character for ASCII value " + number + " is: " + asciiChar);

        input.close();
    }
  }
```

### Kotlin

```kotlin
// Write a Kotlin program to print character of an ascii value

fun main() {
    var num = 65;
    println(num.toChar())
}
```

### Perl

```perl
# Write a Perl program to print character of an ascii value

#!/usr/bin/perl
print chr (65);
```

### PHP

```php
// Write a PHP program to print character of an ascii value

<?php

$str1 = readline();

$char1 = chr($str1);

echo $char1;

?>
```

### Python

```python
# Write a Python program to print character of an ascii value

ascii = int(input())
print(chr(ascii))
```

### Ruby

```ruby
# Write a Ruby program to print character of an ascii value

def printCharacterOfAnAsciiValue int
    int.chr
end

puts printCharacterOfAnAsciiValue 65
```

### TypeScript

```typescript
// Write a TypeScript program to print character of an ascii value

function PrintCharacterOfAnAsciiValue(str: string) {
  return str.charCodeAt(0);
}

console.log("Given string is", PrintCharacterOfAnAsciiValue("A"));
```

## Similar programs

- [Print Character Of An Ascii Value](/program/print-character-of-an-ascii-value)
- [Print Ascii Value Of A String](/program/print-ascii-value-of-a-string)
- [Print String Of Ascii Values](/program/print-string-of-ascii-values)
- [Check Special Character](/program/check-special-character)
- [Implement Ternary Search](/program/implement-ternary-search)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Check Digit](/program/check-digit)
- [Check Alphabet](/program/check-alphabet)
- [Check Consonant](/program/check-consonant)
