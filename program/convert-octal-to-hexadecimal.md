---
title: "Convert Octal To Hexadecimal"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "julia",
    "scala",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "Rohan-Kalgutkar",
    "harshraj8843",
    "RiteshK-611",
    "YinzeZhang",
    "AdityaNarayanPradhan",
    "anandfresh",
    "joao-vitor-souza",
    "UsmanFani",
    "sahooankeeta",
    "DiamonndAde",
    "rakibul-islam-raju",
    "ridsuteri",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-24T14:00:54Z
trackId: 456
description: "Write a program to convert octal to hexadecimal."
---

## Table of contents

## Write a program to convert octal to hexadecimal

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert an octal number to hexadecimal, we can use the following algorithm:

1. Convert the octal number to decimal.
2. Convert the decimal number to hexadecimal.

```
Input  : 12
Output : A
```

---

### C

```c
// Write a C program to convert octal to hexadecimal

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

    convertNumberSystem(input, output, 8, 16); // This function can convert from a number from any base to another base

    printf("%s\n", output);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert octal to hexadecimal

using System;
class Conversion{
static int octalToDecimal(int n)
{
int num = n;
int dec_value = 0;

int b_ase = 1;

int temp = num;
while (temp > 0)
{
	int last_digit = temp % 10;
	temp = temp / 10;

	dec_value += last_digit * b_ase;

	b_ase = b_ase * 8;
}

return dec_value;
}

static string decToHexa(int n)
{
char []hexaDeciNum = new char[100];

int i = 0;
string ans = "";

while(n != 0)
{
	int temp = 0;
	temp = n % 16;
	if(temp < 10)
	{
	hexaDeciNum[i] = (char)(temp + 48);
	i++;
	}
	else
	{
	hexaDeciNum[i] = (char)(temp + 87);
	i++;
	}

	n = n / 16;
}

for(int j = i - 1; j >= 0; j--)
{
	ans += hexaDeciNum[j];
}

return ans;
}

public static void Main(string []args)
{
string octnum, hexnum;
int decnum;

Console.WriteLine ("Please enter an Octal number :");
octnum = Console.ReadLine();

decnum = octalToDecimal(Int32.Parse(octnum));

hexnum = decToHexa(decnum);

Console.Write("Equivalent Hexadecimal Value = " +
				hexnum);
}
}
```

### C++

```cpp
// Write a C++ program to convert octal to hexadecimal

#include <iostream>
using namespace std;

string octalToHexadecimal(int n)
{
    int decimal = 0, base = 1;
    while (n > 0) {
        int rem = n % 10;
        decimal += rem * base;
        n /= 10;
        base *= 8;
    }

    string hexadecimal = "";
    while (decimal > 0) {
        int rem = decimal % 16;
        if (rem < 10) {
            hexadecimal = to_string(rem) + hexadecimal;
        } else {
            hexadecimal = (char)(rem - 10 + 'A') + hexadecimal;
        }
        decimal /= 16;
    }
    return hexadecimal;
}

int main()
{
    int octal = 12;
    string hexadecimal = octalToHexadecimal(octal);
    cout << "Equivalent Hexadecimal Value = " << hexadecimal << endl;
    return 0;
}
```

### Go

```go
// Write a Go program to convert octal to hexadecimal

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {

	var octalStr string
	fmt.Println("Enter octal number")
	fmt.Scanln(&octalStr)

	// convert an octal str to a decimal number
	decimalNum, err := strconv.ParseInt(octalStr, 8, 64)
	if err != nil {
		fmt.Println("error occur when parse octal num")
		return
	}

	// Convert a decimal number to a hexadecimal number
	hexStr := strconv.FormatInt(decimalNum, 16)

	fmt.Printf("octal number %s converted to hexadecimal number：%s\n", octalStr, strings.ToUpper(hexStr))
}
```

### Java

```java
// Write a Java program to convert octal to hexadecimal

import java .util.*;
class ConvertOctalToHexadecimal
{
  public static int octToDec(int n)
    {
        int result = 0,temp=0;double p=0.0;
        for (int i = 0; n > 0; i++) {
            temp = n % 10;
            p = Math.pow(8, i);
            result += (temp * p);
            n = n / 10;
        }
        return result;
    }
    public static String decTohex(int n)
    {
        int[] hexNum = new int[100];
        int i = 0;
        String result="";
        while (n != 0) {
            hexNum[i] = n % 16;
            n = n / 16;
            i++;
        }
        for (int j = i - 1; j >= 0; j--) {
            if (hexNum[j] > 9)
                result+=(char)(55 + hexNum[j]);
            else
                result+=hexNum[j];
        }
        return result;
    }
    public static void main(String args[])
   {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter octal number ");
      int n=sc.nextInt();
      System.out.println(decTohex(octToDec(n)));

   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert octal to hexadecimal

// JavaScript program to convert Octal
// to Hexadecimal

// Function to convert octal to decimal
function octalToDecimal(n) {
  var num = n;
  var dec_value = 0;

  var base = 1;

  var temp = num;
  while (temp > 0) {
    // Extracting last digit
    var last_digit = temp % 10;
    temp = Math.floor(temp / 10);

    // Multiplying last digit with
    // appropriate base value and
    // adding it to dec_value
    dec_value += last_digit * base;

    base = base * 8;
  }
  return dec_value;
}

// Function to convert decimal
// to hexadecimal
function decToHexa(n) {
  // char array to store
  // hexadecimal number
  var hexaDeciNum = new Array(100);

  // counter for hexadecimal
  // number array
  var i = 0;
  while (n != 0) {
    // Temporary variable to
    // store remainder
    var temp = 0;

    // Storing remainder in
    // temp variable.
    temp = n % 16;

    // Check if temp < 10
    if (temp < 10) {
      hexaDeciNum[i] = temp + 48;
      i++;
    } else {
      hexaDeciNum[i] = temp + 87;
      i++;
    }
    n = Math.floor(n / 16);
  }

  var ans = "";

  // Printing hexadecimal number array
  // in reverse order
  for (var j = i - 1; j >= 0; j--) {
    ans += String.fromCharCode(hexaDeciNum[j]);
  }
  return ans;
}

// Driver Code
var hexnum;
var decnum, octnum;

// Taking 5123 as an example of
// Octal Number.
octnum = 5123;

// Convert Octal to Decimal
decnum = octalToDecimal(octnum);

// Convert Decimal to Hexadecimal
hexnum = decToHexa(decnum);

console.log("Equivalent Hexadecimal Value = " + hexnum);
```

### Julia

```julia
# Write a Julia program to convert octal to hexadecimal

println("Enter a octal number: ")
x = readline()
y = parse(Int, x, base=8)
y = string(y, base=16)
println("Hexadecimal of ", x, ": ", uppercase(y))
```

### Kotlin

```kotlin
// Write a Kotlin program to convert octal to hexadecimal

import kotlin.math.pow

fun main() {
    print("Enter Octal No. to Convert in Hexadecimal: ")
    val num = readln().toInt()
    println()
    print("Hexadecimal of Octal No: $num is: ")
    print(octalToHexadecimal(num))
}

private fun octalToHexadecimal(nums: Int): String {
    val decimal = octalToDecimal(nums)
    return decimalToHexadecimal(decimal)
}

private fun octalToDecimal(nums: Int): Int {
    var decimal = 0
    var digit = nums
    var n = 0
    while (digit > 0) {
        val rem = digit % 10
        decimal += rem * 8.0.pow(n).toInt()
        digit /= 10
        n++
    }
    return decimal
}

private fun decimalToHexadecimal(nums: Int): String {
    var hexa = ""
    var digit = nums
    var n = 0
    while (digit > 0) {
        val rem = digit % 16
        hexa = when (rem) {
            10 -> "A"
            11 -> "B"
            12 -> "C"
            13 -> "D"
            14 -> "E"
            15 -> "F"
            else -> {
                rem.toString()
            }
        } + hexa
        digit /= 16
    }
    return hexa
}
```

### PHP

```php
// Write a PHP program to convert octal to hexadecimal

<?php

$octal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7"];
$hexaCharsMapping = ["10" => "A", "11" => "B", "12" => "C", "13" => "D", "14" => "E", "15" => "F"];

$decimal = 0;

foreach (str_split($octal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(8, (int) (strlen($octal) - $key - 1));
    }
}

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

### Python

```python
# Write a Python program to convert octal to hexadecimal

octnum = input()

# Convert octal to decimal
decnum = int(octnum, 8)

# Convert decimal to hexadecimal
hexadecimal = hex(decnum).replace("0x", "")

# Printing the hexadecimal value
print(hexadecimal)
```

### Scala

```scala
// Write a Scala program to convert octal to hexadecimal

object OctalToHexadecimalConverter {

  def main(args: Array[String]): Unit = {

    val octalNumber = "12"


    val decimalNumber = octalToDecimal(octalNumber)


    val hexadecimalNumber = decimalToHexadecimal(decimalNumber)


    println(s"The hexadecimal equivalent of octal number $octalNumber is: $hexadecimalNumber")
  }


  def octalToDecimal(octal: String): Int = {
    Integer.parseInt(octal, 8)
  }


  def decimalToHexadecimal(decimal: Int): String = {
    Integer.toHexString(decimal).toUpperCase
  }
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert octal to hexadecimal

function octalToDecimal(n: any) {
  const num = n;
  let dec_value = 0;
  let base = 1;

  let temp = num;
  while (temp > 0) {
    const last_digit = temp % 10;
    temp = Math.floor(temp / 10);
    dec_value += last_digit * base;

    base = base * 8;
  }
  return dec_value;
}

function decToHexa(n: any) {
  const hexaDeciNum = new Array(100);
  let i = 0;
  while (n != 0) {
    let temp = 0;
    temp = n % 16;

    if (temp < 10) {
      hexaDeciNum[i] = temp + 48;
      i++;
    } else {
      hexaDeciNum[i] = temp + 87;
      i++;
    }
    n = Math.floor(n / 16);
  }
  let ans = "";
  for (let j = i - 1; j >= 0; j--) {
    ans += String.fromCharCode(hexaDeciNum[j]);
  }
  return ans;
}

let hexnum;
let decnum, octnum;

octnum = 12;

// Convert Octal to Decimal
decnum = octalToDecimal(octnum);

// Convert Decimal to Hexadecimal
hexnum = decToHexa(decnum);

console.log("Equivalent Hexadecimal Value :" + hexnum);
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
