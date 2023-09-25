import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import CarouselMovieCard from './CarouselMovieCard';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window")

const TrendingMovies = ({ data }) => {
    const navigation = useNavigation()
    const handleClickHandler = (item) => {
        navigation.navigate("Movie", item)
    }

    return (
        <View className="mx-3 mt-4 my-4">
            <Text className="text-2xl text-white font-bold mb-4">Trending </Text>
            <Carousel

                data={data}
                firstItem={1}
                inactiveSlideOpacity={0.5}
                sliderWidth={width}
                itemWidth={width * 0.6}
                itemHeight={height * 0.8}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
                renderItem={(item) => <CarouselMovieCard movie={item} handleClick={handleClickHandler} />}

            />
        </View>
    )
}

export default TrendingMovies


