import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

const newsData = Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
    title: `Новина ${i + 1}`,
    date: `${i + 1}.02.2025`,
    content: 'Короткий опис новини.'
}));

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={newsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.newsItem}>

                        <View style={styles.imagePlaceholder} />

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    newsItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 5,

    },
    imagePlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginRight: 12
    },
    textContainer: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },
    date: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6
    },
    content: {
        fontSize: 14,
        color: '#444',
        lineHeight: 18
    }
});

export default HomeScreen;