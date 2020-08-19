import React from 'react';
import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

let category;

const RANDOM_JOKES = gql`
  query Query($category: String!) {
    randomJokes(category: $category) {
      value
      categories
    }
  }
`;

function Query() {
  const { loading, error, data } = useQuery(RANDOM_JOKES, {
    variables: { category: category.category }},);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>
    <div className="row">
      <div className="col-md-12 mb-3">
        <div className="card">
          <div className="card-body">
            {data.randomJokes.value}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div> <Link type="button" to={`/`} className="btn btn-primary btn-lg btn-block" > Back </Link> </div>
      </div>
    </div>
  </div>
}

class RandomJokes extends React.Component {
  render() {
    category = this.props.match.params;
    return <Query/>
  }
}
 
export default RandomJokes;
