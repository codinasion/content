---
title: "Convert Decimal To Hexadecimal"
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
    "scala",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "MadhuS-1605",
    "anandfresh",
    "harshraj8843",
    "LinoyYarkoni",
    "RiteshK-611",
    "AdityaNarayanPradhan",
    "pokharel-nishan",
    "vedantpople4",
    "joao-vitor-souza",
    "deveshpandee",
    "castanedadev-edu",
    "aghiles-medane",
    "dmosc",
    "ArthurGossel1",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-05T03:41:55Z
trackId: 3894
description: "Write a program to convert decimal to hexadecimal."
---

## Write a program to convert decimal to hexadecimal

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert a decimal number to hexadecimal, we can use the following algorithm:

1. Divide the decimal number by 16.
2. Write down the remainder.
3. Divide the quotient by 16.
4. Write down the remainder.
5. Repeat steps 3 and 4 until the quotient is 0.
6. The hexadecimal number is the sequence of remainders written in reverse order.

```
Input  : 10
Output : A
```

---

```c
// Write a C program to convert decimal to hexadecimal

#include <stdio.h>

int main() {
    int decimalNum, remainder, quotient;
    char hexadecimalNum[10];
    int i = 1, j;

    printf("Enter a decimal number: ");
    scanf("%d", &decimalNum);

    quotient = decimalNum;

    while (quotient != 0) {
        remainder = quotient % 16;
        if (remainder < 10)
            hexadecimalNum[i++] = 48 + remainder;
        else
            hexadecimalNum[i++] = 55 + remainder;
        quotient = quotient / 16;
    }

    printf("Hexadecimal number of %d is: ", decimalNum);

    for (j = i - 1; j > 0; j--)
        printf("%c", hexadecimalNum[j]);

    return 0;
}
```

```csharp
// Write a C# program to convert decimal to hexadecimal

using System;
using System.Collections.Generic;

public static class ConvertDecimalToHexadecimal
{
    private static Dictionary<int, string> hexadecimalMap = new Dictionary<int, string>()
    {
        {0, "0"},
        {1, "1"},
        {2, "2"},
        {3, "3"},
        {4, "4"},
        {5, "5"},
        {6, "6"},
        {7, "7"},
        {8, "8"},
        {9, "9"},
        {10, "A"},
        {11, "B"},
        {12, "C"},
        {13, "D"},
        {14, "E"},
        {15, "F"}
    };

    public static void ConvertToHexadecimal(int number = 10)
    {
        List<int> resultToConvert = new List<int>();

        while (number > 0)
        {
            resultToConvert.Add(number % 16);
            number /= 16;
        }

        Console.WriteLine(CreateResult(resultToConvert));
    }

    private static string CreateResult(List<int> toConvert)
    {
        string result = string.Empty;

        for (int i = toConvert.Count - 1; i >= 0; i--)
        {
            result += hexadecimalMap[toConvert[i]];
        }

        return result;
    }
}

public class Program
{
    public static void Main()
    {
        ConvertDecimalToHexadecimal.ConvertToHexadecimal(10);
    }
}
```

```cpp
// Write a C++ program to convert decimal to hexadecimal

#include <iostream>
#include <string>
using namespace std;
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

    cin >> input;

    convertNumberSystem(input, output, 10, 16); // This function can convert from a number from any base to another base

    cout << output << "\n";

    return 0;
}
```

```go
// Write a Go program to convert decimal to hexadecimal

package main

import (
	"fmt"
	"strconv"
)

func main() {
	var num int64
	fmt.Scanf("%d", &num)
	answer := strconv.FormatInt(num, 16)
	fmt.Println(answer)
}
```

```java
// Write a Java program to convert decimal to hexadecimal

import java.util.AbstractMap.SimpleEntry;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ConversationDecTohex {

public static String dectoHex(int m) {
	String s = "";
	while (m > 0) {
		int rest = m % 16;
		if (rest < 10) {
			s = String.valueOf(rest) + s;
		} else {
			s = map.get(rest) + s;
		}
		m = m / 16;
	}
	return s;
}

static Map<Integer, String> map = Stream
		.of(new SimpleEntry<>(10, "A"), new SimpleEntry<>(11, "B"), new SimpleEntry<>(12, "C"),
				new SimpleEntry<>(13, "D"), new SimpleEntry<>(14, "E"), new SimpleEntry<>(15, "F"))
		.collect(Collectors.toMap(SimpleEntry::getKey, SimpleEntry::getValue));
}
```

```javascript
// Write a JavaScript program to convert decimal to hexadecimal

function convertToHex(decimalNumber) {
  let remaindersSequence = [];
  let remainder = decimalNumber % 16;
  let quotient = Math.floor(decimalNumber / 16);
  remaindersSequence.push(remainder);

  do {
    remainder = quotient % 16;
    quotient = Math.floor(quotient / 16);

    if (remainder > 0) remaindersSequence.push(remainder);
  } while (remainder !== 0);

  return remaindersSequence.reverse().join(" ");
}

console.log(convertToHex(1500));
```

```julia
# Write a Julia program to convert decimal to hexadecimal

println("Enter a decimal number: ")
x = readline()
y = parse(Int, x)
y = string(y, base=16)
println("Hexadecimal of ", x, ": ", uppercase(y))
```

```kotlin
// Write a Kotlin program to convert decimal to hexadecimal

import java.util.*

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)
    var dec = input.nextInt()

    // For storing remainder
    var rem: Int

    // For storing result
    var hexdec = ""

    // Digits in hexadecimal number system
    val hex = charArrayOf('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F')
    while (dec>0) {
        rem = dec % 16
        hexdec = hex[rem].toString() + hexdec
        dec = dec / 16
    }
    println(hexdec)
}
```

```perl
# Write a Perl program to convert decimal to hexadecimal

print "Please enter a decimal value : ";
$decimal = <STDIN>;
printf("Equivalent Hexadecimal value : %X\n",$decimal);
```

```php
// Write a PHP program to convert decimal to hexadecimal

<?php

$decimal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$hexaCharsMapping = ["10" => "A", "11" => "B", "12" => "C", "13" => "D", "14" => "E", "15" => "F"];
$hexadecimal = "";

function map($num)
{
    global $hexaCharsMapping;
    if (in_array($num, [10, 11, 12, 13, 14, 15])) {
        return $hexaCharsMapping[$num];
    } else {
        return $num;
    }
}

foreach (str_split($decimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    }
}

while (true) {
    $quocient = floor($decimal / 16);
    if ($quocient < 1) {
        $hexadecimal .= map($decimal);
        break;
    }
    $remainder = $decimal % 16;
    $decimal = $quocient;
    $hexadecimal .= map($remainder);
}

echo strrev($hexadecimal) . "\n";

?>
```

```python
# Write a Python program to convert decimal to hexadecimal

print(hex(int(input())).split("x")[-1])
```

```ruby
# Write a Ruby program to convert decimal to hexadecimal

def decimal_to_hexadecimal(decimal)

  hex_digits = "0123456789ABCDEF"


  hexadecimal = ""


  while decimal > 0
    # Get the remainder when divided by 16
    remainder = decimal % 16


    hexadecimal = hex_digits[remainder] + hexadecimal


    decimal /= 16
  end

  return hexadecimal
end

decimal_number = 255

# Convert and print the result
hexadecimal_number = decimal_to_hexadecimal(decimal_number)
puts "Decimal: #{decimal_number} => Hexadecimal: #{hexadecimal_number}"
```

```scala
// Write a Scala program to convert decimal to hexadecimal

object Main extends App {
  var num = 10
  printf("%d in hexadecimal is %X", num, num)
}
```

```typescript
// Write a TypeScript program to convert decimal to hexadecimal

const letters = new Map([
  ["10", "A"],
  ["11", "B"],
  ["12", "C"],
  ["13", "D"],
  ["14", "E"],
  ["15", "F"],
]);

const decimalToHexadecimal = (number: number): string => {
  let hexFormat = "";
  let quotient, remainder;
  while (number) {
    quotient = Math.trunc(number / 16);
    remainder = String(number % 16);
    hexFormat = (letters.get(remainder) ?? remainder) + hexFormat;
    number = quotient;
  }
  return hexFormat;
};

console.log(decimalToHexadecimal(11)); // B
console.log(decimalToHexadecimal(32)); // 20
```
