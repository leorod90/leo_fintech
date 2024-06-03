import { View, Text, SectionList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements';
import { defaultStyles, myStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import useFetch, { CryptoHistory } from '@/hooks/useFetch';
import CustomChart from '@/components/CustomChart/CustomChart';
import fakeData from '../../../../../api/crypto-history.json'

const CATEGORIES = [
  'Overview',
  'News',
  'Orders',
  'Transactions'
]

export default function details() {
  const navigation = useNavigation();
  // const { id } = useLocalSearchParams()
  const params = useLocalSearchParams();
  const { id, title, symbol } = params;
  const headerHeight = useHeaderHeight();
  // const { data, loading, error } = useFetch<CryptoHistory>(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`);
  let data = fakeData
  const [activeTab, setActiveTab] = useState(CATEGORIES[0])

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  // if (loading) { }

  const _listHeader = () => (
    <View
      style={styles.listHeader}>
      <Text style={styles.symbol}>{symbol}</Text>
    </View>
  )

  return (
    <SectionList
      style={{
        marginTop: headerHeight,
        ...defaultStyles.horizontalPadding
      }}
      keyExtractor={(i) => i.title}
      sections={[{ data: [{ title: 'Chart' }] }]}
      contentInsetAdjustmentBehavior='automatic'
      ListHeaderComponent={_listHeader}
      stickySectionHeadersEnabled={true}
      renderSectionHeader={() => (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
          backgroundColor: Colors.background
        }}>
          {CATEGORIES.map((item: string) =>
            <TouchableOpacity
              key={item}
              style={{
                justifyContent: 'center',
                alignItems: "center",
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 20,
                minWidth: 80,
                marginRight: 2,
                backgroundColor: activeTab === item ? 'white' : '#F2F2F2'
              }}
              onPress={() => setActiveTab(item)}>
              <Text
                style={{
                  ...myStyles.secondaryText,
                  color: activeTab === item ? Colors.dark : '#666'
                }}
              >{item}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginTop: 20 }}>
          <CustomChart data={data} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  listHeader: {
    marginBottom: 10,
    backgroundColor: Colors.background
  },
  symbol: {
    textTransform: 'uppercase'
  }
})