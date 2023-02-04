import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "react-native-svg";
import { styles } from "../assets/Classes/Class";
import ListItem from "../Components/ListItem";
import Entypo from "@expo/vector-icons/Entypo";

const Setting = ({ navigation }) => {
  return (
    <View
      style={{
        margin: 20,
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      <ListItem
        onClick={() => {
          navigation.navigate("Categories");
        }}
        label="Categories"
        detail={
          <Entypo
            name="chevron-thin-right"
            color="white"
            style={{ opacity: 0.8 }}
            size={20}
          />
        }
      />
      {/* <ListItem
        label="Report a Bug"
        detail={
          <Entypo
            name="chevron-thin-right"
            color="white"
            style={{ opacity: 0.8 }}
            size={20}
          />
        }
      /> */}
      <ListItem label="Erase all Data" isDestructive />
    </View>
  );
};

export default Setting;
