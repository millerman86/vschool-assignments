import React from 'react'
const {Consumer, Provider} = React.createContext()




class UglyThingsProvider extends React.Component {
    state = {
        uglyThings: [
            {
                description: "what happened to this monkey?", 
                title: "really ugly monkey", 
                url: "https://coursework.vschool.io/content/images/size/w2000/2015/05/ugly-1.jpg"
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