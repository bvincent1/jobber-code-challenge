## Code challenge

Complete the following exercises in the language of your choice. Demonstrate with tests that
your solutions successfully solves the required problems. Some problems may not be solvable
in all languages; in such a case an appropriate language should be used. We are evaluating
these challenges from the lens that this is your best possible code.
Description

## Fluent Calculator

The Kata is inspired by the “Calculating with Functions Kata for JavaScript” on codewars. The
goal is to implement a simple calculator which uses fluent syntax:

```js
Calc.new.one.plus.two;
Calc.new.five.minus.six;
// Should return -1
Calc.new.seven.times.two;
// Should return 14
Calc.new.nine.divided_by.three;
// Should return 3
```

There are only four operations that are supported (plus, minus, times, divided_by) and 10 digits
(zero, one, two, three, four, five, six, seven, eight, nine).
Each calculation consists of one operation only and will return an integer.
Note: This is not a string parsing problem. The calls above are a chain of methods. Some
languages may require parenthesis in method calls. That is OK, but consider a different
language what would support the above syntax if possible.

## Secret String

There is a secret string which is unknown to you. Given a collection of random triplets from the
string, recover the original string.
A triplet here is defined as a sequence of three letters such that each letter occurs somewhere
before the next in the given string. "whi" is a triplet for the string "whatisup".
As simplifications, you may assume that no letter occurs more than once in the secret string
and that the all characters are lower-case.
You can assume nothing about the triplets given to you other than that they are valid triplets
and that they contain sufficient information to deduce the original string. In particular, this
means that the secret string will never contain letters that do not occur in one of the triplets
given to you.

```js
secret_1 = "whatisup";
triplets_1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
];
```

v1.4.0

## Notice

Some of the exercises above are sourced from codewars.com under the FreeBSD 2­Clause
License:
https://www.codewars.com/about/terms­of­service
Copyright (c) , All rights reserved. Redistribution and use in source and binary forms, with or
without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions
   and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of
   conditions and the following disclaimer in the documentation and/or other materials provided
   with the distribution.
   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
   IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
   PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. The views and
   conclusions contained in the software and documentation are those of the authors and should
   not be interpreted as representing official policies, either expressed or implied, of the FreeBSD
   Project.
