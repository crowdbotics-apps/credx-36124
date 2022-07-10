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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa97a32d-8eb4-41a7-a114-3e22a63d27e4"
        }}
        style={styles.ImageBackground_81_1128}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c45e70b-99b6-4a87-8b7d-5abe006af90d"
        }}
        style={styles.ImageBackground_81_1129}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbced3f4-f9f5-4e32-bcf5-50ba624a14d5"
        }}
        style={styles.ImageBackground_81_1131}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dcd6f05-804d-441e-a3a9-d98bcf53c9a7"
        }}
        style={styles.ImageBackground_81_1133}
      />
      <View style={styles.View_81_1134}>
        <Text style={styles.Text_81_1134}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/463f518a-f59f-4b36-ae81-69734a799be9"
        }}
        style={styles.ImageBackground_81_1135}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c589aa9e-31b4-4819-8419-6b81c50d10de"
        }}
        style={styles.ImageBackground_81_1136}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16312099-3f64-4beb-a668-cd9bbd2d03e6"
        }}
        style={styles.ImageBackground_81_1137}
      />
      <View style={styles.View_81_1138}>
        <Text style={styles.Text_81_1138}>Career/Education</Text>
      </View>
      <View style={styles.View_81_1141} />
      <View style={styles.View_81_1142} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2f0649f-e564-4c44-bd23-6f51bc963ae7"
        }}
        style={styles.ImageBackground_81_1143}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6276b12c-2445-4c08-b884-29e0fc728290"
        }}
        style={styles.ImageBackground_81_1144}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/156120da-f03d-4c07-ae24-5e9e7e809606"
        }}
        style={styles.ImageBackground_81_1145}
      />
      <View style={styles.View_81_1146}>
        <Text style={styles.Text_81_1146}>Education</Text>
      </View>
      <View style={styles.View_81_1147}>
        <Text style={styles.Text_81_1147}>College</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b690b30-b37d-4514-b03c-f085f7ab8b51"
        }}
        style={styles.ImageBackground_81_1150}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97571b3c-7652-4288-a133-d9040cd591e9"
        }}
        style={styles.ImageBackground_81_1152}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c19c97aa-7f3a-4f7f-b49b-842c18aabb78"
        }}
        style={styles.ImageBackground_81_1153}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38fffc4e-b590-4fd5-9c52-c64cd31a4314"
        }}
        style={styles.TouchableOpacity_81_1172}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_279"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcec018d-1a2b-4747-86a9-0bdbb1f376aa"
        }}
        style={styles.TouchableOpacity_81_1173}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("74_167"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0baa05d4-6d2a-4b31-9df2-e973535c7090"
        }}
        style={styles.ImageBackground_81_1175}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba17d550-bba8-4d26-a820-93ab0d8222db"
        }}
        style={styles.ImageBackground_81_1176}
      />
      <View style={styles.View_81_1177}>
        <Text style={styles.Text_81_1177}>Career</Text>
      </View>
      <View style={styles.View_81_1178}>
        <Text style={styles.Text_81_1178}>Jobs</Text>
      </View>
      <View style={styles.View_609_21}>
        <Text style={styles.Text_609_21}>College</Text>
      </View>
      <View style={styles.View_609_22}>
        <Text style={styles.Text_609_22}>Jobs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3daff42-d800-4ef9-a1ea-20c2a2dc4415"
        }}
        style={styles.ImageBackground_81_1179}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae9d5f1d-dfb4-4eb6-b7fd-a34e8e6dbc8d"
        }}
        style={styles.ImageBackground_81_1180}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd0eec9a-caac-4a73-994b-1874ca51fc0e"
        }}
        style={styles.ImageBackground_81_1181}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c6b3790-f56e-4423-a439-d75c33efc74a"
        }}
        style={styles.ImageBackground_81_1204}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1205}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_251"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1206}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1028"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfb702c3-e748-4f11-984c-80b68db235e7"
        }}
        style={styles.ImageBackground_81_1207}
      />
      <View style={styles.View_81_1208} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61e8e46a-c149-4f61-a582-b02279cfed92"
        }}
        style={styles.ImageBackground_81_1209}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1210}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1223"))
        }
      />
      <View style={styles.View_81_1211}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c601362-b925-4e9e-8439-0d9cc8cf4075"
          }}
          style={styles.ImageBackground_81_1212}
        />
      </View>
      <View style={styles.View_81_1218}>
        <Text style={styles.Text_81_1218}>Home</Text>
      </View>
      <View style={styles.View_88_1460}>
        <Text style={styles.Text_88_1460}>
          Note: To preview an activity, head to the homepage, and select the
          activites there
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49020ff3-d741-44fc-8f11-b90518984051"
        }}
        style={styles.ImageBackground_88_1461}
      />
      <View style={styles.View_148_29} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04d7634b-52bd-4f48-9260-bc2191f3f9e0"
        }}
        style={styles.ImageBackground_148_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da6c5518-300d-4c87-8a59-c4daf8e10904"
        }}
        style={styles.ImageBackground_148_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/155fb5b5-2edb-41ca-b89b-58c36117ba7e"
        }}
        style={styles.ImageBackground_148_32}
      />
      <View style={styles.View_148_33}>
        <Text style={styles.Text_148_33}>Career</Text>
      </View>
      <View style={styles.View_148_34}>
        <Text style={styles.Text_148_34}>Banking</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f59dae93-b9ce-4ee8-995e-46df706fedb8"
        }}
        style={styles.ImageBackground_148_35}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85fa48f9-c70f-48e7-9dad-6a8660ba6685"
        }}
        style={styles.TouchableOpacity_148_36}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_299"))
        }
      />
      <View style={styles.View_148_37} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef616b23-0601-401c-b69f-7b9a65b00420"
        }}
        style={styles.TouchableOpacity_148_38}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_469"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c77af30b-51a6-4b41-8907-8e8297f57e55"
        }}
        style={styles.ImageBackground_148_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fde1928-f9e2-4cf4-85bb-35aae81469f7"
        }}
        style={styles.ImageBackground_148_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96ec40c3-e34d-406d-a395-9e464d92d19b"
        }}
        style={styles.ImageBackground_148_41}
      />
      <View style={styles.View_148_42}>
        <Text style={styles.Text_148_42}>Investment</Text>
      </View>
      <View style={styles.View_148_43}>
        <Text style={styles.Text_148_43}>Strategy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f78c4986-f29f-4b24-8ee1-23cd490a6a4a"
        }}
        style={styles.ImageBackground_148_44}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_81_1128: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_81_1129: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_81_1131: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_81_1133: {
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
  View_81_1134: {
    width: wp("1%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    justifyContent: "flex-start"
  },
  Text_81_1134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1135: {
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
  ImageBackground_81_1136: {
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
  ImageBackground_81_1137: {
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
  View_81_1138: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_81_1138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1141: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("41%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  View_81_1142: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("41%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_81_1143: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("43%")
  },
  ImageBackground_81_1144: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("43%")
  },
  ImageBackground_81_1145: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("47%")
  },
  View_81_1146: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_81_1146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1147: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_81_1147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1150: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("43%")
  },
  ImageBackground_81_1152: {
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
  ImageBackground_81_1153: {
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
  TouchableOpacity_81_1172: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_81_1173: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_81_1175: {
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
  ImageBackground_81_1176: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("43%")
  },
  View_81_1177: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_81_1177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1178: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_81_1178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_609_21: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_609_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_609_22: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_609_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1179: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("46%")
  },
  ImageBackground_81_1180: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("81%")
  },
  ImageBackground_81_1181: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("82%")
  },
  ImageBackground_81_1204: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  TouchableOpacity_81_1205: {
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
  TouchableOpacity_81_1206: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(179, 187, 193, 1)",
    borderWidth: 2
  },
  ImageBackground_81_1207: {
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
  View_81_1208: {
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
    borderColor: "rgba(17, 155, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_81_1209: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  TouchableOpacity_81_1210: {
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
  View_81_1211: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_81_1212: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_1218: {
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
  Text_81_1218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_1460: {
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
  Text_88_1460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_1461: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_148_29: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_148_30: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("75%")
  },
  ImageBackground_148_31: {
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
  ImageBackground_148_32: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("79%")
  },
  View_148_33: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_148_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_34: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_148_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_35: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("75%")
  },
  TouchableOpacity_148_36: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_148_37: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("73%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  TouchableOpacity_148_38: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_148_39: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("75%")
  },
  ImageBackground_148_40: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("75%")
  },
  ImageBackground_148_41: {
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
  View_148_42: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_148_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_43: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_148_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_44: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("74%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
