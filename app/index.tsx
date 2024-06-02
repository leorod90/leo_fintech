import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { Video } from 'expo-av'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles, myStyles } from '@/constants/Styles'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function index() {
  const [assets] = useAssets([
    require('@/assets/videos/intro.1.mp4')
  ])

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {assets && <Video
        source={{ uri: assets[0].uri }}
        style={styles.video}
        isLooping
        isMuted
        shouldPlay
        resizeMode="cover"
      />}
      <View style={styles.opacity} />
      <SafeAreaView style={styles.innerContain}>
        <Text style={[myStyles.heroTxt, styles.whiteTxt]}>Ready to take control of your finances?</Text>
        <View style={styles.btnContainer}>
          <Link href={'/login'} asChild>
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
              ]}
              onPress={() => { }}
            >
              <View style={[defaultStyles.pillButton, styles.bgOnyx]}>
                <Text style={[myStyles.buttonText, styles.whiteTxt]}>Log in</Text>
              </View>
            </Pressable>
          </Link>
          <Link href={'/signup'} asChild>
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
              ]}
              onPress={() => { }}
            >
              <View style={[defaultStyles.pillButton, styles.bgWhite]}>
                <Text style={myStyles.buttonText}>Sign up</Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  opacity: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: .75,
  },
  innerContain: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  whiteTxt: {
    color: 'white'
  },
  bgOnyx: { backgroundColor: '#353839' },
  bgWhite: { backgroundColor: 'white' }
})