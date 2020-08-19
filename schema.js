const { gql } = require('apollo-server');
const got = require('got');

const typeDefs = gql`
  type Category {
    category: String
  }

  type RandomJokes {
    value: String
    categories: [String]
  }

  type Query {
    categories: [Category]
    randomJokes(category: String): RandomJokes
  }
`;

// API requests
async function listCategories() {
    const newList = [];
    let resp = await got('https://api.chucknorris.io/jokes/categories');
    const categories = JSON.parse(resp.body);
    categories.filter((element) => {
        newList.push({ category: element });
    });
    return newList;
}

async function getRandomJokes(category) {
    const resp = await got(`https://api.chucknorris.io/jokes/random?category=${category}`);
    return JSON.parse(resp.body);
}


const resolvers = {
    Query: {
        categories: async () => await listCategories(),
        randomJokes: async (root, {category}) => await getRandomJokes(category)
    },
};

module.exports = {
    typeDefs,
    resolvers
};
