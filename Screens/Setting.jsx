import React from "react";
import { Alert, Text, View } from "react-native";
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
      <ListItem
        label="Erase all Data"
        isDestructive
        onClick={() =>
          Alert.alert("Are You Sure?", "This action is not Reversible", [
            {
              text: "Cancel",
              onPress: () => {
                console.log("cancel Pressed");
              },
              style: "cancel",
            },
            {
              text: "Erase data",
              style: "destructive",
              onPress: () => {
                console.log("ok Pressed");
              },
            },
          ])
        }
      />
    </View>
  );
};

export default Setting;
