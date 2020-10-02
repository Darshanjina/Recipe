import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../redux/action/recipeAction";
import Loader from "./Loader";
import RCard from "./RCard";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeName: "",
    };
  }

  componentDidMount() {
    this.props.getRecipes("paneer");
  }

  funSubmit = (e) => {
    e.preventDefault();
    this.props.getRecipes(this.state.recipeName);
  };

  render() {
    console.log(this.props.recipeList);
    return (
      <React.Fragment>
        <div className="text-center mt-4">
          <div className="h1 text-light bg-dark d-inline-block rounded p-2">
            Recipe{" "}
            <span className="bg-warning rounded text-dark px-1 py-0">hub</span>
          </div>
        </div>
        <div className="pt-5">
          <form onSubmit={this.funSubmit}>
            <input
              type="text"
              className="form-control rounded-pill form-inp mx-auto"
              placeholder="Search your favourite recipe"
              value={this.state.recipeName}
              onChange={(e) => {
                this.setState({ recipeName: e.target.value });
              }}
            />
          </form>
        </div>

        <div className="mb-3">
                { this.props.recipeList.length === 0 ?
                    (<Loader/>) : null 
                }
        </div>

        <div className="card-manager py-5">
          {this.props.recipeList.map((item, i) => (
            <RCard key={i} recipe={item.recipe} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recipeList: state.recipe.recipeList,
});

export default connect(mapStateToProps, { getRecipes })(Home);
