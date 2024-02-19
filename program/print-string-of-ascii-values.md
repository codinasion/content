---
title: "Print String Of Ascii Values"
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
    "python",
    "r",
  ]
contributors:
  [
    "hi-Kartik2004",
    "madhusgowda",
    "apurvagandhi",
    "harshraj8843",
    "rsitters",
    "anandfresh",
    "Sri01729",
    "joao-vitor-souza",
    "CodingWithHardik",
    "grraghav120",
    "bbhoom",
    "tanishq-singh-2407",
    "PraaneshSelvaraj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-09T16:25:57Z
trackId: 1631
description: "Write a program to print string of ascii values."
---

## Table of contents

## Write a program to print string of ascii values

ASCII value is the numeric representation of a character. For example, the ASCII value of the character 'A' is 65. The ASCII value of the character 'a' is 97. The ASCII value of the character '0' is 48. The ASCII value of the character ' ' is 32.

```
Input  : 65 66 67
Output : ABC
```

---

### C

```c
// Write a C program to print string of ascii values

#include<stdio.h>

int main()
{
    int num;
    printf("Enter the number : ");
    scanf("%d",&num);
    printf("Ascii Character of %d is %c",num,num);
}
```

### C#

```csharp
// Write a C# program to print string of ascii values

using System;

public class PrintStringOfAsciiValues
{
    public static void Main()
    {
        //Prompts user to enter ASCII values separated by spaces
        Console.WriteLine("Enter the ASCII values separated by spaces:");

        //Reads user input
        string input = Console.ReadLine();

        //Splits input into an array of ASCII values
        string[] asciiValues = input.Split(' ');

        //Iterates over each ASCII value in the array
        foreach (string asciiValue in asciiValues)
        {
            //Tries to parse the ASCII value as an integer
            int value;
            if (int.TryParse(asciiValue, out value))
            {
                //Converts the integer value to its corresponding character
                char character = (char)value;

                //Prints the character
                Console.Write(character);
            }
        }

        //Prints a new line after printing the characters
        Console.WriteLine();
    }
}
```

### C++

```cpp
// Write a C++ program to print string of ascii values

#include <iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int arr[n];
    string ans="";
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++){
        ans+=(char)(arr[i]);
    }
    cout<<ans<<'\n';
    return 0;
}

//Contributed by Raghav Garg
```

### Go

```go
// Write a Go program to print string of ascii values

package main

import (
	"fmt"
)

func main() {
	asciiValues := []int{65, 66, 67}
	var result string
	for _, asciiValue := range asciiValues {
		character := rune(asciiValue)
		result += string(character)
	}
	fmt.Println(result)
}
```

### Java

```java
// Write a Java program to print string of ascii values

import java.util.Scanner;
import java.util.ArrayList;
public class PrintStringOfAsciiValues {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        char character;
        int asciivalue;
        String output = "";

        System.out.println("Enter the ASCII values separated by spaces and press enter 2 times to finish: ");
        ArrayList<Integer> numbers = new ArrayList<>();

        String line = scnr.nextLine();
        while (!line.isEmpty()) {
            String[] values = line.split("\\s+");
            for (String value : values) {
                try {
                    int intValue = Integer.parseInt(value);
                    numbers.add(intValue);
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input: " + value);
                }
            }
            line = scnr.nextLine();
        }

        for (int i = 0; i < numbers.size(); i++) {
            asciivalue = (numbers.get(i));
            character = (char) asciivalue;
            output += character;
        }

        System.out.println(output);

        scnr.close();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print string of ascii values

function PrintStringOfAsciiValues(one, two, third) {
  return String.fromCharCode(one, two, third);
}
console.log(PrintStringOfAsciiValues(65, 66, 67));
```

### PHP

```php
// Write a PHP program to print string of ascii values

<?php

function asciiToString($ascii, $length)
{
    $num = 0;
    for($i = 0; $i < $length; $i++)
    {

        $num = $num * 10 + (ord($ascii[$i]) - ord('0'));

        if ($num >= 32 && $num <= 122)
        {

            $ch = chr($num);
            print($ch);

            $num = 0;
            }
        }
}

    $ascii = "656667";
    $length = strlen($ascii);

    asciiToString($ascii, $length);

?>
```

### Python

```python
# Write a Python program to print string of ascii values

x = input("enter ascii value:")
l = x.split()
string = ""
for i in l:
    string = string + chr(int(i))

print("Output", string)
```

### R

```r
# Write a R program to print string of ascii values

# Function to convert ASCII values to characters
ascii_to_char <- function(ascii_values) {
  characters <- sapply(ascii_values, function(x) rawToChar(as.raw(x)))
  return(paste(characters, collapse = ""))
}

# Input ASCII values as a string separated by space
input <- readline("Enter ASCII values separated by space: ")

# Convert input string to a numeric vector of ASCII values
ascii_values <- as.numeric(strsplit(input, " ")[[1]])

# Call the ascii_to_char function
output <- ascii_to_char(ascii_values)

# Print the output
cat("Output:", output, "\n")
```

### Ruby

```ruby
# Write a Ruby program to print string of ascii values

def ascii_to_string(ascii_values)
  characters = ascii_values.split.map { |ascii| ascii.to_i.chr }
  return characters.join
end

# Input ASCII values separated by spaces
print "Enter ASCII values separated by spaces: "
ascii_values = gets.chomp

begin
  result = ascii_to_string(ascii_values)
  puts "Output: #{result}"
rescue ArgumentError => e
  puts "Error: #{e.message}"
end
```

### TypeScript

````typescript
// Write a TypeScript program to print string of ascii values

/**
 *
 * @name This program prints string of ascii values.
 * @param {number[]} codes Array of numbers
 * @returns {string}
 *
 * @example
 * ```js
 * const str1: string = printStringOfAsciiValues(65, 66, 67) // ABC
 * const str2: string = printStringOfAsciiValues(72, 69, 76, 76, 79) // HELLO
 * ```
 */
function printStringOfAsciiValues(...codes: number[]): string {
  return String.fromCharCode(...codes);
}

// Console Tests
console.log("String values of 75, 75, 82, 72");
console.log(printStringOfAsciiValues(75, 75, 82, 72) + "// KKRH");

console.log("String values of 72, 69, 76, 76, 79");
console.log(printStringOfAsciiValues(72, 69, 76, 76, 79) + "// HELLO");
````

## Similar programs

- [Print Ascii Value Of A String](/program/print-ascii-value-of-a-string)
- [Print Character Of An Ascii Value](/program/print-character-of-an-ascii-value)
- [Print Ascii Value Of A Character](/program/print-ascii-value-of-a-character)
- [Check Special Character](/program/check-special-character)
- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print Numbers From 1 To N](/program/print-numbers-from-1-to-n)
- [Implement Ternary Search](/program/implement-ternary-search)
- [Print Reverse Of A String](/program/print-reverse-of-a-string)
- [Print Reverse Of A String By Recursion](/program/print-reverse-of-a-string-by-recursion)
- [Check Palindrome String](/program/check-palindrome-string)
