import { StyleSheet, FlatList, View, Image } from "react-native";
import { Screen } from "../../components/Screen";
import { Text, Divider, Button } from "@ui-kitten/components";
import { DocumentProperty } from "../../types/property";

export default function DocumentScreen() {
  const documents = [
    {
      id: 0,
      title: "X-Ray",
      date: "10/12/23",
      time: "3:47 PM",
      pages: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
    },
    {
      id: 1,
      title: "Insurance forms",
      date: "10/12/23",
      time: "3:47 PM",
      pages: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
    },
    {
      id: 2,
      title: "X-Ray",
      date: "1/12/23",
      time: "3:47 AM",
      pages: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
    },
  ];

  return (
    <>
      <FlatList
        style={{ marginTop: 0 }}
        data={documents}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: any }) => (
          <>
            <View style={styles.row}>
              {/* <Image source={{ uri: item.pages[0] }} style={styles.image} />
              <View>
                <Text category="s1" style={[styles.textMargin, { marginBottom: 3 }]}>
                  {item.title}
                </Text>
                <Text
                  category="p2"
                  style={[styles.textMargin, { margin: 20, marginTop: 0 }]}
                >
                  {item.date}, {item.time} - {item.pages.length} pages
                </Text>
              </View> */}
            </View>
            <Divider />
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
  },
  textMargin: {
    margin: 20,
  },
  image: {
    height: 60,
    width: 60,
    marginLeft: 10,
  },
});
