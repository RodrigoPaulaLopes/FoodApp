import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Header } from "../../components/header"
import { STATUSBAR_MARGIN } from "../../../constants";
import Banner from "../../components/Banner";
import RestaurantsHorizontal from "../../components/restaurants";
import RestaurantsVertical from "../../components/restaurantsVertical";
import Search from "../../components/Search";
import Section from "../../components/Section";
import TrendingFoods from "../../components/Trendings";

export default function Home() {
    return (
        <ScrollView style={{ flex: 1 }} className="bg-slate-50" showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <View className="w-full px-4" style={{ marginTop: STATUSBAR_MARGIN }}>
                    <Header />
                    <Banner />
                    <Search />
                </View>
                <Section name={"Comidas em alta"} size={"text-2xl"} label={"Veja mais"} action={() => console.log("Clicou no veja mais")} />
                <TrendingFoods />
                <Section name={"Famosas no FoodApp"} size={"text-xl"} label={"Veja todos"} action={() => console.log("Clicou no veja mais")} />
                <RestaurantsHorizontal />
                <Section name={"Restaurantes"} size={"text-xl"} label={"Veja todos"} action={() => console.log("Clicou no veja mais")} />
                <RestaurantsVertical />
            </SafeAreaView>
        </ScrollView>
    )
}