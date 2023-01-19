import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/double-cheese-burger-picture-id945057664?b=1&k=20&m=945057664&s=612x612&w=0&h=mSbbug2BXxYTqdODJ53MOVTx74FWgJQpEdC2d-Ak6nE=",
    ],
    address = "106 Westmorland Road",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({

});
