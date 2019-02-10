import React, { Component } from 'react';
import { Platform, Text, View, Image, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Title, Spinner } from 'native-base';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider, Query, ApolloConsumer, createNetworkInterface } from 'react-apollo';

import styles from './App.style';
import User from './User';

console.disableYellowBox = true;

import config from './config';

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
    this.setState({
      isLoading: true,
    });
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
    return <User userName={login} bio={bio} avatarUrl={avatarUrl} totalCount={totalCount} location={location} key={id} id={id} />;
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
      <FlatList data={allUsers} showsVerticalScrollIndicator={false} renderItem={item => this.renderItem(item.item)} keyExtractor={item => item.id} />
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
