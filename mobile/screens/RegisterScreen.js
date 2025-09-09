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

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  // Validasi password
  const isLengthValid = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const handleRegister = () => {
    console.log("Register:", { name, email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="masukkan nama"
          value={name}
          onChangeText={setName}
        />
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

        {/* Password Rules */}
        <View style={styles.rules}>
          <Text style={isLengthValid ? styles.ruleValid : styles.ruleInvalid}>
            Gunakan 8 karakter atau lebih {password.length}/8
          </Text>
          <Text style={hasUpper ? styles.ruleValid : styles.ruleInvalid}>
            Huruf Besar {hasUpper ? "1/1" : "0/1"}
          </Text>
          <Text style={hasLower ? styles.ruleValid : styles.ruleInvalid}>
            Huruf Kecil {hasLower ? "1/1" : "0/1"}
          </Text>
          <Text style={hasNumber ? styles.ruleValid : styles.ruleInvalid}>
            Angka {hasNumber ? "1/1" : "0/1"}
          </Text>
          <Text style={hasSpecial ? styles.ruleValid : styles.ruleInvalid}>
            Spesial karakter {hasSpecial ? "1/1" : "0/1"}
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>DAFTAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>ATAU MASUK MELALUI</Text>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.socialText}>Masuk dengan Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.socialText}>Masuk dengan Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>SUDAH PUNYA AKUN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  logo: { marginTop: 40, width: 200, height: 80 },
  card: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    fontSize: 16,
    paddingVertical: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  passwordInput: { flex: 1, paddingVertical: 8, fontSize: 16 },
  showHide: { fontSize: 18, paddingHorizontal: 8 },
  rules: { marginTop: 10 },
  ruleValid: { fontSize: 12, color: 'green' },
  ruleInvalid: { fontSize: 12, color: 'gray' },
  registerButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  orText: { marginVertical: 20, color: '#999' },
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
  socialText: { color: '#fff', fontSize: 16 },
  loginText: { fontSize: 16, fontWeight: 'bold', color: '#444' },
});
