---
title: "Find The Adjoint Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "go",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "mreza-kiani",
    "ShounaKulkarni",
    "ApurvaR1",
    "pedram-mohajer",
    "g-s-eire",
    "AshitaSingamsetty",
    "harshraj8843",
    "Ariel201711",
    "AdityaNarayanPradhan",
    "Bogumil-Sapinski-Mobica",
    "SarthakSanjay",
    "aghiles-medane",
    "joao-vitor-souza",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-31T15:59:13Z
trackId: 4037
description: "Write a program to find the adjoint of a matrix."
---

## Write a program to find the adjoint of a matrix

The adjoint of a square matrix A is the transpose of the matrix of cofactors of A. The adjoint of a matrix A is denoted as A<sup>\*</sup>.

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
// Write a C program to find the adjoint of a matrix

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

void printMatrix(int a[3][3])
{
    printf("[");
    for (int i = 0; i < 3; i++)
    {
        printf("[");
        for (int j = 0; j < 3; j++)
        {
            printf("%d", a[i][j]);
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

int main()
{
    int input[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    int coFactors[3][3];
    coFactorMatrix(input, coFactors);

    int adjoints[3][3];
    transposeMatrix(coFactors, adjoints);

    printMatrix(adjoints);
}
```

```csharp
// Write a C# program to find the adjoint of a matrix

using System;

class FindTheAdjointOfAMatrix {

    /// <summary>
    /// The function that calculates the adjoint of a matrix
    /// </summary>
    public static int[,] GetAdjoint(int[,] matrix) {

        // Getting the size of the matrix (square matrix)
        int n = matrix.GetLength(0);
        // Creating a 2D array to store the adjoint matrix
        int[,] adjoint = new int[n, n];

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                // Getting the cofactor of the matrix[i, j]
                int[,] cofactor = GetCofactor(matrix, i, j);
                // Calculating the sign for the current element
                int sign = (int)Math.Pow(-1, i + j);
                // Calculating the determinant of the cofactor
                int determinant = GetDeterminant(cofactor, n - 1);
                // Multiplying the determinant by the sign and assigning it to adjoint[j, i]
                adjoint[j, i] =  sign * determinant;
            }
        }

        // Returning the calculated adjoint matrix
        return adjoint;
    }

    /// <summary>
    /// Function to calculate the cofactor of a matrix element
    /// </summary>
    public static int[,] GetCofactor(int[,] matrix, int row, int col) {

        // Getting the size of the matrix (square matrix)
        int n = matrix.GetLength(0);
        // Creating a 2D array to store the cofactor matrix
        int[,] cofactor = new int[n - 1, n - 1];

        int rowOffset = 0;
        int colOffset = 0;

        for(int i = 0; i < n; i++) {
            if(i == row) {
                // Skipping the current row by setting rowOffset to -1
                rowOffset = -1;
                continue;
            }

            colOffset = 0;

            for(int j = 0; j < n; j++) {
                if(j == col) {
                    // Skipping the current column by setting colOffset to -1
                    colOffset = -1;
                    continue;
                }

                cofactor[i + rowOffset, j + colOffset] = matrix[i, j];
            }
        }

        // Returning the calculated cofactor matrix
        return cofactor;
    }

    /// <summary>
    /// Function to calculate the determinant of a matrix
    /// </summary>
    public static int GetDeterminant(int[,] matrix, int size) {

        if(size == 1) {
            // The Base Case, returning the single element for a 1x1 matrix
            return matrix[0, 0];
        }

        int determinant = 0;
        int sign = 1;

        for(int i = 0; i < size; i++) {
            int[,] submatrix = new int[size - 1, size - 1];

            for(int j = 0; j < size - 1; j++) {
                for(int k = 0; k < size - 1; k++) {
                    if(k < i) {
                        // Filling the submatrix while skipping the current column
                        submatrix[j, k] = matrix[j + 1, k];
                    }
                    else {
                        // Filling the submatrix while skipping the current column
                        submatrix[j, k] = matrix[j + 1, k + 1];
                    }
                }
            }

            // Calculating the determinant
            determinant += sign * matrix[0, i] * GetDeterminant(submatrix, size - 1);
            // Toggling the sign for the next iteration
            sign = -sign;
        }

        // Returning the calculated determinant
        return determinant;
    }

    /// <summary>
    /// Function to display the matrix in the specified format
    /// </summary>
    public static void DisplayMatrix(int[,] matrix) {

        int numRows = matrix.GetLength(0);
        int numCols = matrix.GetLength(1);

        Console.Write("[");
        for(int i = 0; i < numRows; i++) {
            Console.Write("[");
            for(int j = 0; j < numCols; j++) {
                Console.Write(matrix[i, j]);
                if(j != numCols - 1) {
                    Console.Write(", ");
                }
            }
            Console.Write("]");
            if(i != numRows - 1) {
                Console.Write(", ");
            }
        }
        Console.Write("]");
        Console.WriteLine();
    }

    /// <summary>
    /// Main Method
    /// </summary>
    public static void Main(string[] args) {

        // The Original Matrix
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        Console.WriteLine("Original Matrix:");
        DisplayMatrix(matrix);

        // Calculating the adjoint matrix
        int[,] adjoint = GetAdjoint(matrix);

        Console.WriteLine("\nAdjoint Matrix:");
        DisplayMatrix(adjoint);
    }
}
```

```cpp
// Write a C++ program to find the adjoint of a matrix

#include <cstddef>
#include <cmath>
#include <vector>
#include <initializer_list>

class Matrix
{
    std::vector<int> m_data;
    int m_size{};

public:
    Matrix() = default;
    Matrix(std::initializer_list<int> l);

    int determinant();
    void set_elements(std::initializer_list<int> l);
    bool is_squared(int num);
    Matrix adjoint();
    int size() const { return m_size; }
    Matrix get_submatrix(int i, int k) const;

    int operator[](std::size_t idx) const { return (idx >= 0 && idx < m_data.size()) ? m_data.at(idx) : 0; }

private:
    void add_last(int element);
};

int Matrix::determinant()
{
    if (m_size == 1)
    {
        return m_data[0];
    }
    int sign, det = 0;
    for (int r, c, i = 0; i < m_data.size() / 2; i++)
    {
        r = static_cast<int>(i / m_size);
        c = i % m_size;
        auto sub_matrix = get_submatrix(r, c);
        sign = ((r + c) % 2 == 0) ? 1 : -1;
        det += sign * m_data.at(i) * sub_matrix.determinant();
    }
    return det;
}

Matrix Matrix::get_submatrix(int r, int c) const
{
    Matrix m;
    for (int i = 0; i < m_data.size(); i++)
    {
        if (r == static_cast<int>(i / m_size) || c == i % m_size)
        {
            continue;
        }
        m.add_last(m_data.at(i));
    }
    return m;
}

bool Matrix::is_squared(int num)
{
    auto sqrt_num = static_cast<int>(std::sqrt(num));
    return num == (sqrt_num * sqrt_num);
}

void Matrix::add_last(int element)
{
    m_data.push_back(element);
    m_size = static_cast<int>(std::sqrt(m_data.size()));
}

Matrix Matrix::adjoint()
{
    Matrix adjoint_matrix;

    if (m_size == 1)
    {
        adjoint_matrix.set_elements({1});
    }
    for (int sign, c, r, i = 0; i < m_data.size(); i++)
    {
        r = static_cast<int>(i / m_size);
        c = i % m_size;
        auto sub_matrix = get_submatrix(r, c);
        sign = ((r + c) % 2 == 0) ? 1 : -1;
        adjoint_matrix.add_last(sign * sub_matrix.determinant());
    }

    return adjoint_matrix;
}

void Matrix::set_elements(std::initializer_list<int> l)
{
    if (!is_squared(l.size()))
    {
        return;
    }
    m_data.insert(m_data.begin(), l);
    m_size = std::sqrt(l.size());
}
```

```go
// Write a Go program to find the adjoint of a matrix

package main

import "fmt"

func getCofactor(matrix [][]int, temp [][]int, p, q, n int) {
	var i, j int
	for row := 0; row < n; row++ {
		for col := 0; col < n; col++ {
			if row != p && col != q {
				temp[i][j], j = matrix[row][col], j+1
				if j == n-1 {
					j = 0
					i++
				}
			}
		}
	}
}
func determinant(matrix [][]int, n int) int {
	if n == 1 {
	return matrix[0][0]
	}
	var D, sign int = 0, 1
	temp := make([][]int, len(matrix))
	for i := range temp {
		temp[i] = make([]int, len(matrix))
	}
	for f := 0; f < n; f++ {
		getCofactor(matrix, temp, 0, f, n)
		D += sign * matrix[0][f] * determinant(temp, n-1)
		sign = -sign
	}
	return D
}
func adjoint(matrix [][]int) [][]int {
	n := len(matrix)
	adj := make([][]int, n)
	for i := range adj {
		adj[i] = make([]int, n)
	}
	temp := make([][]int, n)
	for i := range temp {
		temp[i] = make([]int, n)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			getCofactor(matrix, temp, i, j, n)
			sign := 1
			if (i+j)%2 != 0 {
				sign = -1
			}
			adj[j][i] = sign * determinant(temp, n-1)
		}
	}
	return adj
}
func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	adj := adjoint(matrix)
	fmt.Println("Output :")
	for _, row := range adj {
		fmt.Println(row)
	}
}
```

```java
// Write a Java program to find the adjoint of a matrix

public class Adjoints {

	static void getCofactors(int A[][], int temp[][], int p, int q, int n) {
		int i = 0, j = 0;
		for (int row = 0; row < n; row++) {
			for (int col = 0; col < n; col++) {
				if (row != p && col != q) {
					temp[i][j++] = A[row][col];
					if (j == n - 1) {
						j = 0;
						i++;
					}
				}
			}
		}
	}

	static int determinant(int A[][], int n) {

		if (n == 1)
			return A[0][0];
		int N = A.length;
		int[][] tableTmp = new int[N][N];
		int D = 0;

		int sign = 1;
		for (int f = 0; f < n; f++) {
			getCofactors(A, tableTmp, 0, f, n);
			D += sign * A[0][f] * determinant(tableTmp, n - 1);
			sign = -1 * sign;
		}

		return D;
	}

	public static int[][] adjoint(int A[][]) {

		int N = A.length;
		int[][] adj = new int[N][N];
		if (N == 1) {
			adj[0][0] = 1;
			return adj;
		}

		int sign = 1;
		int[][] temp = new int[N][N];

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				getCofactors(A, temp, i, j, N);

				sign = ((i + j) % 2 == 0) ? 1 : -1;

				adj[j][i] = (sign) * (determinant(temp, N - 1));
			}
		}
		return adj;
	}

}
```

```javascript
// Write a JavaScript program to find the adjoint of a matrix

//simple function to find adj of matrix
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function adjoint(matrix) {
  let A00 = matrix[0][0];
  let A01 = matrix[0][1];
  let A02 = matrix[0][2];
  let A10 = matrix[1][0];
  let A11 = matrix[1][1];
  let A12 = matrix[1][2];
  let A20 = matrix[2][0];
  let A21 = matrix[2][1];
  let A22 = matrix[2][2];

  let adj = [
    [A11 * A22 - A12 * A21, -(A01 * A22 - A02 * A21), A01 * A12 - A02 * A11],
    [-(A10 * A22 - A12 * A20), A00 * A22 - A02 * A20, -(A00 * A12 - A02 * A10)],
    [A10 * A21 - A11 * A20, -(A00 * A21 - A01 * A20), A00 * A11 - A01 * A10],
  ];
  return adj;
}

let adjaointOfMatrix = adjoint(mat);
console.log(adjaointOfMatrix);

//adjoint of matrix using loop
// function adjoint(matrix) {
//     let adj = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             let a = (i + 1) % 3;
//             let b = (j + 1) % 3;
//             let c = (i + 2) % 3;
//             let d = (j + 2) % 3;

//             adj[j][i] = (matrix[a][b] * matrix[c][d] - matrix[a][d] * matrix[c][b]);
//             if ((i + j) % 2 === 1) {
//                 adj[j][i] = -adj[j][i];
//             }
//         }
//     }

//     return adj;
// }
```

```kotlin
// Write a Kotlin program to find the adjoint of a matrix

fun main() {
    val matrixA = listOf(
        listOf(1, 2, 3),
        listOf(4, 5, 6),
        listOf(7, 8, 9)
    )

    val matrixAdjoint = calculateAdjoint(matrixA)

    println("Input (A): $matrixA")
    println("Matrix of Adjoint (A*): $matrixAdjoint")
}

fun calculateAdjoint(matrix: List<List<Int>>): List<List<Int>> {
    val matrixCofactors = calculateCofactors(matrix)
    return transpose(matrixCofactors)
}

fun calculateCofactors(matrix: List<List<Int>>): List<List<Int>> {
    return matrix.mapIndexed { i, row ->
        row.indices.map { j ->
            getCofactor(matrix, i, j)
        }
    }
}

fun transpose(matrix: List<List<Int>>): List<List<Int>> {
    if (matrix.isEmpty() || matrix[0].isEmpty())
        return emptyList()

    val numRows = matrix.size
    val numCols = matrix[0].size

    return List(numCols) { col ->
        List(numRows) { row ->
            matrix[row][col]
        }
    }
}

fun getCofactor(matrix: List<List<Int>>, row: Int, col: Int): Int {
    val sign = if ((row + col) % 2 == 0) 1 else -1
    val subMatrix = getSubMatrix(matrix, row, col)
    return sign * determinant(subMatrix)
}

fun getSubMatrix(matrix: List<List<Int>>, rowToRemove: Int, colToRemove: Int): List<List<Int>> {
    return matrix
        .filterIndexed { i, _ -> i != rowToRemove }
        .map { row -> row.filterIndexed { j, _ -> j != colToRemove } }
}

fun determinant(matrix: List<List<Int>>): Int {
    if (matrix.size == 2)
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

    return matrix.indices.sumOf { i ->
        val sign = if (i % 2 == 0) 1 else -1
        val subMatrix = getSubMatrix(matrix, 0, i)
        sign * matrix[0][i] * determinant(subMatrix)
    }
}
```

```php
// Write a PHP program to find the adjoint of a matrix

<?php
// Function to calculate the determinant of a matrix
function determinant(array $matrix, $size) {
    $det = 0;
    if ($size == 1) {
        return $matrix[0][0];
    }

    $temp = array_fill(0, $size, array_fill(0, $size, 0));
    $sign = 1;

    for ($f = 0; $f < $size; $f++) {
        getCofactor($matrix, $temp, 0, $f, $size);
        $det += $sign * $matrix[0][$f] * determinant($temp, $size - 1);
        $sign = -$sign;
    }

    return $det;
}

// Function to get cofactor of a matrix
function getCofactor(array $matrix, array &$temp, $p, $q, $n) {
    $i = 0;
    $j = 0;

    for ($row = 0; $row < $n; $row++) {
        for ($col = 0; $col < $n; $col++) {
            if ($row != $p && $col != $q) {
                $temp[$i][$j++] = $matrix[$row][$col];
                if ($j == $n - 1) {
                    $j = 0;
                    $i++;
                }
            }
        }
    }
}

// Function to calculate adjoint of a matrix
function adjoint(array &$matrix) {
    $size = count($matrix);
    if ($size == 1) {
        $matrix[0][0] = 1;
        return;
    }

    $sign = 1;
    $temp = array_fill(0, $size, array_fill(0, $size, 0));

    $adj = array_fill(0, $size, array_fill(0, $size, 0));
    for ($i = 0; $i < $size; $i++) {
        for ($j = 0; $j < $size; $j++) {
            getCofactor($matrix, $temp, $i, $j, $size);
            $sign = (($i + $j) % 2 == 0) ? 1 : -1;
            $adj[$j][$i] = ($sign) * (determinant($temp, $size - 1));
        }
    }
    $matrix = $adj;
}

// Taking input from the user
echo "Enter the size of the matrix (n for n*n matrix): ";
$size = trim(fgets(STDIN));

$matrix = array();
echo "Enter the elements of the matrix row by row:\n";
for ($i = 0; $i < $size; $i++) {
    $matrix[$i] = explode(" ", trim(fgets(STDIN)));
}

adjoint($matrix);

echo "Adjoint of the matrix is:\n";
foreach ($matrix as $row) {
    echo "[" . implode(", ", $row) . "]\n";
}
?>
```

```python
# Write a Python program to find the adjoint of a matrix

from typing import List
import numpy as np


def compute_adjoint_matrix(matrix: List[List[int]]) -> np.ndarray:
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

    return cofactor_matrix.reshape((n_lines, n_columns)).T


print(compute_adjoint_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

""" Output:
[[ -3.   6.  -3.]
 [  6. -12.   6.]
 [ -3.   6.  -3.]]
"""
```

```r
# Write a R program to find the adjoint of a matrix

# Function to calculate the cofactor of an element in a matrix
cofactor <- function(mat, row, col) {
  sub_mat <- mat[-row, -col] # Remove the row and column
  return ((-1)^(row + col) * det(sub_mat))
}

# Function to calculate the cofactor matrix
cofactorMatrix <- function(mat) {
  n <- nrow(mat)
  cofactor_mat <- matrix(0, n, n)
  for (i in 1:n) {
    for (j in 1:n) {
      cofactor_mat[i, j] <- cofactor(mat, i, j)
    }
  }
  return (cofactor_mat)
}

# Function to find the adjoint of a matrix
findAdjoint <- function(mat) {
  return (t(cofactorMatrix(mat))) # Transpose of the cofactor matrix
}

# Test the function with the input matrix
input_matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)
adjoint_matrix <- findAdjoint(input_matrix)
print(adjoint_matrix)
```

```rust
// Write a Rust program to find the adjoint of a matrix

fn main() {
    // Define the input matrix
    let matrix: [[i32; 3]; 3] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    // Calculate and print the adjoint of the matrix
    let adjoint_matrix = adjoint(&matrix);
    print_adjoint_matrix(&adjoint_matrix);
}

fn adjoint(matrix: &[[i32; 3]; 3]) -> [[i32; 3]; 3] {
    let mut adjoint_matrix: [[i32; 3]; 3] = [[0; 3]; 3];

    for i in 0..3 {
        for j in 0..3 {
            // Calculate the cofactor for each element
            let cofactor_value = cofactor(matrix, i, j);

            // Transpose the cofactor matrix to get the adjoint matrix
            adjoint_matrix[j][i] = cofactor_value;
        }
    }

    adjoint_matrix
}

fn cofactor(matrix: &[[i32; 3]; 3], row: usize, col: usize) -> i32 {
    // Calculate the minor matrix by excluding the current row and column
    let mut minor_matrix: [[i32; 2]; 2] = [[0; 2]; 2];
    let mut minor_row = 0;
    for i in 0..3 {
        if i == row {
            continue;
        }
        let mut minor_col = 0;
        for j in 0..3 {
            if j == col {
                continue;
            }
            minor_matrix[minor_row][minor_col] = matrix[i][j];
            minor_col += 1;
        }
        minor_row += 1;
    }

    // Calculate the determinant of the minor matrix
    let minor_det = (minor_matrix[0][0] * minor_matrix[1][1]) - (minor_matrix[0][1] * minor_matrix[1][0]);

    // Apply the sign based on the position of the element in the matrix
    let sign = if (row + col) % 2 == 0 { 1 } else { -1 };

    // Multiply the determinant by the sign to get the cofactor
    sign * minor_det
}

fn print_adjoint_matrix(matrix: &[[i32; 3]; 3]) {
    print!("[");
    for row in matrix.iter().take(matrix.len() - 1) {
        print!("{}, ", format_row(row));
    }
    print!("{}]", format_row(matrix.last().unwrap()));
}

fn format_row(row: &[i32; 3]) -> String {
    format!("[{}]", row.iter().map(|&x| x.to_string()).collect::<Vec<_>>().join(", "))
}
```

```typescript
// Write a TypeScript program to find the adjoint of a matrix

// Function to get cofactor of mat[p][q] in temp[][]. n is current dimension of mat[][]

function getCofactor(mat: number[][], temp: number[][], p: number, q: number) {
  let i = 0,
    j = 0;
  const n = mat.length;

  // Looping for each element of the matrix
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // Copying into temporary matrix only those element
      // which are not in given row and column
      if (row !== p && col !== q) {
        temp[i][j++] = mat[row][col];

        // Row is filled, so increase row index and
        // reset col index
        if (j === n - 1) {
          j = 0;
          i++;
        }
      }
    }
  }
}

// Recursive function for finding determinant of matrix. n is current dimension of mat[][].

function getDeterminant(mat: number[][], n: number) {
  // Base case : if matrix contains single element
  if (n === 1) return mat[0][0];

  let det = 0; // Initialize determinant result
  const l = mat.length;
  const temp: number[][] = new Array(l); // To store cofactors

  for (let i = 0; i < l; i++) {
    temp[i] = new Array(l);
  }

  let sign = 1; // To store sign multiplier

  // Iterate for each element of first row
  for (let f = 0; f < n; f++) {
    // Getting Cofactor of mat[0][f]
    getCofactor(mat, temp, 0, f);
    det += sign * mat[0][f] * getDeterminant(temp, n - 1);

    // terms are to be added with alternate sign
    sign = -sign;
  }

  return det;
}

// Function to get adjoint of mat[l][l] in adj[l][l].
function getAdjoint(mat: number[][]) {
  const l = mat.length;
  const adj: number[][] = new Array(l);
  for (let i = 0; i < l; i++) {
    adj[i] = new Array(l);
  }

  if (l === 1) {
    adj[0][0] = 1;
    return adj;
  }

  // temp is used to store cofactors of mat[][]
  let sign = 1;
  const temp: number[][] = new Array(l);

  for (let i = 0; i < l; i++) {
    temp[i] = new Array(l);
  }

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      // Get cofactor of mat[i][j]
      getCofactor(mat, temp, i, j);

      // sign of adj[j][i] positive if sum of row
      // and column indexes is even.
      sign = (i + j) % 2 === 0 ? 1 : -1;

      // Interchanging rows and columns to get the
      // transpose of the cofactor matrix
      adj[j][i] = sign * getDeterminant(temp, l - 1);
    }
  }

  return adj;
}

function printMat(mat: number[][]) {
  let matRepr = "[";
  for (let i = 0; i < mat.length; i++) {
    matRepr += "\n\t[";
    for (let j = 0; j < mat[i].length; j++) {
      matRepr += mat[i][j];
      if (j < mat[i].length - 1) matRepr += ", ";
      else matRepr += "]";
    }
  }
  matRepr += "\n]";
  console.log(matRepr);
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Original matrix:");
printMat(mat);
console.log("Adjoint matrix:");
printMat(getAdjoint(mat));
```
