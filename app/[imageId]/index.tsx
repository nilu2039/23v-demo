import FullPageLoader from "@/components/full-page-loader";
import { useTheme } from "@/context/ThemeProvider";
import useFetchImageDetails from "@/hooks/useFetchImageDetails";
import { formatDate } from "@/lib/date";
import { HEIGHT, hS, mS, vS, WIDTH } from "@/lib/responsive";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeInLeft,
  LightSpeedInLeft,
} from "react-native-reanimated";

const ImageMetadata = ({
  meta,
  iconName,
  noIcon = false,
}:
  | {
      meta: string | number | undefined | null;
      iconName?: keyof typeof AntDesign.glyphMap;
      noIcon?: true;
    }
  | {
      meta: string | number | undefined | null;
      iconName: keyof typeof AntDesign.glyphMap;
      noIcon?: false;
    }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    desc: {
      fontSize: theme.typography.title.fontSize,
      fontFamily: theme.typography.title.fontFamily,
      fontWeight: theme.typography.title.fontWeight,
      lineHeight: theme.typography.title.lineHeight,
      color: theme.colors.muted,
    },
  });

  return meta ? (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: mS(10),
      }}
    >
      {!noIcon && (
        <AntDesign name={iconName} size={mS(24)} color={styles.desc.color} />
      )}
      <Text style={styles.desc}>{meta}</Text>
    </View>
  ) : null;
};

const ImageDetails = () => {
  const imageId = useLocalSearchParams().imageId;
  if (!imageId) return null;
  const { data, error, isError, isLoading, isFetching, isRefetching } =
    useFetchImageDetails(imageId as string);
  const theme = useTheme();
  if (isLoading || isFetching || isRefetching) return <FullPageLoader />;
  if (isError) return <Text>{error?.message}</Text>;
  const styles = StyleSheet.create({
    container: {
      gap: vS(10),
      padding: mS(10),
    },
    headline: {
      fontSize: theme.typography.headline.fontSize,
      fontFamily: theme.typography.headline.fontFamily,
      fontWeight: theme.typography.headline.fontWeight,
      lineHeight: theme.typography.headline.lineHeight,
      color: theme.colors.secondary,
    },
    normal: {
      fontSize: theme.typography.normal.fontSize,
      fontFamily: theme.typography.normal.fontFamily,
      fontWeight: theme.typography.normal.fontWeight,
      lineHeight: theme.typography.normal.lineHeight,
      color: theme.colors.secondary,
    },
    metaDataContainer: {
      width: WIDTH * 0.9,
      alignSelf: "center",
      gap: hS(20),
    },
  });

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: data?.user?.name ?? "",
          headerBackTitle: "Back",
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <Animated.Image
            entering={FadeInLeft.duration(500)}
            source={{ uri: data?.urls?.small }}
            style={{
              width: WIDTH * 0.9,
              height: HEIGHT * 0.35,
              borderRadius: mS(10),
              alignSelf: "center",
            }}
          />
          <View style={styles.metaDataContainer}>
            <Animated.Text
              entering={LightSpeedInLeft.duration(500).delay(200)}
              style={styles.headline}
            >
              {data?.user?.name}
            </Animated.Text>
            <Animated.View
              entering={FadeInLeft.duration(500).delay(300)}
              style={{ gap: hS(10) }}
            >
              <ImageMetadata
                iconName="calendar"
                meta={`Published on ${formatDate(data?.created_at) ?? "--"}`}
              />
              <ImageMetadata
                iconName="camera"
                meta={`${data?.exif?.make ?? "--"}, ${
                  data?.exif?.model ?? "--"
                }`}
              />
              <ImageMetadata iconName="download" meta={`${data?.downloads}`} />
              <ImageMetadata iconName="eye" meta={`${data?.views}`} />
              <ImageMetadata meta={data?.likes} iconName={"like2"} />
              <ImageMetadata meta={data?.likes} iconName={"like2"} />
            </Animated.View>
            <Animated.Text
              entering={FadeInLeft.duration(500).delay(500)}
              style={styles.normal}
            >
              {data?.alt_description}
            </Animated.Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageDetails;
