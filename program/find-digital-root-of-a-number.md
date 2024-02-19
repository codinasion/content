---
title: "Find Digital Root Of A Number"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "harshraj8843",
    "anandfresh",
    "Osher160",
    "joao-vitor-souza",
    "lukastomcisak",
    "devkansara",
    "omprakashchhetri",
    "Akhilbisht798",
    "greeshma-d",
    "vishva-mahadevan",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-27T09:24:09Z
trackId: 3060
description: "Write a program to find digital root of a number."
---

## Table of contents

## Write a program to find digital root of a number

Digital root of a number is the recursive sum of its digits until we get a single digit number.

```
Input  : 1234
Output : 1
```

---

### C

```c
// Write a C program to find digital root of a number

// C Program to find the Digital Root of a Number
#include<stdio.h>
int digital_root(int);
void main()
{
    int num;
    printf("Enter Your Number :\n");
    scanf("%d",&num);
    if(num!=0){
    int dr=digital_root(num);
    printf("Digital Root of %d is %d",num,dr);
    }
}
int digital_root(int n)
{
    int sum=0;
    while(1)
    {
      while(n!=0)
      {
         sum=sum+(n%10);
         n=n/10;
      }
      if(sum>9)
      {
        n=sum;
        sum=0;
      }
      else
        break;
    }
    return sum;
}
```

### C#

```csharp
// Write a C# program to find digital root of a number

using System;
class DigitalRoot {
    static int digroot(int n)
    {
        int root = 0;
        while (n > 0 || root > 9)
        {
            if (n == 0) {
                n = root;
                root = 0;
            }
            root += n % 10;
            n /= 10;
        }
        return root;
    }

    public static void Main()
    {
        Console.Write(digroot(1234));
    }
}
```

### C++

```cpp
// Write a C++ program to find digital root of a number

#include<iostream> // cout, sin

//num must be non negative.
int DigitalRoot(int num);

int main()
{
    int find_my_digital_root = 0;

    std::cout << "please enter a number:" << std::endl;
    std::cin >> find_my_digital_root;

    std::cout << "the digital root of the number:" <<
                DigitalRoot(find_my_digital_root) << std::endl;
}

int DigitalRoot(int num)
{
    while(num > 9)
    {
        int tmp = 0;

        while(num)
        {
            tmp += num % 10;
            num /= 10;
        }
        num = tmp;
    }

    return num;
}
```

### Go

```go
// Write a Go program to find digital root of a number

package main

import "fmt"

func findDigitalRoot(num int) int {
	temp := num
	digit := 0
	droot := 0
	for temp != 0 {
		digit = temp % 10
		droot += digit
		temp /= 10
		if temp == 0 && droot > 9 {
			temp = droot
			droot = 0
		}
	}
	fmt.Println(droot)
	return droot
}
func main() {
	fmt.Println("Enter the number to find its digital root: ")
	var num int
	fmt.Scanln(&num)
	findDigitalRoot(num)
}
```

### Java

```java
// Write a Java program to find digital root of a number

import java.util.Scanner;

public class FindDigitalRootOfANumber{
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int value=scanner.nextInt();
        System.out.println(findDigitalRootOfANumber(value));
        scanner.close();
    }

    private static int findDigitalRootOfANumber(int value) {
        if(value<10) return value;
        value=value%10+findDigitalRootOfANumber(value/10);
        return findDigitalRootOfANumber(value);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to find digital root of a number

function findDigitalRoot(num) {
  let digitalRoot = 0;

  if (num != 0) {
    digitalRoot = (num % 10) + findDigitalRoot(Math.floor(num / 10));
  }

  if (digitalRoot > 9) {
    digitalRoot =
      (digitalRoot % 10) + findDigitalRoot(Math.floor(digitalRoot / 10));
  }
  return digitalRoot;
}

console.log(findDigitalRoot(1234));
```

### Perl

```perl
# Write a Perl program to find digital root of a number

sub digroot
{
    $root = 0;
    while ($n > 0 || $root > 9)
        {
            if ($n == 0) {
                $n = $root;
                $root = 0;
            }

            $root += $n % 10;
            $n = $n / 10;
        }
        return $root;
}

$n = 1234;
print digroot(n);
```

### PHP

```php
// Write a PHP program to find digital root of a number

<?php
function digroot($n)
{
    $root = 0;
    while ($n > 0 || $root > 9)
    {
        if ($n == 0)
        {
            $n = $root;
            $root = 0;
        }

        $root += $n % 10;
        $n /= 10;
    }
    return $root;
}

echo digroot(1234);

?>
```

### Python

```python
# Write a Python program to find digital root of a number

def digitalRoot(num):
    if num == "0":
        return 0

    ans = 0
    for i in range(0, len(num)):
        ans = (ans + int(num[i])) % 9

    if ans == 0:
        return 9
    else:
        return ans % 9


num = "65785412"
print(digitalRoot(num))
```

### Ruby

```ruby
# Write a Ruby program to find digital root of a number

print "Input: "

number = gets.chomp

if number == "0"
    puts "Output: 0"
end

ans = 0
for i in 0..number.length
    ans = (ans + number[i].to_i) % 9
end

if ans == 0
    puts "Output: 9"
else
    puts "Output: #{ans % 9}"
end
```

### TypeScript

```typescript
// Write a TypeScript program to find digital root of a number

const findDigitalRootByRecursion = (val: number) => {
  // If the value is less than 10, viz the digit already single digit
  if (val < 10) return val;
  // using the recursion finding the sum of digit
  val = (val % 10) + findDigitalRootByRecursion(val / 10);
  // removing the decimal part
  val = ~~val;
  return findDigitalRootByRecursion(val);
};

console.log(findDigitalRootByRecursion(1234));
console.log(findDigitalRootByRecursion(642));
console.log(findDigitalRootByRecursion(0));
console.log(findDigitalRootByRecursion(1));
```

## Similar programs

- [Find Square Root Of A Number](/program/find-square-root-of-a-number)
- [Find Cube Root Of A Number](/program/find-cube-root-of-a-number)
- [Find Sum Of Digits Of A Number](/program/find-sum-of-digits-of-a-number)
- [Find Average Of Digits Of A Number](/program/find-average-of-digits-of-a-number)
- [Print Reverse Of A Number By Recursion](/program/print-reverse-of-a-number-by-recursion)
- [Find Average Of Digits Of A Number By Recursion](/program/find-average-of-digits-of-a-number-by-recursion)
- [Find Power Of A Number](/program/find-power-of-a-number)
- [Find Sum Of Digits Of A Number By Recursion](/program/find-sum-of-digits-of-a-number-by-recursion)
- [Check Armstrong Number](/program/check-armstrong-number)
- [Find Smallest Number In An Array](/program/find-smallest-number-in-an-array)
