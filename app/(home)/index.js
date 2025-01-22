import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import styles from '../appStyles.js';

export default function Index () {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Hi there!</Text>
            <Text style={styles.text}>Ready for a new adventure?</Text>
            <View style={styles.buttons}>
                <Link style={[styles.pressable, styles.lightViolet]} href={'/notes'} asChild>
                <Pressable>
                    <Text style={styles.buttonText}>Notes</Text>
                </Pressable>
                </Link>
                <Link style={[styles.pressable, styles.lightBrown]} href={'/photos'} asChild>
                    <Pressable>
                        <Text style={styles.buttonText}>Photos</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}