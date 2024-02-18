---
title: "Check Even Or Odd Number"
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
    "r",
    "rust",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "hyperion912",
    "sancoLgates",
    "joao-vitor-souza",
    "grraghav120",
    "TechnicalAmanjeet",
    "greeshma-d",
    "filipkujawa",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:34:10Z
trackId: 1376
description: "Write a program to check even or odd number."
---

## Table of contents

## Write a program to check even or odd number

```
Input  : 3
Output : Odd Number
```

---

### C

```c
// Write a C program to check even or odd number

#include <stdio.h>

int main(){
    int n;
    scanf("%d",&n);
    if(n%2==0) printf("Even Number");
    else printf("Odd Number");
    return 0;
}
```

### C#

```csharp
// Write a C# program to check even or odd number

using System;
public class evenOrOdd
{
    public static void Main()
    {
    int num1, rem1;
    Console.Write("Input an integer : ");
    num1= Convert.ToInt32(Console.ReadLine());
    rem1 = num1 % 2;
    if (rem1 == 0)
 Console.WriteLine("{0} is an even integer.\n",num1);
    else
 Console.WriteLine("{0} is an odd integer.\n",num1);
}
}
```

### C++

```cpp
// Write a C++ program to check even or odd number

#include <iostream>

using namespace std;

int main()
{
    int n;cin>>n;
    if((n&1)==0) cout<<"Even Number"<<'\n';
    else cout<<"Odd Number"<<'\n';
}
```

### Dart

```dart
// Write a Dart program to check even or odd number

import 'dart:io';

void main(){
  int number;
  print("Enter a number :");
  number = int.parse(stdin.readLineSync()!);
  if(number.isEven){
      print("$number is an even number");
  } else if(number.isOdd){
      print("$number is an odd number");
  }
}
```

### Go

```go
// Write a Go program to check even or odd number

package main

import "fmt"

func main() {

	var i int
	fmt.Print("Input Number: ")
	fmt.Scanln(&i)

	if (i % 2 == 0) {
		fmt.Println("Even Number")
	} else {
		fmt.Println("Odd Number")
	}
}
```

### Java

```java
// Write a Java program to check even or odd number

import java.util.Scanner;

public class CheckEvenOrOddNumber {
  public static void main(String[] args) throws Exception {
    System.out.print("Enter number : ");
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    sc.close();

    if (num % 2 == 0) {
      System.out.println(num + " is an even number.");
    } else {
      System.out.println(num + " is an odd number.");
    }
  }
}
```

### JavaScript

```javascript
// Write a JavaScript program to check even or odd number

function checkEvenOrOdd(num) {
  let checkEvenorOdd = "";
  if (num % 2 === 0) {
    checkEvenorOdd = "Even Number";
  } else {
    checkEvenorOdd = "Odd Number";
  }
  return checkEvenorOdd;
}

console.log("The number is", checkEvenOrOdd(10));
```

### Julia

```julia
# Write a Julia program to check even or odd number

print("Enter a number: ")
number = parse(Float64, readline(stdin))
if(number % 2 == 0)
 println("Even Number")
else
 println("Odd Number")
end
```

### Kotlin

```kotlin
// Write a Kotlin program to check even or odd number

import java.util.*

fun main(args: Array<String>) {

    val reader = Scanner(System.`in`)

    print("Enter a number: ")
    val num = reader.nextInt()

    if (num % 2 == 0)
    {
        println("$num is an even number.")
    }
    else
    {
        println("$num is an odd number.")
    }
}
```

### Perl

```perl
# Write a Perl program to check even or odd number

print "Enter a number : ";
$i = <STDIN>;
if ($i%2==0)
{
   print "Even Number\n" ;
}
else
{
   print "Odd Number\n"
}
```

### PHP

```php
// Write a PHP program to check even or odd number

<?php
$number=1233456;
if($number%2==0)
{
 echo "$number is an even number.";
}
else
{
 echo "$number is an odd number.";
}
?>
```

### Python

```python
# Write a Python program to check even or odd number

# Checks if the input number is even or odd


# Solution
def checkEven(num):
    if(num>0):
        return (num % 2) == 0
    else:
        print("Please give number greater than 0")



isEven = checkEven(3)
print(f"Is 3 an even number? {isEven}")

isEven = checkEven(4)
print(f"Is 4 an even number? {isEven}")
```

### R

```r
# Write a R program to check even or odd number

num = as.integer(readline(prompt="Enter a number: "))
if((num %% 2) == 0)
{
print(paste(num,"is an even number."))
}
else
{
print(paste(num,"is an even number."))
}
```

### Ruby

```ruby
# Write a Ruby program to check even or odd number

puts "Enter a number : "
 number = Integer(gets.chomp)

 if number % 2 == 0
 puts number.to_s + " is an even number."
 else
 puts number.to_s + " is an odd number."
 end
```

### Rust

```rust
// Write a Rust program to check even or odd number

fn main()
{
    let num: i32 = 23;

    let result = if let 0=num%2{
        "Even"
    }
    else{
        "Odd"
    };

    println!("{} is: {}",num,result);
}
```

### Scala

```scala
// Write a Scala program to check even or odd number

object CheckEvenOrOddNumber{
    def main(args:Array[String]){

        var num:Int=0
        var result:String=""

        print("Enter number: ")
        num = scala.io.StdIn.readInt()

        result = if (num%2==0) "EVEN" else "ODD"

        println("Number is: "+result)
    }
}
```

### Swift

```swift
// Write a Swift program to check even or odd number

import Swift
import Foundation

var number = 5

if number % 2 == 0 {
  print("\(number) is even number")
} else {
  print("\(number) is odd number")
}
```

### TypeScript

```typescript
// Write a TypeScript program to check even or odd number

//Checks if the input number is even or odd

const checkEven = (num: number) => {
  return num % 2 == 0;
};

console.log(checkEven(4));
console.log(checkEven(3));
```
