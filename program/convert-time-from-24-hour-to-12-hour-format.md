---
title: "Convert Time From 24 Hour To 12 Hour Format"
languages:
  [
    "c-plus-plus",
    "c-sharp",
    "f-sharp",
    "java",
    "javascript",
    "kotlin",
    "perl",
    "ruby",
    "swift",
    "typescript",
    "go",
    "haskell",
    "php",
    "python",
    "r",
    "rust",
  ]
contributors:
  [
    "harshraj8843",
    "lookwhoshere99",
    "LeventCelik",
    "ShounaKulkarni",
    "SaideepKondur",
    "AshitaSingamsetty",
    "rsitters",
    "ddinh0411",
    "Preetiraj3697",
    "anandfresh",
    "rafaover",
    "hi-Kartik2004",
    "joao-vitor-souza",
    "Aditya449930",
    "reinem",
    "sarahloher",
    "greeshma-d",
  ]
pubDatetime: 2022-01-26
modDatetime: 2024-01-06T10:06:42Z
trackId: 4286
description: "Write a program to convert time from 24 hour to 12 hour format."
---

## Write a program to convert time from 24-hour to 12-hour format

```
Input  : 12:05:45
Output : 12:05:45PM
```

---

```csharp
// Write a C# program to convert time from 24 hour to 12 hour format

using System;
class GFG
{

static void TwelveHourFormat(string str)
{
    int h1 = (int)str[0] - '0';
    int h2 = (int)str[1]- '0';

    int hh = h1 * 10 + h2;

    string Meridien;
    if (hh < 12) {
        Meridien = "AM";
    }
    else
        Meridien = "PM";

    hh %= 12;

    if (hh == 0) {
        Console.Write("12");

        for (int i = 2; i < 8; ++i) {
        Console.Write(str[i]);
        }
    }
    else {
        Console.Write(hh);
        for (int i = 2; i < 8; ++i) {
        Console.Write(str[i]);
        }
    }

Console.WriteLine(" "+Meridien);
}

public static void Main()
{
    string str = "12:05:45";
    TwelveHourFormat(str);

}
}
```

```cpp
// Write a C++ program to convert time from 24 hour to 12 hour format

#include <bits/stdc++.h>

using namespace std;

// Convert Function which takes in
// 24hour time and convert it to
// 12 hour format
void convert12(string str)
{
    // Get Hours
    int h1 = (int)str[0] - '0';
    int h2 = (int)str[1] - '0';

    int hh = h1 * 10 + h2;

    // Finding out the Meridien of time
    // ie. AM or PM
    string Meridien;
    if (hh < 12) {
        Meridien = "AM";
    }
    else
        Meridien = "PM";

    hh %= 12;

    // Handle 00 and 12 case separately
    if (hh == 0) {
        cout << "12";

        // Printing minutes and seconds
        for (int i = 2; i < 8; ++i) {
            cout << str[i];
        }
    }
    else {
        cout << hh;
        // Printing minutes and seconds
        for (int i = 2; i < 8; ++i) {
            cout << str[i];
        }
    }

    // After time is printed
    // cout Meridien
    cout << " " << Meridien << '\n';
}

int main()
{
    // 24 hour format
    string str = "12:05:45";
    convert12(str);
    return 0;
}
```

```fsharp
// Write a F# program to convert time from 24 hour to 12 hour format

let convertTo12HourFormat (time : string) =
    let parts = time.Split(':')
    let hour = int parts.[0]
    let minute = parts.[1]
    let second = parts.[2]
    let meridiem =
        if hour < 12 then "AM"
        else "PM"
    let hourIn12HourFormat =
        if hour = 0 then 12
        elif hour > 12 then hour - 12
        else hour
    sprintf "%d:%s:%s%s" hourIn12HourFormat minute second meridiem

let conversion = convertTo12HourFormat "12:05:45"
printfn "%s" conversion
```

```go
// Write a Go program to convert time from 24 hour to 12 hour format

package main

import (
	"fmt"
	"strings"
	"strconv"
)

func convertTimeTo12HourFormat(time string) string{
	parts := strings.Split(time, ":")
	hour := parts[0]
	meridiem := "AM"

	h, _ := strconv.Atoi(hour)
	if h>=12 {
		meridiem = "PM"
	}

	if h := h%12 ; h==0{
		h = 12
	}

	return fmt.Sprintf("%02d:%s:%s%s",h,parts[1],parts[2],meridiem)
}

func main(){
	var time string
	fmt.Print("Input : ")
	fmt.Scanln(&time)

	convertedTime := convertTimeTo12HourFormat(time)
	fmt.Println("Output : ",convertedTime)
}
```

```haskell
-- Write a Haskell program to convert time from 24 hour to 12 hour format

import Text.Printf (printf)

main :: IO ()
main = do
    putStrLn "Enter time in 24-hour format (HH:MM:SS):"
    input <- getLine
    let result = convertTo12HourFormat input
    case result of
        Just time12 -> putStrLn $ "Time in 12-hour format: " ++ time12
        Nothing     -> putStrLn "Invalid input. Please enter time in the format HH:MM:SS."

convertTo12HourFormat :: String -> Maybe String
convertTo12HourFormat input = do
    let components = map read $ splitOn ':' input
    case components of
        [hour, minute, second] | isValidTime hour minute second -> Just $ format12HourTime hour minute second
        _                                                        -> Nothing

isValidTime :: Int -> Int -> Int -> Bool
isValidTime hour minute second =
    hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59

format12HourTime :: Int -> Int -> Int -> String
format12HourTime hour minute second =
    let period = if hour < 12 then "AM" else "PM"
        adjustedHour = if hour == 0 then 12 else if hour <= 12 then hour else hour - 12
    in printf "%02d:%02d:%02d %s" adjustedHour minute second period

splitOn :: Eq a => a -> [a] -> [[a]]
splitOn _ [] = []
splitOn delimiter list =
    let (first, rest) = break (== delimiter) list
    in first : case rest of
        []     -> []
        (_:xs) -> splitOn delimiter xs
```

```java
// Write a Java program to convert time from 24 hour to 12 hour format

import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;

public class convert_time_from_24_hour_to_12_hour_format {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hours: ");
        String input = sc.next();
        String[] time = input.split(":");
        sc.close();
        String twentyFourHoursTime = "";
        try {
            switch(time.length) {
                case 1:
                    twentyFourHoursTime = time[0]+":00:00";
                    break;
                case 2:
                    twentyFourHoursTime = time[0]+":"+time[1]+":00";
                    break;
                default:
                    twentyFourHoursTime = input;
                    break;
            }
            SimpleDateFormat df = new SimpleDateFormat("HH:mm:ss");
            Date date = df.parse(twentyFourHoursTime);
            System.out.println("Output : " + new SimpleDateFormat("hh:mm:ssaa").format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```javascript
// Write a JavaScript program to convert time from 24 hour to 12 hour format

function convertTime(time) {
  let splitTime = time.split(":");
  let hours = Number(splitTime[0]);
  let minutes;
  if (splitTime[1]) {
    minutes = splitTime[1];
  } else {
    minutes = "00";
  }
  if (hours < Number("12")) {
    if (hours === Number("0")) {
      hours = "12";
    }
    return hours + ":" + minutes + " AM";
  } else if (hours === Number("12")) {
    return hours + ":" + minutes + " PM";
  } else {
    hours = hours - "12";
    if (hours === Number("12")) {
      return hours + ":" + minutes + " AM";
    }
    return hours + ":" + minutes + " PM";
  }
}

console.log(convertTime("0:05"));
console.log(convertTime("1:45"));
console.log(convertTime("13"));
console.log(convertTime("1:24"));
console.log(convertTime("22"));
```

```kotlin
// Write a Kotlin program to convert time from 24 hour to 12 hour format

fun convertTo12HourFormat(time: String): String {
    //Splits time into hours, minutes and seconds and extracts them
    val parts = time.split(":")
    val hour = parts[0].toInt()
    val minute = parts[1]
    val second = parts[2]

    //Initializes the converted hour with original hour and the period as "AM"
    var convertedHour = hour
    var period = "AM"

    //Sets period to "PM" if hour is greater or equal to 12
    //Substracts 12 of hour if hour is greater than 12 to convert to 12-hour format
    if (hour >= 12) {
        period = "PM"
        if (hour > 12) {
            convertedHour -= 12
        }
    }
    //Sets hour to 12 if the hour is 0 to convert to 12-hour format
    else if (hour == 0) {
        convertedHour = 12
    }

    //Formats the converted time into a string and returns this
    val convertedTime = String.format("%02d:%s:%s%s", convertedHour, minute, second, period)
    return convertedTime
}

fun main() {
    val time24Hour = "12:05:45"
    val time12Hour = convertTo12HourFormat(time24Hour)
    println("Input: $time24Hour")
    println("Output: $time12Hour")
}
```

```perl
# Write a Perl program to convert time from 24 hour to 12 hour format

my $hour_24 =  <STDIN>; #stors
my ($hour , $minute, $second) = split(':', $hour_24);
my $time = ($hour > 11)? "PM" : "AM";
if($hour > 12)
{
    $hour = $hour - 12;
}
print "Output: ",$hour,":",$minute,":",$second,$time;
```

```php
// Write a PHP program to convert time from 24 hour to 12 hour format

<?php

function twelveHourFormat($time) {
 $date = new DateTime($time);
 return $date->format('h:i:s A') ;
}

echo twelveHourFormat('12:05:45');

?>
```

```python
# Write a Python program to convert time from 24 hour to 12 hour format

full_hour = input()

hour, minute, second = full_hour.split(":")
hour = int(hour)
if hour >= 0 and hour < 12:
    period = "AM"
elif hour > 12 and hour <= 23:
    hour -= 12
    period = "PM"
elif hour == 24:
    hour = 0
    period = "AM"
elif hour == 12:
    period = "PM"

print(f"{hour}:{minute}:{second}{period}")
```

```r
# Write a R program to convert time from 24 hour to 12 hour format

# Function to convert 24-hour format to 12-hour format
convert_time <- function(time) {
    time_24hr <- strptime(time, format = "%H:%M:%S")
    time_12hr <- format(time_24hr, format = "%I:%M:%S%p")
    return(time_12hr)
}

# Taking input from the user
cat("Enter time in 24-hour format (HH:MM:SS): ")
input_time <- readline()

# Converting and displaying the output
output_time <- convert_time(input_time)
cat("Time in 12-hour format: ", output_time, "\n")
```

```ruby
# Write a Ruby program to convert time from 24 hour to 12 hour format

require 'time'

puts "Add a 24h format time (hh:mm:ss): "
hour = gets.chomp

puts Time.strptime(hour, "%H:%M:%S").strftime('%l:%M:%S %p')
```

```rust
// Write a Rust program to convert time from 24 hour to 12 hour format

use std::io;

fn main() {
    // Read input time from the user
    let mut input_time = String::new();
    println!("Enter time in 24-hour format (HH:MM:SS):");
    io::stdin().read_line(&mut input_time).expect("Failed to read line");

    // Parse the input time
    let parts: Vec<&str> = input_time.trim().split(':').collect();
    if parts.len() != 3 {
        println!("Error: Invalid input format. Please use HH:MM:SS");
        return;
    }

    // Validate and parse hours, minutes, and seconds
    let hour: u32 = match parts[0].parse() {
        Ok(value) if value <= 23 => value,
        _ => {
            println!("Error: Invalid hour");
            return;
        }
    };

    let minute: u32 = match parts[1].parse() {
        Ok(value) if value <= 59 => value,
        _ => {
            println!("Error: Invalid minute. Please use minutes between 0 and 59");
            return;
        }
    };

    let second: u32 = match parts[2].parse() {
        Ok(value) if value <= 59 => value,
        _ => {
            println!("Error: Invalid second. Please use seconds between 0 and 59");
            return;
        }
    };

    // Convert to 12-hour format
    let mut formatted_hour = hour % 12;
    if formatted_hour == 0 {
        formatted_hour = 12;
    }

    // Determine AM or PM
    let period = if hour < 12 { "AM" } else { "PM" };

    // Display the result
    println!(
        "Converted time: {:02}:{:02}:{:02}{}",
        formatted_hour, minute, second, period
    );
}
```

```swift
// Write a Swift program to convert time from 24 hour to 12 hour format

/**
 Converts time from 24h format into 12h format.

 This function takes a time between 00:00:00 and 23:59:59 and converts it into its corresponding time between 12:00:00 and 11:59:59, AM or PM.

 - Parameters:
    - timeIn24H: A string holding the 24-hour-formatted time, e.g. "15:46:13".

 - Returns: A new Optional string holding the corresponding 12-hout-formatted time, e.g. "3:46:13PM", or nil if the input string is bad.

 - Note: This function does not change the original string.

 - Example:
 let timeIn12H = convert24hto12h("23:52:14") // "11:52:14PM"
 - Author: Levent Çelik
 - Since: December 2023
 - Version: 1.0
 */

func convert24hto12h(_ timeIn24H: String) -> String? {
    let time = timeIn24H.split(separator: ":")
    guard time.count == 3 else {
        print("Invalid Input: (not HH:MM:SS).")
        return nil
    }
    guard let hour = Int(time[0]), hour >= 0 && hour <= 23 else {
        print("Invalid Time: hour out of range (00:00:00 - 23:59:59).")
        return nil
    }
    guard let minute = Int(time[1]), minute >= 0 && minute <= 59 else {
        print("Invalid Time: minute out of range (0 - 59).")
        return nil
    }
    guard let second = Int(time[2]), second >= 0 && second <= 59 else {
            print("Invalid Time: second out of range (0 - 59).")
            return nil
    }
    if hour == 0 {
        return "12:\(time[1]):\(time[2])AM"
    }
    if hour < 12 {
            return "\(hour):\(time[1]):\(time[2])AM"
    }
    if hour == 12 {
            return "\(hour):\(time[1]):\(time[2])PM"
    }
    return "\(hour-12):\(time[1]):\(time[2])PM"
}

// Test Function
func testConvert24hto12h() {
    print("Testing convert24hto12h function")

    // Function to run a test case
    func runTestCase(input: String, expectedOutput: String?) {
        let actualOutput = convert24hto12h(input)
        assert(actualOutput == expectedOutput, "Test Failed: \(input) should be \(expectedOutput ?? "nil"), but was \(actualOutput ?? "nil")")
    }

    // Midnight and Noon Edge Cases
    runTestCase(input: "00:00:00", expectedOutput: "12:00:00AM")
    runTestCase(input: "12:00:00", expectedOutput: "12:00:00PM")

    // Before Noon
    runTestCase(input: "01:30:45", expectedOutput: "1:30:45AM")
    runTestCase(input: "11:59:59", expectedOutput: "11:59:59AM")

    // After Noon
    runTestCase(input: "13:00:00", expectedOutput: "1:00:00PM")
    runTestCase(input: "23:45:30", expectedOutput: "11:45:30PM")

    // Boundary Times (Transition Between AM and PM)
    runTestCase(input: "12:00:01", expectedOutput: "12:00:01PM")
    runTestCase(input: "11:59:59", expectedOutput: "11:59:59AM")

    // Invalid Inputs
    runTestCase(input: "24:00:00", expectedOutput: nil)
    runTestCase(input: "12:60:00", expectedOutput: nil)
    runTestCase(input: "00:00:60", expectedOutput: nil)
    runTestCase(input: "Not a time", expectedOutput: nil)

    // Edge of Valid Range
    runTestCase(input: "23:59:59", expectedOutput: "11:59:59PM")

    print("All tests passed!")
}

// Call the test function
testConvert24hto12h()
```

```typescript
// Write a TypeScript program to convert time from 24 hour to 12 hour format

function convertTimeTo12Hours(time: string) {
  const splitDate = time.split(":");
  const parsedDate = parseInt(splitDate[0]);
  const ampm = splitDate[2].replace(/[^a-zA-Z]+/g, "");
  let convertedDate = 0;

  if (ampm === "PM") {
    if (parsedDate == 12) {
      convertedDate = 12;
    }
    if (parsedDate > 12) {
      console.log("true");
      convertedDate = parsedDate - 12;
    }
  }
  if (ampm === "AM") {
    if (parsedDate == 12) {
      convertedDate = 0;
    } else {
      convertedDate = parsedDate;
    }
  }

  console.log(convertedDate + `:${splitDate[1]}:${splitDate[2]}`);
}

convertTimeTo12Hours("12:05:45PM");
```
