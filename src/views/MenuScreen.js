import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <Button title="Contatos" onPress={() => navigation.navigate('Contato')} />
      <Button title="Serviços" onPress={() => navigation.navigate('Servico')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MenuScreen;
