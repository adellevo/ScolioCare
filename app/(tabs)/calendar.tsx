import React, { useState } from "react";
import { Text, Calendar, Layout, Divider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { JOURNAL_ENTRY_HEIGHT, JOURNAL_ENTRY_WIDTH } from "../../constants";
import BraceLog from "../../components/CalendarScreen/BraceLog/BraceLog";
import { format } from "date-fns";
import { ScrollView } from "react-native-gesture-handler";
import { Agenda, AgendaSchedule } from "react-native-calendars";
import CalendarSection from "../../components/CalendarScreen/CalendarSection";
import PainTracker from "../../components/CalendarScreen/PainTracker";

export default function CalendarScreen() {
  const [currentDay, setCurrentDay] = useState("");
  const entries = [
    { startTime: "2016-01-04 18:34", endTime: "2016-01-04 20:52" },
    { startTime: "2016-01-04 09:10", endTime: "2016-01-04 15:52" },
    { startTime: "2016-01-04 01:34", endTime: "2016-01-04 07:52" },
  ];
  const painPoints = [
    "head and neck",
    "shoulder",
    "upper back",
    "lower back",
    "hip",
    "sciatic nerve",
  ];
  const documents = [];

  const renderCurrentDayEntry = () => {
    return (
      <View>
        <Divider style={{ height: 15, backgroundColor: "#2C2D2E", marginBottom: 30 }} />
        <Text category="h5" style={{ fontWeight: "500", textAlign: "center" }}>
          {currentDay}
        </Text>
        <ScrollView style={styles.journalEntry}>
          <CalendarSection title="Brace Log" children={<BraceLog data={entries} />} />
          <CalendarSection
            title="Pain Points"
            children={<PainTracker data={painPoints} />}
          />
          <CalendarSection title="Documents" />
        </ScrollView>
      </View>
    );
  };

  const currentDayEntry: AgendaSchedule = {
    [currentDay]: [],
  };

  // const testItems: AgendaSchedule = {
  //   "2023-12-25": [{ name: "item 1 - any js object", height: 80, day: "2012-05-22" }],
  //   "2012-05-23": [],
  // };

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
    // borderTopColor: "grey",
    backgroundColor: "white",
  },
});
