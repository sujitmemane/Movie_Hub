import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import MovieCard from './MovieCard'

const MovieList = ({ title, data }) => {
    console.log(data)
    return (
        <View className="mb-3 mx-3 ">
            <View className="flex flex-row items-center justify-between mb-3">

                <Text className="text-2xl text-white font-bold ">{title} </Text>
                <Text className="text-[#ffba08] "> Explore More</Text>
            </View>
            <ScrollView horizontal >
                {
                    data.map((movie, index) => <MovieCard />)
                }

            </ScrollView>
        </View>
    )
}

export default MovieList

