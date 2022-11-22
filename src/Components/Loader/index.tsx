import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const Loader = () => {
    const [value, setValue] = useState(0);

    return (
        <View style={styles.container}>
            <CircularProgress
                radius={120}
                value={100}
                progressValueStyle={{ fontWeight: '100', color: 'white'}}
                activeStrokeSecondaryColor='blue'
                valueSuffix={'%'}
                inActiveStrokeColor={'black'}
                inActiveStrokeWidth={15}
                duration={5000}
                dashedStrokeConfig={{
                    count: 50,
                    width: 4,
                }}
                onAnimationComplete={() => setValue(50)}
            />

        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Loader