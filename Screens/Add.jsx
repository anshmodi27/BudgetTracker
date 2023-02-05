import React from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { LinearGradient } from "react-native-svg";
import { styles } from "../assets/Classes/Class";
import ListItem from "../Components/ListItem";
import { Recurrence } from "../Models/Recursion";

const Add = () => {
  const [amount, setAmount] = React.useState("");
  const [recurrence, setRecurrence] = React.useState(Recurrence.None);
  const [date, setDate] = React.useState(new Date());
  const [note, setNote] = React.useState("");
  const [category, setCategory] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={110}
      // style={{ margin: 16, flex: 1 }}
    >
      <View
        style={{
          borderRadius: 11,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <ListItem
          label="Amount"
          detail={
            <TextInput
              placeholder="Amount"
              onChange={(event) => setAmount(event.nativeEvent.text)}
              value={amount}
              textAlign="right"
              keyboardType="numeric"
              inputAccessoryViewID="dismissKeyboard"
              style={{
                height: 20,
                color: "white",
                flex: 1,
                borderRadius: 8,
                paddingLeft: 8,
                fontSize: 16,
              }}
            />
          }
        />

        <ListItem
          label="Amount"
          detail={
            <TextInput
              placeholder="Amount"
              onChange={(event) => setAmount(event.nativeEvent.text)}
              value={amount}
              textAlign="right"
              keyboardType="numeric"
              inputAccessoryViewID="dismissKeyboard"
              style={{
                height: 20,
                color: "white",
                flex: 1,
                borderRadius: 8,
                paddingLeft: 8,
                fontSize: 16,
              }}
            />
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Add;
