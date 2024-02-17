---
title: "Check Valid Date"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "pokharel-nishan",
    "mitrofmep",
    "harmanbatheja15",
    "rksp25",
    "joao-vitor-souza",
    "jaypavasiya",
    "PoweredByCaffein",
    "GalaxyLittlepaws",
    "ahasunos",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T05:00:16Z
trackId: 3694
description: "Write a program to check valid date."
---

## Write a program to check valid date

Check if a given date is valid or not.

```
Input  : 2019-02-29
Output : False
```

---

```c
// Write a C program to check valid date

#include <stdio.h>

int is_leap_year(int year) {
    return (year % 4 == 0 );
}

int is_valid_date(int day, int month, int year) {
    int days_in_month[] = {31, is_leap_year(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month < 1 || month > 12) {
        return 0;
    }
    if (day < 1 || day > days_in_month[month - 1]) {
        return 0;
    }
    return 1;
}

int main() {
    int day, month, year;
    printf("Enter a date (dd/mm/yyyy): ");
    scanf("%d/%d/%d", &day, &month, &year);
    if (is_valid_date(day, month, year)) {
        printf("Valid date\n");
    } else {
        printf("Invalid date\n");
    }
    return 0;
}
```

```csharp
// Write a C# program to check valid date

using System;
using System.Globalization;

namespace DateValidation {
   class Program {
      static void Main(string[] args) {
         DateTime d;
         bool chValidity = DateTime.TryParseExact(
         "2019-02-29",
         "MM/dd/yyyy",
         CultureInfo.InvariantCulture,
         DateTimeStyles.None,
         out d);
         Console.WriteLine(chValidity);
      }
   }
}
```

```cpp
// Write a C++ program to check valid date

#include <iostream>
void Isvalid(int dd, int mm, int yy)
{

    if(yy>=1999 || yy<=2023)
    {
         if (mm>=1 || mm<=12){

             if((dd>=1 || dd<=31) && (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12))
             std::cout<<"date is valid this month contain 31 days";
             else if((dd>=1 && dd<=30) && (mm==4 || mm==6 || mm==9 || mm==11))
             std::cout<<"Date is valid this month contain 30 days";
             else if((dd>=1 && dd<=28) && (mm==2))
             std::cout<<"Date is valid it's feb";
             else if(dd==29 && mm==2 &&(yy%4==0))
             std::cout<<"Date is valid and it's a leap year";
             else
             std::cout<<"Date is not valid";
         }
         else {
         std::cout<<"Month is not valid";
         }
    }
else {
    std::cout<<"Year is not valid";
}
}
int main()
{
    int a,b,c;
    std::cout<<"Enter date:";
    std::cin>>a;
    std::cout<<"Enter month";
    std::cin>>b;
    std::cout<<"Enter year";
    std::cin>>c;

  Isvalid(a,b,c);
    return 0;
}
```

```go
// Write a Go program to check valid date

package main

import (
	"fmt"
	"time"
)

func main() {
	var input string
	fmt.Printf("Enter date in YYYY-MM-DD format: ")
	fmt.Scan(&input)

	_, err := time.Parse("2006-01-02", input)
	if err != nil {
		fmt.Println("Invalid Date")
	} else {
		fmt.Println("Valid Date")
	}

}
```

```java
// Write a Java program to check valid date

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

public class CheckValidDate {

    public static boolean isDateValid(String input) {
        try {
            LocalDate.parse(input);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a date in the format 'yyyy-mm-dd':");
        String input = scanner.nextLine();

        if (isDateValid(input)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}
```

```javascript
// Write a JavaScript program to check valid date

let date = prompt("Enter a date (YYYY-MM-DD): ");

function isValidDate(date) {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  );
}

date = new Date(date);

if (isValidDate(date)) {
  console.log("True");
} else {
  console.log("False");
}
```

```kotlin
// Write a Kotlin program to check valid date

import java.util.Scanner
import java.time.format.DateTimeFormatter

fun main() {
    print("Enter valid date format in yyyy-mm-dd : ")
    println()
    var input = readLine()

    try {
        println("Is $input valid date?: " + CheckValidDate(input!!))
    } catch (exception: Exception) {
        println("Is $input valid date?: " + false)
    }

}

private fun CheckValidDate(date: String): Boolean {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    val formatted = formatter.parse(date)

    return true
}
```

```perl
# Write a Perl program to check valid date

sub isvaliddate {
  my $input = shift;
  if ($input =~ m!^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$!) {
    # At this point, $1 holds the year, $2 the month and $3 the day of the date entered
    if ($3 == 31 and ($2 == 4 or $2 == 6 or $2 == 9 or $2 == 11)) {
      return 'False';
    } elsif ($3 >= 30 and $2 == 2) {
      return 'False';
    } elsif ($2 == 2 and $3 == 29 and not ($1 % 4 == 0 and ($1 % 100 != 0 or $1 % 400 == 0))) {
      return 'False';
    } else {
      return 'True';
    }
  } else {
    return 'False';
  }
}

print isvaliddate('2019-02-29');
```

```php
// Write a PHP program to check valid date

<?php
// variables
$day = 0;
$month = 0;
$year = 0;

// turn yyyy-mm-dd into variables
if (isset($_GET['date'])) {
    $date = $_GET['date'];
    $date = explode('-', $date);
    $year = $date[0];
    $month = $date[1];
    $day = $date[2];
}

//if month is valid
if ($month > 0 && $month < 13) {
    // if day is valid
    if ($day > 0 && $day < 32) {
        // if year is valid
        if ($year > 0 && $year < 9999) {
            // if day is valid for month
            if ($month == 2) {
                if ($day < 30 || ($day == 29 && $year % 4 == 0)) {
                    echo 'True';
                } else {
                    echo 'False';
                }
            } else if ($month == 4 || $month == 6 || $month == 9 || $month == 11) {
                if ($day < 31) {
                    echo 'True';
                } else {
                    echo 'False';
                }
            } else {
                echo 'True';
            }
        } else {
            echo 'False';
        }
    } else {
        echo 'False';
    }
} else {
    echo 'False';
}
```

```python
# Write a Python program to check valid date

from datetime import date

try:
    year, month, day = tuple(map(int, input().split("-")))
    date(year=year, month=month, day=day)
except ValueError:
    print("False")
else:
    print("True")
```

```ruby
# Write a Ruby program to check valid date

# frozen_string_literal: true

require 'date'

def check_valid_date(date)
  Date.parse(date)
  true
rescue ArgumentError
  false
end

if $PROGRAM_NAME == __FILE__
  print 'Input  : '
  date = gets.chomp
  # Match the regular expression for a date
  if date =~ /\d{4}-\d{2}-\d{2}/
    puts "Output : #{check_valid_date(date)}"
  else
    puts 'Output : Invalid date. Date must be in the format YYYY-MM-DD.'
  end
end
```

```typescript
// Write a TypeScript program to check valid date

function isValidDate(d: string | number | any): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    // it is a date
    if (isNaN(d)) {
      // d.getTime() or d.valueOf() will also work
      // date object is not valid
      return false;
    } else {
      // date object is valid
      return true;
    }
  } else {
    return false;
    // not a date object
  }
}

console.log(isValidDate(new Date()));
```
