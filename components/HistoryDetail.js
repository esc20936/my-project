import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HistoryDetail({
  title,
  date,
  description = "lorem ipsum dolor sit amet, consectetur adipiscing",
}) {
  description =
    description.length > 27
      ? description.substring(0, 27) + "..."
      : description;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.fieldLabel}>Titulo:</Text>
        <Text style={styles.fieldValue}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.fieldLabel}>Fecha:</Text>
        <Text style={styles.fieldValue}>{date}</Text>
      </View>
      <View style={[styles.row, { position: "relative", marginTop: "auto" }]}>
        <Text style={styles.fieldLabel}>Descripción:</Text>
        <Text style={styles.fieldValue}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#d7d6d6",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    height: "auto",
    marginTop: 5,
    overflow: "hidden",
  },
  fieldLabel: {
    color: "#616161",
  },
  fieldValue: {
    marginLeft: 10,
  },
});
