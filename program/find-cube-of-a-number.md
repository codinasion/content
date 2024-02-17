---
title: "Find Cube Of A Number"
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
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "phbrgnomo",
    "pksX01",
    "anandfresh",
    "PavanKumarCB",
    "esivakumar18",
    "stephane-nguyen",
    "joao-vitor-souza",
    "AmanjeetCogoport",
    "PraaneshSelvaraj",
    "ashankritwik07",
    "ridsuteri",
    "toddmcintire",
    "Lofty-Brambles",
    "MadhuS-1605",
    "gautamnahar",
    "xcelr8",
    "heyyayesh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 125
description: "Write a program to find cube of a number."
---

## Write a program to find cube of a number

```
Input  : 2
Output : 8
```

---

```c
// Write a C program to find cube of a number

#include <stdio.h>

int cubeOfNumber(int number)
{
    return number * number * number;
}

int main()
{
    int inputNumber;
    printf("Enter a number to get its cube\n");
    scanf("%d", &inputNumber);
    printf("Input : %d \nOutput: %d\n", inputNumber, cubeOfNumber(inputNumber));
    return 0;
}
```

```csharp
// Write a C# program to find cube of a number

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    double cube = num * num * num;
    Console.WriteLine("Cube of given number : "+cube);
  }
}
```

```cpp
// Write a C++ program to find cube of a number

#include <iostream>

using namespace std;

int main()
{
    int num; // declaring an integer variable num
    cout << "Input  : ";
    cin >> num;                                     // taking input from user and storing it in num
    cout << "Output : " << num * num * num << endl; // printing cube of the number
}
```

```dart
// Write a Dart program to find cube of a number

import 'dart:io';

void main() {
  print("Enter a number of which you want to calculate cube: ");
  double? n = double.parse(stdin.readLineSync()!);
  double cube = n*n*n;
  print("Cube of $n is $cube");
}
```

```fsharp
// Write a F# program to find cube of a number

let cubeOfNumber num : int =
  num * num * num

let result =  cubeOfNumber 2

printfn "Cube of given number : %d" result
```

```go
// Write a Go program to find cube of a number

package main

import "fmt"

func main(){
  var num int
  fmt.Println("Enter nummber:")
  fmt.Scan(&num)
  fmt.Println("Cube of given number is:", num*num*num)
}
```

```java
// Write a Java program to find cube of a number

package MyClass;
import java.util.Scanner;
public class FindCubeOfANumber {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int a = sc.nextInt();
		long cube = (a*a*a);
		System.out.println(cube);

	}

}
```

```javascript
// Write a JavaScript program to find cube of a number

function FindCubeOfANumber(num) {
  return num ** 3;
}

const number = 2;
console.log("Input  :", number);
console.log("Output :", FindCubeOfANumber(number));
```

```julia
# Write a Julia program to find cube of a number

print("Enter a number : ")
num = parse(Float64, readline(stdin))
cube = num * num * num
println("Cube of the given number : ", cube)
```

```kotlin
// Write a Kotlin program to find cube of a number

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val number = scanner.nextDouble()

  val cube = number * number * number
  println(cube)
}
```

```perl
# Write a Perl program to find cube of a number

use warnings;
use 5.010;

sub cube {
  my($c)=@_;
  return ($c*$c*$c );
}


print "Input Number : ";
$num=<STDIN>;

$cube=cube($num);
say "Output : $cube";
```

```php
// Write a PHP program to find cube of a number

<?php
$x = readline('Enter the number to find its cube: ');

$x1 = $x**(3);
echo "Cube of $x is $x1.\n";
?>
```

```python
# Write a Python program to find cube of a number

def cube_of_number(num):
    return num**3


if __name__ == "__main__":
    num = int(input("Enter the number : "))
    print(f"\nCube of the number : {cube_of_number(num)}")
```

```r
# Write a R program to find cube of a number

# Function to calculate cube of a number
calculate_cube <- function(x) {
  return(x^3)
}


number <- as.numeric(readline(prompt = "Enter a number: "))

result <- calculate_cube(number)
cat("Cube of", number, "is:", result, "\n")
```

```ruby
# Write a Ruby program to find cube of a number

print "Enter the number : "
num = gets.chomp.to_i
cube = num**3
print "Cube of #{num} is #{cube}"
```

```rust
// Write a Rust program to find cube of a number

fn main()
{
  let num = 5;
 let cube =  num * num * num;

 println!("{}", cube);

}
```

```scala
// Write a Scala program to find cube of a number

import scala.io.StdIn._;

object cubeNumber {
  def main(args:Array[String]):Unit={
    val num = readLine().toInt;
    println("Enter a number : "+num);
    val cube = num * num * num;
    println("Cube of the given number :"+cube);
  }
}
```

```swift
// Write a Swift program to find cube of a number

//
//  main.swift
//  cube
//
//  Created by Todd McIntire on 9/29/22.
//

import Foundation

let myString = readLine()
let number = Int(myString!)
let cube = number! * number! * number!
print(cube)
```

```typescript
// Write a TypeScript program to find cube of a number

const FindCubeOfANumber = (num: number): number => {
  return Math.pow(num, 3);
};

const number = 2;
console.log("Input  :", number);
console.log("Output :", FindCubeOfANumber(number));
```
