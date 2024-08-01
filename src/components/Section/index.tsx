import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
    name: string
    size: "text-lg" | "text-xl" | "text-2xl"
    label: string
    action: () => void
}
export default function Section({action, label, name, size}: Props) {
    return (
        <View className="flex flex-row w-full items-center justify-between px-4 my-4">
            <Text className={`${size} font-semibold`}>{name}</Text>
            <Pressable onPress={action}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    )
}