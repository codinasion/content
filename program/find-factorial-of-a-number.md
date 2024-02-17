---
title: "Find Factorial Of A Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "julia",
    "scala",
    "go",
    "haskell",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "esivakumar18",
    "lukaszmielczarekdev",
    "hi-Kartik2004",
    "jfinley6",
    "rksp25",
    "joao-vitor-souza",
    "grraghav120",
    "harsh0c",
    "devkansara",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-01T03:36:48Z
trackId: 3193
description: "Write a program to find factorial of a number."
---

## Write a program to find factorial of a number

Factorial of N = N _(N-1)_ (N-2) _..._ 1

```
Input  : 5
Output : 120
```

---

```c
// Write a C program to find factorial of a number

#include<stdio.h>

int main(){
    int number;
    scanf("%d",&number);
    int factorial=1;
    for(int i=number;i>=1;i--){
        factorial=factorial*i;
    }
    printf("Factorial of the given number is: %d",factorial);
    return 0;
}
```

```csharp
// Write a C# program to find factorial of a number

using System;
  public class Factorial
   {
     public static void Main(string[] args)
      {
       int i,fact=1,number;
       Console.Write("Enter any Number: ");
       number= int.Parse(Console.ReadLine());
       for(i=1;i<=number;i++){
        fact=fact*i;
       }
       Console.Write("Factorial of " +number+" is: "+fact);
     }
  }
```

```cpp
// Write a C++ program to find factorial of a number

// Programme to find the factorial of N

#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;

int main(){
    cout<<"Enter the number N:";
    ll n;   cin>>n;
    ll product=1;

    // Calculating factorial.
    for(int i=n;i>0;i--){
        product = product * i;
    }

    // displaying output;
    cout<<"The factorial of "<<n<<" is "<<product<<endl;

    return 0;
}

/*
Author : Kartikeya Saini
*/
```

```go
// Write a Go program to find factorial of a number

package main

import "fmt"

func main() {

	var factorialnum, fact int
	fact = 1

	fmt.Print("Enter any Number to find its Factorial = ")
	fmt.Scanln(&factorialnum)

	for i := 1; i <= factorialnum; i++ {
		fact = fact * i
	}
	fmt.Println(factorialnum, "Factorial is ", fact)
}
```

```haskell
-- Write a Haskell program to find factorial of a number

fact n = product [1..n]
main = print (fact 5)
```

```java
// Write a Java program to find factorial of a number

import java.util.*;

public class FindFactorialOfANumber {
    public static int Factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();
        System.out.println(Factorial(n));
    }
}

// Contributed by Raghav Garg (@grraghav120)
```

```julia
# Write a Julia program to find factorial of a number

print("Enter a number : ")
num = readline()
println("Factorial of the given number : ",factorial(parse(Int64,num)))
```

```kotlin
// Write a Kotlin program to find factorial of a number

import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Factorial of $min = " + factorialOfNumber(min!!.toInt()))

}

private fun factorialOfNumber(num: Int): Long {
    var factorial: Long = 1
    for (i in 1..num) {
        // factorial = factorial * i;
        factorial *= i.toLong()
    }

    return factorial
}
```

```perl
# Write a Perl program to find factorial of a number

print "Enter a number: ";
$n=<STDIN>;
$t=$n;
$f=1;
for($i=0;$i<$t;$i++)
{
$f=$f*$n;
$n=$n-1;
}
print "Factorial of given number :  $f\n";
```

```php
// Write a PHP program to find factorial of a number

<?php

function factorial($n) {
$factorial = 1;
for ($x=$n; $x>=1; $x--)
{
  $factorial = $factorial * $x;
}
return "Factorial of $n is $factorial";
}

echo factorial(5);

?>
```

```python
# Write a Python program to find factorial of a number

from math import factorial

print(factorial(int(input())))
```

```ruby
# Write a Ruby program to find factorial of a number

puts "Please enter a number: "
input_number = gets.to_i

def findFactorialOfANumber number
    factorial = 1

    (2..number).each do |x|
        factorial *= x
    end

    "The factorial of #{number} is #{factorial}"
end

puts findFactorialOfANumber input_number
```

```scala
// Write a Scala program to find factorial of a number

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  var i = scala.io.StdIn.readInt();

    var factorialN = 1;
    while(i > 0) {
     factorialN = factorialN * i;
     i = i - 1;
    }

    println(factorialN);
  }
}
```

```swift
// Write a Swift program to find factorial of a number

import Foundation
import Glibc

print("Enter number: ")
var number = Int(readLine()!)!

print("Factorial: ", factorial(fNumber: number))

func factorial(fNumber: Int) -> Int{
   var output = 1

   if (fNumber > 1) {
      for j in 1...fNumber{
         output *= j
      }
   }
   return output
}
```

```typescript
// Write a TypeScript program to find factorial of a number

const findFactorial = (n: number) => {
  let result = 1;

  if (n == 0 || n == 1) {
    return result;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  } else {
    return "please enter a positive number.";
  }
};

console.log(findFactorial(5));
```
