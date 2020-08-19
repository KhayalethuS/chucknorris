import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";

const CATEGORIES = gql`
  query Query {
    categories {
      category
    }
  }
`;

function Query() {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({ category }) => (
  <div className="card card-body mb-3" key={category}>
    <div className="row">
      <div className="col-md-9">
          <h4 className="text-capitalize">{category}</h4>
      </div>
      <div className="col-md-3">
        <Link to={`/RandomJokes/${category}`} className="btn btn-primary"> Have a Joke </Link>
      </div>
    </div>
  </div>
  ));
}

class Categories extends React.Component {
  render() {
    return <Query/>
  }
}

export default Categories;
