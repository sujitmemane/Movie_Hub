import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, HeartIcon } from "react-native-heroicons/outline"
import { LinearGradient } from "expo-linear-gradient"
import TopCast from '../components/TopCast'
import MovieList from '../components/MovieList'

const { width, height } = Dimensions.get("window")

export default function MovieScreen() {
    const navigation = useNavigation()
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const { params: item } = useRoute()

    useEffect(() => {

    }, [

    ])

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">

            <View className="w-full">





                <View className="absolute mt-5 z-20 w-full flex-row justify-between items-center px-4 ">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon color="white" size={25} strokeWidth={2} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <HeartIcon color="white" size={25} strokeWidth={2} />
                    </TouchableOpacity>
                </View>


                <View >
                    <Image width={width} height={height * 0.5} source={{ uri: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybCUyMGluJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" }} />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>

                <View className="-mt-10 mx-4">
                    <Text className="text-4xl font-bold text-white text-center">
                        Bahubali 2
                    </Text>
                    <Text className="text-md text-neutral-400 font-bold mt-2 text-center">
                        Released . 2020 . 180 min
                    </Text>
                    <View className="my-3  ">
                        <Text className="text-md font-bold text-neutral-400  mt-2 text-center">
                            Action . Thrill . Comedy
                        </Text>
                    </View>
                    <Text className="text-neutral-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
                    </Text>


                </View>
                <TopCast cast={cast} />
                <MovieList data={similarMovies} title="Similar Movies" />
                <View>

                </View>

            </View>

        </ScrollView>
    )
}