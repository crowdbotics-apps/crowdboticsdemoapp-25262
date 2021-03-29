import { createStackNavigator } from "@react-navigation/stack";
import React from "react"

import Blank from "./screens/blank";

const Stack = createStackNavigator();

export default function BlankScreen2218634Navigator() {
  return (
    <Stack.Navigator initialRouteName={"Blank"} >
      <Stack.Screen name="Blank" component={Blank} />
    </Stack.Navigator>
  );
}

// export default BlankBlueprintNavigator = createStackNavigator(
//   {
//     Blank: { screen: Blank }
//   },
//   {
//     initialRouteName: "Blank"
//   }
// );
