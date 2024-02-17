---
title: "Implement Linear Search"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
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
    "python",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "SaifullahBijapur",
    "MohitKambli",
    "srivamsidandu",
    "Murgowt",
    "PunugupatiSaikumar",
    "DaniilKarpushko",
    "Redzwinger",
    "DH4NRAJ",
    "joenjogu",
    "Amedi-Imbira",
    "SnailDragon",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-17T16:29:22Z
trackId: 5289
description: "Write a program to implement linear search."
---

## Write a program to implement linear search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

Linear search is the simplest search algorithm. For this reason, it is often called sequential search.

### Pseudocode

```text
procedure linear_search (list, value)

   for each item in the list
      if match item == value
         return the item's location
      end if
   end for

end procedure
```

### Example

```text
list = [1,2,3,4,5]
value = 4

Output : 3
```

---

```c
// Write a C program to implement linear search

#include <stdio.h>

int linear_search(int list[], int listSize, int thingToBeFound)
{
    for (int i = 0; i < listSize; i++)
    {
        if (list[i] == thingToBeFound)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int sizeOfARay = sizeof(ARay) / sizeof(ARay[0]);

    int FindThis = 4;
    int foundIT = linear_search(ARay, sizeOfARay, FindThis);

    if (foundIT != -1)
    {
        printf("Element Found! Element %d was found at index %d.\n", FindThis, foundIT);
    }
    else
    {
        printf("ERROR! Element %d was not found in the list.\n", FindThis);
    }

    return 0;
}

/* Calmly Crafted By Redzwinger */
```

```csharp
// Write a C# program to implement linear search

﻿using System;

namespace Test
{
    internal class Program
    {
        /*
                Input data:
                key
                array size
                array data
            */
        public static void Main(string[] args)
        {
            int key = Convert.ToInt32(Console.ReadLine());
            int size = Convert.ToInt32(Console.ReadLine());
            int[] arr = new int[size];

            for(int i = 0; i < size; ++i)
            {
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            int res = LinearSearch(arr, key);

            if (res != -1)
            {
                Console.WriteLine($"Element found with index {res}");
            }
            else
            {
                Console.WriteLine("Element does not exist");
            }
        }

        public static int LinearSearch(int[] arr, int key)
        {
            for(int i = 0; i < arr.Length; ++i )
            {
                if (arr[i] == key)
                {
                    return i;
                }
            }

            return -1;
        }
    }
}
```

```cpp
// Write a C++ program to implement linear search

#include <vector>

template <typename T>
int linear_search(std::vector<T> list, T val){
    for(int i = 0; i < list.size(); i++){
        if(list.at(i) == val){
            return i;
        }
    }
    return -1;
};
```

```dart
// Write a Dart program to implement linear search

import 'dart:io';

int linearSearch(List<int> list, int value) {
  for (int i = 0; i < list.length; i++) {
    if (list[i] == value) {
      return i; // Return the index of the found item
    }
  }
  return -1; // Return -1 if the value is not found in the list
}

void main() {
  print("Enter integers for the list separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> list = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  print("Enter the value to search:");
  int value = int.tryParse(stdin.readLineSync() ?? '') ?? 0;

  int result = linearSearch(list, value);

  if (result != -1) {
    print("Value $value found at index $result.");
  } else {
    print("Value $value not found in the list.");
  }
}
```

```go
// Write a Go program to implement linear search

package main

import "fmt"

func main() {
	var index = linearSearch([5]int{1, 2, 3, 4, 5}, 4)
	fmt.Println(index)
}

func linearSearch(array [5]int, target int) int {
	for i := 0; i < len(array); i++ {
		if array[i] == target {
			return i
		}
	}
	return -1
}
```

```java
// Write a Java program to implement linear search

public class ImplementLinearSearch {

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int index = linearSearch(array, 4);
        System.out.println(index);
    }

    private static int linearSearch(int[] array, int target) {
        if (array.length > 0) {
            for (int i = 0; i < array.length; i++) {
                if (array[i] == target) return i;
            }
        }
        return -1;
    }
}
```

```javascript
// Write a JavaScript program to implement linear search

const S = [1, 2, 3, 4, 5];
target = 56;

const search = linear_search(S, target);

console.log(search);

function linear_search(seq, target) {
  for (let i in seq) {
    if (seq[i] == target) return i;
  }

  return -1;
}
```

```julia
# Write a Julia program to implement linear search

function linear_search(arr, target)
    for (index, value) in enumerate(arr)
        if value == target
            return index
        end
    end
    return -1  # If target not found
end


# Example showing the implementation of linear search
data = [1, 3, 5, 7, 9, 11, 13, 15]
target_value = 7


result = linear_search(data, target_value)

if result != -1
    println("Target value $target_value found at index $result.")
else
    println("Target value $target_value not found in the given array.")
end
```

```kotlin
// Write a Kotlin program to implement linear search

fun main() {
    val index = linearSearch(arrayOf(1,2,3,4,5,6,7,8,9,10), 9)
    println(index)
}

fun linearSearch(array: Array<Int>, value: Int): Int {
    for (item in array) {
        if (item == value) return array.indexOf(item)
    }
    return -1
}
```

```php
// Write a PHP program to implement linear search

<?php
function linear_search($list, $value) {
    $length = count($list);
    for ($i = 0; $i < $length; $i++) {
        if ($list[$i] == $value) {
            return $i; // Found the value, return its location/index
        }
    }
    return -1; // Value not found in the list
}

// Prompt the user to enter a list of numbers separated by spaces
echo "Enter a list of numbers separated by spaces: ";
$input = trim(fgets(STDIN));
$list = explode(' ', $input);

// Prompt the user to enter the value to search for
echo "Enter the value to search for: ";
$searchValue = trim(fgets(STDIN));

$result = linear_search($list, $searchValue);

if ($result != -1) {
    echo "Value $searchValue found at index $result";
} else {
    echo "Value $searchValue not found in the list";
}
?>
```

```python
# Write a Python program to implement linear search

def main() -> None:
      """ Python program to implement linear search """
      S = [1, 2, 3, 4, 5]           # Test cases
      value = 4


      search = linear_search(S, value)

      if search == -1:
            print('Element not found')
      else:
            print(f'Element found at index {search}')


def linear_search(seq: list[int | str], value: int | str) -> int:
      """ Linear search function

      Args:
          seq (_type_): sequence within to perform the search
          value (_type_): value to be searched

      Returns:
          int: index (location of value)
      """
      for j in range(len(seq)):
            if seq[j] == value:
                  return j
      return -1

if __name__ == '__main__':
      main()
```

```ruby
# Write a Ruby program to implement linear search

#Program to Implement Linear Search in Ruby


def linear_search(array, target)

    #Function to implement Linear Search
    #Arguments:
    #    array  :- Array of elements to search in.
    #    target :- Target value to be searched in the array.

    array_length = array.length()
    for index in 0...array_length do
        if(array[index]==target)
            return index
        end
    end

    # -1 indicates that the target value does not exist in the array
    return -1
end


#Test Case
array = Array.[](1,2,3,4,5)
target = 4
search_result = linear_search(array, target)

if(search_result == -1)
    puts " The target value is not in the array"
else
    puts " The target value is at the index : #{search_result}"
end
```

```rust
// Write a Rust program to implement linear search

fn linear_search<T: PartialEq>(list: &[T], target: T) -> Option<usize> {
    for (index, item) in list.iter().enumerate() {
        if item == &target {
            return Some(index);
        }
    }
    None
}

fn main() {
    let elements = vec![1, 2, 3, 4, 5];
    let target = 4;

    match linear_search(&elements, target) {
        Some(index) => println!("Found the element {} at index {}", target, index),
        None => println!("Element {} not found in the list", target),
    }
}
```

```swift
// Write a Swift program to implement linear search

import Foundation

func linearSearch(_ list: [Int], _ value: Int) -> Int? {
    for (index, item) in list.enumerated() {
        if item == value {
            return index
        }
    }
    return nil
}

// Function to read a line of input and convert it to an integer array
func readIntArray() -> [Int] {
    let input = readLine() ?? ""
    return input.split(separator: " ").compactMap { Int($0) }
}

// Read the list of numbers from the user
print("Enter a list of numbers separated by spaces:")
let numbers = readIntArray()

// Read the value to search for
print("Enter the number to search for:")
guard let valueToSearch = Int(readLine() ?? "") else {
    print("Invalid input for the number to search for.")
    exit(1)
}

// Perform linear search
if let foundIndex = linearSearch(numbers, valueToSearch) {
    print("Value \(valueToSearch) found at index \(foundIndex)")
} else {
    print("Value \(valueToSearch) not found in the list")
}
```

```typescript
// Write a TypeScript program to implement linear search

console.log(LinearSearch([6, 56, 98, 12], 98));

function LinearSearch(sequence: number[], target: number): number {
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] == target) {
      return j; // Target found !
    }
  }
  return -1; // Target not found
}
```
