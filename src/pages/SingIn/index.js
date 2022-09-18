import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import DismissKeyboard from "../../components/DismissKeyboard";

const SingIn = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Bem Vindo(a)</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholderTextColor="#8899A6"
            placeholder="Digite um email..."
            style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholderTextColor="#8899A6"
            placeholder="Digite uma senha"
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>
              Não possui uma conta? Cadastre-se!
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#22303C",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: "#FFF",
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: "#8899A6",
  },
  button: {
    backgroundColor: "#15202B",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#8899A6",
  },
});

export default SingIn;
