import React from 'react';
import axios from 'axios';


class MemeGenerator extends React.Component {
    constructor() {
        super()

        this.state = {
            topText: "", 
            bottomText: "", 
            randomImg: "http://i.imgflip.com/1bij.jpg", 
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // axios.get("https://api.imgflip.com/get_memes")
        // .then(response => {
        //     console.log(response.data.data); // dont know why you have to drill so much. Must have been a bad way to write an API
        // })
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImages: memes
            })
        })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randMemeImg = this.state.allMemeImages[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="meme-form">
                   <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                   />
                   <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                   />
                   <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenerator;