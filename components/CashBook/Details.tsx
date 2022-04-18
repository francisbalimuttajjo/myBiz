import React from "react";
import { Text, View } from "react-native";
import { CashItemProps as Props } from "../../types/types";

const Details = (props: Props) => {
  let item_name = props.item.type.split("-");
  const getDate = (date: Date) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day = date.toLocaleString(undefined, {
      day: "numeric",
    });
    let month: string = date.toLocaleString(undefined, {
      month: "numeric",
    });
    let year = date.toLocaleString(undefined, {
      year: "numeric",
    });

    return `${day} ${months[+month]} , ${year}`;
  };
  return (
    <View style={{ paddingTop: "10%" }}>
      <View
        style={{
          height: 220,
          backgroundColor: "#fff",
          width: "90%",
          alignSelf: "center",
          borderRadius: 5,
          borderTopWidth: 4,
          borderColor: props.item.type === "cash-in" ? "green" : "red",
        }}
      >
        <View
          style={{
            borderColor: "#e0e1e2",
            borderBottomWidth: 1,
            paddingBottom: "2%",
            paddingHorizontal: "2%",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", paddingTop: "2%" }}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    textTransform: "capitalize",
                    opacity: 0.6,
                  }}
                >
                  {item_name[0]}&nbsp;{item_name[1]}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  on&nbsp;
                  {getDate(props.item.date)}
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  &nbsp;&nbsp;
                  {props.item.date.toLocaleString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: props.item.type === "cash-in" ? "green" : "red",
                fontWeight: "normal",
                fontSize: 24,
                padding: "2%",
              }}
            >
              {props.item.amount}
            </Text>
          </View>
        </View>
        <View>
          <Text>Details</Text>
        </View>
        <View>
          <Text>Details</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
