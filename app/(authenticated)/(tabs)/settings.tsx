import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAppIcon, setAppIcon } from 'expo-dynamic-app-icon'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ICONS = [
  {
    name: 'Default',
    icon: require('@/assets/icons/default_app.png')
  },
  {
    name: 'Dark',
    icon: require('@/assets/icons/dark_app.png')
  }
]

export default function crypto() {
  const [activeIcon, setActiveIcon] = useState('Default')

  useEffect(() => {
    const loadCurrentIcon = async () => {
      const icon = await getAppIcon();
      setActiveIcon(icon)
    }
    loadCurrentIcon()
  }, [])


  const changeAppIcon = async (icon: string) => {
    await setAppIcon(icon.toLowerCase())
    setActiveIcon(icon)
  }

  return (
    <View style={[styles.container, {
      paddingTop: 100
    }]}>
      {ICONS.map((item) => (
        <TouchableOpacity key={item.name} onPress={() => changeAppIcon(item.name)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})