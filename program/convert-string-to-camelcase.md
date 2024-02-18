---
title: "Convert String To Camelcase"
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
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "apurvagandhi",
    "RiteshK-611",
    "rafaover",
    "rksp25",
    "manishankardurai",
    "vedha-vikash-pixel",
    "astitva0011",
    "i-am-tj",
    "sanjeev0210",
    "Ludof63",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T05:01:51Z
trackId: 3221
description: "Write a program to convert string to camelcase."
---

## Table of contents

## Write a program to convert string to camelcase

Camelcase is a style of writing in which the first letter of each word is capitalized except the first word.

```
Input  : "hello world"
Output : "helloWorld"
```

---

### C

```c
// Write a C program to convert string to camelcase

#include <stdio.h>
#include <stdlib.h>
int main()
{
    char str[100],camelcase[100];
    int flag=0,i=0,j=0;
    printf("Enter a sentence\n");
    gets(str);
    printf("Original String = %s\n",str);
    while(str[i]!='\0')
    {
        if(str[i]==' ')
        {
           i++;
           flag=1;
           continue;
        }
        if(flag==1)
        {
            camelcase[j]=str[i]-32;
            flag=0;
        }
        else
        {
            camelcase[j]=str[i];
        }
        j++;
        i++;
    }
    printf("Camel Case = %s",camelcase);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert string to camelcase

using System;
class CamelCase
{
    static void convert(String s)
    {
        int cnt= 0;
        int n = s.Length;
        char []ch = s.ToCharArray();
        int res_ind = 0;

        for (int i = 0; i < n; i++)
        {
            if (ch[i] == ' ')
            {
                cnt++;
                ch[i + 1] = char.ToUpper(ch[i + 1]);
                continue;
            }
            else
                ch[res_ind++] = ch[i];
        }

        for(int i = 0; i < n - cnt; i++)
            Console.Write(ch[i]);
    }

    public static void Main(String []args)
    {
        String str = "hello world";
        convert(str);
    }
}
```

### C++

```cpp
// Write a C++ program to convert string to camelcase

#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    getline(cin, s);

    int ind = 0;
    for (int i = 0; i < s.length(); i++){
        if (s[i] == ' '){
            s[i + 1] = toupper(s[i + 1]);
            continue;
        }
        else
            s[ind++] = s[i];
    }

    cout << s.substr(0, ind) << endl;
    return 0;
}
```

### Go

```go
// Write a Go program to convert string to camelcase

package main

import (
	"fmt"
	"strings"
)

func camelcase(str string) string {
	words := strings.Split(str, " ")
	new_words := []string{}
	i := 0
	for _, word := range words {
		if len(word) > 1 && i > 0 {
			new_words = append(new_words, strings.ToUpper(word[0:1])+(word[1:]))
		} else {
			new_words = append(new_words, word)
		}
		i++
	}
	return strings.Join(new_words, "")
}

func main() {
	str := "hello coders"
	fmt.Println(camelcase(str))
}
```

### Java

```java
// Write a Java program to convert string to camelcase

import java.util.Scanner;

public class ConvertStringToCamelCase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input: ");
        String input = scanner.nextLine();
        String[] inputArray = input.split(" ");
        StringBuilder output = new StringBuilder();
        for(int i = 0; i < inputArray.length; i++) {
            if(i == 0) {
                output.append(inputArray[i]);
            } else {
                output.append(String.valueOf(inputArray[i].charAt(0)).toUpperCase()).append(inputArray[i].substring(1));
            }
        }
        System.out.println("Output: " + output);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert string to camelcase

function convertStringToCamelCase(str) {
  var splitVal = str.split(" ");
  for (var i = 1; i < splitVal.length; i++) {
    splitVal[i] =
      splitVal[i].substr(0, 1).toUpperCase() + splitVal[i].substr(1);
  }
  return splitVal.join("");
}

console.log(convertStringToCamelCase("hello world"));
```

### Julia

```julia
# Write a Julia program to convert string to camelcase

println("Enter a string: ")
sub = split(readline(), " ")
n = length(sub)
s = sub[1]

for i in 2:n
 global s = s * titlecase(sub[i])
end

println("Given string in camelcase: ", s)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert string to camelcase

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Camel Case: " + CamelCase(min!!.split(" ")))

}

private fun CamelCase(args: List<String>): String {
    val buffer = StringBuffer()
    for((index,day) in args.withIndex()){
        //println("$index :$day")
        if(index == 0) {
            buffer.append(day);
        } else {
            buffer.append(day.get(0).uppercase()).append(day.subSequence(1,day.length))
        }
    }

    return buffer.toString()
}
```

### Perl

```perl
# Write a Perl program to convert string to camelcase

my $str = 'hello world';
$_ = $str;
$_ = lc;
s/(?<=[^\W_]) +([^\W_])|_+/\U$1/g;
print;
```

### PHP

```php
// Write a PHP program to convert string to camelcase

<?php
function stringToCamelCase($string, $capitalizeFirstCharacter = false)
{
    $str = str_replace(' ', '', ucwords(str_replace(' ', ' ', $string)));
    if (!$capitalizeFirstCharacter) {
        $str[0] = strtolower($str[0]);
    }
    return $str;
}

echo stringToCamelCase('hello world');
?>
```

### Python

```python
# Write a Python program to convert string to camelcase

from re import sub

a = input()
# the below line removes _ or - with " ", then each word's first letter is made capital,
# and finally we proceed with replacing " " with ""
a = sub("r[_|-]", " ", a).title().replace(" ", "")
print("".join([a[0].lower(), a[1:]]))
```

### Ruby

```ruby
# Write a Ruby program to convert string to camelcase

puts 'Please, insert your string: '
user_input = gets.chomp
result = user_input.split(' ').map(&:capitalize).join
result[0] = result[0].downcase
puts result
```

### TypeScript

```typescript
// Write a TypeScript program to convert string to camelcase

function stringToCamelcase(str: string): string {
  let i: number = 0;
  const splitstr: string[] = str.split("");

  while (i < splitstr.length) {
    if (splitstr[i] === " ") {
      splitstr.splice(i, 1);
      splitstr[i] = splitstr[i].toUpperCase();
    }
    i++;
  }
  return splitstr.join("");
}

const str: string = "hello world";
console.log(stringToCamelcase(str)); // "helloWorld"
```
