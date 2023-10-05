import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import RenderTamu from "./renderTamu";
import uuid from "react-native-uuid";
import { TamuContext } from "./context";
import { useNavigation } from "expo-router";

const TambahDataTamu = () => {
  const { user, setUser } = useContext(TamuContext);
  const [datas, setDatas] = useState(user);
  const navigation = useNavigation();
  const hapusTamu = (id: string) => {
    const newData = datas.filter((item: any) => item.id !== id);
    setDatas(newData);
  };
  const tambahData = () => {
    const newData = {
      id: String(uuid.v4()),
      salutation: "Mr.",
      name: "",
    };
    setDatas([...datas, newData]);
  };
  const tambahDataKeUser = () => {
    const tempData = datas.filter((data) => data.name !== "");
    setUser(tempData);
    navigation.goBack();
  };
  return (
    <View className="flex flex-1 justify-between">
      <View>
        <Text className="px-5 py-4 text-base font-semibold text-[#335997]">
          Data Tamu
        </Text>
        <View>
          <FlatList
            data={datas}
            renderItem={({ item }) => (
              <RenderTamu
                dataUser={item}
                onDelete={() => hapusTamu(item.id)}
                setDatas={setDatas}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View className="px-5 mt-5 flex flex-row justify-center">
          <Pressable onPress={tambahData}>
            <Text className=" underline text-[#f87171] ">+ Tambah Data Tamu</Text>
          </Pressable>
        </View>
      </View>

      <View className="">
        <TouchableOpacity className="my-4" onPress={tambahDataKeUser}>
          <View className="mx-5  h-11 bg-[#f97316] rounded-xl flex justify-center items-center ">
            <Text className=" font-semibold text-white">Simpan</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TambahDataTamu;

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
