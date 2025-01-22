import { Stack } from 'expo-router';

export default function HomeLayout() {

    return (
        <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: '#C5A48A',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerTitle: 'Home',
        }}
        >
        <Stack.Screen name="index" />
        <Stack.Screen name="notes" />
        <Stack.Screen name="photos" />
        </Stack>
    );
};