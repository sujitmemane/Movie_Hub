import React from 'react'
import { TouchableWithoutFeedback, Text, Image, Dimensions } from 'react-native'
import Img from "../assets/splash.png"

const { width, height } = Dimensions.get("window")

const MovieCard = ({ movie }) => {
    return (
        <TouchableWithoutFeedback>
            <Image
                width={width * 0.6}
                height={height * 0.6}
                source={{ uri: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" }}
                className="rounded-xl"
            />
        </TouchableWithoutFeedback>
    )
}

export default MovieCard