import { StyleSheet, Image,View, Text } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  // const imageSource = selectedImage !== null
  //   ? { uri: selectedImage }
  //   : placeholderImageSource;

  return (
  <View>
    <Text>Helloc</Text>
    {/* <Text>{selectedImage}</Text> */}
    {/* <Image source={imageSource} style={styles.image} /> */}
  </View>
  )
  ;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
