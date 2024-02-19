---
title: "Convert Binary To Hexadecimal"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
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
    "MadhuS-1605",
    "anandfresh",
    "ariporat",
    "harshraj8843",
    "Roybas2001",
    "RiteshK-611",
    "Shalevro2",
    "joao-vitor-souza",
    "error707-persona",
    "Chirag8023",
    "greeshma-d",
    "heySanj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-17T04:18:24Z
trackId: 936
description: "Write a program to convert binary to hexadecimal."
---

## Table of contents

## Write a program to convert binary to hexadecimal

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert a binary number to hexadecimal, we can use the following algorithm:

1. Convert the binary number to decimal.
2. Convert the decimal number to hexadecimal.

```
Input  : 1010
Output : A
```

---

### C

```c
// Write a C program to convert binary to hexadecimal

#include <stdio.h>
int main(){
   long int binaryval, hexadecimalval = 0, i = 1, remainder;
   printf("Enter the binary number: ");
   scanf("%ld", &binaryval);
   while (binaryval != 0){
      remainder = binaryval % 10;
      hexadecimalval = hexadecimalval + remainder * i;
      i = i * 2;
      binaryval = binaryval / 10;
   }
   printf("Equivalent hexadecimal value: %lX", hexadecimalval);
   return 0;
}
```

### C#

```csharp
// Write a C# program to convert binary to hexadecimal

using System;


namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a binary number: ");
            string BinaryInput = Console.ReadLine();
            try {
                int DecimalNumber = Convert.ToInt32(BinaryInput, 2);
                string hexNumber = DecimalNumber.ToString("X");
                Console.WriteLine($"Hexadecimal representation: {hexNumber}");
                Console.ReadLine();
            } catch {
                Console.WriteLine("Invalid binary number.");
                Console.ReadLine();
            }
        }
    }
}
```

### C++

```cpp
// Write a C++ program to convert binary to hexadecimal

#include <iostream>
#include <string>
#include <bitset>

int main() {
    std::string binary;
    std::cout << "Enter a binary number: ";
    std::cin >> binary;

    // Convert binary string to hexadecimal using bitset
    std::bitset<32> bit(binary); // We assume a 32-bit binary number
    unsigned long hex = bit.to_ulong();

    std::cout << "The hexadecimal equivalent of " << binary << " is: " << std::hex << hex << std::endl;

    return 0;
}
```

### Go

```go
// Write a Go program to convert binary to hexadecimal

package main

import (
    "fmt"
    "strconv"
)

func parseBinToHex(s string) string {
    ui, err := strconv.ParseUint(s, 2, 64)
    if err != nil {
        return "error"
    }

    return fmt.Sprintf("%x", ui)
}

func main() {
  var value string
  fmt.Println("Enter binary value:")
  fmt.Scan(&value)
  fmt.Println(parseBinToHex(value))
}
```

### Java

```java
// Write a Java program to convert binary to hexadecimal

import java.lang.*;
import java.util.*;
public class ConvertBinaryToHexadecimal{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    String binaryString=sc.nextLine();
    int decimal=Integer.parseInt(binaryString,2);
    System.out.println(Integer.toHexString(decimal).toUpperCase());
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert binary to hexadecimal

function binaryToHexaDecimal(num) {
  return parseInt(num, 2).toString(16).toUpperCase();
}

console.log("Binary to HexaDecimal", binaryToHexaDecimal("1011"));
```

### Julia

```julia
# Write a Julia program to convert binary to hexadecimal

println("Enter a binary number: ")
x = readline()
y = parse(Int, x, base=2)
y = string(y, base=16)
println("Hexadecimal of ", x, ": ", uppercase(y))
```

### Perl

```perl
# Write a Perl program to convert binary to hexadecimal

#!/usr/bin/perl
use warnings;
use strict;

my $binary = 1010;
my $int = unpack("N", pack("B32", substr("0" x 32 . $binary, -32)));
my $hex = sprintf("%x", $int );
print uc($hex),"\n";
```

### PHP

```php
// Write a PHP program to convert binary to hexadecimal

<?php
$bin = '1010';
$hex = dechex(bindec($bin));

echo $hex;
```

### Python

```python
# Write a Python program to convert binary to hexadecimal

# Input a binary number and remove any white spaces
binary_num = (input("Enter a binary number: ")).replace(" ", "")

try:
    # Convert to integer
    int_num = int(binary_num, 2)

    # Convert to hexadecimal and format correctly
    hex_num = format(int_num, "x").upper()

    # Print result
    print(hex_num)

except:
    # Error
    print("Please input a valid binary number.")
```

### Ruby

```ruby
# Write a Ruby program to convert binary to hexadecimal

def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    decimal += bit.to_i * (2**index)
  end
  return decimal
end

def decimal_to_hexadecimal(decimal)
  hexadecimal = ''
  while decimal > 0
    remainder = decimal % 16
    if remainder < 10
      hexadecimal = remainder.to_s + hexadecimal
    else
      hexadecimal = ('A'.ord + remainder - 10).chr + hexadecimal
    end
    decimal /= 16
  end
  return hexadecimal
end

puts "Enter a binary number: "
binary_number = gets.chomp


if binary_number.match(/^[01]+$/)
  decimal_number = binary_to_decimal(binary_number)
  hexadecimal_number = decimal_to_hexadecimal(decimal_number)
  puts "Hexadecimal equivalent: #{hexadecimal_number}"
else
  puts "Invalid binary input. Please enter a valid binary number."
end
```

### TypeScript

```typescript
// Write a TypeScript program to convert binary to hexadecimal

function binaryToHexaDecimal(num: string) {
  return parseInt(num, 2).toString(16).toUpperCase();
}

console.log("Binary to HexaDecimal", binaryToHexaDecimal("1011"));
```

## Similar programs

- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Octal To Binary](/program/convert-octal-to-binary)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Decimal To Binary](/program/convert-decimal-to-binary)
- [Convert Decimal To Hexadecimal](/program/convert-decimal-to-hexadecimal)
- [Convert Binary To Decimal](/program/convert-binary-to-decimal)
- [Convert Hexadecimal To Decimal](/program/convert-hexadecimal-to-decimal)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
