import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getServiceHistory } from '../controllers/ServiceHistoryController';

const ServiceHistoryScreen = () => {
  const [serviceHistory, setServiceHistory] = useState([]);

  useEffect(() => {
    getServiceHistory().then(data => setServiceHistory(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={serviceHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Data: {item.date}</Text>
            <Text>Descrição: {item.description}</Text>
            <Text>Feedback: {item.feedback}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
  },
});

export default ServiceHistoryScreen;
