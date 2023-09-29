import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from "react-native-heroicons/outline"
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'


const { width, height } = Dimensions.get("window")

export default function PersonScreen() {
    const navigation = useNavigation()
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    return (
        <ScrollView className="bg-neutral-900 " >
            <SafeAreaView className="my-3" >

                <View className="px-3 py-1">

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon color="white" size={25} strokeWidth={2} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {


                loading ? <Loading /> : <View>
                    <View className="px-2">
                        <View className="rounded-full flex justify-center items-center">
                            <Image className="rounded-full border border-4 border-white" source={{ uri: "https://e1.pxfuel.com/desktop-wallpaper/270/651/desktop-wallpaper-iphone-prabhas-prabhas-thumbnail.jpg" }} width={width * 0.76} height={height * 0.43} />
                        </View>
                        <View className="my-2">
                            <Text className="text-sm font-bold text-white text-center">Prabhas Raju</Text>
                            <Text className=" text-sm text-center text-neutral-400">Hyderabad,India</Text>
                        </View>
                        <View className="flex bg-[#403d39]  px-2 py-4 rounded-xl  flex-row items-center justify-center">
                            <View className="flex justify-center px-1 items-center ">
                                <Text className="text-white text-sm font-bold">Gender</Text>
                                <Text className=" text-xs font-bold text-neutral-500 ">Male</Text>

                            </View>
                            <View className="flex justify-center items-center px-1 ">
                                <Text className="text-white text-sm font-bold">Birthday</Text>
                                <Text className="text-white text-xs font-bold text-neutral-500">13-05-2004</Text>

                            </View>
                            <View className="flex justify-center items-center px-1 ">
                                <Text className="text-white text-sm font-bold">Known For</Text>
                                <Text className="text-white text-xs font-bold text-neutral-500">Acting</Text>

                            </View>
                            <View className="flex justify-center items-center px-1">
                                <Text className="text-white text-sm font-bold">Popularity</Text>
                                <Text className="text-white text-xs font-bold text-neutral-500">89.5</Text>

                            </View>
                        </View>
                        <View className="my-3">
                            <Text className="text-2xl text-white font-bold">Biography</Text>
                            <Text className="my-1 text-neutral-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </View>
                    </View>
                    <MovieList title="Movies" data={personMovies} />
                </View>
            }



        </ScrollView>



    )
}
