import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import Avatar from './Avatar';

export default function CustomerHeader() {
  const insets = useSafeAreaInsets();

  return (
    <BlurView
      intensity={80}
      tint='extraLight'
      style={{
        paddingTop: insets.bottom + 10
      }}
    >
      <View style={[styles.container, defaultStyles.defaultPadding]}>
        <Avatar />
        <View style={styles.inputContainer}>
          <Ionicons name='search' color={Colors.dark} size={18} />
          <TextInput style={styles.input} placeholder='Search' placeholderTextColor={Colors.gray} />
        </View>
        <TouchableOpacity style={styles.circle} onPress={() => { }}>
          <Ionicons name='trending-up' color={Colors.dark} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => { }}>
          <Ionicons name='card' color={Colors.dark} size={24} />
        </TouchableOpacity>
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: 'center',
    gap: 10,
    height: 60,
    backgroundColor: "transparent"
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: Colors.lightGray
  },
  input: {
    flex: 1,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center'
  }
})