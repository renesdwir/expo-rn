import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const dataSalutation = [
  { label: "Tn.", value: "Tn." },
  { label: "Mr.", value: "Mr." },
  { label: "Ny.", value: "Ny." },
];
const RenderTamu = ({ dataUser, onDelete, setDatas }: any) => {
  return (
    <View className="px-5 flex flex-row justify-between items-center mb-3">
      <View className="w-20">
        <Dropdown
          style={styles.container}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataSalutation}
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          value={dataUser.salutation}
          onChange={(item) => {
            setDatas((prevState: any) => {
              const newData = [...prevState];

              const dataIndex = newData.findIndex(
                (itemData) => itemData.id === dataUser.id
              );
              if (dataIndex !== -1) {
                newData[dataIndex].salutation = item.value;
              }
              return newData;
            });
          }}
          renderRightIcon={() => (
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#335997" />
          )}
        />
      </View>
      <View className="flex-1 mx-4">
        <TextInput
          className="border h-10 rounded-md px-3 text-[16px]  border-zinc-300 text-[#335997]"
          value={dataUser.name}
          onChangeText={(text) => {
            setDatas((prevState: any) => {
              const newData = [...prevState];
              const dataIndex = newData.findIndex(
                (itemData) => itemData.id === dataUser.id
              );
              if (dataIndex !== -1) {
                newData[dataIndex].name = text;
              }
              return newData;
            });
          }}
        />
      </View>
      <Pressable className="" onPress={onDelete}>
        <Feather name="trash" size={24} color="#f87171" />
      </Pressable>
    </View>
  );
};

export default RenderTamu;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 40,
    padding: 5,
    borderColor: "#d4d4d8",
    borderRadius: 6,
    color: "#335997",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#335997",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#335997",
    fontWeight: "600",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
