---
title: "Find The Inverse Of A"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "scala",
    "swift",
    "typescript",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "Shreyash3110",
    "adesh1998",
    "hemu-git-hub",
    "SidMalladi",
    "harshraj8843",
    "imsherlocked",
    "Ariel201711",
    "dsarussi",
    "AdityaNarayanPradhan",
    "JoshuaT35",
    "cacti23",
    "ShadyResurrected",
    "anandfresh",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-01T17:16:31Z
trackId: 5271
description: "Write a program to find the inverse of a."
---

## Table of contents

## Write a program to find the inverse of a

The inverse of a square matrix A is another square matrix B such that the product of A and B is the identity matrix I. The inverse of A is denoted as A<sup>-1</sup>. Should address case where inverse does not exist.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
"This matrix is not invertible"


Input  :
1 -2 3
4 5 2
3 8 -2

Output :
8.666666666666666 -6.666666666666667 6.333333333333333
-4.666666666666667 3.6666666666666665 -3.3333333333333335
-5.666666666666667 4.666666666666667 -4.333333333333333
```

---

### C

```c
// Write a C program to find the inverse of a

#include <stdio.h>

int findMinorAndSign(int a[3][3], int row, int col)
{
    int detM[4], p = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i != row && j != col)
            {
                detM[p++] = a[i][j];
            }
        }
    }

    int detValue = detM[0] * detM[3] - detM[1] * detM[2];

    if ((row + col) % 2 == 1)
    {
        detValue *= -1;
    }

    return detValue;
}

void printMatrix(float a[3][3])
{
    printf("[");
    for (int i = 0; i < 3; i++)
    {
        printf("[");
        for (int j = 0; j < 3; j++)
        {
            printf("%f", a[i][j]);
            if (j != 2)
            {
                printf(", ");
            }
        }
        printf("]");
        if (i != 2)
        {
            printf(", ");
        }
    }

    printf("]\n");
}

void coFactorMatrix(int input[3][3], int output[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            output[i][j] = findMinorAndSign(input, i, j);
        }
    }
}

void transposeMatrix(int input[3][3], int output[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            output[j][i] = input[i][j];
        }
    }
}
int findDeterminantOfMatrixUsingCoFactorMatrix(int input[3][3], int coFactors[3][3])
{
    int result = 0;
    for (int j = 0; j < 3; j++)
    {
        result += (input[0][j] * coFactors[0][j]);
    }
    return result;
}
int main()
{
    int input[3][3] = {{4, 5, 1}, {3, 4, 12}, {10, 2, 1}};

    int coFactors[3][3];
    coFactorMatrix(input, coFactors);

    int adjoints[3][3];
    transposeMatrix(coFactors, adjoints);

    int determinant = findDeterminantOfMatrixUsingCoFactorMatrix(input, coFactors);

    if (determinant == 0) // if det=0 , inverse does not exist
    {
        printf("Its is singular matrix ,there is no inverse of it");
    }
    else
    {
        float inverseMatrix[3][3];

        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                inverseMatrix[i][j] = ((float)adjoints[i][j] / determinant);
            }
        }

        printMatrix(inverseMatrix);
    }
}
```

### C#

```csharp
// Write a C# program to find the inverse of a

using System;

namespace MatrixInverse
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrix = new int[3, 3];
            Console.WriteLine("Enter the elements of the matrix:");

            // Read matrix elements from user input
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    matrix[i, j] = int.Parse(Console.ReadLine());
                }
            }

            // Initialize determinant
            float d = 0;

            // Finding determinant of the matrix
            for (int i = 0; i < 3; i++)
            {
                d = d + (matrix[0, i] * (matrix[1, (i + 1) % 3] * matrix[2, (i + 2) % 3] - matrix[1, (i + 2) % 3] * matrix[2, (i + 1) % 3]));
            }

            if (d > 0)
            {
                Console.WriteLine("Inverse of this matrix is:");

                // Finding adjoint and dividing it by determinant
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        Console.Write(((matrix[(j + 1) % 3, (i + 1) % 3] * matrix[(j + 2) % 3, (i + 2) % 3]) - (matrix[(j + 1) % 3, (i + 2) % 3] * matrix[(j + 2) % 3, (i + 1) % 3])) / d + "\t");
                    }
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("Inverse does not exist for this matrix");
            }
        }
    }
}
```

### C++

```cpp
// Write a C++ program to find the inverse of a

#include <iostream>

using namespace std;

int main() {
  int m[3][3];

  cout << "Enter the elements of the matrix:" << endl;

  for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
      cin >> m[i][j];
    }
  }

  // intialize determinant
  float d = 0;

  //finding determinant of the matrix
  for(int i = 0; i < 3; i++) {
    d = d + (m[0][i] * (m[1][(i+1)%3] * m[2][(i+2)%3] - m[1][(i+2)%3] * m[2][(i+1)%3]));
  }

  if(d > 0) {
    cout << "Inverse of this matrix is:" << endl;

    for(int i = 0; i < 3; i++) {
      for(int j = 0; j < 3; j++) {
        cout << ((m[(j+1)%3][(i+1)%3] * m[(j+2)%3][(i+2)%3]) - (m[(j+1)%3][(i+2)%3] * m[(j+2)%3][(i+1)%3]))/ d <<"\t"; //finding adjoint and dividing it by determinant
      }
      cout << endl;
    }
  } else {
    cout << "Inverse does not exist for this matrix" << endl;
  }

  return 0;

}
```

### Java

```java
// Write a Java program to find the inverse of a

import java.util.*;

public class FindTheInverseOfA {

    public static double[][] inverse(double[][] matrix) {
        int n = matrix.length;
        double[][] inverse = new double[n][n];

        // create the identity matrix
        for (int i = 0; i < n; i++) {
            inverse[i][i] = 1;
        }

        // augment the matrix with the identity matrix
        double[][] augmentedMatrix = new double[n][2 * n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                augmentedMatrix[i][j] = matrix[i][j];
            }
            for (int j = n; j < 2 * n; j++) {
                augmentedMatrix[i][j] = inverse[i][j - n];
            }
        }

        // perform Gaussian elimination
        for (int i = 0; i < n; i++) {
            double pivot = augmentedMatrix[i][i];
            for (int j = i; j < 2 * n; j++) {
                augmentedMatrix[i][j] /= pivot;
            }
            for (int k = 0; k < n; k++) {
                if (k != i) {
                    double factor = augmentedMatrix[k][i];
                    for (int j = i; j < 2 * n; j++) {
                        augmentedMatrix[k][j] -= factor * augmentedMatrix[i][j];
                    }
                }
            }
        }

        // extract the inverse from the augmented matrix
        for (int i = 0; i < n; i++) {
            for (int j = n; j < 2 * n; j++) {
                inverse[i][j - n] = augmentedMatrix[i][j];
            }
        }

        return inverse;
    }

    public static void main(String[] args) {
        double[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        double[][] inverse = inverse(matrix);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(inverse[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find the inverse of a

// Functions:
// returns the minor for every element in matrix
// and applies cofactor sign to minor
function minorAndSign(matrix, row, column) {
  const detNums = [];
  let detNumIdx = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i != row && j != column) {
        detNums[detNumIdx] = matrix[i][j];
        detNumIdx += 1;
      }
    }
  }
  // apply cofactor sign
  if ((row + column) % 2 != 0) {
    return detNums[1] * detNums[2] - detNums[0] * detNums[3];
  }
  return detNums[0] * detNums[3] - detNums[1] * detNums[2];
}

// print matrix
function printMatrix(matrix) {
  for (let row = 0; row < 3; row++) {
    console.log(matrix[row]);
  }
}

// Main:
// No html file, so set matrix values here
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// get determinant
const det =
  matrix[0][0] * minorAndSign(matrix, 0, 0) +
  matrix[0][1] * minorAndSign(matrix, 0, 1) +
  matrix[0][2] * minorAndSign(matrix, 0, 2);

if (det === 0) {
  console.log("Matrix is not invertible");
} else {
  // For each element:
  //  get minor with cofactor sign
  //  divide by determinant
  //  put on other side of diagonal
  const invMatrix = [[], [], []];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let minor = minorAndSign(matrix, i, j);
      invMatrix[j][i] = minor / det; // put on other side of diagonal
    }
  }
  printMatrix(invMatrix);
}
```

### Perl

```perl
# Write a Perl program to find the inverse of a

use strict;
use warnings;

sub matrix_inverse {
    my ($matrix) = @_;

    my $size = scalar(@$matrix);

    # Check if the matrix is square
    die "Matrix must be square for inversion" if $size != scalar(@{$matrix->[0]});

    # Augment the matrix with an identity matrix
    my @augmented_matrix;
    for my $i (0..$size-1) {
        for my $j (0..$size-1) {
            $augmented_matrix[$i][$j] = $matrix->[$i][$j];
            $augmented_matrix[$i][$j+$size] = ($i == $j) ? 1 : 0;
        }
    }

    # Perform Gauss-Jordan elimination
    for my $i (0..$size-1) {
        my $pivot = $augmented_matrix[$i][$i];

        die "Matrix is singular, cannot find inverse" if $pivot == 0;

        for my $j (0..2*$size-1) {
            $augmented_matrix[$i][$j] /= $pivot;
        }

        for my $k (0..$size-1) {
            next if $k == $i;
            my $factor = $augmented_matrix[$k][$i];
            for my $j (0..2*$size-1) {
                $augmented_matrix[$k][$j] -= $factor * $augmented_matrix[$i][$j];
            }
        }
    }

    # Extract the inverse matrix from the augmented matrix
    my @inverse_matrix;
    for my $i (0..$size-1) {
        for my $j ($size..2*$size-1) {
            push @{$inverse_matrix[$i]}, $augmented_matrix[$i][$j];
        }
    }

    return @inverse_matrix;
}

# Example usage
my @matrix = (
    [4, 2, 7],
    [1, 5, 3],
    [8, 6, 9]
);

my @inverse_matrix = matrix_inverse(\@matrix);

# Print the inverse matrix
for my $i (0..$#inverse_matrix) {
    for my $j (0..$#{$inverse_matrix[$i]}) {
        printf "%.16f ", $inverse_matrix[$i][$j];
    }
    print "\n";
}
```

### Python

```python
# Write a Python program to find the inverse of a

import numpy as np

inputArray = np.array([[4, 5, 1], [3, 4, 12], [10, 2, 1]])

resultInverse = np.linalg.inv(inputArray)

print(resultInverse)
```

### R

```r
# Write a R program to find the inverse of a

determinant <- function(matrix) {
  a <- matrix[1, 1]
  b <- matrix[1, 2]
  c <- matrix[1, 3]
  d <- matrix[2, 1]
  e <- matrix[2, 2]
  f <- matrix[2, 3]
  g <- matrix[3, 1]
  h <- matrix[3, 2]
  i <- matrix[3, 3]

  det <- a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
  return(det)
}
matrixInverse <- function(matrix) {
  det <- determinant(matrix)

  if (det == 0) {
    stop("The matrix is singular, it does not have an inverse.")
  }

  inverse <- matrix(0, nrow = 3, ncol = 3)

  inverse[1, 1] <- (matrix[2, 2] * matrix[3, 3] - matrix[2, 3] * matrix[3, 2]) / det
  inverse[1, 2] <- (matrix[1, 3] * matrix[3, 2] - matrix[1, 2] * matrix[3, 3]) / det
  inverse[1, 3] <- (matrix[1, 2] * matrix[2, 3] - matrix[1, 3] * matrix[2, 2]) / det
  inverse[2, 1] <- (matrix[2, 3] * matrix[3, 1] - matrix[2, 1] * matrix[3, 3]) / det
  inverse[2, 2] <- (matrix[1, 1] * matrix[3, 3] - matrix[1, 3] * matrix[3, 1]) / det
  inverse[2, 3] <- (matrix[1, 3] * matrix[2, 1] - matrix[1, 1] * matrix[2, 3]) / det
  inverse[3, 1] <- (matrix[2, 1] * matrix[3, 2] - matrix[2, 2] * matrix[3, 1]) / det
  inverse[3, 2] <- (matrix[1, 2] * matrix[3, 1] - matrix[1, 1] * matrix[3, 2]) / det
  inverse[3, 3] <- (matrix[1, 1] * matrix[2, 2] - matrix[1, 2] * matrix[2, 1]) / det

  return(inverse)
}

input_matrix <- matrix(c(4, 5, 1, 3, 4, 12, 10, 2, 1), nrow = 3, byrow = TRUE)
inverse_matrix <- matrixInverse(input_matrix)
print(inverse_matrix)
```

### Ruby

```ruby
# Write a Ruby program to find the inverse of a

require 'matrix'

def matrix_inverse(matrix)
  a = Matrix[*matrix]

  # Check if the matrix is square
  if a.row_size != a.column_size
    puts "The matrix is not square and does not have an inverse."
    return
  end

  # Check if the matrix is invertible
  if a.det == 0
    puts "The matrix is not invertible."
    return
  end

  a_inv = a.inverse

  # Print the inverse matrix with floating-point numbers
  a_inv.to_a.each do |row|
    row.each { |element| print "#{element.to_f} " }
    puts
  end
end

# Example input matrix (invertible)
input_matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

# Find and print the inverse
matrix_inverse(input_matrix)
```

### Rust

```rust
// Write a Rust program to find the inverse of a

fn inverse(matrix: &Vec<Vec<f64>>) -> Option<Vec<Vec<f64>>> {
    let det = matrix_determinant(matrix);
    if det == 0.0 {
        return None;
    }

    let adj = matrix_adjoint(matrix);
    let inv: Vec<Vec<f64>> = adj
        .iter()
        .map(|row| row.iter().map(|&x| x / det).collect())
        .collect();

    Some(inv)
}

fn matrix_determinant(matrix: &Vec<Vec<f64>>) -> f64 {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[0][2];
    let d = matrix[1][0];
    let e = matrix[1][1];
    let f = matrix[1][2];
    let g = matrix[2][0];
    let h = matrix[2][1];
    let i = matrix[2][2];

    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

fn matrix_adjoint(matrix: &Vec<Vec<f64>>) -> Vec<Vec<f64>> {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[0][2];
    let d = matrix[1][0];
    let e = matrix[1][1];
    let f = matrix[1][2];
    let g = matrix[2][0];
    let h = matrix[2][1];
    let i = matrix[2][2];

    let cofactor_matrix: Vec<Vec<f64>> = vec![
        vec![e * i - f * h, c * h - b * i, b * f - c * e],
        vec![f * g - d * i, a * i - c * g, c * d - a * f],
        vec![d * h - e * g, b * g - a * h, a * e - b * d],
    ];

    transpose_matrix(&cofactor_matrix)
}

fn transpose_matrix(matrix: &Vec<Vec<f64>>) -> Vec<Vec<f64>> {
    if matrix.is_empty() {
        return matrix.clone();
    }

    let mut transposed_matrix = vec![vec![0.0; matrix.len()]; matrix[0].len()];

    for (i, row) in matrix.iter().enumerate() {
        for (j, &element) in row.iter().enumerate() {
            transposed_matrix[j][i] = element;
        }
    }

    transposed_matrix
}

fn main() {
    let matrix: Vec<Vec<f64>> = vec![
        vec![2.0, -1.0, 0.0],
        vec![-1.0, 2.0, -1.0],
        vec![0.0, -1.0, 2.0],
    ];

    if let Some(inverse_matrix) = inverse(&matrix) {
        println!("Inverse of the matrix:");
        for row in inverse_matrix.iter() {
            println!("{:?}", row);
        }
    } else {
        println!("The matrix doesn't have an inverse.");
    }
}
```

### Scala

```scala
// Write a Scala program to find the inverse of a

import scala.util.Try

object MatrixInverse {

  def inverse(matrix: Array[Array[Double]]): Option[Array[Array[Double]]] = {
    Try {
      val determinant = matrixDeterminant(matrix)
      if (determinant == 0) None
      else Some(matrixAdjoint(matrix).map(_.map(_ / determinant)))
    }.toOption.flatten
  }

  def matrixDeterminant(matrix: Array[Array[Double]]): Double = {
    val a = matrix(0)(0); val b = matrix(0)(1); val c = matrix(0)(2)
    val d = matrix(1)(0); val e = matrix(1)(1); val f = matrix(1)(2)
    val g = matrix(2)(0); val h = matrix(2)(1); val i = matrix(2)(2)

    a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
  }

  def matrixAdjoint(matrix: Array[Array[Double]]): Array[Array[Double]] = {
    val a = matrix(0)(0); val b = matrix(0)(1); val c = matrix(0)(2)
    val d = matrix(1)(0); val e = matrix(1)(1); val f = matrix(1)(2)
    val g = matrix(2)(0); val h = matrix(2)(1); val i = matrix(2)(2)

    val cofactorMatrix = Array(
      Array((e * i - f * h), -(b * i - c * h), (b * f - c * e)),
      Array(-(d * i - f * g), (a * i - c * g), -(a * f - c * d)),
      Array((d * h - e * g), -(a * h - b * g), (a * e - b * d))
    )

    transposeMatrix(cofactorMatrix)
  }

  def transposeMatrix(matrix: Array[Array[Double]]): Array[Array[Double]] = {
    (for (j <- matrix(0).indices) yield {
      (for (i <- matrix.indices) yield {
        matrix(i)(j)
      }).toArray
    }).toArray
  }

  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1.0, 2.0, 3.0),
      Array(4.0, 5.0, 6.0),
      Array(7.0, 8.0, 9.0)
    )

    inverse(matrix) match {
      case Some(invMatrix) =>
        println("Inverse of the matrix:")
        invMatrix.foreach(row => println(row.mkString(" ")))
      case None =>
        println("The matrix doesn't have an inverse.")
    }
  }
}
```

### Swift

```swift
// Write a Swift program to find the inverse of a

import Foundation

func inverse(of matrix: [[Double]]) -> [[Double]]? {
    let det = matrixDeterminant(matrix)
    if det == 0 { return nil }

    let adj = matrixAdjoint(matrix)
    let inv = adj.map { row in row.map { $0 / det } }
    return inv
}

func matrixDeterminant(_ matrix: [[Double]]) -> Double {
    let a = matrix[0][0], b = matrix[0][1], c = matrix[0][2]
    let d = matrix[1][0], e = matrix[1][1], f = matrix[1][2]
    let g = matrix[2][0], h = matrix[2][1], i = matrix[2][2]

    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

func matrixAdjoint(_ matrix: [[Double]]) -> [[Double]] {
    let a = matrix[0][0], b = matrix[0][1], c = matrix[0][2]
    let d = matrix[1][0], e = matrix[1][1], f = matrix[1][2]
    let g = matrix[2][0], h = matrix[2][1], i = matrix[2][2]

    let cofactorMatrix: [[Double]] = [
        [e * i - f * h, c * h - b * i, b * f - c * e],
        [f * g - d * i, a * i - c * g, c * d - a * f],
        [d * h - e * g, b * g - a * h, a * e - b * d]
    ]

    return transposeMatrix(cofactorMatrix)
}

func transposeMatrix(_ matrix: [[Double]]) -> [[Double]] {
    if matrix.isEmpty { return matrix }
    var transposedMatrix = Array(repeating: Array(repeating: 0.0, count: matrix.count), count: matrix[0].count)

    for (i, row) in matrix.enumerated() {
        for (j, element) in row.enumerated() {
            transposedMatrix[j][i] = element
        }
    }

    return transposedMatrix
}

// Example
let matrix = [
    [2.0, -1.0, 0.0],
    [-1.0, 2.0, -1.0],
    [0.0, -1.0, 2.0]
]

if let inverseMatrix = inverse(of: matrix) {
    print("Inverse of the matrix:")
    inverseMatrix.forEach { print($0) }
} else {
    print("The matrix doesn't have an inverse.")
}
```

### TypeScript

```typescript
// Write a TypeScript program to find the inverse of a

// Functions:

// returns the minor for every element in matrix
// and applies cofactor sign to minor
function minorAndSign(matrix: number[][], row: number, column: number) {
  const detNums: number[] = [];
  let detNumIdx = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== row && j !== column) {
        detNums[detNumIdx] = matrix[i][j];
        detNumIdx++;
      }
    }
  }
  // apply cofactor sign
  if ((row + column) % 2 !== 0) {
    return detNums[1] * detNums[2] - detNums[0] * detNums[3];
  }
  return detNums[0] * detNums[3] - detNums[1] * detNums[2];
}

// print matrix
function printMatrix(matrix: number[][]) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row]);
  }
}

// Main:

// No html file, so set matrix values here
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// get determinant
const det =
  matrix[0][0] * minorAndSign(matrix, 0, 0) +
  matrix[0][1] * minorAndSign(matrix, 0, 1) +
  matrix[0][2] * minorAndSign(matrix, 0, 2);

if (det === 0) {
  console.log("Matrix is not invertible");
} else {
  // For each element:
  //  get minor with cofactor sign
  //  divide by determinant
  //  put on other side of diagonal
  const invMatrix: number[][] = [[], [], []];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const minor = minorAndSign(matrix, i, j);
      invMatrix[j][i] = minor / det; // put on other side of diagonal
    }
  }
  printMatrix(invMatrix);
}
```
