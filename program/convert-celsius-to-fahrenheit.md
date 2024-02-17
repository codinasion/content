---
title: "Convert Celsius To Fahrenheit"
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
    "RiteshK-611",
    "anandfresh",
    "esivakumar18",
    "rafaover",
    "joao-vitor-souza",
    "neelesh08",
    "rahmat-dev",
    "vedha-vikash-pixel",
    "GodWin1100",
    "RitoDas1923",
    "GuyEternal",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2281
description: "Write a program to convert celsius to fahrenheit."
---

## Write a program to convert celsius to fahrenheit

fahrerheit = (celsius \* 9/5) + 32

```
Input ( C )  : -40
Output ( F ) : -40
```

---

```c
// Write a C program to convert celsius to fahrenheit

#include<stdio.h>


float convertCtoF(float c)
{
    float f = 1.8*c + 32;
    return f;


}

int main()
{
    float celsius , fahrenheit;
    printf("Enter the temperature");
    scanf("%f", &celsius);

    fahrenheit = convertCtoF(celsius);
    printf("Fahrenheit value is %.2f" , fahrenheit);


}
```

```csharp
// Write a C# program to convert celsius to fahrenheit

using System;

class MainClass {
    public static void Main (string[] args) {
    Console.WriteLine ("Please enter the celcius : ");
    double celsius = Convert.ToDouble(Console.ReadLine());
    double fahrerheit = (celsius * 9/5) + 32;
    Console.WriteLine(+celsius+" celsius is "+fahrerheit+" fahrerheit");
  }
}
```

```cpp
// Write a C++ program to convert celsius to fahrenheit

#include <iostream>
using namespace std;

int main()
{
    int celsius,fahrenheit;
    cout<<"Input ( C ): ";
    cin>>celsius;
    fahrenheit = (celsius * 9/5) + 32;
    cout<<"Output ( F ): "<<fahrenheit;
    return 1;
}
```

```fsharp
// Write a F# program to convert celsius to fahrenheit

let celciusToFahrenheit celsius : float =
  (celsius * 1.8) + 32.00

let fahrenheit =  celciusToFahrenheit -40.00

printfn "Equivalent fahrenheit : %f" fahrenheit
```

```go
// Write a Go program to convert celsius to fahrenheit

package main

import "fmt"

func main() {
	var celsius float64 = 0
	fmt.Printf("Enter temparature in celsius: \n")
	fmt.Scan(&celsius)

	fmt.Printf("Temparature in fahrenheit: %.2f", (celsius * 9.0/5.0) + 32.0)
}
```

```haskell
-- Write a Haskell program to convert celsius to fahrenheit

main :: IO ()
main = do
    putStrLn "Enter temperature in Celsius: "
    input <- getLine
    let celsius = read input :: Float

    let fahrenheit = (celsius * 9/5) + 32
    putStrLn $ "Given Celsius in Fahrenheit: " ++ show(fahrenheit) ++ " °F"
```

```java
// Write a Java program to convert celsius to fahrenheit

class ConvertCelsiusToFahrenheit {
    public static void main(String[] args) {
        int celsius = 100;
        System.out.println(CelciusToFahrenheit(celsius));
    }

    public static int CelciusToFahrenheit(int celsius){
        return (celsius * 9/5) + 32;
    }
}
```

```javascript
// Write a JavaScript program to convert celsius to fahrenheit

function CelciusToFahrenheit(celsius) {
  //conversion function
  return (celsius * 9) / 5 + 32;
}

let celsius = -40;
console.log(CelciusToFahrenheit(celsius)); //-40
```

```julia
# Write a Julia program to convert celsius to fahrenheit

println("Enter value in celsius: ")
celsius = readline()
celsius = parse(Float64, celsius)
fahrenheit = round((celsius * 9/5) + 32; digits = 2)
println(celsius, " °C equals ", fahrenheit, " °F")
```

```kotlin
// Write a Kotlin program to convert celsius to fahrenheit

fun main() {
	val celsius = -40
	val fahrenheit = (celsius * 9 / 5) + 32
	println(fahrenheit)
}
```

```perl
# Write a Perl program to convert celsius to fahrenheit

use warnings;
use 5.010;

sub c_to_f {
  my($c)=@_;
  return ($c*9/5 )+32;
}


print "Input ( C ): ";
$celsius=<STDIN>;

$fahrenheit=c_to_f($celsius);
say "Output ( F ): $fahrenheit";
```

```php
// Write a PHP program to convert celsius to fahrenheit

<?php

$celsius = -40;
$fahrenheit = ($celsius * 9 / 5) + 32;
echo $fahrenheit;
```

```python
# Write a Python program to convert celsius to fahrenheit

# program to convert celsius to fahrenheit

C = input("Input ( C )  : ")

if float(C) > -273.15:
    F = (float(C) * (9 / 5)) + 32

    f = "{0:.3g}".format(F)

    print(f"Output ( F )  : {f}")

else:
    print("Error: Invalid value provided for Celsius")
```

```r
# Write a R program to convert celsius to fahrenheit

celsius = -40
fahrerheit = (celsius * 9/5) + 32
cat("fahrerheit: ", fahrerheit)
```

```ruby
# Write a Ruby program to convert celsius to fahrenheit

puts "Let's convert Celsius to Fahrenheit"
puts 'Insert the Celsius Temperature: '
celsius_input = gets.chomp.to_i
fahrenheit = (celsius_input * 9 / 5) + 32
puts "Temperature Converted: #{fahrenheit}"
```

```rust
// Write a Rust program to convert celsius to fahrenheit

// Convert celsius to fahrenheit
use std::io;
fn main() {
    println!("Enter the temperature in celsius");
    let mut celsius = String::new();
    io::stdin().read_line(&mut celsius).expect("Failed to read line");
    let celsius: f32 = celsius.trim().parse().expect("Please type a number!");
    let fahrenheit = (celsius * 1.8) + 32.0;
    println!("{}°C is {}°F", celsius, fahrenheit);
}
```

```scala
// Write a Scala program to convert celsius to fahrenheit

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val celsius = scala.io.StdIn.readInt();
	  println("fahrenheit: " + ((celsius * 9/5)+32) );
	}
}
```

```swift
// Write a Swift program to convert celsius to fahrenheit

import Swift
import Foundation

var celsius = -40
var fahrerheit = (celsius * 9/5) + 32
print("fahrerheit: ", fahrerheit)
```

```typescript
// Write a TypeScript program to convert celsius to fahrenheit

function CelciusToFahrenheit(celsius: number): number {
  //conversion function
  return (celsius * 9) / 5 + 32;
}

const celsius: number = -40;
console.log(CelciusToFahrenheit(celsius)); //-40
```
