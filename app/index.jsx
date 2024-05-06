import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function App() {
    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style='auto' />
            <Link href='/home'>Go to home</Link>
        </View>
    )
}
