import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ServicoController from '../controllers/ServicoController';

const ServicoScreen = () => {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [clienteId, setClienteId] = useState('');

  const handleAddService = () => {
    ServicoController.adicionarServico(descricao, data, clienteId);
    // eslint-disable-next-line no-alert
    alert('Serviço adicionado com sucesso!');
    // Limpar campos após adicionar o serviço
    setDescricao('');
    setData('');
    setClienteId('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.label}>ID do Cliente:</Text>
      <TextInput
        style={styles.input}
        value={clienteId}
        onChangeText={setClienteId}
      />

      <Button title="Adicionar Serviço" onPress={handleAddService} />
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

export default ServicoScreen;
