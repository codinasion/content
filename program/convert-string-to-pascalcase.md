---
title: "Convert String To Pascalcase"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "julia",
    "go",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "anandfresh",
    "ApurvaR1",
    "harshraj8843",
    "apurvagandhi",
    "akkshayTandon",
    "RiteshK-611",
    "Bogumil-Sapinski-Mobica",
    "roshan798",
    "hi-Kartik2004",
    "rafaover",
    "rksp25",
    "joao-vitor-souza",
    "Avicenne-b",
    "Dheeraj0014",
    "Arbaz23",
    "VasireddyGanesh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T05:03:47Z
trackId: 4085
description: "Write a program to convert string to pascalcase."
---

## Write a program to convert string to pascalcase

Pascalcase is a style of writing in which the first letter of each word is capitalized.

```
Input  : "hello world"
Output : "HelloWorld"
```

---

```c
// Write a C program to convert string to pascalcase

#include<stdio.h>
#include<string.h>
#include<ctype.h>
char* toPascalCase(char *str){
	int flag = 1,index = 0;
	for(int i=0;i<strlen(str);i++) {
		if(str[i]==' '){
			flag = 1;
		}
		else if(flag == 1){
			flag = 0;
			str[index++] = toupper(str[i]);
		}
		else {
			str[index++] = tolower(str[i]);
		}
	}
	str[index] = '\n';
	return str;
}
void main(){
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("Input string: %s",str);
	printf("Input string in Pascal Case : %s",toPascalCase(str));
}
```

```csharp
// Write a C# program to convert string to pascalcase

using System;
using System.Globalization;

public class ConvertStringToPascalCase{
    public static void Main(){
        Console.WriteLine("Enter a string to convert it to PascalCase: ");
        string demoInput = Console.ReadLine();
        Console.WriteLine(converStringToPascalCase(demoInput).Replace(" ",""));
    }

    static string converStringToPascalCase(string s){
        TextInfo myTI = new CultureInfo("en-US",false).TextInfo;
        return myTI.ToTitleCase(s);
    }
}
```

```cpp
// Write a C++ program to convert string to pascalcase

#include <string>
#include <cctype>
#include <iostream>

std::string convertToPascalCase(std::string input_str){
    std::string pascalCaseStr;

    size_t pos = 0;
    size_t beg = 0;
    while( pos  != input_str.npos)
    {
        pos = input_str.find(" ", beg);
        std::string word = input_str.substr(beg, pos - beg );
        beg = pos + 1;
        word.front() = static_cast<char>(std::toupper(static_cast<unsigned char>(word.front())));
        pascalCaseStr.append(word);
    }
    return pascalCaseStr;
}


int main()
{
    std::cout << "Hello world and universe --> " << convertToPascalCase("Hello world and universe") << std::endl;
}
```

```go
// Write a Go program to convert string to pascalcase

package main

import (
	"fmt"
	"strings"
)

func toPascalCase(str string) string {
	words := strings.Split(str, " ")
	newWords := []string{}
	for _, word := range words {
		firstLetter := word[0]
		restOfWord := word[1:]
		newWord := strings.ToUpper(string(firstLetter)) + restOfWord
		newWords = append(newWords, newWord)
	}
	return strings.Join(newWords, "")
}

func main() {
	str := "hello world"
	fmt.Println("Input string:", str)
	fmt.Println("PascalCase string:", toPascalCase(str))
}
```

```java
// Write a Java program to convert string to pascalcase

import java.util.Scanner;

public class ConvertStringToPascalcase {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("saisir le mot ou la phrase : ");
        String a = sc.nextLine();
        System.out.println("Résultat : " + toTitleCase(a));
    }

    public static String toTitleCase(String input) {
        StringBuilder titleCase = new StringBuilder(input.length());
        boolean nextTitleCase = true;

        for (char c : input.toCharArray()) {
            if (Character.isSpaceChar(c)) {
                nextTitleCase = true;
            } else if (nextTitleCase) {
                c = Character.toTitleCase(c);
                nextTitleCase = false;
            }

            titleCase.append(c);
        }

        return titleCase.toString().replaceAll("\\s", "");
    }

}
```

```javascript
// Write a JavaScript program to convert string to pascalcase

const pascalCase = string => {
  function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, "g"), " ")
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w*)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  }
  const newText = toPascalCase(string);

  return newText;
};
```

```julia
# Write a Julia program to convert string to pascalcase

println("Enter a string: ")
sub = split(readline(), " ")
s = ""

for i in sub
 global s = s * titlecase(i)
end

println("Given string in pascalcase: ", s)
```

```kotlin
// Write a Kotlin program to convert string to pascalcase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Pascal Case: " + ConvertStringToPascalcase(min!!.split(" ")))

}

private fun ConvertStringToPascalcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        if(index == 0) {
            buffer.append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        } else {
            buffer.append(" ").append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        }
    }

    return buffer.toString()
}
```

```perl
# Write a Perl program to convert string to pascalcase

my $str = 'hello world';
$_ = $str;
$_ = ucfirst;
s/(?<=[^\W_]) +([^\W_])|_+/\U$1/g;
print;
```

```php
// Write a PHP program to convert string to pascalcase

<?php

function pascalCase($string, $capitalizeFirstChar = false) {
   $str = str_replace(' ', '', ucwords($string, ' '));
   if (!$capitalizeFirstChar) {
      $str = lcfirst($str);
   }
   return $str;
}
echo pascalCase('hello world');

?>
```

```python
# Write a Python program to convert string to pascalcase

input_string = input()
output_string = ""
for word in input_string.split(" "):
    # capitalize() is a buit-in function in python that converts first character in String to uppercase and remaining characters to lowercase
    output_string += word.capitalize()
print(output_string)
```

```r
# Write a R program to convert string to pascalcase

convertToPascalCase <- function(str) {
  words <- unlist(strsplit(str, " "))  # Split the string into words
  words <- sapply(words, function(word) {
    if (nchar(word) > 0) {
      paste0(toupper(substr(word, 1, 1)), tolower(substr(word, 2, nchar(word))))
    } else {
      ""
    }
  })
  return(paste0(words, collapse = ""))
}

# Test the function with the input "hello world"
input_str <- "hello world"
output_str <- convertToPascalCase(input_str)
print(output_str)
```

```ruby
# Write a Ruby program to convert string to pascalcase

puts "Please, insert your string: "
user_input = gets.chomp
result = user_input.split(' ').map { |word| word.capitalize }.join
puts result
```

```typescript
// Write a TypeScript program to convert string to pascalcase

const toPascalCase = str =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

console.log(toPascalCase("hello world"));
```
