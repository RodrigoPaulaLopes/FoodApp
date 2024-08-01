import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import RestaurantItem from "./restaurantItem";
import Restaurant from '../../services/Restaurants'

export interface RestaurantProps {

    id: string,
    name: string,
    image: string
}
export default function RestaurantsHorizontal() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const data = await Restaurant.findAll()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])
    return restaurants.length > 0 ? (
        <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 4, padding: 10 }} />
    ) : (
        <View className="w-full px-4 justify-center items-center">
            <Text>Nenhum Restaurante encontrado.</Text>
        </View>
    )
}