---
title: "Print Number To Words In Indian Numbering System"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "typescript",
    "go",
    "php",
    "python",
  ]
contributors:
  [
    "larsjarred9",
    "harshraj8843",
    "MadhuS-1605",
    "Ariel201711",
    "pandfun",
    "FINUSAM",
    "anandfresh",
    "harmanbatheja15",
    "joao-vitor-souza",
    "Vignesh-dev07",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-25T05:21:37Z
trackId: 1312
description: "Write a program to print number to words in indian numbering system."
---

## Table of contents

## Write a program to print number to words in indian numbering system

```
Input  : 123456789
Output : Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine
```

---

### C

```c
// Write a C program to print number to words in indian numbering system

#include <stdio.h>

static char *words[] = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
				 "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
				 "Fiveteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};


static char *tens[] = {"", "", "Twenty", "Thirty", "Forty", "Fifty",
				 "Sixty", "Seventy", "Eighty", "Ninety"};


static char *face_val[] = {"Crore", "Lakh", "Thousand", "Hundred"};
static int divisor[] = {10000000, 100000, 1000, 100, 1};


void parse(int n)
{
	if (n < 20)
		printf("%s", words[n]);
	else {
		printf("%s %s", tens[n/10], words[n%10]);
	}
}

void main()
{
	int n, div;

	printf("Enter number: ");
	scanf("%d", &n);

	if (n == 0) {
		printf("Zero\n");
		return;
	}

	for(int i = 0; i < 5; ++i) {
		div = divisor[i];
		if ((n/div) != 0) {
			parse(n/div);
			if (i == 4)
				continue;

			printf(" %s ", face_val[i]);
		}

		n %= div;
	}
	printf("\n");

	return;
}
```

### C#

```csharp
// Write a C# program to print number to words in indian numbering system

using System;

public class numToWords
{
	public static String numberToWords(long n)
	{
		var limit = 1000000000000L;
		long curr_hun;
		var t = 0;
		if (n == 0)
		{
			return ("Zero");
		}
		String[] multiplier = {"", "Trillion", "Billion", "Million", "Thousand"};
		String[] first_twenty = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
		String[] tens = {"", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};

		if (n < 20L)
		{
			return (first_twenty[(int)n]);
		}
		var answer = "";
		for (long i = n; i > 0;
		i %= limit,
		limit /= 1000)
		{
			curr_hun = i / limit;
			while (curr_hun == 0)
			{
				i %= limit;
				limit /= 1000;
				curr_hun = i / limit;
				++t;
			}

			if (curr_hun > 99)
			{
				answer += (first_twenty[(int)((int)curr_hun / 100)] + " Hundred ");
			}
			curr_hun = curr_hun % 100;
			if (curr_hun > 0 && curr_hun < 20)
			{
				answer += (first_twenty[(int)curr_hun] + " ");
			}
			else if (curr_hun % 10 == 0 && curr_hun != 0)
			{
				answer += (tens[(int)((int)curr_hun / 10) - 1] + " ");
			}
			else if (curr_hun > 20 && curr_hun < 100)
			{
				answer += (tens[(int)((int)curr_hun / 10) - 1] + " " + first_twenty[(int)curr_hun % 10] + " ");
			}

			if (t < 4)
			{
				answer += (multiplier[(int)++t] + " ");
			}
		}
		return (answer);
	}
	public static void Main(String[] args)
	{
		Console.WriteLine(numToWords.numberToWords(123456789));
	}
}
```

### C++

```cpp
// Write a C++ program to print number to words in indian numbering system

#include <iostream>
using namespace std;


string compute(int num){
    string words[] = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fiveteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    string tens[] = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    if (num<20){
        return words[num];
    } else {
        return tens[num/10] + " " + words[num%10];
    }
}

int main(){

    //Variables Declaring & Initializing
    string face_value[] = {"Crore", "Lakh", "Thousand", "Hundred"};
    int divisor_array[] = {10000000, 100000, 1000, 100, 1};
    int num, divisor;

    //Input from User
    cout << "Enter number : ";
    cin >> num;

    //Checking whether zero
    if(num==0) cout << "Zero";

    //Converting and Printing to Words
    for(int i=0; i<=4; i++){
        divisor = divisor_array[i];
        if (num/divisor!=0) cout << compute(num/divisor) << " " << face_value[i] << " ";
        num = num%divisor;
    }

    return 0;

}
```

### Go

```go
// Write a Go program to print number to words in indian numbering system

package main

import (
	"fmt"
	"strings"
)

var (
	onesMap = map[int]string{
		0:  "",
		1:  "One",
		2:  "Two",
		3:  "Three",
		4:  "Four",
		5:  "Five",
		6:  "Six",
		7:  "Seven",
		8:  "Eight",
		9:  "Nine",
		10: "Ten",
		11: "Eleven",
		12: "Twelve",
		13: "Thirteen",
		14: "Fourteen",
		15: "Fifteen",
		16: "Sixteen",
		17: "Seventeen",
		18: "Eighteen",
		19: "Nineteen",
	}

	tensMap = map[int]string{
		2: "Twenty",
		3: "Thirty",
		4: "Forty",
		5: "Fifty",
		6: "Sixty",
		7: "Seventy",
		8: "Eighty",
		9: "Ninety",
	}

	scaleMap = map[int]string{
		1:  "",
		2:  "Thousand",
		3:  "Lakh",
		4:  "Crore",
		5:  "Arab",
		6:  "Kharab",
		7:  "Neel",
		8:  "Padma",
		9:  "Shankh",
		10: "Mahashankh",
	}

	separator = " "
)

func convertNumberToWords(number int) string {
	if number == 0 {
		return "Zero"
	}

	sign := ""
	if number < 0 {
		sign = "Minus "
		number = -number
	}

	parts := make([]string, 0)

	for number > 0 {
		if number%100 > 0 {
			parts = append(parts, convertTwoDigitNumberToWords(number%100))
		}
		number /= 100
	}

	words := make([]string, 0)
	for i := len(parts) - 1; i >= 0; i-- {
		if parts[i] != "" {
			words = append(words, parts[i]+" "+scaleMap[i+1])
		}
	}

	return sign + strings.Join(words, separator)
}

func convertTwoDigitNumberToWords(number int) string {
	if number == 0 {
		return ""
	} else if number <= 19 {
		return onesMap[number]
	} else if number%10 == 0 {
		return tensMap[number/10]
	} else {
		return tensMap[number/10] + separator + onesMap[number%10]
	}
}

func main() {
	number := 0
	words := convertNumberToWords(number)
	fmt.Printf("%d : %s\n", number, words)
}
```

### Java

```java
// Write a Java program to print number to words in indian numbering system

import java.util.Scanner;

public class NumberToWords {

    private static final String[] units = { "", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
            "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
            "eighteen", "nineteen" };

    private static final String[] tens = { "", "", "twenty", "thirty", "forty",
            "fifty", "sixty", "seventy", "eighty", "ninety" };

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        long number = scanner.nextLong();
        System.out.println(convertToWords(number));
        scanner.close();
    }

    private static String convertToWords(long number) {
        if (number == 0) {
            return "zero";
        }

        String words = "";

        if ((number / 10000000) > 0) {
            words += convertToWords(number / 10000000) + " crore ";
            number %= 10000000;
        }

        if ((number / 100000) > 0) {
            words += convertToWords(number / 100000) + " lakh ";
            number %= 100000;
        }

        if ((number / 1000) > 0) {
            words += convertToWords(number / 1000) + " thousand ";
            number %= 1000;
        }

        if ((number / 100) > 0) {
            words += convertToWords(number / 100) + " hundred ";
            number %= 100;
        }

        if (number > 0) {
            if (number < 20) {
                words += units[(int) number];
            } else {
                words += tens[(int) (number / 10)];
                if ((number % 10) > 0) {
                    words += "-" + units[(int) (number % 10)];
                }
            }
        }

        return words;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print number to words in indian numbering system

function getOnes(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return ones[number] || "";
}

function getTeens(number) {
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  return teens[number] || "";
}

function getTens(number) {
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  return tens[number] || "";
}

function getHundreds(number) {
  if (number > 0 && number < 10) {
    return getOnes(number);
  }
  if (number >= 10 && number < 20) {
    return getTeens(number % 10);
  }
  if (number >= 20 && number < 100) {
    return `${getTens(Math.floor(number / 10))} ${getOnes(number % 10)}`;
  }
  return "";
}

function numberToWords(input) {
  const digits = Number(parseInt(input, 10));
  const result = [];

  if (digits === 0) {
    result.push("zero");
  } else if (digits === 1) {
    result.push("one");
  } else {
    const crores = Math.floor(digits / 10000000) % 100;
    if (crores > 0) {
      result.push(`${getHundreds(crores)} crore`);
    }

    const lakhs = Math.floor(digits / 100000) % 100;
    if (lakhs > 0) {
      result.push(`${getHundreds(lakhs)} lakh`);
    }

    const thousands = Math.floor(digits / 1000) % 100;
    if (thousands > 0) {
      result.push(`${getHundreds(thousands)} thousand`);
    }

    const hundreds = Math.floor((digits % 1000) / 100);
    if (hundreds > 0 && hundreds < 10) {
      result.push(`${getOnes(hundreds)} hundred`);
    }

    const tens = digits % 100;
    if (tens > 0) {
      if (digits > 100) result.push("and");
      result.push(`${getHundreds(tens)}`);
    }
  }

  return [...result]
    .join(" ")
    .split(/\s/)
    .filter(e => e)
    .map(e => e.substr(0, 1).toUpperCase() + e.substr(1))
    .join(" ");
}

console.log(numberToWords(123456789));
```

### PHP

```php
// Write a PHP program to print number to words in indian numbering system

<?php
// With some help from @sharletk helping me understand the logic behind the indian numbering system https://en.wikipedia.org/wiki/Indian_numbering_system

/**
 * Convert a number to words in Indian numbering system
 *
 * @param int $number
 * @return string
 */

function convertToIndianNumberingSystem($number) {
    // Numbers from 0 to 19 are unique words
    $words = array(
        "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    );

    // Numbers from 20 to 90 are whole words
    $tens = array(
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    );

    // Suffixes for the numbers in the Indian numbering system
    $suffix = array(
        "", "Thousand", "Lakh", "Crore", "Arab", "Kharab", "Neel", "Padma", "Shankh"
    );

    // Initialize the number input as an integer
    $num = (int)$number;

    // If the number is 0, return the word Zero
    if ($num == 0) {
        return "Zero";
    }

    // Initialize an array to store the words
    $wordsArr = array();

    // Loop through the number and convert it to words
    while ($num > 0) {

        // Get the last 3 digits of the number
        $crore = $num % 100;
        $num = (int)($num / 100);

        // Get the words for the current set of 3 digits
        if ($crore > 0) {
            $croreWords = "";

            if ($crore < 20) {
                $croreWords = $words[$crore];
            } elseif ($crore >= 20 && $crore < 100) {
                $tensDigit = (int)($crore / 10);
                $onesDigit = $crore % 10;
                $croreWords = $tens[$tensDigit];
                if ($onesDigit > 0) {
                    $croreWords .= " " . $words[$onesDigit];
                }
            }

            $wordsArr[] = $croreWords;
        }

        // Get the suffix for the current set of 3 digits
        $suffixIndex = count($wordsArr) - 1;

        // Get the next set of 3 digits
        if ($num > 0) {
            $wordsArr[] = $suffix[$suffixIndex];
        }
    }

    return implode(" ", array_reverse($wordsArr));
}

$number = 843955235;
$inWords = convertToIndianNumberingSystem($number);

echo "Input: $number\n";
echo "Output: $inWords";
?>
```

### Python

```python
# Write a Python program to print number to words in indian numbering system

# Printing a number in words in indian number system
def Convert(num):
    lent = len(str(num))
    if num == 0:
        print()
    elif num in D:
        print(D[num], end=" ")
    elif lent == 2:
        ones = num % 10
        tens = num - ones
        print(D[tens], D[ones], end=" ")
    elif lent == 3:
        hun = num // 100
        print(D[hun] + " Hundred", end=" ")
        Convert(num % 100)
    elif lent in [4, 5]:
        tent = num // 1000
        Convert(tent)
        print("Thousand", end=" ")
        Convert(num % 1000)
    elif lent in [6, 7]:
        tenl = num // 100000
        Convert(tenl)
        print("Lakh", end=" ")
        Convert(num % 100000)
    else:
        tenc = num // 10000000
        Convert(tenc)
        print("Crore", end=" ")
        Convert(num % 10000000)


# ____Main___
# input num
D = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fiveteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
}
num = int(input("Enter number :"))
Convert(num)
```

### TypeScript

```typescript
// Write a TypeScript program to print number to words in indian numbering system

function getOnes(num: number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return ones[num] || "";
}

function getTeens(num: number) {
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  return teens[num] || "";
}

function getTens(num: number) {
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  return tens[num] || "";
}

function getHundreds(num: number) {
  if (num > 0 && num < 10) {
    return getOnes(num);
  }
  if (num >= 10 && num < 20) {
    return getTeens(num % 10);
  }
  if (num >= 20 && num < 100) {
    return `${getTens(Math.floor(num / 10))} ${getOnes(num % 10)}`;
  }
  return "";
}

function numberToWords(num: number) {
  // const digits = Number(parseInt(num, 10));
  // const digits = num;
  const result: string[] = [];

  if (num === 0) {
    result.push("zero");
  } else if (num === 1) {
    result.push("one");
  } else {
    const crores = Math.floor(num / 10000000) % 100;
    if (crores > 0) {
      result.push(`${getHundreds(crores)} crore`);
    }

    const lakhs = Math.floor(num / 100000) % 100;
    if (lakhs > 0) {
      result.push(`${getHundreds(lakhs)} lakh`);
    }

    const thousands = Math.floor(num / 1000) % 100;
    if (thousands > 0) {
      result.push(`${getHundreds(thousands)} thousand`);
    }

    const hundreds = Math.floor((num % 1000) / 100);
    if (hundreds > 0 && hundreds < 10) {
      result.push(`${getOnes(hundreds)} hundred`);
    }

    const tens = num % 100;
    if (tens > 0) {
      if (num > 100) result.push("and");
      result.push(`${getHundreds(tens)}`);
    }
  }

  return [...result]
    .join(" ")
    .split(/\s/)
    .filter(e => e)
    .map(e => e.substring(0, 1).toUpperCase() + e.substring(1))
    .join(" ");
}

console.log(numberToWords(123456789));
```

## Similar programs

- [Print Number To Words](/program/print-number-to-words)
- [Reverse Words In A String](/program/reverse-words-in-a-string)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Split String Into Array Of Words](/program/split-string-into-array-of-words)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Print Pattern 1](/program/print-pattern-1)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Print Reverse Of A Number](/program/print-reverse-of-a-number)
- [Find Power Of A Number](/program/find-power-of-a-number)
