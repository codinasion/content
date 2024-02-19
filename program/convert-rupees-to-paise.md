---
title: "Convert Rupees To Paise"
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
    "vedantpople4",
    "anandfresh",
    "esivakumar18",
    "loesking",
    "rhinoxD",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 5228
description: "Write a program to convert rupees to paise."
---

## Table of contents

## Write a program to convert rupees to paise

```
Input  ( Rs ) : 1
Output ( Ps ) : 100
```

---

### C

```c
// Write a C program to convert rupees to paise

#include <stdio.h>

int main() {
    double rupees, paise;
    printf("Enter price in rupees: ");
    scanf("%lf", &rupees);

    paise = rupees * 100;

    printf("%.2lf rupees = %.2lf paise", rupees,paise);

    return 0;
}
```

### C#

```csharp
// Write a C# program to convert rupees to paise

using System;

class MainClass {
  public static void Main (string[] args) {
    Console.WriteLine("Enter price in rupees:");
    int rupees = Convert.ToInt32(Console.ReadLine());
    int paise = rupees * 100;
    Console.WriteLine(rupees + " rupees = " + paise + " paise");
  }
}
```

### C++

```cpp
// Write a C++ program to convert rupees to paise

#include <iostream>
using namespace std;

int main() {
  double rupees, paise;
  cout << "Enter price in rupees: ";

  cin >> rupees;

  paise = rupees * 100;

  cout << rupees << " rupees = " << paise << " paise";

  return 0;
}
```

### Dart

```dart
// Write a Dart program to convert rupees to paise

void main(){
  double rupees = 10;
  double paise = rupees * 100;
  print('$rupees rupees = $paise paise');
}
```

### F#

```fsharp
// Write a F# program to convert rupees to paise

let rupeesToPaise rupees : int =
   rupees * 100

let paise = rupeesToPaise 1

printfn "Equivalent Paise : %d" paise
```

### Go

```go
// Write a Go program to convert rupees to paise

package main

import "fmt"

func main() {
	var rupee float64
	var paise int
	fmt.Scanf("%f", &rupee)
	paise = int(rupee * 100)
	fmt.Println(paise)
}
```

### Haskell

```haskell
-- Write a Haskell program to convert rupees to paise

main :: IO ()
main = do
   putStrLn "Enter rupees: "
   input1 <- getLine
   let rupees = read input1 :: Float

   let paise = rupees * 100
   putStrLn $ show (paise)
```

### Java

```java
// Write a Java program to convert rupees to paise

import java.util.Scanner;
class Convert {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter price in rupees: ");
        double rupees = in.nextDouble();
        in.close();
        double paise = rupees * 100;
        System.out.println(rupees + " rupees = " + paise + " paise");
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to convert rupees to paise

function rupeesToPaise(rupees) {
  let paise = rupees * 100;

  return paise;
}

console.log(rupeesToPaise(10));
```

### Julia

```julia
# Write a Julia program to convert rupees to paise

print("Enter the rupees: ")
rupees = parse(Float64, readline(stdin))
paise = rupees * 100
println("Equivalent Paise: ", paise)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert rupees to paise

fun main() {
   val rupees = 10
   val paise = rupees * 100
   println("$rupees rupees = $paise paise")
}
```

### Perl

```perl
# Write a Perl program to convert rupees to paise

#!/usr/local/bin/perl
$rupees = 10;
$paise = $rupees * 100;
print $rupees . ' rupees = ' . $paise . " paise";
```

### PHP

```php
// Write a PHP program to convert rupees to paise

<?php
$rupees = 10;
$paise = $rupees * 100;
echo $rupees . " rupees = " . $paise . " paise";
?>
```

### Python

```python
# Write a Python program to convert rupees to paise

def Convert(rupees):
    paise = rupees * 100
    print("{} rupees = {} paise".format(rupees, paise))


Convert(10)
```

### R

```r
# Write a R program to convert rupees to paise

rupees = 1
paise = rupees * 100
cat("paise: ", paise)
```

### Ruby

```ruby
# Write a Ruby program to convert rupees to paise

def rupeesToPaise(rupees)
  rupees * 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the rupees : '
  rupees = gets.chomp.to_i

  puts "#{rupees} rupee is #{rupeesToPaise(rupees)} paisa"
end
```

### Rust

```rust
// Write a Rust program to convert rupees to paise

fn main(){
    let rupee: f32 = 1.00;
    let paise = rupee*100.00;
    println!("Given rupees are: {paise} p");
}
```

### Scala

```scala
// Write a Scala program to convert rupees to paise

import scala.io.StdIn._;

object minutesToDays {
  def main(args:Array[String]):Unit={
    var rupees = readLine();
    println("Enter the rupees : "+rupees);
    var paisa = rupees.toInt * 100;
    println(rupees+" rupees are "+paisa+" paisa");
  }
}
```

### Swift

```swift
// Write a Swift program to convert rupees to paise

import Swift
import Foundation

print("Enter rupees: ")
var rupees = Double(readLine()!)!
print("Paise: ", rupees * 100)
```

### TypeScript

```typescript
// Write a TypeScript program to convert rupees to paise

function rupeesToPaise(rupees: number): number {
  const paise: number = rupees * 100;

  return paise;
}

console.log(rupeesToPaise(100));
```

## Similar programs

- [Convert Rupees To Paise](/program/convert-rupees-to-paise)
- [Convert A String To An Integer](/program/convert-a-string-to-an-integer)
- [Convert String To Lowercase](/program/convert-string-to-lowercase)
- [Convert String To Uppercase](/program/convert-string-to-uppercase)
- [Convert Days To Hours](/program/convert-days-to-hours)
- [Convert Hours To Days](/program/convert-hours-to-days)
- [Convert Days To Weeks](/program/convert-days-to-weeks)
- [Convert Weeks To Days](/program/convert-weeks-to-days)
- [Convert Hours To Minutes](/program/convert-hours-to-minutes)
- [Convert Minutes To Hours](/program/convert-minutes-to-hours)
