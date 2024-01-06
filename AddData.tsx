import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { db } from "./config";
// import { ref, set } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";

const AddData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dataAddOn = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
    // set(ref(db, "posts/" + title), {
    //   title: title,
    //   body: body,
    // });
    setTitle("");
    setBody("");
  };

  return (
    <View>
      <Text>Add Data</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput placeholder="Body" value={body} onChangeText={(text) => setBody(text)} />
      <Button title="Add Date" onPress={dataAddOn} />
    </View>
  );
};

export default AddData;
