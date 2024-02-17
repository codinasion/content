---
title: "Convert Hexadecimal To Binary"
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
    "Saipraneeth99",
    "harshraj8843",
    "apurvagandhi",
    "anandfresh",
    "RiteshK-611",
    "gsquareg2",
    "joao-vitor-souza",
    "Chirag8023",
    "imtiyaz786",
    "RShalman",
    "rakibul-islam-raju",
    "ynbh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-26T11:58:50Z
trackId: 628
description: "Write a program to convert hexadecimal to binary."
---

## Write a program to convert hexadecimal to binary

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

To convert a hexadecimal number to binary, we can use the following algorithm:

1. Convert the hexadecimal number to decimal.
2. Convert the decimal number to binary.

```
Input  : A
Output : 1010
```

---

```c
// Write a C program to convert hexadecimal to binary

#include<stdio.h>
int main()
{
             char hexNum[100];
	long int count=0;
	printf("Input : ");
	scanf("%s",hexNum);
	printf("\nOutput : ");
	while(hexNum[count])
	{
		switch(hexNum[count])
		{
			case '0' : printf("0000");
				break;
			case '1' : printf("0001");
				break;
			case '2' : printf("0010");
				break;
			case '3' : printf("0011");
				break;
			case '4' : printf("0100");
				break;
			case '5' : printf("0101");
				break;
			case '6' : printf("0110");
				break;
			case '7' : printf("0111");
				break;
			case '8' : printf("1000");
				break;
			case '9' : printf("1001");
				break;
			case 'A' : printf("1010");
				break;
			case 'B' : printf("1011");
				break;
			case 'C' : printf("1100");
				break;
			case 'D' : printf("1101");
				break;
			case 'E' : printf("1110");
				break;
			case 'F' : printf("1111");
				break;
			case 'a' : printf("1010");
				break;
			case 'b' : printf("1011");
				break;
			case 'c' : printf("1100");
				break;
			case 'd' : printf("1101");
				break;
			case 'e' : printf("1110");
				break;
			case 'f' : printf("1111");
				break;
			default : printf("\nInvalid Entry, Please Try Again  %c",hexNum[count]);
		}
		count++;
	}
	return 0;
}
```

```csharp
// Write a C# program to convert hexadecimal to binary

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the hexadecimal value : ");
    var value = Console.ReadLine();
    value = Convert.ToString(Convert.ToInt32(value.ToString(), 16), 2);
    Console.WriteLine("Binary equivalent value :"+value);
  }
}
```

```cpp
// Write a C++ program to convert hexadecimal to binary

#include <iostream>
#include <string>
#include <unordered_map>
#include <stdexcept>

using namespace std;

string hex_to_bin(string hex_num) {
    // Map containing hexadecimal to binary conversion
    unordered_map<char, string> hex_to_binary_map = {
            {'0', "0000"},
            {'1', "0001"},
            {'2', "0010"},
            {'3', "0011"},
            {'4', "0100"},
            {'5', "0101"},
            {'6', "0110"},
            {'7', "0111"},
            {'8', "1000"},
            {'9', "1001"},
            {'A', "1010"},
            {'B', "1011"},
            {'C', "1100"},
            {'D', "1101"},
            {'E', "1110"},
            {'F', "1111"}
    };
    string binary_str = "";
    for (char d: hex_num) {
        if (!hex_to_binary_map.count(d)) {
            throw invalid_argument("Invalid hexadecimal digit: " + string(1, d));
        }
        binary_str = binary_str + hex_to_binary_map[d];
    }
    return binary_str;
}

int main() {
    string hex_num;
    cout << "Type a HexaDecimal number: "; // Type a number and press enter
    cin >> hex_num; // Get user input from the keyboard
    try {
        cout << "Your Binary number is:" << endl;
        cout << hex_to_bin(hex_num) << endl;
    } catch (invalid_argument& e) {
        cerr << e.what() << endl;
        return 1;
    }
    return 0;
}
```

```go
// Write a Go program to convert hexadecimal to binary

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func hexToBinary(hex string) string {
	dec, err := strconv.ParseUint(hex, 16, 64)
	if err != nil {
		return ""
	}
	binary := fmt.Sprintf("%064b", dec)
	binaryWithoutLeadingZeros := strings.TrimLeft(binary, "0")
	return binaryWithoutLeadingZeros
}

func main() {
	hex := "3"
	binary := hexToBinary(hex)
	fmt.Println("Hexadecimal:", hex)
	fmt.Println("Binary:", binary)
}
```

```java
// Write a Java program to convert hexadecimal to binary

import java.util.Scanner;
class ConvertHexadecimalToBinary {


	// HexaDecimal to Decimal Conversion
	static String convertHexaDecimalToBinary(String hexadecimal) {

		char character;
		int decimal;
		String binary = "";

		for(int i = 0; i < hexadecimal.length(); i++) {
			character = hexadecimal.charAt(i);
			if (Character.isDigit(character) == false && ((int)character >= 65 && (int)character <= 70) == false) {
                binary = "Please enter valid hexadecimal string";
                return binary;
            }

            else if ((int)character >= 65 && (int)character <= 70)
                decimal = (int)character - 55;

			else
                decimal = Integer.parseInt(String.valueOf(character));

			binary += convertDecimalToBinary(decimal);

		}
		return binary;

	}

	// Decimal to Binary Conversion
	static String convertDecimalToBinary(int decimal) {
		String binary = "";
		while(decimal != 0) {
			binary = (decimal % 2) + binary;
			decimal /= 2;
		}
		while(binary.length() % 4 != 0) {
			binary = "0" + binary;
		}
		return binary;
	}

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.println("Enter a hexadecimal string: ");

		String hexadecimal = input.nextLine().toUpperCase();
		System.out.print(convertHexaDecimalToBinary(hexadecimal));

	}
}
```

```javascript
// Write a JavaScript program to convert hexadecimal to binary

export function convertHexadecimalToBinary(hex) {
  return parseInt(hex, 16).toString(2);
}
```

```julia
# Write a Julia program to convert hexadecimal to binary

println("Enter a hexadecimal number: ")
x = readline()
y = parse(Int, x, base=16)
y = string(y, base=2)
println("Binary of ", x, ": ", y)
```

```kotlin
// Write a Kotlin program to convert hexadecimal to binary

fun main() {
    val hexaDecimalN = "AA"
    var i = 0
    var binaryNum = ""
    while(i < hexaDecimalN.length) {
        when(hexaDecimalN[i]) {
            '0'  -> binaryNum += "0000"
            '1'  -> binaryNum += "0001"
            '2'  -> binaryNum += "0010"
            '3'  -> binaryNum += "0011"
            '4'  -> binaryNum += "0100"
            '5'  -> binaryNum += "0101"
            '6'  -> binaryNum += "0110"
            '7'  -> binaryNum += "0111"
            '8'  -> binaryNum += "1000"
            '9'  -> binaryNum += "1001"
            'A', 'a'  -> binaryNum += "1010"
            'B', 'b'  -> binaryNum += "1011"
            'C', 'c'  -> binaryNum += "1100"
            'D', 'd'  -> binaryNum += "1101"
            'E', 'e'  -> binaryNum += "1110"
            'F', 'f'  -> binaryNum += "1111"
        }
        i++
    }
    println("$binaryNum")
}
```

```perl
# Write a Perl program to convert hexadecimal to binary

#!/usr/bin/env perl
use strict;
use warnings;

my $hexa = 'A';
my $value =  hex ( $hexa );
printf ( "Binary Equivalent : %b\n", $value );
```

```php
// Write a PHP program to convert hexadecimal to binary

<?php

function hexaToBinary($hex) {
 $binary = base_convert($hex, 16, 2);
 echo $hex . ' -> binary value is: ' . $binary;
}

hexaToBinary('A')
?>
```

```python
# Write a Python program to convert hexadecimal to binary

hnum = input()

hnum = int(hnum, 16)
bnum = bin(hnum)

print(bnum[2:])
```

```r
# Write a R program to convert hexadecimal to binary

# Function to convert a single hexadecimal digit to binary
hexDigitToBinary <- function(hexDigit) {
  decimalValue <- as.integer(strtoi(hexDigit, base=16))
  binaryString <- sprintf("%04s", paste(rev(as.integer(intToBits(decimalValue))), collapse = ""))
  binaryString <- substr(binaryString, nchar(binaryString)-3, nchar(binaryString))

  return(binaryString)
}

# Function to convert full hexadecimal to binary
hexToBinary <- function(hexNumber) {
  hexNumber <- toupper(gsub("\\s", "", hexNumber))
  binaryResult <- ""

  for (i in 1:nchar(hexNumber)) {
    singleHex <- substr(hexNumber, i, i)
    binaryResult <- paste0(binaryResult, hexDigitToBinary(singleHex))
  }

  return(binaryResult)
}

# Check if an argument is provided
args <- commandArgs(trailingOnly = TRUE)
if (length(args) == 0) {
  stop("No hexadecimal number provided. Usage: Rscript convert_hexadecimal_to_binary.r <hex_number>", call. = FALSE)
}

# Use the first argument as the input
hexNumber <- args[1]
binaryResult <- hexToBinary(hexNumber)
cat("Hexadecimal:", hexNumber, "- Binary:", binaryResult, "\n")
```

```ruby
# Write a Ruby program to convert hexadecimal to binary

puts "A".to_i(16).to_s(2)
```

```typescript
// Write a TypeScript program to convert hexadecimal to binary

function convertHexaDecimalToBinary(hex: string) {
  return parseInt(hex, 16).toString(2).padStart(4, "0");
}

console.log(convertHexaDecimalToBinary("A")); // 1010
```
