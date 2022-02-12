import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const FilterDate = (props) => {
  const { filterDay, filterText, selectedRange, handleRangeChange } = props;
  const isSelected = (filter) => filter === selectedRange;
  console.log('pressed');
  return (
    <Pressable
      onPress={() => handleRangeChange(filterDay)}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: isSelected(filterDay) ? "#1e1e1e" : "transparent",
      }}
    >
      <Text
        style={{
          color: isSelected(filterDay) ? "white" : "gray",
          fontWeight: isSelected(filterDay) ? "700" : "normal",
        }}
      >
        {filterText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default memo(FilterDate)
