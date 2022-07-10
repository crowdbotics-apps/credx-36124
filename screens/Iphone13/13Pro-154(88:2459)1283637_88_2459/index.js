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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df41b411-ef3a-4174-b054-068b48c1a38a"
        }}
        style={styles.ImageBackground_88_2460}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b637186-15e3-4237-8125-a105bf667712"
        }}
        style={styles.ImageBackground_88_2461}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b57d9aae-81e5-4d24-9f84-3f594e2ab4fb"
        }}
        style={styles.ImageBackground_88_2462}
      />
      <View style={styles.View_88_2463} />
      <View style={styles.View_88_2464} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b129ffcb-8c10-4d03-ac4e-109786244e66"
        }}
        style={styles.ImageBackground_88_2465}
      />
      <View style={styles.View_88_2466}>
        <Text style={styles.Text_88_2466}>Correct</Text>
      </View>
      <View style={styles.View_88_2467} />
      <View style={styles.View_88_2468}>
        <Text style={styles.Text_88_2468}>
          Investing is always risky, and it’s always important to recognize that
          risk
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9705b56f-e2eb-41a9-a254-1f34c73a43f8"
        }}
        style={styles.ImageBackground_88_2469}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34939901-17ff-42ec-b231-366bd9d31611"
        }}
        style={styles.ImageBackground_88_2470}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_88_2471}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_251"))
        }
      />
      <View style={styles.View_88_2472}>
        <Text style={styles.Text_88_2472}>Finish</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_88_2460: {
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
  ImageBackground_88_2461: {
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
  ImageBackground_88_2462: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("21%")
  },
  View_88_2463: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("23%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_88_2464: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("23%"),
    backgroundColor: "rgba(17, 155, 255, 1)"
  },
  ImageBackground_88_2465: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%")
  },
  View_88_2466: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_88_2466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_88_2467: {
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
  View_88_2468: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_88_2468: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_2469: {
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
  ImageBackground_88_2470: {
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
  TouchableOpacity_88_2471: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("97%"),
    backgroundColor: "rgba(129, 202, 255, 1)"
  },
  View_88_2472: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_88_2472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
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
