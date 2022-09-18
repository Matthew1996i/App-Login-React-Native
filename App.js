import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#15202B" }}>
        <StatusBar backgroundColor="#15202B" barStyle="light-content" />
        <Route />
      </SafeAreaView>
    </NavigationContainer>
  );
}
