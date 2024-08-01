import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { RestaurantProps } from "..";

interface Props {
    restaurant: RestaurantProps
}
export default function RestaurantItemVertical({ restaurant }: Props) {
    return (
        <Pressable className="justify-start items-center flex flex-row w-full gap-4" onPress={() => console.log("cliquei no restaurante")}>
            <Image source={{ uri: restaurant.image }} className="w-20 h-20 rounded-full" />
            <View className="justify-center items-start  w-full">
                <Text className="text-sm mt-2 text-center leading-4 text-black" >{restaurant.name}</Text>
            </View>
        </Pressable>
    )
}