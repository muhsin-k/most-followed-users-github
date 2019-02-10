import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

import User from './User';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
});
export default class App extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.mainContainer}>
          <User
            userName="yyx990803"
            bio="Creator of @vuejs, previously @meteor & @google"
            avatarUrl="https://avatars1.githubusercontent.com/u/499550?v=4"
            totalCount="42891"
            location="New Jersey / China"
          />

          <User
            userName="addyosmani"
            bio="Engineering Manager at Google working on Chrome & Web Platform"
            avatarUrl="https://avatars2.githubusercontent.com/u/110953?v=4"
            totalCount="32531"
            location="Mountain View, California"
          />

          <User
            userName="gaearon"
            bio="Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans."
            avatarUrl="https://avatars0.githubusercontent.com/u/810438?v=4"
            totalCount="40335"
            location="London, UK"
          />
          <User
            userName="addyosmani"
            bio="Engineering Manager at Google working on Chrome & Web Platform"
            avatarUrl="https://avatars2.githubusercontent.com/u/110953?v=4"
            totalCount="32531"
            location="Mountain View, California"
          />
        </Content>
      </Container>
    );
  }
}
