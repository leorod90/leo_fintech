import { View, Text, SectionList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements';
import { defaultStyles, myStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import useFetch, { CryptoHistory } from '@/hooks/useFetch';
import CustomChart, { formatTimestamp, skipElements } from '@/components/CustomChart/CustomChart';
import fakeData from '../../../../../api/crypto-history.json'

const CATEGORIES = [
  'Overview',
  '7-day',
  '3-month',
  '1-year'
]

export default function details() {
  const navigation = useNavigation();
  // const { id } = useLocalSearchParams()
  const params = useLocalSearchParams();
  const { id, title, symbol } = params;
  const headerHeight = useHeaderHeight();
  // const { data, loading, error } = useFetch<CryptoHistory>(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=210&interval=daily`);
  let data = fakeData
  let loading = false
  const [activeTab, setActiveTab] = useState(CATEGORIES[0])
  const [initialData, setInitialData] = useState<any>([])
  const [formattedData, setFormattedData] = useState<any>([])
  const [color, setColor] = useState<any>('blue')

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  useEffect(() => {
    if (!loading) {
      let DATA = data?.prices.map(item => {
        return {
          date: formatTimestamp(item[0]),
          price: item[1]
        };
      });

      const d = skipElements(DATA, 1);
      setInitialData(DATA)
      setFormattedData(d)
    }
  }, [loading]) // add loading

  const setActiveTabHandler = (item: string) => {
    let newArray = []

    switch (item) {
      case "3-month":
        setColor('red')
        newArray = skipElements(initialData, 7);
        break;
      case "1-year":
        setColor('green')
        newArray = skipElements(initialData, 29);
        break;
      default:
        setColor('blue')
        newArray = skipElements(initialData, 1);
        break;
    }

    setFormattedData(newArray)
    setActiveTab(item);
  }

  if (loading) {
    return <></>
  }

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
              onPress={() => setActiveTabHandler(item)}>
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
          {activeTab === 'Overview' ?
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores labore ad similique quis dolor quae, ipsam tempora nobis officia nihil vel repellat non, sequi temporibus commodi debitis, consequatur magnam?</Text>
            : <CustomChart data={formattedData} color={color} />}
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