import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

type NavItem = {
  icon: string;
  label: string;
  isActive?: boolean;
};

type BottomNavBarProps = {
  items: NavItem[];
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({items}) => {
  return (
    <View style={styles.bottomNavContainer}>
      {items.map((item, index) => (
        <View key={index} style={styles.navItemContainer}>
          <Image
            resizeMode="contain"
            source={{uri: item.icon}}
            style={styles.navIcon}
          />
          <Text
            style={[styles.navLabel, item.isActive && styles.activeNavLabel]}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 20,
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  navItemContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navIcon: {
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 24,
    aspectRatio: 1,
  },
  navLabel: {
    color: 'rgba(88, 88, 88, 1)',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  activeNavLabel: {
    color: 'rgba(255, 159, 67, 1)',
    fontWeight: '500',
  },
});

export default BottomNavBar;
