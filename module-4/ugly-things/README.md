# Ugly Things

You are going to build an React app that allows a user to post things that they think are ugly. The data of ugly things should be managed by React Context.

### Requirements
* Must have 3 input fields: <input type="checkbox" checked />
* Img url field (A url to an image of an ugly thing) <input type="checkbox" checked />
* Title field (The title of the image that the user wants to give) <input type="checkbox" checked />
* Description field (why the user thinks it is ugly) <input type="checkbox" checked />
* Must have Submit button that submits the data <input type="checkbox" checked />
* Must display a list of posted images with their associated titles and descriptions <input type="checkbox" checked />
* Must store the array of ugly thing objects in the Context store <input type="checkbox" checked />
* Must be able to delete an ugly thing 
* Must be able to edit an ugly thing


### Optional
* Have 3 images horizontally on each row
* Allow each image to have one or more user-submitted comments
* Allow the ability to delete specific comments

## Approach
This assignment is for practicing context. In the real world, if you wanted to build this, you probably would not use context. For that reason, it may feel a bit contrived.

Think of your component tree. You need to have a form for submission, and a list of ugly things. These two components would probably be siblings. Usually, it would be easy enough to lift state to their parent, so that the form can add to an array of ugly things in the state of the parent, and the parent can pass that array down as props to a component to display that list. For this project, we'll have our context provider manage the state of our array.

Context is tough, so be prepared to spend some time on this project.