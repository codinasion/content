---
title: "Find The Transpose Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "typescript",
    "julia",
    "go",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "MadhuS-1605",
    "pandfun",
    "AdityaNarayanPradhan",
    "lukastomcisak",
    "anshu-6537",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-09T15:22:05Z
trackId: 3142
description: "Write a program to find the transpose of a matrix."
---

## Write a program to find the transpose of a matrix

The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column indices of the matrix by producing another matrix denoted as A<sup>T</sup>.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
1 4 7
2 5 8
3 6 9
```

---

```c
// Write a C program to find the transpose of a matrix

#include <stdio.h>
#include <stdlib.h>

#define ROW_COUNT 3
#define COL_COUNT 3


void print_matrix(int **matrix)
{
	int i = 0, j = 0;
	for ( ; i < ROW_COUNT; ++i) {
		for (j = 0; j < COL_COUNT; ++j)
			printf("%d ", matrix[i][j]);
		printf("\n");
	}

	return;
}

int **transpose(int **a)
{
	int i = 0, j = 0;

	int **ret = malloc(sizeof(int *)*ROW_COUNT);
	for (i = 0; i < ROW_COUNT; ++i) {
		ret[i] = malloc(sizeof(int) * COL_COUNT);
	}

	for (i =0 ; i < ROW_COUNT; ++i) {
		for (j = 0; j < COL_COUNT; ++j)
			ret[j][i] = a[i][j];
	}

	return ret;
}


int main()
{
	int count = 1;
	int i = 0, j = 0;
	int **matrix;
	matrix = malloc(ROW_COUNT * sizeof(int *));
	for ( ; i < ROW_COUNT; ++i) {
		matrix[i] = malloc(COL_COUNT * sizeof(int));
		for (j = 0; j < COL_COUNT; ++j)
			matrix[i][j] = count++;
	}

	printf("Input:\n");
	print_matrix(matrix);

	printf("\nOutput:\n");
	int **ret_matrix = transpose(matrix);
	print_matrix(ret_matrix);

	return 0;
}
```

```csharp
// Write a C# program to find the transpose of a matrix

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Program
{
    class Program
    {
        public static void Main(string[] args)
        {
            int m, n, i, j;
            Console.Write("Enter the order of the Matrix : ");
            m = Convert.ToInt16(Console.ReadLine());
            n = Convert.ToInt16(Console.ReadLine());
            int[,] A = new int[10, 10];
            Console.Write("\nEnter The Matrix Elements : ");
            for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    A[i, j] = Convert.ToInt16(Console.ReadLine());
                }
            }
            Console.Clear();
            Console.WriteLine("\nGiven Matrix : ");
            for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    Console.Write(A[i, j] + "\t");

                }
                Console.WriteLine();
            }
            Console.WriteLine("Transpose Matrix : ");

           for (i = 0; i < m; i++)
            {
                for (j = 0; j < n; j++)
                {
                    Console.Write(A[j, i] + "\t");

                }
                Console.WriteLine();
            }
            Console.Read();
        }
    }
}
```

```cpp
// Write a C++ program to find the transpose of a matrix

#include <iostream>
using namespace std;

void printMatrix(int a[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d ", a[i][j]);
        }
        if (i != 2)
        {
            printf("\n");
        }
    }

    printf("\n");
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

    int transpose[3][3];
    transposeMatrix(input, transpose);

    printMatrix(transpose);
}
```

```go
// Write a Go program to find the transpose of a matrix

package main

import "fmt"

func transpose(matrix [][]int) [][]int {
	rows := len(matrix)
	cols := len(matrix[0])

	transposed := make([][]int, cols)
	for i := 0; i < cols; i++ {
		transposed[i] = make([]int, rows)
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			transposed[j][i] = matrix[i][j]
		}
	}

	return transposed
}

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	transposed := transpose(matrix)

	fmt.Println("Original Matrix:")
	printMatrix(matrix)

	fmt.Println("\nTransposed Matrix:")
	printMatrix(transposed)
}

func printMatrix(matrix [][]int) {
	for _, row := range matrix {
		for _, val := range row {
			fmt.Printf("%d\t", val)
		}
		fmt.Println()
	}
}
```

```java
// Write a Java program to find the transpose of a matrix

class FindTheTransposeOfAMatrix {
    public static void main(String[] args) {
        int matrix[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int size = matrix.length;

        for (int i = 0; i < size; i++)
            for (int j = i + 1; j < size; j++) {
                int help = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = help;
            }

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++)
                System.out.print(matrix[i][j] + " ");
            System.out.println("");
        }
    }
}
```

```javascript
// Write a JavaScript program to find the transpose of a matrix

function transposeOfMatrix(arr) {
  console.log("before arr", arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }

  console.log("after arr", arr);
}

transposeOfMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
```

```julia
# Write a Julia program to find the transpose of a matrix

A = [1 2 3; 4 5 6; 7 8 9]
print((A'))
```

```kotlin
// Write a Kotlin program to find the transpose of a matrix

fun main(args: Array<String>) {
    val row = 2
    val column = 3
    val matrix = arrayOf(intArrayOf(2, 3, 4), intArrayOf(5, 6, 4))


    display(matrix)

    // Transpose the matrix
    val transpose = Array(column) { IntArray(row) }
    for (i in 0..row - 1) {
        for (j in 0..column - 1) {
            transpose[j][i] = matrix[i][j]
        }
    }

    display(transpose)
}

fun display(matrix: Array<IntArray>) {
    println("The matrix is: ")
    for (row in matrix) {
        for (column in row) {
            print("$column    ")
        }
        println()
    }
}
```

```python
# Write a Python program to find the transpose of a matrix

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rows = len(matrix)
columns = len(matrix[0])

transposed_matrix = [[0 for x in range(rows)] for y in range(columns)]

for i in range(columns):
    for j in range(rows):
        transposed_matrix[i][j] = matrix[j][i]

for i in range(columns):
    for j in range(rows):
        print(transposed_matrix[i][j], " ", end="")
    print()
```

```typescript
// Write a TypeScript program to find the transpose of a matrix

function transposeOfMatrix(arr: Array<Array<number>>) {
  console.log("before arr", arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }

  console.log("after arr", arr);
}

transposeOfMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
```
