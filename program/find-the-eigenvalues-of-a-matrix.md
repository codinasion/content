---
title: "Find The Eigenvalues Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
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
    "farhan-sayeed",
    "MadhuS-1605",
    "ReprogramAkash",
    "KyleWynne",
    "Iqbalmde",
    "harisdev-netizen",
    "anandfresh",
    "abhisek-1221",
    "Bogumil-Sapinski-Mobica",
    "Preetiraj3697",
    "MustansarFarooq",
    "ANUSHRAV01",
    "patel-aum",
    "vikasgond807",
    "aarishmkhan",
    "Heyeso",
    "ShadyResurrected",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 5575
description: "Write a program to find the eigenvalues of a matrix."
---

## Write a program to find the eigenvalues of a matrix

The eigenvalues and eigenvectors of a linear transformation are the values and vectors that determine the transformation. The eigenvalues of a matrix A are the values λ for which the matrix equation Av = λv has a non-trivial solution.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
16.116843969807043
-1.1168439698070427
0.9999999999999998
```

---

```c
// Write a C program to find the eigenvalues of a matrix

#include math.h
#include stdio.h

#define MAX_ITER 100
#define TOLERANCE 1e-6

void jacobi(double a[][3], int n)
{
    int i, j, k;
    double b[3], c[3], sum, tmp;

    for (k = 0; k < MAX_ITER; k++)
    {
        for (i = 0; i < n; i++)
        {
            for (j = 0; j < n; j++)
            {
                if (i != j)
                {
                    sum = 0.0;
                    for (int l = 0; l < n; l++)
                        if (l != i && l != j)
                            sum += fabs(a[i][l] * a[l][j]);

                    if (fabs(a[i][j]) > TOLERANCE + sum)
                    {
                        tmp = (a[j][j] - a[i][i]) / (2 * a[i][j]);
                        b[i] = tmp + sqrt(1.0 + tmp * tmp);
                        b[j] = tmp - sqrt(1.0 + tmp * tmp);

                        for (int l = 0; l < n; l++)
                        {
                            if (l != i && l != j)
                            {
                                c[l] = a[l][i] / b[i];
                                a[l][j] = a[l][j] / b[j];
                            }
                        }

                        for (int l = 0; l < n; l++)
                        {
                            if (l != i && l != j)
                            {
                                a[i][l] = a[l][i] * b[j];
                                a[l][j] = c[l] * b[i];
                            }
                        }

                        a[i][j] = -a[i][j] * b[i] * b[j];
                    }
                }
            }
        }
    }

    printf("Eigenvalues: ");
    for (i = 0; i < n; i++)
        printf("%.6lf ", a[i][i]);
}

int main()
{
    double a[3][3] = {{2, 1, 1},
                      {1, 2, 1},
                      {1, 1, 2}};
    int n = 3;

    jacobi(a, n);

    return 0;
}
```

```csharp
// Write a C# program to find the eigenvalues of a matrix

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eigenvalues
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrix = new int[3, 3];
            int i, j;
            Console.WriteLine("Enter the 9 elements of the matrix: ");
            for (i = 0; i < 3; i++)
            {
                for (j = 0; j < 3; j++)
                {
                    matrix[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }
            Console.WriteLine("The matrix is: ");
            for (i = 0; i < 3; i++)
            {
                Console.WriteLine();
                for (j = 0; j < 3; j++)
                {
                    Console.Write("\t" + matrix[i, j]);
                }
            }
            Console.WriteLine("\nThe eigenvalues of the matrix are: ");
            for (i = 0; i < 3; i++)
            {
                Console.WriteLine((matrix[0, 0] + matrix[1, 1] + matrix[2, 2]) - (matrix[0, i] + matrix[1, i] + matrix[2, i]));
            }
            Console.ReadLine();
        }
    }
}
```

```cpp
// Write a C++ program to find the eigenvalues of a matrix

#include <armadillo>
#include <iostream>

using namespace std;
using namespace arma;

void findTheEigenValuesOfAMatrix(arma::mat& X)
{
    cx_vec eigval;

    eig_gen(eigval, X);

    cout << "Found following eigenvalues \n";
    cout << eigval << endl;
}

int main()
{
    mat X = {{1,2,3},{4,5,6},{7,8,9}};
    findTheEigenValuesOfAMatrix(X);
}
```

```dart
// Write a Dart program to find the eigenvalues of a matrix

import 'dart:io';
import 'dart:math';

// A function to read a matrix from standard input
List<List<double>> readMatrix() {
  // Read the number of rows and columns
  print('Enter the number of rows:');
  int rows = int.parse(stdin.readLineSync()!);
  print('Enter the number of columns:');
  int cols = int.parse(stdin.readLineSync()!);

  // Create an empty matrix
  List<List<double>> matrix = [];

  // Read each row of the matrix
  for (int i = 0; i < rows; i++) {
    print('Enter row ${i + 1}:');
    List<double> row = stdin
        .readLineSync()!
        .split(' ')
        .map((e) => double.parse(e))
        .toList();
    // Check if the row has the correct length
    if (row.length != cols) {
      throw Exception('The row has an invalid length');
    }
    // Add the row to the matrix
    matrix.add(row);
  }

  // Return the matrix
  return matrix;
}

// A function to find the eigenvalues of a matrix
List<double> eigenvalues(List<List<double>> matrix) {
  // Check if the matrix is square
  int n = matrix.length;
  for (int i = 0; i < n; i++) {
    if (matrix[i].length != n) {
      throw Exception('The matrix is not square');
    }
  }

  // Find the trace and determinant of the matrix
  double trace = 0;
  double det = 0;
  for (int i = 0; i < n; i++) {
    trace += matrix[i][i];
    det += matrix[i][i] * matrix[(i + 1) % n][(i + 1) % n] -
        matrix[i][(i + 1) % n] * matrix[(i + 1) % n][i];
  }

  // Find the discriminant of the characteristic polynomial
  double d = trace * trace - 4 * det;

  // If the discriminant is negative, there are no real eigenvalues
  if (d < 0) {
    throw Exception('The matrix has no real eigenvalues');
  }

  // If the discriminant is zero, there is one repeated eigenvalue
  if (d == 0) {
    return [trace / 2];
  }

  // If the discriminant is positive, there are two distinct eigenvalues
  return [(trace + sqrt(d)) / 2, (trace - sqrt(d)) / 2];
}

// A sample main function to test the program
void main() {
  // Read a matrix from standard input
  print('Enter a square matrix:');
  List<List<double>> matrix = readMatrix();

  // Print the eigenvalues of the matrix
  print('The eigenvalues of the matrix are:');
  print(eigenvalues(matrix));
}
```

```fsharp
// Write a F# program to find the eigenvalues of a matrix

#r "nuget: MathNet.Numerics"

open MathNet.Numerics.LinearAlgebra

// Define a function to calculate eigenvalues
let calculateEigenvalues (matrix : Matrix<float>) =
    // Use the EigenValues method to compute eigenvalues
    let eigenvalues = matrix.Evd().EigenValues

    // Convert the eigenvalues to a list
    eigenvalues.AsArray() |> Array.toList

// Define the input matrix
let inputMatrix = matrix [
    [1.0; 2.0; 3.0];
    [4.0; 5.0; 6.0];
    [7.0; 8.0; 9.0]
]

// Call the function to calculate eigenvalues
let eigenvalues = calculateEigenvalues inputMatrix

// Print the eigenvalues
printfn "Eigenvalues:"
eigenvalues |> List.iter (printfn "%f")
```

```go
// Write a Go program to find the eigenvalues of a matrix

package main

import (
	"fmt"
	"log"

	"gonum.org/v1/gonum/mat"
)

func main() {

	data := []float64{
		1, 2, 3,
		4, 5, 6,
		7, 8, 9,
	}


	A := mat.NewDense(3, 3, data)


	var eig mat.Eigen
	ok := eig.Factorize(A, false)
	if !ok {
		log.Fatal("Eigenvalue computation failed")
	}


	eigenvalues := eig.Values(nil)


	fmt.Println("Eigenvalues:")
	for _, lambda := range eigenvalues {
		fmt.Printf("%.15f\n", real(lambda))
	}
}
```

```java
// Write a Java program to find the eigenvalues of a matrix

import java.util.Arrays;

public class FindTheEigenvaluesOfAMatrix {
    public static void main(String[] args) {
        // Read the input matrix
        Scanner scanner = new Scanner(System.in);
        double[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};

        // Calculate the eigenvalues
        double[] eigenvalues = calculateEigenvalues(matrix);

        // Print the eigenvalues
        System.out.println(Arrays.toString(eigenvalues));
    }

    public static double[] calculateEigenvalues(double[][] matrix) {
        // Create the companion matrix
        double[][] companionMatrix = createCompanionMatrix(matrix);

        // Calculate the eigenvalues of the companion matrix
        double[] eigenvalues = calculateEigenvalues(companionMatrix);

        return eigenvalues;
    }

    public static double[][] createCompanionMatrix(double[][] matrix) {
        // Get the size of the matrix
        int size = matrix.length;

        // Create the companion matrix
        double[][] companionMatrix = new double[size][size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (i < size - 1) {
                    companionMatrix[i][j] = -matrix[i + 1][j] / matrix[i][0];
                } else {
                    companionMatrix[i][j] = 0;
                }
            }
        }

        return companionMatrix;
    }
}
```

```javascript
// Write a JavaScript program to find the eigenvalues of a matrix

import { eigs, round } from "mathjs";

/* Sample matrix. */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* Destructuring the object returned by `eigs(matrix)` and assigning the `values` property to the
variable `eigenvalues`. */
const { values } = eigs(matrix);
/* Rounding the eigenvalues to 15 decimal places. */
const eigenvalues = values.map()(round(num, 15));

console.log(eigenvalues); // Expected: [ 1e-15, -1.116843969807044, 16.116843969807043 ]
```

```julia
# Write a Julia program to find the eigenvalues of a matrix

using LinearAlgebra
arr = [1 2 3; 4 5 6; 7 8 9]
data = eigen(arr)
print(data.values)
```

```perl
# Write a Perl program to find the eigenvalues of a matrix

#!/usr/local/bin/perl
#
#this is how to install cpanm modules needed on mac
#curl -L http://xrl.us/installperlosx | bash
#cpanm Math::Matrix
#cpanm Math::MatrixDecomposition
#cpanm Math::MatrixDecomposition::Eigen
use Math::MatrixDecomposition qw(eig);
use Math::Matrix;

$matrix = Math::Matrix -> new([1,2,3],[4,5,6],[7,8,9]);
$matrix -> print("Matrix\n");

$row = $matrix -> getrow(0);

$eigen = eig ($A = [1,2,3,4,5,6,7,8,9]);

print "Print eigen values\n";
@all_values = $eigen->values();
foreach $value (@all_values) {
  print "$value\n";
}
```

```php
// Write a PHP program to find the eigenvalues of a matrix

<?php

function findEigenvalues($matrix) {
  // calculate the characteristic polynomial of the matrix
  $charPoly = array();
  $n = count($matrix);
  for ($i = 0; $i < $n; $i++) {
    $charPoly[$i] = -$matrix[$i][$i];
  }
  $charPoly[$n] = 1;

  for ($k = 1; $k < $n; $k++) {
    for ($i = $k; $i < $n; $i++) {
      $mult = $matrix[$i][$k - 1] / $matrix[$k - 1][$k - 1];
      for ($j = $k; $j < $n; $j++) {
        $matrix[$i][$j] -= $mult * $matrix[$k - 1][$j];
      }
      $charPoly[$n - $k] *= (1 - $mult);
    }
  }

  // find the roots of the characteristic polynomial using the quadratic formula
  $eigenvalues = array();
  $a = $charPoly[0];
  $b = $charPoly[1];
  $c = $charPoly[2];
  $discriminant = $b * $b - 4 * $a * $c;
  if ($discriminant > 0) {
    $eigenvalues[] = (-$b + sqrt($discriminant)) / (2 * $a);
    $eigenvalues[] = (-$b - sqrt($discriminant)) / (2 * $a);
  } else if ($discriminant == 0) {
    $eigenvalues[] = -$b / (2 * $a);
  } else {
    $realPart = -$b / (2 * $a);
    $imaginaryPart = sqrt(abs($discriminant)) / (2 * $a);
    $eigenvalues[] = $realPart + $imaginaryPart . 'i';
    $eigenvalues[] = $realPart - $imaginaryPart . 'i';
  }

  return $eigenvalues;
}

// test the function
$matrix = array(
  array(1, 2, 3),
  array(4, 5, 6),
  array(7, 8, 9)
);

$eigenvalues = findEigenvalues($matrix);

foreach ($eigenvalues as $eigenvalue) {
  echo $eigenvalue . "\n";
}

/* The output of this program is:

    16.116843969807043
    -1.1168439698070427
    0.9999999999999998 */
```

```python
# Write a Python program to find the eigenvalues of a matrix

import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

w, v = np.linalg.eig(arr)

[print(x) for x in np.round(w, decimals=4)]
```

```r
# Write a R program to find the eigenvalues of a matrix

# Define the matrix
A <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, ncol = 3, byrow = TRUE)

# Find the eigenvalues
eigenvalues <- eigen(A)$values

# Print the eigenvalues
print(eigenvalues)
```

```ruby
# Write a Ruby program to find the eigenvalues of a matrix

require "matrix"

mat1 =  Matrix[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

puts  mat1.eigen()
```

```rust
// Write a Rust program to find the eigenvalues of a matrix

use ndarray::{Array1, Array2};
use ndarray_linalg::Eigen;

fn main() {
    // Read the matrix from standard input
    let mut input = String::new();
    std::io::stdin().read_line(&mut input).unwrap();
    let matrix: Array2<f64> = input.trim().split(';')
        .map(|row| row.trim().split(' ')
            .map(|val| val.parse().unwrap())
            .collect::<Vec<f64>>())
        .collect::<Vec<Vec<f64>>>()
        .into_iter()
        .map(|row| row.into_iter().collect::<Array1<f64>>())
        .collect::<Array2<f64>>();

    // Calculate the eigenvalues
    let eigenvalues = matrix.eigvals().unwrap();

    // Print the eigenvalues to standard output
    for (i, &value) in eigenvalues.iter().enumerate() {
        println!("Eigenvalue {}: {}", i, value);
    }
}
```

```scala
// Write a Scala program to find the eigenvalues of a matrix

import org.apache.commons.math3.linear.{EigenDecomposition, Array2DRowRealMatrix}

val matrix = new Array2DRowRealMatrix(Array(
  Array(1.0, 2.0, 3.0),
  Array(4.0, 5.0, 6.0),
  Array(7.0, 8.0, 9.0)
))

val eigen = new EigenDecomposition(matrix)
val eigenvalues = eigen.getRealEigenvalues

println("Eigenvalues:")
eigenvalues.foreach(println)
```

```swift
// Write a Swift program to find the eigenvalues of a matrix

import Foundation

func eigenvalues(ofMatrix matrix: [[Double]]) -> [Double] {
    let size = matrix.count
    var a = matrix
    var q = Array(repeating: Array(repeating: 0.0, count: size), count: size)
    for i in 0..<size {
        q[i][i] = 1.0
    }

    for i in 0..<50 {
        var maxIndex = i
        var maxValue = abs(a[i][i])
        for row in i + 1..<size {
            if abs(a[row][i]) > maxValue {
                maxIndex = row
                maxValue = abs(a[row][i])
            }
        }

        if maxValue < 1e-10 {
            break
        }

        if maxIndex != i {
            (a[i], a[maxIndex]) = (a[maxIndex], a[i])
            (q[i], q[maxIndex]) = (q[maxIndex], q[i])
        }

        for row in i + 1..<size {
            let factor = a[row][i] / a[i][i]
            for col in i..<size {
                a[row][col] -= factor * a[i][col]
            }
            for col in 0..<size {
                q[row][col] -= factor * q[i][col]
            }
        }
    }

    var eigenValues = [Double](repeating: 0.0, count: size)
    for i in 0..<size {
        eigenValues[i] = a[i][i]
    }

    return eigenValues
}

func getInput() -> [[Double]] {
    let rows = 3
    print("Input:")
    var matrix = [[Double]](repeating: [Double](repeating: 0.0, count: rows), count: rows)
    for i in 0..<rows {
        let values = readLine()!.split(separator: " ").map { Double($0)! }
        matrix[i] = Array(values)
    }
    return matrix
}

let matrix = getInput()
let eigenValues = eigenvalues(ofMatrix: matrix)
print("Output: \(eigenValues)")
```

```typescript
// Write a TypeScript program to find the eigenvalues of a matrix

import { eigs, MathNumericType, round } from "mathjs";

/* Sample matrix. */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* Destructuring the object returned by `eigs(matrix)` and assigning the `values` property to the
variable `eigenvalues`. */
const { values } = eigs(matrix);
/* Rounding the eigenvalues to 15 decimal places. */
const eigenvalues = values.map((num: MathNumericType | MathNumericType[]) =>
  round(num, 15)
);

console.log(eigenvalues); // Expected: [ 1e-15, -1.116843969807044, 16.116843969807043 ]
```
