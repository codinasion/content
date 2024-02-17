---
title: "Print Reverse Of A Number"
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
    "esivakumar18",
    "roshan798",
    "lukaszmielczarekdev",
    "hi-Kartik2004",
    "rafaover",
    "rksp25",
    "joao-vitor-souza",
    "devkansara",
    "grraghav120",
    "CodingWithHardik",
    "ba-ppp",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-09-01T09:47:08Z
trackId: 3468
description: "Write a program to print reverse of a number."
---

## Write a program to print reverse of a number

Reverse of a number is the number obtained by reversing the digits of the original number. For example, the reverse of 123 is 321. The reverse of 100 is 1. The reverse of 1000 is 1.

```
Input  : 123
Output : 321
```

---

```c
// Write a C program to print reverse of a number

#include <stdio.h>

int reverse(int n) {
	int reverseNumber = 0;
	while(n) {
		reverseNumber = reverseNumber * 10 + (n%10);
		n/=10;
	}
	return reverseNumber;
}
int main(){
	int n;
	printf("Enter a number :");
	scanf("%d",&n);
	printf("Number in reverse : %d", reverse(n));
}
```

```csharp
// Write a C# program to print reverse of a number

using System;
  public class ReverseInteger
   {
     public static void Main(string[] args)
      {
       int  n, reverse=0, rem;
       Console.Write("Enter a number: ");
       n= int.Parse(Console.ReadLine());
       while(n!=0)
       {
        rem=n%10;
        reverse=reverse*10+rem;
        n/=10;
       }
       Console.Write("Reversed Number: "+reverse);
    }
  }
```

```cpp
// Write a C++ program to print reverse of a number

#include<iostream>
using namespace std;
int reverse(int n) {
	int reverseNumber = 0;
	while(n) {
		reverseNumber = reverseNumber * 10 + (n%10);
		n/=10;
	}
	return reverseNumber;
}
int main(){
	int n;
	cout<<"Enter a number :";
	cin>>n;
	cout<<"Number in reverse : "<<reverse(n)<<endl;
}
```

```go
// Write a Go program to print reverse of a number

package main

import "fmt"

func reverse(s string) string {
	rns := []rune(s)
	for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {

		rns[i], rns[j] = rns[j], rns[i]
	}

	return string(rns)
}

func main() {

	var revnum string

	fmt.Print("Enter the Number to Reverse = ")
	fmt.Scanln(&revnum)

	reverse := reverse(revnum)

	fmt.Println("The Reverse of the Given Number = ", reverse)
}
```

```java
// Write a Java program to print reverse of a number

import java.util.*;
import java.io.*;
import java.text.*;
public class Main
{
    public static int ReverseNo(int n){
        int rev=0;
        for(int i=n;i>0;i=i/10){
            int mod=i%10;
            rev=rev*10+mod;
        }
        return rev;
    }

	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
		System.out.println(ReverseNo(n));
	}
}

// Contributed by Raghav Garg (@grraghav120)
```

```javascript
// Write a JavaScript program to print reverse of a number

let rev = 0;
let num = 123;
let lastDigit;

while (num != 0) {
  lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num / 10);
}

console.log(+rev);
```

```julia
# Write a Julia program to print reverse of a number

# Write a Julia program to print reverse of a number

println(reverse("GFG"))
println(reverse("gfg"))
println(reverse("Geeks"))
println(reverse("GeeksforGeeks"))
```

```kotlin
// Write a Kotlin program to print reverse of a number

import java.util.Scanner

fun main() {
    print("Enter number : ")
    println()
    var min = readLine()

    println("Reversed Number: " + ReverseNumber(min!!.toInt()))

}

private fun ReverseNumber(num: Int): Int {
    var reversed = 0
    var num2= num

    while (num2 != 0) {
        val digit = num2 % 10
        reversed = reversed * 10 + digit
        num2 /= 10
    }

    return  reversed
}
```

```perl
# Write a Perl program to print reverse of a number

use strict;
use warnings;
use 5.010;

print "Please enter a number : ";
my $n = <STDIN>;
$n=~s/0+$//;
my $u = reverse $n;
print "Reverse of given number : ".$u;
```

```php
// Write a PHP program to print reverse of a number

<?php
	$num = readline('Enter a number: ');
	$x = 0;
  $n =$num;

  while(floor($num))
  {
    $mod = $num%10;
    $x = $x * 10 + $mod;
    $num = $num/10;
  }
  echo "Reverse of $n is $x.";
?>
```

```python
# Write a Python program to print reverse of a number

print(input()[::-1])
```

```ruby
# Write a Ruby program to print reverse of a number

# reverse of a number
puts "Write a number to reverse: "
number_input = gets.chomp
result = number_input.to_s.reverse.to_i

puts "Here's your reversed number: #{result}"
```

```rust
// Write a Rust program to print reverse of a number

fn main() {
    let nums = 1000;

    // convert number to string
    let str_nums = nums.to_string();

    // reverse the string
    let rev_str = str_nums.chars().rev().collect::<String>();

    // convert string to number
    let result = rev_str.parse::<i32>().unwrap();

    println!("{}", result);
}
```

```scala
// Write a Scala program to print reverse of a number

object HelloWorld {
	def main(args: Array[String]): Unit = {
	 var num = scala.io.StdIn.readInt();

	 if (num > 0) println(num.toString.reverse.toInt )
	 else println(-1 * ((num * -1).toString.reverse.toInt))
	}
}
```

```swift
// Write a Swift program to print reverse of a number

import Swift
import Foundation

print("Enter a number")
var number = Int(readLine()!)!
var reverseNum = 0

print("Original number: ", number)

while(number != 0){
   reverseNum = reverseNum * 10
   reverseNum = reverseNum + number % 10
   number = number/10
}
print("Reversed number: ", reverseNum)
```

```typescript
// Write a TypeScript program to print reverse of a number

const reverseNumber = (n: number) => {
  const reversedNumber = n.toString().split("").reverse().join("");

  return parseFloat(reversedNumber) * Math.sign(n);
};

console.log(reverseNumber(123));
```
