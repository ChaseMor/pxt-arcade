# Random

## Introduction @unplugged

Let's make a game that responds when one sprite overlaps another

![Random number](/static/tutorials/random/random.gif)

## Step 1

Start by making a new ``||variables:variable||`` called ``||variables:randomNumber||``

## Step 2

Add in a ``||variables:set variable to||`` block to set the value of ``||variables:randomNumber||``

```blocks
let randomNumber = 0
randomNumber = 0
```

## Step 3

Drag in a ``||math:pick random||`` block into the value of the ``||variables:set variable to||`` block


![Pick random number](/static/tutorials/random/pick-random.gif)

```blocks
let randomNumber = 0
randomNumber = Math.randomRange(0, 10)
```

## Step 4

Add a ``||game:splash||`` block. We'll use this to display the value of ``||variables:randomNumber||``


```blocks
let randomNumber = 0
randomNumber = Math.randomRange(0, 10)
game.splash("Hello" + "World")
```
## Step 5

Add in a ``||text:join||`` block into the value of the ``||game:splash||`` block. In the first value for the ``||text:join||``, type "Random Number is " and in the second value place ``||variables:randomNumber||``


![Splash random number](/static/tutorials/random/splash-random.gif)

```blocks
let randomNumber = 0
randomNumber = Math.randomRange(0, 10)
game.splash("Random Number is " + randomNumber)
```

## Step 6

Adjust the range of the ``||math:pick random||`` block to be **1** to *100*

```blocks
let randomNumber = 0
randomNumber = Math.randomRange(1, 100)
```

## Step 7

Create another variable called ``||variables:anotherRandom||``

## Step 8

Set ``||variables:anotherRandom||`` to be equal to a random number with the range from **20** to **30**

```blocks
let randomNumber = 0
let anotherRandom = 0
randomNumber = Math.randomRange(1, 100)
game.splash("Random Number is " + randomNumber)
anotherRandom = Math.randomRange(20, 30)
```

## Step 9

Use another ``||game:splash||`` block to display the value of ``||variables:anotherRandom||``

```blocks
let randomNumber = 0
let anotherRandom = 0
randomNumber = Math.randomRange(1, 100)
game.splash("Random Number is " + randomNumber)
anotherRandom = Math.randomRange(20, 30)
game.splash("Another Random Number is " + anotherRandom)
```
## Complete @unplugged

Congratulations, you can now generate random numbers!
