import React from 'react'
import { countryConfig } from '../../config';
import {
    SafeAreaView,
    StyleSheet,
    Text,
  } from 'react-native';

export default function Dashboard() {
    const {label = "Hi All", customStyle = []} :any =countryConfig('DASHBOARD.getCountrySpecificItems',{})
    return (
      <SafeAreaView style={[styles.sectionContainer, ...customStyle]} >
       <Text style={styles.textStyle}>{label}</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      height: "100%",
      display: 'flex',
      width:"100%",
      justifyContent:"center",
      alignItems:'center'
    },
    textStyle:{
      fontSize:24,
      fontWeight:"500",
      color:"red"
    }
  });