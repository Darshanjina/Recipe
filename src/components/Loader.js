import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className=" text-center">
                <img src={require('../Assets/loading.gif')} alt="loading" className="rounded w-50"/>
            </div>
        )
    }
}
