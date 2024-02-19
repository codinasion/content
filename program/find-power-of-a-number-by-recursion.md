---
title: "Find Power Of A Number By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "dart",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "MaryamMansour",
    "anandfresh",
    "sancoLgates",
    "Osher160",
    "Ipankaj07",
    "anastazir",
    "RShalman",
    "AthiraKadampatta",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 531
description: "Write a program to find power of a number by recursion."
---

## Table of contents

## Write a program to find power of a number by recursion

Power of a number is calculated by multiplying the number by itself for the given number of times. For example, 2^3 = 2 _ 2 _ 2 = 8.

Power of a number can be calculated by recursion. The formula is:

```
x^n = x * x^{n-1}
```

```
Input  : 2 3
Output : 8
```

---

### C

```c
// Write a C program to find power of a number by recursion

#include <stdio.h> /* printf, scanf */

/*assuming that num and exponent are positive and natural*/
int PowerOf(int num,int expo);

int main()
{
    int num =0;
    int expo =0;

    if(scanf("%d %d",&num, &expo) != 2)
    {
        return -1;
    }

    printf("%d",PowerOf(num,expo));

    return 0;

}

int PowerOf(int num,int expo)
{
    if(expo == 1)
    {
        return num;
    }

    return PowerOf(num,expo -1) * num;
}
```

### C#

```csharp
// Write a C# program to find power of a number by recursion

using System;
public class Power
{

 public static void Main()
	{
    int bNum,pwr;
    int result;

    Console.Write(" Input the base  value : ");
    bNum = Convert.ToInt32(Console.ReadLine());

    Console.Write(" Input the exponent : ");
    pwr = Convert.ToInt32(Console.ReadLine());

    result=CalcuOfPower(bNum,pwr);

    Console.Write(" The value of {0} to the power of {1} is : {2} \n\n",bNum,pwr,result);
	}

public static int CalcuOfPower( int x,int y)
 {
  if (y == 0)
   return 1;
  else
   return x * CalcuOfPower( x, y - 1 );
 }
}
```

### C++

```cpp
// Write a C++ program to find power of a number by recursion

#include<iostream> //cout, cin

//finding the power of a number, assuming that the base and exponent are positive and natural
int PowerOfNumRec(int base,int expo);

int main()
{
    int base = 0;
    int expo = 0;

    std::cout << "please enter base number and than exponent number:" << std::endl;

    std::cin >> base >> expo;

    std::cout << PowerOfNumRec(base,expo) << std::endl;
}


int PowerOfNumRec(int base,int expo)
{
    if(expo == 1)
    {
        return base;
    }

    return base * PowerOfNumRec(base,expo - 1);
}
```

### Dart

```dart
// Write a Dart program to find power of a number by recursion

import 'dart:io';

int calculatePowerRec(int base, int exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * calculatePowerRec(base, exponent - 1);
  }
}

void main() {
  stdout.write("Enter the base: ");
  int base = int.parse(stdin.readLineSync()!);

  stdout.write("Enter the exponent: ");
  int exponent = int.parse(stdin.readLineSync()!);

  int result = calculatePowerRec(base, exponent);
  print(result);
}
```

### Go

```go
// Write a Go program to find power of a number by recursion

package main

import "fmt"

func power(num float64, pow float64) float64 {
	if pow == 0 {
		return 1
	}
	return num * power(num, pow - 1)
}

func main() {
	var base float64
	var exponent float64

	fmt.Print("Enter base number: ")
	fmt.Scan(&base)

	fmt.Print("Enter power of exponent: ")
	fmt.Scan(&exponent)

	fmt.Println(power(base, exponent))
}
```

### Java

```java
// Write a Java program to find power of a number by recursion

import java.util.Scanner;

class FindPowerOfANumberByRecursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = scanner.nextInt();
        System.out.print("Enter the power: ");
        int power = scanner.nextInt();

        if (power < 0 || number < 0) {
            System.out.println("Invalid input/Power can't be negative");
        } else {
            System.out.println(number + "^" + power + " = " + findPower(number, power));
        }
    }

    private static long findPower(int number, int power) {
        if (power == 0) {
            return 1;
        } else {
            return number * findPower(number, power - 1);
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find power of a number by recursion

export function findPowerOfANumberByRecursion(
  number,
  power,
  poweredNumber = number,
  counter = 1
) {
  if (power === 0) return 1;

  if (power === counter) return poweredNumber;

  return findPowerOfANumberByRecursion(
    number,
    power,
    poweredNumber * number,
    ++counter
  );
}
```

### PHP

```php
// Write a PHP program to find power of a number by recursion

<?php

function power($num, $pow){
    if($pow === 0) return 1;
    return $num * power($num, $pow-1);
}

print power(2,3)

?>
```

### Python

```python
# Write a Python program to find power of a number by recursion

def power(base, exp):
    if exp == 1:
        return base
    if exp != 1:
        return base * power(base, exp - 1)


base = int(input("Enter base  : "))
pow = int(input("Enter power : "))

print("\nResult :", power(base, pow))
```

### Ruby

```ruby
# Write a Ruby program to find power of a number by recursion

# frozen_string_literal: true

puts 'This program calculates the power of a number.'
print 'Enter the base number: '
num1 = gets.chomp.to_i
print 'Enter the power or exponent: '
num2 = gets.chomp.to_i

def power(num1, num2)
  return 'Power/exponent cannot be negative' if num2.negative?
  return 1 if num2.zero?

  num1 * power(num1, num2 - 1)
end

puts "#{num1}^#{num2} = #{power(num1, num2)}"
```

### TypeScript

```typescript
// Write a TypeScript program to find power of a number by recursion

const number = 2;
const pow = 3;

function power(num: number, exponent: number): number {
  return exponent == 0 ? 1 : num * power(num, exponent - 1);
}

console.log("Number :", number);
console.log("Power :", pow);

console.log("Output :", power(number, pow));
```

## Similar programs

- [Find Power Of A Number](/program/find-power-of-a-number)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Sum Of Digits Of A Number By Recursion](/program/find-sum-of-digits-of-a-number-by-recursion)
- [Find Factorial Of A Number By Recursion](/program/find-factorial-of-a-number-by-recursion)
- [Find Average Of Digits Of A Number By Recursion](/program/find-average-of-digits-of-a-number-by-recursion)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Sum Of Numbers By Recursion](/program/find-sum-of-numbers-by-recursion)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Square Of A Number](/program/find-square-of-a-number)
- [Check Prime Number](/program/check-prime-number)
