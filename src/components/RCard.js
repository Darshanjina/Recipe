import React, { Component } from 'react'

export default class RCard extends Component {
    render() {
        const {label , image , source ,healthLabels , dietLabels , cautions , ingredientLines} = this.props.recipe;
        const customstyle = {
            backgroundImage:`url(${image})`,
            backgroundSize:"cover",
        }
        return (
            <div className="d-inline-block w-100 mb-3 radius" style={customstyle}>
            {/* <img src={image} className="card-img-top" alt="..."/> */}
            <div className="bg-black radius p-3">
              <h3 className="card-head">{label}</h3>
              <div className="small text-light">{source}</div>
              {
                  healthLabels.map((label,i)=>(
                  <span className="badge badge-danger mr-1" key={i}>{label}</span>
                  )

                  )
              }

              {
                  dietLabels.map((Label,i)=>(
                  <span className="badge badge-primary mr-1" key={i}>{Label}</span>
                  ))
              }

              {
                  cautions.map((Label,i)=>(
                  <span className="badge badge-secondary mr-1" key={i}>{Label}</span>
                  ))
              }
                <ul className="mt-3 pl-3">
                {
                  ingredientLines.map((Label,i)=>(
                  <li className="text-light small" key={i}>{Label}</li>
                  ))
              }
              </ul>
            </div>
          </div>
        )
    }
}
