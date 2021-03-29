// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import LoginSignup from "./screens";
import PasswordRecover from "./screens/PasswordRecover";

const Stack = createStackNavigator()

export default function LoginAndSignup1218520Navigator() {
  return (
    <Stack.Navigator initialRouteName={"LoginSignup"} headerMode={false}>
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="PasswordRecover" component={PasswordRecover} />
    </Stack.Navigator>
  );
}
