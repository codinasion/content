---
title: "Print Reverse Of A Number By Recursion"
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
    "VRtheKing",
    "PavanKumarCB",
    "SoumyadiptoPal",
    "Ishay1997",
    "impeccable16",
    "sancoLgates",
    "ANUSHRAV01",
    "anandfresh",
    "leslieyip02",
    "kavish2003",
    "james-tharit",
    "UrielOfir",
    "grraghav120",
    "jfinley6",
    "chinne",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5554
description: "Write a program to print reverse of a number by recursion."
---

## Table of contents

## Write a program to print reverse of a number by recursion

Reverse of a number is the number obtained by reversing the digits of the original number. For example, reverse of 123 is 321. The recursive solution is to print the last digit of the number and then call the function recursively to print the remaining digits.

```
Input  : 123
Output : 321
```

---

### C

```c
// Write a C program to print reverse of a number by recursion

#include <stdio.h>

int reverseNum(int n)
{
    static int rev = 0;
    if (n == 0)
        return 0;
    rev = rev * 10 + n % 10;
    reverseNum(n / 10);
    return rev;
}

int main(void)
{
    int n, Rev;
    printf("Enter number: ");
    scanf("%d", &n);
    Rev = reverseNum(n);
    printf("%d", Rev);
    return 0;
}
```

### C#

```csharp
// Write a C# program to print reverse of a number by recursion

using System;
public class Program
{
    public static void Main(string[] args)
    {
        reverse(123);
    }

    public static int reverted=0;

    public static void reverse(int number)
    {
        if (number!=0)
        {
            int remainder = number % 10;
            reverted = (reverted*10)+remainder;
            reverse(number/10);
        }
        else
            Console.WriteLine(reverted);
    }
}
```

### C++

```cpp
// Write a C++ program to print reverse of a number by recursion

#include <bits/stdc++.h>
using namespace std;
void reverseANumber(int n){
    if(n<=9) cout<<n<<'\n';
    else{
        cout<<(n%10);
        reverseANumber(n/10);
    }
}
int main(){
    int num; //123
    cin>>num;
    reverseANumber(num); //321
    return 0;
}

//Contributed by Raghav Garg
```

### Dart

```dart
// Write a Dart program to print reverse of a number by recursion

String _reverseNum(String num, {String reversed = ''}) {
  // Base, will return in last sequence, when no more digits to reverse
  if (num.length == 1) return '${reversed.toString()}${num}';

  String last_digit = num.split("").last; // Get the last digit of the number
  String _reversed =
      "${reversed}${last_digit}"; // Add last digit to the beginning of the reversed
  List<String> a = num.split('');
  a.removeLast();

  String next = a.join();

  return _reverseNum(next,
      reversed:
          _reversed); // Recursively call the function with remaining digits
}

void main() {
  print(_reverseNum('123000')); // will print 000321
  print(_reverseNum('123456789')); // will print 987654321
  print(_reverseNum('0100100')); // will print 0010010
  print(_reverseNum('0023400567')); // will print 7650043200
}
```

### F#

```fsharp
// Write a F# program to print reverse of a number by recursion

let rec ReverseNumber (num: int) =
    if num > 0 then
        printf "%d" (num % 10)
        ReverseNumber (num / 10)

let reverseNumber (num: int) =
    printfn "Reversed number of %d is:" num
    ReverseNumber num

[<EntryPoint>]
let main argv =
    let number = 12345
    reverseNumber number
    0
```

### Go

```go
// Write a Go program to print reverse of a number by recursion

package main

import (
	"fmt"
	"strconv"
)

func reverseNum(nums int) string {
	if nums < 10 {
		return strconv.Itoa(nums)
	}
	str := strconv.Itoa(nums % 10)
	return str + reverseNum(nums / 10)
}

func main() {
	var i int
	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)
	reverse := reverseNum(i)
	fmt.Println(reverse)
}
```

### Haskell

```haskell
-- Write a Haskell program to print reverse of a number by recursion

f :: Integer -> [Integer]
f 0 = []
f x = (x `mod` 10) : f (x `div` 10)

main :: IO()
main =  do
    let n = 123
    let r = concat . map show $ f n

    putStrLn r
```

### Java

```java
// Write a Java program to print reverse of a number by recursion

import java.util.Scanner;
class RecursionReverse
{
   public static void reverseMethod(int number) {
       if (number < 10) {
	   System.out.println(number);
	   return;
       }
       else {
           System.out.print(number % 10);
           reverseMethod(number/10);
       }
   }
   public static void main(String args[])
   {
	int num=0;
	System.out.print("Please enter a number : ");
	Scanner in = new Scanner(System.in);
	num = in.nextInt();
	System.out.print("Reverse of the given number is: ");
	reverseMethod(num);
	System.out.println();
   }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print reverse of a number by recursion

const reverseNum = num => {
  return num < 10
    ? String(num)
    : String(num % 10) + reverseNum(Math.floor(num / 10));
};

console.log(reverseNum(8675309));
```

### Julia

```julia
# Write a Julia program to print reverse of a number by recursion

function reverse(n::Integer)
    if(n<=0)
        return n
    else
        print(n%10)
        reverse(Int(floor(n/10)))
    end
end

println("Enter the number")
n=readline()
n=parse(Int128, n)
print("The reverse of the number: ")
if(n<0)
    print("-")
end
n=n*(-1)
reverse(n)
println("")
```

### Kotlin

```kotlin
// Write a Kotlin program to print reverse of a number by recursion

import java.util.Scanner

fun reverseNumber(num: Int): Int {
	return if (num < 10) {
        num
    } else {
        val lastDigit = num % 10
        val remainingNum = num / 10
        val reversedRemainingNum = reverseNumber(remainingNum)
        (lastDigit * Math.pow(10.0, (remainingNum.toString().length).toDouble()).toInt()) + reversedRemainingNum
    }
}

fun main() {
    val reader = Scanner(System.`in`)
    print("Enter a number: ")

    var number:Int = reader.nextInt()

    val reversedNumber = reverseNumber(number)
    println("The reverse of $number is $reversedNumber")
}
```

### Perl

```perl
# Write a Perl program to print reverse of a number by recursion

sub reverse_number {
    my $num = shift;
    if ($num < 10) {
        return $num;
    }
    else {
        my $last_digit = $num % 10;
        my $remaining_num = int($num / 10);
        return $last_digit . reverse_number($remaining_num);
    }
}

# Prompt the user to enter a number
print "Enter a number: ";
my $num = <STDIN>;
chomp $num;

# Print the reverse of the number
my $reverse_num = reverse_number($num);
print "Reverse of $num is $reverse_num\n";
```

### PHP

```php
// Write a PHP program to print reverse of a number by recursion

<?php

function reverseNumber($num)
{
 $n = strlen($num);
 if($n === 1)
   {
    return $num;
   }
 else
   {
   $n--;
   return reverseNumber(substr($num,1, $n)) . substr($num, 0, 1);
   }
}
print_r(reverseNumber(123)."\n");

?>
```

### Python

```python
# Write a Python program to print reverse of a number by recursion

def reverse_num(num: int, reversed_num: int = 0) -> int:
    # Base case: if the number is 0, there are no more digits to reverse
    if num == 0:
        return reversed_num

    # Get the last digit of the number
    last_digit = num % 10

    # Add the last digit to the beginning of the reversed number
    reversed_num = reversed_num * 10 + last_digit

    # Recursively call the function to reverse the remaining digits
    return reverse_num(num // 10, reversed_num)


# Test the function with a few examples
print(reverse_num(123))  # should print 321
print(reverse_num(7331))  # should print 1337
print(reverse_num(87124389372498))  # should print 89427398342178
```

### R

```r
# Write a R program to print reverse of a number by recursion

reverse_number <- function(n) {
  # base case: if the number has only one digit, return it
  if (n < 10) {
    return(n)
  } else {
    # recursive case: extract the last digit of the number and append it to the
    # reversed version of the remaining digits
    last_digit <- n %% 10
    remaining_digits <- n %/% 10
    return(last_digit * 10^(nchar(as.character(remaining_digits))) + reverse_number(remaining_digits))
  }
}

# example usage
num <- 12345
cat("Original number:", num, "\n")
cat("Reversed number:", reverse_number(num), "\n")
```

### Ruby

```ruby
# Write a Ruby program to print reverse of a number by recursion

def reverseNum num
    return num if num.to_s.length <= 1

    reversedNum = reverseNum(num.to_s[1..-1])
    reversedNum += num.to_s[0]
    reversedNum
end

puts reverseNum 12345
```

### Rust

```rust
// Write a Rust program to print reverse of a number by recursion

fn print_reverse(n: u32) {
    if n == 0 {
        return;
    }

    print!("{}", n % 10);
    return print_reverse(n / 10);
}

fn main() {
    print_reverse(123);
}
```

### Scala

```scala
// Write a Scala program to print reverse of a number by recursion

def reverseIntList(x: Int): List[Int]  = {
    if (!(x <= 0))
      if ((x < 10))
        List(x)
      else
        x % 10 :: reverseIntList(x / 10)
    else
      List()

  }

  print(reverseIntList(123))
```

### Swift

```swift
// Write a Swift program to print reverse of a number by recursion

func printReverse(_ n: Int) {
    if n < 10 {
        print(n)
    } else {
        print(n % 10, terminator: "")
        printReverse(n / 10)
    }
}

// Example usage:
printReverse(123) // Output: 321
```

### TypeScript

```typescript
// Write a TypeScript program to print reverse of a number by recursion

const reverseNum = (num: number): string => {
  return num < 10
    ? String(num)
    : String(num % 10) + reverseNum(Math.floor(num / 10));
};

console.log(reverseNum(8675309));
```
