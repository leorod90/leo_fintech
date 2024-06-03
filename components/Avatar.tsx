import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { myStyles } from '@/constants/Styles'

export default function Avatar() {
  return (
    <TouchableOpacity style={styles.circle} onPress={() => { }}>
      <Text style={[myStyles.header3, styles.white]}>LR</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  white: {
    color: 'white',
    fontSize: 18
  }
})