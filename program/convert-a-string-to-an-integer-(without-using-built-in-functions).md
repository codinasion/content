---
title: "Convert A String To An Integer (without Using Built In Functions)"
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
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "larsjarred9",
    "madhusgowda",
    "anandfresh",
    "Osher160",
    "ritika4554244",
    "Yarnacle",
    "hi-Kartik2004",
    "rksp25",
    "joao-vitor-souza",
    "smitioswal",
    "ntoniocp",
    "victoriacheng15",
    "ahmedheltaher",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 2481
description: "Write a program to convert a string to an integer (without using built in functions)."
---

## Table of contents

## Write a program to convert a string to an integer (without using built-in functions)

```
Input  : "123"
Output : 123
```

---

### C

```c
// Write a C program to convert a string to an integer (without using built in functions)

#include <stdio.h> /* printf, scanf */

/* assuming str includes only valid ascii numbers '0' - '9' */
int Atoi(char *str);

int main()
{
    /* test -- hardcoded and on stack */
    char str[100] = {0};

    scanf("%s",str);

    printf("%d\n",Atoi(str));

    return 0;
}

int Atoi(char *str)
{
    int ret = 0;

    while(*str != '\0')
    {
        ret *= 10;
        ret += *str - '0';

        ++str;
    }

    return ret;
}
```

### C#

```csharp
// Write a C# program to convert a string to an integer (without using built in functions)

using System;
class StringToInteger{
public static void convert(string s)
{
    int num = 0;
    int n = s.Length;

    for(int i = 0; i < n; i++)
        num = num * 10 + ((int)s[i] - 48);
    Console.Write(num);
}

public static void Main(string[] args)
{
    string s = "123";
    convert(s);
}
}
```

### C++

```cpp
// Write a C++ program to convert a string to an integer (without using built in functions)

#include <string>
#include <cmath>

using namespace std;

int ConvertAStringToAnInteger(string str) {
	int sign;
	if (str[0] == '-') {
		sign = -1;
		str = str.substr(1);
	}
	else {
		sign = 1;
	}

	int n = 0;
	for (int i = 0; i < str.size(); i++) {
		n += (str[i] - '0') * pow(10,str.size() - i -1); // char - '0' == (int) char
	}

	return n;
}
```

### Go

```go
// Write a Go program to convert a string to an integer (without using built in functions)

package main

import (
	"fmt"
	"math"
	"reflect"
)

// Returns the passed number string as int. If the provided string isn't right it returns -1
func stringToInt(str string) int {
	var finalInt int = 0

	for i := len(str) - 1; i >= 0; i-- {
		if str[i] >= 48 && str[i] <= 57 {
			power := float64(len(str) - i - 1)
			finalInt += int(str[i]-48) * int(math.Pow(10, power))
		} else {
			return -1
		}
	}

	return finalInt
}

func main() {
	result := stringToInt("230500")
	fmt.Println(result)
	fmt.Println(reflect.TypeOf(result))
}
```

### Java

```java
// Write a Java program to convert a string to an integer (without using built in functions)

public class ConvertAStringToAnInteger {

//Driven Code
        public static void main(String args[]) {

            // Given string of number

            String convertingString = "123456";
            System.out.println("String Before Conversion :  " + convertingString);
            int output = stringToint(convertingString);    // Function Call
            System.out.println("int value as output " + output); // Print the answer

        }


        public static int stringToint(String str) {
            int i = 0, number = 0;              // Initialize a variable
            boolean isNegative = false;
            int len = str.length();
            if (str.charAt(0) == '-') {         //checking string
                isNegative = true;
                i = 1;
            }
            while (i < len) {                 // Iterate till length of the string
                number *= 10;
                number += (str.charAt(i++) - '0');
            }
            if (isNegative)
                number = -number;
            return number;
        }
    }
```

### JavaScript

```javascript
// Write a JavaScript program to convert a string to an integer (without using built in functions)

function convertStringToInteger(str) {
  let [isNegative, result, num] = [false, str, 0];

  if (result[0] === "-") {
    isNegative = true;
    result = result.slice(1);
  }

  for (let i = 0; i < result.length; i += 1) {
    const charCode = result.charCodeAt(i) - 48;
    const pow = 10 ** (result.length - i - 1);
    num += charCode * pow;
  }

  return isNegative ? num * -1 : num;
}

const str = "123";
console.log(`Input: ${str}, type: ${typeof str}`);
console.log(
  `Output: ${convertStringToInteger(
    str
  )}, type: ${typeof convertStringToInteger(str)}`
);

const strWithNegative = "-123";
console.log(`Input: ${strWithNegative}, type: ${typeof strWithNegative}`);
console.log(
  `Output: ${convertStringToInteger(
    strWithNegative
  )}, type: ${typeof convertStringToInteger(strWithNegative)}`
);
```

### Kotlin

```kotlin
// Write a Kotlin program to convert a string to an integer (without using built in functions)

fun main() {
    print("Input : ")
    println()
    var input = readLine()

    println("Convert string to Integer without using in built function : " + ConvertAStringToAnInteger(input!!))

}

private fun ConvertAStringToAnInteger(num: String):Int {
    val number = Integer.valueOf(num)

    return number
}
```

### PHP

```php
// Write a PHP program to convert a string to an integer (without using built in functions)

<?php

/**
 * Convert a string to an integer (without using built-in functions)
 *
 * @param string $str
 * @return int
 */

function stringToInt($str) {
    $result = 0;
    $isNegative = false;
    $i = 0;

    // If the first character is a minus sign, set the negative value
    if ($str[0] == '-') {
        $isNegative = true;
        $i = 1;
    }

    // Loop through the string and convert it to integer
    for (; $i < strlen($str); $i++) {
        $char = $str[$i];

        // If the character is a digit, convert it to integer
        if ($char >= '0' && $char <= '9') {
            // Multiply the result by 10 and add the digit
            $result = $result * 10 + (ord($char) - ord('0'));
        } else {
            // If the character is not a digit, break out of the loop
            break;
        }
    }

    // If the number is negative, convert the result to negative
    if ($isNegative) {
        $result = -$result;
    }

    return $result;
}

// Test cases
$string = "2356234";
$integer = stringToInt($string);

echo "String: $string\n";
echo "Integer: $integer\n";
?>
```

### Python

```python
# Write a Python program to convert a string to an integer (without using built in functions)

# -*- coding: utf-8 -*-
"""
Created on Sun Oct  9 16:08:39 2022

@author: smiti
"""

# Python3 program to convert a string to an integer (without using built-in functions)


def convert(s: str) -> int:  # function that will do the needful
    num = 0  # Initialize an integer variable

    # Iterate through all the characters of the string
    for i in s:
        # Subtract ascii value of 0 from the current digit
        num = num * 10 + (ord(i) - ord("0"))

    return num  # return the ans


# Take input:
print(convert("123"))
```

### Ruby

```ruby
# Write a Ruby program to convert a string to an integer (without using built in functions)

def string_to_integer(str)

  result = 0
  sign = 1

  if str[0] == '-'
    sign = -1
    str = str[1..-1] # Remove the negative sign from the string
  end

  str.each_char do |char|
    if char >= '0' && char <= '9'
      digit = char.ord - '0'.ord # Convert the character to an integer
      result = result * 10 + digit # Add the digit to the result
    else
      raise ArgumentError, "Invalid character: #{char}"
    end
  end

  return result * sign
end

# Input string
print "Enter a string: "
input_str = gets.chomp

begin
  integer_result = string_to_integer(input_str)
  puts "Output: #{integer_result}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
```

### TypeScript

```typescript
// Write a TypeScript program to convert a string to an integer (without using built in functions)

/**
 * This function converts a string to an integer without using built-in functions with respect to the negative sign and the decimal point
 * @param {string} str - The string to be converted
 * @returns {number} - The converted integer
 * @example
 * convertStringToInteger("123") // returns 123
 * convertStringToInteger("123.45") // returns 123
 *
 *
 * @author [Ahmed Eltaher](https://github.com/ahmedheltaher)
 *
 */
function convertStringToInteger(str: string): number {
  let isNegative = false;
  if (str[0] === "-") {
    isNegative = true;
    str = str.slice(1);
  }
  if (str.indexOf(".") !== -1) {
    str = str.slice(0, str.indexOf("."));
  }

  // Convert the string to an integer
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += (str.charCodeAt(i) - 48) * Math.pow(10, str.length - i - 1);
  }

  // Handle negative numbers
  return num * (isNegative ? -1 : 1);
}
```
