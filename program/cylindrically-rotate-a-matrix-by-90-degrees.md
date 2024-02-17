---
title: "Cylindrically Rotate A Matrix By 90 Degrees"
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
    "moaldeen",
    "Monika-Tiyyagura",
    "rsitters",
    "abhisek-1221",
    "Joel-Maldonado",
    "Marc-R2",
    "adrianclinansmith",
    "mayankbhatt07141",
    "anandfresh",
    "leslieyip02",
    "SarahTek",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 5444
description: "Write a program to cylindrically rotate a matrix by 90 degrees."
---

## Write a program to cylindrically rotate a matrix by 90 degrees

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
7 4 1
8 5 2
9 6 3
```

---

```c
// Write a C program to cylindrically rotate a matrix by 90 degrees

#include <stdio.h>

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y= temp;
}
int main(){

   int n=3;
   int mat[3][3]= { { 1, 2, 3 },{ 4, 5, 6},{ 7, 8, 9 } };

   for(int i=0; i<n; i++){
     for(int j=i+1; j<n; j++)
         swap(&mat[i][j], &mat[j][i]);
    }

   for(int i=0; i<n; i++){
     for(int j=0; j<n/2; j++){
        swap(&mat[i][j], &mat[i][n-j-1]);
     }
   }

   printf("Rotated Matrix :\n");
   for(int i=0; i<n; i++){
     for(int j=0; j<n; j++){
       printf("%d ",mat[i][j]);
     }
     printf("\n");
   }
}
```

```csharp
// Write a C# program to cylindrically rotate a matrix by 90 degrees

using System;

class MATRIX
{
static int N = 3;

static void rotate90Degrees(int[,] a)
{

    for (int i = 0; i < N / 2; i++)
    {
        for (int j = i; j < N - i - 1; j++)
        {

            int temp = a[i, j];
            a[i, j] = a[N - 1 - j, i];
            a[N - 1 - j, i] = a[N - 1 - i, N - 1 - j];
            a[N - 1 - i, N - 1 - j] = a[j, N - 1 - i];
            a[j, N - 1 - i] = temp;
        }
    }
}


static void printMatrix(int[,] arr)
{
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        Console.Write( arr[i, j] + " ");
        Console.Write("\n");
    }
}


public static void Main ()
    {
    int [,]arr = {{1, 2, 3 },
                  {4, 5, 6 },
                  {7, 8, 9 }};
    rotate90Degrees(arr);
    printMatrix(arr);
}
}
```

```cpp
// Write a C++ program to cylindrically rotate a matrix by 90 degrees

#include <bits/stdc++.h>
using namespace std;

#define N 3

void rotate90Clockwise(int arr[N][N])
{
    for (int j = 0; j < N; j++)
    {
        for (int i = N - 1; i >= 0; i--)
            cout << arr[i][j] << " ";
        cout << '\n';
    }
}

int main()
{
    int arr[N][N] = { { 1, 2, 3 },
                      { 4, 5, 6 },
                      { 7, 8, 9 }};
    rotate90Clockwise(arr);
    return 0;
}
```

```dart
// Write a Dart program to cylindrically rotate a matrix by 90 degrees

void main() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  final result = rotateMatrix90Degrees(matrix);
  print(result);
}

/// Rotate a matrix cylindrically by 90 degrees.
List<List<int>> rotateMatrix90Degrees(List<List<int>> matrix) {
  final List<List<int>> result = [];

  for (var i = 0; i < matrix.length; i++) {
    List<int> row = [];
    for (var j = 0; j < matrix[i].length; j++) {
      row.insert(0, matrix[j][i]);
    }
    result.add(row);
  }

  return result;
}
```

```fsharp
// Write a F# program to cylindrically rotate a matrix by 90 degrees

let cylindricalRotate90 (matrix:int[,]) =
    let rows = matrix.GetLength(0)
    let cols = matrix.GetLength(1)

    // Create a new matrix to store the rotated values
    let result = Array2D.create cols rows 0

    // Rotate the matrix by 90 degrees
    for i in 0..(rows - 1) do
        for j in 0..(cols - 1) do
            result.[j, rows - 1 - i] <- matrix.[i, j]

    result

// Define the input matrix
let inputMatrix = array2D [[1; 2; 3]; [4; 5; 6]; [7; 8; 9]]

// Print the original matrix
printfn "Input Matrix:"
for i in 0..(inputMatrix.GetLength(0) - 1) do
    for j in 0..(inputMatrix.GetLength(1) - 1) do
        printf "%d " inputMatrix.[i, j]
    printfn ""

// Perform cylindrical rotation
let rotatedMatrix = cylindricalRotate90 inputMatrix

// Print the rotated matrix
printfn "\nOutput Matrix:"
for i in 0..(rotatedMatrix.GetLength(0) - 1) do
    for j in 0..(rotatedMatrix.GetLength(1) - 1) do
        printf "%d " rotatedMatrix.[i, j]
    printfn ""
```

```go
// Write a Go program to cylindrically rotate a matrix by 90 degrees

package main

import "fmt"

func rotateMatrix90(matrix [][]int) [][]int {
    rows, cols := len(matrix), len(matrix[0])

    // Define a new matrix to hold the rotated matrix
    rotated := make([][]int, cols)
    for i := range rotated {
        rotated[i] = make([]int, rows)
    }

    // Cylindrically rotate the matrix by 90 degrees
    for i, row := range matrix {
        for j, val := range row {
            rotated[j][rows-i-1] = val
        }
    }

    return rotated
}

func main() {
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }

    rotated := rotateMatrix90(matrix)

    for _, row := range rotated {
        fmt.Println(row)
    }
}
```

```java
// Write a Java program to cylindrically rotate a matrix by 90 degrees

import java.io.*;

class Matrix {
    static int N = 3;

    static void rotate90Degrees(int arr[][])
    {
        for (int j = 0; j < N; j++)
        {
            for (int i = N - 1; i >= 0; i--)
                System.out.print(arr[i][j] + " ");
                System.out.print("\n");
        }
    }
    public static void main(String[] args)
    {
        int arr[][] = { { 1, 2, 3 },
                        { 4, 5, 6 },
                        { 7, 8, 9 }} ;
        rotate90Degrees(arr);
    }
}
```

```javascript
// Write a JavaScript program to cylindrically rotate a matrix by 90 degrees

"use strict";

let N = 3;

function rotate90Clockwise(arr) {
  for (let j = 0; j < N; j++) {
    for (let i = N - 1; i >= 0; i--) {
      process.stdout.write(arr[i][j] + " ");
    }
    console.log();
  }
}

let arr = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

console.log("Initial matrix:");
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    process.stdout.write(arr[i][j] + " ");
  }
  console.log();
}

console.log("\nRotated matrix:");
rotate90Clockwise(arr);
```

```julia
# Write a Julia program to cylindrically rotate a matrix by 90 degrees

function rotateMatrix(matrix)
    return reverse(transpose(matrix))
end

println("Enter the matrix dimensions (rows columns):")
dims = split(readline())
numRows = parse(Int, dims[1])
numCols = parse(Int, dims[2])
println("Enter the matrix elements:")
matrix = [[parse(Int, x) for x in split(readline())] for i in 1:numRows]

# Rotate the matrix and print out the result
rotatedMatrix = rotateMatrix(matrix)
println("Rotated matrix:")
for row in rotatedMatrix
    println(join(row, " "))
end
#Example Usage

#Enter the matrix dimensions (rows columns):3 3
#Enter the matrix elements:
#1 2 3
#4 5 6
#7 8 9
#Rotated matrix:
#7 8 9
#4 5 6
#1 2 3
```

```kotlin
// Write a Kotlin program to cylindrically rotate a matrix by 90 degrees

fun rotateMatrix(matrix: Array<IntArray>) {
    val rows = matrix.size
    val cols = matrix[0].size

    //Creates a new matrix with swapped dimensions
    val rotatedMatrix = Array(cols) { IntArray(rows) }

    //Performs the rotation
    for (i in 0 until rows) {
        for (j in 0 until cols) {
            //Rotates each element by swapping the row and column indices
            rotatedMatrix[j][rows - 1 - i] = matrix[i][j]
        }
    }

    //Prints the rotated matrix
    for (row in rotatedMatrix) {
        for (num in row) {
            //Prints each element followed by a space
            print("$num ")
        }
        //Moves to the next line after printing a row
        println()
    }
}

fun main() {
    //Defines the original matrix
    val matrix = arrayOf(
        intArrayOf(1, 2, 3),
        intArrayOf(4, 5, 6),
        intArrayOf(7, 8, 9)
    )

    //Calls the rotateMatrix function
    rotateMatrix(matrix)
}
```

```perl
# Write a Perl program to cylindrically rotate a matrix by 90 degrees

use strict;
use warnings;

sub cylindrical_rotate_90 {
    my ($matrix) = @_;

    my $num_rows = scalar @$matrix;
    my $num_cols = scalar @{$matrix->[0]};

    my @rotated_matrix;
    for my $i (0 .. $num_rows - 1) {
        for my $j (0 .. $num_cols - 1) {
            $rotated_matrix[$j][$num_rows - 1 - $i] = $matrix->[$i][$j];
        }
    }

    return \@rotated_matrix;
}

# Input matrix
my @input_matrix = (
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

# Perform cylindrical rotation
my $rotated_matrix_ref = cylindrical_rotate_90(\@input_matrix);

# Output the rotated matrix
for my $row (@$rotated_matrix_ref) {
    print join(" ", @$row), "\n";
}
```

```php
// Write a PHP program to cylindrically rotate a matrix by 90 degrees

<?php

function rotate90Degrees($array)
{
    $result = array();
    foreach (array_values($array) as $key => $sub_array)
    {
        foreach (array_values($sub_array) as $sub_key => $value)
        {
            if (empty($result[$sub_key]))
            {
                $result[$sub_key] = array($value);
            }
            else
            {
                array_unshift($result[$sub_key], $value);
            }
        }
    }
    return $result;
}

$array = array(
    array(1, 2, 3),
    array(4, 5, 6),
    array(7, 8, 9)
);


print_r(rotate90Degrees($array));

?>
```

```python
# Write a Python program to cylindrically rotate a matrix by 90 degrees

N = 3


def rotate90Degrees(arr):
    global N

    for j in range(N):
        for i in range(N - 1, -1, -1):
            print(arr[i][j], end=" ")
        print()


arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rotate90Degrees(arr)
```

```r
# Write a R program to cylindrically rotate a matrix by 90 degrees

# Function to perform cylindrical rotation
cylindrical_rotate <- function(matrix_input) {
  # Get the number of rows and columns in the matrix
  num_rows <- nrow(matrix_input)
  num_cols <- ncol(matrix_input)

  # Create an empty matrix to store the rotated result
  rotated_matrix <- matrix(0, nrow = num_cols, ncol = num_rows)

  # Perform the cylindrical rotation
  for (i in 1:num_rows) {
    rotated_matrix[, i] <- matrix_input[num_rows - i + 1, ]
  }

  return(rotated_matrix)
}

# Example usage
input_matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)

cat("Input Matrix:\n")
print(input_matrix)

rotated_matrix <- cylindrical_rotate(input_matrix)

cat("\nRotated Matrix:\n")
print(rotated_matrix)
```

```ruby
# Write a Ruby program to cylindrically rotate a matrix by 90 degrees

matrix = [ [1 ,2, 3], [4, 5, 6], [7, 8, 9] ]
n = 3
temp_matrix = Array.new(n){Array.new(n)}
for i in 0...n
  for j in 0...n
    temp_matrix[j][n-i-1] = matrix[i][j]
  end
end

puts temp_matrix.inspect
```

```rust
// Write a Rust program to cylindrically rotate a matrix by 90 degrees

fn rotate_matrix(matrix: Vec::<Vec<u32>>) -> Vec::<Vec<u32>> {
    let mut rotated: Vec::<Vec<u32>> = Vec::new();

    for i in 0 .. matrix.len() {
        let mut row: Vec::<u32> = Vec::new();
        for j in (0 .. matrix.len()).rev() {
            row.push(matrix[j][i]);
        }
        rotated.push(row);
    }

    rotated
}

fn main() {
    let matrix: Vec::<Vec<u32>> = vec![
        vec![1, 2, 3],
        vec![4, 5, 6],
        vec![7, 8, 9]
    ];

    let matrix = rotate_matrix(matrix);

    for row in matrix {
        row.iter().for_each(|i| print!("{} ", i));
        println!("");
    }
}
```

```scala
// Write a Scala program to cylindrically rotate a matrix by 90 degrees

object MatrixRotation {
  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1, 2, 3),
      Array(4, 5, 6),
      Array(7, 8, 9)
    )

    println("Original Matrix:")
    printMatrix(matrix)

    val rotatedMatrix = rotateMatrix90Degrees(matrix)

    println("\nRotated Matrix:")
    printMatrix(rotatedMatrix)
  }

  def rotateMatrix90Degrees(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    // Transpose the matrix
    val transposedMatrix = transpose(matrix)

    // Reverse each row
    transposedMatrix.map(_.reverse)
  }

  def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = {
    Array.tabulate(matrix.length, matrix(0).length) { (i, j) =>
      matrix(j)(i)
    }
  }

  def printMatrix(matrix: Array[Array[Int]]): Unit = {
    matrix.foreach { row =>
      println(row.mkString(" "))
    }
  }
}
```

```swift
// Write a Swift program to cylindrically rotate a matrix by 90 degrees

let input = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

func rotate90Clockwise(_ matrix: [[Int]]) -> [[Int]] {
	let N = matrix.count
	var rotated = Array(repeating: Array(repeating: 0, count: N), count: N)
	for r in 0 ..< N {
		for c in 0 ..< N {
			rotated[c][N - (r + 1)] = matrix[r][c]
		}
	}
	return rotated
}

func printMatrix(_ matrix: [[Int]]) {
	for r in 0 ..< matrix.count {
		for c in 0 ..< matrix.count {
			print(matrix[r][c], terminator: " ")
		}
		print()
	}
	print()
}

print("Input  :")
printMatrix(input)
print("Output  :")
printMatrix(rotate90Clockwise(input))
```

```typescript
// Write a TypeScript program to cylindrically rotate a matrix by 90 degrees

const rotateClockwise = (matrix: number[][]): number[][] => {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = tmp;
    }
  }
  return matrix;
};

console.log(
  rotateClockwise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
```
