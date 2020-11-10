import {Dimensions, PixelRatio} from "react-native";

export default function (medida, porcentagem){
    const widthPercentageToDP = widthPercent => {
        const screenWidth = Dimensions.get('window').width;
        return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
    };
    const heightPercentageToDP = heightPercent => {
        const screenHeight = Dimensions.get('window').height;
        return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
    };

    if (medida === 'width'){
        return widthPercentageToDP(porcentagem)
    }
    else if(medida === 'height'){
        return heightPercentageToDP(porcentagem)
    }
}
