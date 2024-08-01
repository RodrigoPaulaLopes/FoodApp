import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RestaurantProps } from "..";

interface Props{
    restaurant: RestaurantProps
}
export default function RestaurantItem({restaurant}: Props) {
    return (
        <Pressable className="justify-center items-center flex flex-col" onPress={() => console.log("cliquei no restaurante")}>
            <Image source={{uri: restaurant.image}} className="w-20 h-20 rounded-full" />
            <Text className="text-sm mt-2 w-20 text-center leading-4 text-black"  numberOfLines={1}>{restaurant.name}</Text>
        </Pressable>
    )
}