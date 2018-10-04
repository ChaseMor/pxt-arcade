# logic operators

One of the key topics covered with blocks was the idea of using logic to read the state of a program, and alter its behavior accordingly. As expected, everything that we did in blocks, we can do in JavaScript and we can actually do more.

### If and else statements 

Some of the key blocks we used for logic were the ``||logic:if||`` and ``||logic:if else||`` blocks.

To write these in JavaScript, we simply type

```typescript
if(condition) {
	// code for if the condition is true
}
```

and

```typescript
if(condition) {
	// code for when the condition is true
} else {
	// code for when the condition is false
}
``` 
where `condition` is some sort of boolean. If we recall, a boolean is a value that can be either true, or false. In blocks, these often took the form of blue elongated hexagons like the following

```block
let x = true
```


## Comparisons

We saw in blocks that there were many ways to compare two values. Here is a table of all of the comparisons we used and they JavaScript equivalents

|Name 						|Symbol |JavaScript 		|
|:---						|:---:	|:---:				|
|Equal To 					|=		|`value1 == value2`	|
|Not Equal To 				|&ne;	|`value1 != value2`	|
|Less Than 					|<		|`value1 < value2`	|
|Less Than or Equal To		|&le;	|`value1 <= value2`	|
|Greater Than 				|>		|`value1 > value2`	|
|Greater Than or Equal To	|&ge;	|`value1 >= value2`	|  

### Examples

```typescript
let num: number = -5;
if (num < 0) {
    console.log("num is negative!");
} 
```

```typescript
let num: number = 1;
if (num == 1) {
    console.log("num is one!");
} else {
    console.log("num is not one!");
}
```

Notice how we have been using curly braces (`{` and `}`) and indentations in our code. This is done for two reasons. The first being that it makes our code more readable. We can look at our code and easily decipher what is part of the if statement and what isn't. The second reason is for functionality. While it is true that our code would run the same if we didn't use indentations, we cannot say the same about curly braces. Curly braces are used to group code together. After the condition (or else), the if statement will accept the first thing that follows as what should run if the condition is true (or false). This can either be one line of code, or lines of code grouped together by curly braces. 

With this in mind, the following is completely valid code

```typescript
let num: number = 1;
if (num == 1) console.log("num is one!");
else console.log("num is not one!");
```

This keeps if statements small and compact, but is usually avoided.

## Student Task 1:

1. Create a variable that stores a number
2. Use an `if` statement to perform some comparison on this variable
3. If the condition is true, print a message to the console
4. If the condition is false, print a different message to the console

## Booleans

In blocks, we saw that we could store the value of a boolean as a variable so that we could keep track of it. In JavaScript, we do the same.

```block
let x = true
```

is equivalent to 

```typescript
let x: boolean = true;
```

### Boolean Operators

We saw in blocks a way of performing operations on boolean. This was done with the use of Boolean Operators. 

Here is a table of these operators and their JavaScript equivalents

|Name 	|JavaScript 					|Precedence |
|:---	|:---:							|:---:		|
|Not 	|`!bool1`						|Highest	|
|And	|`bool1 && bool2`				|Medium		|
|Or 	|`bool1` &vert;&vert; `bool2` 	|Lowest		|

### ~hint

Note: When writing Or statements, you need to use the `|` character. This character is called either a vertical bar or pipe and is usually located below the backspace key.

### ~

The precedence of operators becomes an issue when your have different operators that aren't separated by parenthesis. Like the case of `bool1 && bool2 || !bool3`. 

The main take-away from these precedences is that all `&&` operators will be completed before any `||` operators



### Examples of using Comparisons and Boolean Operators

```typescript
let val1: number = 5;
let val2: number = 0;
if (val1 > 2 && val2 == 0) {
	// code for if the condition is true
}
```

```typescript
let num: number = 5;
let bool: boolean = true;
if (num > 2 || bool == 0) {
	// code for if the condition is true
}
```


## Student Task 2:

1. Create two or more variables that each store a number
2. Use an `if` statement to perform **two** comparison on these variable
3. If the condition is true, print a message to the console
4. If the condition is false, print a different message to the console
