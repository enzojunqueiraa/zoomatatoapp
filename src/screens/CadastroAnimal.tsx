import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-elements';
import axios from "axios";

const CadastroAnimal = () => {
    const [animais, setAnimais] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [especie, setEspecie] = useState('');
    const [ra, setRa] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [sexo, setSexo] = useState('');
    const [dieta, setDieta] = useState('');
    const [habitat, setHabitat] = useState('');

    const logo = require('../assets/images/logo.png');

    const cadastrarAnimal = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('idade', idade);
            formData.append('especie', especie);
            formData.append('ra', ra);
            formData.append('peso', peso);
            formData.append('altura', altura);
            formData.append('sexo', sexo);
            formData.append('dieta', dieta);
            formData.append('habitat', habitat);

            const response = await axios.post('http://10.137.11.226:8000/api/animais/cadastrar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.form}>
                <Text style={styles.fText}>Cadastro de Animais</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Animal"
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    onChangeText={setIdade}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Espécie"
                    onChangeText={setEspecie}
                />
                <TextInput
                    style={styles.input}
                    placeholder="RA"
                    onChangeText={setRa}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Peso em Kg"
                    keyboardType="decimal-pad"
                    onChangeText={setPeso}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Altura em Cm"
                    keyboardType="decimal-pad"
                    onChangeText={setAltura}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                    onChangeText={setSexo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Dieta"
                    onChangeText={setDieta}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Habitat"
                    onChangeText={setHabitat}
                />
                <Button
                    title="Cadastrar Animal"
                    buttonStyle={styles.imageButton}
                    titleStyle={styles.imageButtonText}
                    onPress={cadastrarAnimal}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity >
                    <Image
                        source={require('../assets/images/home.png')}
                        style={styles.footerIcon}

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/lupa.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    header: {
        backgroundColor: '#3498db',
        paddingVertical: 20,
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 120,
    },
    form: {
        padding: 20,
        backgroundColor: '#2980b9',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    input: {
        height: 50,
        borderColor: '#fff',
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: '#3498db',
        color: '#fff',
        fontSize: 18,
    },
    imageButton: {
        backgroundColor: '#e74c3c',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    imageButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    fText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    footer: {
        borderTopWidth: 2,
        backgroundColor: '#3498db',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#2980b9',
    },
    footerIcon: {
        width: 24, 
        height: 24, 
        margin: 10, 
    },
});

export default CadastroAnimal;
