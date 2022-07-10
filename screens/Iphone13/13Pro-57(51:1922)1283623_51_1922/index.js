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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa5c9c19-02c1-41c9-a027-a44ebe736f47"
        }}
        style={styles.ImageBackground_51_1923}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d84eadb-0d17-4d23-9750-a3be91c34532"
        }}
        style={styles.ImageBackground_51_1924}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ebdf4d3-4b27-4a93-be81-905fce1584ad"
        }}
        style={styles.ImageBackground_51_1927}
      />
      <View style={styles.View_51_1928} />
      <View style={styles.View_51_1929} />
      <View style={styles.View_51_1930}>
        <Text style={styles.Text_51_1930}>
          Investing as a high-schooler is super easy, and has no risk at all.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_51_1931}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("51_1939"))
        }
      />
      <View style={styles.View_51_1932}>
        <Text style={styles.Text_51_1932}>This is so True</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_51_1933}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("51_2016"))
        }
      />
      <View style={styles.View_51_1934}>
        <Text style={styles.Text_51_1934}>Definitely no</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_51_1935}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("51_2037"))
        }
      />
      <View style={styles.View_51_1937}>
        <Text style={styles.Text_51_1937}>I have no clue</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_88_2515}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("51_2058"))
        }
      />
      <View style={styles.View_88_2516}>
        <Text style={styles.Text_88_2516}>I think so </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0e2ef8a-47c3-49ca-b5f1-99aa6d5fc692"
        }}
        style={styles.ImageBackground_88_2526}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19dd29d5-4f75-4567-a4fa-b463ab798813"
        }}
        style={styles.ImageBackground_88_2527}
      />
      <View style={styles.View_88_2530}>
        <Text style={styles.Text_88_2530}>Back</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b8a79d7-f620-41ad-a84a-65cec8214930"
        }}
        style={styles.ImageBackground_88_2531}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_51_1923: {
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
  ImageBackground_51_1924: {
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
  ImageBackground_51_1927: {
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
  View_51_1928: {
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
  View_51_1929: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("23%"),
    backgroundColor: "rgba(17, 155, 255, 1)"
  },
  View_51_1930: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_51_1930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_51_1931: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_51_1932: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_51_1932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_51_1933: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_51_1934: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_51_1934: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_51_1935: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("67%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_51_1937: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_51_1937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_88_2515: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("79%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_88_2516: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_88_2516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_2526: {
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
  ImageBackground_88_2527: {
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
  View_88_2530: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("106%"),
    justifyContent: "flex-start"
  },
  Text_88_2530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_2531: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
