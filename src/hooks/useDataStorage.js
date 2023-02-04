import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDataStorage = () => {

  const getData = async (key) => {
    try {
      const values = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(values);
      if (parsed !== null) {
        return parsed;
      }
    } catch (e) {
      // Fail Silently
    }
  };

  const storeData = async (key, values) => {
    const jsonValue = JSON.stringify(values);
    await AsyncStorage.setItem(key, jsonValue);
  };

  const removeData = async (key) => {
    await AsyncStorage.removeItem(key);
  };

  const getUserInfo = async () => {
    return await getData("userInfo");
  };

  const saveUserInfo = async (values) => {
    return await storeData("userInfo", values);
  };

  const clearUserInfo = async () => {
    return await removeData("userInfo");
  };

  const getLanguage = async () => {
    return await getData("language");
  };

  const saveLanguage = async (value) => {
    return await storeData("language", value);
  };


  return {
    getUserInfo,
    saveUserInfo,
    clearUserInfo,
    getLanguage,
    saveLanguage,
  };

};
