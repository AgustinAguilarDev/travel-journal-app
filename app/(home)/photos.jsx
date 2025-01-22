import { View, Text, StyleSheet } from 'react-native';

// Photos screen, still to be developed
export default function PhotosScreen() {
  return (
    <View style={styles.container}>
      <Text>Photos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
