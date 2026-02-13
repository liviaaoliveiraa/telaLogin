import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Image
        source={require("./assets/capelo.png")}
        style={{ width: 80, height: 80, marginTop: 80, alignSelf: "center" }}
      />

      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
        Bem vindo
      </Text>

      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Faça login na sua conta
      </Text>

      <Text>Email</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={(texto) => setEmail(texto)}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Text>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry={true}
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Text style={{ color: "blue", textAlign: "right", marginTop: 5 }}>
        Esqueci minha senha
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: "purple", padding: 10, marginTop: 20 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Ou entre com
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <Text>G</Text>
        <Text>F</Text>
        <Text>A</Text>
      </View>

      <Text style={{ textAlign: "center", marginTop: 30 }}>
        Não tem conta? Cadastre-se
      </Text>

    </View>
  );
}
