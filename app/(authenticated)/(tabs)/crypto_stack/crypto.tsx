import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import useFetch, { CryptoData } from '@/hooks/useFetch';
import { Link } from 'expo-router';
import { defaultStyles, myStyles } from '@/constants/Styles';
import CryptoComponent from '@/components/CryptoComponent';
import { useHeaderHeight } from '@react-navigation/elements';
import fakeData from '../../../../api/crypto-data.json'

const HeaderComponent = () => (
  <View style={styles.headerContain}>
    <Text style={myStyles.header3}>Latest Crypto</Text>
  </View>
)

export default function crypto() {
  // const { data, loading, error } = useFetch<CryptoData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  const headerHeight = useHeaderHeight();
  let data = fakeData
  // if (loading) { }

  return (
    <FlatList
      style={styles.container}
      // scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[defaultStyles.horizontalPadding, {
        paddingTop: headerHeight,
        paddingBottom: 80,
      }]}
      data={data}
      ListHeaderComponent={HeaderComponent}
      renderItem={CryptoComponent}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  headerContain: {
    marginVertical: 20
  },
  container: {
    flex: 1
  }
})