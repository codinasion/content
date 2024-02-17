---
title: "Convert String To Reversecase"
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
    "pradeepch2107",
    "Shreyash3110",
    "harshraj8843",
    "Rohan-Kalgutkar",
    "bhushanmarathe",
    "pranavsilimkhan",
    "REVERB283",
    "vedantpople4",
    "rsitters",
    "RiteshK-611",
    "Noriomusha",
    "yashasvini121",
    "Osher160",
    "anandfresh",
    "jfinley6",
    "skevprog",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-26T12:04:13Z
trackId: 5163
description: "Write a program to convert string to reversecase."
---

## Write a program to convert string to reversecase

Reversecase is a style of writing in which all lowercase letters are converted to uppercase and all uppercase letters are converted to lowercase.

```
Input  : "hello world"
Output : "HELLO WORLD"
```

---

```c
// Write a C program to convert string to reversecase

#include <stdio.h> /* printf */

void ConvertStringToReverseCase(char *str);

int main()
{
    char str[40];

    fgets(str, 40, stdin);

    ConvertStringToReverseCase(str);

    printf("%s\n", str);

    return 0;
}

void ConvertStringToReverseCase(char *str)
{
    char *curr = str;

    while(*curr != '\0')
    {
        /* -checks if the curr place of the string is high | low case*/

        /* -add / remove 32( the difference between lower case and high case) to match the new ascii value*/
        if((*curr >= 'A') && (*curr <= 'Z'))
        {
            *curr = *curr + 32;
        }

        else if((*curr >= 'a') && (*curr <= 'z'))
        {
            *curr = *curr - 32;
        }

        ++curr;
    }
}
```

```csharp
// Write a C# program to convert string to reversecase

using System;
public class GFG {

static public void Main()
  {
 Console.WriteLine("Enter a String : ");

 string str = Console.ReadLine();
    string x = "";
    for (int i = 0; i < str.Length; i++) {
      char ch = str[i];
      if (Char.IsUpper(ch)) {
        x += Char.ToLower(ch);
      }
      else {
        x += Char.ToUpper(ch);
      }
    }
    Console.WriteLine("Reversecase of given String : "+x);
  }
}
```

```cpp
// Write a C++ program to convert string to reversecase

#include <iostream>
using namespace std;

string reversecase(string str){
    for (int i = 0; i < str.length(); i++){
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] = str[i] - 32;
        else if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] = str[i] + 32;
    }
    return str;
}

int main(){
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    cout << reversecase(str);
    return 0;
}
```

```dart
// Write a Dart program to convert string to reversecase

import 'dart:io';

void main() {
  //Asks user to enter a string
  stdout.write('Enter a string: ');
  //Reads users input
  String input = stdin.readLineSync()!;
  //Calls function to convert input to reverse case
  String reverseCaseString = reverseCase(input);
  //Prints reversed case string
  print(reverseCaseString);
}

String reverseCase(String str) {
  String reversed = '';
  //Iterates through each character of input string
  for (int i = 0; i < str.length; i++) {
    String char = str[i];
    //Checks if character is uppercase
    if (char == char.toUpperCase()) {
      //Converts uppercase character to lowercase and adds it to reversed string
      reversed += char.toLowerCase();
    } else {
      //Converts lowercase character to uppercase and adds it to reversed string
      reversed += char.toUpperCase();
    }
  }
  //Returns reversed case string
  return reversed;
}
```

```fsharp
// Write a F# program to convert string to reversecase

open System

// function to reverse the case of a given string
let reverseCase (inputString: string) =
    let mutable result = System.Text.StringBuilder()
    for c in inputString do
        if Char.IsLower c then
            result.Append(Char.ToUpper(c) |> string)
        else
            result.Append(Char.ToLower(c) |> string)
    result.ToString()

let inputString = "hello world"
let reversedString = reverseCase inputString
printfn "%s" reversedString
```

```go
// Write a Go program to convert string to reversecase

package main

import "fmt"

func main() {
	var s string
	fmt.Scanf("%s", &s)
	for int i=0;i<len(s);i++{
		if(s[i])
	}
	fmt.Println(s)
}
```

```haskell
-- Write a Haskell program to convert string to reversecase

import Data.Char (toUpper, toLower)

reverseCase :: String -> String
reverseCase = map (\c -> if isLower c then toUpper c else toLower c)

isLower :: Char -> Bool
isLower c = c >= 'a' && c <= 'z'

main :: IO ()
main = do
  let inputString = "hello world"
      outputString = reverseCase inputString
  putStrLn $ "Input: " ++ inputString
  putStrLn $ "Output: " ++ outputString
```

```java
// Write a Java program to convert string to reversecase

class Main
{
    public static String reverseCase(String str)
    {
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++)
        {
            chars[i] = Character.isUpperCase(chars[i])
                                ? Character.toLowerCase(chars[i])
                                : Character.toUpperCase(chars[i]);
        }
        return new String(chars);
    }

    public static void main(String[] args)
    {
        String str = "hello world";
        System.out.println(reverseCase(str));
    }
}
```

```javascript
// Write a JavaScript program to convert string to reversecase

function convertStringToReverseCase(str) {
  return str
    .split("")
    .map(char =>
      char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}
```

```julia
# Write a Julia program to convert string to reversecase

println("Enter s string: ")
str = readline()
reversed = ""
for c in str
  if islowercase(c)
    global reversed *= uppercase(c)
  elseif isuppercase(c)
    global reversed *= lowercase(c)
  else
    global reversed *= c
  end
end

println("Given string in reversecase: ", reversed)
```

```kotlin
// Write a Kotlin program to convert string to reversecase

fun String.reverseCaseOfString(): String {
    val inputCharArr = toCharArray() // Converting the input to char array
    var output = ""
    for (i in inputCharArr.indices) {
        output += if (inputCharArr[i].isUpperCase()) { // Checking the character is in uppercase or not
            inputCharArr[i].lowercaseChar() // Converting the char to lower case
        } else {
            inputCharArr[i].uppercaseChar() // Converting the char to upper case
        }
    }
    return output
}
```

```perl
# Write a Perl program to convert string to reversecase

sub reverseCase {
    my ($str) = @_;


    $str =~ tr/a-zA-Z/A-Za-z/;

    return $str;
}


my $inputString = "hello world";
my $outputString = reverseCase($inputString);


print "Input: $inputString\n";
print "Output: $outputString\n";
```

```php
// Write a PHP program to convert string to reversecase

<?php

$str = "hello world";

print strtolower($str) ^ strtoupper($str) ^ $str;

?>
```

```python
# Write a Python program to convert string to reversecase

string = input("Enter the String:")
print("Reversecase for the given String : ", string.swapcase())
```

```r
# Write a R program to convert string to reversecase

convert_to_reverse_case <- function(input_string) {
  result <- ""

  for (char in strsplit(input_string, NULL)[[1]]) {
    if (char %in% letters) {
      result <- paste0(result, ifelse(char %in% toupper(letters), tolower(char), toupper(char)))
    } else {
      result <- paste0(result, char)
    }
  }

  return(result)
}

# Example usage
input_str <- "hello world"
output_str <- convert_to_reverse_case(input_str)

# Print the result
cat("Input String: ", input_str, "\n")
cat("Output String: ", output_str, "\n")
```

```ruby
# Write a Ruby program to convert string to reversecase

def convertStringToReverseCase string
    puts string.swapcase
end

convertStringToReverseCase "hello world"
```

```rust
// Write a Rust program to convert string to reversecase

fn main(){
    let input = "hello world";
    let mut ans = String::with_capacity(input.len());
    for i in input.chars(){
        if i.is_ascii_uppercase(){
            ans.push(i.to_ascii_lowercase());
        } else if i.is_ascii_lowercase(){
            ans.push(i.to_ascii_uppercase());
        } else {ans.push(i);}
    }
    println!("{}", ans);
}
```

```scala
// Write a Scala program to convert string to reversecase

object ReverseCaseConverter {
  def reverseCase(input: String): String = {
    input.map {
      case c if c.isLower => c.toUpper
      case c if c.isUpper => c.toLower
      case c => c
    }
  }

  def main(args: Array[String]): Unit = {
    println("Enter a string: ")
    val inputString = scala.io.StdIn.readLine()
    val reversedString = reverseCase(inputString)
    println("Reversed Case String: " + reversedString)
  }
}
```

```swift
// Write a Swift program to convert string to reversecase

func reverseCase(_ input: String) -> String {
    var result = ""

    for char in input {
        if char.isLowercase {
            result.append(char.uppercased())
        } else {
            result.append(char.lowercased())
        }
    }

    return result
}

// Take input from the user
print("Enter a string:")
if let inputString = readLine() {
    let outputString = reverseCase(inputString)
    print("Output:", outputString)
} else {
    print("Error reading input.")
}
```

```typescript
// Write a TypeScript program to convert string to reversecase

const string2ReverseCase = (str: string): string => {
  return str
    .split("")
    .map(char =>
      char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
};

console.log(string2ReverseCase("hello world"));
```
