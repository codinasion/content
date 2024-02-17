---
title: "Find Smallest Element In A Matrix"
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
    "Shubham-2110",
    "harshraj8843",
    "vinodr03",
    "anejman",
    "akshithagunupati",
    "bhushanmarathe",
    "anandfresh",
    "vedantpople4",
    "Tushar12222",
    "Sri01729",
    "hi-Kartik2004",
    "Medmly20208",
    "Sdfeagt",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-03T17:59:04Z
trackId: 5121
description: "Write a program to find smallest element in a matrix."
---

## Write a program to find smallest element in a matrix

```
Input :
4 7 3
9 4 2
0 6 4

Output : 0
```

---

```c
// Write a C program to find smallest element in a matrix

#include<stdio.h>
int main()
{
 int i,j,m,n;
 float a[10][10], sm;
 printf("Enter row and column size:\n");
 scanf("%d%d", &m, &n);
 printf("Enter matrix elements:\n");
 for(i=0;i< m;i++)
 {
  for(j=0;j< n;j++)
  {
   printf("a[%d][%d]=",i,j);
   scanf("%f", &a[i][j]);
  }
 }
 sm = a[0][0];
 for(i=0;i< m;i++)
 {
  for(j=0;j< n;j++)
  {
   if(a[i][j]< sm)
   {
    sm = a[i][j];
   }
  }
 }
 printf("Smallest element = %f\n", sm);

}
```

```csharp
// Write a C# program to find smallest element in a matrix

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
class matrix
{
        int[,]x;
        matrix()
        {
            x = new int[,] { { 4, 7, 3 }, { 9, 4, 2 }, { 0, 6, 4 } };
        }
        void printarray()
        {
            Console.WriteLine("Elements in the given Matrix : ");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(x[i, j] + "\t");
                }
                Console.WriteLine("\n");
            }
        }
        int max()
        {
            int small = x[0, 0];
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (small > x[i, j])
                    {
                        small = x[i, j];
                    }
                }
            }
            return small;
        }
        public static void Main()
        {
            matrix obj = new matrix();
            obj.printarray();
            Console.WriteLine("Smallest Element in the Matrix : {0}", obj.max());
            Console.ReadLine();
        }
 }
```

```cpp
// Write a C++ program to find smallest element in a matrix

// programme to find the smallest element of the inputted matrix
#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){

    // Taking the input of count of rows and columns;
    ll a,b;
    cout<<"Enter the number of rows of the matrix :";
    cin>>a;
    cout<<"Enter the number of columns of the matrix :";
    cin>>b;

    // Taking the matrix element inputs;
    ll arr[a][b];
    for(ll i=0;i<a;i++){
        for(ll j=0;j<b;j++){
            cin>>arr[i][j];
        }
    }

    // Finding the smallest element in the matrix;
    ll mini = INT_MAX;
    for(ll i=0;i<a;i++){
        for(ll j=0;j<b;j++){
            if(arr[i][j]<mini){
                mini = arr[i][j];
            }
        }
    }


    //Printing the result
    cout<<"The smallest element of the inputted "<<a<<"X"<<b<<" matrix is : "<<mini<<endl;
    return 0;
}
```

```dart
// Write a Dart program to find smallest element in a matrix

void smallestInMatrix(List<List<int>> mat){
  int smallest = mat[0][0];
  for(var i = 0 ; i < mat.length ; i++){
    for(var j = 0 ; j < mat[i].length ; j++){
      if(mat[i][j] < smallest){
        smallest = mat[i][j];
      }
    }
  }
  print(smallest);
}

void main() {
  smallestInMatrix([[1,2,3,4,5],[0,-1,-6,-9,0]]);
}
```

```fsharp
// Write a F# program to find smallest element in a matrix

let findSmallestElement (matrix: int[][]) =
    let numRows = matrix.Length
    let numCols = matrix.[0].Length

    let mutable smallest = matrix.[0].[0]

    for i in 0 .. numRows - 1 do
        for j in 0 .. numCols - 1 do
            if matrix.[i].[j] < smallest then
                smallest <- matrix.[i].[j]

    smallest

// Example usage
let matrix : int[][] = [|
    [|4; 7; 3|];
    [|9; 4; 2|];
    [|0; 6; 4|];
|]

let smallestElement = findSmallestElement matrix
printfn "The smallest element in the matrix is: %d" smallestElement
```

```go
// Write a Go program to find smallest element in a matrix

package main

import (
	"fmt"
	"math/rand"
)

func makematrix(size int) [][]int {
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
		fmt.Println(m[i], " ")
	}
	return m
}

func main() {
	var size int
	fmt.Scanf("%d", &size)
	x := makematrix(size)
	var mini int
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if x[i][j] < mini {
				mini = x[i][j]
			}
		}
	}
	fmt.Println(mini)

}
```

```java
// Write a Java program to find smallest element in a matrix

import java.util.Scanner;

public class FindSmallestElementInAMatrix {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        int i, j, k =0;
        int smallest = 0;
        int arr[][] = new int[3][3];
        System.out.println("Enter the input values");
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                arr[i][j] = scnr.nextInt();
            }
        }
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (j == 0 && i == 0) {
                    k = arr[0][0];
                    continue;
                }
                if (k < arr[i][j]) {
                    smallest = k;
                }
                else {
                    smallest = arr[i][j];
                }
                k = smallest;
            }
        }
        System.out.println(smallest);
    }
}
```

```javascript
// Write a JavaScript program to find smallest element in a matrix

const smallestElementInMatrix = matrix => {
  let small = matrix[0][0];
  matrix.forEach(arr => {
    if (small > Math.min(...arr)) {
      small = Math.min(...arr);
    }
  });
  return small;
};

console.log(
  smallestElementInMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
```

```julia
# Write a Julia program to find smallest element in a matrix

function find_smallest_element(matrix)
    min_val = minimum(matrix)
    return min_val
end

# Example matrix
matrix = [4 7 3;
          9 4 2;
          0 6 4]

smallest_element = find_smallest_element(matrix)
println("The smallest element in the matrix is: ", smallest_element)
```

```kotlin
// Write a Kotlin program to find smallest element in a matrix

fun main() {
    println("Enter the number of rows: ")
    val rows = readLine()?.toIntOrNull() ?: 0

    if (rows <= 0) {
        println("Invalid number of rows.")
        return
    }

    println("Enter the number of columns: ")
    val columns = readLine()?.toIntOrNull() ?: 0

    if (columns <= 0) {
        println("Invalid number of columns.")
        return
    }

    val matrix = Array(rows) { IntArray(columns) }

    println("Enter the elements of the matrix:")
    for (i in 0 until rows) {
        for (j in 0 until columns) {
            matrix[i][j] = readLine()?.toIntOrNull() ?: 0
        }
    }

    val smallestElement = findSmallestElement(matrix)

    println("Smallest Element in the Matrix: $smallestElement")
}

fun findSmallestElement(matrix: Array<IntArray>): Int {
    if (matrix.isEmpty() || matrix[0].isEmpty()) {
        return 0
    }

    var smallest = matrix[0][0]

    for (row in matrix) {
        for (element in row) {
            if (element < smallest) {
                smallest = element
            }
        }
    }

    return smallest
}
```

```perl
# Write a Perl program to find smallest element in a matrix

#!/usr/bin/perl
use strict;
use warnings;
use List::Util qw(min max);
my @items = ( [4, 7, 3],
              [9, 4, 2],
              [0, 6, 4] );

my @min_array = ();
push (@min_array, min(@{$items[0]}));
push (@min_array, min(@{$items[1]}));
push (@min_array, min(@{$items[2]}));
print min(@min_array), "\n";
```

```php
// Write a PHP program to find smallest element in a matrix

<?php

function smallestElementInMatrix($matrix) {
  $small = $matrix[0][0];
  foreach($matrix as $arr) {
    if($small > min($arr))
        $small = min($arr);
 }
return $small;
}


echo smallestElementInMatrix([[1,2,3],[4,5,6],[7,8,9]])

?>
```

```python
# Write a Python program to find smallest element in a matrix

# smallest element in a matrix


def findSmallestElementInAMatrix(matrix):
    smallestElement = min(matrix[0])

    for i in range(1, len(matrix)):
        if min(matrix[i]) < smallestElement:
            smallestElement = min(matrix[i])

    return smallestElement


if __name__ == "__main__":
    print(findSmallestElementInAMatrix([[10, 222, 43], [0, -15, 336], [437, 854, 49]]))
```

```r
# Write a R program to find smallest element in a matrix

# Function to find the smallest element in a matrix
find_smallest_element <- function(matrix_data) {
  min_value <- min(matrix_data)
  return(min_value)
}

# User input for matrix dimensions
rows <- as.integer(readline(prompt = "Enter the number of rows: "))
cols <- as.integer(readline(prompt = "Enter the number of columns: "))

# Create an empty matrix to store user input
matrix_input <- matrix(0, nrow = rows, ncol = cols)

# Input matrix elements
for (i in 1:rows) {
  for (j in 1:cols) {
    matrix_input[i, j] <- as.integer(readline(prompt = paste("Enter element at [", i, ",", j, "]: ")))
  }
}

# Display input matrix
cat("Entered matrix:\n")
print(matrix_input)

# Find the smallest element in the matrix
smallest_element <- find_smallest_element(matrix_input)

# Display the smallest element
cat("\nThe smallest element in the matrix is:", smallest_element, "\n")
```

```ruby
# Write a Ruby program to find smallest element in a matrix

puts [[4, 7, 3], [9, 4, 2], [0, 6, 4]].flatten.min
```

```rust
// Write a Rust program to find smallest element in a matrix

fn main(){
    let mat = vec![
                    vec![67,28,33],
                    vec![44,15,19],
                    vec![7,58,29],];
    let mut small = i32::MAX;
    for row in mat{
        for num in row{
           if num < small {
               small = num;
           }
        }
    }
    println!("{small}");
}
```

```swift
// Write a Swift program to find smallest element in a matrix

import Foundation
/*
This Swift program computes the smallest element in a matrix entered by the user.
The user is prompted to specify the number of rows and columns for the matrix and then input all matrix elements in a single row, separated by spaces.
The program validates the input, constructs the matrix, and calculates the smallest element within it. Upon completion, the program immediately displays the smallest element found.
This straightforward implementation serves as an example of user-input handling, matrix creation, and basic element processing in Swift.

Sample Input:
Enter the number of rows:
2
Enter the number of columns:
3
Enter all elements of the matrix separated by spaces:
4 7 3 9 4 2

Sample Output:
Smallest Element in the Matrix: 2

*/

// Function to find the smallest element in a matrix
func findSmallestElement(matrix: [[Int]]) -> Int? {
    guard let firstRow = matrix.first, !firstRow.isEmpty else {
        return nil
    }

    var smallest = firstRow[0]

    for row in matrix {
        for element in row {
            if element < smallest {
                smallest = element
            }
        }
    }

    return smallest
}

// Read the number of rows and columns
print("Enter the number of rows:")
guard let rows = Int(readLine() ?? ""), rows > 0 else {
    print("Invalid input for the number of rows.")
    exit(1)
}

print("Enter the number of columns:")
guard let columns = Int(readLine() ?? ""), columns > 0 else {
    print("Invalid input for the number of columns.")
    exit(1)
}

// Read all matrix elements in a single row
print("Enter all elements of the matrix separated by spaces:")
guard let input = readLine(), !input.isEmpty else {
    print("Invalid input for matrix elements.")
    exit(1)
}

// Parse the input and create the matrix
let elements = input.components(separatedBy: " ").compactMap { Int($0) }
guard elements.count == rows * columns else {
    print("Invalid number of elements.")
    exit(1)
}

var matrix = [[Int]]()
for i in 0..<rows {
    matrix.append(Array(elements[i * columns..<(i + 1) * columns]))
}

// Find and print the smallest element
if let smallestElement = findSmallestElement(matrix: matrix) {
    print("Smallest Element in the Matrix: \(smallestElement)")
} else {
    print("The matrix is empty.")
}
```

```typescript
// Write a TypeScript program to find smallest element in a matrix

const FindSmallestElementInAMatrix = (matrix: number[][]): number => {
  let currSmall: number = matrix[0][0];
  matrix.forEach(arr => {
    if (currSmall > Math.min(...arr)) {
      currSmall = Math.min(...arr);
    }
  });
  return currSmall;
};

FindSmallestElementInAMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(
  FindSmallestElementInAMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  FindSmallestElementInAMatrix([
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ])
);
console.log(
  FindSmallestElementInAMatrix([
    [10, 222, 43],
    [0, 15, 336],
    [437, 854, 49],
  ])
);
```
