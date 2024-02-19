---
title: "Convert Time From 12 Hour To 24 Hour Format"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "go",
    "php",
    "perl",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "ApurvaR1",
    "anandfresh",
    "AshitaSingamsetty",
    "jfinley6",
    "bhavesh20-mb",
    "joao-vitor-souza",
    "Mux199",
    "its-kundan",
    "greeshma-d",
    "umutkorkmaaz",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T17:30:53Z
trackId: 3809
description: "Write a program to convert time from 12 hour to 24 hour format."
---

## Table of contents

## Write a program to convert time from 12-hour to 24-hour format

```
Input  : 12:05:45PM
Output : 12:05:45
```

---

### C

```c
// Write a C program to convert time from 12 hour to 24 hour format

// 12 to 24 hours conversion..
// by: Kundan Kumar
#include<stdio.h>
#include<string.h>
int main()
{
    int hour, minute, ss;
    char a[3];
    printf("Enter hours :   \t");
    scanf("%d", &hour);
    printf("Enter minutes : \t");
    scanf("%d", &minute);
    printf("Enter seconds : \t");
    scanf("%d", &ss);
    printf("Enter am (for morning) and pm (for evening):\t");
    scanf("%s", &a);
    /*
     * user is allowed to enter time only in 12-hour format
     * so that 'hh' cannot be greater than 12.
     */
    if(hour <= 12 && minute <= 59 && ss <= 59)
    {
        if((strcmp(a,"PM") == 0) || (strcmp(a,"pm") == 0)
           && (hour != 0) && (hour != 12))
        {
            hour = hour + 12;
        }
        if((strcmp(a,"AM") == 0) || (strcmp(a,"am") == 0) && (hour == 12))
        {
            hour = 0;
        }
        printf("The obtained 24-hour format of input is :  \t");
        printf("%02d:%02d:%02d", hour, minute, ss);
        printf("\n\n");
    }
    else
    {
        printf("Provide the correct inputs.");
    }
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert time from 12 hour to 24 hour format

using System;
namespace Demo {
   public class Program {
      public static void Main(string[] args) {
         DateTime d = DateTime.Parse("12:05:45 PM");
         Console.WriteLine(d.ToString("HH:mm"));
      }
   }
}
```

### C++

```cpp
// Write a C++ program to convert time from 12 hour to 24 hour format

// C++ program to convert 12 hour to 24 hour
// format
#include<iostream>
using namespace std;

void print24(string str)
{
    // Get hours
    int h1 = (int)str[1] - '0';
    int h2 = (int)str[0] - '0';
    int hh = (h2 * 10 + h1 % 10);

    if (hh > 12){
        cout << "Are you sure that the time is in 12-hour format \n";
    }
    else {
        // If time is in "AM"
        if (str[8] == 'A')
        {
            if (hh == 12)
            {
                cout << "00";
                for (int i=2; i <= 7; i++)
                    cout << str[i];
            }
            else
            {
                for (int i=0; i <= 7; i++)
                    cout << str[i];
            }
        }

        // If time is in "PM"
        else
        {
            if (hh == 12)
            {
                cout << "12";
                for (int i=2; i <= 7; i++)
                    cout << str[i];
            }
            else
            {
                hh = hh + 12;
                cout << hh;
                for (int i=2; i <= 7; i++)
                    cout << str[i];
            }
        }
    }
}

int main()
{
   string str = "13:05:45PM";
   print24(str);
   return 0;
}
```

### Go

```go
// Write a Go program to convert time from 12 hour to 24 hour format

package main

import (
"fmt"
"strings"
)

func convertTimeTo24HourFormat(time12 string) string {
    hour := time12[:2]
    period := strings.ToUpper(time12[len(time12)-2:])
    time := time12[:len(time12)-2]
    if period == "PM" && hour != "12" {
        hourInt := int(hour[0]-'0')*10 + int(hour[1]-'0') + 12
        hour = fmt.Sprintf("%02d", hourInt)
    } else if period == "AM" && hour == "12" {
        hour = "00"
    }
    return hour + time[2:]
    }

func main() {
    var time12 string
    fmt.Print("Input : ")
    fmt.Scanln(&time12)
    time24 := convertTimeTo24HourFormat(time12)
    fmt.Println("Output :", time24)
}
```

### Java

```java
// Write a Java program to convert time from 12 hour to 24 hour format

import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;

public class convert_time_from_12_hour_to_24_hour_format {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hours:(hh:mm:ssaa) ");
        String input = sc.next();
        String[] time = input.split(":");
        sc.close();
        String twelveHoursTime = "";
        try {
            switch(time.length) {
                case 1:
                    twelveHoursTime = time[0].substring(0, time[0].length()-2)+":00:00"+time[0].substring(time[0].length()-2, time[0].length());
                    break;
                case 2:
                    twelveHoursTime = time[0]+":"+time[1].substring(0, time[1].length()-2)+":00"+time[1].substring(time[1].length()-2, time[1].length());
                    break;
                default:
                    twelveHoursTime = input;
                    break;
            }
            SimpleDateFormat df = new SimpleDateFormat("hh:mm:ssaa");
            Date date = df.parse(twelveHoursTime);
            System.out.println("Output : " + new SimpleDateFormat("HH:mm:ss").format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert time from 12 hour to 24 hour format

function convertTimeTo24Hours(time) {
  let splitDate = time.split(":");
  let parsedDate = parseInt(splitDate[0]);
  let ampm = splitDate[2].replace(/[^a-zA-Z]+/g, "");
  let convertedDate = 0;

  if (ampm === "PM") {
    if (parsedDate == 12) {
      convertedDate = 12;
    }
    if (parsedDate < 12) {
      convertedDate = parsedDate + 12;
    }
  }
  if (ampm === "AM") {
    if (parsedDate == 12) {
      convertedDate = 0;
    } else {
      convertedDate = parsedDate;
    }
  }

  console.log(convertedDate + `:${splitDate[1]}:${splitDate[2]}`);
}

convertTimeTo24Hours("12:05:45AM");
```

### Perl

```perl
# Write a Perl program to convert time from 12 hour to 24 hour format

#!/usr/bin/env perl
use strict;
use warnings;

sub time_12h_to_24h
{
    my($t12) = @_;
    my($hh,$mm,$ampm) = $t12 =~ m/^(\d\d?):(\d\d?)\s*([AP]M?)/i;
    $hh = ($hh % 12) + (($ampm =~ m/AM?/i) ? 0 : 12);
    return sprintf("%.2d:%.2d", $hh, $mm);
}

print time_12h_to_24h("10:10 PM");
```

### PHP

```php
// Write a PHP program to convert time from 12 hour to 24 hour format

<?php


function convert_time_from_12_hour_to_24_hour_format($hour){
	return date("H:i:s", strtotime($hour));
}

echo convert_time_from_12_hour_to_24_hour_format("11:05:45PM");
```

### Python

```python
# Write a Python program to convert time from 12 hour to 24 hour format

full_hour = input()
period = full_hour[-2:]

if period == "AM":
    print(full_hour[:-2])
elif period == "PM":
    hour, minute, second = full_hour.split("PM")[0].split(":")
    hour = int(hour)
    if hour + 12 != 24:
        hour += 12
    print(f"{hour}:{minute}:{second}")
```

### R

```r
# Write a R program to convert time from 12 hour to 24 hour format

convert_to_24_hour_format <- function(time_12h) {
    # Split the time into components
    parts <- strsplit(time_12h, "[:APM]")[[1]]

    hour <- as.integer(parts[1])
    minute <- parts[2]
    second <- parts[3]
    am_pm <- substr(time_12h, nchar(time_12h)-1, nchar(time_12h))

    # Convert hour from 12-hour format to 24-hour format
    if (am_pm == "PM" && hour < 12) {
        hour <- hour + 12
    } else if (am_pm == "AM" && hour == 12) {
        hour <- 0
    }

    # Format and return the time in 24-hour format
    sprintf("%02d:%s:%s", hour, minute, second)
}

# Example usage
input_time <- "12:05:45PM"
output_time <- convert_to_24_hour_format(input_time)
print(output_time)
```

### Ruby

```ruby
# Write a Ruby program to convert time from 12 hour to 24 hour format

def convertTimeTo24Hours(string)
    splitTime = string.split(":")
    ampm = splitTime.last.gsub(/[^a-zA-Z]/, "")
    hour = splitTime.first.to_i

    ampm == "PM" ?
        if hour == 12
            newHour = hour
        elsif hour < 12
            newHour = hour + 12
        end
     :
        if (hour == 12)
            newHour = 0
        else
            newHour = hour
        end

    newHour.to_s + ":#{splitTime[1]}" + ":#{splitTime[2].gsub(/[^0-9]/, "")}"

end

puts convertTimeTo24Hours("12:05:45PM")
```

### TypeScript

```typescript
// Write a TypeScript program to convert time from 12 hour to 24 hour format

function convertTimeTo24Hours(time: string) {
  const splitDate = time.split(":");
  const parsedDate = parseInt(splitDate[0]);
  const ampm = splitDate[2].replace(/[^a-zA-Z]+/g, "");
  let convertedDate = 0;

  if (ampm === "PM") {
    if (parsedDate == 12) {
      convertedDate = 12;
    }
    if (parsedDate < 12) {
      convertedDate = parsedDate + 12;
    }
  }
  if (ampm === "AM") {
    if (parsedDate == 12) {
      convertedDate = 0;
    } else {
      convertedDate = parsedDate;
    }
  }

  console.log(convertedDate + `:${splitDate[1]}:${splitDate[2]}`);
}

convertTimeTo24Hours("12:05:45AM");
```

## Similar programs

- [Convert Time From 24 Hour To 12 Hour Format](/program/convert-time-from-24-hour-to-12-hour-format)
- [Convert Hours To Minutes](/program/convert-hours-to-minutes)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
- [Convert Hours To Seconds](/program/convert-hours-to-seconds)
- [Convert Seconds To Hours](/program/convert-seconds-to-hours)
- [Convert Hours To Days](/program/convert-hours-to-days)
- [Convert Days To Hours](/program/convert-days-to-hours)
- [Convert Inches To Feet](/program/convert-inches-to-feet)
- [Convert Feet To Inches](/program/convert-feet-to-inches)
- [Calculate The Permutation Of N Objects Taken R At A Time](/program/calculate-the-permutation-of-n-objects-taken-r-at-a-time)
