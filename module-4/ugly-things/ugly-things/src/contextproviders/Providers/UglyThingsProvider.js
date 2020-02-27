import React from 'react'
const {Consumer, Provider} = React.createContext()




class UglyThingsProvider extends React.Component {
    state = {
        uglyThings: []
    }

    addUglyThing = () => {

    }

    removeUglyThing = () => {

    }

    saySomethingAboutAnUglyThing = () => {

    }

    render() {
        return (
            <Provider value={{
                    uglyThings: this.state.uglyThings, 
                    addUglyThing: this.addUglyThing, 
                    removeUglyThing: this.removeUglyThing, 
                    saySomethingAboutAnUglyThing: this.saySomethingAboutAnUglyThing
                }}>
                    {this.props.children}
            </Provider>
        )
    }
}


export {UglyThingsProvider, Consumer as UglyThingsConsumer}