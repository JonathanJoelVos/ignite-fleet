import { View } from 'react-native'
import CarStatus from '../components/CarStatus'
import HomeHeader from '../components/HomeHeader'

interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <View className="bg-zinc-900 flex-1">
      <HomeHeader />
      <CarStatus />
    </View>
  )
}
