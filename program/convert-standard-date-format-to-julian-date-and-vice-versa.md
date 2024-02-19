---
title: "Convert Standard Date Format To Julian Date And Vice Versa"
languages: ["python"]
contributors: ["harshraj8843", "magar51"]
pubDatetime: 2022-01-26
modDatetime: 2024-02-19T07:53:47Z
trackId: 5460
description: "Write a program to convert standard date format to julian date and vice versa."
---

## Table of contents

## Write a program to convert standard date format to julian date and vice-versa

A Julian date is a way of displaying a date that combines the current year with the number of days since the beginning of the year. For example, January 1, 2007 is 2007001, and December 31, 2007 is 2007365.

The first two digits of a Julian date represent the year, and the last three digits represent the number of days since the beginning of the year. For example, 21-001 represents January 1, 2021, and 22-165 represents June 14, 2022.

### Example

```
Input  : 2023-06-10
Output : 2023160
```

---

### Python

```python
# Write a Python program to convert standard date format to julian date and vice versa

import datetime

#Function to convert standard input date into julian date
def stddate_to_jd (std_date):
    fmt='%Y-%m-%d'
    converted_date = datetime.datetime.strptime(std_date, fmt)
    converted_date = converted_date.timetuple()
    jul_date = str(converted_date.tm_year) + '' + str(converted_date.tm_yday)
    return(jul_date)

#Function to convert julian input date into standard date
def jd_to_stddate (jdate):
    fmt = '%Y%j'
    date_std = datetime.datetime.strptime(jdate, fmt).date()
    return(date_std)


print('Please provide input date to be converted : ')
input_date = input()

if len(input_date) == 10:
   return_val = stddate_to_jd(input_date)
   print("Converted date is : ", return_val)
elif len(input_date) == 7:
   return_val = jd_to_stddate(input_date)
   print("Converted date is : " ,return_val)
else:
   print("Incorrect format of date. Please provide correct format.")
```

## Similar programs

- [Check Valid Date](/program/check-valid-date)
- [Check Leap Year](/program/check-leap-year)
- [Find Weekend Days From Number Of Years](/program/find-weekend-days-from-number-of-years)
- [Find Sum Of Digits Of A Number](/program/find-sum-of-digits-of-a-number)
- [Find Average Of Digits Of A Number](/program/find-average-of-digits-of-a-number)
- [Find Average Of Digits Of A Number By Recursion](/program/find-average-of-digits-of-a-number-by-recursion)
- [Convert Days To Weeks](/program/convert-days-to-weeks)
- [Convert Weeks To Days](/program/convert-weeks-to-days)
- [Convert Octal To Hexadecimal](/program/convert-octal-to-hexadecimal)
- [Convert Hexadecimal To Octal](/program/convert-hexadecimal-to-octal)
