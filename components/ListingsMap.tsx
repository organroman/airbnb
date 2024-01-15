import { View, Text, StyleSheet } from "react-native";
import React, { memo } from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 53.55,
  longitude: 9,
  latitudeDelta: 9,
  longitudeDelta: 9,
};
const ListingsMap = memo(({ listings }: Props) => {
  const router = useRouter();
  const onMarkerSelected = (item: any) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;

    const points = properties.point_count;

    return (
      <Marker
        key={`cluster-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontFamily: 'mon-sb'
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        renderCluster={renderCluster}
      >
        {listings.features.map((item: any) => (
          <Marker
            key={item.properties.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: item.properties.latitude,
              longitude: item.properties.longitude,
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
});

export default ListingsMap;
