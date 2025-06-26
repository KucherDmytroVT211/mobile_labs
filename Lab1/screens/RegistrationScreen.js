import React from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';

const RegistrationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Електронна пошта</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Пароль</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Повторіть пароль</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Прізвище</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Ім'я</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Зареєструватися" onPress={() => { }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default RegistrationScreen;