---
title: "Convert Octal To Decimal"
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
    "go",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "namrata18s",
    "anandfresh",
    "harshraj8843",
    "apurvagandhi",
    "RiteshK-611",
    "gsquareg2",
    "joao-vitor-souza",
    "AshishSharma1203",
    "galahad42",
    "adityachandra1",
    "kashyap-kumar",
    "RShalman",
    "ashankritwik07",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-01T17:14:12Z
trackId: 602
description: "Write a program to convert octal to decimal."
---

## Table of contents

## Write a program to convert octal to decimal

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert an octal number to decimal, we can use the following algorithm:

1. Multiply the first octit by 8^0.
2. Multiply the second octit by 8^1.
3. Multiply the third octit by 8^2.
4. Multiply the fourth octit by 8^3.
5. Repeat steps 3 and 4 until the last octit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : 12
Output : 10
```

---

### C

```c
// Write a C program to convert octal to decimal

/*
Logic :
To convert an octal number to decimal, we can use the following algorithm:

Multiply the first octit by 8^0.
Multiply the second octit by 8^1.
Multiply the third octit by 8^2.
Multiply the fourth octit by 8^3.
Repeat steps 3 and 4 until the last octit.
Add the results of all the multiplications.
The decimal number is the sum of all the multiplications.
*/

                  ------->>>>>>>>>>>------------>>>>>>>>>>>>________CODE________<<<<<<<<<<<<------------<<<<<<<<<<<<<<<<<<<<<<<<<<<

#include <stdio.h>
#include <math.h>
int OctalToDecimal(int num)
{
    int x = 0;
    int ans = 0;

    while (num > 0)
    {

        // obtaining the right-most digit of num
        int y = num % 10;

        // Since the right-most digits were previously scanned in the previous step, divide num by 10 to remove them.
        num /= 10;

        ans += y * pow(8, x);
        ++x;
    }

    return ans;
}
int main()
{
    int num;
    printf("Enter Octal Number: ");
    scanf("%d", &num);
    printf("\n");
    printf("Decimal Number is : %d", OctalToDecimal(num));
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert octal to decimal

using System;
class OctalToDecimal
{
    public static void Main()
    {
        Console.WriteLine("Enter an Octal number : ");
        int OctalNumber = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine($"Equivalent Decimal number : {Octal_Decimal(OctalNumber)}");
        Console.ReadKey();
    }

    private static int Octal_Decimal(int OctalNumber)
    {
        int Decimal_Number = 0;
        int BASE = 1;
        int temp = OctalNumber;

        while (temp > 0)
        {
            int last_digit = temp % 10;
            temp /= 10;
            Decimal_Number += last_digit * BASE;
            BASE *= 8;
        }

        return Decimal_Number;
    }
}
```

### C++

```cpp
// Write a C++ program to convert octal to decimal

/**
 * Write a C++ program to convert octal to decimal
 * Input: 12
 * Output: 10
 */

#include <iostream>
#include <cmath>
using namespace std;

class Num{
    int octal;
    int decimal;
    public:
        Num(int o){
            octal = o;
            decimal = 0;
        }
        void convertToDecimal(){
            int num = octal;
            int i   = 0;
            while (num != 0)
            {
                int rem = num % 10;
                num /= 10;
                decimal += rem * pow(8, i);
                ++i;
            }
        }
        void showDecimal(){
            cout << "Decimal: " << decimal << endl;
        }
};

int main(){
    int n;
    cout << "Enter octal number: ";
    cin >> n;
    Num nmbr = Num(n);
    nmbr.convertToDecimal();
    nmbr.showDecimal();
    return 0;
}
```

### Go

```go
// Write a Go program to convert octal to decimal

package main

import (
	"fmt"
	"math"
	"strconv"
)

func octalToDecimal(octal string) int {
	var decimal int
	for i, c := range octal {
		num, err := strconv.ParseUint(string(c), 8, 64)
		if err != nil {
			return 0
		}
		decimal += int(num) * int(math.Pow(8, float64(len(octal)-i-1)))
	}
	return decimal
}

func main() {
	octal := "12"
	decimal := octalToDecimal(octal)
	fmt.Println("Octal:", octal)
	fmt.Println("Decimal:", decimal)
}
```

### Java

```java
// Write a Java program to convert octal to decimal

package MyClass;
import java.util.Scanner;
public class ConvertOctalToDecimal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int f = convertOctaltoDecimal(n , 8);
		System.out.println(f);

	}
	public static int convertOctaltoDecimal(int n , int b ) {
		int rv = 0;
		int p = 1;
		while(n>0) {
			int dig = n % 10;
			n = n / 10;
			rv += dig * p;
			p = p* b;
		}
		return rv;
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to convert octal to decimal

function octalToDecimal(n) {
  let dec_value = 0;
  let base = 1;

  let temp = n;
  while (temp) {
    let last_digit = temp % 10;
    temp = Math.floor(temp / 10);
    dec_value += last_digit * base;
    base = base * 8;
  }

  return dec_value;
}

console.log(octalToDecimal(69));
console.log(octalToDecimal(69420));
```

### Julia

```julia
# Write a Julia program to convert octal to decimal

println("Enter a octal number: ")
x = readline()
y = parse(Int, x, base=8)
println("Decimal of ", x, ": ", y)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert octal to decimal

fun main() {
    val octal = 12
    println(convertOctalToDecimal(octal))
}

fun convertOctalToDecimal(number: Int): Int {
    var decimalNumber = 0
    var i = 1

    var octal = number
    while (octal != 0) {
        var lastDigit = octal%10
        octal /= 10
        decimalNumber += lastDigit * i
        i *= 8
    }
    return decimalNumber
}
```

### Perl

```perl
# Write a Perl program to convert octal to decimal

print "Enter the octal value :";
my $oct_value = oct(<STDIN>);
printf("Equivalent Decimal value : %d\n",$oct_value);
```

### PHP

```php
// Write a PHP program to convert octal to decimal

<?php

function octalToDecimal($n)
{

    $num = $n;
    $dec_value = 0;
    $base = 1;

    $temp = $num;
    while ($temp)
    {

        $last_digit = $temp % 10;
        $temp = $temp / 10;
        $dec_value += $last_digit * $base;
        $base = $base * 8;
    }

    return $dec_value;
}

echo octalToDecimal(12);

?>
```

### Python

```python
# Write a Python program to convert octal to decimal

def octalToDecimal(n):
    num = n
    dec_value = 0
    base = 1

    temp = num
    while temp:
        last_digit = temp % 10
        temp = int(temp / 10)

        dec_value += last_digit * base

        base = base * 8

    return dec_value


num = 67
print(octalToDecimal(num))
```

### R

```r
# Write a R program to convert octal to decimal

convertOctalToDecimal <- function(octalNumber) {
  decimalNumber <- 0
  octalDigits <- as.numeric(strsplit(as.character(octalNumber), '')[[1]])

  # Reverse the octal digits to start from the rightmost digit
  octalDigits <- rev(octalDigits)

  # Convert octal to decimal using the provided algorithm
  for (i in 1:length(octalDigits)) {
    decimalNumber <- decimalNumber + octalDigits[i] * 8^(i - 1)
  }

  return(decimalNumber)
}

# Example usage
octalNumber <- 12
decimalNumber <- convertOctalToDecimal(octalNumber)

cat("Octal   : ", octalNumber, "\n")
cat("Decimal : ", decimalNumber, "\n")
```

### TypeScript

```typescript
// Write a TypeScript program to convert octal to decimal

export type Octal = number;
export type Decimal = number;

export function convertOctalToDecimal(octal: Octal): Decimal {
  let decimal: number = 0;
  let base = 1;
  const octits = `${octal}`.split("");

  for (let i = octits.length - 1; i >= 0; i--) {
    decimal += +octits[i] * base;
    base *= 8;
  }

  return decimal;
}
```

## Similar programs

- [Convert Decimal To Octal](/program/convert-decimal-to-octal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Octal To Binary](/program/convert-octal-to-binary)
- [Convert Binary To Octal](/program/convert-binary-to-octal)
- [Convert Binary To Decimal](/program/convert-binary-to-decimal)
- [Convert Hexadecimal To Decimal](/program/convert-hexadecimal-to-decimal)
- [Convert Decimal To Binary](/program/convert-decimal-to-binary)
- [Convert Hexadecimal To Binary](/program/convert-hexadecimal-to-binary)
- [Convert Binary To Hexadecimal](/program/convert-binary-to-hexadecimal)
