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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8999bbce-10b6-4370-88cf-9b761be4d561"
        }}
        style={styles.ImageBackground_81_1224}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43a1507b-5a39-4e22-9f0a-6a32e52bbd32"
        }}
        style={styles.ImageBackground_81_1225}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9e059a5-22d7-4c88-b772-4ecf9e0b18d0"
        }}
        style={styles.ImageBackground_81_1227}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45cc7680-9971-4c03-b39b-adf555054f8c"
        }}
        style={styles.ImageBackground_81_1229}
      />
      <View style={styles.View_81_1230}>
        <Text style={styles.Text_81_1230}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e5c3e79-df56-4ed6-b2e4-c3d8c33f2b3e"
        }}
        style={styles.ImageBackground_81_1231}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19243cb2-75b3-4c63-a825-7667503e810a"
        }}
        style={styles.ImageBackground_81_1232}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7064892b-af09-4de6-bf08-9b69c4e505a4"
        }}
        style={styles.ImageBackground_81_1233}
      />
      <View style={styles.View_81_1234}>
        <Text style={styles.Text_81_1234}>Investment/Spending</Text>
      </View>
      <View style={styles.View_81_1236} />
      <View style={styles.View_81_1237} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f2b03a1-46ed-415d-96ea-1c3f8289e089"
        }}
        style={styles.ImageBackground_81_1238}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a918cceb-f0f1-4827-9889-946f2cc25de2"
        }}
        style={styles.ImageBackground_81_1239}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70dd317a-0b5f-4b33-8864-10fb49b0d19a"
        }}
        style={styles.ImageBackground_81_1240}
      />
      <View style={styles.View_81_1241}>
        <Text style={styles.Text_81_1241}>Spending</Text>
      </View>
      <View style={styles.View_81_1242}>
        <Text style={styles.Text_81_1242}>Banking</Text>
      </View>
      <View style={styles.View_81_1243} />
      <View style={styles.View_81_1244} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0c65204-094a-4c12-b69d-ebef836fa87c"
        }}
        style={styles.ImageBackground_81_1245}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/609d4de6-668e-456f-a0ed-04a747e900dd"
        }}
        style={styles.ImageBackground_81_1246}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6297751-0a03-4b3b-af1c-f805cda153bf"
        }}
        style={styles.ImageBackground_81_1247}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23fe2e2d-0420-4cbb-8045-94df5644d27c"
        }}
        style={styles.TouchableOpacity_81_1253}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("74_200"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/387df2dc-1c6f-4140-86d3-9a9198e4f158"
        }}
        style={styles.TouchableOpacity_81_1326}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_469"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fd3075c-16e8-4e7d-be61-f6d1671a44c4"
        }}
        style={styles.TouchableOpacity_81_1254}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_299"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a443b92-85a7-4bbf-a030-ac16f17846f9"
        }}
        style={styles.TouchableOpacity_81_1327}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_373"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/065a2a44-1c4a-4323-8b1a-3d3d4aa69945"
        }}
        style={styles.ImageBackground_81_1256}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccdab1ca-bd63-4f21-80de-cd797c99b243"
        }}
        style={styles.ImageBackground_81_1257}
      />
      <View style={styles.View_81_1258}>
        <Text style={styles.Text_81_1258}>Spending</Text>
      </View>
      <View style={styles.View_81_1259}>
        <Text style={styles.Text_81_1259}>Taxes</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/851b1a63-4b0e-455d-a0ea-57b0fc21ca7d"
        }}
        style={styles.ImageBackground_81_1260}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d5b56df-048a-4a07-92af-5b1be3431dbc"
        }}
        style={styles.ImageBackground_81_1281}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1282}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_251"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1283}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1126"))
        }
      />
      <View style={styles.View_81_1284} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cebd5f8a-fe40-4d3c-a261-4f55e9a81457"
        }}
        style={styles.ImageBackground_81_1285}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_81_1286}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("81_1028"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a728dea-fcd3-4561-9177-3b94eb7ee50b"
        }}
        style={styles.ImageBackground_81_1287}
      />
      <View style={styles.View_81_1288}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69fe34cd-d7f6-45e9-a8fd-dc3c2dfdf567"
          }}
          style={styles.ImageBackground_81_1289}
        />
      </View>
      <View style={styles.View_81_1295}>
        <Text style={styles.Text_81_1295}>Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d0cd4f3-9d7d-4c7b-abc0-79e95ced68b8"
        }}
        style={styles.ImageBackground_81_1312}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43070a7b-1f86-4a70-acb3-6a08d4843b87"
        }}
        style={styles.ImageBackground_81_1313}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/661e38d4-1ef0-431f-92c7-526bf63cdc19"
        }}
        style={styles.ImageBackground_81_1314}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8adbba43-427a-4673-b183-c1c7fc10d25a"
        }}
        style={styles.ImageBackground_81_1315}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeb94936-434a-41af-89d8-8d90bf67bbdc"
        }}
        style={styles.ImageBackground_81_1316}
      />
      <View style={styles.View_81_1318}>
        <Text style={styles.Text_81_1318}>Investment</Text>
      </View>
      <View style={styles.View_81_1319}>
        <Text style={styles.Text_81_1319}>Strategy</Text>
      </View>
      <View style={styles.View_81_1321}>
        <Text style={styles.Text_81_1321}>Investment</Text>
      </View>
      <View style={styles.View_81_1322}>
        <Text style={styles.Text_81_1322}>Crypto</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba231e5f-948e-434e-906a-6fa95cfc7f72"
        }}
        style={styles.ImageBackground_81_1323}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abc7f2eb-c6fa-4d1a-b821-4cdc36e9f745"
        }}
        style={styles.ImageBackground_81_1324}
      />
      <View style={styles.View_88_1462}>
        <Text style={styles.Text_88_1462}>
          Note: To preview an activity, head to the homepage, and select the
          activites there
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67190181-5d12-4146-b812-5e7b72c1c80e"
        }}
        style={styles.ImageBackground_88_1463}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  ImageBackground_81_1224: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_81_1225: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_81_1227: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_81_1229: {
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
  View_81_1230: {
    width: wp("1%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    justifyContent: "flex-start"
  },
  Text_81_1230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1231: {
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
  ImageBackground_81_1232: {
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
  ImageBackground_81_1233: {
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
  View_81_1234: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_81_1234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1236: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("41%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  View_81_1237: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("41%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_81_1238: {
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
  ImageBackground_81_1239: {
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
  ImageBackground_81_1240: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("46%")
  },
  View_81_1241: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_81_1241: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1242: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_81_1242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1243: {
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
  View_81_1244: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%"),
    borderColor: "rgba(130, 130, 130, 1)",
    borderWidth: 1
  },
  ImageBackground_81_1245: {
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
  ImageBackground_81_1246: {
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
  ImageBackground_81_1247: {
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
  TouchableOpacity_81_1253: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_81_1326: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_81_1254: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  TouchableOpacity_81_1327: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_81_1256: {
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
  ImageBackground_81_1257: {
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
  View_81_1258: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_81_1258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1259: {
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
  Text_81_1259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1260: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("46%")
  },
  ImageBackground_81_1281: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  TouchableOpacity_81_1282: {
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
  TouchableOpacity_81_1283: {
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
  View_81_1284: {
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
    borderColor: "rgba(17, 155, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_81_1285: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  TouchableOpacity_81_1286: {
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
  ImageBackground_81_1287: {
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
  View_81_1288: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_81_1289: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_1295: {
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
  Text_81_1295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1312: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("74%")
  },
  ImageBackground_81_1313: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("75%")
  },
  ImageBackground_81_1314: {
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
  ImageBackground_81_1315: {
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
  ImageBackground_81_1316: {
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
  View_81_1318: {
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
  Text_81_1318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1319: {
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
  Text_81_1319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1321: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_81_1321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1322: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_81_1322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1323: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("74%")
  },
  ImageBackground_81_1324: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("78%")
  },
  View_88_1462: {
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
  Text_88_1462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_88_1463: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
