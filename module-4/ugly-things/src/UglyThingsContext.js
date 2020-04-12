import React from "react";
import { v4 as uuidv4 } from "uuid";

const UglyThingsContext = React.createContext();

class MyContextProvider extends React.Component {
  state = {
    uglyThings: [
      {
        description: "This monkey is ugly because it has bad teeth",
        title: "Really ugly monkey",
        url:
          "https://coursework.vschool.io/content/images/size/w2000/2015/05/ugly-1.jpg",
        uuid: uuidv4(),
      },
      {
        description: "This monkey has a big nose and weird colors",
        title: "Cool-looking, but weird",
        url:
          "https://www.earthrangers.com/public/content/wildwire/small-proboscis-monkey.jpg",
        uuid: uuidv4(),
      },
      {
        description: "This 'animal' looks like my rug",
        title: "Sea Creature",
        url:
          "https://www.earthrangers.com/public/content/wildwire/xmonk-fish-flickr-credit-ryo-sato.jpg.pagespeed.ic.qw2NMeISXE.webp",
        uuid: uuidv4(),
      },
      {
        description: "This animal looks like an undeveloped other animal",
        title: "A wombat mixed with a dog?",
        url:
          "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/9/12/1378996028268/Eye-eye-A-baby-aye-aye-an-008.jpg?width=700&quality=85&auto=format&fit=max&s=2f14edeaf22f01a292182f12e3cf1ddf",
        uuid: uuidv4(),
      },
    ],
  };

  render() {
    return (
      <UglyThingsContext.Provider
        value={{
          uglyThings: this.state.uglyThings,
          addUglyThing: (uglyThing) => {},
          removeUglyThing: (uglyThingID) => {
            this.setState((previousState) => {
              return {
                uglyThings: [
                  ...previousState.uglyThings.filter(
                    (item) => item.uuid !== uglyThingID
                  ),
                ],
              };
            });
          },
          saySomethingAboutAnUglyThing: (comment, idOfUglyThing) => {},
        }}
      >
        {this.props.children}
      </UglyThingsContext.Provider>
    );
  }
}

export { UglyThingsContext, MyContextProvider };
