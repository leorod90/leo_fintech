import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { Transaction } from '@/store/balanceStore'
import { myStyles } from '@/constants/Styles';

export default function TransactionItem({ item }: { item: Transaction }) {
  const { id, amount, date, title } = item;

  return (
    <View style={styles.container}>
      {/* <Text>{id}</Text> */}
      <View style={styles.left}>
        <Text style={[myStyles.bodyText, styles.titleTxt]}>{title}</Text>
        <Text style={styles.dateTxt}>{date.toLocaleString()}</Text>
      </View>
      <Text style={[myStyles.header3, {
        color: amount >= 0 ? 'green' : 'red'
      }]}>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 10
  },
  left: {

  },
  right: {

  },
  titleTxt: {
    color: 'black',
    marginBottom: 5
  },
  dateTxt: {
    fontSize: 12,
    color: '#666'
  }
})