import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Image 
} from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log("Send reset password email:", email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Lupa kata sandi Anda?</Text>
      <Text style={styles.subtitle}>
        Masukkan email Anda untuk mengubah kata sandi
      </Text>

      <Image 
        source={require('../assets/forgot.png')} // buatkan ilustrasi forgot.png
        style={styles.image}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan email Anda"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>Kirim</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Sudah ingat kata sandi Anda?{' '}
        <Text 
          style={styles.loginLink}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Masuk Sekarang
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  backArrow: { fontSize: 24, alignSelf: 'flex-start', marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 20 },
  image: { width: 200, height: 200, marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  sendText: { color: '#444', fontSize: 16 },
  footer: { fontSize: 14, color: '#555' },
  loginLink: { color: 'green', fontWeight: 'bold' },
});
