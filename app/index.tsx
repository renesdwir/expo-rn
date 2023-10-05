import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Text>Homepage</Text>
      <Link href={"/paymentDetails"} asChild>
        <Button title="Go To Payment Details" />
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
