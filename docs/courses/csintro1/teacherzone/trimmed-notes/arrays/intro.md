# Activity: Arrays Intro


## Student Task #1: Random values from Arrays

1. Start with the code from example #1
2. Add two more numbers to the array, by pressing the ``||array:+||`` button on the block
3. Instead of always splashing the value at index 1, change the ``||array:get value at||`` block to choose a random index between 0 and 3 using the ``||math:pick random||`` block
4. Add one more number to the array. Identify whether this value will ever show up as one of the values being ``||game:splashed||``
5. The ``||array:length of array||`` block will return the length of the array - that is, the number of values contained within it. Modify the values in the ``||math:pick random||`` so that it will pick a value between 0 and the highest index in the array

https://makecode.com/_W11d0LV2F3xE

## What did we learn?

1. What is the difference between creating an array of numbers and storing multiple values as individual variables (as in, `value1 = 1`, `value2 = 2`, `value3 ...`)? What can an array do that storing different variables by themselves cannot?
2. How does the ``||array:length||`` of an array relate to the position of the final element?

### ~hint

### Possible Solutions: Answers may vary
1. Using arrays allows you to organize your variables better. Since an array can be any size, in your program, you can use any number of variables. If you were to try to accomplish this otherwise.
2. The position of an element of an array starts at 0, but when counting the elements of an array, we start at 1. That is an array of size 5 will have elements in positions, 0, 1, 2, 3, and 4. So the ``||array:length||`` of an array will always be 1 greater the position of the final element.

### ~



## Task Solution Appendix

### Task #1: Random values from Arrays

```ts
let list: number[] = []
list = [1, 2, 3, 4, 5]
game.splash("" + list[Math.randomRange(0, list.length - 1)])
```