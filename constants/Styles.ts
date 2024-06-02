import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const myStyles = StyleSheet.create({
  heroTxt: {
    fontSize: 36, // or use Platform.select to adjust for iOS/Android
    fontWeight: 900,
  },
  header1: {
    fontSize: 28, // or use Platform.select to adjust for iOS/Android
    fontWeight: 'bold',
  },
  header2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    color: '#666'
  },
  secondaryText: {
    fontSize: 14,
    color: '#666', // Example of using a secondary color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600', // Slightly bolder for better readability
  },
});

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
  },
  pillButton: {
    // padding: 10,
    height: 50,
    width: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullButton: {
    height: 50,
    width: '100%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLink: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.gray,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    width: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
});
