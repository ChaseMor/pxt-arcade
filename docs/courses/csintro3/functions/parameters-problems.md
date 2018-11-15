# Problem Set: Parameters

This section contains a number of selected problems for the Parameters section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #: Pizza Place

The following function will randomly place a pizza sprite on the screen.

```typescript
function makePizza() {
    let pizza: Sprite = sprites.create(sprites.food.smallPizza);
    pizza.x = Math.randomRange(0, scene.screenWidth());
    pizza.y = Math.randomRange(0, scene.screenHeight());
    loops.pause(200);
}
```

Copy this function into your code. 

You're running your own pizza place and have received the following orders from customers:
* An order of 3 pizzas
* An order of 5 pizzas
* An order of 2 pizzas

Write a function called ``makeOrder`` that takes in number parameter called ``numOfOrders``. The function should ``||game:game.splash||`` how many pizzas have been ordered and then use a ``||loops:for||`` loop to make that many pizzas.

## Problem #: Capslock

Parameters don't have to just be strings. They can be any type.

```typescript
function printHello(n: number, capslock: boolean) {
    for (let i = 0; i < n; i++) {
        if (capslock) {
            console.log("HELLO");
            console.log("WORLD");
        } else {
            console.log("hello");
            console.log("world");
        }
    }
}

printHello(3, true);
printHello(7, false);
```

cut from section because getting into three levels of nesting is a bit much for now; making them make this function (probably refactored as storing the variable first to reduce the nesting) would be a reasonable second to last task here

## Example #: Follow the Leader

Write a function called ``follow`` that accepts 2 ``||sprites:sprites||``, a ``leader

```typescript
function follow(follower: Sprite, leader: Sprite) {
    let diffX = leader.x - follower.x;
    let diffY = leader.y - follower.y;
    follower.vx = diffX;
    follower.vy = diffY;
}
```

This is conceptually too much to just skim over; make this the problem on this page with an explanation of what it's going to do so it's not just some random numbers that make sprites do something they can't see (as thre is no indication to run the code
