import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface Props {
  title?: string;
  icon: typeof Ionicons.defaultProps;
  onPress: () => void
}

export default function RoundBtn({
  title,
  icon,
  onPress
}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        <Ionicons name={icon} color={Colors.dark} size={24} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    width: 80,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center'
  }
})