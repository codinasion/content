---
title: "Convert Decimal To Octal"
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
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "RiteshK-611",
    "Shalevro2",
    "gsquareg2",
    "joao-vitor-souza",
    "neelesh08",
    "Ipankaj07",
    "MadhuS-1605",
    "greeshma-d",
    "grraghav120",
    "heySanj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 976
description: "Write a program to convert decimal to octal."
---

## Table of contents

## Write a program to convert decimal to octal

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert a decimal number to octal, we can use the following algorithm:

1. Divide the decimal number by 8.
2. Write down the remainder.
3. Divide the quotient by 8.
4. Write down the remainder.
5. Repeat steps 3 and 4 until the quotient is 0.
6. The octal number is the sequence of remainders written in reverse order.

```
Input  : 10
Output : 12
```

---

### C

```c
// Write a C program to convert decimal to octal

#include<stdio.h>
#include<stdlib.h>


int main()
{
    long deciNum , octNum = 0, quotient;
    int octalarray[100];
    int i= 0, j;

    printf("Enter the number");
    scanf("%ld",&deciNum);

    quotient = deciNum;
    while(quotient)
    {
        octalarray[i++] = quotient%8;
        quotient = quotient/8;
    }

    for(j = i-1 ; j >= 0 ; j--)
    {
        octNum = octNum*10 + octalarray[j];
    }

    printf("%ld" , octNum);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert decimal to octal

using System;
class DecimalToOctal {
   public static void Main() {
      int decVal, quot, i = 1, j;
      int[] octalVal = new int[80];
      Console.WriteLine("Enter a Decimal Number: ");
      decVal = Convert.ToInt32(Console.ReadLine());
      quot = decVal;
      while (quot!= 0) {
         octalVal[i++] = quot % 8;
         quot = quot / 8;
      }
      Console.Write("Equivalent Octal Number: ");
      for (j = i - 1; j > 0; j--)
         Console.Write(octalVal[j]);
         Console.Read();
   }
}
```

### C++

```cpp
// Write a C++ program to convert decimal to octal

#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string decimaltooctal(int n){
    string ans="";
    for(int i=n;i>0;i=i/8){
        int mod=i%8;
        ans+=to_string(mod);
    }
    sort(ans.begin(),ans.end());
    return ans;
}


int main(){
    int n;
    cout<<"Enter a number"<<'\n';
    cin>>n;
    cout<<decimaltooctal(n)<<'\n';
}
```

### Dart

```dart
// Write a Dart program to convert decimal to octal

void main() {
  final decimalNumber = 10;
  final octalNumber = decimalNumber.toRadixString(8);
  print("Octal Equivalent:"+octalNumber);
}
```

### Go

```go
// Write a Go program to convert decimal to octal

package main

import (
	"fmt"
	"strconv"
)

func main() {

	var num int64
  fmt.Println("Enter Decimal Value:")
  fmt.Scan(&num)
	oct_num := strconv.FormatInt(num, 8)
	fmt.Println("Octal num: ", oct_num)

}
```

### Java

```java
// Write a Java program to convert decimal to octal

import java.util.Scanner;

class ConvertDecimalToOctal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int decimal = scanner.nextInt();
        String octal = "";
        while (decimal != 0) {
            int remainder = decimal % 8;
            octal = remainder + octal;
            decimal = decimal / 8;
        }
        System.out.println("Octal number is: " + octal);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert decimal to octal

function decimalToOctal(num) {
  return num.toString(8);
}

console.log("Decimal to Octal conversion", decimalToOctal(20));
```

### Julia

```julia
# Write a Julia program to convert decimal to octal

println("Enter a decimal number: ")
x = readline()
y = parse(Int, x)
y = string(y, base=8)
println("Octal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert decimal to octal

fun main() {
    val decimal = 10
    println(convertDecimalToOctal(decimal))
}

fun convertDecimalToOctal(number: Int): Int {
    var decimal = number
    var octalNumber = 0
    var i = 1

    while (decimal != 0) {
        octalNumber += decimal % 8 * i
        decimal /= 8
        i *= 10
    }
    return octalNumber
}
```

### Perl

```perl
# Write a Perl program to convert decimal to octal

use strict;
use warnings;

print("Enter a decimal number: ");
my $decimal = <STDIN>;
chomp($decimal);

my $sign = ($decimal < 0) ? '-' : '';  # Check if the number is negative
$decimal = abs($decimal);  # Get the absolute value

my $octal = sprintf("%s%o", $sign, $decimal);
print("Octal Equivalent: $octal\n");
```

### PHP

```php
// Write a PHP program to convert decimal to octal

<?php
    echo "Enter a decimal number: ";
    $decimal_number = trim(fgets(STDIN)); // Get the decimal number input by the user
    $octal_number = decoct($decimal_number); // Convert the decimal number to octal

    echo "The octal equivalent of $decimal_number is: $octal_number";
?>
```

### Python

```python
# Write a Python program to convert decimal to octal

def decimal_to_octal(n):
    # Store the remainders in this array
    octal = []

    # Repeatedly divide until quotient is 0
    while n != 0:
        # Store the remainder in the octal array
        octal.append(n % 8)

        # n becomes the quotient
        n = int(n / 8)

    # Print out the sequence of remainders in reverse order
    result = "".join(str(x) for x in octal[::-1])
    print(result)


# Run the convertor on any input number
try:
    decimal_to_octal(int(input("Decimal to convert: ")))
except:
    print("Please enter a valid decimal number.")
```

### Ruby

```ruby
# Write a Ruby program to convert decimal to octal

def decimalToOctal(number)
  puts "Equivalent Octal value : #{number.to_s(8)}"
end

decimalToOctal(10)
```

### TypeScript

```typescript
// Write a TypeScript program to convert decimal to octal

function decimalToOctal(num: number) {
  return num.toString(8);
}

console.log("Decimal to Octal conversion", decimalToOctal(10));
```
