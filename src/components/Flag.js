import React, { Component } from 'react'

export default class Flag extends Component {

    constructor() {
        console.log('const')
        super();
        this.state = {
            apidata: []
        }
    }

    componentDidMount() {
        console.log('Did moutn', this.state.apidata);

        fetch('https://restcountries.com/v3.1/name/ind')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ apidata: data })
            });
    }
    render() {
        var record = this.state.apidata;
        return (
            <div className='container'>
                <h1>api call</h1>
                <div className='row'>
                    {
                        record && record.map(({ flags,name}) =>
                            <div className='col-3'>
                                <img src={flags.png} className='img-fluid' />
                                <p>{name.common}</p>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
