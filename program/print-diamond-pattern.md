---
title: "Print Diamond Pattern"
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
    "lookwhoshere99",
    "imsherlocked",
    "anandfresh",
    "anvithayerneni",
    "sahanasurapureddy",
    "harshraj8843",
    "Fukurokudzu",
    "BarBronshtein",
    "joao-vitor-souza",
    "sam-mugo",
    "AadityaDev",
    "simranrangari",
    "divyasakre",
    "Mrunmayi28",
    "vedantpople4",
    "das-amit",
    "Medmly20208",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-15T04:19:07Z
trackId: 4665
description: "Write a program to print diamond pattern."
---

## Write a program to print diamond pattern

```
Input  : 5

Output :
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

---

```c
// Write a C program to print diamond pattern

#include<stdio.h>

void printDiamond(int n)
{
	int space = n - 1;

	for (int i = 0; i < n; i++)
	{
		for (int j = 0;j < space; j++)
			printf(" ");

		for (int j = 0;j <= i; j++)
			printf("* ");

		printf("\n");
		space--;
	}

	space = 0;

	for (int i = n; i > 0; i--)
	{
		for (int j = 0; j < space; j++)
			printf(" ");

		for (int j = 0;j < i;j++)
			printf("* ");

		printf("\n");
		space++;
	}
}

// Driver code
int main()
{
	printDiamond(5);
	return 0;
}
```

```csharp
// Write a C# program to print diamond pattern

using System;
public class Exercise31
{
    public static void Main()
{
   int i,j,r;

   r = Convert.ToInt32(5);
   for(i=0;i<=r;i++)
   {
     for(j=1;j<=r-i;j++)
     Console.Write(" ");
     for(j=1;j<=2*i-1;j++)
     Console.Write("*");
     Console.Write("\n");
   }

   for(i=r-1;i>=1;i--)
   {
     for(j=1;j<=r-i;j++)
     Console.Write(" ");
     for(j=1;j<=2*i-1;j++)
       Console.Write("*");
     Console.Write("\n");
   }
  }
}
```

```cpp
// Write a C++ program to print diamond pattern

#include <bits/stdc++.h>
using namespace std;

void printDiamond(int n)
{
	int space = n - 1;

	for (int i = 0; i < n; i++)
	{

		for (int j = 0;j < space; j++)
			cout << " ";

		for (int j = 0; j <= i; j++)
			cout << "* ";

		cout << endl;
		space--;
	}

	space = 0;

	for (int i = n; i > 0; i--)
	{

		for (int j = 0; j < space; j++)
			cout << " ";

		for (int j = 0;j < i;j++)
			cout << "* ";

		cout << endl;
		space++;
	}
}

// Driver code
int main()
{
	printDiamond(5);
	return 0;
}
```

```dart
// Write a Dart program to print diamond pattern

import 'dart:io';

void main() {
  int i, j, k, m = 1;

  print("Enter the number : ");
  int? n = int.parse(stdin.readLineSync()!);

  print("$n");
  for ( i =1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
      stdout.write(" ");
    }
    for (k = 1; k <= ( 2 * i - 1); k++) {
      stdout.write("*");
    }
    stdout.writeln("");
  }

  for ( i = n-1; i >= 1; i--) {
    for ( j = 1; j <= m; j++) {
      stdout.write(" ");
    }
    for (k = 1; k <= ( 2 * i - 1); k++) {
      stdout.write("*");
    }
    m++;
    stdout.writeln("");
  }
}
```

```fsharp
// Write a F# program to print diamond pattern

let printDiamond n =
    // Function to print a single line of the diamond
    let printLine i =
        let stars = new string('*', i * 2 - 1)
        let spaces = new string(' ', n - i)
        printfn "%s%s" spaces stars

    // Upper half of the diamond
    for i in 1 .. n do
        printLine i

    // Lower half of the diamond
    for i in n - 1 .. -1 .. 1 do
        printLine i

// Take the size of the diamond from the user
printfn "Enter the size of the diamond: "
let size = System.Console.ReadLine() |> int

// Print the diamond
printDiamond size
```

```go
// Write a Go program to print diamond pattern

package main

import "fmt"

func main() {
	var i, j, k int
	i = 1
	j = 1
	k = 1
	var row int
	row = 5
	for i = 1; i <= row; i++ {
		for j = 1; j <= row-i; j++ {
			fmt.Printf(" ")
		}
		for k = 1; k <= i*2-1; k++ {
			fmt.Printf("*")
		}
		fmt.Println()
	}
	for i = row - 1; i > 0; i-- {
		for j = 1; j <= row-i; j++ {
			fmt.Printf(" ")
		}
		for k = 1; k <= i*2-1; k++ {
			fmt.Printf("*")
		}
		fmt.Println()
	}
}
```

```haskell
-- Write a Haskell program to print diamond pattern

main :: IO ()
main = do
    putStrLn "Enter the size of the diamond: "
    size <- readLn
    printDiamond size

printDiamond :: Int -> IO ()
printDiamond size
  | size <= 0 = putStrLn "Invalid size. Size should be a positive integer."
  | otherwise = putStr $ unlines $ diamondRows size

diamondRows :: Int -> [String]
diamondRows size = topRows ++ bottomRows
  where
    topRows = map (centerPad size) [1, 3 .. size]
    bottomRows = map (centerPad size) (reverse [1, 3 .. (size - 2)])

centerPad :: Int -> Int -> String
centerPad totalSize rowSize = replicate spaces ' ' ++ replicate rowSize '*' ++ replicate spaces ' '
  where
    spaces = (totalSize - rowSize) `div` 2
```

```java
// Write a Java program to print diamond pattern

class PrintDiamondPattern {
  static void DiamondPattern(int n) {
    int i, j, k;
    // Print upper half of the diamond
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i; j++) {
        System.out.print(" ");
      }
      for (k = 0; k < 2 * i + 1; k++) {
        System.out.print("*");
      }
      System.out.println();
    }
    // Print lower half of the diamond
    for (i = n - 2; i >= 0; i--) {
      for (j = 0; j < n - i; j++) {
        System.out.print(" ");
      }
      for (k = 0; k < 2 * i + 1; k++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }
  public static void main(String[] args) {
    DiamondPattern(5);
  }
}
```

```javascript
// Write a JavaScript program to print diamond pattern

const diamondPattern = n => {
  let iteration = 0;
  const construct = ["*".repeat(2 * n - 1)];
  n *= 2;
  while ((n -= 2) > 0) {
    const layer = " ".repeat(++iteration) + "*".repeat(n - 1);
    construct.unshift(layer);
    construct.push(layer);
  }
  construct.forEach(pattern => console.log(pattern));
};

diamondPattern(5);
```

```kotlin
// Write a Kotlin program to print diamond pattern

fun drawDiamond(rows: Int) {
    var k = 0

    for (i in 1..rows) {
        for (space in 1..rows - i) {
            print("  ")
        }

        while (k != 2 * i - 1) {
            print("* ")
            ++k
        }

        println()
        k = 0
    }

    for (i in rows-1 downTo 1) {

        for (space in 1..rows - i) {
            print("  ")
        }

        for (j in i..2 * i - 1) {
            print("* ")
        }

        for (j in 0..i - 1 - 1) {
            print("* ")
        }

        println()
    }
}

fun main() {
    val num = 5
    print("\n")
    drawDiamond(num)
}
```

```perl
# Write a Perl program to print diamond pattern

print "Enter a number :";
my $n=<STDIN>;
print "\n";
$space = $n - 1;

for ($i = 0; $i < $n; $i++)
{
    for ($j = 0;$j < $space; $j++) {
        print " ";
    }
    for ($j = 0;$j <= $i; $j++) {
        print "* ";
    }
print "\n";
$space--;
}
$space = 0;

for ($i = $n; $i > 0; $i--)
{
    for ($j = 0; $j < $space; $j++) {
         print " ";
    }
    for ($j = 0;$j < $i;$j++) {
        print "* ";
    }
print "\n";
$space++;
}
```

```php
// Write a PHP program to print diamond pattern

<?php

function diamondPattern($n) {
echo "<pre>";
for ($i = 1; $i < $n; $i++) {
    for ($j = $i; $j < $n; $j++)
        echo "&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}

for ($i = $n; $i > 0; $i--) {
    for ($j = $n - $i; $j > 0; $j--)
        echo "&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}
echo "</pre>";
}

diamondPattern(5);

?>
```

```python
# Write a Python program to print diamond pattern

def printDiamondPattern(number: int) -> None:
    """
    print Diamond Pattern
    Arguments:
        number:int
    Returns:
        None
    """

    #  print the first half of the pattern

    NumberOfSpaces = number
    NumberOfStars = 1
    for i in range(0, number):
        print(" " * NumberOfSpaces, end=f"{'*'*NumberOfStars}\n")
        NumberOfSpaces = NumberOfSpaces - 1
        NumberOfStars = NumberOfStars + 2

    #  print the second half

    NumberOfSpaces = 2
    NumberOfStars = NumberOfStars - 4

    for i in range(0, number - 1):
        print(" " * NumberOfSpaces, end=f"{'*'*NumberOfStars}\n")
        NumberOfSpaces = NumberOfSpaces + 1
        NumberOfStars = NumberOfStars - 2


if __name__ == "__main__":
    number = int(input("Type A number : "))
    printDiamondPattern(number)


# contributed by MedMly20208 Mohamed Moulay
```

```r
# Write a R program to print diamond pattern

diamond <- function(max) {

    # Upper triangle
    space <- max - 1
    for (i in 0:(max - 1)) {
        for (j in 0:space) cat(" ")
        for (j in 0:i) cat("* ")
        cat("\n")
        space <- space - 1
    }

    # Lower triangle
    space = 1;
    for (i in (max - 1):1) {
        for (j in 0:space) cat(" ")
        for (j in 0:(i - 1)) cat("* ")
        cat("\n")
        space <- space + 1
    }
}
diamond(5)
```

```ruby
# Write a Ruby program to print diamond pattern

module PrintDiamond

  def self.print(num)

    1.upto(num) do |i|
      draw(num, i)
    end

    (num-1).downto(1) do |i|
      draw(num, i)
    end

    return
  end

  def self.draw(num, i)
    asterisks = "*" * i
    spaces = " " * (num - i)
    puts spaces + asterisks + (asterisks[1..])
  end
end

PrintDiamond.print(5)
```

```rust
// Write a Rust program to print diamond pattern

fn print_diamond_pattern(num_rows: usize) {
    // Print upper part of the diamond
    for i in 1..=num_rows {
        for _ in 0..(num_rows - i) {
            print!(" ");
        }

        for _ in 1..=(2 * i - 1) {
            print!("*");
        }

        println!();
    }

    // Print lower part of the diamond
    for i in (1..num_rows).rev() {
        for _ in 0..(num_rows - i) {
            print!(" ");
        }

        for _ in 1..=(2 * i - 1) {
            print!("*");
        }

        println!();
    }
}

fn main() {
    let num_rows = 4;

    print_diamond_pattern(num_rows);
}
```

```scala
// Write a Scala program to print diamond pattern

object printDiamondPattern {
    def diammondPatternIncrementByTwo(n: Int): Unit = {
        // print upper half of the diamond
        for (i <- 1 to n) {
            for (j <- 1 to n - i) print("  ")
            for (j <- 1 until 2 * i) print("* ")
            println()
        }
        // print lower half of the diamond
        for (i <- n - 1 to 1 by -1) {
            for (j <- 1 to n - i) print("  ")
            for (j <- 1 until 2 * i) print("* ")
            println()
        }
    }
    def main(args: Array[String]): Unit = {
    val n = 5
    diammondPatternIncrementByTwo(n)

    }

}
```

```swift
// Write a Swift program to print diamond pattern

func printDiamondPattern(_ n: Int) {

    for i in 1...n {
        for _ in stride(from: n - i, to: 0, by: -1) {
            print(" ", terminator: "")
        }

        for _ in 1...(2 * i - 1) {
            print("*", terminator: "")
        }

        print()
    }

    for i in stride(from: n - 1, to: 0, by: -1) {

        for _ in stride(from: n - i, to: 0, by: -1) {
            print(" ", terminator: "")
        }

        for _ in 1...(2 * i - 1) {
            print("*", terminator: "")
        }
        print()
    }
}

printDiamondPattern(5)
```

```typescript
// Write a TypeScript program to print diamond pattern

function printDiamond(num: number): void {
  let str = "";
  if (!num) return console.log("");
  if (num < 0) num = -num;
  if (num === 1) return console.log("*");
  str += " ".repeat(num) + "*\n";

  for (var i = 1; i < num - 1; i++) {
    str += " ".repeat(num - i) + "*".repeat(i * 2 + 1) + "\n";
  }

  str += " ".repeat(num - i) + "*".repeat(i * 2 + 1) + "\n";

  for (let j = i - 1; j > 0; j--) {
    str += " ".repeat(num - j) + "*".repeat(j * 2 + 1) + "\n";
  }

  str += " ".repeat(num) + "*";
  console.log(str);
}
printDiamond(5);
```
