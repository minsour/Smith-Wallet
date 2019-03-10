import { StyleSheet } from "react-native";
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  splashImage: {
    resizeMode: "cover",
    backgroundColor: "#f8f9ff"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 50,
    marginLeft: 15
  },
  loadingBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingFont: {
    marginTop: 12,
    fontSize: 16
  }
});
