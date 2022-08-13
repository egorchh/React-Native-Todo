import React, { useState } from "react";
// import { AppLoading } from "expo";
import * as Font from "expo-font";

import { MainLayout } from "./src/MainLayout";
import { ScreenState } from "./src/context/screen/ScreenState";
import { TodoState } from "./src/context/todo/TodoState";

// async function loadApplication() {
//   await Font.loadAsync({
//     RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
//     RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// }

export default function App() {
  const [isReady, setIsReady] = useState(true);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onError={(err) => console.log(err)}
  //       onFinish={() => setIsReady(true)}
  //     />
  //   );
  // }

  // let [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
