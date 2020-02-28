import React from 'react'
const {Consumer, Provider} = React.createContext()




let uuid;
const findIndexCallback = (element) => {
    console.log('uuid', uuid)
    return element['uuid'] === uuid
}

class UglyThingsProvider extends React.Component {
    state = {
        uglyThings: [
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://coursework.vschool.io/content/images/size/w2000/2015/05/ugly-1.jpg", 
                uuid: "123"
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://www.earthrangers.com/public/content/wildwire/small-proboscis-monkey.jpg", 
                uuid: "123"
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://www.earthrangers.com/public/content/wildwire/xmonk-fish-flickr-credit-ryo-sato.jpg.pagespeed.ic.qw2NMeISXE.webp", 
                uuid: "123"
            }, 
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/9/12/1378996028268/Eye-eye-A-baby-aye-aye-an-008.jpg?width=700&quality=85&auto=format&fit=max&s=2f14edeaf22f01a292182f12e3cf1ddf", 
                uuid: "123"
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
                        console.log(uglyThingID);
                        // uuid = uglyThingID
                        // let index = this.state.uglyThings.findIndex(findIndexCallback)
                        this.setState(previousState => {
                            return {
                                uglyThings: [...previousState.uglyThings.filter((item) => item.id === uglyThingID)]
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


export {UglyThingsProvider, Consumer as UglyThingsConsumer}