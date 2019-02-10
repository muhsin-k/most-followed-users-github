import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Container, Header, Content, Body, Title, Spinner } from 'native-base';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import config from './config';
import styles from './App.style';
import User from './User';
// eslint-disable-next-line
console.disableYellowBox = true;

// initialize a GraphQL client

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${config.accessToken}`,
      },
    });
  },
});

// write a GraphQL query that asks first 100 users who has most followers

const GET_USERS = gql`
  {
    search(query: "type:user", first: 100, type: USER) {
      userCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on User {
            id
            login
            email
            login
            location
            url
            bio
            company
            avatarUrl
            followers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export default class App extends Component {
  state = {
    isLoading: true,
    users: {},
  };

  componentDidMount = () => {
    this.loadData();
  };

  loadData = async () => {
    const { data } = await client.query({
      query: GET_USERS,
    });
    this.setState({
      isLoading: false,
      users: data,
    });
  };

  renderItem = item => {
    const {
      avatarUrl,
      login,
      bio,
      location,
      followers: { totalCount },
      id,
    } = item.node;
    return (
      <User
        userName={login}
        bio={bio}
        avatarUrl={avatarUrl}
        totalCount={totalCount}
        location={location}
        key={id}
        id={id}
      />
    );
  };

  renderUsers = () => {
    const { isLoading, users } = this.state;
    const { search } = users;
    let allUsers = [];
    if (search) {
      allUsers = search.edges;
    }
    if (isLoading) {
      return <Spinner color="green" />;
    }
    return (
      <FlatList
        data={allUsers}
        showsVerticalScrollIndicator={false}
        renderItem={item => this.renderItem(item.item)}
        keyExtractor={item => item.id}
      />
    );
  };

  render() {
    return (
      <Container>
        <Header>
          <Body style={styles.titleBody}>
            <Title>
              <Text style={styles.title} t>
                Most Github Followers
              </Text>
            </Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.mainContainer}>{this.renderUsers()}</Content>
      </Container>
    );
  }
}
