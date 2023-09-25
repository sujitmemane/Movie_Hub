import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("window")

const MovieCard = ({ movie }) => {
    return (
        <TouchableWithoutFeedback >
            <View className="flex items-center mx-2 justify-center">
                <Image className="rounded" width={width * 0.4} height={height * 0.3} source={{ uri: "https://imgv3.fotor.com/images/cover-photo-image/a-game-character-enchantress-wearing-red-clothes-and-horns-created-by-Fotor-ai-image-generator.jpg" }} />
                <Text className="text-xl font-bold my-2 text-white">Bahubali 2</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default MovieCard