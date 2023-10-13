import React from 'react'
import { theme } from '../core/theme'
import Header from './Header'
import Paragraph from './Paragraph'
import { View } from 'react-native'

const TempratureBox = ({ subText, Heading }) => {
  return (
    <View
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
      <Header
        style={{
          fontSize: 21,
          color: theme.colors.error, 
          fontWeight: 'bold',
          paddingVertical: 12,
        }}
      >
        {Heading}
      </Header>
      <Paragraph
        style={{
          fontSize: 15,
          color: theme.colors.primary,
          fontWeight: 'bold',
          paddingVertical: 12,
        }}
      >
        {subText}
      </Paragraph>
    </View>
  )
}

export default TempratureBox
