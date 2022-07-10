import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f9c557c-7b21-44c6-941c-f9b3c323a5bd"
        }}
        style={styles.ImageBackground_81_1029}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf4293d-aafa-4b3a-b2ee-337b09d95b25"
        }}
        style={styles.ImageBackground_81_1030}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64f3224f-b1bb-4231-ac6a-68ffd84261ae"
        }}
        style={styles.ImageBackground_81_1031}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bf74930-6dd2-4619-8882-2be00aea27fe"
        }}
        style={styles.ImageBackground_81_1033}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df3b4854-fadf-4d17-9be7-30a11379b339"
        }}
        style={styles.ImageBackground_81_1035}
      />
      <View style={styles.View_81_1036}>
        <Text style={styles.Text_81_1036}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03897aa7-0920-406e-bec9-37d8ca6f00c9"
        }}
        style={styles.ImageBackground_81_1037}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a6a9282-f7ae-4cd7-9100-7845e0cf5c77"
        }}
        style={styles.ImageBackground_81_1038}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6413b4f3-2e33-4d86-a46d-3d1cb0f232eb"
        }}
        style={styles.ImageBackground_81_1039}
      />
      <View style={styles.View_81_1040}>
        <Text style={styles.Text_81_1040}>Teen Finance</Text>
      </View>
      <View style={styles.View_81_1041}>
        <Text style={styles.Text_81_1041}>
          Note: To preview an activity, head to the homepage, and select the
          activites there
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1042}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_251"))
        }
      />
      <View style={styles.View_81_1043} />
      <View style={styles.View_81_1087} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed819ea9-3516-42df-b5d3-d67dac94a1eb"
        }}
        style={styles.ImageBackground_81_1044}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40cad6f3-d233-4481-9087-cc49bf7b4ae0"
        }}
        style={styles.ImageBackground_81_1045}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04e72193-aa94-4cb7-882d-4c9da04f5198"
        }}
        style={styles.ImageBackground_81_1050}
      />
      <View style={styles.View_81_1052}>
        <Text style={styles.Text_81_1052}>Teen Finance</Text>
      </View>
      <View style={styles.View_81_1053}>
        <Text style={styles.Text_81_1053}>Earning</Text>
      </View>
      <View style={styles.View_81_1058} />
      <View style={styles.View_81_1067} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bef7c233-f69a-4b19-8e02-836e3f007133"
        }}
        style={styles.ImageBackground_81_1069}
      />
      <View style={styles.View_81_1071} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6771a12a-beaa-45a6-a66a-8c8f1ceef86f"
        }}
        style={styles.ImageBackground_81_1074}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f095db83-8314-49f7-b321-dfc5f8017724"
        }}
        style={styles.ImageBackground_81_1075}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1076}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1126"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ba49d64-3236-42f1-91bc-e70b326dff63"
        }}
        style={styles.ImageBackground_81_1077}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1078}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1223"))
        }
      />
      <View style={styles.View_81_1079}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ef4601-7901-4623-a8fb-597197853594"
          }}
          style={styles.ImageBackground_81_1080}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea70183b-6517-4824-ac23-898bb75733e3"
        }}
        style={styles.ImageBackground_81_1086}
      />
      <View style={styles.View_81_1088}>
        <Text style={styles.Text_81_1088}>Teen Finance</Text>
      </View>
      <View style={styles.View_81_1089}>
        <Text style={styles.Text_81_1089}>Protection</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a13b99e-7abf-4ac0-b986-fac8521a8938"
        }}
        style={styles.ImageBackground_81_1090}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba0a66ff-86d0-4c88-a6fe-1117b2db2064"
        }}
        style={styles.ImageBackground_81_1091}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ed8873a-d105-4dc8-9d30-5ce1d87a3485"
        }}
        style={styles.ImageBackground_81_1092}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63d0e83a-d30d-4092-a905-db13bc45bc0d"
        }}
        style={styles.ImageBackground_81_1093}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4e02c3c-8cc6-47e9-a966-14ae41323cb9"
        }}
        style={styles.TouchableOpacity_81_1094}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_445"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8c5f837-d922-4544-ae44-1f1b8eb2ca3a"
        }}
        style={styles.TouchableOpacity_81_1109}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_255"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f0c4bef-ec72-449f-a65b-de58ca3b437d"
        }}
        style={styles.TouchableOpacity_81_1110}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_34"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34855009-0981-4ee2-9417-2aec4bc0050c"
        }}
        style={styles.TouchableOpacity_81_1111}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_323"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96b8fdad-5c6e-42a4-9a8b-17c19ea502ba"
        }}
        style={styles.ImageBackground_81_1095}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01d3cbd0-0e8d-4e37-9b70-987c21155770"
        }}
        style={styles.ImageBackground_81_1096}
      />
      <View style={styles.View_81_1098}>
        <Text style={styles.Text_81_1098}>Teen Finance</Text>
      </View>
      <View style={styles.View_81_1099}>
        <Text style={styles.Text_81_1099}>Spending</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fd936ec-af96-46c5-a632-edecdfd08f85"
        }}
        style={styles.ImageBackground_81_1100}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2912ddde-f7eb-4590-afae-f12dc9694d36"
        }}
        style={styles.ImageBackground_81_1101}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ec12c81-fb9a-4908-9efd-a92914b48b08"
        }}
        style={styles.ImageBackground_81_1102}
      />
      <View style={styles.View_81_1103}>
        <Text style={styles.Text_81_1103}>Teen Finance</Text>
      </View>
      <View style={styles.View_81_1104}>
        <Text style={styles.Text_81_1104}>Investing</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4209a9b7-936c-49f7-a761-2669e7e60380"
        }}
        style={styles.ImageBackground_81_1106}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3a4feb1-3f3c-4f89-9576-a058d950d2cb"
        }}
        style={styles.ImageBackground_81_1108}
      />
      <View style={styles.View_81_1114}>
        <Text style={styles.Text_81_1114}>Home</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_81_1029: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_81_1030: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_81_1031: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_81_1033: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_81_1035: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("107%")
  },
  View_81_1036: {
    width: wp("1%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    justifyContent: "flex-start"
  },
  Text_81_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1037: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  ImageBackground_81_1038: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%")
  },
  ImageBackground_81_1039: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  View_81_1040: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_81_1040: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1041: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_81_1041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_81_1042: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(179, 187, 193, 1)",
    borderWidth: 2
  },
  View_81_1043: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("40%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  View_81_1087: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("40%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_81_1044: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("42%")
  },
  ImageBackground_81_1045: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("43%")
  },
  ImageBackground_81_1050: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("45%")
  },
  View_81_1052: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_81_1052: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1053: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_81_1053: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1058: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("74%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  View_81_1067: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("74%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_81_1069: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("42%")
  },
  View_81_1071: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("26%"),
    backgroundColor: "rgba(17, 155, 255, 1)",
    opacity: 0,
    borderColor: "rgba(17, 155, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_81_1074: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("5%")
  },
  ImageBackground_81_1075: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("105%"),
    resizeMode: "cover"
  },
  TouchableOpacity_81_1076: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(179, 187, 193, 1)",
    borderWidth: 2
  },
  ImageBackground_81_1077: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  TouchableOpacity_81_1078: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(179, 187, 193, 1)",
    borderWidth: 2
  },
  View_81_1079: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_81_1080: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_81_1086: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_81_1088: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_81_1088: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1089: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_81_1089: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1090: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("76%")
  },
  ImageBackground_81_1091: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("76%")
  },
  ImageBackground_81_1092: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("78%")
  },
  ImageBackground_81_1093: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("76%")
  },
  TouchableOpacity_81_1094: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_81_1109: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_81_1110: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_81_1111: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_81_1095: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("42%")
  },
  ImageBackground_81_1096: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("42%")
  },
  View_81_1098: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_81_1098: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1099: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_81_1099: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1100: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("44%")
  },
  ImageBackground_81_1101: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("76%")
  },
  ImageBackground_81_1102: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("76%")
  },
  View_81_1103: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_81_1103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1104: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_81_1104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1106: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("79%")
  },
  ImageBackground_81_1108: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("26%")
  },
  View_81_1114: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_81_1114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
