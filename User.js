import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
});

export default class User extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.mainContainer}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/499550?v=4' }} />
                <Body>
                  <Text>yyx990803</Text>
                  <Text note>Pittsburgh, PA, USA</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text>Creator of @vuejs, previously @meteor & @google</Text>
            </CardItem>
            <CardItem style={{ paddingTop: 0, paddingBottom: 0, marginTop: 0 }}>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>42891 Followers</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
