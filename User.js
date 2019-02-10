import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class User extends Component {
  render() {
    const { userName, avatarUrl, bio, location, totalCount, id } = this.props;
    return (
      <Card style={{ flex: 0 }} key={id}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: avatarUrl }} />
            <Body>
              <Text>{userName}</Text>
              <Text note>{location}</Text>
            </Body>
          </Left>
        </CardItem>
        {bio ? (
          <CardItem>
            <Text>{bio}</Text>
          </CardItem>
        ) : null}
        <CardItem style={{ paddingTop: 0, paddingBottom: 0, marginTop: 0 }}>
          <Left>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="logo-github" />
              <Text>{totalCount} Followers</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
