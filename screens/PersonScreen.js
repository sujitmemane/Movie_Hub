import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PersonScreen() {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View>
                <Text onPress={() => navigation.goBack()}>Back</Text>
            </View>
        </SafeAreaView>

    )
}
