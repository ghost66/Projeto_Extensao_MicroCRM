import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import ContatoController from '../src/controllers/ContatoController';

const ContatoScreen = ({ navigation }) => {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [preferencias, setPreferencias] = useState('');

  useEffect(() => {
    ContatoController.criarTabelaContatos();
    listarContatos();
  }, []);

  const listarContatos = () => {
    ContatoController.obterTodosContatos(setContatos);
  };

  const adicionarContato = () => {
    ContatoController.adicionarContato(nome, endereco, telefone, email, preferencias);
    listarContatos();
    setNome('');
    setEndereco('');
    setTelefone('');
    setEmail('');
    setPreferencias('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Contatos</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} style={styles.input} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Preferências" value={preferencias} onChangeText={setPreferencias} style={styles.input} />
      <Button title="Adicionar Contato" onPress={adicionarContato} />
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.endereco}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.email}</Text>
            <Text>{item.preferencias}</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ContatoScreen;
