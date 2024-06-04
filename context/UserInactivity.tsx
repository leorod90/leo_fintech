import { useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
  id: 'inactivity-storage'
})

export default function UserInactivityProvider({ children }: any) {
  const appState = useRef(AppState.currentState)
  const router = useRouter()
  // isSignedIn
  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)

    return () => {
      subscription.remove()
    }
  }, [])

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (nextAppState == 'background') {
      recordStartTime()
    } else if (nextAppState == 'active' && appState.current.match(/background/)) {
      const elapsed = Date.now() - (storage.getNumber('startTime') || 0)
      
      if (elapsed > 1000) {
        router.replace('/(authenticated)/(modals)/locked')
      }
    }
    appState.current = nextAppState;
  }

  const recordStartTime = () => {
    storage.set('startTime', Date.now())
  }

  return children
}
