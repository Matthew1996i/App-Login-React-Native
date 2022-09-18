import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="fadeIn"
          delay={200}
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        style={styles.containerForm}
        animation="fadeInUp"
        delay={600}
      >
        <Text style={styles.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#15202B",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#22303C",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
    color: "#fff",
  },
  text: {
    color: "#8899A6",
  },
  button: {
    position: "absolute",
    backgroundColor: "#15202B",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Welcome;
