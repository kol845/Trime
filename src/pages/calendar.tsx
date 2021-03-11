import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
  itemMargin: {
    marginRight: 40,
    marginTop: 17
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewAgenda: {
    flex: 1,
  },
  card: { 
    backgroundColor: 'rgba(221, 155, 121, 1)',
    color: '#000',
  },

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
          items[strTime].push({
            name: '[Workout Type] ' + '[PT Name] ' + '[Location] ' + strTime,
            height: Math.max(50, Math.floor(Math.random() * 150))
          })

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
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.viewItem}>
              <Avatar.Text label='T' />
              <Text>{item.name}</Text>
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
        selected={'2021-03-11'}
        renderItem={renderItem}
      />
    </View>
  );
};