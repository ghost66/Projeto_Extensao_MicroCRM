import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SalesController from '../controllers/Venda_Controller';

const SalesManagementScreen = () => {
  const [contactId, setContactId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddSale = () => {
    SalesController.addSale(contactId, amount, date);
    alert('Venda adicionada com sucesso!');
    // Limpar campos após adicionar a venda
    setContactId('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID do Cliente:</Text>
      <TextInput
        style={styles.input}
        value={contactId}
        onChangeText={setContactId}
      />

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Button title="Adicionar Venda" onPress={handleAddSale} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default SalesManagementScreen;

