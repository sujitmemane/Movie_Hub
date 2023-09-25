import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TopCast = ({ cast }) => {
    const navigation = useNavigation()

    return (

        <View className="mx-4 my-3 mb-8">
            <Text className="text-2xl text-white font-bold ">
                Top Cast
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 10 }}>

                {
                    cast && cast.map(person => <TouchableOpacity onPress={() => navigation.navigate("Person", person)}>
                        <View className="flex items-center space-y-2 mx-2">


                            <View
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image
                                    className="rounded-2xl h-24 w-20"
                                    source={{ uri: "https://www.financialexpress.com/wp-content/uploads/2023/06/prabhas.jpg" }}
                                />
                            </View>
                            <View>
                                <Text className="text-white ">Sujit Memane</Text>
                                <Text className="text-white text-center font-bold ">Prabhas</Text>
                            </View>



                        </View>
                    </TouchableOpacity>)
                }

            </ScrollView>
        </View>
    )
}

export default TopCast