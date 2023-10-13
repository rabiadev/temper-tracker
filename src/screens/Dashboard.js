import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import HomeButtons from '../components/HomeButtons'

export default function Dashboard({ navigation }) {
  const handleTemprature = () => {
    navigation.navigate('Temprature')
  }
  const handleMap = () => {
    navigation.navigate('MapView')
  }
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your first steps for TempUS Starts here. The Dashboard is under
        development. Hang tight
      </Paragraph>
      <HomeButtons
        heading="Temprature"
        subText="Internal & External Temprature of Container"
        onPress={handleTemprature}
      />
      <HomeButtons
        heading="Map"
        subText="Check Your Container Exact Location"
        onPress={handleMap}
      />
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
