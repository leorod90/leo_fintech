import { StyleSheet, Text, View, Image as RNImage } from 'react-native'
import React from 'react'
import { CryptoData } from '@/hooks/useFetch';
import { Image } from 'expo-image';
import { myStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function CryptoComponent({ item }: { item: CryptoData }) {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    fully_diluted_valuation,
    total_volume,
    high_24h,
    low_24h,
    price_change_24h,
    price_change_percentage_24h,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    circulating_supply,
    total_supply,
    max_supply,
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
    roi,
    last_updated
  } = item;

  const color = price_change_24h >= 0 ? 'green' : 'red'
  const icon = price_change_24h >= 0 ? 'caret-up' : 'caret-down'

  return (
    <Link
      asChild
      push
      href={{
        pathname: `crypto_stack/details/${id}`,
        // /* 1. Navigate to the details route with query params */
        params: { title: name, symbol },
      }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          // source={{ uri: image }}
          source={image}
        // placeholder={{ blurhash }}
        // contentFit="cover"
        // transition={1000}
        />
        <View style={styles.nameContain}>
          <Text style={[myStyles.bodyText, styles.title]}>{name}</Text>
          <Text style={[myStyles.secondaryText, styles.symbol]}>{symbol}</Text>
        </View>
        <View style={styles.priceContain}>
          <Text style={[myStyles.bodyText, styles.title]}>{current_price.toFixed(2)}</Text>
          <View style={styles.priceChangeContain}>
            <Ionicons name={icon} size={14} color={color} />
            <Text style={[myStyles.secondaryText, { color }]}>{price_change_24h.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 14
  },
  image: {
    height: 40,
    width: 40,
    // width: '100%',
  },
  nameContain: {
    flex: 1,
    width: '100%',
    marginHorizontal: 16
  },
  symbol: {
    textTransform: 'uppercase'
  },
  title: {
    color: 'black',
    fontWeight: 'bold'
  },
  priceContain: {
    alignItems: 'flex-end'
  },
  priceChangeContain: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})