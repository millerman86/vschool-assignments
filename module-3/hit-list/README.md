Hit List (axios or fetch)



You have been hired by the Godfather to make an internal mafia hit list site. The Corleone family has been having a hard time keeping track of all the people they need to 'take care of ', and all the jobs that have already been successfully carried out. You have decided to use React to build this site because you want it to be professional (after all, this is the mafia), and Don Vito Corleone has put you on a deadline.

You will need to make a GET request to retrieve the data for this hit list, and you can do this with axios.get() or fetch().

The data is located at this URL: https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json

Make sure to do a good job on this one so that you don't end up on that list :)

Hints:

You'll be storing an array of the targets in state
Your array will start empty, but then be set in a componentDidUpdate
You'll need to map through that array to get React to render it in JSX