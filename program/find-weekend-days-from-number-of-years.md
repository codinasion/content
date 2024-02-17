---
title: "Find Weekend Days From Number Of Years"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "gilarellano",
    "sancoLgates",
    "akaliacius",
    "abdurafeyf",
    "abhisek-1221",
    "coderr19",
    "Preetiraj3697",
    "Anujsharma002",
    "turtlebeasts",
    "kvaithin",
    "FINUSAM",
    "Dimarond",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 6908
description: "Write a program to find weekend days from number of years."
---

## Write a program to find weekend days from number of years

Weekend means Saturday & Sunday together. In total, we have 52 weeks in a year. So there are 52 weekends in a year. So, in normal we have 104 Weekend Days.

```
Input  : 1
Output : 104
```

---

```c
// Write a C program to find weekend days from number of years

#include <stdio.h>


int main(void)
{
	int years;
	printf("How many years do you want to convert to weekends?\n");

    //keep asking input until valid
    while (scanf("%d", &years) != 1)
    {
        printf("Enter a valid number!\n");
        //clear input buffer
        while (getchar() != '\n')
        {}
    }
    if (years <= 0)
    {
        printf("Invalid input: must be a positive number!");
        return 1;
    }

	int weekends = years * 104;
	printf("%d weekends are in %d years\n", weekends, years);
	return 0;
}
```

```csharp
// Write a C# program to find weekend days from number of years

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the number of Year : ");
    double year = Convert.ToDouble(Console.ReadLine());
    double weekends = year * 104;
    Console.WriteLine(year+" year has "+weekends+" weekends");
  }
}
```

```cpp
// Write a C++ program to find weekend days from number of years

#include<iostream>
using namespace std;
int main()
{
int year;
 cin>>year*104;
  return 0;
}
```

```dart
// Write a Dart program to find weekend days from number of years

import 'dart:io';
void main(){
  print("Enter no of years : ");
  var years=int.parse(stdin.readLineSync());
  var weekenddays = years*104;
  print(weekenddays);
}
```

```fsharp
// Write a F# program to find weekend days from number of years

let findWeekendDays (years: int) =
    let totalWeekends = years * 104
    printfn "Total weekend days in %d years: %d" years totalWeekends

findWeekendDays 1 // replace 1 with any number of years you want to calculate for
```

```go
// Write a Go program to find weekend days from number of years

package main

import "fmt"

func totalWeekendOfYears(num int) int {
	return num * 104
}

func main() {
	var i int
	fmt.Print("Input Number of Years: ")
	fmt.Scan(&i)
	total := totalWeekendOfYears(i)
	fmt.Printf("Total Weekend Days: %d \n", total)
}
```

```haskell
-- Write a Haskell program to find weekend days from number of years

main = do
    putStrLn "Input Number of Years: "
    line <- getLine
    let int = (read line :: Int)
    putStrLn ("Total Weekend Days: " ++ show (totalWeekends int))

totalWeekends n = n * 104
```

```java
// Write a Java program to find weekend days from number of years

import java.util.Scanner;

public class FindWeekendDaysFromNumberOfYears{
    public static void main(String[] args){

        int years, weekends;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number of years : ");
        years = scanner.nextInt();

        weekends = years * 52 * 2;
        System.out.println(weekends);

        scanner.close();

    }
}
```

```javascript
// Write a JavaScript program to find weekend days from number of years

// Run the program using NodeJS
// type in terminal:
// node FindWeekendDaysFromNumberOfYears.js

//solution
const weekendDays = 104;
function weekendsInYear(year) {
  if (year <= 0) {
    console.log(`Please enter valid year: ${year} invalid`);
  } else if (isNaN(year)) {
    console.log(`Please enter a number: ${year} is not a number`);
  } else {
    console.log(`total weekend days: ${year * weekendDays}`);
  }
}

weekendsInYear(1);
```

```julia
# Write a Julia program to find weekend days from number of years

function count_weekend_days(years::Int)
    total_weeks = years * 52
    total_weekend_days = total_weeks * 2
    num_sundays = Int(floor(years / 4))  # accounting for leap years
    num_weekend_days = total_weekend_days - num_sundays
    return num_weekend_days
end
num_years = readline()
num_years = parse(Int64, num_years)
weekend_days = count_weekend_days(num_years)
println("There are $(weekend_days) weekend days in $(num_years) years.")

#The function count_weekend_days takes an integer input years that represents the number of years for which we want to calculate the number of weekend days. It calculates the total number of weeks in those years by multiplying the number of years by 52 (assuming 52 weeks in a year). It then multiplies this by 2 to get the total number of weekend days.

#To account for leap years, the function calculates the number of Sundays that occurred during those years. We can do this by dividing the number of years by 4 and taking the floor of the result, since there is an extra day (February 29th) in a leap year.
```

```kotlin
// Write a Kotlin program to find weekend days from number of years

fun getWeekendDays(years: Int): Int {
    val numOfWeekendsInAYear = 52;
    return years * numOfWeekendsInAYear
}
```

```perl
# Write a Perl program to find weekend days from number of years

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the number of year : ";
my $num = <STDIN>;
my $weekend = $num * 104;
print "Weekend days : ".$weekend, "\n";
```

```php
// Write a PHP program to find weekend days from number of years

<?php
function weekendDays($year){
    $weekend = 104;
    return $year * $weekend;
}

echo weekendDays(2)
?>
```

```python
# Write a Python program to find weekend days from number of years

import datetime

def count_weekend_days(years):
    start_date = datetime.date.today()
    end_date = start_date + datetime.timedelta(days=years*365)

    weekend_days = 0
    for i in range((end_date - start_date).days):
        day = start_date + datetime.timedelta(days=i)
        if day.weekday() >= 5:
            weekend_days += 1

    return weekend_days

years = int(input("Enter number of years: "))
weekend_days = count_weekend_days(years)
print(f"Number of weekend days in {years} years: {weekend_days}")
```

```r
# Write a R program to find weekend days from number of years

years = 1
weekendDays = years * 104;
cat("Weekend days: ", weekendDays)
```

```ruby
# Write a Ruby program to find weekend days from number of years

def weekendDays(year)
  year * 104
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the number of years : '
  year = gets.chomp.to_i

  puts "#{year} year has #{weekendDays(year)} weekends"
end
```

```rust
// Write a Rust program to find weekend days from number of years

use std::io;

fn main() {
    // Read input from user
    println!("Enter the number of years:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let years: i32 = input.trim().parse().expect("Invalid input");

    // Calculate number of weekends
    let weekends = years * 104;

    // Display output
    println!("Number of weekend days in {} years: {}", years, weekends);
}
```

```scala
// Write a Scala program to find weekend days from number of years

import scala.io.StdIn._;

object weekendDays {
  def main(args:Array[String]):Unit={
    val num = readLine().toInt;
    println("Enter a number of year : "+num);
    val weekend = num * 104;
    println("Weekend days :"+weekend);
  }
}
```

```swift
// Write a Swift program to find weekend days from number of years

import Foundation

func isLeapYear(_ year: Int) -> Bool {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

func countWeekendDays(inYears years: Int) -> Int {
    let currentDate = Date()
    let calendar = Calendar.current
    let currentYear = calendar.component(.year, from: currentDate)

    var weekendDays = 0
    for year in currentYear..<(currentYear + years) {
        weekendDays += 104 // 52 weekends * 2 days per weekend

        if isLeapYear(year) {
            let leapYearStartDate = calendar.date(from: DateComponents(year: year, month: 1, day: 1))!
            let leapYearStartDay = calendar.component(.weekday, from: leapYearStartDate)

            if leapYearStartDay == 7 { // Saturday
                weekendDays += 1
            } else if leapYearStartDay == 6 { // Friday
                weekendDays += 2
            }
        }
    }

    return weekendDays
}

// Example usage
let numberOfYears = 1
let totalWeekendDays = countWeekendDays(inYears: numberOfYears)
print("Total weekend days in \(numberOfYears) years: \(totalWeekendDays)")
```

```typescript
// Write a TypeScript program to find weekend days from number of years

function weekendsInYear(year: number): number {
  const weekendDays: number = 104;
  if (year <= 0) {
    console.log(`Please enter valid year: ${year} invalid`);
  } else if (isNaN(year)) {
    console.log(`Please enter a number: ${year} is not a number`);
  } else {
    console.log(`Total weekend days: ${year * weekendDays}`);
  }
}

weekendsInYear(2);
```
