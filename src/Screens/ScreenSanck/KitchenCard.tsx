import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

type KitchenCardProps = {
  name: string;
  rating: number;
  dietType: string[];
  imageUri: string;
  deliveryTime?: string;
};

const KitchenCard: React.FC<KitchenCardProps> = ({
  name,
  rating,
  dietType,
  imageUri,
  deliveryTime,
}) => {
  return (
    <View style={styles.kitchenCardContainer}>
      <Image
        resizeMode="contain"
        source={{uri: imageUri}}
        style={styles.kitchenImage}
      />
      <View style={styles.kitchenInfoContainer}>
        <Text style={styles.kitchenName}>{name}</Text>
        <View style={styles.ratingAndDietContainer}>
          <View style={styles.ratingContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73a2a5b839cc5cb7c05d8fc104f60d26e0ea23792f47dcdfc6b4c5cba85b5f1c?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
              }}
              style={styles.starIcon}
            />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
          {dietType.map((diet, index) => (
            <View
              key={index}
              style={[
                styles.dietTypeTag,
                {
                  backgroundColor:
                    diet === 'VEG'
                      ? 'rgba(65, 117, 5, 1)'
                      : 'rgba(139, 87, 42, 1)',
                },
              ]}>
              <Text style={styles.dietTypeText}>{diet}</Text>
            </View>
          ))}
        </View>
        {deliveryTime && (
          <View style={styles.deliveryTimeContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/daab818952186ef4f456e4472f58a2220dac8139df8497011b40c9385e203c97?placeholderIfAbsent=true&apiKey=0f391e954725473d9de79a63b0a4b05c',
              }}
              style={styles.clockIcon}
            />
            <Text style={styles.deliveryTimeText}>{deliveryTime}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kitchenCardContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 15,
  },
  kitchenImage: {
    borderRadius: 0,
    position: 'relative',
    display: 'flex',
    width: 108,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 1,
  },
  kitchenInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginVertical: 'auto',
  },
  kitchenName: {
    color: 'rgba(88, 88, 88, 1)',
    fontSize: 18,
    fontWeight: '700',
  },
  ratingAndDietContainer: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 17,
    flexDirection: 'row',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  starIcon: {
    alignSelf: 'flex-start',
    position: 'relative',
    display: 'flex',
    width: 16,
    flexShrink: 0,
    aspectRatio: 1.07,
  },
  ratingText: {
    fontSize: 14,
    color: 'rgba(254, 202, 87, 1)',
    letterSpacing: 0.46,
  },
  dietTypeTag: {
    borderRadius: 9,
    paddingVertical: 1,
    paddingHorizontal: 11,
  },
  dietTypeText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
  },
  deliveryTimeContainer: {
    alignSelf: 'flex-start',
    display: 'flex',
    marginTop: 11,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  clockIcon: {
    position: 'relative',
    display: 'flex',
    width: 12,
    flexShrink: 0,
    marginVertical: 'auto',
    aspectRatio: 1,
  },
  deliveryTimeText: {
    fontSize: 14,
    color: 'rgba(88, 88, 88, 1)',
    letterSpacing: 0.46,
  },
});

export default KitchenCard;
