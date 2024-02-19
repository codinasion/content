---
title: "Convert Decimal To Binary"
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
    "akshithagunupati",
    "anandfresh",
    "apurvagandhi",
    "harshraj8843",
    "Tushar12222",
    "RiteshK-611",
    "UrielOfir",
    "hi-Kartik2004",
    "Emilia-mazari",
    "rafaover",
    "joao-vitor-souza",
    "Dheeraj0014",
    "Simba-97",
    "sanmay321",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-29T12:22:05Z
trackId: 3846
description: "Write a program to convert decimal to binary."
---

## Table of contents

## Write a program to convert decimal to binary

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

To convert a decimal number to binary, we can use the following algorithm:

1. Divide the decimal number by 2.
2. Write down the remainder.
3. Divide the quotient by 2.
4. Write down the remainder.
5. Repeat steps 3 and 4 until the quotient is 0.
6. The binary number is the sequence of remainders written in reverse order.

```
Input  : 10
Output : 1010
```

---

### C

```c
// Write a C program to convert decimal to binary

// C Code to convert Decimal number into Binary

#include <stdio.h>

void decToBinary(int n)
{
	// array to store binary number
	int binaryNum[32];

	// counter for binary array
	int i = 0;
	while (n > 0) {
		// storing remainder in binary array
		binaryNum[i] = n % 2;
		n = n / 2;
		i++;
	}

	// printing binary array in reverse order
	for (int j = i - 1; j >= 0; j--)
		printf("%d", binaryNum[j]);
}

// Driver program to test above function
int main()
{
	int n = 17;
	decToBinary(n);
	return 0;
}
```

### C#

```csharp
// Write a C# program to convert decimal to binary

using System;
  public class decimalToBinary
   {
     public static void Main(string[] args)
      {
       int  n, i;
       int[] a = new int[10];
       Console.Write("Enter a decimal number : ");
       n= int.Parse(Console.ReadLine());
       for(i=0; n>0; i++)
        {
         a[i]=n%2;
         n= n/2;
        }
       Console.Write("Binary equivalent of given number :");
       for(i=i-1 ;i>=0 ;i--)
       {
        Console.Write(a[i]);
       }
      }
  }
```

### C++

```cpp
// Write a C++ program to convert decimal to binary

#include <iostream>
#include <vector>
using namespace std;
int main()
{
    int n, i;
    vector<int> v;
    cin>>n;
    for(i=0; n>0; i++)
    {
        v.push_back(n%2);
        n= n/2;
    }
    for(i=i-1 ;i>=0 ;i--)
    {
        cout<<v[i];
    }
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert decimal to binary

void decToBin(int n){
  String answer = "";

  while(n / 2 != 0){
    int rem = n % 2;
    answer = rem.toString() + answer;
    n = n ~/ 2;
  }
  print(int.parse(answer));
}

void main() {
  decToBin(11);
}
```

### Go

```go
// Write a Go program to convert decimal to binary

package main

import (
	"fmt"
	"strconv"
)

func decimalToBinary(decimalNumber int) string {
	var binaryNumber string
	quotient := decimalNumber
	var remainder int64

	for quotient != 0 {
		remainder = int64(quotient % 2)
		binaryNumber = strconv.FormatInt(remainder, 10) + binaryNumber
		quotient = quotient / 2
	}

	return binaryNumber
}

func main() {
	decimalNumber := 5
	binaryNumber := decimalToBinary(decimalNumber)
	fmt.Println("Decimal number:", decimalNumber)
	fmt.Println("Binary number:", binaryNumber)
}
```

### Java

```java
// Write a Java program to convert decimal to binary

import java.util.AbstractMap.SimpleEntry;
import java.util.Scanner;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author pc
 */
public class ConversationToBinAndDec {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner sc= new Scanner(System.in);    //System.in is a standard input stream
        System.out.print("Enter decimal number- ");
        int a= sc.nextInt();
        System.out.println(dectobin(a));

    }

    public static String dectobin(int m) {
        String s = "";
        while (m > 0) {
            s = String.valueOf(m % 2) + s;
            m = m / 2;
        }
        return s;
    }


    static Map<Integer, String> map = Stream
                                      .of(new SimpleEntry<>(10, "A"), new SimpleEntry<>(11, "B"), new SimpleEntry<>(12, "C"),
                                          new SimpleEntry<>(13, "D"), new SimpleEntry<>(14, "E"), new SimpleEntry<>(15, "F"))
                                      .collect(Collectors.toMap(SimpleEntry::getKey, SimpleEntry::getValue));
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert decimal to binary

// Javascript program to convert a decimal

// function to convert decimal to binary
function decToBinary(n) {
  // array to store binary number
  let binaryNum = new Array(32);

  // counter for binary array
  let i = 0;
  while (n > 0) {
    // storing remainder in binary array
    binaryNum[i] = n % 2;
    n = Math.floor(n / 2);
    i++;
  }

  // printing binary array in reverse order
  for (let j = i - 1; j >= 0; j--) document.write(binaryNum[j]);
}

// Driver program to test above function
let n = 10;
decToBinary(n);
```

### Julia

```julia
# Write a Julia program to convert decimal to binary

println("Enter a decimal number: ")
x = readline()
y = parse(Int, x)
y = string(y, base=2)
println("Binary of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert decimal to binary

import java.util.*

fun decToBinary(n: Int) {
        var num = n
        //Array to store binary number
        val binaryNum = IntArray(1000)

        // counter for binary array
        var i = 0
        while (num > 0) {
            // storing remainder in binary array
            binaryNum[i] = num % 2
            num /= 2
            i++
        }

        // printing binary array in reverse order
        for (j in i - 1 downTo 0) print(binaryNum[j])
    }

fun main() {
    val read = Scanner(System.`in`)
    var input = read.nextInt()
    decToBinary(input)
}
```

### Perl

```perl
# Write a Perl program to convert decimal to binary

print "Please enter a decimal value : ";
$decimal = <STDIN>;
printf("Equivalent Binary value : %b\n",$decimal);
```

### PHP

```php
// Write a PHP program to convert decimal to binary

<?php

$decimal = readline();
$possibleChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$binary = "";

foreach (str_split($decimal) as $key => $value) {
    if (!in_array($value, $possibleChars)) {
        exit("Input contains an invalid value: " . $value . "\n");
    }
}

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

### Python

```python
# Write a Python program to convert decimal to binary

print(bin(int(input()))[2:])
```

### Ruby

```ruby
# Write a Ruby program to convert decimal to binary

puts 'Write a number to convert: '
number = gets.chomp
result = number.to_i.to_s(2)
puts "Here's your converted number: #{result}"
```

### Swift

```swift
// Write a Swift program to convert decimal to binary

import Foundation

/*
Description:

This Swift program performs the conversion of a decimal number to its binary representation.
It prompts the user to input a decimal number, then utilizes a standard algorithm to carry out the conversion.
The algorithm involves dividing the decimal number by 2, noting the remainder, and repeating this process until the quotient becomes 0.
The binary representation is obtained by arranging the remainders in reverse order.
The program provides a simple and interactive way for users to observe the binary equivalent of any decimal input.

Sample Input:
Enter a decimal number:
10

Sample Output:
Binary representation: 1010

*/

// Function to convert decimal to binary
func decimalToBinary(decimal: Int) -> String {
    var binaryString = ""
    var quotient = decimal

    while quotient > 0 {
        let remainder = quotient % 2
        binaryString.insert(contentsOf: "\(remainder)", at: binaryString.startIndex)
        quotient /= 2
    }

    return binaryString.isEmpty ? "0" : binaryString
}

// Main program
print("Enter a decimal number:")
if let decimalInput = readLine(), let decimal = Int(decimalInput) {
    let binaryResult = decimalToBinary(decimal: decimal)
    print("Binary representation: \(binaryResult)")
} else {
    print("Invalid input. Please enter a valid decimal number.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to convert decimal to binary

// Typescript program to convert a decimal

// function to convert decimal to binary
function decToBinaryTS(n: number) {
  // array to store binary number
  const binaryNum: number[] = new Array(32);

  // counter for binary array
  let i = 0;
  while (n > 0) {
    // storing remainder in binary array
    binaryNum[i] = n % 2;
    n = Math.floor(n / 2);
    i++;
  }

  // printing binary array in reverse order
  for (let j = i - 1; j >= 0; j--) document.write(binaryNum[j].toString());
}

// Driver program to test above function
const test = 10;
decToBinaryTS(test);
```

## Similar programs

- [Convert Octal To Binary](/program/convert-octal-to-binary)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
- [Convert Binary To Decimal](/program/convert-binary-to-decimal)
- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Decimal To Hexadecimal](/program/convert-decimal-to-hexadecimal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Octal To Decimal](/program/convert-octal-to-decimal)
