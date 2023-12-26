import React from "react";
import { View, ScrollView } from "react-native";
import { Divider, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { getSessionLabel, getSessionDuration } from "./helpers";

export default function BraceLog(props: {
  data: { startTime: string; endTime: string }[];
}) {
  return (
    <View style={[styles.tableContent]}>
      <View style={styles.tableHeader}>
        <Text category="label" style={{ marginLeft: 15 }}>
          Sessions
        </Text>
        <Text category="label" style={{ marginRight: 15 }}>
          Total:{" "}
          {getSessionDuration(
            props.data[props.data.length - 1].endTime,
            props.data[0].startTime
          )}
        </Text>
      </View>
      {props.data.map((session, index) => (
        <View key={index}>
          <Divider />
          <View style={styles.session}>
            <Text category="p2" style={{ marginLeft: 15 }}>
              {getSessionLabel(session)}
            </Text>
            <Text category="p2" style={{ marginRight: 15 }}>
              {getSessionDuration(session.startTime, session.endTime)}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  session: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
  },

  tableHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
    // backgroundColor: "lightgrey",
  },
  tableContent: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
  },
});
