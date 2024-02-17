---
title: "Find Volume Of A Cube"
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
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "IradDoron",
    "joao-vitor-souza",
    "tanishq-singh-2407",
    "priya1011",
    "AmanjeetCogoport",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-07T15:12:40Z
trackId: 2789
description: "Write a program to find volume of a cube."
---

## Write a program to find volume of a cube

Volume of cube = `Side`^3

```
Side : 2

Volume : 8
```

---

```c
// Write a C program to find volume of a cube

#include <stdio.h>
#include <math.h>

int main(void) {
  double cubeEdge = 2;
  double cubeVolume = cubeEdge * cubeEdge * cubeEdge;

  printf("Volume of cube = %f\n", cubeVolume);

  return 0;
}
```

```csharp
// Write a C# program to find volume of a cube

using System;
public class VolumeOfCube
{
    public static void Main()
    {
        Console.Write("Enter Side: ");
        decimal Side = Convert.ToDecimal(Console.ReadLine());
        decimal Volume = Side * Side * Side;
        Console.WriteLine("Volume of cube=" + Volume);
        Console.ReadKey();
    }
}
```

```cpp
// Write a C++ program to find volume of a cube

#include<bits/stdc++.h>
using namespace std;

int main(){
  int side = 0 ;
  cout<<"Enter the side of the cube"<<endl;
  cin>>side ;

  cout<<"Volume of the cube is : "<<side*side*side ;

  return 0 ;
}
```

```dart
// Write a Dart program to find volume of a cube

import 'dart:io';

void main() {
  print("Enter the edge of a cube of which you want to calculate volume: ");
  double? a = double.parse(stdin.readLineSync()!);
  double vol = a*a*a;
  print("Volume of cube is $vol");
}
```

```fsharp
// Write a F# program to find volume of a cube

main = do
 let num = 5
 let cube = num * num * num
 putStrLn "Cube of number is : "
 print (cube)
```

```go
// Write a Go program to find volume of a cube

package main

import (
        "fmt"
        "math"
)

func main() {
        var input float64
        fmt.Print("Enter the side of the cube: ")
        fmt.Scanln(&input)
        result := math.Pow(input, 3.0)
        fmt.Printf("The volume is: %0.0f", result)
}
```

```java
// Write a Java program to find volume of a cube

package MyClass;
import java.util.Scanner;
public class FindVolumeOfCube {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		 int edge   = sc.nextInt();
		 int volume = edge * edge * edge ;

		 System.out.println(volume);


	}

}
```

```javascript
// Write a JavaScript program to find volume of a cube

function getVolumeOfACube(side) {
  return side * side * side;
}
const side = 2;
console.log(getVolumeOfACube(side));
```

```julia
# Write a Julia program to find volume of a cube

# Write a Julia program to find volume of cube

# Volume of cube = (edge of cube)^3

# Input  : 2
# Output : 8

num = 5
cube = num * num * num

println(cube)

# contributed by Technical Amanjeet
```

```kotlin
// Write a Kotlin program to find volume of a cube

import java.util.Scanner
import kotlin.math.pow

// Contributed by Nudennie White / Tc2r1 www.github.com/tc2r1

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)

    print("Enter Side of Cube : ")
    val side = scanner.nextDouble()

    val volume = side.pow(3.toDouble())

    println("The Volume of this cube with  $side sized sides is :$volume")
}
```

```php
// Write a PHP program to find volume of a cube

<?php

fscanf(STDIN, "%d", $side);
$volume = $side ** 3;

echo $volume . "\n";

?>
```

```python
# Write a Python program to find volume of a cube

print("Volume:", int(input("Side: ")) ** 3)
```

```r
# Write a R program to find volume of a cube

findVolumeOfCube <- function(side) {
  return (side * side * side)
}

print(findVolumeOfCube(2)) # output: 8
```

```ruby
# Write a Ruby program to find volume of a cube

print "Enter the side of the cube : "
side = gets.chomp.to_i
volume = side**3
print "The volume of the cube : #{volume}"
```

```scala
// Write a Scala program to find volume of a cube

import scala.io.StdIn._;

object volumeOfCube {
  def main(args:Array[String]):Unit={
    var side = readLine().toInt;
    println("Enter the side of cube : "+side);
    var cube = (side * side * side);
    println("Vole of cube :"+cube);
  }
}
```

```swift
// Write a Swift program to find volume of a cube

var cubeSide : Int = 2

// Finding the volume of the cube
var cubeVolume = cubeSide * cubeSide * cubeSide

print("Side = ", cubeSide)
print("So, Volume of the cube= ", cubeVolume)
```

```typescript
// Write a TypeScript program to find volume of a cube

function FindVolumeOfACube(edge: number): number {
  return edge * edge * edge;
}

// Console Test
console.log(FindVolumeOfACube(2)); // 8
```
