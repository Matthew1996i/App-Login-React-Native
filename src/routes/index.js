import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../pages/SingIn";
import Welcome from "../pages/Welcome";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
