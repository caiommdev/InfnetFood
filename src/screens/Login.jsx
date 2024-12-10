import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import ColourPalet from "../AppColours/ColourPalete";
//import UserService from "../services/UserService";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function Login({ navigation}) {
  //const { handleLogin } = useRoute().params;
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      //const user = await UserService.getUser(email);
      const user = {
        email: "",
        password: ""
      }
      
      if (!user || user.password){//user.password !== password) {
        Alert.alert("Erro", "Usuário ou senha incorretos");
        return;
      }
      else {
        Alert.alert("Sucesso", "Login efetuado com sucesso");
      }
      
      navigation.navigate("Types");
      //handleLogin(user);
      //navigation.navigate("FilmList");
      
    } catch (error) {
      Alert.alert("Erro", "Erro ao fazer login");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialIcons name="arrow-back" size={28} color={ColourPalet.highlight} />
        </TouchableOpacity> */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            placeholderTextColor={ColourPalet.text}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={ColourPalet.text}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color={ColourPalet.dim} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: ColourPalet.primary,
    justifyContent: 'center'
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: ColourPalet.highlight,
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    backgroundColor: ColourPalet.terciary,
    padding: 15,
    borderRadius: 10,
    borderColor: ColourPalet.secondary,
    marginBottom: 15,
    color: ColourPalet.text
  },
  button: {
    backgroundColor: ColourPalet.highlight,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: ColourPalet.text,
    fontSize: 18,
    fontWeight: 'bold'
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export default Login;