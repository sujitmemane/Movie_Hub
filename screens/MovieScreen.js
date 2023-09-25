import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MovieScreen() {
    const navigation = useNavigation()

    return (
        <View>
            <Text>MovieScreen</Text>
            <Text onPress={() => navigation.navigate("Home")}>Home</Text>
        </View>
    )
}