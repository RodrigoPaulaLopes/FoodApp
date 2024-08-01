import React, { useEffect, useState } from "react";
import {Text, View } from "react-native";
import RestaurantItemVertical from "./restaurantItem";
import Restaurant from '../../services/Restaurants'

export interface RestaurantProps {

    id: string,
    name: string,
    image: string
}
export default function RestaurantsVertical() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const data = await Restaurant.findAll()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])
    return restaurants.length > 0 ? (
        <View className="px-4 mt-8 mb-8 flex flex-col gap-5">
            {restaurants.map(restaurant =>
                <RestaurantItemVertical restaurant={restaurant} key={restaurant.id} />
            )}
        </View>
    ) : (
        <View className="w-full px-4 justify-center items-center">
            <Text>Nenhum Restaurante encontrado.</Text>
        </View>
    )
}