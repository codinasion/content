---
title: "Find Perimeter Of A Square"
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
    "perl",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "kituuu",
    "sanmay321",
    "plopez26DPU",
    "sureshsgith",
    "PoweredByCaffein",
    "grraghav120",
    "BiscuitCandy",
    "greeshma-d",
    "ahasunos",
    "manankarnik",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 4239
description: "Write a program to find perimeter of a square."
---

## Write a program to find perimeter of a square

Perimeter of square = 4 × `Side`

```
Side : 2

Perimeter : 8
```

---

```c
// Write a C program to find perimeter of a square

#include <stdio.h>
#include <setjmp.h> // For Exception Handling in C

jmp_buf savebuff;

#define TRY if (setjmp(savebuff) == 0)
#define CATCH else

// Declaring a function with exception handling
float calc_peri(float side);

// Main function
int main()
{
    float s;                                                  // Declaring Variable
    printf("Enter the side of square to find perimeter: \n"); // Input prompt
    scanf("%f", &s);                                          // Reading input

    TRY
    {
        printf("Perimeter of square is: %f\n", calc_peri(s));
    }
    CATCH
    {
        printf("ERROR!!! invalid input.\n");
    }

    return 0;
}

float calc_peri(float side)
{
    float peri;
    peri = 4 * side;
    if (side < 0)
    {
        longjmp(savebuff, 1);
    }

    return peri;
}
```

```csharp
// Write a C# program to find perimeter of a square

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the side : ");
    double side = Convert.ToDouble(Console.ReadLine());
    double perimeter = 4 * side;
    Console.WriteLine("Perimeter of square :"+perimeter);
  }
}
```

```cpp
// Write a C++ program to find perimeter of a square

// C++ Program to Find Perimeter of a Square
#include <iostream>
using namespace std;

int main(){
    int side, pm;

    // Taking input
    cout << "Enter the side of the square   : ";
    cin >> side;

    // Calculating perimeter of square
    pm = 4 * side;

    // Display perimeter
    cout << "The perimeter of the square is : " << pm << endl;

    return 0;
}
```

```dart
// Write a Dart program to find perimeter of a square

import 'dart:io';
void main(){
  print("Enter the side :");
  int side = int.parse(stdin.readLineSync()!);
  int perimeter = 4 * side;
  print('Perimeter of square : $perimeter');
}
```

```fsharp
// Write a F# program to find perimeter of a square

let perimeterOfSquare side : int =
  4 * side

printfn "Enter the side :"
let side = int (System.Console.ReadLine())
let perimeter = perimeterOfSquare side

printfn "Perimeter of square : %d" perimeter
```

```go
// Write a Go program to find perimeter of a square

package main

import "fmt"

func main() {
	var side float32
	fmt.Printf("Side: ")
	fmt.Scan(&side)
	fmt.Println("Perimeter:", 4 * side)
}
```

```haskell
-- Write a Haskell program to find perimeter of a square

main :: IO ()
main = do
     putStrLn "Enter side: "
     input1 <- getLine
     let side = read input1 :: Float

     let perimeter = 4 * side
     putStrLn $ show (perimeter)
```

```java
// Write a Java program to find perimeter of a square

import java.util.Scanner;
public class FindPerimeterOfASquare
{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the side of the square:");
		double peri = sc.nextDouble();
		double  perimeter = 4*peri;
		System.out.println("Perimeter: " + perimeter);
	}
}

// Contributed by Raghav Garg (@grraghav120)
```

```javascript
// Write a JavaScript program to find perimeter of a square

function perimeterOfSquare(sides) {
  let perimeterOfSqr = 4 * sides;
  console.log(perimeterOfSqr);
}

perimeterOfSquare(2);
```

```julia
# Write a Julia program to find perimeter of a square

print("Enter the side: ")
side = parse(Float64, readline(stdin))
perimeter = 4 * side
println("Perimeter of square: ", perimeter)
```

```kotlin
// Write a Kotlin program to find perimeter of a square

import java.util.Scanner

fun main() {
    print("Enter the side of the square: : ")
    println()
    var side = readLine()

    try {
        println("Perimeter of square with side $side : " + FindPerimeterOfASquare(side!!.toDouble()))
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun FindPerimeterOfASquare(side: Double): Double {
    val perimeter = 4 * side

    return  perimeter
}
```

```perl
# Write a Perl program to find perimeter of a square

my $side = <STDIN>;
$perimeter = 4 * $side;
print "perimeter: $perimeter"
```

```php
// Write a PHP program to find perimeter of a square

<?php
$x = readline('Enter Side of Square: ');

$x1 = $x * 4;
echo "Perimeter: $x1 \n";

?>
```

```python
# Write a Python program to find perimeter of a square

def perimeter_of_square(side):
    return 4 * side


if __name__ == "__main__":
    n = int(input("Enter side of square"))
    print("Perimeter of square:", perimeter_of_square(n))
```

```r
# Write a R program to find perimeter of a square

side = 2
cat("Perimeter of square  : ", 4 * side)
```

```ruby
# Write a Ruby program to find perimeter of a square

# frozen_string_literal: true

def find_perimeter_of_a_square(side)
  side * 4
end

if $PROGRAM_NAME == __FILE__
  print 'Side : '
  side = gets.chomp.to_i
  puts "Perimeter : #{find_perimeter_of_a_square(side)}"
end
```

```rust
// Write a Rust program to find perimeter of a square

/*
 * Program: Find perimeter of a square
 * Author: Manan Karnik
 * Date: 13/10/2022
 */

use std::io::{self, Write};

fn main() {
    // String to store input
    let mut input_text = String::new();
    print!("Enter side of square: ");
    io::stdout().flush().unwrap();

    // Accept input
    io::stdin()
        .read_line(&mut input_text)
        .expect("Failed to read line");

    // Parse input to f32
    let side: f32 = input_text.trim().parse().expect("Input is not a number");

    // Print result
    println!("The perimeter of a square with side length {} is {}", side, side * 4.0);
}
```

```scala
// Write a Scala program to find perimeter of a square

def findPerimeterOfASquare (side : Int) : Int = {
    side * 4
}
```

```swift
// Write a Swift program to find perimeter of a square

import Swift
import Foundation

var side = 2

var perimeter = 4 * side
print("Perimeter: ", perimeter)
```

```typescript
// Write a TypeScript program to find perimeter of a square

const getPerimeterOfSquare = (side: number): number => {
  return 4 * side;
};

const side = 23;
console.log(
  `The perimeter of the square of side ${side} is ${getPerimeterOfSquare(side)}`
);
```
