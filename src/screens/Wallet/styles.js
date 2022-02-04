import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  balance: {
    color: "#ffffff",
    // fontWeight: "600",
    fontSize: 13,
  },
  balanceValue: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 12,
  },
  allTime: {
    fontWeight: "600",
    fontSize: 10,
    color: "#16c784",
  },
  percentChange: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
    paddingBottom: 8
  },
  icon: {
    flexDirection: "row",
    padding: 7,
    backgroundColor: "#16c784", //#ea3943
    borderRadius: 5,
  },
  assetLabel: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: "#4169e1",
    padding: 15,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
