Blog Props
Eric Jones
Eric Jones
Read more posts by this author.

Eric Jones
ERIC JONES
28 DEC 2017 • 1 MIN READ



A great way to practice building web stuff is to copy sites or apps that are already built.

This exercise will help you to fight through the harder aspects instead of saying "I actually wanted it to look like this," when you might just want to take the easy way out.

Re-create the first page of this website.

You will organize it into these components:

Indented components are suppose to be nested.


<Header />
    <Navbar />
<BlogList />
    <BlogPost />
<Footer />

You will pass <BlogPost /> it's title, sub title, author, and date through props. <input type="checkbox">

Eventually we will be pulling data from api's and displaying data like these blog posts in a list, much like we see here

Feel free to use the following array to .map() on:

[
    {
        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"
    },{
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "eptember 18, 2019"
    },{
        title: "Science has not yet mastered prophecy",
        subTitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2019"
    },{
        title: "Failure is not an option",
        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2019"
    }
]