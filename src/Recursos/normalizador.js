import {Dimensions, PixelRatio} from "react-native";

//Função que retorna um valor numérico tendo como escala a largura da tela. A função é usada para normalizar textos ou outros campos que não suportam tamanhos por porcentagem.
const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};
//Função que retorna um valor numérico tendo como escala a altura da tela. A função é usada para normalizar textos ou outros campos que não suportam tamanhos por porcentagem.
const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

export default {
    widthPercentageToDP,
    heightPercentageToDP
}
