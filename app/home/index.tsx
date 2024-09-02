import Button from "@/components/button";
import FullPageLoader from "@/components/full-page-loader";
import { useTheme } from "@/context/ThemeProvider";
import useGetImages from "@/hooks/useGetImages";
import { hS, mS, vS, WIDTH } from "@/lib/responsive";
import { AllImage } from "@/types/image.type";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    isRefetching,
    handleNext,
    handleBack,
    handleSearch,
  } = useGetImages();
  const theme = useTheme();
  const router = useRouter();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primaryBackground,
    },
    title: {
      fontSize: theme.typography.title.fontSize,
      fontFamily: theme.typography.title.fontFamily,
      fontWeight: theme.typography.title.fontWeight,
      lineHeight: theme.typography.title.lineHeight,
    },
    bio: {
      fontSize: theme.typography.normal.fontSize,
      fontFamily: theme.typography.normal.fontFamily,
      fontWeight: theme.typography.normal.fontWeight,
      lineHeight: theme.typography.normal.lineHeight,
    },
    buttons: {
      backgroundColor: theme.colors.secondary,
    },
    buttonLabelStyle: {
      color: theme.colors.primary,
    },
  });
  if (isError) return <Text>{error?.message}</Text>;

  const ImageViewer = ({ item }: { item: AllImage }) => {
    if (!item.urls?.small) return null;
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "/[imageId]",
            params: { imageId: item.id },
          });
        }}
        style={{ maxWidth: WIDTH * 0.9, gap: mS(10) }}
      >
        <Image
          source={{ uri: item.urls.small }}
          style={{
            width: WIDTH * 0.9,
            height: vS(200),
            borderRadius: mS(10),
          }}
        />
        <View style={{ gap: mS(5) }}>
          <Text style={styles.title}>{item.user?.name}</Text>
          <Text numberOfLines={2} style={styles.bio}>
            {item.alt_description ?? "Bio not available"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Image Gallery",
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search...",
            onChangeText: (e) => handleSearch(e.nativeEvent.text),
          },
        }}
      />
      <SafeAreaView style={styles.container}>
        {isLoading || isFetching || isRefetching ? (
          <FullPageLoader />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              alignItems: "center",
              gap: mS(30),
              paddingTop: mS(10),
            }}
            renderItem={({ item }) => <ImageViewer item={item} />}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    gap: hS(40),
                    paddingBottom: vS(20),
                  }}
                >
                  <Button
                    label="Back"
                    style={styles.buttons}
                    labelStyles={styles.buttonLabelStyle}
                    onPress={handleBack}
                  />
                  <Button
                    label="Next"
                    style={styles.buttons}
                    labelStyles={styles.buttonLabelStyle}
                    onPress={handleNext}
                  />
                </View>
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
