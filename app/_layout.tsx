import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { TamuContextProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamuContextProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Homepage" }} />
          <Stack.Screen
            name="paymentDetails"
            options={{
              title: "Payment Details",
              headerStyle: {
                backgroundColor: "#335997",
              },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="pembayaran"
            options={{
              title: "Pembayaran",
              headerStyle: {
                backgroundColor: "#335997",
              },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="tambahDataTamu"
            options={{
              title: "Tambah Data Tamu",
              headerStyle: {
                backgroundColor: "#335997",
              },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          />
        </Stack>
      </QueryClientProvider>
    </TamuContextProvider>
  );
}
