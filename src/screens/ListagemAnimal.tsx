import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface Animal {
    id: number;
    nome: string;
    idade: number;
    especie: string;
    ra: string;
    peso: string;
    altura: string;
    sexo: string;
    dieta: string;
    habitat: string;
}

const ListaAnimais = () => {
    const [animais, setAnimais] = useState<Animal[]>([]);

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await axios.get('http://10.137.11.226:8000/api/animais/retornarTodos');
                console.log('Status:', response.status);
                console.log('Body:', response.data);
                setAnimais(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error('Request failed with status code', error.response?.status);
                    console.error('Error message:', error.message);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
            }
        };

        fetchAnimais();
    }, []);

    const renderItem = ({ item }: { item: Animal }) => (
        <View style={styles.row}>
            <Text style={[styles.cell, {backgroundColor: '#f0f0f0'}]}>{item.nome}</Text>
            <Text style={[styles.cell, {backgroundColor: '#e0e0e0'}]}>{item.idade}</Text>
            <Text style={[styles.cell, {backgroundColor: '#d0d0d0'}]}>{item.especie}</Text>
            <Text style={[styles.cell, {backgroundColor: '#c0c0c0'}]}>{item.ra}</Text>
            <Text style={[styles.cell, {backgroundColor: '#b0b0b0'}]}>{item.peso}</Text>
            <Text style={[styles.cell, {backgroundColor: '#a0a0a0'}]}>{item.altura}</Text>
            <Text style={[styles.cell, {backgroundColor: '#909090'}]}>{item.sexo}</Text>
            <Text style={[styles.cell, {backgroundColor: '#808080'}]}>{item.dieta}</Text>
            <Text style={[styles.cell, {backgroundColor: '#707070'}]}>{item.habitat}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Animais</Text>
            <FlatList
                data={animais}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        marginBottom: 10,
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        textAlign: 'center',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ddd',
    },
});

export default ListaAnimais;
