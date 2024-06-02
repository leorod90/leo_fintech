import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { defaultStyles, myStyles } from '@/constants/Styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export default function phone() {
  const { phone, signedIn } = useLocalSearchParams<{ phone: string; signedIn?: string }>();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  // const [areaCode, setAreaCode] = useState('')
  // const [phoneNumber, setPhoneNumber] = useState('')
  // const disabled = useMemo(() => phoneNumber.length >= 9 ? false : true, [phoneNumber])

  useEffect(() => {
    if (value.length === 6) {
      console.log('test')
    }
  }, [value])


  return (
    <View style={styles.flexContain} >
      <View style={defaultStyles.container}>
        <Text style={myStyles.header1}>6-digit code</Text>
        <Text style={[myStyles.bodyText, styles.bodyTxt]}>Code send to {phone}, please enter it below</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Fragment key={index}>
              <Text
                // key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
              {index === 2 && <Text>-</Text>}
            </Fragment >
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyTxt: {
    marginTop: 20
  },
  linkTxt: {
    color: 'blue'
  },
  inputContain: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  areaCode: {
    width: 60
  },
  flexContain: {
    flex: 1
  },
  whiteTxt: {
    color: 'white'
  },
  disabled: {
    backgroundColor: '#ccc',
    alignSelf: 'center'
  },
  bgOnyx: {
    backgroundColor: '#353839',
    alignSelf: 'center'
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    borderRadius: 5,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
})