---
title: "Find Average Of Digits Of A Number"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "akshithagunupati",
    "anandfresh",
    "harshraj8843",
    "roberanegussie",
    "AdityaNarayanPradhan",
    "sancoLgates",
    "esivakumar18",
    "Fukurokudzu",
    "hi-Kartik2004",
    "rksp25",
    "joao-vitor-souza",
    "ba-ppp",
    "Vignesh-dev07",
    "grraghav120",
    "Frey0-0",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-29T12:24:06Z
trackId: 3293
description: "Write a program to find average of digits of a number."
---

## Write a program to find average of digits of a number

Average of digits of a number is the sum of all digits divided by the number of digits.

```
Input  : 123
Output : 2
```

---

```c
// Write a C program to find average of digits of a number

#include <stdio.h>
#include <string.h>

void main() {

  char num[10000];

  printf("Enter a number: ");
  scanf("%s",num);

  int digit_count = strlen(num);
  double sum=0;

  for(int i = 0; i < digit_count; i++){
            sum += num[i] - '0';
  }

  double average = (double)sum/digit_count;
  printf("Average of digits: %lf\n",average);

}
```

```csharp
// Write a C# program to find average of digits of a number

using System;

public class FindAverageOfDigitsOfANumber {
    public static void Main(String[] args){

    	void avgOfDigitsOfNumber(int n) {
            int sum = 0;
            int count = 0;
            for (int i = n; i > 0; i = i / 10) {
                sum += i % 10;
                count++;
            }
            Console.Write(sum / count);
        }

        Console.Write("Input  : ");
        int n = Convert.ToInt32(Console.ReadLine());
        Console.Write("Output : ");
        avgOfDigitsOfNumber(n);
    }

}
```

```cpp
// Write a C++ program to find average of digits of a number

//Programme to find average of the digits
#include <bits/stdc++.h>
#define ll long long // for typing ease
using namespace std;
int main(){
    // Taking input
    cout<<"Enter the number :";
    string s;    cin>>s;
    double sum=0;

    // Calulation of the sum of the numbers
    for(ll i=0;i<s.length();i++){
            sum += s[i] - '0';
    }

    // displaying output
    cout<<"The average of the digits of this number is :"<<sum/s.length()<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
```

```go
// Write a Go program to find average of digits of a number

package main

import "fmt"

func averageOfDigits(nums[] int) int {
	sum := 0
	for _,
	v := range nums {
		sum += v
	}
	return sum / len(nums)
}

func main() {
	i := [] int {1, 2, 3}
	fmt.Println(averageOfDigits(i))
}
```

```java
// Write a Java program to find average of digits of a number

import java.util.*;

public class FindAverageOfDigitsOfANumber {
    public static double AvgDigit(int n) {
        double count = 0, sum = 0;
        for (int i = n; i > 0; i = i / 10) {
            double mod = i % 10;
            count++;
            sum += mod;
        }
        return sum / count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();
        System.out.println(AvgDigit(n));
    }
}

// Contributed by Raghav Garg (@grraghav120)
```

```javascript
// Write a JavaScript program to find average of digits of a number

function FindAverageOfDigits(num) {
  let sum = 0;
  let digit;
  let no_of_digits = 0;
  while (num > 0) {
    digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
    no_of_digits++;
  }
  return sum / no_of_digits;
}

console.log(FindAverageOfDigits(123));
console.log(FindAverageOfDigits(28356));
```

```kotlin
// Write a Kotlin program to find average of digits of a number

import java.util.Scanner

fun main() {
    print("Enter digit : ")
    println()
    var min = readLine()

    println("Average of digit: " + sumAndAvgOfDigits(min!!.toString()))

}

private fun sumAndAvgOfDigits(n: String):Double {
    val arrOfInt= n.map {"$it".toInt()}
    println("Sum of digit: ${arrOfInt.sum()}")
    val avg = arrOfInt.average()

    return avg
}
```

```perl
# Write a Perl program to find average of digits of a number

print "Please enter the digits of number : ";
my $n = <STDIN>;
chomp $n;
my $sum = 0;
for (my $i = 0; $i < $n; $i++) {
    print "Enter element " . ($i+1) . ": ";
    my $num = <STDIN>;
    chomp $num;
    $sum += $num;

}
my $average = $sum / $n;
printf "Average = %.2f\n", $average;
```

```php
// Write a PHP program to find average of digits of a number

<?php
  function recursiveAdd($arg) {
    if ($arg>9) {
        return $arg%10 + recursiveAdd(floor($arg/10));
    } else {
        return $arg;
    }
  }

  $num = readLine("Enter Number: ");
  $numlength = strlen((string) $num);
  echo recursiveAdd($num)/$numlength;
?>
```

```python
# Write a Python program to find average of digits of a number

# Input Num
num = input("Input  : ")
sum = 0
for i in num:
    sum += int(i)
print("Output :", sum // len(num))
```

```ruby
# Write a Ruby program to find average of digits of a number

module Average

  def self.get_avg(number)
    number.to_s.chars.map(&:to_i).sum / number.to_s.chars.length
    # For float
    # number.to_s.chars.map(&:to_i).sum.to_f / number.to_s.chars.length
  end

end

puts Average.get_avg(123) # => 2
puts Average.get_avg(448) # => 5
```

```swift
// Write a Swift program to find average of digits of a number

import Foundation

/**
 This Swift program calculates the average of digits of a given number.

 - Parameters:
   - number: The input number for which the average of digits is to be calculated.
 - Returns: The average of digits.

Sample Input:
Enter a number:
123

Sample Output:
Average of digits: 2.0

 */
func averageOfDigits(of number: Int) -> Double {
    var sumOfDigits = 0
    var numberOfDigits = 0
    var tempNumber = number

    while tempNumber > 0 {
        sumOfDigits += tempNumber % 10
        tempNumber /= 10
        numberOfDigits += 1
    }

    return numberOfDigits > 0 ? Double(sumOfDigits) / Double(numberOfDigits) : 0
}

// Main program
print("Enter a number:")
if let userInput = readLine(), let inputNumber = Int(userInput) {
    let averageResult = averageOfDigits(of: inputNumber)
    print("Average of digits: \(averageResult)")
} else {
    print("Invalid input. Please enter a valid number.")
}
```

````typescript
// Write a TypeScript program to find average of digits of a number

/**
 *
 * @name This program find average of digits numbers given.
 * @param {number} nums Array of numbers
 * @returns {number}
 *
 * @example
 * ```js
 * const avg1: number = FindAverageOfNumbersTs(123) // 2
 * const avg2: number = FindAverageOfNumbersTs(12345) // 3
 * ```
 */
function findAverageOfDigitsNumberTs(num: number): number {
  let sum = 0;
  let digits = 0;

  if (num === 0) return 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
    digits += 1;
  }

  return sum / digits;
}

// Console Tests
console.log("Average digits of 123.");
console.log("That is" + findAverageOfDigitsNumberTs(123) + "// 2");

console.log("Average digits of 12345.");
console.log("That is" + findAverageOfDigitsNumberTs(12345) + "// 3");

console.log("Average digits of 0.");
console.log("That is" + findAverageOfDigitsNumberTs(0) + "// 0");
````
