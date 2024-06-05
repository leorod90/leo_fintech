import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  router: any;
  icon?: string;
  color?: string;
}

export default function CustomBackBtn({ router, icon = "arrow-back", color = Colors.dark }: Props) {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name={icon} size={28} color={color} />
    </TouchableOpacity >
  )
}