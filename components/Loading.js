import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';

import React from 'react'

const { width, height } = Dimensions.get("window")
const Loading = () => {
    return (
        <View style={{ width, height }} className=" absolute flex flex-row items-center justify-center">
            <Progress.CircleSnail size={160} thickness={12} indeterminate={true} color={['#ffba08']} />
        </View>
    )
}

export default Loading