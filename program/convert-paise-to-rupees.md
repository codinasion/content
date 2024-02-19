---
title: "Convert Paise To Rupees"
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
  ]
contributors:
  [
    "anandfresh",
    "harshraj8843",
    "roberanegussie",
    "esivakumar18",
    "rksp25",
    "joao-vitor-souza",
    "greeshma-d",
    "anastazir",
    "DheekshaGopika",
    "imtiyaz786",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-08T04:58:00Z
trackId: 814
description: "Write a program to convert paise to rupees."
---

## Table of contents

## Write a program to convert paise to rupees

```
Input  ( Ps ) : 100
Output ( Rs ) : 1
```

---

### C

```c
// Write a C program to convert paise to rupees

#include <stdio.h>

int main() {
    float paise, rupee;
    scanf("%f", &paise);
    rupee = paise / 100;
    printf("%.2f", rupee);
    return 0;
}
```

### C#

```csharp
// Write a C# program to convert paise to rupees

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the paisa value : ");
    double paisa = Convert.ToDouble(Console.ReadLine());
    double rupees = paisa / 100 ;
    Console.WriteLine(paisa+" paisa is "+rupees+" rupees");
  }
}
```

### C++

```cpp
// Write a C++ program to convert paise to rupees

#include <iostream>

using namespace std;

int main()
{
    int ps;
    cout << "Input  ( Ps ) : ";
    cin>>ps;
    int rs = ps / 100;
    cout << "Output ( Rs ) : " <<rs<<endl;
    return 0;
}
```

### Dart

```dart
// Write a Dart program to convert paise to rupees

import 'dart:io';
void main(){
  print("Enter the paise :");
  int paisa = int.parse(stdin.readLineSync()!);
  int rupees = paisa ~/ 100 ;
  print('Equivalent rupees : $rupees');
}
```

### F#

```fsharp
// Write a F# program to convert paise to rupees

let paisaToRupees paisa : int =
  paisa / 100

let rupees =  paisaToRupees 100

printfn "Equivalent rupees : %d" rupees
```

### Go

```go
// Write a Go program to convert paise to rupees

package main

import "fmt"

func main() {
	var paise float64
	fmt.Scan(&paise)
	rupee := paise / 100
	fmt.Println(rupee)
}
```

### Java

```java
// Write a Java program to convert paise to rupees

import java.util.Scanner;

class ConvertPaiseToRupees {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		System.out.print("Input ( Ps ) : ");
		int currencyInPaise = input.nextInt();

		System.out.print("Output ( Rs ) : " + (currencyInPaise / 100));
	}


}
```

### JavaScript

```javascript
// Write a JavaScript program to convert paise to rupees

function paiseToRupees(num) {
  // 100 paise = 1 Rupee
  // 1 paise = 1/100 Rupee
  // 800 paise = 800/100 Rupees = 8 Rupees

  return num / 100;
}

console.log("Paise to Rupees", paiseToRupees(100) + " Rupees");
```

### Julia

```julia
# Write a Julia program to convert paise to rupees

print("Enter the paisa: ")
paisa = parse(Float64, readline(stdin))
rupees =  paisa / 100
println("Equivalent Rupees: ", rupees)
```

### Kotlin

```kotlin
// Write a Kotlin program to convert paise to rupees

fun main() {
    print("Enter paise : ")
    println()
    var input = readLine()

    println("$input pasie = " + ConvertPaiseToRupees(input!!.toDouble()) + " rupees")

}

private fun ConvertPaiseToRupees(paise: Double): Double {
    var rupees = paise / 100

    return rupees
}
```

### Perl

```perl
# Write a Perl program to convert paise to rupees

#!/usr/bin/perl
use warnings;
use strict;
print "Enter the paise : ";
my $paise = <STDIN>;
my $rupees = $paise / 100;
print $paise." paise are ".$rupees." rupees\n";
```

### PHP

```php
// Write a PHP program to convert paise to rupees

<?php
  $x = readline('Enter Paise: ');

  $x1 = $x / 100;
  echo "Rupees: $x1 \n";
?>
```

### Python

```python
# Write a Python program to convert paise to rupees

paise = 100


def to_rupee(p):
    return p / 100


print("Input  ( Ps ) :", paise)

print("Output ( Rs ) :", to_rupee(paise))
```

### R

```r
# Write a R program to convert paise to rupees

paisa = 100
rupees = paisa / 100
cat("Rupees: ", rupees)
```

### Ruby

```ruby
# Write a Ruby program to convert paise to rupees

def paisaToRupees(paisa)
  paisa / 100
end

if $PROGRAM_NAME == __FILE__
  print 'Please enter the paisa : '
  paisa = gets.chomp.to_i

  puts "#{paisa} paisa is #{paisaToRupees(paisa)} rupees"
end
```

### Scala

```scala
// Write a Scala program to convert paise to rupees

import scala.io.StdIn._;

object paisaToRupees {
  def main(args:Array[String]):Unit={
    var paisa = readLine().toInt;
    println("Enter the paisa : "+paisa);
    var rupees = paisa / 100;
    println(paisa+" paisa is "+rupees+" rupees");
  }
}
```

### Swift

```swift
// Write a Swift program to convert paise to rupees

import Swift
import Foundation

print("Enter paise: ")
var paise = Double(readLine()!)!
print("Rupees: ", paise / 100)
```

### TypeScript

```typescript
// Write a TypeScript program to convert paise to rupees

function paiseToRupees(num: number) {
  // 100 paise = 1 Rupee
  // 1 paise = 1/100 Rupee
  // 800 paise = 800/100 Rupees = 8 Rupees
  return num / 100;
}

console.log("Paise to Rupees", paiseToRupees(100) + " rupees");
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
