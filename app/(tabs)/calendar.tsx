import React, { useEffect, useState } from "react";
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
import { db } from "../../config";
import {
  collection,
  doc,
  getDoc,
  Firestore,
  DocumentReference,
  SnapshotOptions,
  DocumentSnapshot,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  WithFieldValue,
  Timestamp,
  DocumentData,
} from "firebase/firestore";

////////////////
class SessionData {
  constructor(readonly startTime: Timestamp, readonly endTime: Timestamp) {}

  toString(): string {
    return `startTime: ${this.startTime?.toString()}, endTime: ${this.endTime.toString()}`;
  }
}

class NoteData {
  // wdwn readonly??
  constructor(readonly sessions: Array<SessionData>, readonly symptoms: Array<string>) {}

  getSessions() {
    return this.sessions;
  }

  getSymptoms() {
    return this.getSymptoms;
  }

  toString(): string {
    return `sessions: ${this.sessions?.toString()}, symptoms: ${this.symptoms?.toString()}`;
  }
}

interface Note {
  sessions?: Array<SessionData>;
  symptoms?: Array<string>;
}

const noteConverter = {
  toFirestore(note: NoteData): DocumentData {
    return { sessions: note.sessions, symptoms: note.symptoms };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): NoteData {
    const data = snapshot.data(options)!;
    return new NoteData(data.sessions, data.symptoms);
  },
};

////////////////

export default function CalendarScreen() {
  const [noteRef, setNoteRef] = useState<Note>();
  const [currentDay, setCurrentDay] = useState("");

  const entries = [
    { startTime: "2016-01-04 18:34", endTime: "2016-01-04 20:52" },
    { startTime: "2016-01-04 09:10", endTime: "2016-01-04 15:52" },
    { startTime: "2016-01-04 01:34", endTime: "2016-01-04 07:52" },
  ];

  const getCurrentDayNote = async () => {
    // console.log("current day: ", currentDay);
    const docRef = doc(db, "notes", currentDay).withConverter(noteConverter);
    const docSnap = await getDoc(docRef);
    // console.log("docSnap: ", docSnap);

    /// old functional!!
    // const docRef = doc(db, "notes", currentDay);
    // const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const dataRef = docSnap.data();
      setNoteRef(dataRef);
      console.log("dataRef: " + dataRef);
    }
    // docSnap.data() will be undefined in this case
    else {
      setNoteRef(undefined);
    }
  };

  useEffect(() => {
    if (currentDay != "") {
      getCurrentDayNote();
    }
  }, [currentDay]);

  const renderCurrentDayEntry = () => {
    return (
      <View>
        <Divider style={{ height: 15, backgroundColor: "#2C2D2E", marginBottom: 40 }} />
        <Text category="h4" style={{ fontWeight: "500", textAlign: "center" }}>
          {currentDay}
        </Text>
        <ScrollView style={styles.journalEntry}>
          <CalendarSection title="Brace Log" children={<BraceLog data={entries} />} />
          <CalendarSection
            title="Symptoms"
            children={<PainTracker selected={noteRef?.symptoms ?? []} />}
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
    backgroundColor: "white",
  },
});
