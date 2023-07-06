/* eslint-disable camelcase */
import SignIn from './src/screens/SignIn'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import Loading from './src/components/Loading'
import { StatusBar } from 'react-native'
import { ANDROID_CLIENT_ID, RELM_ID_APPLICATION } from '@env'

import { AppProvider, UserProvider } from '@realm/react'
import { Routes } from './src/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RealmProvider } from './src/libs/realm'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  console.log(ANDROID_CLIENT_ID)

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={RELM_ID_APPLICATION}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <UserProvider fallback={SignIn}>
          <RealmProvider>
            <Routes />
          </RealmProvider>
        </UserProvider>
      </SafeAreaProvider>
    </AppProvider>
  )
}
