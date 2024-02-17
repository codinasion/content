---
title: "Convert String To Consonantcase"
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
    "harshraj8843",
    "suvashish26",
    "swapnilmukherjee",
    "adesh1998",
    "anejman",
    "bhushanmarathe",
    "brianlu2610",
    "vedantpople4",
    "RiteshK-611",
    "Noriomusha",
    "Joel-Maldonado",
    "pokharel-nishan",
    "NoyHanan",
    "lukaszmielczarekdev",
    "anandfresh",
    "james-tharit",
    "sahdev77",
    "mrsaxman29",
    "jfinley6",
    "shekaushik",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-06T10:06:42Z
trackId: 5142
description: "Write a program to convert string to consonantcase."
---

## Write a program to convert string to consonantcase

Consonantcase is a style of writing in which all consonants are converted to uppercase and all vowels are converted to lowercase.

```
Input  : "hello world"
Output : "HeLlo WoRLD"
```

---

```c
// Write a C program to convert string to consonantcase

#include <stdio.h>
#include <ctype.h>
#include <string.h>

void conVowUpp(char str[]) {
    int N = strlen(str);
    for (int i = 0; i < N; i++) {
        if (str[i] == 'a' || str[i] == 'e' ||
            str[i] == 'i' || str[i] == 'o' ||
            str[i] == 'u') {
            char c = tolower(str[i]);
            str[i] = c;
        } else {
            char c = toupper(str[i]);
            str[i] = c;
        }
    }
    for (int i = 0; i < N; i++) {
        printf("%c", str[i]);
    }
}

int main() {
    printf("Enter a string: ");
    char str[100];
    fgets(str, sizeof(str), stdin);

    // Remove newline character if present
    if (str[strlen(str) - 1] == '\n') {
        str[strlen(str) - 1] = '\0';
    }

    conVowUpp(str);

    return 0;
}
```

```csharp
// Write a C# program to convert string to consonantcase

using System;
class ConsonantCase{

static void conVowUpp(char[] str)
{

  int N = str.Length;
  for (int i = 0; i < N; i++)
  {
    if (str[i] == 'a' || str[i] == 'e' ||
        str[i] == 'i' || str[i] == 'o' ||
        str[i] == 'u')
    {
      char c = char.ToLowerInvariant(str[i]);
      str[i] = c;
    } else {
      char c = char.ToUpperInvariant(str[i]);
      str[i] = c;
    }
  }
  foreach(char c in str)
    Console.Write(c);
}

public static void Main(String[] args)
{
  Console.Write("Enter a string : ");
  String str = Console.ReadLine();
  conVowUpp(str.ToCharArray());
}
}
```

```cpp
// Write a C++ program to convert string to consonantcase

#include<bits/stdc++.h>
#define for(i,o,n,s) for(auto i{o}; i < n; i+=s)
#define input_array(arr,n) for(int index=0; index < n ; index++) cin>>arr[index];
#define int long long
#define FAST ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
using namespace std;
    signed main(){
     FAST
        string s;
        getline(cin,s);
        for(i,0,s.length(),1){
            switch((int)s[i]){
                case 65:
                case 69:
                case 73:
                case 79:
                case 85: s[i]+=32;
                break;
            }
            switch ((int)s[i])
            {
                case 98:
                case 99:
                case 100:
                case 102:
                case 103:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122: s[i]-=32;
                break;
            }
        }
        cout<<s;
        return 0;
    }
```

```dart
// Write a Dart program to convert string to consonantcase

String _consonantCase(String str) => str.replaceAllMapped(
    RegExp(r'[^aeiou]'), (match) => match.group(0).toString().toUpperCase());

void main() {
  print(_consonantCase('hello world'));
}
```

```fsharp
// Write a F# program to convert string to consonantcase

let toConsonantCase (input: string) =
    let isVowel (c: char) =
        "aeiouAEIOU" |> Seq.contains c

    let convertChar (c: char) =
        if isVowel c then System.Char.ToLower c
        else System.Char.ToUpper c

    let convertString (s: string) =
        s |> Seq.map convertChar |> System.String.Concat

    convertString input

// Example Usage
let inputString = "hello world"
let result = toConsonantCase inputString
printfn "Input: %s\nOutput: %s" inputString result
```

```go
// Write a Go program to convert string to consonantcase

package main

import (
	"fmt"
	"strings"
)

func consonantCase(str string) string {
	var result string
	for _, char := range str {
		if strings.ContainsAny(string(char), "aeiouAEIOU") {
			result += strings.ToLower(string(char))
		} else {
			result += strings.ToUpper(string(char))
		}
	}
	return result
}

func main() {
	input := "Hello, World"
	output := consonantCase(input)
	fmt.Println(output)
}
```

```java
// Write a Java program to convert string to consonantcase

public class ConvertStringToConsonantcase {
    public static void main(String[] args) {
        String str = "Convert me to Consonant Case";
        String result = convertToConsonantCase(str);
        System.out.println(result); // Output: cOnvErt mE tO cOnsOnAnt cAsE
    }

    public static boolean isVowel(char c) {
        return "AEIOUaeiou".indexOf(c) != -1;
    }

    public static String convertToConsonantCase(String str) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (isVowel(c)) {
                result.append(Character.toUpperCase(c));
            } else {
                result.append(Character.toLowerCase(c));
            }
        }
        return result.toString();
    }
}
```

```javascript
// Write a JavaScript program to convert string to consonantcase

const consonantCase = str => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toLowerCase() : c.toUpperCase()),
      ""
    );
};

console.log(consonantCase("hello world"));
```

```julia
# Write a Julia program to convert string to consonantcase

println("Enter a string: ")
sub = split(lowercase(readline()), "")
vowels = SubString{String}["a","e","i","o","u"]
s = ""

for i in sub
  if !(i in vowels)
    global s = s * uppercase(i)
  else
    global s = s * i
  end
end

println("Given string in consonantcase: ", s)
```

```kotlin
// Write a Kotlin program to convert string to consonantcase

fun consonantCase() {
    val sentence = "Hello, world!"
    var upperCaseConsonants = ""

    for(i in 0..sentence.length-1){
        if(sentence[i] == 'a' || sentence[i] == 'e' || sentence[i] == 'i' || sentence[i] == 'o' || sentence[i] == 'u'){
            upperCaseConsonants += sentence[i]
            continue
        }else{
            upperCaseConsonants += sentence[i].toUpperCase()
        }
    }
    println( "Normal: "+ "$sentence" + "\n" + "Converted:" +"$upperCaseConsonants")
}

consonantCase()
```

```perl
# Write a Perl program to convert string to consonantcase

sub consonantcase {
    my ($input) = @_;
    my %vowels = ('a' => 1, 'e' => 1, 'i' => 1, 'o' => 1, 'u' => 1);
    my @chars = split('', $input);
    for my $char (@chars) {
        if (exists $vowels{lc($char)}) {
            print lc($char);
        } else {
            print uc($char);
        }
    }
    print "\n";
}

# Test with input "hello world"
consonantcase("hello world");
```

```php
// Write a PHP program to convert string to consonantcase

<?php

function consonantCase($str) {
  $split =  str_split(strtolower($str));
  foreach ($split as $char) {
   if(preg_match('/^[^aeiou]*$/i', $char) === 0) {
     echo strtolower($char);
   } else {
     echo strtoupper($char);
   }
}

}


consonantCase("hello world")

?>
```

```python
# Write a Python program to convert string to consonantcase

# Python program to convert a string to consonantcase
def consonantCase(a: str):
    new_str = ""
    for i in a:
        new_str += i.lower() if i in ["a", "e", "i", "o", "u"] else i.upper()
    return new_str


x = input("Enter a string : ")
print("Consonant Case of", x, " is ", consonantCase(x))
```

```r
# Write a R program to convert string to consonantcase

consonantCase <- function(a) {
  vowels <- c("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")
  new_str <- ""
  for (i in seq_len(nchar(a))) {
    letter <- substr(a, i, i)
    new_str <- paste0(new_str, ifelse(letter %in% vowels, tolower(letter), toupper(letter)))
  }
  return(new_str)
}
x <- "hello world"
result <- consonantCase(x)
cat("Consonant Case of '", x, "' is '", result, "'\n")
```

```ruby
# Write a Ruby program to convert string to consonantcase

def convertStringToConsonantCase string
    vowels = ['a','e','i','o','u']

    newstr = []
    string.split("").each do |letter|
        vowels.include?(letter) ? newstr << letter.downcase : newstr << letter.upcase
    end

    puts newstr.join("")
end

convertStringToConsonantCase "hello world"
```

```rust
// Write a Rust program to convert string to consonantcase

use std::io;

fn main() {
    println!("Enter a string:");
    let mut input = String::new();

    // Reading input from user and handling possible errors
    if let Err(e) = io::stdin().read_line(&mut input) {
        eprintln!("Failed to read line: {}", e);
        return;
    }

    // Processing the input string
    match to_consonantcase(&input.trim()) {
        Ok(consonantcase_string) => println!("Consonantcase: {}", consonantcase_string),
        Err(e) => eprintln!("Error processing string: {}", e),
    }
}

fn to_consonantcase(s: &str) -> Result<String, &'static str> {
    // Check for empty string
    if s.is_empty() {
        return Err("Input string is empty");
    }

    let transformed = s.chars().map(|c| {
        match c {
            'a' | 'e' | 'i' | 'o' | 'u' |
            'A' | 'E' | 'I' | 'O' | 'U' => c.to_lowercase().to_string(),
            _ => c.to_uppercase().to_string(),
        }
    }).collect();

    Ok(transformed)
}
```

```scala
// Write a Scala program to convert string to consonantcase

object ConsonantCaseConverter {
  def isVowel(c: Char): Boolean = {
    "AEIOUaeiou".contains(c)
  }

  def consonantCase(input: String): String = {
    input.map {
      case c if !c.isLetter => c
      case c if isVowel(c) => c.toLower
      case c => c.toUpper
    }
  }

  def main(args: Array[String]): Unit = {
    println("Enter a string: ")
    val inputString = scala.io.StdIn.readLine()
    val convertedString = consonantCase(inputString)
    println("Consonant Case String: " + convertedString)
  }
}
```

```swift
// Write a Swift program to convert string to consonantcase

import Swift
import Foundation

let initialString = "helloworld"
let vowelString = "aeiouAEIOU"
var result = ""

for char in initialString {
  if vowelString.contains(char) {
    result += char.lowercased()
  } else {
    result += char.uppercased()
  }
}

print(result)
```

```typescript
// Write a TypeScript program to convert string to consonantcase

const convertToConsonantcase = (input: string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return input
    .toLowerCase()
    .split("")
    .map((letter: string) =>
      vowels.includes(letter) ? letter : letter.toUpperCase()
    )
    .join("");
};

console.log(convertToConsonantcase("hello world"));
```
