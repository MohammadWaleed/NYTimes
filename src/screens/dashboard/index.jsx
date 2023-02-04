import * as React from "react";
import { Image, RefreshControl, SectionList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMostPopular } from "../../hooks/useMostPopularPosts";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import moment from "moment";
import _ from "lodash";
import { HorizontalLine } from "../../components/HorizontalLine";
import { style } from "./style";

export const DashboardScreen = () => {


  const [section, setSection] = useState("viewed");
  const [timePeriod, setTimePeriod] = useState(30);
  const [searchText, setSearchText] = useState(null);
  const [posts, setPosts] = useState([]);

  const { t } = useTranslation();
  const { data, loading, fetchData } = useMostPopular(section, timePeriod);


  const mapData = (postsData) => {
    return _.reduce(
      _.groupBy(postsData?.results, p => {
        return moment(p.updated).format("Y-M-D");
      }),
      (acc, p, k) => {
        let secIndex = acc.findIndex(s => s.title == k);
        if (secIndex > -1) {
          acc[secIndex].data.push(...p);
        } else {
          acc.push({ title: k, data: [...p] });
        }
        return acc;
      }, [])
      .sort((a, b) => b.title.localeCompare(a.title, undefined, { numeric: true, sensitivity: "base" }));
  };

  const listKeyExtractor = (item) => item.title;

  const listRenderItem = ({ item }) => (
    <View style={style.itemContainer}>
      <Image style={style.postImage}
             source={item.media[0] ? { uri: item.media[0]["media-metadata"][1]?.url } : null} />
      <View style={style.postInfo}>
        <Text>{t("title")}: {item.title}</Text>
        <Text>{t("publishDate")}: {moment(item.updated).format("Y/M/D")}</Text>
      </View>
    </View>
  );

  const  listRenderSection = ({ section }) => {
    return (
      <View style={style.sectionHeaderContainer}>
        <Text style={style.sectionText}>{moment(section.title).fromNow()}</Text>
      </View>
    );
  };


  useEffect(() => {
    setPosts(mapData(data));
  }, [data]);

  useEffect(() => {
    const searchData = { ...data };
    searchData.results = _.filter(searchData?.results, p => p.title?.toLowerCase().includes(searchText?.toLowerCase()));
    setPosts(mapData(searchData));
  }, [searchText]);

  return (
    <View style={{ flex: 1 }}>
      <View style={style.tabContainer}>
        <TextInput placeholder={t("search")} onChangeText={setSearchText} />
      </View>
      <View style={style.tabContainer}>
        <TouchableOpacity onPress={() => setTimePeriod(1)} style={style.tab(timePeriod == 1)}>
          <Text>{t("oneDay")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTimePeriod(7)} style={style.tab(timePeriod == 7)}>
          <Text>{t("sevenDays")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTimePeriod(30)} style={style.tab(timePeriod == 30)}>
          <Text>{t("thirtyDays")}</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        contentContainerStyle={style.listContainer}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        sections={posts}
        keyExtractor={listKeyExtractor}
        renderItem={listRenderItem}
        renderSectionHeader={listRenderSection}
        SectionSeparatorComponent={HorizontalLine}
      />

    </View>
  );
};
