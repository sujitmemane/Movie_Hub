import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import TrendingMovies from "../components/TrendingMovies";



const HomeScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 2, 3, 4])
  return (
    <View className="flex-1 bg-neutral-900" >


      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex mx-3 my-3 justify-between flex-row items-center ">
          <Text className="text-3xl text-white font-bold">

            Movie<Text className="text-[#ffba08]">Hub</Text> </Text>
          <MagnifyingGlassIcon size={30} color="white" strokeWidth={3} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
          <View>
            <TrendingMovies data={trendingMovies} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
