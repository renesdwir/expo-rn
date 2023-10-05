import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { Link } from "expo-router";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { TamuContext } from "./context";
import { getData } from "./api/api";
import { useQuery } from "@tanstack/react-query";

const PaymentDetails = () => {
  const [selectedRadio, setSelectedRadio] = useState("sendiri");
  const { user } = useContext(TamuContext);
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
  return (
    <ScrollView>
      <View className="">
        <View className=" h-14 flex flex-row items-center justify-center  border-b border-zinc-300">
          <View className="flex flex-row items-center gap-2">
            <View className="w-6 h-6 bg-[#335997] rounded-full flex justify-center items-center">
              <Text className="text-white ">1</Text>
            </View>
            <Text className="font-semibold text-base text-zinc-700">Detail Pesanan</Text>
          </View>
          <View className="h-[3px] mx-5 w-4 bg-[#335997] rounded-full"></View>
          <View className="flex flex-row items-center gap-2 opacity-40">
            <View className="w-6 h-6 bg-[#335997] rounded-full flex justify-center items-center ">
              <Text className="text-white ">2</Text>
            </View>
            <Text className="font-semibold text-base text-zinc-900">Pembayaran</Text>
          </View>
        </View>
        <View className="border-b border-zinc-300">
          <Text className="px-5 py-4 font-semibold">Detail Pesanan</Text>
          <View className="px-5 ">
            <View className=" p-3 rounded-xl flex flex-row border border-zinc-300  ">
              <Image
                className="w-16 h-16 rounded-xl"
                source={{
                  uri: data?.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail
                    .images[0].url,
                }}
              />
              <View className="ml-3 mt-1">
                <Text className="font-bold text-[#335997] text-xs">
                  {
                    data?.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params
                      .hotel_name
                  }
                </Text>
                <Text className=" text-zinc-400 text-xs">
                  {data?.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.room_name}
                </Text>
                <Text className=" text-zinc-400 text-xs">
                  1 Kamar • Quadruple • 2 Tamu • 10 Malam
                </Text>
              </View>
            </View>
          </View>
          <View className="flex py-3 ">
            <View className="px-5 flex flex-row justify-between mb-2">
              <Text className="font-semibold text-zinc-700">Check-In</Text>
              <Text className="text-zinc-400  text-xs">30 November 2020</Text>
            </View>
            <View className="px-5 flex flex-row justify-between mb-2">
              <Text className="font-semibold text-zinc-700">Check-Out</Text>
              <Text className="text-zinc-400  text-xs">14 Desember 2020</Text>
            </View>
            <View className="px-5 flex flex-row items-center justify-end mb-2">
              <View className="relative w-7 flex justify-center items-center mr-2">
                <Entypo name="cycle" size={22} color="#f87171" />
                <Text className="absolute text-[8px] top-[4.9px] text-red-400 font-bold">
                  Rp
                </Text>
              </View>
              <Text className="text-red-400">Dapat direfund jika dibatalkan</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="px-5 py-4 font-semibold text-zinc-700">Detail Pemesanan</Text>
          <View className="px-5 ">
            <View className=" p-3 rounded-xl flex flex-row border border-zinc-300 items-center justify-between">
              <View className="mt-1">
                <Text className="font-bold  text-xs text-zinc-700">
                  Tn. Andreas Andreas
                </Text>
                <Text className=" text-zinc-400 text-xs">andreasandreas@gmail.com</Text>
                <Text className=" text-zinc-400 text-xs">+628 22 2222 2222</Text>
              </View>
              <Text className="font-semibold text-xs border-b border-[#335997] text-[#335997]">
                Ubah
              </Text>
            </View>
          </View>
          <View className="px-5 mt-3">
            <TouchableOpacity
              className="mb-2"
              onPress={() => setSelectedRadio("sendiri")}
            >
              <View className="flex flex-row items-center">
                <View className="h-5 w-5 rounded-full border border-[#335997] mr-2">
                  {selectedRadio === "sendiri" ? (
                    <View className="bg-[#335997] h-[13.5px] w-[13.5px] m-auto rounded-full"></View>
                  ) : null}
                </View>
                <Text className="text-xs font-semibold text-zinc-700">
                  Saya memesan untuk sendiri
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="mb-4"
              onPress={() => setSelectedRadio("oranglain")}
            >
              <View className="flex flex-row items-center">
                <View className="h-5 w-5 rounded-full border border-[#335997] mr-2">
                  {selectedRadio === "oranglain" ? (
                    <View className="bg-[#335997] h-[13.5px] w-[13.5px] m-auto rounded-full"></View>
                  ) : null}
                </View>
                <Text className="text-xs font-semibold text-zinc-700">
                  Saya memesan untuk orang lain
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-b pb-5 border-zinc-300">
          <Text className="px-5  font-semibold text-zinc-700">Data Tamu</Text>
          <View className="px-5 mt-3">
            <FlatList
              scrollEnabled={false}
              data={user}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="p-3 py-2 rounded-xl flex flex-row border border-zinc-300 items-center mb-[10px]">
                  <FontAwesome5 name="user" size={24} color="#335997" />
                  <Text className="font-semibold ml-4 text-zinc-700">{item.name}</Text>
                </View>
              )}
            />
          </View>
          <Pressable className="px-5 flex flex-row justify-end">
            <Link href="/tambahDataTamu" className="border-b border-[#335997]">
              <Text className="text-xs  text-[#335997] font-semibold">
                Ubah Data Tamu
              </Text>
            </Link>
          </Pressable>
        </View>
        <Link href={"/pembayaran"} asChild>
          <TouchableOpacity className="my-4">
            <View className="mx-5  h-11 bg-[#335997] rounded-xl flex justify-center items-center ">
              <Text className=" font-semibold text-white">Konfirmasi</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
