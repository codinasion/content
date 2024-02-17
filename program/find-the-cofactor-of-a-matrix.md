---
title: "Find The Cofactor Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "javascript",
    "typescript",
    "go",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "miguelangel31",
    "AdityaNarayanPradhan",
    "JoshuaT35",
    "anandfresh",
    "joao-vitor-souza",
    "PoweredByCaffein",
    "alfa-m",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-02T15:34:30Z
trackId: 2344
description: "Write a program to find the cofactor of a matrix."
---

## Write a program to find the cofactor of a matrix

The cofactor of an element a<sub>ij</sub> of a square matrix A is the determinant of the minor of A obtained by deleting the ith row and jth column of A. The cofactor of a matrix A is the matrix of cofactors of A.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
[[-3, 6, -3], [6, -12, 6], [-3, 6, -3]]
```

---

```c
// Write a C program to find the cofactor of a matrix

#include <stdio.h>

int findMinorAndSign(int matrix[3][3], int row, int col)
{
    int detM[4], p = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i != row && j != col)
            {
                detM[p++] = matrix[i][j];
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

void printMatrix(int matrix[3][3])
{
    printf("[");
    for (int i = 0; i < 3; i++)
    {
        printf("[");
        for (int j = 0; j < 3; j++)
        {
            printf("%d", matrix[i][j]);
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

int main()
{
    int input[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    int coFactors[3][3];
    coFactorMatrix(input, coFactors);

    printMatrix(coFactors);
}
```

```csharp
// Write a C# program to find the cofactor of a matrix

﻿using System;

class Program
{
    static void Main()
    {
        // Define the sample matrix (3x3)
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        Console.WriteLine("Original Matrix:");
        PrintMatrix(matrix);

        Console.WriteLine("\nCofactor of the Matrix:");
        int[,] cofactorMatrix = CalculateCofactor(matrix);
        PrintMatrix(cofactorMatrix);
    }

    static void PrintMatrix(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                Console.Write(matrix[i, j] + "\t");
            }
            Console.WriteLine();
        }
    }

    static int[,] CalculateCofactor(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        int[,] cofactorMatrix = new int[rows, columns];

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < columns; j++)
            {
                cofactorMatrix[i, j] = CalculateCofactorElement(matrix, i, j) * (int)Math.Pow(-1, i + j);
            }
        }

        return cofactorMatrix;
    }

    static int CalculateCofactorElement(int[,] matrix, int row, int column)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        int[,] submatrix = new int[rows - 1, columns - 1];

        int destRow = 0;
        for (int i = 0; i < rows; i++)
        {
            if (i == row)
                continue;

            int destColumn = 0;
            for (int j = 0; j < columns; j++)
            {
                if (j == column)
                    continue;

                submatrix[destRow, destColumn] = matrix[i, j];
                destColumn++;
            }

            destRow++;
        }

        return Determinant(submatrix);
    }

    static int Determinant(int[,] matrix)
    {
        int rows = matrix.GetLength(0);
        int columns = matrix.GetLength(1);

        if (rows != columns)
            throw new ArgumentException("The matrix is not square.");

        if (rows == 2)
        {
            return matrix[0, 0] * matrix[1, 1] - matrix[0, 1] * matrix[1, 0];
        }

        int determinant = 0;
        for (int j = 0; j < columns; j++)
        {
            determinant += matrix[0, j] * CalculateCofactorElement(matrix, 0, j) * (int)Math.Pow(-1, 0 + j);
        }

        return determinant;
    }
}
```

```cpp
// Write a C++ program to find the cofactor of a matrix

#include <iostream>


// Matrix Class
class Matrix {
public:
    /*
    Arguments: numRows, numColumns, array pointer
    Returns: a Matrix with the specified rows and columns,
        with each element filled according to appearance in array pointer
    Example:
        - 2, 2, arrPtr
        - arrPtr points to int array with values [1, 2, 3, 4]
    */
    Matrix(int numRows, int numColumns, int* arrPtr) {
        int** matrix = new int* [numRows];
        this->numRows = numRows;
        this->numColumns = numColumns;

        for (int i = 0; i < numRows; i++) {
            matrix[i] = new int[numColumns];

            for (int j = 0; j < numColumns; j++) {
                matrix[i][j] = *arrPtr;
                arrPtr += 1;
            }
        }
        this->matrix = matrix;
    }

    /*
    Function: The copy constructor for the Matrix Class
    Arguments: a Matrix
    Returns: an identical Matrix as a deep copy
    Example: Matrix B = A, or Matrix B(A)
    */
    Matrix(const Matrix& rhs) {
        int** matrix = new int* [rhs.numRows];
        this->numRows = rhs.numRows;
        this->numColumns = rhs.numColumns;

        for (int i = 0; i < rhs.numRows; i++) {
            matrix[i] = new int[rhs.numColumns];

            for (int j = 0; j < rhs.numColumns; j++) {
                matrix[i][j] = rhs.matrix[i][j];
            }
        }
        this->matrix = matrix;
    }

    /*
    Function: destructor for the Matrix Class
    */
    ~Matrix() {
        for (int i = 0; i < numRows; i++) {
            delete[] matrix[i];
            matrix[i] = NULL;
        }
        matrix = NULL;
    }

    /*
    Function: Overloads [] operator to access rows in Matrix
    Arguments: A row index to be accessed
    Returns: the pointer from that row index (this row is a list of values)
    Example: A[0]
    */
    int* operator [] (int rowIdx) {
        int* rowPtr = this->matrix[rowIdx];
        return rowPtr;
    }

private:
    int** matrix;
    int numRows;
    int numColumns;
};


// function prototypes
int minorAndSign(Matrix, int, int);
void printMatrix(Matrix, int, int);


// main
int main()
{
    // create a 3x3 matrix
    int rows = 3;
    int columns = 3;
    int matrixVal[rows*columns] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int* matrixValPtr = matrixVal;
    const Matrix matrix = Matrix(rows, columns, matrixValPtr);

    // create cofactor matrix
    int empty[rows*columns] = {};
    int* emptyPtr = empty;
    Matrix coFacMatrix = Matrix(rows, columns, emptyPtr);

    // edit cofactor matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++)
        {
            int minor = minorAndSign(matrix, i, j);
            coFacMatrix[i][j] = minor;
        }
    }
    // print matrix
    printMatrix(coFacMatrix, rows, columns);

    // assign remaining pointers to NULL
    matrixValPtr = NULL;
    emptyPtr = NULL;

    return 0;
}


int minorAndSign(Matrix matrix, int row, int column) {
    int detNums[4];
    int detNumsIdx = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if ((i != row) && (j != column)) {
                detNums[detNumsIdx] = matrix[i][j];
                detNumsIdx += 1;
            }
        }
    }

    // If row + column are odd, multiply by -1
    if ((row+column) % 2 != 0) {
        return (-1)*(detNums[0]*detNums[3] - detNums[1]*detNums[2]);
    }
    return (detNums[0]*detNums[3] - detNums[1]*detNums[2]);
}


// Prints each element of the matrix
void printMatrix(Matrix matrix, int row, int col) {
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (j != (col-1)) {
                std::cout << matrix[i][j] << ' ';
            }
            else {
                std::cout << matrix[i][j] << std::endl;
            }
        }
    }
}
```

```go
// Write a Go program to find the cofactor of a matrix

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Co-factor of a Matrix")
	fmt.Printf("Enter elements of the matrix, separated by space: ")
	var matrix, result [3][3]int
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			fmt.Scanf("%d", &matrix[i][j])
		}
	}

	fmt.Println("Input matrix:")
	prettyPrintMatrix(matrix)

	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			result[i][j] = findDet(i, j, matrix)
		}
	}

	fmt.Println("Co-factor of matrix:")
	prettyPrintMatrix(result)
}

func findDet(row, col int, matrix [3][3]int) int {
	var elements []int
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if !(i == row || j == col) {
				elements = append(elements, matrix[i][j])
			}
		}
	}

	det := int(math.Pow(-1, float64(row+col))) * ((elements[0] * elements[3]) - (elements[1] * elements[2]))

	return det
}

func prettyPrintMatrix(matrix [3][3]int) {
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			fmt.Printf("%v\t", matrix[i][j])
		}
		fmt.Println()
	}
}
```

```javascript
// Write a JavaScript program to find the cofactor of a matrix

// List of Functions:

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
  // if row+column is odd, multiply number by -1
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
// Get cofactor matrix of 3x3 matrix
// No html file, so set matrix values here
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// For each element:
//  get minor
// add to coFacMatrix
const coFacMatrix = [[], [], []];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let minor = minorAndSign(matrix, i, j);
    coFacMatrix[i][j] = minor;
  }
}
printMatrix(coFacMatrix);
```

```python
# Write a Python program to find the cofactor of a matrix

from typing import List

import numpy as np


def compute_cofactor_matrix(matrix: List[List[int]]) -> np.ndarray:
    n_lines = len(matrix)
    n_columns = len(matrix[0])
    cofactor_matrix = np.array([])
    if n_lines != n_columns:
        print("Input a square matrix!")
        return
    for line in range(n_lines):
        for column in range(n_columns):
            minor_matrix = []
            for minor_line in matrix:
                minor_line_copy = minor_line.copy()
                minor_line_copy.pop(column)
                minor_matrix.append(minor_line_copy)
            minor_matrix.pop(line)
            cofactor_matrix = np.append(
                cofactor_matrix, (-1) ** (line + column) * np.linalg.det(minor_matrix)
            )

    return cofactor_matrix.reshape((n_lines, n_columns))


print(compute_cofactor_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

""" Output:
[[ -3.   6.  -3.]
 [  6. -12.   6.]
 [ -3.   6.  -3.]]
"""
```

```r
# Write a R program to find the cofactor of a matrix

# Clear the environment
rm(list = ls())

# Function that calculates the cofactors
calculate_cofactor <- function(original_matrix, matrix_order){
  print("Original matrix:")
  print(original_matrix)

  cofactor_matrix <- matrix(, nrow = matrix_order, ncol = matrix_order)

  for (column in 1:matrix_order) {
    matrix_minus_column <- your_matrix[,-column]
    for (row in 1:matrix_order) {
      if (matrix_order == 2) {
        matrix_minus_row <- matrix_minus_column[-row]
        cofactor_matrix[row, column] <- ((-1)^(row + column))*matrix_minus_row
      } else {
        matrix_minus_row <- matrix_minus_column[-row,]
        cofactor_matrix[row, column] <- ((-1)^(row + column))*det(matrix_minus_row)
      }
    }
  }

  return(cofactor_matrix)
}

# Request the matrix
matrix_ord <- as.integer(readline("What is the order of your matrix?: "))
message(cat("Enter the ", matrix_ord^2, " values of your matrix:"))
matrix_content <- c(scan(nmax = (matrix_ord^2)))
your_matrix <- matrix(data = matrix_content, nrow = matrix_ord, byrow = TRUE)

# Shows the calculated cofactors
cofactor <- calculate_cofactor(your_matrix, matrix_ord)
print("Matrix of cofactors:")
print(cofactor)
```

```typescript
// Write a TypeScript program to find the cofactor of a matrix

function minorAndSign(matrix: number[], row: number, column: number) {
  const detNums = [];
  let detNumIdx: number = 0;
  for (let i: number = 0; i < 3; i++) {
    for (let j: number = 0; j < 3; j++) {
      if (i != row && j != column) {
        detNums[detNumIdx] = matrix[i][j];
        detNumIdx += 1;
      }
    }
  }

  if ((row + column) % 2 != 0) {
    return detNums[1] * detNums[2] - detNums[0] * detNums[3];
  }
  return detNums[0] * detNums[3] - detNums[1] * detNums[2];
}

function printMatrix(matrix) {
  for (let row: number = 0; row < 3; row++) {
    console.log(matrix[row]);
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const coFacMatrix = [[], [], []];

for (let i: number = 0; i < 3; i++) {
  for (let j: number = 0; j < 3; j++) {
    const minor: number = minorAndSign(matrix, i, j);
    coFacMatrix[i][j] = minor;
  }
}
printMatrix(coFacMatrix);
```
