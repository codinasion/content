---
title: "Calculate The Combination Of N Objects Taken R At A Time"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "typescript",
    "go",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "roberanegussie",
    "joao-vitor-souza",
    "Larryking007",
    "kshitijv256",
    "PoweredByCaffein",
    "grraghav120",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-08-03T20:39:16Z
trackId: 2659
description: "Write a program to calculate the combination of n objects taken r at a time."
---

## Table of contents

## Write a program to calculate the combination of n objects taken r at a time

Combination is a selection of objects from a group such that (unlike permutations) the order of selection does not matter. The number of combinations on n objects taken r at a time is given by the formula n!/(r!(n-r)!) = n(n-1)(n-2)...(n-r+1)/r!

```
Input  : 5, 2
Output : 10
```

---

### C

```c
// Write a C program to calculate the combination of n objects taken r at a time

#include<stdio.h>

int factorial(int n)
{
    if(n==0)
        return 1;
    else
        return n*factorial(n-1);
}

int main()
{
    int n = 5;
    int r = 2;
    int nCr=factorial(n)/(factorial(r)*factorial(n-r));
    printf("%d",nCr);
    return 0;
}
```

### C#

```csharp
// Write a C# program to calculate the combination of n objects taken r at a time

using System;

public class combinationOfNObjectsTakenRAtATime
{
    public int combination(int n, int r)
    {
        int factorial(int n)
        {
            int result;
            if (n == 1)
            {
                return 1;
            }
            else
            {
                result = factorial(n - 1) * n;
                return result;
            }
        }
        int x = n - r;
        int comb = factorial(n) / (factorial(r) * factorial(x));
        return comb;
    }
    public static void Main(String[] args)
    {
        combinationOfNObjectsTakenRAtATime a = new combinationOfNObjectsTakenRAtATime();
        int n = 5;
        int r = 2;
        Console.WriteLine("Input  : {0}, {1}", n, r);
        Console.WriteLine("Output : {0}", a.combination(n, r));

    }
}
```

### C++

```cpp
// Write a C++ program to calculate the combination of n objects taken r at a time

#include <iostream>

using namespace std;

int fact(int n){
    int f=1;
    for(int i=1;i<=n;i++) f*=i;
    return f;
}

int main()
{
    int n,r;
    cin>>n>>r;
    int ans=(fact(n)/(fact(r)*fact(n-r)));
    cout<<ans<<'\n';
    return 0;
}

// Contributed by Raghav Garg @grraghav120
```

### Go

```go
// Write a Go program to calculate the combination of n objects taken r at a time

package main

import "fmt"

func main() {
	var n, r int
	fmt.Printf("Enter the value of n and r separated by space:\t")
	fmt.Scanf("%d %d", &n, &r)
	fmt.Println("Input:\t", n, r)


	fmt.Println("Output:\t", calculateFactorial(n)/(calculateFactorial(r)*calculateFactorial(n-r)))
}

func calculateFactorial(n int) int {
	result := 1
	for n > 0 {
		result *= n
		n--
	}

	return result
}
```

### Java

```java
// Write a Java program to calculate the combination of n objects taken r at a time

class CalculateTheCombinationOfNObjectsTakenRAtATime {
    public static void main(String[] args) {
        int n = 5;
        int r = 2;
        int nCr = factorial(n) / (factorial(r) * factorial(n - r));
        System.out.println(nCr);
    }

    public static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to calculate the combination of n objects taken r at a time

// JavaScript program to calculate the combination of n objects taken r at a time
// n!/(r!(n-r)!) = n(n-1)(n-2)...(n-r+1)/r!

function range(a, b) {
  var total = a,
    i = a;

  while (i++ < b) {
    total *= i;
  }
  return total;
}

function combination(n, r) {
  if (n == r || r == 0) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return range(r + 1, n) / range(1, n - r);
  }
}

console.log(combination(5, 2));
```

### Python

```python
# Write a Python program to calculate the combination of n objects taken r at a time

def nCr(n, r):
    return factorial(n) / (factorial(r) * factorial(n - r))


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)


n = 5
r = 2
print(int(nCr(n, r)))
```

### TypeScript

```typescript
// Write a TypeScript program to calculate the combination of n objects taken r at a time

// JavaScript program to calculate the combination of n objects taken r at a time
// n!/(r!(n-r)!) = n(n-1)(n-2)...(n-r+1)/r!

function rng(a: number, b: number): number {
  let total = a,
    i = a;

  while (i++ < b) {
    total *= i;
  }
  return total;
}

function cbn(n: number, r: number): number {
  if (n == r || r == 0) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return rng(r + 1, n) / rng(1, n - r);
  }
}

console.log(cbn(5, 2));
```
