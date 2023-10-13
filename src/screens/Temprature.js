import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import { View } from 'react-native'
import { theme } from '../core/theme'
import TempratureBox from '../components/TempratureBox'
import { db } from '../../firebaseConfig';
import { onValue, ref } from "firebase/database";
import { schedulePushNotification } from '../notification'
import { v4 as uuidv4 } from 'uuid';
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function Temprature({ navigation }) {
  const [values, setValues] = useState({
    "et": "", "it": "", "name": "", "range": ""
  })
  useEffect(() => {
    const query = ref(db, "001");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setValues({ ...values, ...data });
        console.log('change');
        triggerNotifications();
      }
    });
  }, []);
  const triggerNotifications = async () => {
    const id = await schedulePushNotification('Test', 'Testing here');
    console.log(id);
  }
  return (
    <Background>
      <Header>Tempratures</Header>
      <Paragraph>
        You can check internal and external tempratures of container
      </Paragraph>
      <TempratureBox Heading="Card Number" subText={values.name} />
      <TempratureBox Heading="Range" subText={values.range} />
      <TempratureBox
        Heading="Internal Temprature"
        subText={values.it}
      />
      <TempratureBox
        Heading="External Temprature"
        subText={values.et}
      />
    </Background>
  )
}
