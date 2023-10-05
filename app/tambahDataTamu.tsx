import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import RenderTamu from "./renderTamu";
import uuid from "react-native-uuid";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { getTamuState } from "./store/tamu/tamu.selector";
import { addTamu } from "./store/tamu/tamu.action";
import { AppDispatch } from "./store";

const TambahDataTamu = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(getTamuState);
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
    dispatch(addTamu(datas));
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
