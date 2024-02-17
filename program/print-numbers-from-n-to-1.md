---
title: "Print Numbers From N To 1"
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
  ["harshraj8843", "IradDoron", "joao-vitor-souza", "TechnicalAmanjeet"]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2710
description: "Write a program to print numbers from n to 1."
---

## Write a program to print numbers from n to 1

```
Input  : 5
Output : 5 4 3 2 1
```

---

```c
// Write a C program to print numbers from n to 1

#include <stdio.h>

// Write a C program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

void main()
{
    int num;

    printf("Enter number : ");
    scanf("%d", &num);

    int i = num;

    while(i != 0)
    {
      printf("%d ", i);

      i = i - 1;
    }
}
```

```csharp
// Write a C# program to print numbers from n to 1

// Write a C# program to print numbers from n to 1

    // Input  : 5
    // Output : 5 4 3 2 1

public class PrintNumbersFromNTo1
{

    public static void main(String[] args)
    {
        int n = 5;
        int i = 0;

        for(i = n; i > 1; i--)
          {
                Console.WriteLine(i);

          }
    }
}
```

```cpp
// Write a C++ program to print numbers from n to 1

// Write a C++ program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int i = n;

    while(i != 0){
      cout<< i << " ";
      i = i - 1;
    }
}

//Contributed by Technical Amanjeet
```

```dart
// Write a Dart program to print numbers from n to 1

import 'dart:io';

// Write a Dart program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

void main() {
  print('Enter Number : ');
  int num = int.parse(stdin.readLineSync());

  int i = num;

  do {
      print(num);
      num--;
   }
   while(num>0);


}

// written by Technical Amanjeet
```

```fsharp
// Write a F# program to print numbers from n to 1

// Write a F# program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

let mutable num = 5;
let mutable i = num;

while(i >= 1) do
  printfn "%d " i
  i<- i - 1


// Contributed by Technical Amanjeet
```

```go
// Write a Go program to print numbers from n to 1

package main

import "fmt"

// Write a GO program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

func main(){
 var num int

 fmt.Println("Enter number :")
 fmt.Scan(&num)

 var i int = num
 for i > 0{
	 fmt.Println(i)
	 i--
 }
}

// Contributed by Technical Amanjeet
```

```java
// Write a Java program to print numbers from n to 1

import java.util.Scanner;

// Write a Java program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

public class PrintNumbersFromNTo1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int num = sc.nextInt();

    int i = num;

		while(i > 0)
    {
       System.out.println(i + " ");

       i = i - 1;
    }


	}

}

// contributed by Technical Amanjeet
```

```javascript
// Write a JavaScript program to print numbers from n to 1

// Write a JavaScript program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

const num = 5;

let i = num;

for (i = num; i > 0; i--) {
  console.log(i);
}

// contributed by Technical Amanjeet
```

```julia
# Write a Julia program to print numbers from n to 1

# Write a Julia program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

num = 5
i = num

# while loop
while i > 0

    # Printing values of Array
    println(i)

    # Updating iterator globally
    global i -= 1

# Ending Loop
end

# contributed by Technical Amanjeet
```

```kotlin
// Write a Kotlin program to print numbers from n to 1

import java.util.*

// Write a Kotlin program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fun main(args: Array<String>) {

    val reader = Scanner(System.`in`)

    print("Enter a number: ")
    val num = reader.nextInt()

    var i = num

    while ( i > 0 )
    {
      print(i.toString() + " ")

      i = i - 1
    }
}

// Contributed by Technical Amanjeet
```

```perl
# Write a Perl program to print numbers from n to 1

# Write a Perl program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

$num = 5;

$i = num;

do {
   print "$i ";
   $i -= 1;
} while( $i > 0 );

# Contributed by Technical Amanjeet
```

```php
// Write a PHP program to print numbers from n to 1

# <!-- Write a PHP program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1 -->

<?php
  $num = 5;

  $i = $num;

  for ($i = $num; $i > 0; $i--)
  {
    echo"$i ";

  }

?>

# <!-- Contributed by Technical Amanjeet -->
```

```python
# Write a Python program to print numbers from n to 1

# Write a Python program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

inputNumber = input("Enter number : ")

num = int(inputNumber)

for i in range(1, num + 1):
    print(f"{i} ", end="")

    # Contributed By Technical Amanjeet
```

```r
# Write a R program to print numbers from n to 1

# Write a R program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

main <- function() {
    num = 5

    while (num > 0) {
      print(num)
      num <- num - 1
    }

}

main()

# Contributed by Technical Amanjeet
```

```ruby
# Write a Ruby program to print numbers from n to 1

# Write a Ruby program to print numbers from n to 1

# Input  : 5
# Output : 5 4 3 2 1

print "Enter number : "
user_input = gets.chomp

number = user_input.to_i

while number > 0
	print "#{i} "
  number -= 1
end

# Contributed by technical amanjeet
```

```rust
// Write a Rust program to print numbers from n to 1

// Write a Rust program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

fn main() {
  println!("Enter number:");

  let mut input = String::new();
  std::io::stdin().read_line(&mut input).expect("error getting input!");

  let number: f64 = input.trim().parse().expect("Input is not a valid number");
  let i = number

  while i > 0 {
    println!("{i} ");
    i = i - 1;
}

}


// Contributed by technical Amanjeet
```

```scala
// Write a Scala program to print numbers from n to 1

// Write a Scala program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

object PrintNumbersFromNTo1{
    def main(args:Array[String]){

        var num:Int = 5

        print("Enter number: ")
        num = scala.io.StdIn.readInt()

        var x:String=num

        while (x > 0)
        {
           println(x + " ")
            x -= 1
        }

        println("Number is: "+result)
    }
}

// Contributed by Technical Amanjeet
```

```swift
// Write a Swift program to print numbers from n to 1

import Foundation

// Write a Swift program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

var n = 5

var i = n

while (i > 0) {
  print(i)
   i = i - 1
}

// Contributed by Technical Amanjeet
```

```typescript
// Write a TypeScript program to print numbers from n to 1

// Write a TypeScript program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

const n: number = 5;

for (let i = n; i > 0; i--) {
  console.log(i);
}

// contributed by Irad Doron :)
```