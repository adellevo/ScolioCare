import React, { useState } from "react";
import { Text, Layout, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { symptoms } from "../../constants";

export default function PainTracker(props: { selected: string[] }) {
  console.log("symptoms: ", symptoms);
  console.log("selected: ", props.selected);
  return (
    <Layout style={styles.container}>
      {symptoms.map((item, index) => (
        <Text
          category="p2"
          key={index}
          style={
            props.selected.includes(item)
              ? [(styles.card, styles.selected)]
              : [styles.card, styles.unselected]
          }
        >
          {item}
        </Text>
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    margin: 6,
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 20,
    padding: 12,
    color: "#2C2D2E",
  },
  selected: {
    borderColor: "#2C2D2E",
    fontWeight: "bold",
    borderWidth: 2,
  },
  unselected: {
    borderColor: "grey",
    borderWidth: 1,
  },
});
