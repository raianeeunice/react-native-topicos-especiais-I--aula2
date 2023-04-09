import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const isDisable = count === 0;

  return (
    <>
      <Text style={styles.title}>
        Você clicou {count} {count === 1 ? "vez" : "vezes"}!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={isDisable ? styles.buttonDisable : styles.button}
        disabled={isDisable}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#61dafb",
    marginBottom: 30,
    maxWidth: 350,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#61dafb",
    height: 50,
    justifyContent: "center",
    margin: 5,
  },
  buttonDisable: {
    alignItems: "center",
    backgroundColor: "#61dafb",
    opacity: 0.7,
    height: 50,
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
