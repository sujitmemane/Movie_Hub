import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";



const HomeScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 2, 3, 4])
  const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3, 4, 5])
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5])
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

          <TrendingMovies data={trendingMovies} />
          <MovieList title="Upcoming" data={upcomingMovies} />
          <MovieList title="Top Rated " data={topRated} />

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
