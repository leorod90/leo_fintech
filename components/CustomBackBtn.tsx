import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  router: any
}

export default function CustomBackBtn({ router }: Props) {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={28} color={Colors.dark} />
    </TouchableOpacity >
  )
}