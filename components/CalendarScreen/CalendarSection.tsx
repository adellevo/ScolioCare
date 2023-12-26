import React from "react";
import { View } from "react-native";
import { Text, Divider } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function CalendarSection(props: { title: string; children?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text category="s1" style={{ fontWeight: 500 }}>
          {props.title}
        </Text>
        <MaterialCommunityIcons name="square-edit-outline" style={styles.icon} />
      </View>
      <View>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  titleBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    marginBottom: 8,
  },
  icon: { fontSize: 20, color: "black", marginLeft: 5 },
});
