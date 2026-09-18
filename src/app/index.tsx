import { Alert, Pressable, Image, StyleSheet, Text, View } from "react-native";
import comment from "../../assets/images/comment-icon.png";
import poster from "../../assets/images/gojo.jpg";
import heart from "../../assets/images/heart.png";
import icon from "../../assets/images/left-arrow-icon.png";
import save from "../../assets/images/save-icon.png";
import send from "../../assets/images/send-icon.png";

export default function Index() {
  const alertPress = () => {
    Alert.alert("Alert Button pressed");
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>OOTD_EVERYDAY</Text>
        <Text style={styles.post}>Posts</Text>
        <View style={styles.border}></View>
      </View>
      <Image source={icon} style={styles.icon} resizeMode="cover" />

      <View style={styles.before_img}>
        <View>
          <Image source={poster} style={styles.pfp} resizeMode="cover" />
        </View>
        <View>
          <Text style={styles.user}>ootd_everyday</Text>
          <Text style={styles.user2}>via franchise_fry39</Text>
        </View>
      </View>

      <View style={styles.main}>
        <Image source={poster} style={styles.poster} resizeMode="cover" />
      </View>
      <View style={styles.icons}>
        <View style={styles.leftIcons}>
          <Image source={heart} style={styles.heart} resizeMode="cover" />
          <Image source={comment} style={styles.comment} resizeMode="cover" />
          <Image source={send} style={styles.send} resizeMode="cover" />
        </View>
        <View>
          <Image source={save} style={styles.save} resizeMode="cover" />
        </View>
      </View>

      <Pressable
        onPress={alertPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Alert</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    color: "#868787",
  },

  post: {
    fontWeight: "bold",
    fontSize: 16,
  },

  border: {
    borderWidth: 1,
    borderColor: "#868787",
    borderStyle: "solid",
    marginTop: 5,
    width: "100%",
  },

  before_img: {
    flexDirection: "row",
  },

  pfp: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 3,
    marginLeft: 3,
  },

  user: {
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },

  user2: {
    marginHorizontal: 10,
    fontSize: 12,
  },

  poster: {
    width: 390,
    height: 400,
    alignItems: "center",
  },

  icon: {
    width: 75,
    height: 25,
    position: "absolute",
    top: 10,
  },

  main: {
    alignItems: "center",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftIcons: {
    flexDirection: "row",
    gap: 12,
  },

  heart: {
    width: 30,
    height: 30,
    alignItems: "flex-end",
  },

  comment: {
    width: 30,
    height: 30,
    alignItems: "flex-end",
  },

  send: {
    width: 30,
    height: 30,
    alignItems: "flex-end",
  },

  save: {
    width: 20,
    height: 20,
  },

  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  buttonPressed: {
    backgroundColor: "#0066cc"
  },
});
