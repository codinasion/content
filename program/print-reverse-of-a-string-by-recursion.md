---
title: "Print Reverse Of A String By Recursion"
languages:
  [
    "c",
    "c-plus-plus",
    "c-sharp",
    "java",
    "javascript",
    "ruby",
    "typescript",
    "scala",
    "go",
    "php",
    "perl",
    "python",
  ]
contributors:
  [
    "Rohan-Kalgutkar",
    "harshraj8843",
    "anandfresh",
    "saintramon",
    "joao-vitor-souza",
    "vishal2376",
    "ynbh",
    "sksachin7z2",
  ]
pubDatetime: 2022-01-26
modDatetime: 2023-11-24T04:10:38Z
trackId: 554
description: "Write a program to print reverse of a string by recursion."
---

## Table of contents

## Write a program to print reverse of a string by recursion

Reverse of a string is the string with characters in reverse order. For example, reverse of "GeeksQuiz" is "ziuQskeeG".

```
Input  : abcd
Output : dcba
```

---

### C

```c
// Write a C program to print reverse of a string by recursion

#include<stdio.h>
#include<string.h>
void reverse(char s[],int start,int end){
if(start>=end)
return ;
char tmp=s[end];
s[end]=s[start];
s[start]=tmp;
start++;
end--;
reverse(s,start,end);
}
 int main(){
    char s[]="im";
    int n=strlen(s);
    reverse(s,0,n);
    for(int i=0;i<=n;i++)
    printf("%c",s[i]);

 }
```

### C#

```csharp
// Write a C# program to print reverse of a string by recursion

using System;

public class ReverseStringRecursion
{
    public static string ReverseString(string str)
        {
            if ((str == null) || (str.Length <= 1))
                return str;
            return ReverseString(str.Substring(1)) + str[0];
        }
    public static void Main(string[] args)
    {
        string myStr="Hello World";
            string reversed = ReverseString(myStr);

            Console.WriteLine("Original String: " + myStr);
            Console.WriteLine("Reversed String: " + reversed);
            Console.ReadLine();
    }
}
```

### C++

```cpp
// Write a C++ program to print reverse of a string by recursion

#include<iostream>
using namespace std;
void reverse(string &s,int start,int end){
if(start>=end)
return ;
swap(s[start],s[end]);
start++;
end--;
reverse(s,start,end);
}
 int main(){
    string s="";
    reverse(s,0,s.length()-1);
    cout<<s;
 }
```

### Go

```go
// Write a Go program to print reverse of a string by recursion

package main
import "fmt"

func reverseText(text string, location int) string {
	if location >= 0 {
		return string(text[location]) + reverseText(text, location - 1)
	}
	return ""
}

func reverse(text string) string {
	return reverseText(text, len(text) - 1)
}
func main() {

	var text string = "SACHIN"
	fmt.Println("Original String: ",text,"\n")
	text = reverse(text)
	fmt.Println("Reversed String: ", text)
}
```

### Java

```java
// Write a Java program to print reverse of a string by recursion

/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 13, 2022
 */

public class PrintReverseOfAStringByRecursion {
    public static void main(String[] args) {
        String orig = "abcd";

        System.out.println("ORIGINAL STRING: " + orig);
        System.out.println("REVERSED STRING: " + reverseString(orig));
    }
    public static String reverseString(String str){
        if (str.isEmpty()){
            return str;
        }
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
```

### JavaScript

```javascript
// Write a JavaScript program to print reverse of a string by recursion

let s = "sachin";

function reverse(s) {
  if (s === "") return "";
  else return reverse(s.substr(1)) + s.charAt(0);
}
console.log(reverse(s));
```

### Perl

```perl
# Write a Perl program to print reverse of a string by recursion

sub reverseString {
    my ($str) = @_;

    if (length($str) <= 1) {
        return $str;
    } else {
        return reverseString(substr($str, 1)) . substr($str, 0, 1);
    }
}

my $inputString = "abcd";
my $outputString = reverseString($inputString);

print "Input: $inputString\n";
print "Output: $outputString\n";
```

### PHP

```php
// Write a PHP program to print reverse of a string by recursion

<?php
function Reverse($str){

    $len = strlen($str);
    if($len == 1){
        return $str;
    }
    else{
        $len--;
        return Reverse(substr($str,1, $len)).substr($str, 0, 1);
    }
}
$str = "Sachin";
print_r(Reverse($str));
?>
```

### Python

```python
# Write a Python program to print reverse of a string by recursion

def reverse(s):
    if len(s) == 0:
        return s
    else:
        return reverse(s[1:]) + s[0]


s = input("Enter the string to be reversed: ")
print(reverse(s))
```

### Ruby

```ruby
# Write a Ruby program to print reverse of a string by recursion

def reverseRecursive(s)
    return s if s.length <= 1
    last = s[-1]
    rest = s[0...-1]
    rest = reverseRecursive(rest)
    return last + rest
end

puts(reverseRecursive("abcd"))
```

### Scala

```scala
// Write a Scala program to print reverse of a string by recursion

object reverseString extends App {

val s = "abcd"
print(reverse(s))

def reverse(s: String): String = {
if (s.length == 1)  s
else reverse(s.tail) + s.head

}
}
```

### TypeScript

```typescript
// Write a TypeScript program to print reverse of a string by recursion

type ReversedString<T> = T extends `${infer U}${infer R}`
  ? `${ReversedString<R>}${U}`
  : T;

function printReverseOfAStringByRecursion(str: string): string {
  if (!str.length) return "";

  return printReverseOfAStringByRecursion(str.substring(1)) + str[0];
}
```
