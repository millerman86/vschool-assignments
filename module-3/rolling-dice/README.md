Rolling Dice with React State
Nate Jensen
Nate Jensen
Read more posts by this author.

Nate Jensen
NATE JENSEN
19 NOV 2018 • 1 MIN READ



Using what you have just learned about state in React, you are going to create a <DiceBox /> component that renders 5 dice numbers for the user to view.

# You Must
1. Create a class component called <DiceBox />
2. Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
3. Display the 5 random numbers in your <DiceBox /> JSX.
4. Provide a button the user can click on that will redo step 2 and present the new numbers to the user.


### Take it further
1. Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
2. Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset (resetting is done in the next step).
3. Have the dice reset (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll.
#### Hints:
4. Consider starting your state off with 5 numbers like this:

```class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }
```

With this set up, you then need to write a method that uses this.setState to randomly change the 5 numbers to a number between 1 - 6.
Ex: Math.floor(Math.random() * 6;
From there its all about how you want to display those numbers in your return statement.

Resources
React State


Link to this assignment: 
* https://coursework.vschool.io/dice-react-state/