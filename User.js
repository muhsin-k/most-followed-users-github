import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class User extends Component {
  render() {
    // eslint-disable-next-line
    const { userName, avatarUrl, bio, location, totalCount, id, company, onPressItem } = this.props;
    const followers = `${totalCount} Followers`;
    return (
      <Card style={{ flex: 0 }} key={id}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: avatarUrl }} />
            <Body>
              <Text>{userName}</Text>
              {company ? <Text note>{company}</Text> : null}
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
              <Text>{followers}</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
