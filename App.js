import React from "react";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'

import {
  useFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <RestaurantsScreen />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
