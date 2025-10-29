
//----------------------------------------------------------------------------
//App.js

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Post from "./components/Post";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      body: "Este é o conteúdo do primeiro post.",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Conteúdo do segundo post.",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Mais informações sobre o terceiro post.",
    },
    {
      id: 4,
      title: "Post 4",
      body: "Texto do quarto post.",
    },
    {
      id: 5,
      title: "Post 5",
      body: "Este é o quinto post do blog.",
    },
    {
      id: 6,
      title: "Post 6",
      body: "Informações sobre o sexto post.",
    },
    {
      id: 7,
      title: "Post 7",
      body: "Texto do sétimo post do blog.",
    },
    {
      id: 8,
      title: "Post 8",
      body: "Post número oito com detalhes.",
    },
    {
      id: 9,
      title: "Post 9",
      body: "Conteúdo interessante do nono post.",
    },
    {
      id: 10,
      title: "Post 10",
      body: "Último post da lista!",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Post title={item.title} body={item.body} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

//----------------------------------------------------------------------------------




