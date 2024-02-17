---
title: "Find Volume Of A Cuboid"
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
  [
    "harshraj8843",
    "anandfresh",
    "esivakumar18",
    "joao-vitor-souza",
    "PraaneshSelvaraj",
    "CodingWithHardik",
    "muhammadjufry",
    "Anushka-codergirl",
    "MadhuS-1605",
    "ashankritwik07",
    "KaptainCS3",
    "Ni3dzwi3dz",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 85
description: "Write a program to find volume of a cuboid."
---

## Write a program to find volume of a cuboid

Volume of a cuboid = `Length` × `Width` × `Height`

```
Length : 2
Width  : 3
Height : 4

Volume : 24
```

---

```c
// Write a C program to find volume of a cuboid

#include <stdio.h>

void main()
{
    int l, w, h, volume;
    printf("Enter value of length : ");
    scanf("%d", &l);
    printf("Enter value of width  : ");
    scanf("%d", &w);
    printf("Enter value of height : ");
    scanf("%d", &h);
    volume = l * w * h;

    printf("\nVolume of cuboid is : %d\n", volume);
}
```

```csharp
// Write a C# program to find volume of a cuboid

using System;

class VolumeaOfCuboid
{
    static void Main()
    {
        double Length = Convert.ToDouble(Console.ReadLine());
        double Width = Convert.ToDouble(Console.ReadLine());
        double Height = Convert.ToDouble(Console.ReadLine());

        // Applying the formula
        double Volume = Height * Width * Length;

        Console.WriteLine("Length  : " + Length);
        Console.WriteLine("Width   : " + Width);
        Console.WriteLine("Height  : " + Height);
        Console.WriteLine("Volume  : " + Volume);
    }
}
```

```cpp
// Write a C++ program to find volume of a cuboid

#include <iostream>

using namespace std;

int main()
{
    int l, w, h, volume;
    cout << "Enter value of length : ";
    cin >> l;
    cout << "Enter value of width  : ";
    cin >> w;
    cout << "Enter value of height : ";
    cin >> h;
    volume = l * w * h;

    cout << "\nVolume of cuboid is : " << volume << endl;
    return 0;
}
```

```dart
// Write a Dart program to find volume of a cuboid

import 'dart:io';
void main(){
  print("Enter the length :");
  int length = int.parse(stdin.readLineSync()!);
  print("Enter the width :");
  int width = int.parse(stdin.readLineSync()!);
  print("Enter the height :");
  int height = int.parse(stdin.readLineSync()!);
  int cuboid = length * width * height;
  print('Volume of a cuboid : $cuboid');
}
```

```fsharp
// Write a F# program to find volume of a cuboid

let volumeOfCuboid length width height : int =
  length * width * height


let cuboid = volumeOfCuboid 2 3 4

printfn "Volume of a cuboid : %d" cuboid
```

```go
// Write a Go program to find volume of a cuboid

package main

import "fmt"

func main(){
 var length int
 var height int
 var width int

  fmt.Println("Enter length:")
  fmt.Scan(&length)
  fmt.Println("Enter height:")
  fmt.Scan(&height)
  fmt.Println("Enter width:")
  fmt.Scan(&width)
  fmt.Println("Volume of Cuboid is:", length*width*height)
}
```

```java
// Write a Java program to find volume of a cuboid

package MyClass;
import java.util.Scanner;
public class FindVolumeOfACuboid {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int Length = sc.nextInt();
		int Width = sc.nextInt();
		int Height = sc.nextInt();

		int calculate =(Length * Width * Height);

		System.out.println("Volume : "+ calculate);

	}

}
```

```javascript
// Write a JavaScript program to find volume of a cuboid

function getVolumeOfACuboid(length, width, height) {
  return length * width * height;
}
const length = 2;
const width = 3;
const height = 4;
console.log(getVolumeOfACuboid(length, width, height));
```

```julia
# Write a Julia program to find volume of a cuboid

print("Enter the length: ")
length = parse(Float64, readline(stdin))
print("Enter the width: ")
width = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
volume = length * width * height
println("Volume of a cuboid: ", volume)
```

```kotlin
// Write a Kotlin program to find volume of a cuboid

import kotlin.math.PI
import java.util.Scanner

fun main(args: Array<String>) {
  val scanner = Scanner(System.`in`)
  val length = scanner.nextDouble()
  val width = scanner.nextDouble()
  val height = scanner.nextDouble()

  val volume = length * width * height
  println(volume)
}
```

```perl
# Write a Perl program to find volume of a cuboid

print "Enter the length : ";
my $length = <STDIN> ;

print "Enter the width : ";
my $width = <STDIN> ;

print "Enter the height: ";
my $height = <STDIN> ;

my $res = volumeOfCuboid();
print "Volume of cuboid : $res";

sub volumeOfCuboid
{
    my ($x) = @_;
    my $res = $length * $width * $height;
    return $res ;
}
```

```php
// Write a PHP program to find volume of a cuboid

<?php

echo "Length: ";
fscanf(STDIN, "%f", $length);

echo "Width: ";
fscanf(STDIN, "%f", $width);

echo "Height: ";
fscanf(STDIN, "%f", $height);

echo "Volume: " . $length * $width * $height . "\n";

?>
```

```python
# Write a Python program to find volume of a cuboid

def find_volume_of_a_cuboid(length, width, height):
    return length * width * height


if __name__ == "__main__":
    length = 2
    width = 3
    height = 4
    print("Length : ", length)
    print("Width  : ", width)
    print("Height : ", height)
    print("\nVolume : ", find_volume_of_a_cuboid(length, width, height))
```

```r
# Write a R program to find volume of a cuboid

length = 2
width = 3
height = 4
volume = length * width * height
cat("Volume: ", volume)
```

```ruby
# Write a Ruby program to find volume of a cuboid

print "Enter Lenght : "
lenght = gets.chomp.to_i
print "Enter Width : "
width = gets.chomp.to_i
print "Enter Height : "
height = gets.chomp.to_i
volume = lenght * width * height
print "Volume : #{volume}"
```

```rust
// Write a Rust program to find volume of a cuboid

fn main() {
    let length = 2.0;
    let width = 3.0;
    let height = 4.0;
    let volume = length * width * height;

    println!("Volume of cuboid is {0}", volume as f32);
}
```

```scala
// Write a Scala program to find volume of a cuboid

object Main extends App {
  def volumeOfACuboid[T](wid: T, len: T, hei: T)(implicit ev: Numeric[T]) =
    ev.times(wid, ev.times(len, hei))

  val length = 2
  val width = 3
  val height = 4

  println("Length : " + length)
  println("Width  : " + width)
  println("Height : " + height)

  println("\nVolume : " + volumeOfACuboid(length, width, height))
}
```

```swift
// Write a Swift program to find volume of a cuboid

import Swift
import Foundation

var length = 2.0
var width = 3.0
var height = 4.0

var volume = length * width * height
print("Volume of cuboid: ", volume)
```

```typescript
// Write a TypeScript program to find volume of a cuboid

function findVolumeOfACuboid(length: number, width: number, height: number) {
  return length * width * height;
}

console.log(findVolumeOfACuboid(2, 3, 4));
```
