import { Component } from 'react'
import axios from 'axios';



export default class DataFetcher extends Component {
    state = {
        loading: false,
        data: null,
    }

    componentDidMount() {
        console.log(this.props.url);
        this.props.url && axios.get(this.props.url)
            .then(data => this.setState({ data: data, loading: false }))
    }

    render() {
        return (
            this.props.children(this.state.data, this.state.loading)
        )
    }
}

