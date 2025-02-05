import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit"

export const WasteSegregationChart = () => {
    const data = [
        { name: "Plastics", population: 40, color: "#FF6384", legendFontColor: "#C9C3C3FF", legendFontSize: 12 },
        { name: "Metals", population: 20, color: "#FFFCD2FF", legendFontColor: "#C9C3C3FF", legendFontSize: 12 },
        { name: "Biodegradable", population: 30, color: "#319C1BFF", legendFontColor: "#C9C3C3FF", legendFontSize: 12 },
        { name: "Papers", population: 10, color: "#4BC0C0", legendFontColor: "#C9C3C3FF", legendFontSize: 12 },
    ];
    const maxCategory = data.reduce((prev, current) => (prev.population > current.population ? prev : current), data[0]);

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                width={350}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="24"
                center={[30, 0]}
                absolute

            />
            <View style={styles.doughnutHole}>
                <Text style={styles.text}>{maxCategory.name}</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    doughnutHole: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position: "absolute",
        width: 110,
        height: 110,
        borderRadius: 75,
        left: 62,
        backgroundColor: "#115976F7",
        // transform: [{ translateX: -30 }, { translateY: -10 }],
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#ffffff'
    },
});