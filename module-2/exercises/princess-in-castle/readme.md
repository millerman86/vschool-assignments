The Princess Is In Another Castle


Requirements:

Create a class for a player that has the following properties:

name of type String <input type="checkbox" checked>

totalCoins of type Number <input type="checkbox" checked>

status of type String (options are Powered Up, Big,Small, and Dead) <input type="checkbox" checked>

hasStar of type Boolean (Is a star active?) <input type="checkbox" checked>

setName of type function - sets 'name' to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi" <input type="checkbox" checked>

gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".) <input type="checkbox" checked>

gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star) <input type="checkbox" checked>

gameActive of type Boolean, true by default, becomes false when status is Dead <input type="checkbox" checked>

addCoin of function - adds a coin to totalCoins <input type="checkbox" checked>

print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
<input type="checkbox" checked>


Name: Luigi,
Status: Small, etc, etc
Use that class to create the object.

Create a random range function that returns either 0, 1, or 2.

If the value is 0 call the gotHit() function on the object.
If the value is 1 call the gotPowerup() function on the object
If the value is 2 call the addCoin() function

Then call the print method on the object.

Now put the random range function inside a setInterval function that ends after gameActive === false

The end product will look something like this:
* https://coursework.vschool.io/the-princess-is-in-another-castle/