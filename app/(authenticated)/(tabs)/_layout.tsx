import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';
import CustomerHeader from '@/components/CustomerHeader'

export default function _layout() {
  return (
    <Tabs screenOptions={{
      header: () => <CustomerHeader />,
      headerTransparent: true,
      tabBarActiveTintColor: Colors.primary,
      tabBarShowLabel: false,
      tabBarBackground: () => <BlurView
        intensity={100}
        tint='extraLight'
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.05)'
        }}
      />,
      tabBarStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        borderTopWidth: 0
      }
    }}>
      <Tabs.Screen name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name='home' size={size} color={color} />
          ),
          // header: () => <CustomerHeader />,
          // headerTransparent: true
        }} />
      <Tabs.Screen name='invest' options={{
        title: 'Invest',
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name='line-chart' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name='transfers' options={{
        title: 'Transfers',
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name='exchange' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name='crypto_stack' options={{
        title: 'Crypto',
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name='bitcoin' size={size} color={color} />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name='lifestyle' options={{
        title: 'Lifestyle',
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name='th' size={size} color={color} />
        )
      }} />
    </Tabs>
  )
}