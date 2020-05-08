import React from 'react'

class Toggle extends React.Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
    }

    toggler = () => this.setState(prev => ({ toggle: !prev.toggle }))

    render(){
        const { component: C } = this.props
        return <C toggle={this.state.toggle} toggler={this.toggler}/>
    }
}

// ES6 double fat arrow (function returning a function)
// export const withToggle = C => props => {
//     return <Toggle component={C} {...props}/>
// }


// Regular function returning a function
export function withToggle(C){
    return function(props){
        return <Toggle  component={C} {...props}/>
    }
}