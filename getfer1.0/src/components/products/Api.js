import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

function ProductsScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error(error));
    }, []);

    const renderProduct = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        );
    };

    return (
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            numColumns={numColumns}
            contentContainerStyle={styles.listContainer}
            style={{ marginBottom: 35}}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: (screenWidth - 20 - (numColumns - 1) * 10) / numColumns,
    },
    itemImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 2,
    },
    addButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ff5f00',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      },
});

export default ProductsScreen;
