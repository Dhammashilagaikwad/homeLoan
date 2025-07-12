import React, { Component } from 'react'

export default class Classcycle extends Component {
    constructor() {
        console.log('const');

        super();
        this.state = {
            apidata: []
        }
    }

    //only one time execute
    componentDidMount() {
        console.log('Did Mount', this.state.apidata);
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ apidata: data })
            });
    }

    componentWillUnmount() {
        console.log("Component Left");
    }

    render() {
        // console.log('render',this.state.apidata);
        var record = this.state.apidata;

        return (
            <div className='container'>
                <h1>api call</h1>
                <div className='row'>
                    {
                        record && record.map(({ title, image, price }) =>
                            <div className='col-3'>
                                <img src={image} className='img-fluid' />
                                <p>{title}</p>
                                <h2>{price}</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
