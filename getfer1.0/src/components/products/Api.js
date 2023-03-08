import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import User from '../../user/User';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

function Api() {
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();
  const usuarioHaIniciadoSesion = false; 

  function handlePress() {
    if (!usuarioHaIniciadoSesion) {
      navigation.navigate(User);
    } else {

    }
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => handlePress(item)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
        marginBottom: 15,
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
        marginBottom: 10,
    },
    itemPriceContainer: {
        position: 'absolute',
        bottom: -10,
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
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

export default Api;
