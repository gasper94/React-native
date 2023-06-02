import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ImageWithTextOverlay = () => {
    return (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Your Text Here</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover', // You can adjust the resizeMode according to your needs
      justifyContent: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity as desired
      padding: 10,
    },
    overlayText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default ImageWithTextOverlay;