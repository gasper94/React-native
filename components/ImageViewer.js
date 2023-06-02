import { StyleSheet, Image, Text, View } from 'react-native';

export default function ImageViewer({placeholderImageSource, selectedImage}) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
      <Image source={imageSource} style={styles.image} /> 
    );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  container: {
    width: 40,
    color: 'white',
  }
});
