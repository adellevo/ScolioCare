import { FlatList } from "react-native";
import { Card } from "../../components/Card";
import { Screen } from "../../components/Screen";
import { LIST_MARGIN } from "../../constants/Dimensions";

export default function SearchScreen() {
  const properties = [
    {
      id: 0,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "444 NE 34thr St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking", "Val1", "Val2"],
    },
    {
      id: 1,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "444 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking", "Val1", "Val2"],
    },
    {
      id: 2,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Random_House.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/81/D%C3%BClmen%2C_H%C3%A4user_%28Hohe_Stra%C3%9Fe%29_--_2014_--_3324.jpg",
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "444 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking", "Val1", "Val2"],
    },
  ];

  return (
    <Screen style={{ marginHorizontal: LIST_MARGIN }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card property={item} style={{ marginVertical: 5 }} />}
      ></FlatList>
    </Screen>
  );
}
