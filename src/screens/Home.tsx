import { View } from 'react-native'
import HomeHeader from '../components/HomeHeader'

interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <View className="bg-zinc-900 flex-1">
      <HomeHeader />
    </View>
  )
}
