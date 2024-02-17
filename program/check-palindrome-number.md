---
title: "Check Palindrome Number"
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
    "scala",
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "PavanKumarCB",
    "sancoLgates",
    "esivakumar18",
    "joao-vitor-souza",
    "gupta-soham",
    "ArinCodes",
    "KartikeyDubeyKD",
    "auleki",
    "rahmat-dev",
    "ynbh",
    "vedha-vikash-pixel",
    "gpt-anurag",
    "UsmanFani",
    "KaptainCS3",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:11:26Z
trackId: 1981
description: "Write a program to check palindrome number."
---

## Write a program to check palindrome number

Palindrome numbers are the numbers for which reverse is exactly same as the original number. For example, 121 is palindrome, but 123 is not palindrome.

```
Input  : 121
Output : Palindrome Number
```

---

```c
// Write a C program to check palindrome number

#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x)
{
    static int rev = 0;
    static int num;
    num = x;
    if (x == 0)
    {
        return (num == rev);
    }
    rev = rev * 10 + x % 10;
    return isPalindrome(x / 10);
}
int main()
{
    int n;
    printf("Enter a number :");
    scanf("%d", &n);
    if (isPalindrome(n))
        printf("Palindrome Number");
    else
        printf("Not a Palindrome Number");
    return 0;
}
```

```csharp
// Write a C# program to check palindrome number

using System;
  public class checkpalindrome
   {
     public static void Main(string[] args)
      {
          int n,r,sum=0,temp;
          Console.Write("Enter the Number: ");
          n = int.Parse(Console.ReadLine());
          temp=n;
          while(n>0)
          {
           r=n%10;
           sum=(sum*10)+r;
           n=n/10;
          }
          if(temp==sum)
           Console.Write("Number is Palindrome.");
          else
           Console.Write("Number is not Palindrome");
    }
  }
```

```cpp
// Write a C++ program to check palindrome number

#include <iostream>

using namespace std;

int main()
{
    int n,rev=0;cin>>n;
    for(int i=n;i>0;i=i/10){
        int mod=i%10;
        rev=rev*10+mod;
    }
    // cout<<rev;
    if(rev==n)cout<<"Palindrome Number"<<'\n';
    else cout<<"Not Palindrome Number"<<'\n';
}

//Contributed by Raghav Garg
```

```dart
// Write a Dart program to check palindrome number

void main() {
  print(isNumberPalindrome(223));
}

bool isNumberPalindrome(int num) {
  String originalNumber = num.toString();
  String reversed = originalNumber.split('').reversed.join('');
  if (originalNumber == reversed)
    return true;
  else
    return false;
}
```

```go
// Write a Go program to check palindrome number

package main

import "fmt"

func isPalindrome(nums int) bool {
	input_num := nums
	var remainder int
	reversedNumber := 0

	for nums > 0 {
		remainder = nums % 10
		reversedNumber = (reversedNumber * 10) + remainder
		nums = nums / 10
	}

	return input_num == reversedNumber
}

func main() {
	var i int

	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)

	if isPalindrome(i) {
		fmt.Println("Palindrome Number")
	} else {
		fmt.Println("Not Palindrome Number")
	}
}
```

```java
// Write a Java program to check palindrome number

public class CheckPalindromeNumber {

    public static void main(String[] args) {

        int number = 12221;                               //number to check
        if (ispalindrome(number)) {                       //function returns true if palindrome else false
            System.out.println("Palindrome number");
        } else {
            System.out.println("Not a palindrome number");
        }
    }

    public static boolean ispalindrome(int num) {           //palindrome function definition

        int temp = num;
        int r, sum = 0;
        while (num > 0) {
            r = num % 10;
            sum = (sum * 10) + r;
            num = num / 10;
        }
        if (temp == sum) {
            return true;
        }
        return false;
    }
}
```

```javascript
// Write a JavaScript program to check palindrome number

function checkPalindromeNumber(num) {
  let remainder,
    temp,
    reversedNumber = 0;
  temp = num;
  while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    reversedNumber = reversedNumber * 10 + remainder;
  }
  return reversedNumber === temp;
}
console.log(checkPalindromeNumber(190));
```

```julia
# Write a Julia program to check palindrome number

function is_palindrome(x::Int)::Bool
    if x < 0
        false
    else
        y = x
        y_reverse = 0
        while y > 0
            y, n = divrem(y, 10)
            y_reverse = y_reverse * 10 + n
        end
        x == y_reverse
    end
end
value = 121
if(is_palindrome(value))
 println("Palindrome Number")
else
 println("Not a Palindrome Number")
end
```

```kotlin
// Write a Kotlin program to check palindrome number

fun main() {
    print("Enter No. to Check Palindrome: ")
    val num = readln()
    println()
    if (checkPalindrome(num)) println("$num is Palindrome")
    else println("$num is not Palindrome")
}

private fun checkPalindrome(num: String): Boolean {
    var start = 0
    var end = num.lastIndex
    while (start <= end) {
        if (num[start] != num[end]) return false
        start++
        end--
    }
    return true
}
```

```perl
# Write a Perl program to check palindrome number

# By Soham Gupta (http://github.com/gupta-soham/) (https://www.linkedin.com/in/soham-gupta-in/)

# A Perl program to check palindrome numbe
# Input  : 121
# Output : Palindrome Number


print "Enter a number: ";
$n = <STDIN>;
# $n = 121
$t = $n;
$s = 0;
while ($n > 0) {
    $r = $n % 10;
    $s = ($s * 10) + $r;
    $n = int($n / 10);
}

if ($t == $s) {
    print "Number is Palindrome!\n";
}
else {
    print "Number is not Palindrome!\n";
}
```

```php
// Write a PHP program to check palindrome number

<?php

function check_palindrome_number($num)
{
	return strrev($num) == $num;
}

echo check_palindrome_number(121) ? 'Palindrome String' : 'Not Palindrome String';
```

```python
# Write a Python program to check palindrome number

number = input("Input:")
print("Palindrome Number" if number == number[::-1] else "Not Palindrome Number")
```

```ruby
# Write a Ruby program to check palindrome number

puts "Enter the number"
num=gets.chomp.to_i

temp=num
sum = 0

while num!=0  #implementation of while loop
    rem=num%10
    num=num/10
    sum=sum*10+rem
end

if(temp==sum)
    puts "The #{temp} is a palindrome"
else
    puts "The #{temp} is not a palindrome"
end
```

```rust
// Write a Rust program to check palindrome number

fn check_palindrome(mut num: i32) -> bool {
    let mut remainder;
    let temp;
    let mut reversed = 0;

    temp = num;

    while num>0 {
        remainder = num%10;
        num = num/10;
        reversed  = reversed*10 +remainder;
    }

    return reversed == temp;
}

fn main() {
    let palindrome = check_palindrome(199);

    println!("{}", palindrome)
}
```

```scala
// Write a Scala program to check palindrome number

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val word = scala.io.StdIn.readLine();
	  val reverseWord = reverse(word);
	  if(reverseWord == word) {
	    println("Palindrome")
	  } else {
	    println("Not a Palindrome")
	  }
	}

	def reverse(s: String): String = {
   if (s.isEmpty) ""
   else reverse(s.tail) + s.head
 }
}
```

```swift
// Write a Swift program to check palindrome number

var reversen = 0
var rem = 0
var n = 121
var no = n
no=n

while n != 0 {
    rem = n%10
    reversen = reversen * 10 + rem
    n /= 10
}
if(no == reversen)
{
    print("\(no)" + " is palindrome")
}
else
{
    print("\(no)" + " is  not palindrome")

}
```

```typescript
// Write a TypeScript program to check palindrome number

function checkPalindromeNumber(num: number) {
  let remainder: number,
    temp: number,
    reversedNumber: number = 0;

  temp = num;

  while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    reversedNumber = reversedNumber * 10 + remainder;
  }

  return reversedNumber === temp;
}

console.log(checkPalindromeNumber(190));
```
