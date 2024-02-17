---
title: "Find The Trace Of A Matrix"
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
    "haskell",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "lookwhoshere99",
    "anandfresh",
    "ErnaneJ",
    "rajatpandey441",
    "pedram-mohajer",
    "moaldeen",
    "harshraj8843",
    "vedantpople4",
    "abhisek-1221",
    "askawron",
    "tom-laplace",
    "joao-vitor-souza",
    "codingkush",
    "arkbuilder117",
    "savi001",
    "Dhana-s",
    "BiscuitCandy",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-15T04:20:03Z
trackId: 4589
description: "Write a program to find the trace of a matrix."
---

## Write a program to find the trace of a matrix

The trace of a square matrix is the sum of the elements on the main diagonal (from the upper left to the lower right).

```
Input  :
1 2 3
4 5 6
7 8 9

Output :
15
```

---

```c
// Write a C program to find the trace of a matrix

#include <stdio.h>

int main()

{

	int i, j, rows, columns, trace = 0;

	printf("Enter Matrix Rows and Columns =  ");

	scanf("%d %d", &rows, &columns);

	int Tra_arr[rows][columns];

	printf("Please Enter the Matrix Items =  \n");

	for (i = 0; i < rows; i++)

	{

		for (j = 0; j < columns; j++)

		{

			scanf("%d", &Tra_arr[i][j]);

		}

	}

	for (i = 0; i < rows; i++)

	{

		for (j = 0; j < columns; j++)

		{

			if (i == j)

			{

				trace = trace + Tra_arr[i][j];

			}

		}

	}

	printf("The Trace Of the Matrix = %d\n", trace);

}
```

```csharp
// Write a C# program to find the trace of a matrix

using System;

class Matrix {

    static int findNormal(int [,]mat, int n)
    {
        int sum = 0;

        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                sum += mat[i,j] * mat[i,j];

        return (int)Math.Sqrt(sum);
    }


    static int findTrace(int [,]mat, int n)
    {
        int sum = 0;

        for (int i = 0; i < n; i++)
            sum += mat[i,i];

        return sum;
    }

    public static void Main ()
    {
        int [,]mat = { {1, 2, 3},
                       {4, 5, 6},
                       {7, 8, 9},
    };

    Console.Write ("Trace of Matrix = "+ findTrace(mat, 3) + "\n");


    }
}
```

```cpp
// Write a C++ program to find the trace of a matrix

#include <iostream>

using namespace std;

int main()

{

    int i , j , sum = 0 , a[3][3] ;

    cout << "Trace matrix in 2D array " << endl ;

    cout << "Enter Array Elements : " << endl ;

    // loop for taking inputs in array

    for (i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

            cin >> a[i][j] ;

        }

    }

    // loop for printing array elements

     for (i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

           cout <<  a[i][j]  << " ";

        }

        cout << endl ;

    }

    //loop for finding trace of matrix

    for(i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

            if (i==j)

            {

                sum+=a[i][j] ;

            }

        }

    }

    cout << "Trace of matrix : " << sum << endl ;

    return 0;

}
```

```dart
// Write a Dart program to find the trace of a matrix

import 'dart:io';

void main() {
  int n;
  print("Enter the number of rows and columns of matrix:");
  n = int.parse(stdin.readLineSync()!);
  List<List<int>> matrix = List.generate(n, (_) => List.filled(n, 0));
  print("Enter the elements of matrix:");
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      matrix[i][j] = int.parse(stdin.readLineSync()!);
    }
  }
  int trace = 0;
  for (int i = 0; i < n; i++) {
    trace += matrix[i][i];
  }
  print("Trace of matrix is $trace");
}
 /* Output :
Enter the number of rows and columns of matrix:
3
Enter the elements of matrix:
1
2
3
4
5
6
7
8
9
Trace of matrix is 15.
*/
```

```fsharp
// Write a F# program to find the trace of a matrix

// Define a function to calculate the trace of a square matrix
let trace (matrix: int[,]) =
    // Get the size of the matrix
    let size = matrix.GetLength(0)
    // Initialize the sum to zero
    let mutable sum = 0
    // Loop through the diagonal elements
    for i in 0 .. size - 1 do
        // Add the element to the sum
        sum <- sum + matrix.[i, i]
    // Return the sum
    sum

// Define a sample matrix
let matrix = array2D [[1; 2; 3]; [4; 5; 6]; [7; 8; 9]]

// Print the matrix
printfn "Input:\n%A" matrix

// Call the trace function and print the result
printfn "Output:\n%d" (trace matrix)
```

```go
// Write a Go program to find the trace of a matrix

package main

import (
	"fmt"
	"math/rand"
)

func main() {
	var size int
	fmt.Scanf("%d", &size)
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
	}
	fmt.Println(m)
	ans := 0
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if i == j {
				ans += m[i][j]
			}
		}
	}
	fmt.Println(ans)
}
```

```haskell
-- Write a Haskell program to find the trace of a matrix

main :: IO ()
main = do
    putStrLn "Enter the 3x3 matrix elements separated by spaces:"
    matrix <- readMatrix
    let traceValue = trace matrix
    putStrLn $ "Trace of the matrix is: " ++ show traceValue

readMatrix :: IO [[Int]]
readMatrix = sequence $ replicate 3 readRow

readRow :: IO [Int]
readRow = map read . words <$> getLine

trace :: [[Int]] -> Int
trace matrix = sum $ zipWith (!!) matrix [0..]
```

```java
// Write a Java program to find the trace of a matrix

import java.util.Scanner;

public class FindTheTraceOfAMatrix {
  private static Scanner scanner_input;

  public static void main(String[] args) {

    int i = 0, j, dimension, trace = 0;
    scanner_input = new Scanner(System.in);
    System.out.print("Enter Matrix Dimension:  ");
    dimension = scanner_input.nextInt();
    int[][] matrix_array = new int[dimension][dimension];
    System.out.println("Enter the Matrix Items:  ");
    while (i < dimension) {
      j = 0;
      while (j < dimension) {
        matrix_array[i][j] = scanner_input.nextInt();
        j++;
      }
      i++;
    }

    i = 0;
    while (i < dimension) {
      j = 0;
      while (j < dimension) {
        if (i == j) {
          trace = trace + matrix_array[i][j];
        }
        j++;
      }
      i++;
    }
    scanner_input.close();
    System.out.println("\nThe Trace Of the Matrix is :  " + trace);

  }
}
```

```javascript
// Write a JavaScript program to find the trace of a matrix

import * as readLine from "readline";

let arr = [];

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const takeInput = () => {
  rl.question("", line => {
    if (line.length == 0) {
      rl.close();
      console.log(findTrace(arr));
      return;
    }
    let row = line.split(" ");
    arr.push(row);
    takeInput();
  });
};

const findTrace = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += parseInt(arr[i][i]);
  }
  return total;
};

console.log("Input:");
takeInput();
```

```julia
# Write a Julia program to find the trace of a matrix

using LinearAlgebra
A = [1 2 3; 4 5 6; 7 8 9]
println(tr(A))
```

```php
// Write a PHP program to find the trace of a matrix

//To find Trace of the given matrix
<html>
<head>
<title>PHP Program To find Trace of the given matrix</title>
</head>
<body>
<?php
// Elements of matrix a
$a = array
(
array(1, 2, 3),
array(4, 5, 6),
array(7, 8, 9)
);
$n = count($a);
$sum = 0;
//Initially sum declare with 0;
echo("Original matrix is: </br>");
// To print Original matrix
for($i = 0; $i < $n; $i++)
{
for($j = 0; $j < $n; $j++)
{
echo ($a[$i][$j] . " " );
}
echo("<br>");
}
//Calculates trace of given matrix
for($i = 0; $i < $n; $i++)
{
$sum = $sum + $a[$i][$i];
// To add diagonal elements a[0][0],a[1]a[1]
}
echo "Trace of the given matrix is: ".$sum;
?>
</body>
</html>
```

```python
# Write a Python program to find the trace of a matrix

arr = []

try:
    while True:
        arr.append(list(map(int, input().split())))
except:
    pass

sm = 0

for i in range(len(arr)):
    sm += arr[i][i]

print(sm)
```

```r
# Write a R program to find the trace of a matrix

trace_matrix <- function(input)
{
  dim_input = dim(input)

  #Check that input is a square matrix
  if(dim_input[1] != dim_input[2]){
    stop("Input is not a square matrix")
    return()
  }

  output = 0
  for (i in c(1:dim_input[1])) {
    output <- output + input[i,i]
  }

  return(output)
}

a = matrix(data = c(1,2,3,4,5,6,7,8,9),nrow = 3, ncol = 3)
b = trace_matrix(a)
print(b)

a1 = matrix(data = c(1,2,3,4,5,6),nrow = 3, ncol = 2)
b1 = trace_matrix(a1)#Should return an error
```

```ruby
# Write a Ruby program to find the trace of a matrix

############################################
# Program: FindTheTraceOfAMatrix.rb.rb
# Author: github.com/ErnaneJ
# Created At: December 7, 2023
############################################

def matrix_trace(matrix)
  size = matrix.length
  unless matrix.all? { |row| row.is_a?(Array) && row.length == size }
    raise "Error: The matrix is ​​not square."
  end

  (0...size).map{|i| matrix[i][i] }.sum # Calculate the trace of the matrix
end
```

```rust
// Write a Rust program to find the trace of a matrix

fn main() {
    let mat = vec![vec![1,2,3],
                  vec![4,5,6],
                  vec![7,8,9],
                  ];
    let mut sum = 0;
    let rows = mat[0].len();
    for i in 0..rows {
        sum += mat[i][i];
    }
    println!("{sum}");
}
```

```scala
// Write a Scala program to find the trace of a matrix

object MatrixTrace {
  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1, 2, 3),
      Array(4, 5, 6),
      Array(7, 8, 9)
    )

    val trace = calculateTrace(matrix)
    println(s"The trace of the matrix is: $trace")
  }

  def calculateTrace(matrix: Array[Array[Int]]): Int = {
    (0 until matrix.length).map(i => matrix(i)(i)).sum
  }
}
```

```swift
// Write a Swift program to find the trace of a matrix

import Foundation

func traceOfMatrix(_ matrix: [[Int]]) -> Int {
    var trace = 0

    for i in 0..<matrix.count {
        trace += matrix[i][i]
    }

    return trace
}

// Example matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Calculate and print the trace
let trace = traceOfMatrix(matrix)
print("Trace of the matrix: \(trace)")
```

```typescript
// Write a TypeScript program to find the trace of a matrix

function trace(matrix: number[][]): number {
  let trace = 0;
  for (let i = 0; i < matrix.length; i++) {
    trace += matrix[i][i];
  }
  return trace;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(trace(matrix)); // Output: 15
```
