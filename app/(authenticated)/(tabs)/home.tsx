import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native'
import React, { useId } from 'react'
import { defaultStyles, myStyles } from '@/constants/Styles';
import RoundBtn from '@/components/RoundBtn';
import DropDown from '@/components/DropDown';
import { useBalanceStore } from '@/store/balanceStore';
import TransactionItem from '@/components/TransactionItem';
import WidgetList from '@/components/SortableList/WidgetList';
import { useHeaderHeight } from '@react-navigation/elements';

const HeaderComponent = () => (
  <View style={styles.headerContain}>
    <Text style={myStyles.header3}>Transactions</Text>
  </View>
)

export default function crypto() {
  const headerHeight = useHeaderHeight();
  const { balance, runTransactions, transactions, clearTransaction } = useBalanceStore();
  const addMoneyHandler = () => {
    runTransactions({
      id: Math.random().toString(36).substring(2, 11),
      amount: Math.floor((Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)),
      date: new Date(),
      title: 'Added Money'
    })
  }

  return (
    <ScrollView style={defaultStyles.container}
      contentContainerStyle={{
        paddingTop: headerHeight
      }}>
      <View style={styles.account}>
        <Text style={[myStyles.bodyText, styles.currency]}>$</Text>
        <Text style={[myStyles.heroTxt, styles.balance]}>{balance()}</Text>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn title='Add Money' icon='add' onPress={addMoneyHandler} />
        <RoundBtn title='Exchange' icon='refresh' onPress={clearTransaction} />
        <RoundBtn title='Details' icon='list' onPress={() => { }} />
        <DropDown />
      </View>
      <FlatList
        scrollEnabled={false}
        data={transactions}
        ListHeaderComponent={HeaderComponent}
        renderItem={TransactionItem}
        keyExtractor={item => item.id}
      />
      <WidgetList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerContain: {
    marginVertical: 20
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 80
  },
  currency: {
    marginRight: 2,
    color: 'black'
  },
  balance: {
    fontSize: 42,
    fontWeight: 'bold',
    marginRight: 6,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})