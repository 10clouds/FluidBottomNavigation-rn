import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TabBar from "fluidbottomnavigation-rn";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
        <TabBar
          values={[
            { title: "News", icon: require("./assets/news.png") },
            { title: "Requests", icon: require("./assets/requests.png") },
            { title: "Events", icon: require("./assets/events.png") },
            { title: "Members", icon: require("./assets/members.png") },
            { title: "Account", icon: require("./assets/account.png") }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4C53DD"
  }
});
