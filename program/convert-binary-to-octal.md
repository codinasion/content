---
title: "Convert Binary To Octal"
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
    "MadhuS-1605",
    "anandfresh",
    "AshitaSingamsetty",
    "harshraj8843",
    "RiteshK-611",
    "AdityaNarayanPradhan",
    "roshan798",
    "pokharel-nishan",
    "joao-vitor-souza",
    "greeshma-d",
    "vishal2376",
    "iresh96",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-16T16:37:29Z
trackId: 508
description: "Write a program to convert binary to octal."
---

## Table of contents

## Write a program to convert binary to octal

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert a binary number to octal, we can use the following algorithm:

1. Convert the binary number to decimal.
2. Convert the decimal number to octal.

```
Input  : 1010
Output : 12
```

---

### C

```c
// Write a C program to convert binary to octal

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

    convertNumberSystem(input, output, 2, 8); // This function can convert from a number from any base to another base

    printf("%s\n", output);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert binary to octal

using System;
public class Binary
{
    public static void Main()
{       int n1, n,p=1;
	    int dec=0,i=1,j,d;
        int octno=0;


	Console.Write("Enter a binary number : ");
    n = Convert.ToInt32(Console.ReadLine());
	n1=n;
	for (j=n;j>0;j=j/10)
	{
          d = j % 10;
            if(i==1)
                  p=p*1;
            else
                 p=p*2;

	   dec=dec+(d*p);
	   i++;
	}

     i=1;

      for(j=dec;j>0;j=j/8)
       {
        octno=octno+(j % 8)*i;
        i=i*10;
        n=n/8;
       }

        Console.Write("\nThe equivalent Octal number : {1} \n\n",n1,octno);
}
}
```

### C++

```cpp
// Write a C++ program to convert binary to octal

#include <iostream>
//#include <cmath>

using namespace std;

int  convertBinarytoOctal(long long binaryNumber)
{
    int octalNumber = 0, decimalNumber = 0, i = 0;
	//Converting Binary to Decimal
    while(binaryNumber != 0) {
    	int remainder = binaryNumber%10;
    	if(remainder != 0 && remainder != 1) return -1;
        decimalNumber += remainder * (1<<i);
        binaryNumber/=10;
        i++;
    }

    i = 1;
	//Converting  Decimal to Octal
    while (decimalNumber != 0)
    {
        octalNumber += (decimalNumber % 8) * i;
        decimalNumber /= 8;
        i *= 10;
    }

    return octalNumber;
}

int main()
{
    long long binary=0;

    cout << "Enter a binary number: ";
    cin>>binary;

    int octal = convertBinarytoOctal(binary);
    if(octal!=-1)
    	cout<<"binary "<<binary<<" = "<<octal<<" in octal"<<endl;
	else
		cout<<binary<<" is not a binary number!!"<<endl;
    return 0;
}
```

### Go

```go
// Write a Go program to convert binary to octal

package main
import (
	"fmt"
	"strconv"
)
func binaryToOctal(binary string) string {
	decimal, _ := strconv.ParseInt(binary, 2, 64)
	return strconv.FormatInt(decimal,8)
}
func main() {
	var binaryInput string
	fmt.Print("Input : ")
	fmt.Scanln(&binaryInput)
	octalOutput := binaryToOctal(binaryInput)
	fmt.Print("Output : ", octalOutput)
}
```

### Java

```java
// Write a Java program to convert binary to octal

import java.util.Scanner;

public class ConvertBinaryToOctal{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a binary number");
        String binaryNum = input.nextLine();

        int decimalNum = Integer.parseInt(binaryNum, 2);
        String OctalNum = Integer.toOctalString(decimalNum);

        System.out.println("Octal Number    :       " + OctalNum);

        input.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert binary to octal

function binaryToOctal(num) {
  let octalValue = parseInt(num, 2).toString(8);
  return octalValue;
}

binaryToOctal(1010);

console.log("Binary to Octal", binaryToOctal(1010));
```

### Julia

```julia
# Write a Julia program to convert binary to octal

println("Enter a binay number: ")
x = readline()
y = parse(Int, x, base=2)
y = string(y, base=8)
println("Octal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert binary to octal

fun main() {

    val n: Long = 101001

    var binary = n
    var octal = 0
    var decimal = 0

    var i = 0

    while (binary.toInt() != 0) {
        decimal += (binary % 10 * Math.pow(2.0, i.toDouble())).toInt()
        ++i
        binary /= 10
    }

    i = 1

    while (decimal != 0) {
        octal += decimal % 8 * i
        decimal /= 8
        i *= 10
    }

    println("$n = $octal")
}
```

### Perl

```perl
# Write a Perl program to convert binary to octal

print "Enter the binary value : ";
my $bin_value = oct("0b".<STDIN>);
printf("Equivalent Octal value : %o\n",$bin_value);
```

### PHP

```php
// Write a PHP program to convert binary to octal

<?php

$binary = readline();
$possibleChars = ["0", "1"];

$decimal = 0;

foreach (str_split($binary) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(2, (int) (strlen($binary) - $key - 1));
    }
}

$octal = "";

while (true) {
    $quocient = floor($decimal / 8);
    if ($quocient < 1) {
        $octal .= $decimal;
        break;
    }
    $remainder = $decimal % 8;
    $decimal = $quocient;
    $octal .= $remainder;
}

echo strrev($octal) . "\n";

?>
```

### Python

```python
# Write a Python program to convert binary to octal

binary_number = int(input("Enter the binary number : "))

i, j, b, octal = 0, 0, 0, 0
while binary_number != 0:
    b += (binary_number % 10) * (2**i)
    i += 1
    binary_number = binary_number // 10

while b != 0:
    octal += (b % 8) * (10**j)
    j += 1
    b = b // 10

print("The octal conversion of binary number is ", octal)
```

### Ruby

```ruby
# Write a Ruby program to convert binary to octal

def binary_to_decimal(binary)
  decimal = 0
  binary.reverse.each_char.with_index do |bit, index|
    decimal += bit.to_i * (2**index)
  end
  return decimal
end

def decimal_to_octal(decimal)
  octal = ''
  while decimal > 0
    remainder = decimal % 8
    octal = remainder.to_s + octal
    decimal /= 8
  end
  return octal
end

puts "Enter a binary number: "
binary_number = gets.chomp

if binary_number.match(/^[01]+$/)
  decimal_number = binary_to_decimal(binary_number)
  octal_number = decimal_to_octal(decimal_number)
  puts "Octal equivalent: #{octal_number}"
else
  puts "Invalid binary input. Please enter a valid binary number."
end
```

### TypeScript

```typescript
// Write a TypeScript program to convert binary to octal

const binaryToDecimal = (input: number): number => {
  return parseInt(input.toString(), 2);
};

export const binaryToOctal = (input: number): number => {
  const decimal = binaryToDecimal(input);
  return Number(decimal.toString(8));
};
```

## Similar programs

- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Decimal To Binary](/program/convert-decimal-to-binary)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Binary To Decimal](/program/convert-binary-to-decimal)
- [Convert Octal To Decimal](/program/convert-octal-to-decimal)
- [Convert Decimal To Hexadecimal](/program/convert-decimal-to-hexadecimal)
