import { StyleSheet } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ['https://source.unsplash.com/0uAVsDcyD0M'],
        address = '100 Main St, Covington, GA 30014',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;
    return (
        <Card style={styles.cardContainer} elevation={5}>
            <Card.Cover source={{ uri: photos[0] }} key={name} style={styles.cover} />
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{address}</Paragraph>
            </Card.Content>
        </Card>
    );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginVertical: 5
    },
    cover: {
        padding: 10,
        backgroundColor: 'white'
    }
});
