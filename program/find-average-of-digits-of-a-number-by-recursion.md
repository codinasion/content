---
title: "Find Average Of Digits Of A Number By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "Shaileshalluri",
    "harshraj8843",
    "moaldeen",
    "pranavsilimkhan",
    "rakibul-islam-raju",
    "ankitshokeen",
    "Tushar12222",
    "pranay136",
    "roshan798",
    "bnzone",
    "anandfresh",
    "Fukurokudzu",
    "leslieyip02",
    "vipulkmr02",
    "yashasvini121",
    "Avicenne-b",
    "hi-Kartik2004",
    "urielwix",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T10:28:21Z
trackId: 5360
description: "Write a program to find average of digits of a number by recursion."
---

## Table of contents

## Write a program to find average of digits of a number by recursion

Average of digits of a number is the sum of digits of the number divided by the number of digits in the number. For example, the average of digits of 123 is 6. The sum of digits of 123 is 6 and the number of digits in 123 is 3. So, the average of digits of 123 is 6/3 = 2.

```
Input  : 123
Output : 2
```

---

### C

```c
// Write a C program to find average of digits of a number by recursion

#include <stdio.h>

int sumOfDigits(int n) {
  if (n == 0) return 0;
  return (n % 10) + sumOfDigits(n / 10);
}

void main() {
  int n;
  printf("Enter a number: ");
  scanf("%d",&n);

  int sum = sumOfDigits(n);
  int digit_count = 0;

  while (n > 0) {
    digit_count++;
    n /= 10;
  }
  double average = (double)sum/digit_count;
  printf("Average of digits: %lf\n",average);

}
```

### C#

```csharp
// Write a C# program to find average of digits of a number by recursion

using System;

class AVERAGE {

    static double avgRec(int[] a, int i)
    {
        int n = a.Length;
        if (i == n-1)
            return a[i];

        if (i == 0)
            return ((a[i] + avgRec(a, i+1))/n);

        return (a[i] + avgRec(a, i+1));
    }


    public static void Main ()
    {
       int []arr = {1,2,3};
       Console.Write(avgRec(arr, 0));
    }
}
```

### C++

```cpp
// Write a C++ program to find average of digits of a number by recursion

#include <iostream>
using namespace std;
int sumOfDigits(int n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(n / 10);
}

int main() {
  int n;
  cout << "Enter a number: ";
  cin >> n;
  int sum = sumOfDigits(n);
  int digit_count = 0;
  while (n > 0) {
    digit_count++;
    n /= 10;
  }
  cout << "Average of digits: " << (double)sum/digit_count << endl;
  return 0;
}
```

### Dart

```dart
// Write a Dart program to find average of digits of a number by recursion

double digitSumAvg(int number , int digits , int sum){
  if(number == 0){
    return sum / digits;
  }

  int no = number % 10;
  digits += 1;
  sum += no;
  number = number ~/ 10;

  return digitSumAvg(number , digits , sum);

}

void main(){
  print(digitSumAvg(12234 , 0 , 0));
}
```

### F#

```fsharp
// Write a F# program to find average of digits of a number by recursion

let rec sumAndCountDigits n sum count =
    if n = 0 then (sum, count)
    else sumAndCountDigits (n / 10) (sum + n % 10) (count + 1)

let averageOfDigits n =
    let (sum, count) = sumAndCountDigits n 0 0
    if count = 0 then 0 else sum / count

[<EntryPoint>]
let main argv =
    let number = 123
    let average = averageOfDigits number
    printfn "Input  : %d" number
    printfn "Output : %d" average
    0 // Return an integer exit code
```

### Go

```go
// Write a Go program to find average of digits of a number by recursion

package main

import "fmt"

func averageRecursive(numbers []int, total, count int) float64 {
	if len(numbers) == 0 {
		return float64(total) / float64(count)
	}

	return averageRecursive(numbers[1:], total+numbers[0], count+1)
}

func main() {
	numbers := []int{5, 10, 15, 20}
	average := averageRecursive(numbers, 0, 0)
	fmt.Printf("Average: %.2f\n", average)
}
```

### Haskell

```haskell
-- Write a Haskell program to find average of digits of a number by recursion

f :: Integer -> [Integer]
f 0 = []
f x = (x `mod` 10) : f (x `div` 10)

main :: IO()
main =  do
    let n = 123
    let d = f n
    let a = (fromIntegral $ foldl (+) 0 d) / fromIntegral (length d)

    print a
```

### JavaScript

```javascript
// Write a JavaScript program to find average of digits of a number by recursion

var averageOfDigits = function (num, digitsCount, digitsSum) {
  if (digitsCount === void 0) {
    digitsCount = 0;
  }
  if (digitsSum === void 0) {
    digitsSum = 0;
  }
  if (num < 10) {
    digitsCount++;
    digitsSum += num;
    return digitsSum / digitsCount;
  } else {
    var digit = num % 10;
    digitsCount++;
    digitsSum += digit;
    num = Math.floor(num / 10);
    return averageOfDigits(num, digitsCount, digitsSum);
  }
};
console.log(averageOfDigits(455));
```

### Kotlin

```kotlin
// Write a Kotlin program to find average of digits of a number by recursion

import java.util.Scanner

fun averageOfDigits(n: Int, sum: Float = 0.0f, digits: Float = 0.0f) : Float {
    if (n == 0) return sum / digits;

    var s = sum
    var d = digits

    s += n % 10
    d += 1

    return averageOfDigits(n / 10, s, d)
}


fun main() {
    val reader = Scanner(System.`in`)
    val number: Int = reader.nextInt() // taking input from Scanner Class
    reader.close() // Closing the Scanner
    println(averageOfDigits(number))
}
```

### Perl

```perl
# Write a Perl program to find average of digits of a number by recursion

sub average_of_digits {
    my ($num) = @_;

    if ($num < 10) {
        return $num;
    } else {
        my $last_digit = $num % 10;
        my $rest_of_digits = int($num / 10);
        return ($last_digit + average_of_digits($rest_of_digits));
    }
}

my $number = 455;
my $result = average_of_digits($number);

print "Average of digits of $number is $result\n";
```

### PHP

```php
// Write a PHP program to find average of digits of a number by recursion

<?php

function averageRecursion($a, $i=0)
{
    if(!is_array($a)) $a = str_split($a);

    $n = sizeof($a);

    if ($i == $n - 1) return $a[$i];

    if ($i == 0) return (($a[$i] + averageRecursion($a, $i + 1)) / $n);

    return ($a[$i] + averageRecursion($a, $i + 1));
}

$num = 123;
echo averageRecursion($num);


?>
```

### Python

```python
# Write a Python program to find average of digits of a number by recursion

def average_of_digits(n):
    if n == 0:
        return 0
    digits = [int(d) for d in str(n)]
    return sum(digits) / len(digits)


print(average_of_digits(123))
```

### R

```r
# Write a R program to find average of digits of a number by recursion

# Function to calculate the sum of digits recursively
sum_of_digits <- function(n) {
  if (n == 0) {
    return(0)
  } else {
    return(n %% 10 + sum_of_digits(n %/% 10))
  }
}

# Function to calculate the average of digits using the sum_of_digits function
average_of_digits <- function(n) {
  num_digits <- ifelse(n == 0, 1, floor(log10(n)) + 1)
  sum_digits <- sum_of_digits(n)
  return(sum_digits / num_digits)
}

# Example usage
input_number <- 12345
result <- average_of_digits(input_number)
cat("Average: ", result, "\n")
```

### Ruby

```ruby
# Write a Ruby program to find average of digits of a number by recursion

module Average

  def self.get_avg(number, digits: [])
    return digits.sum / digits.length if number <= 0
    digits << (number % 10)
    get_avg(number / 10, digits: digits)
  end

end

puts Average.get_avg(123) # => 2
puts Average.get_avg(448) # => 5
```

### Rust

```rust
// Write a Rust program to find average of digits of a number by recursion

fn avg_of_digits(n: u32) -> f32 {
    let (sum, count) = sum_and_count_of_digits(n);
    sum as f32 / count as f32
}

fn sum_and_count_of_digits(n: u32) -> (u32, u32) {
    if n == 0 {
        (0, 0)
    } else {
        let (sum, count) = sum_and_count_of_digits(n / 10);
        (sum + n % 10, count + 1)
    }
}
```

### Scala

```scala
// Write a Scala program to find average of digits of a number by recursion

import scala.io.StdIn.readInt
object Main {
  def main(args: Array[String]) {
    print("Enter a number: ")
    val num = readInt()
    val sum = sumOfDigits(num)
    val count = countDigits(num)
    val avg = sum.toDouble / count
    println(s"Average of digits of $num is $avg")
  }
  def sumOfDigits(num: Int): Int = {
    if (num == 0) 0
    else num % 10 + sumOfDigits(num / 10)
  }
  def countDigits(num: Int): Int = {
    if (num == 0) 0
    else 1 + countDigits(num / 10)
  }
}
```

### Swift

```swift
// Write a Swift program to find average of digits of a number by recursion

// Online Swift compiler to run Swift program online
// Print "Hello, World!" message
func digitAverage(_ num: Int) -> Double {
    // Base case: if the number is a single digit
    if num < 10 {
        return Double(num)
    } else {
        // Recursive case: calculate the average of digits
        let lastDigit = num % 10
        let remainingDigits = num / 10
        let averageOfRemainingDigits = digitAverage(remainingDigits)

        // Calculate the overall average
        let totalDigits = Double(String(num).count)
        return (averageOfRemainingDigits * (totalDigits - 1) + Double(lastDigit)) / totalDigits
    }
}

// Example usage
let number = 123
let result = digitAverage(number)
print("The average of digits in \(number) is: \(result)")
```

### TypeScript

```typescript
// Write a TypeScript program to find average of digits of a number by recursion

const averageOfDigits = function (
  num: number,
  digitsCount: number,
  digitsSum: number
) {
  if (digitsCount === void 0) {
    digitsCount = 0;
  }
  if (digitsSum === void 0) {
    digitsSum = 0;
  }
  if (num < 10) {
    digitsCount++;
    digitsSum += num;
    return digitsSum / digitsCount;
  } else {
    const digit: number = num % 10;
    digitsCount++;
    digitsSum += digit;
    num = Math.floor(num / 10);
    return averageOfDigits(num, digitsCount, digitsSum);
  }
};
console.log(averageOfDigits(123));
```
