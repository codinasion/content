---
title: "Calculate The Permutation Of N Objects Taken R At A Time"
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
    "scala",
    "go",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "ShounaKulkarni",
    "harshraj8843",
    "moaldeen",
    "pedram-mohajer",
    "akkshayTandon",
    "Osher160",
    "cacti23",
    "BrokenDesign",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-12-04T16:36:24Z
trackId: 4194
description: "Write a program to calculate the permutation of n objects taken r at a time."
---

## Write a program to calculate the permutation of n objects taken r at a time

Permutation is an arrangement of objects in a particular order. The number of permutations on n objects taken r at a time is given by the formula n!/(n-r)!

```
Input  : 5, 2
Output : 20
```

---

```c
// Write a C program to calculate the permutation of n objects taken r at a time

#include <stdio.h> /* printf, scanf */

int CalcPermutation(int n,int r);

int main()
{
    int n = 0;
    int r = 0;


    printf("please enter 2 numbers n and r:\n");

    scanf("%d %d",&n,&r);

    printf("%d\n",CalcPermutation(n,r));


    return 0;
}

int CalcFactorial(int n)
{
    if(n == 1)
    {
        return n;
    }

    return n * (CalcFactorial(n - 1));
}

int CalcPermutation(int n,int r)
{
    return CalcFactorial(n)/ CalcFactorial(n - r);
}
```

```csharp
// Write a C# program to calculate the permutation of n objects taken r at a time

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
       int n = Convert.ToInt32(Console.ReadLine());
       int r = Convert.ToInt32(Console.ReadLine());
       int p = factorial(n)/factorial(n-r);

       Console.WriteLine("The permutation is : " + p);
    }

    static int factorial(int num){
        if(num == 0 || num == 1) return 1;
        else return num * factorial(num-1);
    }
}
```

```cpp
// Write a C++ program to calculate the permutation of n objects taken r at a time

#include <iostream>

using namespace std;

int factorial(int n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

int main() {
  int n, r;
  cout << "Enter value of n and r: ";
  cin >> n >> r;

  if (r > n) {
    cout << "Error: r should be less than or equal to n." << endl;
    return 1;
  }

  int result = 1;

  if (r == 0) {
    result = 1;
  } else if (r == 1) {
    result = n;
  } else if (n == r || n - 1 == r) {
    result = factorial(n);
  } else {
    for (int i = 0; i < n - r; ++i) {
      result *= n - i;
    }
  }

  cout << "Permutation of " << n << " objects taken " << r << " at a time is: " << result << endl;
  return 0;
}
```

```go
// Write a Go program to calculate the permutation of n objects taken r at a time

package main

import (
	"errors"
	"fmt"
	"log"
)

func factorial(num int) int {
	if num == 0 {
		return 1
	} else {
		return num * factorial(num-1)
	}
}

func permutations(total int, sample int) (int, error) {
	var value int
	var error error
	if total > sample {
		value = factorial(total) / factorial(total-sample)
	} else {
		error = errors.New(fmt.Sprintf("ERROR: supplied total > sample; permutations(total=%d, sample=%d)", total, sample))
	}
	return value, error
}

func main() {
	var result, err = permutations(5, 2)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(result)
}
```

```java
// Write a Java program to calculate the permutation of n objects taken r at a time

public class CalculateThePermutationsOfNObjectsTakenAtTime {

  public static void main(String[] args) {
    if(args.length == 2) {
      int n = 0;
      int r = 0;
      try {
        n = Integer.parseInt(args[0]);
        r = Integer.parseInt(args[1]);
      } catch(Exception error){
        throw new IllegalArgumentException("Error parsing arguments: "+args.toString());
      }
      System.out.println(permutations(n, r));
    }
    else {
      throw new IllegalArgumentException(
        "Expected two arguments, received " + args.length + " arguments"
      ) ;
    }
  }

  public static int factorial(int num) {
      if (num == 0) return 1;
      return num * factorial(num - 1);
  }

  public static int permutations(int total, int sample) {
    try {
      return factorial(total)/factorial(total-sample);
    }
    catch(Exception error){
      throw error;
    }
  }
}
```

```javascript
// Write a JavaScript program to calculate the permutation of n objects taken r at a time

function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

function permutations(total, sample) {
  try {
    return factorial(total) / factorial(total - sample);
  } catch (error) {
    throw error;
  }
}

console.log(permutations(5, 2));
```

```php
// Write a PHP program to calculate the permutation of n objects taken r at a time

<?php
function factorial($num) {
  if($num == 0 || $num == 1) return 1;
  else return $num * factorial($num-1);
}

$n = (int)readline("Enter total objects(n) : ");
$r = (int)readline("Enter objects to be selected(r) : ");
$p = factorial($n)/factorial($n-$r);
echo "The permutation is : " . $p;
?>
```

```python
# Write a Python program to calculate the permutation of n objects taken r at a time

def factorial(x):
    if x == 1 or 0:
        return 1
    return x * factorial(x - 1)


n, r = map(int, input().split())

print(factorial(n) // factorial(n - r))
```

```r
# Write a R program to calculate the permutation of n objects taken r at a time

# Function to calculate permutations
calculate_permutation <- function(n, r) {
  return(factorial(n) / factorial(n - r))
}

# Example usage
n <- 5
r <- 2
result <- calculate_permutation(n, r)

cat("The number of permutations of", n, "objects taken", r, "at a time is:", result, "\n")
```

```ruby
# Write a Ruby program to calculate the permutation of n objects taken r at a time

def factorial(n)
  (1..n).reduce(1, :*)
end

def permutation(n, r)
  factorial(n) / factorial(n - r)
end

# Example usage
n = 5
r = 3
puts "Permutation of #{n} objects taken #{r} at a time is: #{permutation(n, r)}"
```

```rust
// Write a Rust program to calculate the permutation of n objects taken r at a time

fn factorial(num: i64) -> i64 {
    if num == 0 {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

fn permutations(total: i64, sample: i64) -> i64 {
    if total > sample {
        return factorial(total) / factorial(total - sample);
    } else {
        panic!(
            "ERROR: supplied total > sample; permutations(total={}, sample={})",
            total, sample
        )
    }
}

fn main() -> () {
    println!("{}", permutations(5, 2))
}
```

```scala
// Write a Scala program to calculate the permutation of n objects taken r at a time

def factorial(num: Integer): Integer = {
    if (num == 0) return 1
        return num * factorial(num - 1)
    }

def permutations(total: Integer, sample: Integer): Integer = {
    if(total > sample) {
        return factorial(total)/factorial(total-sample)
    } else {
        throw new Exception(s"ERROR: supplied total > sample; permutations(total=${total}, sample=${sample})")
    }
}

println(permutations(5, 2))
```

```swift
// Write a Swift program to calculate the permutation of n objects taken r at a time

import Foundation

// Function to calculate factorial
func factorial(_ n: Int) -> Int {
    return (n == 0) ? 1 : n * factorial(n - 1)
}

// Function to calculate permutations
func permutation(_ n: Int, _ r: Int) -> Int {
    return factorial(n) / factorial(n - r)
}

// Taking input from the user
print("input:", terminator: " ")
let inputs = readLine()?.split(separator: ",").compactMap { Int($0.trimmingCharacters(in: .whitespaces)) }
if let n = inputs?[0], let r = inputs?[1] {
    // Calculating permutations
    let result = permutation(n, r)

    // Displaying the result
    print(result)
} else {
    print("Invalid input")
}
```

```typescript
// Write a TypeScript program to calculate the permutation of n objects taken r at a time

function factorial(num: number): number {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

function permutations(total: number, sample: number): number {
  if (total > sample) {
    return factorial(total) / factorial(total - sample);
  } else {
    throw new Error(
      `ERROR: supplied total > sample; permutations(total=${total}, sample=${sample})`
    );
  }
}

console.log(permutations(5, 2));
```
