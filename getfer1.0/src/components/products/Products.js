import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import Api from "./Api";

//Estado global para el metodo de busqueda
import { useDispatch } from "react-redux";
import { setsearchfilter } from "../../store/slices/search/search.slice";

const Products = () => {
  //Filtrado de Productos
  const dispatch = useDispatch();

  function handleSearch(text) {
    dispatch(setsearchfilter(text));
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        placeholder="Buscar..."
      />
      <Api />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Products;
