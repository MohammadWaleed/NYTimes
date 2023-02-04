import * as React from "react";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { style } from "./style";

export const PostDetailsScreen = ({ route }) => {


  const [item] = useState(route.params.item);

  const { t } = useTranslation();

  const tags = item.adx_keywords.split(";");

  tags.pop();

  return (
    <View style={{ flex: 1 }}>

      <View style={style.itemContainer}>
        <View style={style.postInfo}>
          <Text style={{ textAlign: "center" }}>{item.title}</Text>
        </View>
        <Image style={style.postImage}
               source={item.media[0] ? { uri: item.media[0]["media-metadata"][2]?.url } : null} />
        <View style={style.postInfo}>
          <Text>{t("publishDate")}: {moment(item.updated).format("Y/M/D")}</Text>
          <Text>{t("by")}: {item.byline}</Text>
        </View>
        <View style={style.postInfo}>
          <Text>{t("abstract")}: {item.abstract}</Text>
        </View>

        <View style={style.postInfo}>
          <Text>{t("section")}: {item.section}</Text>
          <Text>{t("tags")}: {tags.join(" ")}</Text>
        </View>
      </View>

    </View>
  );
};
