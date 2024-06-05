import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles, myStyles } from '@/constants/Styles'
import TransactionItem from '@/components/TransactionItem';
import { useBalanceStore } from '@/store/balanceStore';
import { useHeaderHeight } from '@react-navigation/elements';

const HeaderComponent = () => (
  <View style={styles.headerContain}>
    <Text style={myStyles.header3}>Transactions</Text>
  </View>
)

export default function history() {
  const headerHeight = useHeaderHeight();
  const { transactions } = useBalanceStore();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{
        paddingTop: headerHeight
      }
      }
      data={transactions}
      ListHeaderComponent={HeaderComponent}
      renderItem={TransactionItem}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...defaultStyles.horizontalPadding
  },
  headerContain: {
    marginVertical: 20
  },
})