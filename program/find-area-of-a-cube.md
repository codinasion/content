---
title: "Find Area Of A Cube"
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
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "harmanbatheja15",
    "hi-Kartik2004",
    "joao-vitor-souza",
    "priya1011",
    "gvadam",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 3258
description: "Write a program to find area of a cube."
---

## Write a program to find area of a cube

Area of cube = 6 × `Side`^2

```
Side : 2

Area : 24
```

---

```c
// Write a C program to find area of a cube

#include<stdio.h>

int main(){
    int side;
    scanf("%d",&side);
    int area=6*side*side;
    printf("Area of the cube: %d",area);
    return 0;
}
```

```csharp
// Write a C# program to find area of a cube

using System;
class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the side : ");
    double side = Convert.ToDouble(Console.ReadLine());
    double cube = 6 * side * side;
    Console.WriteLine("Area of cube : "+cube);
  }
}
```

```cpp
// Write a C++ program to find area of a cube

// Programme to find the area of a cube.

#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;

int main(){
    // Taking input;
    ll length;
    cout<<"Enter the side of the cube: ";
    cin>>length;

    //printing output;
    cout<<"The Surface area of the cube is: "<<6*(length*length)<<endl;

    return 0;
}

/*
Author : Kartikeya Saini
*/
```

```dart
// Write a Dart program to find area of a cube

import 'dart:io';
void main(){
  print("Enter the side :");
  int side = int.parse(stdin.readLineSync()!);
  int area = 6 * side * side;
  print('Area of cube : $area');
}
```

```fsharp
// Write a F# program to find area of a cube

let areaOfCube side : int =
  6 * side * side

let area = areaOfCube 2

printfn "Area of cube : %d" area
```

```go
// Write a Go program to find area of a cube

package main

import "fmt"

func main() {
	var num int
	fmt.Print("Enter the side of a cube to find its area = ")
	fmt.Scanln(&num)
	cube := 6 * num * num
	fmt.Println("\nArea of Cube with side", num, "=", cube)
}
```

```haskell
-- Write a Haskell program to find area of a cube

main :: IO ()
main = do
    putStrLn "Enter side: "
    input1 <- getLine
    let side = read input1 :: Float

    let area = 6 * side * side
    putStrLn $ show (area)
```

```java
// Write a Java program to find area of a cube

import java.util.*;
public class FindAreaofACube{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int side=sc.nextInt();
        int area=6*side*side;
        System.out.println("Area of the cube: " + area);
    }
}
```

```javascript
// Write a JavaScript program to find area of a cube

function areaOfCube() {
  let side = parseFloat(prompt("Enter the length of a side of the cube:"));
  return 6 * side * side;
}

let area = areaOfCube();
console.log("The area of the cube is " + area);
```

```julia
# Write a Julia program to find area of a cube

print("Enter the side: ")
side = parse(Float64, readline(stdin))
cube = 6 * side * side
println("Surface area of cone: ", cube)
```

```kotlin
// Write a Kotlin program to find area of a cube

class FindAreaOfACube {
    fun area(side: Int): Int {
        return 6 * side * side
    }
}
```

```perl
# Write a Perl program to find area of a cube

my $side = <STDIN>;
$area = 6 * $side * $side;
print "$area"
```

```php
// Write a PHP program to find area of a cube

<?php
	$x = readline('Enter Cube side: ');

  $x1 = 6* $x * $x;
  echo "Area of Cube: $x1 \n";
?>
```

```python
# Write a Python program to find area of a cube

# Python program to calculate area of cube

side = input("Enter side of the cube\n")
side = int(side)
area = 6 * side * side

print("Area = ", area)
```

```r
# Write a R program to find area of a cube

side = 2
area = 6* side * side
cat("Area: ", area)
```

```ruby
# Write a Ruby program to find area of a cube

print "Enter side : \n"
side = gets.chomp.to_i

area = 6 * side * side
print "area : #{area}"
```

```rust
// Write a Rust program to find area of a cube

fn main() {
    let side = 2.0;
    let area = 6.0 * (side * side);

    println!("Area of cube is {0}", area as f32);
}
```

```scala
// Write a Scala program to find area of a cube

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val side = scala.io.StdIn.readDouble();
	  val area = 6 * side * side ;
	  println(area);
	}
}
```

```swift
// Write a Swift program to find area of a cube

import Swift
import Foundation

var side = 2.0

var area = 6 * side * side
print("Area of cube: ", area)
```

```typescript
// Write a TypeScript program to find area of a cube

const side = 2;

function area(side: number): number {
  return 6 * side * side;
}

console.log("Side: " + side);
console.log("Area: " + area(side));
```