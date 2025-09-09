import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  SafeAreaView 
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    // TODO: Tambahkan logic autentikasi (misalnya panggil authService)
    console.log("Login dengan:", email, password);
  };

  const handleGoogleLogin = () => {
    console.log("Login dengan Google");
  };

  const handleFacebookLogin = () => {
    console.log("Login dengan Facebook");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.png')} // ganti dengan logo-mu
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="masukkan email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="masukkan password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Text style={styles.showHide}>{secureText ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>MASUK</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotPassword}>Lupa password?</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>ATAU MASUK MELALUI</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.socialText}>Masuk dengan Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>BUAT AKUN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 80,
  },
  card: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // shadow di android
    shadowColor: '#000', // shadow di iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingVertical: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  showHide: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#777',
    marginTop: 10,
    fontStyle: 'italic',
  },
  orText: {
    marginVertical: 20,
    color: '#999',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 6,
    width: '85%',
    alignItems: 'center',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 6,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});
