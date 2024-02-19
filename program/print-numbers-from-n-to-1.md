---
title: "Print Numbers From N To 1"
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
    "scala",
    "dart",
    "go",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  ["harshraj8843", "IradDoron", "joao-vitor-souza", "TechnicalAmanjeet"]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2710
description: "Write a program to print numbers from n to 1."
---

## Table of contents

## Write a program to print numbers from n to 1

```
Input  : 5
Output : 5 4 3 2 1
```

---

### C

```c
// Write a C program to print numbers from n to 1

#include <stdio.h>

// Write a C program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

void main()
{
    int num;

    printf("Enter number : ");
    scanf("%d", &num);

    int i = num;

    while(i != 0)
    {
      printf("%d ", i);

      i = i - 1;
    }
}
```

### C#

```csharp
// Write a C# program to print numbers from n to 1

// Write a C# program to print numbers from n to 1

    // Input  : 5
    // Output : 5 4 3 2 1

public class PrintNumbersFromNTo1
{

    public static void main(String[] args)
    {
        int n = 5;
        int i = 0;

        for(i = n; i > 1; i--)
          {
                Console.WriteLine(i);

          }
    }
}
```

### C++

```cpp
// Write a C++ program to print numbers from n to 1

// Write a C++ program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int i = n;

    while(i != 0){
      cout<< i << " ";
      i = i - 1;
    }
}

//Contributed by Technical Amanjeet
```

### Dart

```dart
// Write a Dart program to print numbers from n to 1

import 'dart:io';

// Write a Dart program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

void main() {
  print('Enter Number : ');
  int num = int.parse(stdin.readLineSync());

  int i = num;

  do {
      print(num);
      num--;
   }
   while(num>0);


}

// written by Technical Amanjeet
```

### F#

```fsharp
// Write a F# program to print numbers from n to 1

// Write a F# program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

let mutable num = 5;
let mutable i = num;

while(i >= 1) do
  printfn "%d " i
  i<- i - 1


// Contributed by Technical Amanjeet
```

### Go

```go
// Write a Go program to print numbers from n to 1

package main

import "fmt"

// Write a GO program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

func main(){
 var num int

 fmt.Println("Enter number :")
 fmt.Scan(&num)

 var i int = num
 for i > 0{
	 fmt.Println(i)
	 i--
 }
}

// Contributed by Technical Amanjeet
```

### Java

```java
// Write a Java program to print numbers from n to 1

import java.util.Scanner;

// Write a Java program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

public class PrintNumbersFromNTo1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int num = sc.nextInt();

    int i = num;

		while(i > 0)
    {
       System.out.println(i + " ");

       i = i - 1;
    }


	}

}

// contributed by Technical Amanjeet
```

### JavaScript

```javascript
// Write a JavaScript program to print numbers from n to 1

// Write a JavaScript program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

const num = 5;

let i = num;

for (i = num; i > 0; i--) {
  console.log(i);
}

// contributed by Technical Amanjeet
```

### Julia

```julia
# Write a Julia program to print numbers from n to 1

# Write a Julia program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

num = 5
i = num

# while loop
while i > 0

    # Printing values of Array
    println(i)

    # Updating iterator globally
    global i -= 1

# Ending Loop
end

# contributed by Technical Amanjeet
```

### Kotlin

```kotlin
// Write a Kotlin program to print numbers from n to 1

import java.util.*

// Write a Kotlin program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fun main(args: Array<String>) {

    val reader = Scanner(System.`in`)

    print("Enter a number: ")
    val num = reader.nextInt()

    var i = num

    while ( i > 0 )
    {
      print(i.toString() + " ")

      i = i - 1
    }
}

// Contributed by Technical Amanjeet
```

### Perl

```perl
# Write a Perl program to print numbers from n to 1

# Write a Perl program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

$num = 5;

$i = num;

do {
   print "$i ";
   $i -= 1;
} while( $i > 0 );

# Contributed by Technical Amanjeet
```

### PHP

```php
// Write a PHP program to print numbers from n to 1

# <!-- Write a PHP program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1 -->

<?php
  $num = 5;

  $i = $num;

  for ($i = $num; $i > 0; $i--)
  {
    echo"$i ";

  }

?>

# <!-- Contributed by Technical Amanjeet -->
```

### Python

```python
# Write a Python program to print numbers from n to 1

# Write a Python program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

inputNumber = input("Enter number : ")

num = int(inputNumber)

for i in range(1, num + 1):
    print(f"{i} ", end="")

    # Contributed By Technical Amanjeet
```

### R

```r
# Write a R program to print numbers from n to 1

# Write a R program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

main <- function() {
    num = 5

    while (num > 0) {
      print(num)
      num <- num - 1
    }

}

main()

# Contributed by Technical Amanjeet
```

### Ruby

```ruby
# Write a Ruby program to print numbers from n to 1

# Write a Ruby program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

print "Enter number : "
user_input = gets.chomp

number = user_input.to_i

while number > 0
	print "#{i} "
  number -= 1
end

# Contributed by technical amanjeet
```

### Rust

```rust
// Write a Rust program to print numbers from n to 1

// Write a Rust program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fn main() {
  println!("Enter number:");

  let mut input = String::new();
  std::io::stdin().read_line(&mut input).expect("error getting input!");

  let number: f64 = input.trim().parse().expect("Input is not a valid number");
  let i = number

  while i > 0 {
    println!("{i} ");
    i = i - 1;
}

}


// Contributed by technical Amanjeet
```

### Scala

```scala
// Write a Scala program to print numbers from n to 1

// Write a Scala program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

object PrintNumbersFromNTo1{
    def main(args:Array[String]){

        var num:Int = 5

        print("Enter number: ")
        num = scala.io.StdIn.readInt()

        var x:String=num

        while (x > 0)
        {
           println(x + " ")
            x -= 1
        }

        println("Number is: "+result)
    }
}

// Contributed by Technical Amanjeet
```

### Swift

```swift
// Write a Swift program to print numbers from n to 1

import Foundation

// Write a Swift program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

var n = 5

var i = n

while (i > 0) {
  print(i)
   i = i - 1
}

// Contributed by Technical Amanjeet
```

### TypeScript

```typescript
// Write a TypeScript program to print numbers from n to 1

// Write a TypeScript program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

const n: number = 5;

for (let i = n; i > 0; i--) {
  console.log(i);
}

// contributed by Irad Doron :)
```

## Similar programs

- [Print Numbers From N To 1](/program/print-numbers-from-n-to-1)
- [Print All Prime Numbers Between Two Numbers](/program/print-all-prime-numbers-between-two-numbers)
- [Print Numbers From 1 To N Without Using A Loop](/program/print-numbers-from-1-to-n-without-using-a-loop)
- [Print Numbers From N To 1 Without Using A Loop](/program/print-numbers-from-n-to-1-without-using-a-loop)
- [Find Average Of Numbers](/program/find-average-of-numbers)
- [Find Sum Of Numbers](/program/find-sum-of-numbers)
- [Print Pattern 1](/program/print-pattern-1)
- [Print Elements Of An Array](/program/print-elements-of-an-array)
- [Divide Two Numbers](/program/divide-two-numbers)
- [Find The Sum Of All Numbers In An Array](/program/find-the-sum-of-all-numbers-in-an-array)
