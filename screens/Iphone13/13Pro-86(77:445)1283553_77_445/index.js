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
      <View style={styles.View_77_446} />
      <View style={styles.View_77_447}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6402691-3eff-43ff-9685-bb323055d1cf"
          }}
          style={styles.ImageBackground_77_448}
        />
      </View>
      <View style={styles.View_77_451}>
        <Text style={styles.Text_77_451}>Protection</Text>
      </View>
      <View style={styles.View_77_452}>
        <Text style={styles.Text_77_452}>4.6</Text>
      </View>
      <View style={styles.View_77_453}>
        <Text style={styles.Text_77_453}>Teen Finance</Text>
      </View>
      <View style={styles.View_77_454}>
        <Text style={styles.Text_77_454}>
          Learn all about protecting yourself from risk, scams, and more!
        </Text>
      </View>
      <View style={styles.View_77_455}>
        <Text style={styles.Text_77_455}>Other</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/284772d3-0a2e-4372-a826-315c68fc248a"
        }}
        style={styles.ImageBackground_77_456}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a788afa-deb3-444d-9fe7-d6fc8ef22545"
        }}
        style={styles.ImageBackground_77_457}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0bcd54d-34e5-4cbb-ad40-be656ed3a59d"
        }}
        style={styles.ImageBackground_77_458}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/034f50db-5a6a-45cd-ba2c-9e235ff6108f"
        }}
        style={styles.ImageBackground_77_459}
      />
      <View style={styles.View_77_460}>
        <Text style={styles.Text_77_460}>Earning</Text>
      </View>
      <View style={styles.View_77_461}>
        <Text style={styles.Text_77_461}>Spending</Text>
      </View>
      <View style={styles.View_77_462}>
        <Text style={styles.Text_77_462}>Investing</Text>
      </View>
      <View style={styles.View_77_463} />
      <View style={styles.View_77_464}>
        <Text style={styles.Text_77_464}>Start Activity</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4eed37a7-2676-420c-820d-41ae29c3c1f5"
        }}
        style={styles.ImageBackground_77_465}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ef6019e-c42b-4c95-9794-30f1f3db6811"
        }}
        style={styles.ImageBackground_77_466}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9612853-8cdb-4f94-b729-382b0f8a3803"
        }}
        style={styles.ImageBackground_77_467}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/200844d9-be9d-4448-b569-d706c7a501a1"
        }}
        style={styles.TouchableOpacity_77_468}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1028"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_77_446: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 66,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_77_447: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_77_448: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_77_451: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_77_451: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_452: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_77_452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_453: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_77_453: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_454: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_77_454: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_455: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_77_455: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_77_456: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("83%")
  },
  ImageBackground_77_457: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("83%")
  },
  ImageBackground_77_458: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("83%")
  },
  ImageBackground_77_459: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%")
  },
  View_77_460: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_77_460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_461: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_77_461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_462: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_77_462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_463: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("101%"),
    backgroundColor: "rgba(97, 188, 255, 1)"
  },
  View_77_464: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_77_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_77_465: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("91%")
  },
  ImageBackground_77_466: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("91%")
  },
  ImageBackground_77_467: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("91%")
  },
  TouchableOpacity_77_468: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
