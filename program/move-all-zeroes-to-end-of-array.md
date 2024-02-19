---
title: "Move All Zeroes To End Of Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "dart",
    "go",
    "php",
    "python",
    "r",
  ]
contributors:
  [
    "Parvezkhan0",
    "anandfresh",
    "srini696",
    "chintanrupareliya",
    "srivamsidandu",
    "harshraj8843",
    "Amedi-Imbira",
    "gabinpoa",
    "av-techspot",
    "AlessioBugetti",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-19T07:15:59Z
trackId: 5133
description: "Write a program to move all zeroes to end of array."
---

## Table of contents

## Write a program to move all zeroes to end of array

```
Input  : arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input  : arr[] = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
```

---

### C

```c
// Write a C program to move all zeroes to end of array

#include <stdio.h>

void moveZeroesToEnd(int arr[], int n) {
    int nonZeroIndex = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }


    while (nonZeroIndex < n) {
        arr[nonZeroIndex++] = 0;
    }
}

int main() {
    int arr[] = {1, 0, 4, 2, 0, 5, 0, 3, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    moveZeroesToEnd(arr, n);

    printf("\nArray after moving zeroes to the end: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
```

### C#

```csharp
// Write a C# program to move all zeroes to end of array

using System;
class MoveZeros {
	static void moveZerosToEnd(int[] arr, int n)
	{
	int count = 0;
	for (int i = 0; i < n; i++)
		if (arr[i] != 0)
			arr[count++] = arr[i];

	for (int i = count; i<n;i++)
		arr[i]=0;

	}

	static void printArray(int[] arr, int n)
	{
		for (int i = 0; i < n; i++)
			Console.Write(arr[i] + " ");
	}

	public static void Main()
	{
		int[] arr = { 1, 2, 0, 4, 3, 0, 5, 0 };
		int n = arr.Length;

		Console.Write("Input array: ");
		printArray(arr, n);

		moveZerosToEnd(arr, n);

		Console.Write("\nOutput array: ");
		printArray(arr, n);
	}
}
```

### C++

```cpp
// Write a C++ program to move all zeroes to end of array

#include<iostream>

void moveZeroesToEnd(int arr[], int size) {
    // Initialize a variable to keep track of the position to insert non-zero elements
    int nonZeroIndex = 0;

    // Iterate through the array
    for (int i = 0; i < size; i++) {
        // If the current element is non-zero, move it to the front of the array
        if (arr[i] != 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeroes
    while (nonZeroIndex < size) {
        arr[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
}

// Function to print an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int arr1[] = {1, 2, 0, 4, 3, 0, 5, 0};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {1, 2, 0, 0, 0, 3, 6};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    // Move zeroes to the end of the arrays
    moveZeroesToEnd(arr1, size1);
    moveZeroesToEnd(arr2, size2);

    // Print the modified arrays
    std::cout << "Output 1: ";
    printArray(arr1, size1);

    std::cout << "Output 2: ";
    printArray(arr2, size2);

    return 0;
}
```

### Dart

```dart
// Write a Dart program to move all zeroes to end of array

// Dart program to move all zeroes to end of array

void moveZeroes(List<int> arr) {
  int n = arr.length;

  // Traverse the array and move non-zero elements to the beginning
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  // Fill the remaining positions with zeroes
  while (count < n) {
    arr[count++] = 0;
  }
}

void main() {
  // Test cases
  List<int> arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
  moveZeroes(arr1);
  print('Output for arr1: $arr1'); // Output : [1, 2, 4, 3, 5, 0, 0, 0]

  List<int> arr2 = [1, 2, 0, 0, 0, 3, 6];
  moveZeroes(arr2);
  print('Output for arr2: $arr2'); // Output : [1, 2, 3, 6, 0, 0, 0]
}
```

### F#

```fsharp
// Write a F# program to move all zeroes to end of array

let moveZeroesToEnd (arr : int[]) =
    let mutable index = 0
    let length = Array.length arr

    // Traverse the array and move all non-zero elements to the beginning
    for i = 0 to length - 1 do
        if arr.[i] <> 0 then
            arr.[index] <- arr.[i]
            index <- index + 1

    // Fill the remaining elements with zeroes
    while index < length do
        arr.[index] <- 0
        index <- index + 1

// Example usage:
let arr1 = [|1; 2; 0; 4; 3; 0; 5; 0|]
moveZeroesToEnd arr1
printfn "Output: %A" arr1

let arr2 = [|1; 2; 0; 0; 0; 3; 6|]
moveZeroesToEnd arr2
printfn "Output: %A" arr2
```

### Go

```go
// Write a Go program to move all zeroes to end of array

package main

import "fmt"

func moveZeroesToEnd(arr [16]int) [16]int {
	var nonZeroes []int
	for _, elem := range arr {
		if elem != 0 {
			nonZeroes = append(nonZeroes, elem)
		}
	}

	return [16]int(append(nonZeroes, make([]int, len(arr)-len(nonZeroes))...))
}

func main() {
	var arr = [16]int{0, 1, 0, 0, 2, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 0}
	arr = moveZeroesToEnd(arr)
	fmt.Println(arr)
}
```

### Java

```java
// Write a Java program to move all zeroes to end of array

import java.util.Scanner;

public class MoveAllZeroesToEndOfArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] array = null;
        while (array == null) {
            System.out.println("Enter a list of numbers separated by commas: ");
            String input = scanner.nextLine();
            array = parseInput(input);

            if (array == null) {
                System.err.println("Invalid input. Please enter only integers separated by commas.");
            }
        }

        moveZerosToEnd(array);
        System.out.println("Modified list:");
        printArray(array);

        scanner.close();
    }

    private static int[] parseInput(String input) {
        String[] inputNumbers = input.split(",");
        int[] array = new int[inputNumbers.length];

        try {
            for (int i = 0; i < inputNumbers.length; i++) {
                array[i] = Integer.parseInt(inputNumbers[i].trim());
            }
            return array;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private static void moveZerosToEnd(int[] array) {
        int insertPosition = 0;

        for (int num : array) {
            if (num != 0) {
                array[insertPosition++] = num;
            }
        }

        while (insertPosition < array.length) {
            array[insertPosition++] = 0;
        }
    }

    private static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to move all zeroes to end of array

function moveZeroesToEnd(arr) {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is non-zero, then replace the element at index 'count' with this element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Now all non-zero elements have been shifted to front and 'count' is set as index of first 0. Make all elements 0 from count to end
  while (count < arr.length) {
    arr[count++] = 0;
  }

  return arr;
}

// Test cases
let arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeroesToEnd(arr1)); // Output: [1, 2, 4, 3, 5, 0, 0, 0]

let arr2 = [1, 2, 0, 0, 0, 3, 6];
console.log(moveZeroesToEnd(arr2)); // Output: [1, 2, 3, 6, 0, 0, 0]
```

### PHP

```php
// Write a PHP program to move all zeroes to end of array

<?php
function moveZerosToEnd($arr) {
    $result = array();
    $zeroCount = 0;

    foreach ($arr as $value) {
        if ($value != 0) {
            $result[] = $value;
        } else {
            $zeroCount++;
        }
    }

    for ($i = 0; $i < $zeroCount; $i++) {
        $result[] = 0;
    }

    return $result;
}

echo "Enter array elements separated by space: ";
$input = trim(fgets(STDIN));
$inputArray = explode(" ", $input);

$inputArray = array_map('intval', $inputArray);

$resultArray = moveZerosToEnd($inputArray);
echo "Array after moving zeros to the end: ";
print_r($resultArray);
?>
```

### Python

```python
# Write a Python program to move all zeroes to end of array

def zeroes_to_end(arr: list) -> list:
    result = [x for x in arr if x != 0] + [x for x in arr if x == 0]
    return result

if __name__ == '__main__':
    arr = [1, 2, 0, 4, 3, 0, 5, 0]
    print(zeroes_to_end(arr))
```

### R

```r
# Write a R program to move all zeroes to end of array

moveZeroesToEnd <- function(arr) {
  nonZeroIndex <- 1

  for (i in 1:length(arr)) {
    if (arr[i] != 0) {
      arr[nonZeroIndex] <- arr[i]
      nonZeroIndex <- nonZeroIndex + 1
    }
  }

  for (i in nonZeroIndex:length(arr)) {
    arr[i] <- 0
  }

  return(arr)
}


arr1 <- c(1, 2, 0, 4, 3, 0, 5, 0)
result1 <- moveZeroesToEnd(arr1)
cat("Input  : arr[] =", arr1, "\n")
cat("Output : arr[] =", result1, "\n")

arr2 <- c(1, 2, 0, 0, 0, 3, 6)
result2 <- moveZeroesToEnd(arr2)
cat("Input  : arr[] =", arr2, "\n")
cat("Output : arr[] =", result2, "\n")
```

### Ruby

```ruby
# Write a Ruby program to move all zeroes to end of array

def moveZeros(a)
    len=a.length
    count=0
    for i in 0...len
        if a[i]!=0
            a[count]=a[i]
            count+=1
        end
    end

    while count<len
        a[count]=0
        count+=1
    end
    return a
end

puts moveZeros([1, 2, 0, 4, 3, 0, 5, 0])
```

### TypeScript

```typescript
// Write a TypeScript program to move all zeroes to end of array

function moveZeroesToEnd(arr: number[]): number[] {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the beginning of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }

  // Fill remaining positions with zeroes
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

// Test cases
console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveZeroesToEnd([1, 2, 0, 0, 0, 3, 6])); // Output: [1, 2, 3, 6, 0, 0, 0]
```
