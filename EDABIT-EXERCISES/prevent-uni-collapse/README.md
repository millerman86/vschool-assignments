### Preventing the Collapse of the Universe

Dividing by 0 is a huge mistake and should be avoided at all costs.

Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.

Examples

- catchZeroDivision("2 / 0") ➞ true

- catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

- catchZeroDivision("2 _ 5 - 10") ➞ false
  Notes
  Multiplication signs will be given as an asterisk _.

### Definition of Infinite

Finite number may refer to:

- A countable number less than infinity, being the cardinality of a finite set – i.e., some natural number, possibly 0
- A real number, such as may result from a measurement (of time, length, area, etc.)
- In mathematical parlance, a value other than infinite or infinitesimal values and distinct from the value 0

### Cardinal Value Definition

A Cardinal Number says how many of something there are, such as one, two, three, four, five. A Cardinal Number answers the question "How Many?"

# THINGS LEARNED IN THIS MODULE

- JavaScript can handle zero division errors a little differently than Python would. Check if a division operation is finite: isFinite()

### What else is finite?

isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

isFinite(null); // true, would've been false with the
// more robust Number.isFinite(null)

isFinite('0'); // true, would've been false with the
// more robust Number.isFinite("0")- lkj;lk jl;kj

- llkj ;lkj
- l;kj;l kjl;j
