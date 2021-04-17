import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BoxCard from "../../components/BoxCard";

export default function InitialPage() {
  return (
      <ScrollView style={styles.scroll}>
          <View style={styles.container}>
              <BoxCard />
              <BoxCard />
              <BoxCard />
              <BoxCard />
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: "15%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
