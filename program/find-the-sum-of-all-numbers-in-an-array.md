---
title: "Find The Sum Of All Numbers In An Array"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "typescript",
    "dart",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "Tushar12222",
    "pokharel-nishan",
    "jfinley6",
    "joao-vitor-souza",
    "Shivaraj21",
    "rahmat-dev",
    "Ladam0203",
    "GodWin1100",
    "25011908vardhan",
    "PoweredByCaffein",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-23T09:20:19Z
trackId: 2253
description: "Write a program to find the sum of all numbers in an array."
---

## Write a program to find the sum of all numbers in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 15
```

---

```c
// Write a C program to find the sum of all numbers in an array

#include <stdio.h>

int main()
{
    int size, sum = 0;

    printf("Enter the size of an array   :   ");
    scanf("%i", &size);

    int array[size];

    for (int i = 0; i < size; i++){
        printf("Enter elements  %i  :   ", i+1);
        scanf("%i", &array[i]);
        sum += array[i];
    }

    printf("Sum of all numbers in array :   %i", sum);


    return 0;
}
```

```csharp
// Write a C# program to find the sum of all numbers in an array

using System;
public class SumOfArray
{
    public static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        int sum = 0;
        Array.ForEach(array, i => sum += i);
        Console.WriteLine(sum);
    }
}
```

```cpp
// Write a C++ program to find the sum of all numbers in an array

#include <iostream>

using namespace std;

int main()
{

    int size;
    cout << "Enter the size of array -> ";
    cin >> size;

    int arr[size];
    int temp = size;
    cout << "Enter the elements of array -> \n";
    int i = 0;
    while (temp--)
    {
        cin >> arr[i];
        i++;
    }
    int sum = 0;
    i = 0;

    while (size--)
    {
        sum += arr[i];
        i++;
    }

    cout << "Sum of all numbers in array is -> " << sum << endl
         << endl;

    return 0;
}
```

```dart
// Write a Dart program to find the sum of all numbers in an array

void sumOfArray(List<int> arr){
  int sum = 0;
  for(var i = 0 ; i < arr.length ; i++){
    sum += arr[i];
  }
  print(sum);
}

void main() {
  sumOfArray([1,3,4,5,10]);
}
```

```go
// Write a Go program to find the sum of all numbers in an array

package main
import "fmt"

func main()  {
	array := []int{1,2,3,4,5}
	fmt.Println(SumOfArray(array))
}

func SumOfArray(array []int) int {
	sum := 0
	for i := 0; i < len(array); i++ {
		sum += array[i]
	}
	return sum
}
```

```java
// Write a Java program to find the sum of all numbers in an array

import java.util.Scanner;

public class FindSumOfAllNumbers {
    public static void main(String[] args) {
        int n, sum = 0;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array");
        n = sc.nextInt();

        System.out.println("Enter the array elements");
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("Sum of all numbers in an array = " + sum);
    }
}
```

```javascript
// Write a JavaScript program to find the sum of all numbers in an array

/**
 * Return sum of all the numbers in array
 * @param {Array} arr Array of numbers
 * @returns {number} sum of array
 */
const getArraySum = arr => {
  if (!Array.isArray(arr)) throw "Parameter should be typeof an Array";
  return arr.reduce((acc, e, i) => {
    if (typeof e !== "number")
      throw `Element${e} at Index ${i}: is not an number`;
    return e + acc;
  }, 0);
};

try {
  console.log(getArraySum([1, 2, 3, 4, 5]));
} catch (e) {
  console.log(e);
}
try {
  console.log(getArraySum([1, 2, 3, "a", 5]));
} catch (e) {
  console.log(e);
}
try {
  console.log(getArraySum(0));
} catch (e) {
  console.log(e);
}
```

```kotlin
// Write a Kotlin program to find the sum of all numbers in an array

// #1 - using built-in function
fun findTheSumOfAllNumbersInAnArray1(numbers: Array<Int>): Int = numbers.sum()

// #2 - using looping
fun findTheSumOfAllNumbersInAnArray2(numbers: Array<Int>): Int {
	var total = 0

	for (number in numbers) {
		total += number
	}

	return total
}

fun main() {
	val inputs = arrayOf<Int>(1, 2, 3, 4, 5)
	// println(findTheSumOfAllNumbersInAnArray1(inputs))
	println(findTheSumOfAllNumbersInAnArray2(inputs))
}
```

```perl
# Write a Perl program to find the sum of all numbers in an array

my $array = [1, 2, 3, 4, 5];
my $iter_sum = 0;
for my $each (@$array) {
    $iter_sum += $each;
}
print $iter_sum;
```

```php
// Write a PHP program to find the sum of all numbers in an array

<?php

$array = readline("Enter the array elements separated by space: ");

$array = explode(" ", $array);
$result = 0;
foreach ($array as $v) {
    $result += $v;
}
echo "Sum of all elements of the array: " ,$result . "\n";
```

```python
# Write a Python program to find the sum of all numbers in an array

print(
    "Sum of all numbers:",
    sum([int(input()) for _ in range(int(input("How many numbers: ")))]),
)
```

```ruby
# Write a Ruby program to find the sum of all numbers in an array

#Programme to find the sum of all numbers in an array....

def findTheSumOfAllNumbersInAnArray numArray
    puts numArray.sum
end

findTheSumOfAllNumbersInAnArray [1,2,3,4,5]
```

```typescript
// Write a TypeScript program to find the sum of all numbers in an array

function findSumOfAllNumbersInAnArray(...args: Array<number>) {
  const numbers = [...args];
  let sum = 0;
  for (const x of numbers) {
    sum = sum + x;
  }

  return sum;
}
```
