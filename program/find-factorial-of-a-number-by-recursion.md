---
title: "Find Factorial Of A Number By Recursion"
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
    "scala",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "sancoLgates",
    "esivakumar18",
    "Osher160",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "shivampipalwa",
    "greeshma-d",
    "SRR-CODER",
    "UsmanFani",
    "imtiyaz786",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-02T17:04:50Z
trackId: 782
description: "Write a program to find factorial of a number by recursion."
---

## Table of contents

## Write a program to find factorial of a number by recursion

Factorial of a number is the product of all the numbers from 1 to that number. For example, factorial of 5 is 5\*4\*3\*2\*1 = 120.

```
Input  : 5
Output : 120
```

---

### C

```c
// Write a C program to find factorial of a number by recursion

#include <stdio.h> /* printf , scanf */

/* assuming num >= 1 */
int FactorialRec(int num);

int main()
{
    int num = 0;
    int is_good = scanf("%d",&num);

    if(is_good != 1)
    {
        return -1;
    }

    printf("%d\n",FactorialRec(num));

    return 0;
}

int FactorialRec(int num)
{
    if(num == 1)
    {
        return 1;
    }

    return num * FactorialRec(num -1);
}
```

### C#

```csharp
// Write a C# program to find factorial of a number by recursion

using System;
class Factorial
{
    public static void Main()
    {
        int fact, num;
        Console.Write("Enter a number: ");
        num = Convert.ToInt32(Console.ReadLine());
        Factorial obj = new Factorial();
        fact = obj.factorial(num);
        Console.WriteLine("Factorial of {0} is {1}", num, fact);
    }

    public int factorial(int num)
    {
        if (num == 0)
            return 1;
        else
            return num * factorial(num - 1);
    }
}
```

### C++

```cpp
// Write a C++ program to find factorial of a number by recursion

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int factorial(int n)
{
    if(n==0)
    {
        return 1;
    }
    return n*factorial(n-1);
}


int main() {
	int number;
	cin>>number;
	cout<<factorial(number)<<endl;


	return 0;
}
```

### Go

```go
// Write a Go program to find factorial of a number by recursion

package main

import "fmt"

func factorialize(num int) int {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1
	} else {
		return num * factorialize(num - 1)
	}
}

func main() {
	var i int
	fmt.Print("Enter Number: ")
	fmt.Scan(&i)
	fmt.Println(factorialize(i))
}
```

### Java

```java
// Write a Java program to find factorial of a number by recursion

import java.util.Scanner;

 class FindFactorialOfANumberByRecursion {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		System.out.println("Enter a number: ");
		int number = input.nextInt();

		System.out.print("Factorial of the entered number is: " + factorial(number));
	}

	static int factorial(int number) {
	if(number == 0)
		return 1;
	else
		return number * factorial(number - 1);
	}

}
```

### JavaScript

```javascript
// Write a JavaScript program to find factorial of a number by recursion

function factorialize(num) {
  if (num < 0) {
    return -1;
  }

  // If the number is 0, its factorial is 1.
  else if (num == 0) {
    return 1;
  }

  // Otherwise, call the recursive procedure again
  else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

console.log("Factorial of 5 is", factorialize(5));
```

### Kotlin

```kotlin
// Write a Kotlin program to find factorial of a number by recursion

class FindFactorialOfANumberByRecursion {

    fun findFactorial(num: Int): Int {
        if (num == 0) return 0
        return findRecursive(num)
    }

    private fun findRecursive(num: Int): Int {
        if (num == 1) return 1
        return num * findRecursive(num - 1)
    }
}
```

### Perl

```perl
# Write a Perl program to find factorial of a number by recursion

sub factorial
{
my $n = $_[0];
if ($n == 0 || $n == 1)
{
    return 1;
}
else
{
    return $n * factorial($n - 1);
}
}
$n = 5;

print "Factorial of a number $n is ", factorial($n);
```

### PHP

```php
// Write a PHP program to find factorial of a number by recursion

<?php
function factorial($n)
{
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

echo factorial((int) readline()) . "\n";

?>
```

### Python

```python
# Write a Python program to find factorial of a number by recursion

# Python program to calculate factorial of number using recursion
def fact(x):
    if x == 1 or x == 0:
        return 1
    else:
        return x * fact(x - 1)  # using recursion


n = int(input("Enter a number : "))

if n < 0:
    print("Factorial can not be calculated for negative numbers!")
else:
    print("Factorial of", n, "=", fact(n))
```

### Ruby

```ruby
# Write a Ruby program to find factorial of a number by recursion

def fact(n)
    return 1 if n==0

    return n*fact(n-1)
end
print "Enter a number : "
num = gets.chomp.to_i
print "Factorial of #{num} : #{fact(num)}"
```

### Scala

```scala
// Write a Scala program to find factorial of a number by recursion

object HelloWorld {
 	def main(args: Array[String]): Unit = {
 	  val number = scala.io.StdIn.readInt();
 	  println(factorial(number));
 	}

 	def factorial(n: Int): Int = {
    if (n == 0)
        return 1
    else
        return n * factorial(n-1)
  }
 }
```

### Swift

```swift
// Write a Swift program to find factorial of a number by recursion

import Foundation
import Glibc

print("Enter number: ")
var number = Int(readLine()!)!

print("Factorial: ", factorial(fNumber: number))

func factorial(fNumber: Int) -> Int{
   if fNumber == 0{
      return 1
   } else {
      return fNumber * factorial(fNumber:fNumber-1)
   }
}
```

### TypeScript

```typescript
// Write a TypeScript program to find factorial of a number by recursion

function factorialize(num: number): number {
  if (num < 0) {
    return -1;
  }

  // If the number is 0, its factorial is 1.
  else if (num == 0) {
    return 1;
  }

  // Otherwise, call the recursive procedure again
  else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

console.log("Factorial of 5 is", factorialize(5));
```
