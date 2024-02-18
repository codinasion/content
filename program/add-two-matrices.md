---
title: "Add Two Matrices"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "julia",
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
    "anandfresh",
    "LeventCelik",
    "sushanth-0",
    "harshraj8843",
    "omarfawzy1",
    "greyart1",
    "weaam88",
    "vedantpople4",
    "SarthakSanjay",
    "kelubhai",
    "joao-vitor-souza",
    "priya1011",
    "savi001",
    "ShivangiRai1310",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-15T04:23:21Z
trackId: 4544
description: "Write a program to add two matrices."
---

## Table of contents

## Write a program to add two matrices

Matrix addition is the process of adding two matrices by adding the corresponding elements of the two matrices. Two matrices must have an equal number of rows and columns to be added.

```
Input  :
1 2 3
4 5 6
7 8 9

1 2 3
4 5 6
7 8 9

Output :
2 4 6
8 10 12
14 16 18
```

---

### C

```c
// Write a C program to add two matrices

// C program for addition of two matrices of size n*n
#include <stdio.h>
#define MAX 100

int main()
{
    int i, j, n;
    int mat1[MAX][MAX], mat2[MAX][MAX], mat3[MAX][MAX];

    // Input size of n*n matrix
    scanf("%d", &n);

    // Input Elements for First Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            scanf("%d", &mat1[i][j]);
    }

   // Input Elements for Second Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            scanf("%d", &mat2[i][j]);
    }

    // Addition
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            mat3[i][j] = mat1[i][j] + mat2[i][j];
    }

    // Show addition result
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            printf("%d ", mat3[i][j]);
        printf("\n");
    }

    return 0;
}
```

### C#

```csharp
// Write a C# program to add two matrices

using System;
public class AddMatrix {
   public static void Main() {
      int i, j, n;
      int[, ] arr1 = new int[20, 20];
      int[, ] arr2 = new int[20, 20];
      int[, ] arr3 = new int[20, 20];

      n = 3;
      Console.Write("Enter elements in the first matrix:\n");

      for (i = 0; i < n; i++) {
         for (j = 0; j < n; j++) {
            arr1[i, j] = Convert.ToInt32(Console.ReadLine());
         }
      }
      Console.Write("Enter elements in the second matrix:\n");

      for (i = 0; i < n; i++) {
         for (j = 0; j < n; j++) {
            arr2[i, j] = Convert.ToInt32(Console.ReadLine());
         }
      }
      Console.Write("\nFirst matrix is:\n");

      for (i = 0; i < n; i++) {
         Console.Write("\n");
         for (j = 0; j < n; j++)
            Console.Write("{0}\t", arr1[i, j]);
      }
      Console.Write("\nSecond matrix is:\n");

      for (i = 0; i < n; i++) {
         Console.Write("\n");
         for (j = 0; j < n; j++)
            Console.Write("{0}\t", arr2[i, j]);
      }

      for (i = 0; i < n; i++)
         for (j = 0; j < n; j++)
         arr3[i, j] = arr1[i, j] + arr2[i, j];
         Console.Write("\nAdding two matrices: \n");

         for (i = 0; i < n; i++) {
         Console.Write("\n");
         for (j = 0; j < n; j++)
         Console.Write("{0}\t", arr3[i, j]);
      }
      Console.Write("\n\n");
   }
}
```

### C++

```cpp
// Write a C++ program to add two matrices

// C++ program for addition of two matrices
#include <bits/stdc++.h>
using namespace std;
#define n 3

// Function adds mat1[][] and mat2[][], and stores the result in mat3[][]
void add(int mat1[][n], int mat2[][n], int mat3[][n])
{
    int i, j;
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            mat3[i][j] = mat1[i][j]+mat2[i][j];
    }
}

int main()
{
    int mat1[n][n], mat2[n][n], mat3[n][n], i, j ;

    //Input Elements for First Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cin>>mat1[i][j];
    }

   //Input Elements for Second Matrix
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cin>>mat2[i][j];
    }

    //Addition the two given matrices
    add(mat1, mat2, mat3);

    //Addition result
    for(i=0; i<n; i++)
    {
        for(j=0; j<n; j++)
            cout<<mat3[i][j]<<" ";
        cout<<endl;
    }

    return 0;
}
```

### Go

```go
// Write a Go program to add two matrices

package main

import (
	"fmt"
	"math/rand"
)

func addmatrix(matrix1 [][]int, matrix2 [][]int) [][]int {
	result := make([][]int, len(matrix1))
	for i, a := range matrix1 {
		for j, _ := range a {
			result[i] = append(result[i], matrix1[i][j]+matrix2[i][j])
		}
	}
	return result
}

func makematrix(size int) [][]int {
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
	}
	return m
}

func main() {
	var size int
	fmt.Scanf("%d", &size)
	m := makematrix(size)
	n := makematrix(size)
	fmt.Println(m)
	fmt.Println(n)
	fmt.Println("Addition is:", addmatrix(m, n))

}
```

### Haskell

```haskell
-- Write a Haskell program to add two matrices

main :: IO ()
main = do
    putStrLn "Enter the elements of the first 3x3 matrix separated by spaces:"
    matrix1 <- readMatrix
    putStrLn "Enter the elements of the second 3x3 matrix separated by spaces:"
    matrix2 <- readMatrix
    let resultMatrix = addMatrices matrix1 matrix2
    putStrLn "The sum of the matrices is:"
    printMatrix resultMatrix

readMatrix :: IO [[Int]]
readMatrix = sequence $ replicate 3 readRow

readRow :: IO [Int]
readRow = map read . words <$> getLine

addMatrices :: [[Int]] -> [[Int]] -> [[Int]]
addMatrices mat1 mat2 = zipWith (zipWith (+)) mat1 mat2

printMatrix :: [[Int]] -> IO ()
printMatrix = mapM_ (putStrLn . unwords . map show)
```

### Java

```java
// Write a Java program to add two matrices

// Java program for addition of two matrices

//  java util package is imported to use scanner class
import java.util.Scanner;


public class AddTwoMatrices {

  public static void main(String[] args) {
    int size = 4;

    // Declare the object and initialize with predefined standard input object

    Scanner input = new Scanner(System.in);

    // Create matrix A
    System.out.println("Enter the values for matrix A:");
    int[][] A = new int[size][size];
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        //nextInt method of java scanner class is used
        A[i][j] = input.nextInt();
      }
    }


    //int[][] A = {{1, 1, 1, 1},
    //   {2, 2, 2, 2},
    //    {3, 3, 3, 3},
    //    {4, 4, 4, 4}};


    // Print the matrices A
    System.out.println("\nMatrix A:");
    printMatrix(A, size, size);



    // Create matrix B
    System.out.println("\nEnter the values for matrix B:");
    int[][] B = new int[size][size];
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        B[i][j] = input.nextInt();
      }
    }

    //int[][] B = {{1, 1, 1, 1},
    //    {2, 2, 2, 2},
    //    {3, 3, 3, 3},
    //    {4, 4, 4, 4}};



    // Print the matrices B
    System.out.println("\nMatrix B:");
    printMatrix(B, size, size);

    // Add the two matrices
    int[][] C = add(A, B, size);

    // Print the result
    System.out.println("\nResultant Matrix:");
    printMatrix(C, size, size);
  }

  // Function to print Matrix
  static void printMatrix(int[][] M,
                          int rowSize,
                          int colSize) {
    for (int i = 0; i < rowSize; i++) {
      for (int j = 0; j < colSize; j++)
        System.out.print(M[i][j] + " ");

      System.out.println();
    }
  }

  // Function to add the two matrices
  static int[][] add(int[][] A, int[][] B,
                     int size) {
    int i, j;
    int[][] C = new int[size][size];

    for (i = 0; i < size; i++)
      for (j = 0; j < size; j++)
        C[i][j] = A[i][j] + B[i][j];

    return C;
  }
}
```

### JavaScript

```javascript
// Write a JavaScript program to add two matrices

function addMatrix(matrix1, matrix2) {
  let rows = matrix1.length;
  let cols = matrix1[0].length;
  let result = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return result;
}

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(addMatrix(matrix1, matrix2));
```

### Julia

```julia
# Write a Julia program to add two matrices

A = [1 2 3; 4 5 6; 7 8 9]
B = [1 2 3; 4 5 6; 7 8 9]

print(A+B)
```

### Kotlin

```kotlin
// Write a Kotlin program to add two matrices

fun main() {
    print("Enter the two matrices line separated: \n")
    val size = 3

    val a = readMatrix(size)
    readln()
    val b = readMatrix(size)

    val c = addMatrices(a, b)
    println("Result of adding the matrices: \n")
    printMatrix(c)
}

// Takes number of rows and columns and reads the matrix from input
fun readMatrix(rows : Int): ArrayList<ArrayList<Int>>{
    val matrix = arrayListOf<ArrayList<Int>>()
    for(row in 0 until rows){
        val line = readln().trim().split(' ')
        matrix.add(ArrayList())
        for(number in line){
            matrix[row].add(Integer.valueOf(number))
        }
    }
    return matrix
}

// prints a matrix
fun printMatrix(matrix : ArrayList<ArrayList<Int>>){
    for (row in matrix){
        for (cell in row){
            print("$cell ")
        }
        println()
    }
}

// adds two matrices and return the result in a new matrix
fun addMatrices(a : ArrayList<ArrayList<Int>>, b : ArrayList<ArrayList<Int>>) : ArrayList<ArrayList<Int>>{
    val c = a.clone() as ArrayList<ArrayList<Int>>
    for(i in 0 until b.size){
        for(j in 0 until b.size){
            c[i][j] += b[i][j]
        }
    }
    return c
}
```

### Perl

```perl
# Write a Perl program to add two matrices

print "Enter elements in matrix A of size 3x3: \n";
for($row=0; $row<3 ; $row++)
{
  for($col=0; $col<3 ; $col++)
  {
    $A[$row][$col] = <STDIN>;
  }
}

print "Enter elements in matrix B of size 3x3: \n";
for($row=0; $row<3 ; $row++)
{
  for($col=0; $col<3 ; $col++)
  {
    $B[$row][$col] = <STDIN>;
  }
}

for($row=0; $row<3 ; $row++)
{
  for($col=0; $col<3 ; $col++)
  {
    $C[$row][$col] = $A[$row][$col] + $B[$row][$col] ;
  }
}

print "Sum of the Matrices A+B is : \n";
for($row=0; $row<3 ; $row++)
{
  for($col=0; $col<3 ; $col++)
  {
    printf("%3d", $C[$row][$col]);
  }
  print "\n";
}
```

### PHP

```php
// Write a PHP program to add two matrices

<?php
$a1 = array(
    array(1,2,3),
    array(4,5,6),
    array(7,8,9)
);
$a2 = array(
    array(1,2,3),
    array(4,5,6),
    array(7,8,9)

);
$row = count($a1);
$col = count($a1[0]);
echo "First matrix: \n";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $a1[$i][$j] . " ";
    }
    echo "\n";
}
echo "Second matrix: \n";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $a2[$i][$j] . " ";
    }
    echo "\n";
}
$sum = array();
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        $sum[$i][$j] = $a1[$i][$j] + $a2[$i][$j];
    }
}
echo "Addition of two matrices: \n";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $sum[$i][$j] . " ";
    }
    echo "\n";
}
?>
```

### Python

```python
# Write a Python program to add two matrices

import numpy as np

a = np.arange(1, 10).reshape((3, 3))
b = np.arange(1, 10).reshape((3, 3))
c = np.add(a, b)
print(c)
```

### R

```r
# Write a R program to add two matrices

# Define two matrices
matrix1 <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 3, ncol = 3)
matrix2 <- matrix(c(5, 6, 7, 8, 1, 2), nrow = 3, ncol = 3)

# Function to add matrices
add_matrices <- function(m1, m2) {
    if (nrow(m1) != nrow(m2) || ncol(m1) != ncol(m2)) {
        stop("Matrices must have the same dimensions")
    }
    return(m1 + m2)
}

# print the result
result_matrix <- add_matrices(matrix1, matrix2)
print("The sum of the two matrices is:")
print(result_matrix)
```

### Ruby

```ruby
# Write a Ruby program to add two matrices

require "matrix"

matrix1 = Matrix[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix2 = Matrix[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

puts  matrix1 + matrix2
```

### Rust

```rust
// Write a Rust program to add two matrices

use std::fmt;

#[derive(Debug, Clone)]
struct Matrix {
    rows: Vec<Vec<i32>>,
}

impl fmt::Display for Matrix {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for x in self.rows.iter() {
            for y in x.iter() {
                write!(f, " {} ", y)?;
            }
            write!(f, "\n")?;
        }
        write!(f, "")
    }
}

impl PartialEq for Matrix {
    fn eq(&self, other: &Self) -> bool {
        self.rows == other.rows
    }
}

impl Eq for Matrix {}

impl Matrix {

    fn empty() -> Matrix {
        Matrix { rows: vec![] }
    }

    fn check_add_comparable(m1: &Self, m2: &Self) -> bool {
        if m1.rows.len() != m2.rows.len() { return false; }
        for (row_index, row) in m1.rows.iter().enumerate() {
            if row.len() != m2.rows[row_index].len() { return false; }
        }
        return true;
    }

    fn add(m1: &Self, m2: &Self) -> Option<Matrix> {
        if !Matrix::check_add_comparable(&m1, &m2) {
            println!("Matrices are of inequal size! Aborting...");
            return None;
        }
        let mut new = Matrix {rows: vec![]};
        for (row_index, row) in m1.rows.iter().enumerate() {
            let mut new_row = vec![];
            for (col_index, col_elm) in row.iter().enumerate() {
                new_row.push(col_elm + m2.rows[row_index][col_index]);
            }
            new.rows.push(new_row);
        }
        return Some(new);
    }
}

fn main() {
    let m1 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
    let m2 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
    let m3 = Matrix::add(&m1, &m2).unwrap_or(Matrix::empty());

    println!("Input:\n{}\n{}\nOutput:\n{}", m1, m2, m3);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_correct_addition() {
        let m1 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
        let m2 = Matrix { rows: vec![vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]] };
        let expected = Matrix { rows: vec![vec![2, 4, 6], vec![8, 10, 12], vec![14, 16, 18]] };

        let result = Matrix::add(&m1, &m2).unwrap_or(Matrix::empty());

        assert_eq!(result, expected);
    }

    #[test]
    fn test_unequal_cols_size_matrices() {
        let m1 = Matrix { rows: vec![vec![1, 2], vec![3, 4]] };
        let m2 = Matrix { rows: vec![vec![5, 6, 7], vec![8, 9, 10]] };

        let result = Matrix::add(&m1, &m2);

        assert!(result.is_none());
    }

    #[test]
    fn test_unequal_rows_size_matrices() {
        let m1 = Matrix { rows: vec![vec![1, 2], vec![3, 4]] };
        let m2 = Matrix { rows: vec![vec![5, 6]] };

        let result = Matrix::add(&m1, &m2);

        assert!(result.is_none());
    }

    #[test]
    fn test_empty_matrices() {
        let m1 = Matrix::empty();
        let m2 = Matrix::empty();
        let expected = Matrix::empty();

        let result = Matrix::add(&m1, &m2).unwrap();

        assert_eq!(result, expected);
    }


    // You can add more test cases as needed...
}
```

### TypeScript

```typescript
// Write a TypeScript program to add two matrices

function addTwoMatrices(matrix1: number[][], matrix2: number[][]) {
  console.log("summing..");
  const sum: number[][] = [];
  for (let i = 0; i < matrix1.length; i++) {
    sum[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return sum;
}

const arr1 = [
  [1, 2],
  [4, 5],
  [7, 8],
];

const arr2 = [
  [1, 2],
  [4, 5],
  [7, 8],
];

console.log(addTwoMatrices(arr1, arr2));
```
