import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import { db, auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Source - https://stackoverflow.com/a/68298401
// Posted by user11150317, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-09, License - CC BY-SA 4.0


export default function InfoScreen({ navigation }) {
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

 const handleSubmit = async () => {
    if (!dob || !address) {
      alert("Please fill in both fields");
      return;
    }

 try {
      await addDoc(collection(db, "userInfo"), { dob, address, userEmail: auth.currentUser?.email || "unknown" , timestamp: new Date() });
      //Alert.alert("Success", "Data saved!");
      alert("Data saved successfully"); 
      setDob("");
      setAddress("");
      // setCurrentScreen("bmi"); //uncheck this line for BMI
    } catch (error) {
      console.error(error);
      //Alert.alert("Error", "Could not save data");
      alert("Error saving data");
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="Date of Birth"
      />

      <Text style={styles.label}>Enter your Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});