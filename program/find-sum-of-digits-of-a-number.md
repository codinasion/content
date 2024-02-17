---
title: "Find Sum Of Digits Of A Number"
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
    "swapnilmukherjee",
    "REVERB283",
    "einan202",
    "harshraj8843",
    "Raboro",
    "GarrettDaniel",
    "champati-v",
    "gsquareg2",
    "anandfresh",
    "bnzone",
    "vedantpople4",
    "vipulkmr02",
    "james-tharit",
    "dineshlalam15",
    "cachoureze",
    "ExpressOwl",
    "wise-guru",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-24T14:02:32Z
trackId: 5402
description: "Write a program to find sum of digits of a number."
---

## Write a program to find sum of digits of a number

Suppose you have a number `n` and you want to find the sum of its digits. For example, if `n = 123`, then the sum of its digits is `1 + 2 + 3 = 6`.

```
Input  : 123
Output : 6
```

---

```c
// Write a C program to find sum of digits of a number

#include <stdio.h>

int sum_of_digits(int nmbr) {
	int sum = 0;

	while (nmbr != 0) {
		sum += nmbr % 10;
		nmbr /= 10;
	}

	return sum;
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%d", sum_of_digits(n));
	return 0;
}
```

```csharp
// Write a C# program to find sum of digits of a number

using System;
namespace SumOfDigits
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter the Number : ");
            int number = int.Parse(Console.ReadLine());
            int sum = 0, reminder;

            while (number > 0)
            {
                reminder = number % 10;
                sum = sum + reminder;
                number = number / 10;
            }

            Console.WriteLine($"The Sum of Digits is : {sum}");
            Console.ReadKey();
        }
    }
}
```

```cpp
// Write a C++ program to find sum of digits of a number

// Sum of Digits of a number
//Time complexity O(N) and space Complexity O(1);

#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){
    string input;   cin>>input;
    ll sum=0;
    // cout<< (int)'1';
    for(int i=0;i<input.length();i++){
        sum+= ((int)input[i]-48);  //Ascii value of '1' is 49. So if (int)'1'-48 --> 49-48 = 1; similarly if (int)'2' - 48 --> 50 - 48 = 2;
    }

    cout<<sum<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/
```

```dart
// Write a Dart program to find sum of digits of a number

int _sumOfDigits(int num) {
  String str = num.toString();
  int n = 0, sum = 0;
  while (n < str.length) {
    sum += int.parse(str[n]);
    n++;
  }
  return sum;
}

void main() {
  print(_sumOfDigits(123)); // must return 6
  print(_sumOfDigits(456)); // must return 15
  print(_sumOfDigits(0789012)); // must return 27
}
```

```fsharp
// Write a F# program to find sum of digits of a number

// program to find the sum of digits of a number
let sumOfDigits (n: int) =
    let mutable number = n
    let mutable digitSum = 0
    while number > 0 do
        let digit = number % 10
        digitSum <- digitSum + digit
        number <- number / 10
    digitSum

// Example usage:
let number = 123
let result = sumOfDigits number
printfn "%d" result
```

```go
// Write a Go program to find sum of digits of a number

package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	var res int
	for num > 0 {
		res += num % 10
		num /= 10
	}
	fmt.Println(res)
}
```

```haskell
-- Write a Haskell program to find sum of digits of a number

main :: IO ()
main = do
  putStrLn "Enter your number containing String: "
  input <- getLine
  print (sumOfDigitOfANumber input)

sumOfDigitOfANumber :: String -> Int
sumOfDigitOfANumber str = sum $ stringToIntList str

stringToIntList :: String -> [Int]
stringToIntList = map (\c -> read [c] :: Int)
```

```java
// Write a Java program to find sum of digits of a number

import java.util.Scanner;

public class FindSumOfDigitsOfANumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(findSum(num));
    }
    static int findSum(int n){
        int sum = 0;
        while(n != 0){
            sum += n%10;
            n/= 10;
        }
      return sum;
    }
}
```

```javascript
// Write a JavaScript program to find sum of digits of a number

// Write a JavaScript program to find sum of digits of a number
// Suppose you have a number n and you want to find the sum of its digits.
// For example, if n = 123, then the sum of its digits is 1 + 2 + 3 = 6.

function sumOfDigits(number) {
  let digits = number.toString().split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}
```

```julia
# Write a Julia program to find sum of digits of a number

# Function to calculate the sum of digits of a number
function sum_of_digits(n::Int)
    sum = 0
    while n > 0
        sum += n % 10  # Add the last digit to sum
        n ÷= 10        # Remove the last digit from n
    end
    return sum
end

# Main code to get user input and call the function
println("Enter a number:")
input = readline()

try
    local n = parse(Int, input)  # Explicitly declare `n` as a local variable
    println("The sum of digits of ", n, " is ", sum_of_digits(n))
catch e
    println("Error: Please enter a valid integer.")
end
```

```kotlin
// Write a Kotlin program to find sum of digits of a number

fun main() {
    sumOfNumberDigits(123)
}

fun sumOfNumberDigits(n: Int){
    var x = n;
    var sum = 0
    while (x > 0) {
        var y = x % 10
        sum += y
        x /= 10
    }
    println(sum)
}
```

```perl
# Write a Perl program to find sum of digits of a number

print"Enter a number: ";
$n=<STDIN>;
$s=0;
while($n>0)
{
$s=$s+($n%10);
$n=$n/10;
}
print"Sum is $s\n";
```

```php
// Write a PHP program to find sum of digits of a number

<?php

function sumOfDigits($num) {
$sum=0; $rem=0;
  for ($i =0; $i<=strlen($num);$i++)
 {
   $rem=$num%10;
   $sum = $sum + $rem;
   $num=$num/10;
  }
 return $sum;
}

echo sumOfDigits(123);

?>
```

```python
# Write a Python program to find sum of digits of a number

# This python script calculates the sum of the digits of a random number n

def find_sum_of_digits_of_a_number(n: int) -> int:
    sum_of_digits = 0
    for digit in str(n):
        sum_of_digits += int(digit)
    return sum_of_digits

print(find_sum_of_digits_of_a_number(123))

# Shorthand for the above function
# def sumOfDigits(n: int) -> int:
#     return sum([int(x) for x in str(n)])
#
# print(sumOfDigits(123))
```

```r
# Write a R program to find sum of digits of a number

sum_of_digits <- function(x) {
    string_x <- format(x)
    split_x <- strsplit(string_x, "")[[1]]
    sum_output <- 0
    for (char in split_x) {
        sum_output <- sum_output + as.integer(char)
    }
    return(sum_output)
}

## Test cases
print(sum_of_digits(123)) ## Correct Answer: 6
print(sum_of_digits(456)) ## Correct Answer: 15
print(sum_of_digits(179)) ## Correct Answer: 17
```

```ruby
# Write a Ruby program to find sum of digits of a number

def sumOfDigits(num,sum)
	if num > 0
		sum += (num % 10);
		sumOfDigits(num / 10,sum);
	else
	    return sum;
	end
end

print "Enter a number : ";
number = gets.chomp.to_i;

result = sumOfDigits(number, 0);
print "Sum of given digits : ",result;
```

```rust
// Write a Rust program to find sum of digits of a number

fn sum_of_digits(mut n: u32) -> u32 {
    let mut sum = 0;
    while n > 0 {
        sum += n % 10;
        n /= 10;
    }
    sum
}
```

```scala
// Write a Scala program to find sum of digits of a number

import scala.io.StdIn._;
object sum_digit {
	def main(args: Array[String]): Unit = {
	var n:Int=readInt()
	println("Enter a number :"+n);
	var sum=0;
	while(n!=0)
	{
	  sum=sum+n%10;
	  n=n/10;

	}
	println("Sum of digits of number :"+sum)
	}
}
```

```swift
// Write a Swift program to find sum of digits of a number

func sum_of_digits(_ num: Int) -> Int {   //Declare a function to calculate the sum of digits of number
    var sum = 0
    var n = num

    while n>0 {
        sum += n%10
        n /= 10
    }
    return sum
}

print("Enter a positive number: ")      //Take input from the user
if let num = Int(readLine()!){

    let Digitsum = sum_of_digits(num)   //Call the function and print the result
    print("Sum of digits of number \(num) is \(Digitsum)")
}

else {                                  //Print error if the input is invalid
    print("Please enter a valid input!")
}
```

```typescript
// Write a TypeScript program to find sum of digits of a number

function getSumOfDigits(value: number) {
  let sum: number = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}
```
