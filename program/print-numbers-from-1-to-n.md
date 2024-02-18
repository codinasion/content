---
title: "Print Numbers From 1 To N"
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
    "haskell",
    "php",
    "perl",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "ReprogramAkash",
    "harshraj8843",
    "Tushar12222",
    "anandfresh",
    "esivakumar18",
    "bnzone",
    "leslieyip02",
    "vedantpople4",
    "cushonz",
    "hi-Kartik2004",
    "Medmly20208",
    "shauryag2002",
    "dineshlalam15",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-10-02T16:16:22Z
trackId: 5207
description: "Write a program to print numbers from 1 to n."
---

## Table of contents

## Write a program to print numbers from 1 to n

```
Input  : 5
Output : 1 2 3 4 5
```

---

### C

```c
// Write a C program to print numbers from 1 to n

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number, i;
    printf("Input: ");
    scanf("%d", &number);
    for (i = 1; i <= number; ++i)
    {
        printf("%d", i);
    }
    return 0;
}
```

### C#

```csharp
// Write a C# program to print numbers from 1 to n

using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Input the value for N: ");
        int n = int.Parse(Console.ReadLine());

        Console.WriteLine("Output:");
        for (int x = 1; x <= n; x++)
        {
            Console.Write(x + ", ");
        }
    }
}
```

### C++

```cpp
// Write a C++ program to print numbers from 1 to n

// Programme to print numbers from 1 to N
#include <bits/stdc++.h>
#define ll long long // for typing ease;
using namespace std;
int main(){
    // Taking user input
    cout<<"Enter N: ";
    ll n;   cin>>n;

    //printing numbers from 1 to N;
    cout<<"Printing numbers from 1 to "<<n<<"..."<<endl;
    for(int i=1;i<=n;i++){
        cout<<i<<" ";
    }

    return 0;
}

/*
Author : Kartikeya Saini
*/
```

### Dart

```dart
// Write a Dart program to print numbers from 1 to n

void printRange(int n){
  for(var i = 1 ; i <= n ; i++){
    print(i);
  }
}

void main() {
  printRange(6);
}
```

### F#

```fsharp
// Write a F# program to print numbers from 1 to n

open System
Console.WriteLine("How many numbers to print : ");
let counter= Convert.ToInt32(Console.ReadLine());
for i = 1 to counter do
 Console.Write("{0} ",i);
```

### Go

```go
// Write a Go program to print numbers from 1 to n

package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	for i := 1; i <= num; i++ {
		fmt.Print(i, " ")
	}
}
```

### Haskell

```haskell
-- Write a Haskell program to print numbers from 1 to n

main :: IO()
main = do
    let n = 5
    putStrLn . unwords . map show $ [1 .. n]
```

### Java

```java
// Write a Java program to print numbers from 1 to n

import java.util.Scanner;

public class PrintNumbersFrom1ToN{
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       System.out.print("Enter the number: ");
       int n = sc.nextInt();
       print1ToN(n);
  }
  static void print1ToN(int n){
    for(int i = 1; i <=n; i++){
      System.out.print(i + " ");
    }
  }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print numbers from 1 to n

let num = prompt("enter a number");
for (let i = 0; i < num; i++) {
  console.log(i + 1);
}
```

### Julia

```julia
# Write a Julia program to print numbers from 1 to n

print("Enter the value of n: ")
# Using stdin for Julia 1.4 and for Julia 0.6 use STDIN
n = parse(Int, readline(stdin))
for i in 1:n
  println(i)
end
```

### Kotlin

```kotlin
// Write a Kotlin program to print numbers from 1 to n

fun main() {
  print("Enter number : ")
  println()
  var input = readLine()
  for (i in 1..input!!.toInt()) {
    println(i)
  }
}
```

### Perl

```perl
# Write a Perl program to print numbers from 1 to n

sub print1ToN {
for ($count = 1 ; $count <= $_[0] ; $count++)
{
    print $count."\n";

}
}
print1ToN(5);
```

### PHP

```php
// Write a PHP program to print numbers from 1 to n

<?php
$input = (int)readline('Enter an integer: ');
function one2N($n) {
 for($i=1; $i<=$n; $i++){
    echo $i." ";
 }
}

one2N($input)
?>
```

### Python

```python
# Write a Python program to print numbers from 1 to n

print("Input the value for N:", end=" ")
n = int(input())

print("Output:")
for x, number in enumerate(range(1, n + 1)):
    print(number, end=", ")
```

### R

```r
# Write a R program to print numbers from 1 to n

number <- 10
    for (n in 1:number) {
     print(n)
}
```

### Ruby

```ruby
# Write a Ruby program to print numbers from 1 to n

print 'Enter a number : '
input = gets.to_i
(1..input).each { |n| puts n }
```

### Rust

```rust
// Write a Rust program to print numbers from 1 to n

fn print_numbers(n: u32) {
    for i in 1..=n {
        println!("{}", i);
    }
}
```

### Scala

```scala
// Write a Scala program to print numbers from 1 to n

import scala.io.StdIn._;

object print1ToN {
    def main(args:Array[String]):Unit={
        println("Enter a number : ");
        var n = readLine().toInt;
        var cnt:Int=0;

        cnt=1;
        while(cnt<=n)
        {
            printf("%d ",cnt);
            cnt=cnt+1;
        }
    }
}
```

### Swift

```swift
// Write a Swift program to print numbers from 1 to n

print("Input : ")
if let input = Int(readLine()!){
    print("Output : ")
    for i in 1...input{
    print(i)
}
}
```

### TypeScript

```typescript
// Write a TypeScript program to print numbers from 1 to n

const print1ToN = (num: number): number => {
  for (i = 0; i < num; i++) {
    console.log(i + 1);
  }
};

print1ToN(5);
```
