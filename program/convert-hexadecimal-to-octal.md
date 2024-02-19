---
title: "Convert Hexadecimal To Octal"
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
    "harshraj8843",
    "madhusgowda",
    "anandfresh",
    "RiteshK-611",
    "AdityaNarayanPradhan",
    "ohad1s",
    "joao-vitor-souza",
    "UsmanFani",
    "CodingWithHardik",
    "jyotik09",
    "rahmat-dev",
    "amoghrajesh",
    "Anuj-Rathore24",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1432
description: "Write a program to convert hexadecimal to octal."
---

## Table of contents

## Write a program to convert hexadecimal to octal

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert a hexadecimal number to octal, we can use the following algorithm:

1. Convert the hexadecimal number to decimal.
2. Convert the decimal number to octal.

```
Input  : A
Output : 12
```

---

### C

```c
// Write a C program to convert hexadecimal to octal

#include <stdio.h>
#include <string.h>

// This gives value of char in decimal
int NumberCharToValue(char ch, int base)
{
    if (ch >= '0' && ch <= '9')
    {
        return (int)(ch - '0');
    }
    // next will be A,B,C....
    return ((int)(ch - 'A') + 10);
}
// This gives char of value in decimal
char NumberValueToChar(int num, int base)
{
    if (num <= 9)
    {
        return (char)('0' + num);
    }
    // num will be 10,11,12 ...
    return (char)(num - 10 + 'A');
}
// idea is to convert input to decimal then from decimal to output
void convertNumberSystem(char *input, char *output, int fromBase, int toBase)
{
    // convert input to decimal
    int inputLength = strlen(input);
    long long decimal = 0, digitPower = 1;

    for (int i = inputLength - 1; i >= 0; i--)
    {
        decimal += NumberCharToValue(input[i], fromBase) * digitPower;
        digitPower *= fromBase;
    }
    // convert decimal to reversed output
    int outputIndex = 0;
    while (decimal != 0)
    {
        output[outputIndex++] = NumberValueToChar(decimal % toBase, toBase);
        decimal /= toBase;
    }

    // reverse the output to get actual output
    for (int i = 0; i < outputIndex / 2; i++)
    {
        int temp = output[i];
        output[i] = output[outputIndex - i - 1];
        output[outputIndex - i - 1] = temp;
    }
}

int main()
{

    char input[10000], output[10000];

    scanf("%s", input);

    convertNumberSystem(input, output, 16, 8); // This function can convert from a number from any base to another base

    printf("%s\n", output);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert hexadecimal to octal

using System;
class HexaToOctal{
public static void Main(string[] args)
{
  int dec = 0;
  Console.WriteLine ("Please enter a hexadecimal value : ");
  string hexa = Console.ReadLine();
  int c = hexa.Length - 1;

  for(int i = 0; i < hexa.Length ; i ++ )
  {
    char ch = hexa[i];
    switch (ch)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        dec = dec + Int32.Parse(ch.ToString())*
                               (int)Math.Pow(16, c);
        c--;
        break;
      case 'a':
      case 'A':
        dec = dec + 10 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'b':
      case 'B':
        dec = dec + 11 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'c':
      case 'C':
        dec = dec + 12 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'd':
      case 'D':
        dec = dec + 13 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'e':
      case 'E':
        dec = dec + 14 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'f':
      case 'F':
        dec = dec + 15 * (int)Math.Pow(16, c);
        c--;
        break;
      default:
        Console.Write("Invalid hexa input");
        break;
    }
  }

  string oct = "";
  while(dec > 0)
  {
    oct = dec % 8 + oct;
    dec = dec / 8;
  }

  Console.Write("Equivalent Octal Value = "+oct);
}
}
```

### C++

```cpp
// Write a C++ program to convert hexadecimal to octal

#include <iostream>
#include <string>
#include <unordered_map>
#include <math.h>

using namespace std;

string hex_to_oct(string hex_num) {
    // Map containing hexadecimal to decimal conversion
    unordered_map<char, int> hex_to_dec_map = {
            {'0', 0},
            {'1', 1},
            {'2', 2},
            {'3', 3},
            {'4', 4},
            {'5', 5},
            {'6', 6},
            {'7', 7},
            {'8', 8},
            {'9', 9},
            {'A', 10},
            {'B', 11},
            {'C', 12},
            {'D', 13},
            {'E', 14},
            {'F', 15}
    };
    int decimal = 0;
    int p = hex_num.length() - 1;
    for (char d: hex_num) {
        decimal += pow(16, p) * hex_to_dec_map[d];
        p--;
    }
    string octal_str = "";
    while (decimal != 0) {
        int rest = decimal % 8;
        octal_str = to_string(rest) + octal_str;
        decimal /= 8;
    }
    return octal_str;
}

int main() {
    string hex_num;
    cout << "Type a HexaDecimal number: "; // Type a number and press enter
    cin >> hex_num; // Get user input from the keyboard
    cout << "Your Octal number is:" << endl;
    cout << hex_to_oct(hex_num) << endl;
    return 0;
}
```

### Go

```go
// Write a Go program to convert hexadecimal to octal

package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	var hex string
	fmt.Scanln(&hex)

	// first convert to decimal
	decimal, err := strconv.ParseInt(hex, 16, 64)

	if err != nil {
		fmt.Errorf("could not convert hex: %v to octal", hex)
		os.Exit(1)
	}

	// convert the decimal to octal
	oct := fmt.Sprintf("%o", decimal)
	fmt.Printf("the octal for hex: %v is oct: %v \n", hex, oct)
}
```

### Java

```java
// Write a Java program to convert hexadecimal to octal

public class hexadecimalToOctal {
    static String hexatoOctal(String hex){
        Integer binary=Integer.parseInt(hex,16);
        return Integer.toOctalString(binary);
    }

    public static void main(String[] args) {
        System.out.println(hexatoOctal("7B316"));
    }

  }
```

### JavaScript

```javascript
// Write a JavaScript program to convert hexadecimal to octal

function convertHexadecimalToOctal(hex) {
  const decimal = parseInt(hex, 16);
  return decimal.toString(8);
}

let input = "A";
console.log(
  `Hexadecimal '${input}' in octal is: '${convertHexadecimalToOctal(input)}'`
);
```

### Julia

```julia
# Write a Julia program to convert hexadecimal to octal

println("Enter a hexadecimal number: ")
x = readline()
y = parse(Int, x, base=16)
y = string(y, base=8)
println("Octal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert hexadecimal to octal

import kotlin.math.pow

fun main() {
    print("Enter Hexadecimal Number to Convert in Octal: ")
    val num = readln()
    print("Octal Number is: ${convertHexadecimalToOctal(num)}")
}

private fun convertHexadecimalToOctal(nums: String): Int {
    val decimal = convertHexadecimalToDecimal(nums)
    return convertDecimalToOctal(decimal)
}

private fun convertDecimalToOctal(decimal: Int): Int {
    var digit = decimal % 8
    var rem = decimal
    var i = 0
    var octal = 0
    while (rem != 0) {
        octal += digit * 10.0.pow(i).toInt()
        rem /= 8
        digit = rem % 8
        i++
    }
    return octal
}

private fun convertHexadecimalToDecimal(str: String): Int {
    var num = 0
    var i = str.lastIndex
    str.forEach {
        val digit = when (it) {
            'A' -> 10
            'B' -> 11
            'C' -> 12
            'D' -> 13
            'E' -> 14
            'F' -> 15
            else -> it - '0'
        }
        num += 16.0.pow(i).toInt() * digit
        i--
    }
    return num
}
```

### Perl

```perl
# Write a Perl program to convert hexadecimal to octal

print "Enter the hexadecimal value :";
my $hex_str = hex(<STDIN>);
my $oct_value = sprintf("%o", $hex_str);
print "Equivalent Octal value :".$oct_value;
```

### PHP

```php
// Write a PHP program to convert hexadecimal to octal

<?php

function convert_hexadecimal_to_octal($input)
{
	return decoct(hexdec($input));
}

echo convert_hexadecimal_to_octal('A');
```

### Python

```python
# Write a Python program to convert hexadecimal to octal

def HexToOct(h):
    return oct(int(h, 16))


print("Input  : ", end="")
hnum = input()

onum = HexToOct(hnum)
print("Output : ", onum[2:])
```

### Ruby

```ruby
# Write a Ruby program to convert hexadecimal to octal

def hex_to_decimal(hex)
  decimal = 0
  hex = hex.reverse.upcase # Reverse the hexadecimal string and convert to uppercase

  hex.each_char.with_index do |char, index|
    digit_value = case char
      when '0'..'9' then char.to_i
      when 'A'..'F' then char.ord - 'A'.ord + 10
      else
        raise ArgumentError, "Invalid hexadecimal digit: #{char}"
    end

    decimal += digit_value * (16 ** index)
  end

  return decimal
end

def decimal_to_octal(decimal)
  octal = ""
  while decimal > 0
    remainder = decimal % 8
    octal = remainder.to_s + octal
    decimal /= 8
  end

  return octal
end

# Input hexadecimal number
print "Enter a hexadecimal number: "
hexadecimal = gets.chomp

begin
  decimal = hex_to_decimal(hexadecimal)
  octal = decimal_to_octal(decimal)
  puts "Octal representation: #{octal}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
```

### TypeScript

```typescript
// Write a TypeScript program to convert hexadecimal to octal

function convertHexadecimalToOctal(hex: string): string {
  const decimal: number = parseInt(hex, 16);
  return decimal.toString(8);
}

const input = "A";
console.log(
  `Hexadecimal '${input}' in octal is: '${convertHexadecimalToOctal(input)}'`
);
```

## Similar programs

- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
- [Convert Octal To Binary](/program/convert-octal-to-binary)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Decimal To Hexadecimal](/program/convert-decimal-to-hexadecimal)
- [Convert Octal To Decimal](/program/convert-octal-to-decimal)
- [Convert Hexadecimal To Decimal](/program/convert-hexadecimal-to-decimal)
- [Convert Decimal To Binary](/program/convert-decimal-to-binary)
