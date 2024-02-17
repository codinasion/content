---
title: "Convert String To Pathcase"
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
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "RiteshK-611",
    "anandfresh",
    "Osher160",
    "rafaover",
    "rksp25",
    "joao-vitor-souza",
    "Nitya-Pasrija",
    "PoweredByCaffein",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2744
description: "Write a program to convert string to pathcase."
---

## Write a program to convert string to pathcase

Pathcase is a style of writing in which all letters are lowercase and spaces are replaced with forward slashes.

```
Input  : "hello world"
Output : "hello/world"
```

---

```c
// Write a C program to convert string to pathcase

#define _POSIX_C_SOURCE 200809L
#include <stdio.h> /* printf, scanf */
#include <stdlib.h> /* fgets, malloc, free */


void ConvertStringToPathcase(char *str);


int main()
{
    char *str = NULL;
    int is_good = 0;
    size_t size = 0;

    if(scanf("%lu",&size) != 1)
    {
        return -1;
    }

    str = (char *)malloc(sizeof(char) * size);

    /* discard \n of scanf so i can give getline new input */
    scanf("%c", (char *) stdin);

    is_good = getline(&str,&size,stdin);

    if(is_good == -1)
    {
        free(str);
        return -1;
    }

    ConvertStringToPathcase(str);

    printf("%s\n",str);

    free(str);

    return 0;
}

void ConvertStringToPathcase(char *str)
{

    while(*str != '\0')
    {
        if(*str == ' ')
        {
            *str = '/';
        }

        if(*str >= 'A' && *str <= 'Z')
        {
            *str += 32;
        }

        ++str;
    }
}
```

```csharp
// Write a C# program to convert string to pathcase

using System;
class Pathcase {

    public static void Main()
    {
        String str = "hello world";
        Console.WriteLine("Path case: " + str.Replace(' ', '/'));
    }
}
```

```cpp
// Write a C++ program to convert string to pathcase

#include <cstring>
#include <iostream>
using namespace std;

int main()
{
    string str;
    getline(cin, str);
    for (int i = 0; i < str.length(); ++i) {
        if (str[i] == ' ') {
            str[i] = '/';
        }
    }
    cout << str << endl;
    return 0;
}
```

```go
// Write a Go program to convert string to pathcase

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// We are using a bufio reader as the scanf method does not allow taking arbitrary number inputs with spaces
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("Please enter a string: ")
	line, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Failed to take input:", err)
	}

	fmt.Printf("Input: %s", line)
	line = strings.ReplaceAll(line, " ", "/")
	fmt.Printf("Output: %s", line)
}
```

```java
// Write a Java program to convert string to pathcase

class replaceSpace
{
	public static void main(String []args)
	{
	    String str = "Trial string";
	    String s="";
	    for (int i = 0; i < str.length(); ++i) {
			if (str.charAt(i) == ' ')
				s += '/';
			else
				s += str.charAt(i);
		}
		System.out.println(s);
	}
}
```

```javascript
// Write a JavaScript program to convert string to pathcase

function stringToPathCase(str) {
  let toPathcase = str.split("");
  console.log(toPathcase);
  for (let i = 0; i < toPathcase.length; i++) {
    if (
      toPathcase[i] === "," ||
      toPathcase[i] === "?" ||
      toPathcase[i] === "/"
    ) {
      toPathcase[i] = "";
    }

    if (toPathcase[i] === " ") {
      console.log("true");
      toPathcase[i] = "/";
    }
  }
  console.log(toPathcase.join(""));
}

stringToPathCase("hello world, good morning");
```

```julia
# Write a Julia program to convert string to pathcase

println("Enter a string: ")
s = readline()
s = replace(lowercase(s), " " => "/")
println("Given string in pathcase: ", s)
```

```kotlin
// Write a Kotlin program to convert string to pathcase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Camel Case: " + ConvertStringToPathcase(min!!.split(" ")))

}

private fun ConvertStringToPathcase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day);
        } else {
            buffer.append("/").append(day)
        }
    }

    return buffer.toString()
}
```

```php
// Write a PHP program to convert string to pathcase

<?php
	$str = "String that we are gonna convert";
  for ($i = 0; $i < strlen($str); ++$i)
  {
     if ($str[$i] == ' ')
      {
        $str[$i] = '/';
      }
  }
  echo $str . "\n";
?>
```

```python
# Write a Python program to convert string to pathcase

str = input("Enter string: ")
for i in range(0, len(str), 1):
    if str[i] == " ":
        str = str.replace(str[i], "/")
print(str)
```

```ruby
# Write a Ruby program to convert string to pathcase

puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:downcase).join('/')
puts result
```

```typescript
// Write a TypeScript program to convert string to pathcase

function stringToPathCase(str: any) {
  const toPathcase = str.split("");
  console.log(toPathcase);
  for (let i = 0; i < toPathcase.length; i++) {
    // to remove other characters
    if (
      toPathcase[i] === "," ||
      toPathcase[i] === "?" ||
      toPathcase[i] === "/"
    ) {
      toPathcase[i] = "";
    }

    // to remove white space
    if (toPathcase[i] === " ") {
      console.log("true");
      toPathcase[i] = "/";
    }
  }
  console.log(toPathcase.join(""));
}

stringToPathCase("hello world, good morning");
```
