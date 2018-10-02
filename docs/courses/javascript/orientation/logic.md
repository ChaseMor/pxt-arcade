# logic operators

One of the key topics covered with blocks was the idea of using logic to read the state of a program, and alter its behavior accordingly. As expected, everything that we did in blocks, we can do in JavaScript and we can actually do more.

table of blocks -> JavaScript equivalent

|     |     |
| --- | --- |
| a and b | a && b |
| not a | !a |

etc

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

|Name 	|JavaScript 		|
|:---	|:---:				|
|And	|`bool1 && bool2`	|
|Or 	|`bool1` &vert;&vert; `bool2` |
|Not 	|`!bool1`			|

### Examples of using Comparisons and Boolean Operators

```typescript
let word: string = "word";
let num: number = 1;

if (word == "word" && num > 0) {
    if (num < 2) {
        console.log("I'm here!");
    } else {
        console.log("No I'm here!");
    }
}
console.log("I'm outside!");
```
