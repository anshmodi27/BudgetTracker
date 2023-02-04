import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import { Swipeable } from "react-native-gesture-handler";
import CategoryRow from "../Components/CategoryRow";
import { theme } from "../theme";

const Categories = () => {
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(
    theme.colors.primary
  );

  const onSelectColor = (hex) => {
    setSelectedColor(hex);
  };

  const [newName, setNewName] = React.useState("");

  const [categories, setCategories] = React.useState([
    { id: 1, color: theme.colors.primary, name: "Grocery" },
    { id: 2, color: theme.colors.error, name: "Hello" },
  ]);

  const createCategory = () => {
    setCategories([
      ...categories,
      { id: Math.random().toString(), color: selectedColor, name: newName },
    ]);
    setNewName("");
    setSelectedColor(theme.colors.primary);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={110}
        style={{ margin: 16, flex: 1 }}
      >
        <View
          style={{
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          {/* <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                borderRadius: 11,
                overflow: "hidden",
              }}
            >
              {categories.map(({ id, color, name }) => (
                <Swipeable
                  key={id.toHexString()}
                  renderRightActions={() => {
                    return (
                      <View
                        style={{
                          backgroundColor: theme.colors.error,
                          width: 75,
                        }}
                      >
                        <RectButton
                          style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onPress={() => deleteCategory(id)}
                        >
                          <EvilIcons name="trash" size={40} color="white" />
                        </RectButton>
                      </View>
                    );
                  }}
                >
                  <CategoryRow color={color} name={name} />
                </Swipeable>
              ))}
            </View>
          </ScrollView> */}
          {categories.map(({ id, color, name }) => (
            <CategoryRow key={id} color={color} name={name} />
          ))}
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => setShowColorPicker(!showColorPicker)}
          >
            <View
              style={{
                backgroundColor: selectedColor,
                width: 32,
                height: 32,
                borderRadius: 16,
                borderWidth: 3,
                borderColor: "white",
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Category name"
            placeholderTextColor={theme.colors.textSecondary}
            onChange={(event) => setNewName(event.nativeEvent.text)}
            value={newName}
            style={{
              color: "white",
              height: 40,
              borderColor: theme.colors.border,
              borderWidth: 1,
              flex: 1,
              borderRadius: 8,
              paddingLeft: 8,
              marginLeft: 16,
            }}
          />
          <TouchableOpacity
            onPress={createCategory}
            style={{
              padding: 12,
            }}
          >
            <FontAwesome name="send" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <Modal
        transparent
        visible={showColorPicker}
        animationType="fade"
        onRequestClose={() => setShowColorPicker(false)}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              padding: 24,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.colors.card,
              overflow: "hidden",
              borderRadius: 12,
            }}
          >
            <ColorPicker
              hideSliders
              color={selectedColor}
              onColorChange={(color) => onSelectColor(fromHsv(color))}
              style={{ width: "100%", height: 300 }}
            />
            <Button onPress={() => setShowColorPicker(false)} title="Select" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Categories;
