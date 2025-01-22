import { Stack } from 'expo-router';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function RootLayout() {

    // Create the header with a background image
    function ImageTitle() {
            return (
            <ImageBackground style={styles.image} source={require('../assets/patagonia.jpg')} >
                <Text style={styles.text}>My Adventure Book</Text>
            </ImageBackground>
            );
          }

    return (
        <Stack
        screenOptions={{
            headerTitle: props => <ImageTitle {...props} />,
        }}
        >
            <Stack.Screen name="(home)" />
        </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 150,
      justifyContent:'center'
    },
    text: {
        width: '100%',
        backgroundColor:'#C5A48A',
        opacity: 0.6,
        fontWeight: 'bold',
        fontSize:25,
        textAlign: 'center',
    }
  });