---
title: "Check Armstrong Number"
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
    "anandfresh",
    "VinayReddy-vr",
    "harshraj8843",
    "AshitaSingamsetty",
    "satishkumarsajjan",
    "rksp25",
    "joao-vitor-souza",
    "MufaddalHakim",
    "Badboy-16",
    "CodingWithHardik",
    "chetanchandel31",
    "Rainingcity",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:07:07Z
trackId: 1236
description: "Write a program to check armstrong number."
---

## Table of contents

## Write a program to check armstrong number

An Armstrong number is a number that is equal to the sum of cubes of its digits.

```
Input  : 153
Output : Armstrong Number
```

---

### C

```c
// Write a C program to check armstrong number

#include <stdio.h>

int is_armstrong(int);
int get_num_of_digits(int);
int raise_power(int, int);

int main() {
    int num;
    printf("Input  : ");
    scanf("%d", &num);
    if (is_armstrong(num)) {
        printf("Output : Armstrong Number");
    } else {
        printf("Output : Not Armstrong Number");
    }
    return 0;
}

int is_armstrong(int n) {
    int original = n;
    int power = get_num_of_digits(n);
    int sum = 0;
    for (int i = 0; i < power; i++, n /= 10) {
        sum += raise_power(n % 10, power);
    }
    return (sum == original) ? 1 : 0;
}

int get_num_of_digits(int n) {
    int result;
    for (result = 1; n /= 10; result++) {
        ;
    }
    return result;
}

int raise_power(int n, int p) {
    int result = 1;
    for (int i = 0; i < p; i++) {
        result *= n;
    }
    return result;
}
```

### C#

```csharp
// Write a C# program to check armstrong number

using System;

namespace ArmstrongNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number, rem, temp, sum = 0;
            Console.Write("Enter a Number : ");
            number = int.Parse(Console.ReadLine());

            temp = number;
            while (number > 0)
            {
                rem = number % 10;
                sum =sum+(rem*rem*rem);
                number= number/ 10;
            }

            if (temp == sum)
                Console.WriteLine(temp + " is an Armstrong Number");
            else
                Console.WriteLine(temp + " is not an Armstrong Number");
            Console.ReadKey();
        }
    }
}
```

### C++

```cpp
// Write a C++ program to check armstrong number

#include <iostream>

bool check_armstrong_number_helper(int number){
    // Max sum of n-digits number <= 9^3*n
    if (number >= 10000) return false;

    int sum = 0;
    int tmp_number = number;
    while(tmp_number != 0){
        int curr_digit = tmp_number % 10;
        sum += curr_digit * curr_digit * curr_digit;
        tmp_number /= 10;
    }
    return (sum == number);
}

void check_armstrong_number(int number){
    if (check_armstrong_number_helper(number)){
        std::cout<<"Armstrong Number"<<std::endl;
    }else{
        std::cout<<"Not Armstrong Number"<<std::endl;
    }
}

int main(){
    check_armstrong_number(153);
    check_armstrong_number(152);
    return 0;
}
```

### Go

```go
// Write a Go program to check armstrong number

package main

import (
	"fmt"
	"math"
)

func isArmStrongNumber(num int) bool{
	numStr := fmt.Sprint(num)
	numDigits := len(numStr)
	sum := 0
	originalNum := num

	for num>0 {
		digit:=num%10
		sum+= int(math.Pow(float64(digit),float64(numDigits)))
		num /=10
	}

	return sum == originalNum
}

func main(){
	var num int
	fmt.Print("Input  : ")
	fmt.Scanln(&num)

	if isArmStrongNumber(num){
		fmt.Println("Output : Armstrong Number")
	} else {
		fmt.Println("Output : Not Armstrong Number")
	}
}
```

### Java

```java
// Write a Java program to check armstrong number

import java.util.*;

public class CheckArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int n = number;
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit * digit;
            n /= 10;
        }

        System.out.println(sum == number);
        sc.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check armstrong number

const getCube = n => n * n * n;

const checkArmstrongNumber = number => {
  if (typeof number !== "number") return "Please enter a valid number.";

  const digitsOfNUmber = String(number)
    .split("")
    .map(digit => Number(digit));

  let sumOfCubesOfDigits = 0;

  digitsOfNUmber.forEach(digit => {
    sumOfCubesOfDigits += getCube(digit);
  });

  const isArmstrong = sumOfCubesOfDigits === number;

  return isArmstrong ? "Armstrong Number" : "Not Armstrong Number";
};

console.log(checkArmstrongNumber(153));
```

### Julia

```julia
# Write a Julia program to check armstrong number

function isArmstrong(x)
    # If the number is less than 0, then it is not a armstrong number.
    if x < 0
        return false
    elseif x == 0
        return "true"
    else
        # Finding the total number of digits in the number
        length = Int(floor(log10(x) + 1))
        result = 0
        temp = x
        for i in 1:length
            val = temp % 10
            # Finding each digit raised to the power total digit and add it to the total sum
            result = result + Int(trunc(val))^length
            temp = temp / 10
        end
        return x == result ? true : false
    end
end

num = 153
if(isArmstrong(num))
 println("Armstrong Number")
else
 println("Not an Armstrong Number")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check armstrong number

fun main() {
    print("Input : ")
    println()
    var nums = readLine()

    println("Output: " + CheckArmstrongNumber(nums!!.toInt()))

}

private fun CheckArmstrongNumber(number: Int): String {
    var originalNumber: Int
    var remainder: Int
    var result = 0

    originalNumber = number

    while (originalNumber != 0) {
        remainder = originalNumber % 10
        result += Math.pow(remainder.toDouble(), 3.0).toInt()
        originalNumber /= 10
    }

    if (result == number)
        return "$number is an Armstrong number."
    else
        return "$number is not an Armstrong number."
}
```

### Perl

```perl
# Write a Perl program to check armstrong number

$number = 153;
$temp 	= $number;
$sum 	= 0;

while($temp != 0)
{
	$rem  = $temp % 10;
	$sum  = $sum + ($rem * $rem * $rem);
	$temp = $temp / 10;
}

if($number == $sum)
{
	print "Armstrong Number";
}
else
{
	print "Not an Armstrong Number";
}
```

### PHP

```php
// Write a PHP program to check armstrong number

<?php
$num=153;
$total=0;
$x=$num;
while($x!=0)
{
$rem=$x%10;
$total=$total+$rem*$rem*$rem;
$x=$x/10;
}
if($num==$total)
{
echo "It is an Armstrong number";
}
else
{
echo "It is not an armstrong number";
}
?>
```

### Python

```python
# Write a Python program to check armstrong number

num = int(input("Input  : "))
sum = 0
temp = num
while temp > 0:
    digit = temp % 10
    sum += digit**3
    temp //= 10
if num == sum:
    print("Output : Armstrong Number")
else:
    print("Output : Non Armstrong Number")
```

### R

```r
# Write a R program to check armstrong number

# Function to check if a number is an Armstrong number
isArmstrong <- function(number) {
  originalNumber <- number
  numDigits <- nchar(number)
  sumOfCubes <- 0

  while (number > 0) {
    digit <- number %% 10
    sumOfCubes <- sumOfCubes + digit^numDigits
    number <- number %/% 10
  }

  return(originalNumber == sumOfCubes)
}

# Example usage
inputNumber <- 407
result <- isArmstrong(inputNumber)

if (result) {
  cat(inputNumber, "is an Armstrong number.\n")
} else {
  cat(inputNumber, "is not an Armstrong number.\n")
}
```

### Ruby

```ruby
# Write a Ruby program to check armstrong number

#!/usr/bin/ruby
def isArmstrong( number )
    result = false
    numberOfDigits = number.to_s.length
    sum = 0
    n = number
    while n > 0
        digit = n % 10
        sum += digit ** numberOfDigits # ** pow
        n /= 10
    end
    result = sum == number
    return result
end

puts "Enter a number"
number=STDIN.gets.to_i

puts "#{number} is an Armstrong number? #{isArmstrong(number)}"
```

### TypeScript

```typescript
// Write a TypeScript program to check armstrong number

const getCube = (n: number) => n * n * n;

const checkArmstrongNumber = (number: number) => {
  const digitsOfNUmber: number[] = String(number)
    .split("")
    .map(digit => Number(digit));

  let sumOfCubesOfDigits: number = 0;

  digitsOfNUmber.forEach(digit => {
    sumOfCubesOfDigits += getCube(digit);
  });

  const isArmstrong = sumOfCubesOfDigits === number;

  return isArmstrong ? "Armstrong Number" : "Not Armstrong Number";
};

console.log(checkArmstrongNumber(153));
```

## Similar programs

- [Find Sum Of Digits Of A Number](/program/find-sum-of-digits-of-a-number)
- [Find Average Of Digits Of A Number](/program/find-average-of-digits-of-a-number)
- [Check Prime Number](/program/check-prime-number)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Check Even Or Odd Number](/program/check-even-or-odd-number)
- [Find Average Of Digits Of A Number By Recursion](/program/find-average-of-digits-of-a-number-by-recursion)
- [Find Sum Of Digits Of A Number By Recursion](/program/find-sum-of-digits-of-a-number-by-recursion)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Cube Of A Number](/program/find-cube-of-a-number)
