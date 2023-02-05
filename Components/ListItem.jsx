import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { theme } from "../theme";

const ListItem = ({
  label,
  detail,
  onClick,
  swipeToDelete,
  onDelete,
  isDestructive,
}) => {
  const item = React.useMemo(
    () => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: !!detail ? "space-between" : "flex-start",
          alignItems: "center",
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        }}
        onPress={onClick}
        disabled={!onClick}
      >
        <Text
          style={{
            fontSize: 16,
            color: isDestructive ? theme.colors.error : "white",
          }}
        >
          {label}
        </Text>
        {detail}
      </TouchableOpacity>
    ),
    []
  );

  if (swipeToDelete) {
    return (
      <Swipeable
        renderRightActions={() => {
          <TouchableOpacity
            style={{
              backgroundColor: { isDestructive },
              justifyContent: "center",
              alignItems: "center",
              width: 100,
            }}
            onPress={onDelete}
          >
            <Text>Delete</Text>
          </TouchableOpacity>;
        }}
        onSwipeableRightOpen={onDelete}
      ></Swipeable>
    );
  }
  return item;
};

export default ListItem;
