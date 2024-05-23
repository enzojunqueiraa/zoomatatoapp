import React, { useState, useEffect } from "react";
import { Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definindo os tipos para a propriedade de navegação e a rota
type AnimalNavigatorParamList = {
  AtualizacaoAnimal: { id: string };
  // outras telas...
};

type AtualizacaoAnimalScreenNavigationProp = StackNavigationProp<
  AnimalNavigatorParamList,
  'AtualizacaoAnimal'
>;

type AtualizacaoAnimalScreenRouteProp = RouteProp<
  AnimalNavigatorParamList,
  'AtualizacaoAnimal'
>;

// Interface Animal
interface Animal {
    id: string;
    nome: string;
    idade: string;
    especie: string;
    ra: string;
    peso: number; 
    altura: number; 
    sexo: string;
    dieta: string;
    habitat: string;
}

// Componente AtualizacaoAnimal
const AtualizacaoAnimal = ({ route }: { route: AtualizacaoAnimalScreenRouteProp }) => {
    const { id } = route.params; // Recebe o ID do animal a ser atualizado via props
    const [animal, setAnimal] = useState<Animal | null>(null);
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [especie, setEspecie] = useState<string>('');
    const [ra, setRa] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [sexo, setSexo] = useState<string>('');
    const [dieta, setDieta] = useState<string>('');
    const [habitat, setHabitat] = useState<string>('');

    useEffect(() => {
        const fetchAnimal = async () => {
            try {
                const response = await axios.get(`http://10.137.11.207:8000/api/animais/${id}`);
                setAnimal(response.data.data[0]); // Supondo que a resposta contenha um array e o primeiro elemento seja o animal
                setNome(animal?.nome || '');
                setIdade(animal?.idade || '');
                setEspecie(animal?.especie || '');
                setRa(animal?.ra || '');
                setPeso(String(animal?.peso || 0));
                setAltura(String(animal?.altura || 0));
                setSexo(animal?.sexo || '');
                setDieta(animal?.dieta || '');
                setHabitat(animal?.habitat || '');
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchAnimal();
        }
    }, [id]);

    const atualizarAnimal = async () => {
        if (!nome ||idade ||especie ||ra ||peso ||altura ||sexo ||dieta ||habitat) {
            Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('nome', nome);
            formData.append('idade', idade);
            formData.append('especie', especie);
            formData.append('ra', ra);
            formData.append('peso', peso);
            formData.append('altura', altura);
            formData.append('sexo', sexo);
            formData.append('dieta', dieta);
            formData.append('habitat', habitat);

            const response = await axios.put(`http://10.137.11.207:8000/api/animais/atualizar/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            Alert.alert("Sucesso!", "Animal atualizado com sucesso.");
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Ocorreu um erro ao atualizar o animal.");
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Header />
                <View style={styles.form}>
                    <Text style={styles.fText}>Atualização de Animais</Text>
                    {/* Campos de entrada preenchidos automaticamente com os dados do animal */}
                    <TouchableOpacity style={styles.imageButton} onPress={atualizarAnimal}>
                        <Text style={styles.imageButtonText}>Atualizar Animal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#606c38',
        paddingVertical: 10,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 130,
    },
    form: {
        padding: 18,
        backgroundColor: '#ccd5ae',
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fefae0'
    },
    imageButton: {
        backgroundColor: '#606c38',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    fText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 'auto',
    
    },

});

export default AtualizacaoAnimal;


