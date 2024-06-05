import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { useHeaderHeight } from '@react-navigation/elements';
import { defaultStyles } from '@/constants/Styles';
import * as ImagePicker from 'expo-image-picker';

export default function account() {
  const headerHeight = useHeaderHeight();
  return (
    <BlurView intensity={80} tint='dark' style={[styles.container, { paddingTop: headerHeight }]}>
      <Text>account</Text>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...defaultStyles.horizontalPadding
  }
})