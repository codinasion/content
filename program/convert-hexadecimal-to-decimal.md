---
title: "Convert Hexadecimal To Decimal"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "psmanam",
    "MadhuS-1605",
    "anandfresh",
    "apurvagandhi",
    "harshraj8843",
    "RiteshK-611",
    "saintramon",
    "joao-vitor-souza",
    "UsmanFani",
    "CodingWithHardik",
    "AshishSharma1203",
    "chetanchandel31",
    "prasanta10",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T19:17:39Z
trackId: 1659
description: "Write a program to convert hexadecimal to decimal."
---

## Table of contents

## Write a program to convert hexadecimal to decimal

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert a hexadecimal number to decimal, we can use the following algorithm:

1. Multiply the first hexit by 16^0.
2. Multiply the second hexit by 16^1.
3. Multiply the third hexit by 16^2.
4. Multiply the fourth hexit by 16^3.
5. Repeat steps 3 and 4 until the last hexit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : A
Output : 10
```

---

### C

```c
// Write a C program to convert hexadecimal to decimal

// C program to convert hexadecimal to decimal

#include <math.h>
#include <stdio.h>
#include <string.h>
int main()
{
	char hexdecnumber[17] = "2D";
	int decimalnumber, place;
	int i = 0, val, len;
	decimalnumber = 0;

	// finding the length of hexadecnumber
	len = strlen(hexdecnumber);
	len--;

	// while loop executes the statements until the
	// condition is false
	while (hexdecnumber[i] != '\0') {

		// finding the equivalent decimal digit for each
		// hexa decimal digit
		if (hexdecnumber[i] >= '0'
			&& hexdecnumber[i] <= '9') {
			val = hexdecnumber[i] - 48;
		}
		else if (hexdecnumber[i] >= 'a'
				&& hexdecnumber[i] <= 'f') {
			val = hexdecnumber[i] - 97 + 10;
		}
		else if (hexdecnumber[i] >= 'A'
				&& hexdecnumber[i] <= 'F') {
			val = hexdecnumber[i] - 65 + 10;
		}
		// final decimal number
		decimalnumber += val * pow(16, len);
		len--;
		i++;
	}
	// printing the result
	printf("Hexadecimal number = %s\n", hexdecnumber);
	printf("Decimal number = %d", decimalnumber);
	return 0;
}
```

### C#

```csharp
// Write a C# program to convert hexadecimal to decimal

using System;
using System.Collections.Generic;
public class HexaToDecimal {
 public static void Main() {
     string hexval = "A";
     Console.WriteLine("Hexadecimal number: "+hexval);
     int decValue = int.Parse(hexval, System.Globalization.NumberStyles.HexNumber);
     Console.WriteLine("Equivalent Decimal number: "+decValue);
   }
}
```

### C++

```cpp
// Write a C++ program to convert hexadecimal to decimal

#include<iostream>
#include<string.h>
using namespace std;
//convert hexadecimal to decimal
int convert(char num[]) {
   int len = strlen(num);
   int base = 1;
   int temp = 0;
   for (int i=len-1; i>=0; i--) {
      if (num[i]>='0' && num[i]<='9') {
         temp += (num[i] - 48)*base;
         base = base * 16;
      }
      else if (num[i]>='A' && num[i]<='F') {
         temp += (num[i] - 55)*base;
         base = base*16;
      }
   }
   return temp;
}
int main() {
   char num[20];
   cout<<"Enter a Headecimal Number"<<endl;
   cin>>num;
   cout<<num<<" after converting to deciaml becomes : "<<convert(num)<<endl;
   return 0;
}
```

### Go

```go
// Write a Go program to convert hexadecimal to decimal

package main

import (
	"fmt"
	"math"
)

func hexadecimalToDecimal(hexadecimalNumber string) int {
	var decimalNumber int
	var power int = 0

	for i := len(hexadecimalNumber) - 1; i >= 0; i-- {
		digit := hexadecimalNumber[i]

		if digit >= '0' && digit <= '9' {
			decimalNumber += int(digit-'0') * int(math.Pow(16, float64(power)))
		} else if digit >= 'A' && digit <= 'F' {
			decimalNumber += int(digit-'A'+10) * int(math.Pow(16, float64(power)))
		}

		power++
	}

	return decimalNumber
}

func main() {
	hexadecimalNumber := "F"
	decimalNumber := hexadecimalToDecimal(hexadecimalNumber)
	fmt.Println("Hexadecimal number:", hexadecimalNumber)
	fmt.Println("Decimal number:", decimalNumber)
}
```

### Java

```java
// Write a Java program to convert hexadecimal to decimal

/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 13, 2022
 */

public class ConvertHexadecimalToDecimal{
    public static void main(String[] args) {
        String hexadecimal = "A";
        System.out.println("HEXADECIMAL: " + hexadecimal);
        System.out.println("DECIMAL EQUIVALENT: " + convertHexaToDeci(hexadecimal));
    }
    public static String convertHexaToDeci(String hexaValue){
        return Integer.toString(Integer.parseInt(hexaValue, 16));
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert hexadecimal to decimal

function hexadecimalToDecimal(hexString) {
  var hex = hexString.toString();
  var str = "0123456789ABCDEF";
  var dec = 0;
  for (var i = 0; i < hex.length; i++) {
    dec += str.indexOf(hex.charAt(i)) * Math.pow(16, hex.length - i - 1);
  }
  return dec;
}
console.log(hexadecimalToDecimal("A"));
```

### Julia

```julia
# Write a Julia program to convert hexadecimal to decimal

println("Enter a hexadecimal number: ")
x = readline()
y = parse(Int, x, base=16)
println("Decimal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert hexadecimal to decimal

import kotlin.math.pow

fun main() {
    print("Enter Hexadecimal Number to Convert: ")
    val num = readln()
    print("Decimal Number is: ${convert(num)}")
}

private fun convert(str: String): Int {
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
# Write a Perl program to convert hexadecimal to decimal

print "Please enter a Hexadecimal value : ";
$hex = hex(<STDIN>);
printf("Equivalent decimal value : ".$hex);
```

### PHP

```php
// Write a PHP program to convert hexadecimal to decimal

<?php

$hexadecimal = readline();
$possibleChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];
$hexaCharsMapping = [
    "A" => "10",
    "a" => "10",
    "B" => "11",
    "b" => "11",
    "C" => "12",
    "c" => "12",
    "D" => "13",
    "d" => "13",
    "E" => "14",
    "e" => "14",
    "F" => "15",
    "f" => "15",
];
$decimal = 0;

function map($num)
{
    global $hexaCharsMapping;
    if (in_array($num, ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f"])) {
        return $hexaCharsMapping[$num];
    } else {
        return $num;
    }
}

foreach (str_split($hexadecimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += map($value) * pow(16, (int) (strlen($hexadecimal) - $key - 1));
    }
}

echo $decimal . "\n";

?>
```

### Python

```python
# Write a Python program to convert hexadecimal to decimal

hexadec = input()

dec = int(hexadec, 16)

print(dec)
```

### Ruby

```ruby
# Write a Ruby program to convert hexadecimal to decimal

def hex_to_decimal(hex)
  hex_digits = "0123456789ABCDEF"
  hex = hex.upcase
  decimal = 0

  hex.reverse.each_char.with_index do |h, index|
    decimal += hex_digits.index(h) * (16 ** index)
  end

  return decimal
end

# Input a hexadecimal number as a string
hexadecimal_number = "1A3"
decimal_result = hex_to_decimal(hexadecimal_number)

puts "Hexadecimal: #{hexadecimal_number}"
puts "Decimal: #{decimal_result}"
```

### Swift

```swift
// Write a Swift program to convert hexadecimal to decimal

import Foundation

func hexToDecimal(_ hex: String) -> Int {
    let hexMap: [Character: Int] = ["0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
                                    "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15,
                                    "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15]
    return hex.uppercased().reversed().enumerated().reduce(0) {
        $0 + (hexMap[$1.element]! * Int(pow(16.0, Double($1.offset))))
    }
}


print("Enter a hexadecimal number: ")
if let inputHex = readLine() {
    let decimalValue = hexToDecimal(inputHex)
    print("Hexadecimal: \(inputHex), Decimal: \(decimalValue)")
} else {
    print("Invalid input or no input was read.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert hexadecimal to decimal

const alphabetToNumberMap = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

const convertHexadecimalToDecimal = (hexaDecimal: string): number => {
  let sum = 0;

  for (let i = hexaDecimal.length - 1; i >= 0; i--) {
    const value =
      alphabetToNumberMap[hexaDecimal[i].toLowerCase()] ||
      Number(hexaDecimal[i]);

    sum += value * Math.pow(16, hexaDecimal.length - 1 - i);
  }

  return sum;
};

console.log(convertHexadecimalToDecimal("a"));
```

## Similar programs

- [Convert Decimal To Hexadecimal](/program/convert-decimal-to-hexadecimal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
- [Convert Octal To Decimal](/program/convert-octal-to-decimal)
- [Convert Binary To Decimal](/program/convert-binary-to-decimal)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Octal To Binary](/program/convert-octal-to-binary)
