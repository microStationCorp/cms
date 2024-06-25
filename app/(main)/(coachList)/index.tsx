import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_COACHES } from "@/lib/query/getCoaches";
import { Colors } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { styles } from "@/styles/coachListItemComp/style";

const CoachList = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_COACHES,
    { notifyOnNetworkStatusChange: true }
  );

  if (loading) {
    return <RefetchComp />;
  }

  return (
    <View style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <FlatList
        data={data.coachDetails}
        renderItem={({ item }) => <ItemComp item={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      />
    </View>
  );
};

export default CoachList;

const ItemComp = ({ item }: { item: any }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.base.toUpperCase()}</Text>
        <Text style={styles.itemText}>{item.coachNumber}</Text>
        <Text style={styles.itemText}>{item.coachType.toUpperCase()}</Text>
      </View>
      <View>
        <Feather name="link" size={20} color={Colors.DARK_CYAN} />
      </View>
    </View>
  );
};

const RefetchComp = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: Colors.GAINSBORO }}>
      <Text>Loading...</Text>
    </View>
  );
};
