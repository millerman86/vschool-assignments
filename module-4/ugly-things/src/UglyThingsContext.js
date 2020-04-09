import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const {Provider, Consumer} = React.createContext();


class MyContext extends React.Component {
    state = {
        uglyThings: [
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://coursework.vschool.io/content/images/size/w2000/2015/05/ugly-1.jpg", 
                uuid: uuidv4()
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://www.earthrangers.com/public/content/wildwire/small-proboscis-monkey.jpg", 
                uuid: uuidv4()
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://www.earthrangers.com/public/content/wildwire/xmonk-fish-flickr-credit-ryo-sato.jpg.pagespeed.ic.qw2NMeISXE.webp", 
                uuid: uuidv4()
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/9/12/1378996028268/Eye-eye-A-baby-aye-aye-an-008.jpg?width=700&quality=85&auto=format&fit=max&s=2f14edeaf22f01a292182f12e3cf1ddf", 
                uuid: uuidv4()
            }, 
        ]
    }

    render() {
        return (
            <Provider value={{
                    uglyThings: this.state.uglyThings, 
                    addUglyThing: (uglyThing) => {
                        
                    }, 
                    removeUglyThing: (uglyThingID) => {
                        this.setState(previousState => {
                            return {
                                uglyThings: [...previousState.uglyThings.filter((item) => item.uuid !== uglyThingID)]
                            }
                        })
                    }, 
                    saySomethingAboutAnUglyThing: (comment, idOfUglyThing) => {

                    }
                }}>
                    {this.props.children}
            </Provider>
        )
    }
}


export {MyContext, Consumer as MyConsumer}