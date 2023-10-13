import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

const HomeButtons = ({ subText, heading, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        borderColor: theme.colors.secondary,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: theme.colors.surface,
        marginVertical: 10,
        elevation: 10,
        // padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 20,
            paddingVertical: 10,
            flex: 1,
          }}
        >
          <Text style={[style.font]}>{heading}</Text>
          <Text style={[style.subfont]}>{subText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  font: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  subfont: {
    color: theme.colors.error,
    width: '90%',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 12,
  },
})

export default HomeButtons
