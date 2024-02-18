---
title: "Print Pascals Triangle"
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
    "perl",
    "python",
    "rust",
  ]
contributors: ["harshraj8843", "kenroulier"]
pubDatetime: 2022-01-26
modDatetime: 2024-01-06T10:06:42Z
trackId: 3988
description: "Write a program to print pascals triangle."
---

## Table of contents

## Write a program to print pascal's triangle

Pascal's triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value `n` as input and prints first `n` lines of the Pascal's triangle.

```
Input  : 5

Output :
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
```

---

### C

```c
// Write a C program to print pascals triangle

#include<stdio.h>
void printPascal(int n)
{
  // An auxiliary array to store
  // generated pascal triangle values
  int arr[n][n];

  // Iterate through every line and
  // print integer(s) in it
  for (int line = 0; line < n; line++)
  {
    // Every line has number of integers
    // equal to line number
    for (int i = 0; i <= line; i++)
    {
      // First and last values in
      // every row are 1
      if (line == i || i == 0)
        arr[line][i] = 1;

      // Other values are sum of values
      // just above and left of above
      else
        arr[line][i] = (arr[line - 1][i - 1] +
                        arr[line - 1][i]);
      printf("%d ",
              arr[line][i]);
    }
    printf("\n");
  }
}

// Driver code
int main()
{
  int n = 5;
  printPascal(n);
  return 0;
}
```

### C#

```csharp
// Write a C# program to print pascals triangle

using System;

namespace PascalTriangle {
   class PascalTriangle {
      public static void Main() {
         int rows = 5, val = 1, blank, i, j;
         Console.WriteLine("Pascal's triangle");
         for(i = 0; i<rows; i++) {
            for(blank = 1; blank <= rows-i; blank++)
            Console.Write(" ");
            for(j = 0; j <= i; j++) {
               if (j == 0||i == 0)
               val = 1;
               else
               val = val*(i-j+1)/j;
               Console.Write(val + " ");
            }
            Console.WriteLine();
         }
      }
   }
}
```

### C++

```cpp
// Write a C++ program to print pascals triangle

#include<iostream>
#include<iomanip>
using namespace std;
long fact(long n){
   int i, fact = 1;
   for(i = n; i>1; i--)
      fact *= i;
   return fact;//factorial of given number
}
long nCr(long n, long r){
   long nume = 1, i;
   for(i = n; i>r; i--)
      nume *= i;
   return long(nume/fact(n-r));//generate result of nCr
}
void genPascalsTriangle(long n){
   for(int i = 0; i<n; i++){
      for(int j = 0; j<(n-i-1); j++)
         cout <<setw(3)<< " ";//printing space to show triangular form
      for(int j = 0; j<(i+1); j++)
         cout <<setw(3)<< nCr(i, j) <<setw(3)<< " ";
      cout << endl;
   }
}
main(){
   int n;
   cout << "Enter Number of lines: "; cin >> n;
   genPascalsTriangle(n);
}
```

### Go

```go
// Write a Go program to print pascals triangle

package main

import (
	"fmt"
	"strings"
)

func PrintPascalTriangle(n int) {
	fmt.Print(strings.Repeat(" ", (n-1)*3))
	fmt.Printf("%6d \n", 1)

	prev_row := []int{1}
	for i := 1; i < n; i++ {
		new_row := make([]int, i+1, i+1)
		new_row[0] = 1
		new_row[i] = 1

		for j := 1; j < i; j++ {
			new_row[j] = prev_row[j-1] + prev_row[j]
		}

		fmt.Print(strings.Repeat(" ", (n-i-1)*3))
		for j := 0; j < i+1; j++ {
			fmt.Printf("%6d ", new_row[j])
		}
		fmt.Println()

		prev_row = new_row
	}
}

func main() {
	var input int
	fmt.Scan(&input)
	PrintPascalTriangle(input)
}
```

### Java

```java
// Write a Java program to print pascals triangle

/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 14, 2023
 */

public class PrintPascalTriangle{
    public static void main(String[] args) {
        pascalTriangle(5);
    }

    public static void pascalTriangle(int rows){
        for (int line = 1; line <= rows; line++) {
            for (int j = 0; j <= rows - line; j++) {
                System.out.print(" ");
            }
            int C = 1;
            for (int i = 1; i <= line; i++) {
                System.out.print(C + " ");
                C = C * (line - i) / i;
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print pascals triangle

function pascalTriangle(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }

    if (i > 0) row.push(1);

    arr.push(row);
  }

  return arr;
}

console.log(pascalTriangle(5));
```

### Perl

```perl
# Write a Perl program to print pascals triangle

use strict;
use warnings;

sub fact {
  my $n = shift;
  return 1 if $n < 1;
  return $n * fact($n - 1);
}

sub n_over_k {
  my $n = shift;
  my $k = shift;
  return fact($n) / ( fact($k) * fact($n - $k) );
}

sub pascal_row {
  my $n = shift;
  return map { n_over_k($n - 1, $_) } (0 .. $n - 1);
}

my $n = shift || 5;

my $max = 0;
map { $max = $_ if $_ > $max } pascal_row($n);
my $maxw = length('' . $max);
$maxw += ($maxw + 1) % 2;

foreach my $i (1..$n) {
  print ' ' x ( ( $maxw + 1 ) * ($n - $i) / 2 );
  foreach my $j ( pascal_row($i) ) {
    printf "%${maxw}d ", $j;
  }
  print "\n";
}
```

### PHP

```php
// Write a PHP program to print pascals triangle

<?php

    echo "Output :\n\n";

    $rows = 5;

    for ($i = 0; $i < $rows; $i++) {
        $num = 1;

        for ($j = $rows; $j > $i; $j--) {
            // Adds spacing around the triangle to get a nice visual representation
            echo " ";
        }

        for ($k = 0; $k <= $i; $k++) {
            echo "$num";

            if ($k < $i) {
                // Adds spacing around the triangle to get a nice visual representation
                echo " ";
            }
            $num = $num * ($i - $k) / ($k + 1);
        }

        echo "\n";
    }
?>
```

### Python

```python
# Write a Python program to print pascals triangle

n = int(input())
triangle = [[1], [1, 1], [1, 2, 1]]
for i in range(4, n + 1):
    line = [1]
    for j in range(i - 2):
        line.append(triangle[i - 2][j] + triangle[i - 2][j + 1])
    line.append(1)
    triangle.append(line)

for line in triangle[:n]:
    print("")
    for number in line:
        print(number, end=" ")
```

### Ruby

```ruby
# Write a Ruby program to print pascals triangle

def print_pascals_triangle(n)
    triangle = []

    #Generates Pascal's triangle
    (0...n).each do |row|
        #Creates an empty array for the current row
        triangle[row] = []
        (0..row).each do |col|
            if col.zero? || col == row
            #Sets the boundary elements to 1
            triangle[row][col] = 1
            else
            #Calculates the current element by summing the two elements above it
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col]
            end
        end
    end

    #Prints Pascal's triangle
    triangle.each do |row|
        #Adds leading spaces to align rows based on the number of elements
        print ' ' * (n - row.length)
        row.each do |num|
            #Prints each number followed by a space
            print "#{num} "
        end
        #Moves to the next line after printing a row
        puts
    end
end

#Test
n = 5
print_pascals_triangle(n)
```

### Rust

```rust
// Write a Rust program to print pascals triangle

//Rust program to print pascal's triangle
//
//Pascal's triangle is a triangular array of the binomial coefficients. Write a function that takes an
// integer value n as input and prints first n lines of the Pascal's triangle.
//
//Input  : 5
//
//Output :
//        1
//       1 1
//      1 2 1
//     1 3 3 1
//    1 4 6 4 1

use std::io;

fn print_pascals_triangle(levels: u32)
{

	// outer loop to go through all the levels
  	for row in 0..levels {

    		let mut print_num = 1;	//start every row with "1"

    		//print spaces out before row based on num of levels

    		for _j in 1..2*(levels-1-row)+1 {
      		print!(" ");
    		}

    		// calculate binomial coefficients ==> p = p * ((row-col)/(col+1))

    		for calc_col in 0..row+1 {
      			print!("{:3} ", print_num);
      			print_num = print_num * (row-calc_col)/(calc_col+1);
    		}

    		println!(); //insert a newline to start the next line to print
  	}
}

fn main() {

	// the input string and this main function can be removed. This is simply for testing

	println!("Enter the number of levels to print");
	let mut input_num = String::new();
	let _rtrn = io::stdin().read_line(&mut input_num);
	let n: u32 = input_num.trim().parse().expect("Input not an integer");

	// example of how to call the function and print out the results of the inverted pyramid.
    	print_pascals_triangle(n);
}
```

### TypeScript

```typescript
// Write a TypeScript program to print pascals triangle

function pascalTriangle(num: number) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }

    if (i > 0) row.push(1);

    arr.push(row);
  }

  return arr;
}

console.log(pascalTriangle(5));
```
