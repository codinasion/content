---
title: "Check Consonant"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "swift",
    "typescript",
    "julia",
    "scala",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "RiteshK-611",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "grraghav120",
    "dtawusaku",
    "sahooankeeta",
    "venkat-siddarth",
    "greeshma-d",
    "kashyap-kumar",
    "DheekshaGopika",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-05T18:14:08Z
trackId: 1054
description: "Write a program to check consonant."
---

## Write a program to check consonant

Check if a character is a consonant.

```
Input  : b
Output : Consonant
```

---

```c
// Write a C program to check consonant

#include <stdio.h>

int main(){

    char ch;
    scanf("%c",&ch);
    if(ch=='a' || ch=='A' || ch=='e' || ch=='E' || ch=='i' || ch=='I' || ch=='o' || ch=='O' || ch=='u' || ch=='U') printf("Not Consonent");
    else printf("Consonent");
    return 0;
}
```

```csharp
// Write a C# program to check consonant

using System;
public class LFC
{
  public static void Main(string[] args)
  {
    char ch='b';
    if((ch >= 'A' && ch <= 'Z')||ch >= 'a' && ch <= 'z')
    {
      if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i'
      || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U')
      {
        Console.WriteLine(ch + " is a vowel");
      }
      else
      {
        Console.WriteLine(ch + " is a consonant");
      }
    }
    else
    {
      Console.WriteLine(ch + " is not an alphabet");
    }
  }
}
```

```cpp
// Write a C++ program to check consonant

/**
    Write a C++ program to check consonant

    Check if a character is a consonant.

    Input  : b
    Output : Consonant
 */

#include <iostream>
using namespace std;

bool checkConsonant(char c){
    c = tolower(c);
    if(c != 'a' && c != 'o' && c != 'i' && c != 'o' && c != 'u'){
        return true;
    }
    return false;
}

int main(){
    char n;
    cout << "Enter a character: ";
    cin >> n;
    if(checkConsonant(n)) cout << "Given character is a consonant" << endl;
    else cout << "Given character is not a consonant" << endl;
    return 0;
}
```

```go
// Write a Go program to check consonant

package main

import "fmt"

func main() {
	vowels := []string{"a", "e", "i", "o", "u"}
	var char string
	fmt.Scan(&char)
	flag := true
	for _, v := range vowels {
		if v == char {
			flag = false
			break
		}
	}
	if flag {
		fmt.Println("Consonant")
	} else {
		fmt.Println("Vowel")
	}
}
```

```java
// Write a Java program to check consonant

import java.util.*;
class CheckConsonant
{
  public static boolean isConsonant(char c)
  {
    if((c>='a'&&c<='z')||(c>='A'&&c<='Z'))
    {
      if(c=='A'||c=='E'||c=='I'||c=='O'||c=='U'||c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
         return false;
      return true;
    }

     return false;
  }
  public static void main(String args[])
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter character ");
    char c=sc.nextLine().charAt(0);
    if(isConsonant(c))
      System.out.println("Consonant");
    else
      System.out.println("Not a Consonant");
  }
}
```

```javascript
// Write a JavaScript program to check consonant

function checkConsonants(str) {
  let consonant = "";
  if (str != "a" && str != "e" && str != "i" && str != "o" && str != "u") {
    consonant = "Consonant";
  } else {
    consonant = "Is not a Consonant";
  }
  return consonant;
}

console.log("Given string is", checkConsonants("b"));
```

```julia
# Write a Julia program to check consonant

println("Enter a character: ")
char = readline()
vowels = ["a", "e", "i", "o", "u"]

if char in vowels
    println("Not Consonant")
else
    println("Consonant")
end
```

```kotlin
// Write a Kotlin program to check consonant

fun main() {
    print("Enter String : ")
    println()
    var input = readLine()

    println("$input is " + CheckConsonant(input!!.first()))

}

private fun CheckConsonant(ch: Char): String {
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        return "Vowel not Consonant"
    }

    return "Consonant"
}
```

```perl
# Write a Perl program to check consonant

use experimental 'smartmatch';
sub checkConsonants{
  my ($char) = @_;
  $consonant = "";
  if(lc($char) ~~ ['a', 'e', 'i', 'o', 'u']) {
    $consonant = "Is not a Consonant";
  } else {
    $consonant = "Consonant";
  }
  print $consonant;
}

checkConsonants("b");
```

```php
// Write a PHP program to check consonant

<?php

//Program to check if a given character input is consonant
$input = readline();

//condtion to check for consonant
if($input != 'a' &&  $input != 'A' && $input != 'e' && $input != 'i' && $input != 'I' && $input != 'o' && $input != 'O' && $input != 'U' && $input != 'u'){
    echo("Consonant");
}else{
    echo "Not a Consonant";
}

?>
```

```python
# Write a Python program to check consonant

vowels = ["a", "e", "i", "o", "u"]
char = input().lower()
if char not in vowels:
    print("Consonant")
else:
    print("Not a Consonant")
```

```scala
// Write a Scala program to check consonant

object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val c = scala.io.StdIn.readChar();

      if(c == 'A'
      || c == 'E'
      || c == 'I'
      || c == 'O'
      || c == 'U'
      || c == 'a'
      || c == 'e'
      || c == 'i'
      || c == 'o'
      || c == 'u') {
         println("Not a Consonant");
      } else {
        println("Is a Consonant")
      }
 	}
 }
```

```swift
// Write a Swift program to check consonant

import Swift
import Foundation

print("Please enter the letter:")
let given = String(readLine()!)
let consonants = "bcdfghijklmnpqrtvwxyz"

if consonants.contains(given) {
  print(given + " is consonant")
} else {
  print(given + " is not a consonant")
}
```

```typescript
// Write a TypeScript program to check consonant

function checkConsonants(str: string) {
  let consonant = "";
  if (
    str != "a" &&
    str != "e" &&
    str != "i" &&
    str != "o" &&
    str != "u" &&
    str != "A" &&
    str != "E" &&
    str != "I" &&
    str != "O" &&
    str != "U"
  ) {
    consonant = "Consonant";
  } else {
    consonant = "Is not a Consonant";
  }
  return consonant;
}

console.log(checkConsonants("j"));
```
