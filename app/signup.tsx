import { View, Text, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useMemo, useState } from 'react'
import { defaultStyles, myStyles } from '@/constants/Styles'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function signup() {
  const insets = useSafeAreaInsets();

  const [areaCode, setAreaCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const behavior = useMemo(() => Platform.OS === 'ios' ? 'padding' : 'height', [Platform])
  const disabled = useMemo(() => phoneNumber.length >= 9 ? false : true, [phoneNumber])

  return (
    <KeyboardAvoidingView style={styles.flexContain} behavior={behavior} keyboardVerticalOffset={80}>
      <View style={[defaultStyles.container, { paddingBottom: insets.bottom + 16 }]}>
        <Text style={myStyles.header1}>Let's get started!</Text>
        <Text style={[myStyles.bodyText, styles.bodyTxt]}>Enter your phone number. We will send you a confirmation code</Text>
        <View style={styles.inputContain}>
          <TextInput
            style={[styles.textInput, styles.areaCode]}
            keyboardType='numeric'
            onChangeText={setAreaCode}
            maxLength={3}
            value={areaCode}
          />
          <TextInput
            style={[styles.textInput, styles.flexContain]}
            keyboardType='numeric'
            onChangeText={setPhoneNumber}
            maxLength={10}
            value={phoneNumber}
          />
        </View>
        <Link href={'/login'} asChild replace>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 }
            ]}
            onPress={() => { }}
          >
            <Text style={[myStyles.bodyText, styles.bodyTxt, styles.linkTxt]}>Already have and account? Log In</Text>
          </Pressable>
        </Link>
        <View style={styles.flexContain} />
        <Pressable
          disabled={disabled}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 }
          ]}
          onPress={() => { }}
        >
          <View style={[defaultStyles.fullButton, disabled ? styles.disabled : styles.bgOnyx]}>
            <Text style={[myStyles.buttonText, styles.whiteTxt]}>Signup</Text>
          </View>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  bodyTxt: {
    marginTop: 20
  },
  linkTxt: {
    color: 'blue'
  },
  inputContain: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  areaCode: {
    width: 60
  },
  flexContain: {
    flex: 1
  },
  whiteTxt: {
    color: 'white'
  },
  disabled: {
    backgroundColor: '#ccc',
    alignSelf: 'center'
  },
  bgOnyx: {
    backgroundColor: '#353839',
    alignSelf: 'center'
  },
})