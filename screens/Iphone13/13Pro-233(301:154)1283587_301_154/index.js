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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b729a89f-3c37-451e-a235-c6677d9921c0"
        }}
        style={styles.ImageBackground_301_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f2d2ac6-6ffb-443e-aae6-efafdd33c93c"
        }}
        style={styles.ImageBackground_301_156}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/544f3709-931b-48da-ba3a-68887aeeb1ce"
        }}
        style={styles.ImageBackground_301_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5040f20-8108-457e-b03e-31ef982dbe10"
        }}
        style={styles.ImageBackground_301_158}
      />
      <View style={styles.View_301_159}>
        <Text style={styles.Text_301_159}>
          What are a few fundamental investing values?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_301_160}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_91"))
        }
      />
      <View style={styles.View_301_161}>
        <Text style={styles.Text_301_161}>Goals, Balance and discipline</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_301_162}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_133"))
        }
      />
      <View style={styles.View_301_163}>
        <Text style={styles.Text_301_163}>Buying High &amp; Selling Low </Text>
      </View>
      <View style={styles.View_301_164} />
      <TouchableOpacity
        style={styles.TouchableOpacity_301_165}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("301_175"))
        }
      />
      <View style={styles.View_301_166}>
        <Text style={styles.Text_301_166}>Having unclear objectives</Text>
      </View>
      <View style={styles.View_301_167}>
        <Text style={styles.Text_301_167}>It’s never about the money</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d66c8922-895d-4ab6-850e-526319f7ba1f"
        }}
        style={styles.ImageBackground_301_170}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c334318-8aec-4a32-aeb2-f3955edb5c71"
        }}
        style={styles.ImageBackground_301_171}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/345859d0-8907-43cf-9348-ccaab2bfd3af"
        }}
        style={styles.ImageBackground_301_172}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be82bbe3-9f18-4d08-ba7f-a1735f9ae399"
        }}
        style={styles.ImageBackground_301_173}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_301_228}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("302_289"))
        }
      />
      <View style={styles.View_301_229}>
        <Text style={styles.Text_301_229}>Check</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_301_155: {
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
  ImageBackground_301_156: {
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
  ImageBackground_301_157: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("108%")
  },
  ImageBackground_301_158: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("104%")
  },
  View_301_159: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_301_159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_301_160: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_161: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_301_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_301_162: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_163: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_301_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_164: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(17, 155, 255, 1)",
    borderWidth: 4
  },
  TouchableOpacity_301_165: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("67%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_301_166: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_301_166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_167: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_301_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_301_170: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("99%")
  },
  ImageBackground_301_171: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("99%")
  },
  ImageBackground_301_172: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("99%")
  },
  ImageBackground_301_173: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("99%")
  },
  TouchableOpacity_301_228: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("84%"),
    backgroundColor: "rgba(97, 188, 255, 1)"
  },
  View_301_229: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("85%"),
    justifyContent: "center"
  },
  Text_301_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
