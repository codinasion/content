---
title: "Print Number To Words"
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
    "harshraj8843",
    "AshitaSingamsetty",
    "rsitters",
    "Ariel201711",
    "anandfresh",
    "mitrofmep",
    "joao-vitor-souza",
    "PravunathSingh",
    "manyadua16",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2613
description: "Write a program to print number to words."
---

## Write a program to print number to words

```
Input  : 123456789
Output : One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine
```

---

```c
// Write a C program to print number to words

#include<stdlib.h>
#include<stdio.h>
int main() {
 long num, div, n1;
 int flag, digit, pos, tot_dig;

 printf("\nEnter a number: ");
 scanf("%ld", &num);

 if(num == 0) {
 printf("Zeron\n");
 exit(0);
 }

 if(num > 99999) {
 printf("please enter a number between 0 and 100000\n\n");
 exit(0);
 }

 tot_dig = 0;
 div = 1;
 n1 = num;

 while ( n1 > 9 ) {
 n1 = n1 / 10;
 div = div * 10;

 tot_dig++;
 }


 tot_dig++;
 pos = tot_dig;

 while ( num != 0 ) {
 digit = num / div;
 num = num % div;
 div = div / 10;
 switch(pos) {
 case 2:
 case 5:
 if ( digit == 1 )
 flag = 1;
 else {
 flag = 0;
 switch(digit) {
 case 2: printf("twenty ");break;
 case 3: printf("thirty ");break;
 case 4: printf("forty ");break;
 case 5: printf("fifty ");break;
 case 6: printf("sixty ");break;
 case 7: printf("seventy ");break;
 case 8: printf("eighty ");break;
 case 9: printf("ninty ");
 }
 }
 break;
 case 1:
 case 4:
 if (flag == 1) {
 flag = 0;
 switch(digit) {
 case 0 : printf("ten ");break;
 case 1 : printf("eleven ");break;
 case 2 : printf("twelve ");break;
 case 3 : printf("thirteen ");break;
 case 4 : printf("fourteen ");break;
 case 5 : printf("fifteen ");break;
 case 6 : printf("sixteen ");break;
 case 7 : printf("seventeen ");break;
 case 8 : printf("eighteen ");break;
 case 9 : printf("nineteen ");
 }
 } else {
 switch(digit) {
 case 1 : printf("one ");break;
 case 2 : printf("two ");break;
 case 3 : printf("three ");break;
 case 4 : printf("four ");break;
 case 5 : printf("five ");break;
 case 6 : printf("six ");break;
 case 7 : printf("seven ");break;
 case 8 : printf("eight ");break;
 case 9 : printf("nine ");
 }
 }

 if (pos == 4)
 printf("thousand ");
 break;

 case 3:
 if (digit > 0) {
 switch(digit) {
 case 1 : printf("one ");break;
 case 2 : printf("two ");break;
 case 3 : printf("three ");break;
 case 4 : printf("four ");break;
 case 5 : printf("five ");break;
 case 6 : printf("six ");break;
 case 7 : printf("seven ");break;
 case 8 : printf("eight ");break;
 case 9 : printf("nine ");
 }
 printf("hundred ");
 }
 break;
 }
 pos--;
 }
 if (pos == 4 && flag == 0)
 printf("thousand");
 else if (pos == 4 && flag == 1)
 printf("ten thousand");

 if (pos == 1 && flag == 1)
 printf("ten ");
  return 0;
}
```

```csharp
// Write a C# program to print number to words

using System;
class NumberToWords
{
static void Main(string[] args)
{
string[] a = { "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE" };
string[] b = {"TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINTEEN" };
string[] c = { "TEN", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINTY" };
string[] d = { "zero", "TEN", "HUNDRED", "THOUSAND", "THOUSAND", "LAKHS", "LAKHS", "CRORES", "CRORES", "HUNDRED AND" };

long number, temp = 0, strlen, value = 0;
Console.WriteLine("please enter integer ");
number = Convert.ToInt64(Console.ReadLine());

Boolean flag = false;
if (number <= 9999999999)
{
while (number >= 0)
{
strlen = number.ToString().Length;
if (number > 0)
{

value = (long)Math.Pow(10, strlen - 1);
temp = number / value;


}

switch (strlen)
{
case 1: Console.Write(" " + a[temp - 1] + " ");

break;
case 2:
if (number >= 10 && number < 20)
{
number = number % value;
if (number == 0)
{
Console.Write(" " + b[number] + " ");
}
else
{
Console.Write(" " + b[number] + " ");
}

flag = true;

}
else
{
Console.Write(" " + c[temp - 1] + " ");
}

break;
case 3:
Console.Write(a[temp - 1] + " " + d[strlen - 1]);
break;
case 4:
case 6:
case 8:
case 10:
Console.Write(" " + a[temp - 1] + " " + d[strlen - 1] + " ");
break;
case 5:
case 7:
case 9:
case 11:
value = (long)Math.Pow(10, strlen - 2);
temp = number / value;
if (temp >= 10 && temp < 20)
{
temp = temp % 10;
if (temp == 0)
{
Console.Write(" " + c[temp] + " " + d[strlen - 1] + " ");
}
else
{
Console.Write(" " + b[temp] + " " + d[strlen - 1] + " ");

}

}
else
{
long i = temp % 10;
temp = temp / 10;
Console.Write(" " + c[temp - 1] + " ");
if (i > 0)
{
Console.Write(" " + a[i - 1] + " ");

}
Console.Write(" " + d[strlen - 1] + " ");
}
break;
}
if (number == value)
{
Console.Write(" ");
break;
}
else
{
number = number % value;
}
if (number == 0 || flag == true)
{
break;
}
flag = false;
}
}
else
{
Console.WriteLine("enter numner less than 9999999999");
}

}
}
```

```cpp
// Write a C++ program to print number to words

#include <iostream>
#include <string>
#include <vector>
using namespace std;

    string digitName(int digit);
    string teenName(int number);
    string tensName(int number);
    string intName(int number);

    vector<string> ones {"","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    vector<string> teens {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen", "seventeen", "eighteen", "nineteen"};
    vector<string> tens {"", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

    string nameForNumber (long number) {
        if (number < 10) {
            return ones[number];
        } else if (number < 20) {
            return teens [number - 10];
        } else if (number < 100) {
            return tens[number / 10] + ((number % 10 != 0) ? " " + nameForNumber(number % 10) : "");
        } else if (number < 1000) {
            return nameForNumber(number / 100) + " hundred" + ((number % 100 != 0) ? " " + nameForNumber(number % 100) : "");
        } else if (number < 1000000) {
            return nameForNumber(number / 1000) + " thousand" + ((number % 1000 != 0) ? " " + nameForNumber(number % 1000) : "");
        } else if (number < 1000000000) {
            return nameForNumber(number / 1000000) + " million" + ((number % 1000000 != 0) ? " " + nameForNumber(number % 1000000) : "");
        } else if (number < 1000000000000) {
            return nameForNumber(number / 1000000000) + " billion" + ((number % 1000000000 != 0) ? " " + nameForNumber(number % 1000000000) : "");
        }
        return "error";
    }

    int main()
    {
        long input;
        do
        {
            cout << "Please enter a positive integer: ";
            cin >> input;
            cout << "\n" << nameForNumber(input) << endl;
            cout << "\n\n" << endl;
            break;
        }while (input > 0);
        return 0;
    }
```

```go
// Write a Go program to print number to words

package main
import (
	"fmt"
	"strconv"
)
var(
	onesMap = map[int]string {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"}
	teensMap = map[int]string {11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"}
	tensMap = map[int]string {1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"}
)
func numberToWords (num int) string{
	if (num == 0) {
            return "zero";
        }
        if (num < 0) {
            return "minus " + numberToWords(-num);
        }
        result := "";
        if ((num / 1000000) > 0) {
            result += numberToWords(num / 1000000) + " million ";
            num %= 1000000;
        }
        if ((num / 1000) > 0) {
            result += numberToWords(num / 1000) + " thousand ";
            num %= 1000;
        }
        if ((num / 100) > 0) {
            result += numberToWords(num / 100) + " hundred ";
            num %= 100;
        }
        if (num > 0) {
            if (num < 10) {
                result += onesMap[num];
            } else if (num < 20) {
                result += teensMap[num - 10];
            } else {
                result += tensMap[num / 10];
                if ((num % 10) > 0) {
                    result += " " + onesMap[num % 10];
                }
            }
        }
	return result
}
func main() {
	fmt.Print("Input : ")
	var input string
	fmt.Scanln(&input)
	num, _ := strconv.Atoi(input)
	words := numberToWords(num)
	fmt.Printf("Output : %s\n", words)
}
```

```java
// Write a Java program to print number to words

import java.util.Scanner;

public class PrintNumberToWords {
    private static final String[] ONES = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    private static final String[] TEENS = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
    private static final String[] TENS = {"", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        System.out.println(numberToWords(num));
    }

    public static String numberToWords(int num) {
        if (num == 0) {
            return "zero";
        }
        if (num < 0) {
            return "minus " + numberToWords(-num);
        }

        String words = "";

        if ((num / 1000000) > 0) {
            words += numberToWords(num / 1000000) + " million ";
            num %= 1000000;
        }

        if ((num / 1000) > 0) {
            words += numberToWords(num / 1000) + " thousand ";
            num %= 1000;
        }

        if ((num / 100) > 0) {
            words += numberToWords(num / 100) + " hundred ";
            num %= 100;
        }

        if (num > 0) {
            if (num < 10) {
                words += ONES[num];
            } else if (num < 20) {
                words += TEENS[num - 10];
            } else {
                words += TENS[num / 10];
                if ((num % 10) > 0) {
                    words += " " + ONES[num % 10];
                }
            }
        }

        return words;
    }
}
```

```javascript
// Write a JavaScript program to print number to words

function numberToEnglish(n) {
  var string = n.toString(),
    units,
    tens,
    scales,
    start,
    end,
    chunks,
    chunksLen,
    chunk,
    ints,
    i,
    word,
    words,
    and = "and";

  /* Remove spaces and commas */
  string = string.replace(/[, ]/g, "");

  /* Is number zero? */
  if (parseInt(string) === 0) {
    return "zero";
  }

  /* Array of units as words */
  units = [
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

  /* Array of tens as words */
  tens = [
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

  /* Array of scales as words */
  scales = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quatttuor-decillion",
    "quindecillion",
    "sexdecillion",
    "septen-decillion",
    "octodecillion",
    "novemdecillion",
    "vigintillion",
    "centillion",
  ];

  /* Split user argument into 3 digit chunks from right to left */
  start = string.length;
  chunks = [];
  while (start > 0) {
    end = start;
    chunks.push(string.slice((start = Math.max(0, start - 3)), end));
  }

  /* Check if function has enough scale words to be able to stringify the user argument */
  chunksLen = chunks.length;
  if (chunksLen > scales.length) {
    return "";
  }

  /* Stringify each integer in each chunk */
  words = [];
  for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i]);

    if (chunk) {
      /* Split chunk into array of individual integers */
      ints = chunks[i].split("").reverse().map(parseFloat);

      /* If tens integer is 1, i.e. 10, then add 10 to units integer */
      if (ints[1] === 1) {
        ints[0] += 10;
      }

      /* Add scale word if chunk is not zero and array item exists */
      if ((word = scales[i])) {
        words.push(word);
      }

      /* Add unit word if array item exists */
      if ((word = units[ints[0]])) {
        words.push(word);
      }

      /* Add tens word if array item exists */
      if ((word = tens[ints[1]])) {
        words.push(word);
      }

      /* Add 'and' string after units or tens integer if: */
      if (ints[0] || ints[1]) {
        /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
        if (ints[2] || (!i && chunksLen)) {
          words.push(and);
        }
      }

      /* Add hundreds word if array item exists */
      if ((word = units[ints[2]])) {
        words.push(word + " hundred");
      }
    }
  }

  return words.reverse().join(" ");
}

// - - - - - Tests - - - - - -
function test(v) {
  var sep = "string" == typeof v ? '"' : "";
  console.log(numberToEnglish(v));
}

test(123456789);
```

```php
// Write a PHP program to print number to words

<?php
function numberToWords($number) {
    $ones = array(
        0 => '',
        1 => 'One',
        2 => 'Two',
        3 => 'Three',
        4 => 'Four',
        5 => 'Five',
        6 => 'Six',
        7 => 'Seven',
        8 => 'Eight',
        9 => 'Nine',
        10 => 'Ten',
        11 => 'Eleven',
        12 => 'Twelve',
        13 => 'Thirteen',
        14 => 'Fourteen',
        15 => 'Fifteen',
        16 => 'Sixteen',
        17 => 'Seventeen',
        18 => 'Eighteen',
        19 => 'Nineteen'
    );
    $tens = array(
        2 => 'Twenty',
        3 => 'Thirty',
        4 => 'Forty',
        5 => 'Fifty',
        6 => 'Sixty',
        7 => 'Seventy',
        8 => 'Eighty',
        9 => 'Ninety'
    );

    if ($number == 0) {
        return 'Zero';
    }

    $words = '';

    if ($number < 0) {
        $words .= 'Negative ';
        $number = abs($number);
    }

    if ($number < 20) {
        $words .= $ones[$number];
    } elseif ($number < 100) {
        $words .= $tens[floor($number / 10)];
        $remainder = $number % 10;
        if ($remainder > 0) {
            $words .= ' ' . $ones[$remainder];
        }
    } elseif ($number < 1000) {
        $words .= $ones[floor($number / 100)] . ' Hundred';
        $remainder = $number % 100;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } elseif ($number < 1000000) {
        $words .= numberToWords(floor($number / 1000)) . ' Thousand';
        $remainder = $number % 1000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } elseif ($number < 1000000000) {
        $words .= numberToWords(floor($number / 1000000)) . ' Million';
        $remainder = $number % 1000000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    } else {
        $words .= numberToWords(floor($number / 1000000000)) . ' Billion';
        $remainder = $number % 1000000000;
        if ($remainder > 0) {
            $words .= ' ' . numberToWords($remainder);
        }
    }

    return $words;
}

//test
$number = 123456789;
$result = numberToWords($number);
echo "Input : $number\n";
echo "Output: $result\n";
?>
```

```python
# Write a Python program to print number to words

import inflect

print(inflect.engine().number_to_words(int(input())).title())
```

```typescript
// Write a TypeScript program to print number to words

function numberToEnglish(num: number) {
  let strNum = num.toString(),
    units: string[],
    tens: string[],
    scales: string[],
    start: number,
    end: number,
    chunks: string[],
    chunksLen: number,
    chunk: number,
    ints: number[],
    i: number,
    word: string,
    words: string[],
    and = "and";

  /* Remove spaces and commas */
  strNum = strNum.replace(/[, ]/g, "");

  /* Is number zero? */
  if (parseInt(strNum) === 0) {
    return "zero";
  }

  /* Array of units as words */
  units = [
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

  /* Array of tens as words */
  tens = [
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

  /* Array of scales as words */
  scales = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quatttuor-decillion",
    "quindecillion",
    "sexdecillion",
    "septen-decillion",
    "octodecillion",
    "novemdecillion",
    "vigintillion",
    "centillion",
  ];

  /* Split user argument into 3 digit chunks from right to left */
  start = strNum.length;
  chunks = [];
  while (start > 0) {
    end = start;
    chunks.push(strNum.slice((start = Math.max(0, start - 3)), end));
  }

  /* Check if function has enough scale words to be able to stringify the user argument */
  chunksLen = chunks.length;
  if (chunksLen > scales.length) {
    return "";
  }

  /* Stringify each integer in each chunk */
  words = [];
  for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i]);

    if (chunk) {
      /* Split chunk into array of individual integers */
      ints = chunks[i].split("").reverse().map(parseFloat);

      /* If tens integer is 1, i.e. 10, then add 10 to units integer */
      if (ints[1] === 1) {
        ints[0] += 10;
      }

      /* Add scale word if chunk is not zero and array item exists */
      if ((word = scales[i])) {
        words.push(word);
      }

      /* Add unit word if array item exists */
      if ((word = units[ints[0]])) {
        words.push(word);
      }

      /* Add tens word if array item exists */
      if ((word = tens[ints[1]])) {
        words.push(word);
      }

      /* Add 'and' string after units or tens integer if: */
      if (ints[0] || ints[1]) {
        /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
        if (ints[2] || (!i && chunksLen > 2)) {
          words.push(and);
        }
      }

      /* Add hundreds word if array item exists */
      if ((word = units[ints[2]])) {
        words.push(word + " hundred");
      }
    }
  }

  return words.reverse().join(" ");
}

// - - - - - Tests - - - - - -
function test(num: number) {
  console.log(numberToEnglish(num));
}

test(123456789);
```
