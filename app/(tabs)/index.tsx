import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);
  const onDataChange = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
        }}
      />

      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={geoItems}/>
      <ListingsBottomSheet listings={items} category={category}/>
    </View>
  );
};

export default Page;
