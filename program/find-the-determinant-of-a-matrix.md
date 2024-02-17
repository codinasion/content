---
title: "Find The Determinant Of A Matrix"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "go",
    "php",
    "python",
    "r",
  ]
contributors:
  [
    "phbrgnomo",
    "anandfresh",
    "harshraj8843",
    "PavanKumarCB",
    "vedantpople4",
    "Sri01729",
    "urlunaticguy",
    "jaypavasiya",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-04T12:59:14Z
trackId: 3422
description: "Write a program to find the determinant of a matrix."
---

## Write a program to find the determinant of a matrix

The determinant of a square matrix is a scalar value that can be computed from the elements of the matrix. The determinant of a matrix A is denoted as det(A) or |A|.

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
0
```

---

```c
// Write a C program to find the determinant of a matrix

#include<stdio.h>
#include<math.h>
#include<stdlib.h>

#define   SIZE   10

int main()
{
	 float a[SIZE][SIZE], x[SIZE], ratio, det=1;
	 int i,j,k,n;

	 printf("Enter Order of Matrix: ");
	 scanf("%d", &n);

	 /* 2. Reading Matrix */
	 printf("\nEnter Coefficients of Matrix: \n");
	 for(i=0;i< n;i++)
	 {
		  for(j=0;j< n;j++)
		  {
			   printf("a[%d][%d]=",i,j);
			   scanf("%f", &a[i][j]);
		  }
	 }

	 for(i=0;i< n;i++)
	 {
		  if(a[i][i] == 0.0)
		  {
			   printf("Mathematical Error!");
			   exit(0);
		  }
		  for(j=i+1;j< n;j++)
		  {
			   ratio = a[j][i]/a[i][i];

			   for(k=0;k< n;k++)
			   {
			  		a[j][k] = a[j][k] - ratio*a[i][k];
			   }
		  }
	 }
	 printf("\nUpper Triangular Matrix: \n");
	 for(i=0;i< n;i++)
	 {
		  for(j=0;j< n;j++)
		  {
			   printf("%0.2f\t",a[i][j]);
		  }
		  printf("\n");
	 }


	 for(i=0;i< n;i++)
     {
         det = det * a[i][i];
     }

	 printf("\n\nDeterminant of given matrix is: %0.3f", det);


	 return 0;
}
```

```csharp
// Write a C# program to find the determinant of a matrix

using System;
public class Determinant
{
    public static void Main()
   {
            int i,j;
        	int[,] arr1 = new int[10,10];
            int det=0;

	 Console.Write("Input elements in the matrix :\n");
       for(i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
	           Console.Write("element - [{0}],[{1}] : ",i,j);
			   arr1[i,j] = Convert.ToInt32(Console.ReadLine());
            }
        }
	 Console.Write("The matrix is :\n");
	 for(i=0;i<3;i++)
	 {
	   for(j=0;j<3 ;j++)
	     Console.Write("{0}  ",arr1[i,j]);
	    Console.Write("\n");
	 }

  for(i=0;i<3;i++)
      det = det + (arr1[0,i]*(arr1[1,(i+1)%3]*arr1[2,(i+2)%3] - arr1[1,(i+2)%3]*arr1[2,(i+1)%3]));

  Console.Write("\nThe Determinant of the matrix is: {0}\n\n",det);
  }
}
```

```cpp
// Write a C++ program to find the determinant of a matrix

#include <iostream>
using namespace std;

int main()
{
    int matrix[3][3];
    int determinant = 0;

    cout << "Enter the 9 elements of matrix: " << endl;

    for(int i = 0; i < 3; i++)
        for(int j = 0; j < 3; j++)
            cin >> matrix[i][j];

    cout << "\nThe matrix is\n";

    for(int i = 0; i < 3; i++)
    {
        cout << "\n";

        for(int j = 0; j < 3; j++)
            cout << matrix[i][j] << "\t";
    }

    for(int i = 0; i < 3; i++)
        determinant = determinant + (matrix[0][i] * (matrix[1][(i+1)%3] * matrix[2][(i+2)%3] - matrix[1][(i+2)%3] * matrix[2][(i+1)%3]));

    cout << "\nDeterminant of the matrix is: " << determinant << endl;


    return 0;
}
```

```go
// Write a Go program to find the determinant of a matrix

package main

import "fmt"

func main() {
	var i, j int
	var det [3][3]int
	for i = 0; i < 3; i++ {
		for j = 0; j < 3; j++ {
			fmt.Scan(&det[i][j])
		}
	}
	x := (det[1][1] * det[2][2]) - (det[2][1] * det[1][2])
	y := (det[1][0] * det[2][2]) - (det[2][0] * det[1][2])
	z := (det[1][0] * det[2][1]) - (det[2][0] * det[1][1])
	ans := (det[0][0] * x) - (det[0][1] * y) + (det[0][2] * z)
	fmt.Println(ans)
}
```

```java
// Write a Java program to find the determinant of a matrix

import java.util.Scanner;

public class FindTheDeterminantOfAMatrix {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        int i, j;
        int determinant = 0;
        int arr[][] = new int[3][3];
        System.out.println("Enter the input values");
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                arr[i][j] = scnr.nextInt();
            }
        }

        determinant = arr[0][0]*(arr[1][1]*arr[2][2] - arr[2][1]*arr[1][2]) -  (arr[0][1]*(arr[1][0]*arr[2][2] - arr[1][2]*arr[2][0])) +  (arr[0][2]*(arr[1][0]*arr[2][1] - arr[2][0]*arr[1][1]));

        System.out.println(determinant);
    }
}
```

```javascript
// Write a JavaScript program to find the determinant of a matrix

const determinant = m =>
  m.length == 1
    ? m[0][0]
    : m.length == 2
      ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
      : m[0].reduce(
          (r, e, i) =>
            r +
            (-1) ** (i + 2) *
              e *
              determinant(m.slice(1).map(c => c.filter((_, j) => i != j))),
          0
        );

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 0

console.log(determinant(test));
```

```julia
# Write a Julia program to find the determinant of a matrix

using LinearAlgebra
A = [1 2 3; 4 5 6; 7 8 9]
println(det(A))
```

```php
// Write a PHP program to find the determinant of a matrix

<?php

function determinant2x2($a, $b, $c, $d) {
    return $a * $d - $b * $c;
}

function determinant3x3($mat) {
    $det = 0;
    for ($i = 0; $i < 3; $i++) {
        $det += $mat[0][$i] * determinant2x2(
            $mat[1][($i + 1) % 3], $mat[1][($i + 2) % 3],
            $mat[2][($i + 1) % 3], $mat[2][($i + 2) % 3]
        );
    }
    return $det;
}

$mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$det = determinant3x3($mat);

echo "Determinant of the given matrix is: ".$det;
?>
```

```python
# Write a Python program to find the determinant of a matrix

from array import ArrayType

import numpy as np


def create_line(i: int) -> ArrayType:
    line_i = input(f"Line {i}: ").split()
    return np.array(line_i, dtype=float)


n = int(input("Matrix Dimension: "))
matrix = [create_line(i) for i in range(n)]

print(np.linalg.det(matrix))
```

```r
# Write a R program to find the determinant of a matrix

# Function to find the determinant of a matrix
find_determinant <- function(matrix) {
  # Check if the matrix is square
  if (ncol(matrix) != nrow(matrix)) {
    stop("Matrix must be square to find determinant.")
  }

  # Use the determinant function in base R
  det_value <- det(matrix)

  # Return the determinant value
  return(det_value)
}

# Example usage
matrix_example <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, byrow = TRUE)
result <- find_determinant(matrix_example)

# Print the result
cat("Determinant of the matrix:\n", result, "\n")
```

```ruby
# Write a Ruby program to find the determinant of a matrix

# frozen_string_literal: true

require 'matrix'

def determinant(matrix)
  matrix.determinant
end

if $PROGRAM_NAME == __FILE__
  print 'Dimension : '
  dimension = gets.chomp.to_i
  input_matrix = []
  puts 'Input     :'
  dimension.times do
    input_matrix << gets.chomp.split.map(&:to_i)
  end
  begin
    matrix = Matrix[*input_matrix]
    puts "Output    :\n#{determinant(matrix)}"
  rescue ExceptionForMatrix::ErrDimensionMismatch => e
    puts "Error     : #{e.message}"
  end
end
```

```swift
// Write a Swift program to find the determinant of a matrix

import Foundation

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var determinant = 0, counterForSign = 0

for index in 0..<3 {
    var part1 = matrix[1]
    var part2 = matrix[2]
    part1.remove(at: index)
    part2.remove(at: index)
    let adj = (part1[0] * part2[1]) - (part1[1] * part2[0])
    if (counterForSign == 0) {
        determinant += matrix[0][index] * adj
        counterForSign += 1
    } else {
        determinant -= matrix[0][index] * adj
        counterForSign -= 1
    }
}

print(determinant)
```

```typescript
// Write a TypeScript program to find the determinant of a matrix

const determinant = (m: any[]) =>
  m.length == 1
    ? m[0][0]
    : m.length == 2
      ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
      : m[0].reduce(
          (r: number, e: number, i: number) =>
            r +
            (-1) ** (i + 2) *
              e *
              determinant(
                m.slice(1).map((c: any[]) => c.filter((_, j) => i != j))
              ),
          0
        );

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 0

console.log(determinant(test));
```
