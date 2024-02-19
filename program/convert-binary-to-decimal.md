---
title: "Convert Binary To Decimal"
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
    "dart",
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
    "vedantpople4",
    "joao-vitor-souza",
    "auleki",
    "Jordan6794",
    "bbhoom",
    "shams-rf",
    "deniss-eh",
    "hemantsuteri",
    "YaSh8202",
    "parin23",
    "krishan-here",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 1949
description: "Write a program to convert binary to decimal."
---

## Table of contents

## Write a program to convert binary to decimal

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

To convert a binary number to decimal, we can use the following algorithm:

1. Multiply the first bit by 2^0.
2. Multiply the second bit by 2^1.
3. Multiply the third bit by 2^2.
4. Multiply the fourth bit by 2^3.
5. Repeat steps 3 and 4 until the last bit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : 1010
Output : 10
```

---

### C

```c
// Write a C program to convert binary to decimal

#include<stdio.h>

// Basic Function for calculating a^b
int power(int a, int b){
  int val = 1;

  for(int i=0;i<b;i++){
    val *= a;
  }
  return val;
}

int convert_bin_to_decimal(char* str, int len){
  int num = 0;

  for(int i=0;i<len; i++){
    num += power(2, i)*(str[i] - '0'); // Add 2^i if str[i] is 1
  }

  return num;
}

int main(){
  int len = 5;
  char* str = "00101";// First bit is of index 0, ex "00101" = 20

  //Function Call
  int num = convert_bin_to_decimal(str,len);
  printf("%d\n", num);
  return 0;
}
```

### C#

```csharp
// Write a C# program to convert binary to decimal

using System;
using System.Collections.Generic;
using System.Text;
namespace Demo {
   class MyApplication {
      static void Main(string[] args) {
         int num, binVal, decVal = 0, baseVal = 1, rem;
         num = 110011;
         binVal = num;
         while (num > 0) {
            rem = num % 10;
            decVal = decVal + rem * baseVal;
            num = num / 10 ;
            baseVal = baseVal * 2;
         }
         Console.Write("Binary Number: "+binVal);
         Console.Write("\nDecimal: "+decVal);
         Console.ReadLine();
      }
   }
}
```

### C++

```cpp
// Write a C++ program to convert binary to decimal

#include <iostream>

using namespace std;

int main()
{
    string binaryValue;
    cin>>binaryValue;
    int multiplyBy=1;
    int decimalValue=0;
    for(int i=binaryValue.size()-1;i>=0;i--){
        int bit = binaryValue[i] - '0';
        decimalValue += bit*multiplyBy;
        multiplyBy*=2;
    }
    cout<<decimalValue<<endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert binary to decimal

void main() {
  print(convertBinaryToDecimal(1010));
}

int convertBinaryToDecimal(int binary) {
  int binaryNumber = int.parse(binary.toString(), radix: 2);
  return binaryNumber;
}
```

### Go

```go
// Write a Go program to convert binary to decimal

package main

import (
	"fmt"
	"math"
)

func main() {
	var num, rem int
	fmt.Scanf("%d", &num)
	index := 0
	dnum := 0
	for num != 0 {
		rem = num % 10
		num = num / 10
		dnum = dnum + rem*int(math.Pow(2, float64(index)))
		index++
	}
	fmt.Println(dnum)
}
```

### Java

```java
// Write a Java program to convert binary to decimal

import java.util.Scanner;

public class ConvertBinaryToDecimal {
	public static void main(String[] args) {
		System.out.print("Enter Binary Number   : ");

		Scanner sc = new Scanner(System.in);

		String binary = sc.nextLine();

		sc.close();

    Integer decimal = Integer.parseInt(binary, 2);

    System.out.println("Decimal Number   : " + decimal.toString());
	}
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert binary to decimal

/**
 * @param {number} binaryNumber - the binary number to convert, in number form (not string)
 * @returns {number} the converted number in decimal
 */

function convertBinaryToDecimal(binaryNumber) {
  const digitsArray = binaryNumber.toString().split("");

  const numberOfDigits = digitsArray.length;

  const multiplicatedDigits = digitsArray.map((digit, index) => {
    let power = numberOfDigits - index - 1;
    return parseInt(digit) * Math.pow(2, power);
  });

  const resultSum = multiplicatedDigits.reduce((total, accumulator) => {
    return total + accumulator;
  }, 0);

  return resultSum;
}

/** 
// Test Cases
console.log(convertBinaryToDecimal(1010))
// should return 10
console.log(convertBinaryToDecimal(1111))
// should return 15
*/
```

### Julia

```julia
# Write a Julia program to convert binary to decimal

println("Enter a binay number: ")
x = readline()
y = parse(Int, x, base=2)
println("Decimal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert binary to decimal

fun main(args: Array<String>) {
    val num: Long = 1010
    val decimal = BinaryToDecimal(num)
    println("Binary : $num")
    println("Decimal : $decimal")
}

fun BinaryToDecimal(num: Long): Int {
    var num = num
    var decimalNumber = 0
    var i = 0
    var remainder: Long

    while (num.toInt() != 0) {
        remainder = num % 10
        num /= 10
        decimalNumber += (remainder * Math.pow(2.0, i.toDouble())).toInt()
        ++i
    }
    return decimalNumber
}
```

### Perl

```perl
# Write a Perl program to convert binary to decimal

sub binary2decimal {
   return unpack("N", pack("B32", substr("0" x 32 . shift, -32)));
}

$binary = '1010';
@res = binary2decimal('1010');
print "Decimal representation of $binary is: ", @res;
```

### PHP

```php
// Write a PHP program to convert binary to decimal

<?php
	function binaryToDecimal($n)
{
    $num = $n;
    $dec_value = 0;

    $base = 1;

    $temp = $num;
    while ($temp)
    {
        $last_digit = $temp % 10;
        $temp = $temp / 10;

        $dec_value += $last_digit
                        * $base;
        $base = $base*2;
    }
    return $dec_value;
}

    // Driver Code
    $num = 110011;
    echo binaryToDecimal($num), "\n";

?>
```

### Python

```python
# Write a Python program to convert binary to decimal

# title: Convert binary to decimal
# trackId: 1949
n = int(input("enter the binary value:"))
decimal = 0
power = 1
while n > 0:
    rem = n % 10
    n = n // 10
    decimal += rem * power
    power = power * 2
print(decimal)
```

### Ruby

```ruby
# Write a Ruby program to convert binary to decimal

def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    if bit == '1'
      decimal += 2**index
    elsif bit != '0'
      raise ArgumentError, "Invalid binary digit: #{bit}"
    end
  end
  return decimal
end

# Input binary number
print "Enter a binary number: "
binary = gets.chomp

begin
  decimal = binary_to_decimal(binary)
  puts "Decimal representation: #{decimal}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
```

### Swift

```swift
// Write a Swift program to convert binary to decimal

//
//  ConvertBinaryToDecimal.swift
//
//
//  Created by Shamsuddin Refaei on 06/10/2022.
//

import Foundation

// Sample input
let binaryNumber = "1010101010"

func convertToDecimal(binary: String) -> Int {

    // Reverse binary number to allow easy iteration with for loop
    let reversedBinaryNumber = String(binaryNumber.reversed())

    // Initialse power & total
    var p = 0
    var total = 0

    for i in reversedBinaryNumber {

        let int = i.wholeNumberValue    // Convert character to integer
        // If character can be converted, do following
        if let int = int {

            total += int * Int(pow(Double(2), Double(p)))   // Apply algorithm
            p += 1
        }
        // If character cannot be converted, print error
        else {

            print("Value \(i) cannot be converted to int")
        }
    }

    return total
}

// Sample output
let result = convertToDecimal(binary: binaryNumber)
```

### TypeScript

```typescript
// Write a TypeScript program to convert binary to decimal

/**
 * @param {number} binaryNumber - the binary number to convert, in number form (not string)
 * @returns {number} the converted number in decimal
 */

function convertBinaryToDecimal(binaryNumber: number) {
  const digitsArray = binaryNumber.toString().split("");

  const numberOfDigits = digitsArray.length;

  const multiplicatedDigits = digitsArray.map(
    (digit: string, index: number) => {
      const power = numberOfDigits - index - 1;
      return parseInt(digit) * Math.pow(2, power);
    }
  );

  const resultSum = multiplicatedDigits.reduce((total, accumulator) => {
    return total + accumulator;
  }, 0);

  return resultSum;
}

/** 
// Test Cases
console.log(convertBinaryToDecimal(1010))
// should return 10
console.log(convertBinaryToDecimal(1111))
// should return 15
*/
```

## Similar programs

- [Convert Decimal To Binary](/program/convert-decimal-to-binary)
- [Convert Octal To Binary](/program/convert-octal-to-binary)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Octal To Decimal](/program/convert-octal-to-decimal)
- [Convert Hexadecimal To Decimal](/program/convert-hexadecimal-to-decimal)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
