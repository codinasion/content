---
title: "Check Leap Year"
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
    "anandfresh",
    "esivakumar18",
    "pokharel-nishan",
    "rksp25",
    "Obasanmii",
    "PoweredByCaffein",
    "anshu-6537",
    "kituuu",
    "greeshma-d",
    "SyarifulMsth",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3346
description: "Write a program to check leap year."
---

## Write a program to check leap year

Leap years are years that are divisible by 4, but not by 100, unless they are also divisible by 400. For example, 1996 is a leap year, but 1900 is not. Write a function that takes a year as a parameter and returns True if the year is a leap year, False otherwise.

```
Input  : 2016
Output : Leap Year
```

---

```c
// Write a C program to check leap year

#include <stdio.h>
#include <stdbool.h> // Header-file for boolean data-type.

bool checkLeapYear(int year); // Declaring function.

int main()
{
    // Taking input from the user
    printf("Enter the year: ");
    int year;
    scanf("%d", &year);
    printf("\n");
    bool result = checkLeapYear(year); // Calling function.
    if (result)
    {
        printf("%d is a leap year.\n", year);
    }
    else
    {
        printf("%d is not a leap year.\n", year);
    }
    return 0;
}

// Function to check if the year is leap year or not.
bool checkLeapYear(int year)
{
    if (year % 4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}
```

```csharp
// Write a C# program to check leap year

using System;
namespace CheckLeapYear
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a Year : ");
            int Year = int.Parse(Console.ReadLine());
            if (((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0)) Console.WriteLine("{0} is a Leap Year.", Year);
            else Console.WriteLine("{0} is not a Leap Year.", Year);
            Console.ReadLine();
        }
    }
}
```

```cpp
// Write a C++ program to check leap year

#include <iostream>
using namespace std;

int main() {

  int year;

  cout << "Enter a year: ";
  cin >> y;

  if (y % 4 == 0) {
    if (y % 100 == 0) {
      if (y % 400 == 0) {
        cout << y << " is a leap year.";
      }
      else {
        cout << y << " is not a leap year.";
      }
    }
    else {
      cout << y << " is a leap year.";
    }
  }
  else {
    cout << y << " is not a leap year.";
  }

  return 0;
}
```

```dart
// Write a Dart program to check leap year

import 'dart:io';

bool isLeapYear(int year) {
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

void main() {
  print("Enter a year: ");
  int year = int.parse(stdin.readLineSync()!);

  if(isLeapYear(year)){
    print("Leap Year");
  }else{
    print("Not a leap year");
  }
}
```

```go
// Write a Go program to check leap year

package main

import "fmt"

func main() {
	var input int
	fmt.Printf("Enter Year: ")
	fmt.Scan(&input)

	if (input%400 == 0) || ((input%4 == 0) && (input%100 != 0)) {
		fmt.Printf("%v is a Leap Year\n", input)
	} else {
		fmt.Printf("%v is NOT a Leap Year\n", input)
	}

}
```

```java
// Write a Java program to check leap year

import java.util.Scanner;

public class CheckLeapYear {

  public static void main(String[] args) {
    System.out.print("Enter year : ");
    Scanner sc = new Scanner(System.in);
    int year = sc.nextInt();
    sc.close();

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      System.out.println(year + " is a leap year.");
    } else {
      System.out.println(year + " is not a leap year.");
    }
  }
}
```

```javascript
// Write a JavaScript program to check leap year

// program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = prompt("Enter a year:");
checkLeapYear(year);
```

```julia
# Write a Julia program to check leap year

function is_leap_year(year::Int)
    return (year % 4 == 0) && !((year % 100 == 0) && (year % 400 != 0))
end

println(is_leap_year(2016))
```

```kotlin
// Write a Kotlin program to check leap year

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Is $min leap year?: " + CheckLeapYear(min!!.toInt()))

}

private fun CheckLeapYear(year: Int): Boolean {

    var leap = false

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            // year is divisible by 400, hence the year is a leap year
            leap = year % 400 == 0
        } else
            leap = true
    } else
        leap = false

    println(if (leap) "$year is a leap year." else "$year is not a leap year.")

    return leap
}
```

```perl
# Write a Perl program to check leap year

print "Enter Year: ";
$year=<STDIN>;
  if( (0 == $year % 4) && (0 != $year % 100) || (0 == $year % 400) )
    {
        print "Leap year";
    }
    else
    {
        print "Not a leap year";
    }
```

```php
// Write a PHP program to check leap year

<?php
function leapyear($year){
    if($year % 4 == 0 && $year % 100 != 0 || $year % 400 == 0){
        echo "$year is a leap year";
    }else{
        echo "$year is not a leap year";
    }
}
?>
```

```python
# Write a Python program to check leap year

# Program to check leap year
def check_leap_year(year):
    """
    Function to check leap year
    :param year:
    :return True if leap year else False::

    >>> 2000
    2000 is a leap year
    >>> 2022
    2022 is not a leap year
    >>> 2020
    2020 is a leap year
    >>> -2000
    Teackback (most recent call last):
    ...
    ValueError: Year cannot be negative
    """

    if year < 0:
        raise ValueError("Year cannot be negative")

    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False


# Taking input from user
year_user = int(input("Enter a year: "))
if check_leap_year(year_user):
    print(year_user, "is a leap year")
else:
    print(year_user, "is not a leap year")
```

```ruby
# Write a Ruby program to check leap year

print "Enter year : \n"
year = gets.chomp.to_i
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
  print "#{year} is a leap year"
else
  print "#{year} is not a leap year"
end
```

```swift
// Write a Swift program to check leap year

import Swift
import Foundation

var year = 2016

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
  print("\(year) is a leap year")
} else {
  print("\(year) is not a leap year")
}
```

```typescript
// Write a TypeScript program to check leap year

function checkLeapYear(year: number) {
  let isLeapYear = "";
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    isLeapYear = `${year} is a leap year`;
  } else {
    isLeapYear = `${year} is not a leap year`;
  }
  return isLeapYear;
}

console.log(checkLeapYear(2022));
```
