import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native'
import { db } from '../../firebaseConfig';
import { onValue, ref } from "firebase/database";

export default function MapViewLocation({ navigation }) {
  const mapRef = React.createRef()
  const [location, setLocation] = useState(null)

  
  useEffect(() => {
    if (mapRef?.current && location) {
      mapRef.current.fitToCoordinates(location, {
        edgePadding: { top: 100, right: 0, bottom: 120, left: 0 },
        animated: true,
      })
    }
    return () => { }
  }, [location]);

  useEffect(() => {
    const query = ref(db, "001");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setLocation([data]);
      }
    });
  }, []);

  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} ref={mapRef}>
        {location?.map((loc, index) => (
          <Marker
            key={index}
            coordinate={loc}
            title={`Container Location No ${index + 1}`}
            description={'Exact Location of Your Container'}
          />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
