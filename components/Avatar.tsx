import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { myStyles } from '@/constants/Styles'
import { Link } from 'expo-router'

export default function Avatar() {
  return (
    <Link href='/(authenticated)/(modals)/account' asChild>
      <TouchableOpacity style={styles.circle} onPress={() => { }}>
        <Text style={[myStyles.header3, styles.white]}>LR</Text>
      </TouchableOpacity>
    </Link>
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