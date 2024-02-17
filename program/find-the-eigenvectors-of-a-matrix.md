---
title: "Find The Eigenvectors Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "java",
    "javascript",
    "typescript",
    "julia",
    "go",
    "python",
    "r",
  ]
contributors:
  [
    "anandfresh",
    "MadhuS-1605",
    "cshdev110",
    "harshraj8843",
    "NavneetBende",
    "Ishay1997",
    "dsarussi",
    "vishalsingh2972",
    "joao-vitor-souza",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-11T04:15:41Z
trackId: 3169
description: "Write a program to find the eigenvectors of a matrix."
---

## Write a program to find the eigenvectors of a matrix

The eigenvalues and eigenvectors of a linear transformation are the values and vectors that determine the transformation. The eigenvectors of a matrix A are the vectors v for which the matrix equation Av = λv has a non-trivial solution.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
[[-0.23197068724628608, -0.7858302387246789, 0.4082482904638631],
 [-0.5253220933012334, -0.08675134095039447, -0.8164965809277261],
 [-0.8186734993561807, 0.6123275568238899, 0.4082482904638631]]
```

---

```c
// Write a C program to find the eigenvectors of a matrix

#include <stdio.h>
#include <gsl/gsl_eigen.h>

int main() {
    gsl_matrix *mat = gsl_matrix_alloc(3, 3); // Create a 3x3 matrix
    gsl_matrix_set(mat, 0, 0, 1);
    gsl_matrix_set(mat, 0, 1, 2);
    gsl_matrix_set(mat, 0, 2, 3);
    gsl_matrix_set(mat, 1, 0, 4);
    gsl_matrix_set(mat, 1, 1, 5);
    gsl_matrix_set(mat, 1, 2, 6);
    gsl_matrix_set(mat, 2, 0, 7);
    gsl_matrix_set(mat, 2, 1, 8);
    gsl_matrix_set(mat, 2, 2, 9);

    gsl_vector_complex *eval = gsl_vector_complex_alloc(3); // Eigenvalues
    gsl_matrix_complex *evec = gsl_matrix_complex_alloc(3, 3); // Eigenvectors

    gsl_eigen_nonsymmv_workspace *workspace = gsl_eigen_nonsymmv_alloc(3);
    gsl_eigen_nonsymmv(mat, eval, evec, workspace);

    gsl_eigen_nonsymmv_free(workspace);

    gsl_eigen_nonsymmv_sort(eval, evec, GSL_EIGEN_SORT_ABS_DESC);

    printf("Eigenvectors:\n");
    for (int i = 0; i < 3; i++) {
        printf("[");
        for (int j = 0; j < 3; j++) {
            gsl_complex z = gsl_matrix_complex_get(evec, j, i);
            printf("%f, ", GSL_REAL(z));
        }
        printf("]\n");
    }

    gsl_matrix_free(mat);
    gsl_vector_complex_free(eval);
    gsl_matrix_complex_free(evec);

    return 0;
}
```

```cpp
// Write a C++ program to find the eigenvectors of a matrix

#include <iostream>
#include <Eigen/Dense>

using namespace std;
using namespace Eigen;

// Eigen library is used to find the eigen vector of a given matrix.
// Eigen Library was downloaded from: https://gitlab.com/libeigen/eigen/-/archive/3.4.0/eigen-3.4.0.tar.bz2
// Extracted and copied the folder "Eigen" into /usr/local/include using Linux Debian.
// Or use a package manager to install Eigen like "vcpkg" for windows.
// Referene code: https://eigen.tuxfamily.org/dox/classEigen_1_1EigenSolver.html#a66288022802172e3ee059283b26201d7

// Returning the eigenvectors as MatrixXd type
MatrixXd eigenvectors(MatrixXd matrix_egv)
{
    EigenSolver<MatrixXd> eigenSolv(matrix_egv);
    MatrixXd eigen_m = eigenSolv.eigenvectors().real();

    return eigen_m;
}

// eigenvectors help
void eigenvectors_help()
{
    cout << "Eigenvectors: " << endl;
    cout << "Only sqare Matrixes can be processed." << endl;
    cout << "The equation to solve is: AV = λV." << endl;
    cout << "Where:" << endl;
    cout << "A is the square given matrix." << endl;
    cout << "V is the eigenvectors to calculate and return as MatrixXd type." << endl;
    cout << "λ is the eigenvalues." << endl << endl;
}

// example of use
void eigenvectors_example()
{
    MatrixXd matrix_egv(3, 3);
    matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;
    cout << "Eigenvectors example:" << endl;
    cout << "Here is a square matrix m[3x3]:\n" << matrix_egv << endl;
    cout << "Created as follow:" << endl;
    cout << "MatrixXd matrix_egv(3, 3);" << endl;
    cout << "matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;" << endl;
    cout << "Now, calling the function:" << endl;
    cout << "eigenvectors(matrix_egv)" << endl;
    cout << "The eigenvectors are: " << endl << eigenvectors(matrix_egv) << endl;
    cout << "It will return the eigenvectors as MatrixXd type." << endl;
}

int main ()
{
    eigenvectors_help();
    cout << endl;
    eigenvectors_example();

    return 0;
}
```

```go
// Write a Go program to find the eigenvectors of a matrix

package main

import (
    "fmt"
    "log"

    "gonum.org/v1/gonum/blas/blas64"
    "gonum.org/v1/gonum/mat"
    "gonum.org/v1/gonum/lapack/lapack64"
)

func main() {
    // Define the matrix A for which you want to find eigenvectors.
    data := []float64{2, -1, 0, -1, 3, -1, 0, -1, 2}
    rows, cols := 3, 3
    a := mat.NewDense(rows, cols, data)

    // Compute the eigenvalues and eigenvectors.
    eig := mat.Eigen{}
    ok := eig.Factorize(a, false)
    if !ok {
        log.Fatal("Eigenvalue factorization failed.")
    }

    // Get the eigenvalues and eigenvectors.
    eigenvalues := eig.Values(nil)
    eigenvectors := eig.VectorsTo(nil)

    // Print the eigenvalues.
    fmt.Println("Eigenvalues:")
    for i, val := range eigenvalues {
        fmt.Printf("λ%d = %v\n", i+1, val)
    }

    // Print the eigenvectors.
    fmt.Println("\nEigenvectors:")
    for i := 0; i < cols; i++ {
        eigenvector := eigenvectors.ColView(i)
        fmt.Printf("v%d = %v\n", i+1, mat.Formatted(eigenvector.T(), mat.Prefix(""), mat.Squeeze()))
    }
}
```

```java
// Write a Java program to find the eigenvectors of a matrix

import org.apache.commons.math3.linear.*;

public class Eigenvectors {
    public static void main(String[] args) {
        // Input matrix
        RealMatrix matrix = new Array2DRowRealMatrix(new double[][]{
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        });

        // Eigen decomposition
        EigenDecomposition decomposition = new EigenDecomposition(matrix);

        // Eigenvalues
        RealVector eigenvalues = decomposition.getRealEigenvalues();
        System.out.println("Eigenvalues: " + eigenvalues);

        // Eigenvectors
        RealMatrix eigenvectors = decomposition.getV();
        System.out.println("Eigenvectors:");
        for (int i = 0; i < eigenvectors.getColumnDimension(); i++) {
            RealVector eigenvector = eigenvectors.getColumnVector(i);
            System.out.println(eigenvector);
        }
    }
}
```

```javascript
// Write a JavaScript program to find the eigenvectors of a matrix

const math = require("mathjs");

const matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix = math.matrix(matrixArray);
const eigDecomp = math.eigs(matrix);

const eigVectors = eigDecomp.vectors;
const eigVectorsT = math.transpose(eigVectors); // Transpose to get row vectors

console.log(math.format(eigVectorsT, { precision: 10, columnSeparator: "  " })); // Print with precision 10 and column separator '  '
```

```julia
# Write a Julia program to find the eigenvectors of a matrix

using LinearAlgebra
A = [1 2 3; 4 5 6; 7 8 9]
println(eigvecs(A))
```

```python
# Write a Python program to find the eigenvectors of a matrix

import numpy as np

matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

eig_value, eig_vector = np.linalg.eig(matrix)

print(eig_vector)

"""Output
[[-0.23197069 -0.78583024  0.40824829]
 [-0.52532209 -0.08675134 -0.81649658]
 [-0.8186735   0.61232756  0.40824829]
"""
```

```r
# Write a R program to find the eigenvectors of a matrix

A = matrix(c(1:9), 3, 3)
cat("The 3x3 matrix:\n")
print(A)
print(eigen(A))
```

```typescript
// Write a TypeScript program to find the eigenvectors of a matrix

function eigenvectors(matrix: number[][]) {
  const n = matrix.length;
  const eigenvalues = calculateEigenvalues(matrix);

  const eigenvectors = [];
  for (let i = 0; i < n; i++) {
    const lambda = eigenvalues[i];
    const aMinusLambdaI = subtractScalar(matrix, lambda);
    const nullspace = calculateNullspace(aMinusLambdaI);
    eigenvectors.push(normalize(nullspace));
  }

  return eigenvectors;
}

function calculateEigenvalues(matrix: number[][]) {
  // TODO: Implement eigenvalue calculation
  // This is beyond the scope of this question.
  // We can assume that the eigenvalues are given as input.
  const eigenvalues = [0, 0, 0]; // Example values
  return eigenvalues;
}

function subtractScalar(matrix: number[][], scalar: number) {
  const n = matrix.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(matrix[i][j] - scalar * (i === j ? 1 : 0));
    }
    result.push(row);
  }
  return result;
}

function calculateNullspace(matrix: number[][]) {
  // TODO: Implement nullspace calculation
  // This can be done using Gaussian elimination or other methods.
  // For simplicity, we can assume that the nullspace is given as input.
  const nullspace = [0, 0, 0]; // Example values
  return nullspace;
}

function normalize(vector: number[]) {
  const length = Math.sqrt(vector.reduce((sum, x) => sum + x * x, 0));
  return vector.map(x => x / length);
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const eigenvectors = eigenvectors(matrix);
console.log(eigenvectors);
```
