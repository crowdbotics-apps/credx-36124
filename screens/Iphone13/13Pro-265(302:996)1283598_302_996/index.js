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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f00a6f21-e04b-4a26-abf0-1037291899ad"
        }}
        style={styles.ImageBackground_302_997}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dafdb7b9-ace9-4495-8422-17801e949759"
        }}
        style={styles.ImageBackground_302_998}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04f91137-b7e8-433b-9f7f-891fff8eac2e"
        }}
        style={styles.ImageBackground_302_999}
      />
      <View style={styles.View_302_1001} />
      <View style={styles.View_302_1002}>
        <Text style={styles.Text_302_1002}>
          Yes, in most cases, you do pay taxes on invesments. Although, you
          mainly pay taxes when you sell your investments.{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2d61df0-93d5-49ff-8f14-b8048cd78bc8"
        }}
        style={styles.ImageBackground_302_1003}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b40b2c3-c4db-4bf6-a1d7-6b08caa31b46"
        }}
        style={styles.ImageBackground_302_1004}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca6766f9-d85e-4bef-9770-dc3c22d2878c"
        }}
        style={styles.ImageBackground_302_1005}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb60eb05-aea3-489a-8c47-917fe82ea799"
        }}
        style={styles.ImageBackground_302_1006}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1da96d2-5083-4ace-8745-8640503b8305"
        }}
        style={styles.ImageBackground_302_1007}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47f26af3-4ec3-49af-bee3-fbf16c7762b3"
        }}
        style={styles.ImageBackground_302_1008}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_302_1009}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_251"))
        }
      />
      <View style={styles.View_302_1010}>
        <Text style={styles.Text_302_1010}>Finish</Text>
      </View>
      <View style={styles.View_302_1017}>
        <Text style={styles.Text_302_1017}>Not Quite</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_302_997: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("-6%")
  },
  ImageBackground_302_998: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("-12%")
  },
  ImageBackground_302_999: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("18%")
  },
  View_302_1001: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("74%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_302_1002: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_302_1002: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_302_1003: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("108%")
  },
  ImageBackground_302_1004: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("104%")
  },
  ImageBackground_302_1005: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_302_1006: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_302_1007: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_302_1008: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  TouchableOpacity_302_1009: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("98%"),
    backgroundColor: "rgba(97, 188, 255, 1)"
  },
  View_302_1010: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_302_1010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_302_1017: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_302_1017: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
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
