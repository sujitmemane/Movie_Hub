import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Loading from '../components/Loading'

const { width, height } = Dimensions.get("window")

const SearchScreen = () => {
    const navigation = useNavigation()
    const [searchResults, setSearchResults] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View className="flex mx-2 flex-row border-2  justify-between items-center border-1 border-white  mt-2 rounded-full ">
                <TextInput placeholder="Search Movies" placeholderTextColor={"lightgray"} className="tracking-wider text-base pb-1 pl-6 flex-1 text-white" />
                <TouchableOpacity className="rounded-full p-3 m-1 bg-neutral-500" onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="white" size={25} />
                </TouchableOpacity>
            </View>
            {loading ? <Loading /> : <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="mt-4">

                <Text className="text-md font-bold text-white mb-4">Results [7]</Text>
                <View className="flex flex-row flex-wrap justify-between  ">
                    {searchResults.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.push('Movie', item)} >
                            <View className="">

                                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxY519caJZIkoUGTd7OnJLz80HZsjEzvJ6CA&usqp=CAU" }} className="rounded-xl p-1" style={{ width: width * 0.45, height: height * 0.33 }} />
                                <Text className="text-white font-bold my-2 text-center">
                                    Bahubali 2
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>}
        </SafeAreaView>
    )
}

export default SearchScreen

