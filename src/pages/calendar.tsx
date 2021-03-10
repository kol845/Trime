import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    itemMargin: {
        flex: 0.3,
        backgroundColor: "pink",
        borderWidth: 5,
        borderRadius: 20,
        borderColor: "pink",
        marginRight: 10,
        marginTop: 17
    },
    viewItem: {
        backgroundColor: "pink",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewAgenda: {
        flex: 1
    }
});

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0]
};

export default function CreateEvent() {
    const [items, setItems] = useState({});
    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        })
                    }
                }
            };

            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems)
        }, 1000
        )
    };

    const renderItem = (item) => {
        return (

            <TouchableOpacity style={styles.itemMargin}>
                <Card>
                    <Card.Content>
                        <View style={styles.viewItem}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label='T' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

        )
    };

    return (
        <View style={styles.viewAgenda}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2017-05-16'}
                renderItem={renderItem}
            />
        </View>
    );
};