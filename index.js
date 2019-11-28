import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
    const { fretLabels } = props;
    const { fretPointsConfig } = props;
    return <View>
        {
            [...new Array(4)].map((row, outerIndex) => (
                <View key={outerIndex} style={{ flexDirection: "row" }}>
                    {
                        [...new Array(5)].map((column, innerIndex) => (
                            <View style={{ ...styles.gridElement, ...innerIndex && { borderLeftWidth: 0 } }}>
                                {
                                    innerIndex < 4 && fretPointsConfig[outerIndex] && fretPointsConfig[outerIndex][innerIndex]!==0 &&
                                    (props.renderButtonAs ?
                                        React.cloneElement(props.renderButtonAs, null, fretPointsConfig[outerIndex][innerIndex])
                                        : <Text style={{ color: "#fff" }}>{fretPointsConfig[outerIndex][innerIndex]}</Text>)
                                }
                            </View>
                        ))
                    }
                </View>
            ))
        }
        <View style={{ flexDirection: "row" }}>
            {
                fretLabels.map((d, index) => (
                    index !== fretLabels.length - 1 &&
                    <View key={index} style={{ ...styles.lastRow, ...index && { borderLeftWidth: 0 } }}>
                        <Text style={styles.fretLabel}>{d}</Text>
                    </View>
                ))
            }
            <Text style={styles.fretLabelLast}>{fretLabels[fretLabels.length - 1]}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    gridElement: {
        borderWidth: 1,
        borderColor: "#fff",
        height: 70,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    lastRow: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "#fff",
        height: 35,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start"
    },
    fretLabel: {
        color: "#fff",
        position: "absolute",
        fontSize: 16,
        left: -20,
        bottom: -25,
        width: 40,
        textAlign: "center"
    },
    fretLabelLast: {
        color: "#fff",
        position: "absolute",
        fontSize: 16,
        right: -20,
        bottom: -25,
        width: 40,
        textAlign: "center"
    }
});