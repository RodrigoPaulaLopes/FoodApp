import { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import FoodItem from "./food";
import React from "react";
import Food from "../../services/Food";
export interface FoodProps {
  id: string,
  name: string,
  price: number,
  time: string,
  delivery: number,
  rating: number,
  image: string,
  restaurantId: string

}
export default function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const data = await Food.findAll()
      setFoods(data)
    }
    getFoods()
  }, [])

  return foods.length > 0 ? (

    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodItem food={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16, marginTop: 16, marginBottom: 16 }}
    />
  ) : (
    <View className="w-full px-4 justify-center items-center">
      <Text>Nenhum Alimento</Text>
    </View>
  )
}