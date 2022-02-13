import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Next() {
  const [pass, setPass] = useState('');
  const [secureTextInput, setSecureTextInput] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  /** FUNCTION SECURE TEXT  */
  function secureText() {
    if(secureTextInput == true) {
      setSecureTextInput(false);
    } else {
      setSecureTextInput(true);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Pressable
        style={styles.container} 
        onPress={Keyboard.dismiss}
      >
        {/** HEADER */}
        <View style={styles.header}>
          <Pressable style={styles.btnLogout}>
            <AntDesign name="logout" size={24} color="black" />
          </Pressable>
          
          <View style={styles.title}>
            <Text style={styles.headerTitle}>next</Text>
          </View>
        </View>

        {/** PROFILE */}
        <View style={styles.profile}>
          <View style={styles.profileIcon}> 
            <Text style={{fontSize: 36}}>RD</Text>
          </View>

          <Text style={styles.profileTitle}>Ricardo Santos</Text>
          <Text style={{color: 'gray'}}>44565-5</Text>

        </View>

        {/** INPUT PASSWORD */}
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="gray"
            keyboardType="decimal-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={pass}
            onChangeText={(text) => setPass(text)}
            secureTextEntry={secureTextInput}
            // onSubmitEditing={() => checking()}
            returnKeyType="send"
          />

          <TouchableOpacity style={styles.boxEye} onPress={() => secureText()}>
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/** FORGOT PASSWORD */}
        <TouchableOpacity style={styles.forgotPassword}>
          <AntDesign name="right" size={16} color="black" />
          <Text style={{fontWeight: '700', marginLeft: 8}}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        {/** BTN LOG IN */}
        <TouchableOpacity style={styles.logIn}>
          <Text style={styles.btnLogInText}>entrar</Text>
        </TouchableOpacity>

        {/** BTNS */}
        {keyboardStatus == false ? 
          <>
            <View style={styles.btns}>
              <TouchableOpacity style={styles.btn}>
                <AntDesign name="qrcode" size={24} color="black" />
                <Text style={styles.btnsTxt}>atalhos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <AntDesign name="qrcode" size={24} color="black" />
                <Text style={styles.btnsTxt}>token</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <AntDesign name="qrcode" size={24} color="black" />
                <Text style={styles.btnsTxt}>pix</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.version}>
              <Text style={styles.txtVersion}>Versão 30.22.2022(9006550)</Text>
            </View>
          </> : <></>}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff21',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  /** HEADER */
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  btnLogout: {
    width: 50,
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -50,
  },

  /** PROFILE */
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  profileIcon: {
    width: 85,
    height: 85,
    borderRadius: 85/2,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  profileTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 8,
  },

  /** INPUT PASSWORD */
  containerInput: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  boxEye: {
    width: 35,
    height: 35,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  /** FORGOT PASSWORD */
  forgotPassword: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24,
    marginBottom: 36,
  },

  /** BTN LOG IN */
  logIn: {
    width: '85%',
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#000',
  },
  btnLogInText: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center'
  },

  /** BTNS */
  btns: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#00ff21',
  },
  btn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsTxt: {
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  version: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  txtVersion: {
    fontWeight: 'bold',
    fontSize: 13,
  }
});