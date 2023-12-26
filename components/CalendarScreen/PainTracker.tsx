import React from "react";
import { Text, Layout, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function PainTracker(props: { data: string[] }) {
  return (
    <Layout style={styles.container}>
      {props.data.map((item, index) => (
        <Text category="p2" key={index} style={styles.card}>
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
    borderWidth: 1,
    padding: 12,
    // color: "grey",
    borderColor: "lightgrey",
  },
});
