---
title: "Find Largest And Smallest Numbers In An Array"
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
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "pelegsch666",
    "jfinley6",
    "joao-vitor-souza",
    "neelesh08",
    "rahmat-dev",
    "MadhuS-1605",
    "ArinCodes",
    "destroyer5067",
    "GamerCreator1",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-02-04T17:46:20Z
trackId: 2224
description: "Write a program to find largest and smallest numbers in an array."
---

## Write a program to find largest and smallest numbers in an array

```
Input  : [1, 2, 3, 4, 5]
Output : 5, 1
```

---

```c
// Write a C program to find largest and smallest numbers in an array

#include<stdio.h>
#include<stdlib.h>




int main()
{
    int n , largest , smallest;
    printf("Enter the number of elements in array");
    scanf("%d", &n);

    int array[n];
    printf("Enter the elememts");
    for(int i=0;i<n;i++)
    {
        scanf("%d", &array[i]);
    }

    // edge case
    if( n == 0)
    {
        printf("No elements in array");
        exit(0);
    }


    largest = array[0];
    smallest = array[0];

    for(int i=0;i<n;i++)
    {
        // condition to largest element
        if(array[i] > largest)
            largest = array[i];

        // condition to smallest element
        if(array[i] < smallest)
            smallest = array[i];

    }

    printf("%d %d", largest , smallest);
    return 0;
}
```

```csharp
// Write a C# program to find largest and smallest numbers in an array

using System;
namespace LargestAndSmallest
{
    class Program
    {
        public static void Main()
        {
            int n;
            float large, small;
            int[] a = new int[50];
            Console.WriteLine("Enter the size of Array");
            string s = Console.ReadLine();
            n = Int32.Parse(s);
            Console.WriteLine("Enter the array elements");
            for (int i = 0; i < n; i++)
            {
                string s1 = Console.ReadLine();
                a[i] = Int32.Parse(s1);
            }
            Console.Write("");
            large = a[0];
            small = a[0];
            for (int i = 1; i < n; i++)
            {
                if (a[i] > large)
                    large = a[i];
                else if (a[i] < small)
                    small = a[i];
            }
            Console.WriteLine("Largest element in the array is {0}", large);
            Console.WriteLine("Smallest element in the array is {0}", small);
        }
    }

}
```

```cpp
// Write a C++ program to find largest and smallest numbers in an array

#include<iostream>
using namespace std;
int main()
{
int * pointer ;
cout<< "Enter the size of array :";
int input,max,min;
cin>>input;
pointer =new int[input];
int temp;

for(int counter =0 ; counter <input ; counter ++){
    cout<< "enter the item  "<<counter+1 << endl;
    cin>>temp;
    *(pointer+counter) =temp;
}
max= pointer[0];
min = pointer[0];
for(int i=0 ; i< input ;i++){
 if(max < pointer[i]){
    max=pointer[i];
 }
 if(min > pointer[i]){
    min = pointer[i];
 }
}
cout<< max << ", "<<min;



 return 0;
}
```

```fsharp
// Write a F# program to find largest and smallest numbers in an array

let FindLargestAndSmallestNumbersInAnArray (input: int list) =
    let sortedInput = List.sort input
    let smallest = sortedInput.[0]
    let largest = sortedInput.[sortedInput.Length-1]
    printfn "Smallest Number in the array: %d" smallest
    printfn "Largest Number in the array: %d" largest

let input = [1; 2; 3; 9; 6; 4; 5]
FindLargestAndSmallestNumbersInAnArray input
```

```go
// Write a Go program to find largest and smallest numbers in an array

package main

import "fmt"

func main() {
    var arrsize, i, minPosition, maxPosition int

    fmt.Print("Enter the Array Size to find Smallest & Largest = ")
    fmt.Scan(&arrsize)

    arr := make([]int, arrsize)

    fmt.Print("Enter the Array Items  = ")
    for i = 0; i < arrsize; i++ {
        fmt.Scan(&arrsize[i])
    }
    largest := arr[0]
    smallest := arr[0]

    for i = 0; i < arrsize; i++ {
        if largest < arr[i] {
            largest = arr[i]
            maxPosition = i
        }
        if smallest > arr[i] {
            smallest = arr[i]
            minPosition = i
        }
    }
    fmt.Println("\nThe Largest Number in this Array    = ", largest)
    fmt.Println("The Index Position of Largest Number = ", maxPosition)
    fmt.Println("\nThe Smallest Number in this Array    = ", smallest)
    fmt.Println("The Index Position of Smallest Number = ", minPosition)
}
```

```java
// Write a Java program to find largest and smallest numbers in an array

public class FindLargestSmallestNumber {

 public static void main(String[] args) {


  int numbers[] = new int[]{1,2,3,4,5};

  int smallest = numbers[0];
  int largetst = numbers[0];

  for (int i = 1; i < numbers.length; i++) {
   if (numbers[i] > largetst)
    largetst = numbers[i];
   else if (numbers[i] < smallest)
    smallest = numbers[i];
  }

  System.out.println(largetst);
  System.out.println(smallest);
 }
}
```

```javascript
// Write a JavaScript program to find largest and smallest numbers in an array

function findingSmallestLargest(numArr) {
  return [Math.max(...numArr), Math.min(...numArr)];
}

const numberArrTest = [1, 2, 3, 4, 5];
findingSmallLarge(numberArrTest);
```

```julia
# Write a Julia program to find largest and smallest numbers in an array

array = [1,2,3,4,5]
array = sort(array)
smallest_element = array[1]
largest_element = array[length(array)]
println("The smallest number is : ", smallest_element)
println("\nThe largest number is : ", largest_element)
```

```kotlin
// Write a Kotlin program to find largest and smallest numbers in an array

fun findLargestAndSmallestNumbers(numbers: Array<Int>): String {
	numbers.sort()
	val largestNumber = numbers[numbers.size - 1]
	val smallestNumber = numbers[0]
	return "${largestNumber}, ${smallestNumber}"
}

fun main() {
	val inputs = arrayOf<Int>(1, 2, 3, 4, 5)
	println(findLargestAndSmallestNumbers(inputs))
}
```

```perl
# Write a Perl program to find largest and smallest numbers in an array

sub large_and_small {
    my (@numbers);
    @numbers = @_;

    my ($small, $large);
    $large = $numbers[0];
    $small = $numbers[0];

    foreach my $i (@numbers) {

        if ($i > $large) {

            $large = $i;
        }
        elsif ($i < $small) {

            $small = $i;
        }
    }
    return ($small, $large);
}


my (@my_array, @ret);
@my_array = (1,2,3,4,5);
@ret = large_and_small(@my_array);
print "Largest value : ", $ret[1], "\n";
print "Smallest value : ", $ret[0], "\n";
```

```php
// Write a PHP program to find largest and smallest numbers in an array

<?php

function find_largest_and_smallest_numbers_in_an_array($numbers)
{
	sort($numbers);
	$largestNumber = $numbers[count($numbers) - 1];
	$smallestNumber = $numbers[0];
	return "$largestNumber, $smallestNumber";
}

$inputs = [1, 2, 3, 4, 5];
echo find_largest_and_smallest_numbers_in_an_array($inputs);
```

```python
# Write a Python program to find largest and smallest numbers in an array

numbers = [int(input()) for _ in range(int(input("How many numbers: ")))]
print(f"{max(numbers)}, {min(numbers)}")
```

```ruby
# Write a Ruby program to find largest and smallest numbers in an array

#programme to find the larget and smallest numbers in a array in ruby...

def findLargestAndSmallestNumbersInAnArray numArray
    puts "#{numArray.max}, #{numArray.min}"
end

findLargestAndSmallestNumbersInAnArray [1,2,3,4,5]
```

```swift
// Write a Swift program to find largest and smallest numbers in an array

import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
print("Largest number: ", numbers.reduce(Int.min, { max($0, $1) }))
print("Smallest number: ", numbers.reduce(Int.max, { min($0, $1) }))
```

```typescript
// Write a TypeScript program to find largest and smallest numbers in an array

function findingSmallLarge(numArr: number[]) {
  return [Math.max(...numArr), Math.min(...numArr)];
}

const numberArr: number[] = [1, 2, 3, 4, 5];
findingSmallLarge(numberArr);
```
