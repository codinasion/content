---
title: "Convert Octal To Binary"
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
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "PunugupatiSaikumar",
    "harshraj8843",
    "kenroulier",
    "anandfresh",
    "RiteshK-611",
    "saintramon",
    "Fukurokudzu",
    "rksp25",
    "joao-vitor-souza",
    "saikumarjetti",
    "codingkush",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-21T13:14:14Z
trackId: 4499
description: "Write a program to convert octal to binary."
---

## Write a program to convert octal to binary

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

To convert an octal number to binary, we can use the following algorithm:

1. Convert the octal number to decimal.
2. Convert the decimal number to binary.

```
Input  : 12
Output : 1010
```

---

```c
// Write a C program to convert octal to binary

#include <stdio.h>
#include <math.h>

int main()
{
    int i, octal, decimal = 0;
    long binary = 0;
    i = 0;

    printf("Enter the Octal Number = ");
    scanf("%d",&octal);

    while(octal != 0)
    {
        decimal = decimal + (octal % 10) * pow(8, i);
        i++;
        octal = octal / 10;
    }
    i = 1;
    while(decimal != 0)
    {
        binary += ((decimal % 2) * i);
        decimal = decimal / 2;
        i = i * 10;
    }

    printf("The Binay Value = %ld\n", binary);
}
```

```csharp
// Write a C# program to convert octal to binary

using System;
public class OctalToBinary
{
    public static void Main()
    {
        long n1, n2, k = 1;
        long decimal_number = 0, i = 1, j, d;
        long binary_number = 0;
        Console.Write("Input an octal number : ");
        n1 = Convert.ToInt32(Console.ReadLine());
        n2 = n1;
        for (j = n1; j > 0; j /= 10)
        {
            d = j % 10;
            if (i == 1)
                k *= 1;
            else
                k *= 8;
            decimal_number = decimal_number + (d * k);
            i++;
        }
        i = 1;
        for (j = decimal_number; j > 0; j /= 2)
        {
            binary_number = binary_number + (decimal_number % 2) * i;
            i *= 10;
            decimal_number /= 2;
        }
        Console.Write("The equivalent binary number: {1} \n\n", n2, binary_number);
        Console.ReadKey();
    }
}
```

```cpp
// Write a C++ program to convert octal to binary

#include<iostream>

using namespace std;

int main()

{

    int num,p=1;

    int decmal=0,i=1,j,d;

    int  binary=0;

    cout<<"Enter a number in octal (using digit 0 - 7) :";

	cin>>num;	j=num;

	do

	{

          d = j % 10;

            if(i==1)

                  p=p*1;

            else

                 p=p*8;

      decmal=decmal+(d*p);

	   i++;

	   j=j/10;

	   }

	   while(j>0);

	   i=1;

	   j=decmal;

	   do

	   {

	   	 binary=binary+(decmal % 2)*i;

        i=i*10;

        decmal=decmal/2;

        j=j/2;

	   }

	   while(j>0);

	   cout<<"Octal number into Binary number   "<<binary;

}
```

```dart
// Write a Dart program to convert octal to binary

import 'dart:io';

void main() {
  // Prompt the user to enter an octal number
  stdout.write("Enter an octal number: ");
  String octalInput = stdin.readLineSync() ?? "";

  try {
    // Parse the octal input as an integer
    int decimalNumber = int.parse(octalInput, radix: 8);

    // Convert the decimal number to binary
    String binaryResult = decimalToBinary(decimalNumber);

    // Display the binary result
    print("Binary equivalent: $binaryResult");
  } catch (e) {
    print("Invalid input. Please enter a valid octal number.");
  }
}

String decimalToBinary(int decimalNumber) {
  // Convert decimal to binary using bitwise shift
  String binaryResult = "";

  while (decimalNumber > 0) {
    binaryResult = (decimalNumber % 2).toString() + binaryResult;
    decimalNumber ~/= 2;
  }

  return binaryResult;
}
```

```go
// Write a Go program to convert octal to binary

package main

import (
	"fmt"
)

func main() {
	var value string = ""
	var binary string = ""

	fmt.Print("Type a number: ")
	fmt.Scan(&value)

	var length int = len(value)

	for i := 0; i < length; i++ {

		switch value[i] {
		case '0':
			binary += "000"
		case '1':
			binary += "001"
		case '2':
			binary += "010"
		case '3':
			binary += "011"
		case '4':
			binary += "100"
		case '5':
			binary += "101"
		case '6':
			binary += "110"
		case '7':
			binary += "111"
		}

	}

	fmt.Println("Binary is:", binary)

}
```

```java
// Write a Java program to convert octal to binary

/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 */

 import java.lang.*;

 public class ConvertOctalToBinary{

    public static String convert(String octal){
        return Integer.toBinaryString(Integer.parseInt(octal, 8));
    }
 }
```

```javascript
// Write a JavaScript program to convert octal to binary

function octalToBinary(octnum) {
  let i = 0;
  let binary = "";

  while (i < octnum.length) {
    let c = octnum[i];
    switch (c) {
      case "0":
        binary += "000";
        break;
      case "1":
        binary += "1";
        break;
      case "2":
        binary += "010";
        break;
      case "3":
        binary += "011";
        break;
      case "4":
        binary += "100";
        break;
      case "5":
        binary += "101";
        break;
      case "6":
        binary += "110";
        break;
      case "7":
        binary += "111";
        break;
      default:
        document.write("<br>Invalid Octal Digit " + octnum[i]);
        break;
    }
    i++;
  }

  return binary;
}

console.log(octalToBinary("12"));
```

```julia
# Write a Julia program to convert octal to binary

println("Enter a octal number: ")
x = readline()
y = parse(Int, x, base=8)
y = string(y, base=2)
println("Binary of ", x, ": ", y)
```

```kotlin
// Write a Kotlin program to convert octal to binary

import kotlin.math.pow

fun main() {
    print("Enter Octal No. to Convert in Binary: ")
    val num = readln().toInt()
    println()
    print("Hexadecimal of Octal No: $num is: ")
    print(octalToBinary(num))
}

private fun checkOctalNumber(octalNum: String): Boolean {
    var isOctal = true

    for(charAtPos in octalNum) {
        if(!((charAtPos >= '0') && (charAtPos <= '7'))) {
            isOctal = false
            break
        }
    }
    return isOctal
}

private fun octalToBinary(nums: Int): String {
    val octalN = nums.toString()
    var binaryNum = ""

    if(checkOctalNumber(octalN)) {
        val octalNumString: String = octalN
        var i = 0
        while(i < octalNumString.length) {
            when(octalNumString[i]) {
                '0'  -> binaryNum += "000"
                '1'  -> binaryNum += "1"
                '2'  -> binaryNum += "010"
                '3'  -> binaryNum += "011"
                '4'  -> binaryNum += "100"
                '5'  -> binaryNum += "101"
                '6'  -> binaryNum += "110"
                '7'  -> binaryNum += "111"
            }
            i++
        }
    } else {
        println("$octalN is not an octal number")
    }

    return binaryNum
}
```

```perl
# Write a Perl program to convert octal to binary

print "Enter the octal value : ";
my $oct_value = oct(<STDIN>);
printf("Equivalent binary value : %b\n",$oct_value);
```

```php
// Write a PHP program to convert octal to binary

<?php

$octal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7"];

$decimal = 0;

foreach (str_split($octal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    } else {
        $decimal += $value * pow(8, (int) (strlen($octal) - $key - 1));
    }
}

$binary = "";

while (true) {
    $quocient = floor($decimal / 2);
    if ($quocient < 1) {
        $binary .= $decimal;
        break;
    }
    $remainder = $decimal % 2;
    $decimal = $quocient;
    $binary .= $remainder;
}

echo strrev($binary) . "\n";

?>
```

```python
# Write a Python program to convert octal to binary

print(bin(int(input(), 8))[2:])
```

```ruby
# Write a Ruby program to convert octal to binary

module Octal_to_binary

  def self.convert(num)
    result = base10_to_base2(base8_to_base10(num))
    num.negative? ? -result : result
  end

  private

  def self.base8_to_base10(num)
    decimal = 0
    num.to_s.chars.reverse.each_with_index do |d, i|
      decimal += d.to_i * 8**i
    end
    decimal
  end

  def self.base10_to_base2(num)
    divide(num: num)
  end

  def self.divide(num: 0, reminder: 0, result: "")
    result.prepend((num % 2).to_s)
    return result.to_i if num == 0
    divide(num: num / 2, reminder: num % 2, result: result)
  end
end

puts Octal_to_binary.convert(12) # => 1010
```

```rust
// Write a Rust program to convert octal to binary

// To convert an octal number to binary
// Example:
// 	Input  : 12
// 	Output : 1010

use std::io;

// ========== Function to convert Octal to Binary ====================

fn octaltobinary(octalin: &str) -> String {

	let mut usable  =  true;
	let mut binout = String::new();

	for character in octalin.chars() {

		match character {
        		'0' => binout.push_str("000"),
        		'1' => binout.push_str("001"),
        		'2' => binout.push_str("010"),
        		'3' => binout.push_str("011"),
        		'4' => binout.push_str("100"),
       			'5' => binout.push_str("101"),
        		'6' => binout.push_str("110"),
        		'7' => binout.push_str("111"),
        		_ => {
        			print!("{} ",character);
        			println!(" - Number is not an Octal number");
				usable = false;
    			}
    		}
	}

	if usable {
		return binout;
		}
	else {
		let mut retmess = String::new();
		retmess.push_str("Octal not entered and cannot be converted");
		return retmess;
		}
}

//=============  Main function to drive testing and show how to call ===============
fn main() {

	// the input string and this main function can be removed. This is simply for testing
	println!("Input an Octal number");
	let mut input_num = String::new();
	let _rtn = io::stdin().read_line(&mut input_num);

	// get rid of the newline at the end
	let len = input_num.len();
	input_num.truncate(len - 1);

	// example of calling with an octal to convert to binary
	let bin_num = octaltobinary(&input_num);

	println!();
	println!("Octal number entered -> {}, converted to binary -> {} ", input_num, bin_num);
	println!();
}
```

```scala
// Write a Scala program to convert octal to binary

object NumberConv {
def binaryCon(n : Int) =
{
var i=0
var num=n
var A=new Array[Int](10)
while(num>0)
{
A(i)=num%2
i=i+1
num=num/2
}
println("Binary equivalent :" )
for(j<-i-1 to 0 by -1)
print(A(j))
}

def main(args: Array[String]) =
{
println("Enter a Octal number :")
var n=scala.io.StdIn.readInt()
println("%d".format(n))
binaryCon(n)
}
}
```

```typescript
// Write a TypeScript program to convert octal to binary

const octalToBinary = (octal: string): string => {
  return parseInt(octal, 2).toString(8);
};

console.log(octalToBinary("1010"));
```
