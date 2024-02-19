---
title: "Find Cube Root Of A Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
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
    "namrata18s",
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "pokharel-nishan",
    "vedantpople4",
    "Medmly20208",
    "joao-vitor-souza",
    "ZZirbel",
    "greeshma-d",
    "rksp25",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-28T15:47:51Z
trackId: 4215
description: "Write a program to find cube root of a number."
---

## Table of contents

## Write a program to find cube root of a number

```
Input  : 27
Output : 3
```

---

### C

```c
// Write a C program to find cube root of a number

#include <stdio.h>
#include <math.h>

int main()
{
    double num;

    printf("Enter a number: ");
    scanf("%lf", &num);

    double result = cbrt(num);

    printf("Cube root of %.2f is    :    %.2f\n", num, result);
}
```

### C#

```csharp
// Write a C# program to find cube root of a number

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter a number : ");
    double num = Convert.ToDouble(Console.ReadLine());
    double cubeRoot = Math.Cbrt(num);
    Console.WriteLine("Cube root of given number : "+cubeRoot);
  }
}
```

### C++

```cpp
// Write a C++ program to find cube root of a number

#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main()
{

    int input;

    cout << "enter a number:" << endl;
    cin >> input;

    cout << "cube root of " << input << " is " << cbrt(input) << endl;

    return 0;
}
```

### Dart

```dart
// Write a Dart program to find cube root of a number

import 'dart:io';
import 'dart:math';
void main(){
  print("Enter a number :");
  var number =int.parse(stdin.readLineSync());
  var cube_root = pow(number,1/3).round();
  print('Cube root of the given number : $cube_root');
}
```

### Go

```go
// Write a Go program to find cube root of a number

package main

import (
	"fmt"
	"math"
)

func main() {
	var num float64
	fmt.Scanf("%f", &num)
	ans := math.Cbrt(num)
	fmt.Println(ans)
}
```

### Haskell

```haskell
-- Write a Haskell program to find cube root of a number

import Data.Fixed

cubeRoot :: Double -> Double
cubeRoot x = (cuberoot x) / 1
   where cuberoot = (** (1/3))

main :: IO ()
main = do
   let num = 27
   print (cubeRoot num)
```

### Java

```java
// Write a Java program to find cube root of a number

import java.util.Scanner;

public class FindCubeRootOfANumber {
    public static void main(String args[]){
        double i, precision = 0.000001;
        System.out.println("Enter a number:");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        for(i = 1; (i*i*i) <= num; ++i);
        for(--i; (i*i*i) < num; i += precision);
        System.out.println("Cube root of " + num + " is "+i);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find cube root of a number

function cubeRoot(num) {
  return Math.cbrt(num);
}

let number = 27;
console.log(`The cube root of ${number} is ${cubeRoot(number)}.`);
```

### Julia

```julia
# Write a Julia program to find cube root of a number

# Read input from the user
print("Enter a number: ")
num = parse(Float64, readline())

# Calculate the cube root
cubeRoot = cbrt(num)

# Print the result
println("Cube root of $num is: $cubeRoot")
```

### Perl

```perl
# Write a Perl program to find cube root of a number

print "Enter a number : \n";
$input = <STDIN>;
if($input<0){
$input*=-1;
$out=-1*$input**(1/3);
$input*=-1;
}
else{
$out=$input**(1/3);
}
&printout;

sub printout{
print "The cube root of $input is $out\n\n";
}
```

### PHP

```php
// Write a PHP program to find cube root of a number

<?php
$x = readline('Enter number to calculate cube root: ');

$x1 = $x**(1/3);
echo "Cube root of $x is $x1.\n";

?>
```

### Python

```python
# Write a Python program to find cube root of a number

print(round(int(input()) ** (1 / 3), 3))
```

### R

```r
# Write a R program to find cube root of a number

cuberoot = function(x){
    if(x < 0)
    { - (-x)^(1/3)}
    else
    {x^(1/3)}
    }

cuberoot(64)
```

### Ruby

```ruby
# Write a Ruby program to find cube root of a number

<?php

function cubeRoot($n) {
 return pow($n, 1/3) ;
}

echo cubeRoot(50);

?>
```

### Rust

```rust
// Write a Rust program to find cube root of a number

fn main()
{
    let num: f32 = 27.0;
    let result = num.powf(1.0/3.0);

    println!("Cube root : {}", result);
}
```

### Scala

```scala
// Write a Scala program to find cube root of a number

import scala.io.StdIn._;

object cubeRoot{
    def main(args:Array[String]):Unit={
        var num:Double    = 0;
        var res:Double = 0;

        print("Enter a number: ")
        num= readDouble()

        res= scala.math.cbrt(num)
        println("\nCube root of the given number : "+res);
    }
}
```

### Swift

```swift
// Write a Swift program to find cube root of a number

import Swift
import Foundation

print("Enter number: ")
var number = Double(readLine()!)!

print ("Cube root : ", pow(number,1/3))
```

### TypeScript

```typescript
// Write a TypeScript program to find cube root of a number

function findCubeRootOfANumber(cube: number) {
  const cubeRot = Math.cbrt(cube);
  console.log(cubeRot);
}

findCubeRootOfANumber(1331);
```

## Similar programs

- [Find Cube Of A Number](/program/find-cube-of-a-number)
- [Find Square Root Of A Number](/program/find-square-root-of-a-number)
- [Find Digital Root Of A Number](/program/find-digital-root-of-a-number)
- [Find Area Of A Cube](/program/find-area-of-a-cube)
- [Find Volume Of A Cube](/program/find-volume-of-a-cube)
- [Find Surface Area Of A Cube](/program/find-surface-area-of-a-cube)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
- [Find Square Of A Number](/program/find-square-of-a-number)
- [Find Largest Number In An Array](/program/find-largest-number-in-an-array)
