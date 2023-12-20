import React, { useState } from "react";
import { Agenda, AgendaSchedule, AgendaEntry } from "react-native-calendars";
import { Text } from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";
import { View } from "../../components/Themed";
import { JOURNAL_ENTRY_HEIGHT, JOURNAL_ENTRY_WIDTH } from "../../constants/Dimensions";

export default function CalendarScreen() {
  const [currentDay, setCurrentDay] = useState("");

  const renderCurrentDayEntry = () => {
    return (
      <View style={styles.journalEntry}>
        <Text category="h6">{currentDay}</Text>
        <Text>12 hours braced</Text>
        <Text>Symptoms: neck pain, back soreness</Text>
        <Text>Documents</Text>
        <Text>Add editing button</Text>
      </View>
    );
  };

  const currentDayEntry: AgendaSchedule = {
    [currentDay]: [],
  };

  return (
    <Agenda
      items={currentDayEntry}
      renderDay={renderCurrentDayEntry}
      onDayPress={(day) => setCurrentDay(day.dateString)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  journalEntry: {
    textAlign: "center",
    padding: 30,
    width: JOURNAL_ENTRY_WIDTH,
    height: JOURNAL_ENTRY_HEIGHT,
    borderRadius: 2,
    borderColor: "black",
    backgroundColor: "grey",
    color: "black",
  },
});
