import { Colors } from "@/constants/colors";
import { KeyWords, TokenFontSize } from "@/constants/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.HONEY_DEW,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: KeyWords.BUTTON_BORDER_RADIUS,
  },
  itemTextContainer: { display: "flex", flexDirection: "row", gap: 6 },
  itemText: {
    fontSize: TokenFontSize.base,
    color: Colors.DARK_CYAN,
  },
});
