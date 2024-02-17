---
title: "Convert Weeks To Hours"
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
    "perl",
    "scala",
    "dart",
    "go",
    "haskell",
    "php",
    "python",
    "r",
  ]
contributors:
  [
    "harshraj8843",
    "esivakumar18",
    "lukaszmielczarekdev",
    "Shalevro2",
    "rksp25",
    "joao-vitor-souza",
    "TechnicalAmanjeet",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 1462
description: "Write a program to convert weeks to hours."
---

## Write a program to convert weeks to hours

1 week = 7 days = 168 hours

```
Input  : 5
Output : 840
```

---

```c
// Write a C program to convert weeks to hours

#include <stdio.h>

void main()
{
    int num;

    printf("Enter number of weeks : ");
    scanf("%d", &num);

    int total_hours;

    total_hours = num * 168;

    printf("\nTotal hours is  : %d\n", total_hours);
}
```

```csharp
// Write a C# program to convert weeks to hours

using System;

class VolumeaOfCuboid
{
    static void Main()
    {
        double number = Convert.ToDouble(Console.ReadLine());


        // Applying the formula
        double hours = number * 168;

        Console.WriteLine("Total hours in "+ number + " weeks is  : " + hours);
        ;
    }
}
```

```cpp
// Write a C++ program to convert weeks to hours

#include <iostream>

using namespace std;

int main()
{
    int num_of_weeks;
    cout << "Enter Number of Weeks : ";
    cin >> num_of_weeks;

    int total_hrs = num_of_weeks * 168;

    cout << "\nTotal hrs is "<<num_of_weeks<<" weeks : " << total_hrs << endl;

    return 0;
}
```

```dart
// Write a Dart program to convert weeks to hours

import 'dart:io';

void main() {
  print('Enter Number of Weeks : ');
  int num_of_weeks = int.parse(stdin.readLineSync()!);

  int total_hrs = num_of_weeks * 168;

  print('Total hours : \n$total_hrs');
}
```

```fsharp
// Write a F# program to convert weeks to hours

main = do
 let num_of_weeks = 5
 let total_hrs = num_of_weeks * 168
 putStrLn "Sum of two numbers is:"
 print (total_hrs)
```

```go
// Write a Go program to convert weeks to hours

package main

import "fmt"

func main(){
 var num_of_weeks int


  fmt.Println("Enter Number of weeks : ")
  fmt.Scan(&num_of_weeks)

	var total_hrs = num_of_weeks * 168

  fmt.Println("Total hrs : ", total_hrs)
}
```

```haskell
-- Write a Haskell program to convert weeks to hours

main :: IO ()
main = do
   putStrLn "Enter weeks: "
   input1 <- getLine
   let weeks = read input1 :: Float

   let hours = weeks * 168
   putStrLn $ show (hours)
```

```java
// Write a Java program to convert weeks to hours

import java.util.Scanner;

public class ConvertWeeksToHours {

	public static double weeksToHours(double hours) {
        return (24 * 7) * hours;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of weeks: ");
        double weeks = scanner.nextDouble();
        double hours = weeksToHours(weeks);
        System.out.println(weeks + " weeks is equal to " + hours + " hours.");
    }
}
```

```javascript
// Write a JavaScript program to convert weeks to hours

let num_of_weeks = 15;

let totalHrs = num_of_weeks * 168;

console.log(`Total hrs in ${num_of_weeks} weeks is ${totalHrs}`);
```

```julia
# Write a Julia program to convert weeks to hours

result = 0

# Prompt to enter
total_hrs = 0

println("Enter number of weeks : ")

num_of_weeks = readline()
num_of_weeks = parse(Int64, num_of_weeks)

total_hrs = num_of_weeks * 168


println("Total hrs :", total_hrs)
```

```kotlin
// Write a Kotlin program to convert weeks to hours

fun main() {
    print("Enter weeks : ")
    println()
    var wk = readLine()

    try {
        println("$wk weeks = " + ConvertWeeksToHours(wk!!.toInt()) + " hours")
    } catch (exception: Exception) {
        println("Input string was not in a correct format")
    }

}

private fun ConvertWeeksToHours(wk: Int): Int {
    val weeksToHours = wk * 168

    return  weeksToHours
}
```

```perl
# Write a Perl program to convert weeks to hours

my $weeks = <STDIN>;
$hours = $weeks * 168;
print "hours: $hours"
```

```php
// Write a PHP program to convert weeks to hours

<?php
  $x = readline('Enter Weeks: ');

  $x1 = $x * 168;
  echo "Hours: $x1 \n";
?>
```

```python
# Write a Python program to convert weeks to hours

print("Hours:", 168 * int(input("Weeks: ")))
```

```r
# Write a R program to convert weeks to hours

weeks = 5
hours = weeks * 168
cat("hours: ", hours)
```

```ruby
# Write a Ruby program to convert weeks to hours

print "Enter weeks : \n"
weeks = gets.chomp.to_i
hours = weeks * 168
print "Hours : #{hours}"
```

```scala
// Write a Scala program to convert weeks to hours

object HelloWorld {
	def main(args: Array[String]): Unit = {
	  val weeks = scala.io.StdIn.readInt();
	  println("Hours: " + weeks * 168);
	}
}
```

```swift
// Write a Swift program to convert weeks to hours

import Swift
import Foundation

print("Enter weeks: ")
var weeks = Int(readLine()!)!
print("Hours: ", weeks * 168)
```

```typescript
// Write a TypeScript program to convert weeks to hours

const convertWeeksToHours = (weeks: number): number => weeks * 168;

console.log(convertWeeksToHours(5));
```
