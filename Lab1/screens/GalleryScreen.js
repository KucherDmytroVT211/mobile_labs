import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

const photos = Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1) }));

const GalleryScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.photoContainer}>
                        <View style={styles.photoItem} />
                    </View>
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: 'white'
    },
    list: {
        justifyContent: 'space-between'
    },
    photoContainer: {
        flex: 1,
        margin: 4,
    },
    photoItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 180,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    }
});

export default GalleryScreen;