---
title: "Print Pattern 1"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "kotlin",
    "ruby",
    "swift",
    "typescript",
    "dart",
    "go",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "ShivangiRai1310",
    "ApurvaR1",
    "ShounaKulkarni",
    "harshraj8843",
    "vedantpople4",
    "Tushar12222",
    "PavanKumarCB",
    "roberanegussie",
    "roshan798",
    "anandfresh",
    "joao-vitor-souza",
    "vedha-vikash-pixel",
    "123shuklaayush",
    "harrytjbreen",
    "pramaai",
    "PraaneshSelvaraj",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-31T15:55:33Z
trackId: 4113
description: "Write a program to print pattern 1."
---

## Write a program to print pattern 1

```
Input  : 5

Output :
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

```c
// Write a C program to print pattern 1

#include<stdio.h>

void printPattern(int n) {
	for(int i=1;i<=n;i++) {
		for(int j=1;j<=i;j++) {
			printf("%2d",j);
		}
		printf("\n");
	}
}
void main() {
	int n;
	printf("Enter number of rows: ");
	scanf("%d",&n);
	printPattern(n);
}
```

```csharp
// Write a C# program to print pattern 1

using System;

public class pattern {
    public static void Main(string[] args) {
        Console.WriteLine("Enter length of pattern: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int i, j, num;
        for (i = 0; i < n; i++) {
            num = 1;
            for (j = 0; j <= i; j++) {
                Console.Write(num + " ");
                num++;
            }
            Console.WriteLine();

        }

    }

}
```

```cpp
// Write a C++ program to print pattern 1

#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            cout<<j+1<<" ";
        }
        cout<<endl;
    }
}
```

```dart
// Write a Dart program to print pattern 1

import 'dart:io';
void printPattern(int n){
  for(var i = 1 ; i <= n ; i++){
    for(var j = 1 ; j <= i ; j++){
     stdout.write(j);
    }
    stdout.write("\n");
  }
}

void main() {
  printPattern(5);
}
```

```go
// Write a Go program to print pattern 1

package main

import "fmt"

func main() {
	var rows int
	fmt.Scanf("%d", &rows)
	for i := 1; i <= rows; i++ {
		for j := 1; j <= i; j++ {
			fmt.Printf("%d ", j)
		}
		fmt.Println()
	}
}
```

```java
// Write a Java program to print pattern 1

public class PrintPattern1 {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
```

```javascript
// Write a JavaScript program to print pattern 1

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}

let n = 5;
printPattern(n);
```

```kotlin
// Write a Kotlin program to print pattern 1

/*
Program to print pyramid pattern

Input  : 5
Output :
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

fun main(args : Array<String>){

    var n = readLine()!!.toInt()

    for(i in 1..n) {
        for(j in 1..i) {
            print(j)
            print(" ")
        }
        println()
    }
}
```

```php
// Write a PHP program to print pattern 1

<?php

function printPattern($n){
for ($i=1; $i<=$n; $i++)
{
for($j=1;$j<=$i;$j++)
{
echo $j." ";
}
echo "<br/>";
}
}
printPattern(5);

?>
```

```python
# Write a Python program to print pattern 1

num = int(input("Enter number : "))

for i in range(1, num + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print("")
```

```r
# Write a R program to print pattern 1

printPattern <- function(n) {
  for (i in 1:n) {
    for (j in 1:i) {
      cat(j, " ")
    }
    cat("\n") # Move to the next line after each row
  }
}

# Test the function with input 5
printPattern(5)
```

```ruby
# Write a Ruby program to print pattern 1

print "Enter number : "
num = gets.chomp.to_i

for i in 1..num do
    for j in 1..i do
        print "#{j} "
    end
    puts ""
end
```

```rust
// Write a Rust program to print pattern 1

fn main(){
    let rows = 5;
    for i in 1..=rows{
        for j in 1..=i {
            print!("{} ", j);
        }
        println!();
    }
}
```

```swift
// Write a Swift program to print pattern 1

import Foundation

// Function to print the pattern
func printPattern(upTo n: Int) {
    for i in 1...n {
        for j in 1...i {
            print(j, terminator: " ")
        }
        print()
    }
}

// Reading user input
print("Enter a number: ", terminator: "")
if let input = readLine(), let number = Int(input) {
    printPattern(upTo: number)
} else {
    print("Invalid input")
}
```

```typescript
// Write a TypeScript program to print pattern 1

const input = 5;

for (let i = 1; i <= input; i++) {
  for (let k = 1; k <= i; k++) {
    process.stdout.write(k.toString() + " ");
  }
  console.log("");
}
```
