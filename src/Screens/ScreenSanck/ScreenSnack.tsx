import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import KitchenCard from './KitchenCard';
import BottomNavBar from './BottomNavBar';

const SnacksScreen: React.FC = () => {
  const kitchens = [
    {
      name: "Mariam's homefood",
      rating: 5.0,
      dietType: ['VEG'],
      imageUri:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/243535f3dbab1ebfde9b664d59fd680b6f1d4c8c10b609f28a134ca4a506bcd3?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
      deliveryTime: '15 min',
    },
    {
      name: 'Hotel Paris Buhari',
      rating: 4.8,
      dietType: ['N.VEG', 'VEG'],
      imageUri:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/c37fe5103dc3f10f240c638e890c85dd7b28f6c841034319dc7c8ae7b1e19872?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
    },
  ];

  const navItems = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b59ab9d2a5368a20c11b9205fc87d1f8cf710d7c94fd909f02f55acfd3497ac4?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
      label: 'Near me',
      isActive: true,
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b80a445a9c5e1904c5b07988fb7844a9a949c9ce9f6167e799ac3ac2a5ce744d?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
      label: 'Orders',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4cfa73c4bc9676f85e14b68cdbf6c3ad6b88cf2c0481794ddfbce614b25a327e?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
      label: 'Cart',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6fb12f5c0639f14425a1895cd3eb467c88065c6079df52fd17849d6c54cf4fb5?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
      label: 'Profile',
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.statusBar} />
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.snacksTitle}>Snacks</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <View>
            <Text style={styles.mainSubtitle}>Khaika meals</Text>
            <Text style={styles.subSubtitle}>
              Showing you 18 kitchens nearby
            </Text>
          </View>
          <Text style={styles.specialsText}>Specials</Text>
        </View>
        <View style={styles.kitchensContainer}>
          {kitchens.map((kitchen, index) => (
            <KitchenCard key={index} {...kitchen} />
          ))}
        </View>
      </ScrollView>
      <BottomNavBar items={navItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    maxWidth: 360,
    flexDirection: 'column',
    overflow: 'hidden',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'rgba(255, 159, 67, 1)',
    display: 'flex',
    width: '100%',
    paddingBottom: 225,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  statusBar: {
    backgroundColor: 'rgba(255, 143, 35, 1)',
    display: 'flex',
    minHeight: 24,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    marginTop: -200,
  },
  titleContainer: {
    marginTop: 18,
    paddingHorizontal: 18,
  },
  snacksTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(88, 88, 88, 1)',
  },
  subtitleContainer: {
    marginTop: 17,
    paddingHorizontal: 18,
  },
  mainSubtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(88, 88, 88, 1)',
    textAlign: 'center',
  },
  subSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.46,
    color: 'rgba(88, 88, 88, 1)',
    marginTop: 18,
  },
  specialsText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(88, 88, 88, 1)',
    marginTop: 8,
  },
  kitchensContainer: {
    marginTop: 41,
    paddingHorizontal: 18,
  },
});

export default SnacksScreen;
