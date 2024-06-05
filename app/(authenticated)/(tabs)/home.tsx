import { View, StyleSheet, ScrollView, Text } from 'react-native'
import React from 'react'
import { defaultStyles, myStyles } from '@/constants/Styles';
import RoundBtn from '@/components/RoundBtn';
import DropDown from '@/components/DropDown';
import { useBalanceStore } from '@/store/balanceStore';
import WidgetList from '@/components/SortableList/WidgetList';
import { useHeaderHeight } from '@react-navigation/elements';

export default function crypto() {
  const headerHeight = useHeaderHeight();
  const { balance, runTransactions, clearTransaction } = useBalanceStore();
  
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
      <WidgetList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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