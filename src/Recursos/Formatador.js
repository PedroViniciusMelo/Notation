
//Formata a data que vai ser mostrada no campo de seleção da data
const formatDate = (calendario, date) => {
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    if (dia.toString().length === 1) {
        dia = '0' + dia
    }
    if (mes.toString().length === 1) {
        mes = '0' + mes
    }
    if (calendario){
        return ano + '-'+ mes + '-' + dia
    }else{
        return dia + '/' + mes + '/' + ano
    }

}
//Formata as horas e minutos que vão ser mostrados no campo de seleção de tempo
const formatTime = (calendario, date) => {
    let hora = date.getHours()
    let minutos = date.getMinutes()

    if (hora.toString().length === 1) {
        hora = '0' + hora
    }
    if (minutos.toString().length === 1) {
        minutos = '0' + minutos
    }
    return hora + ':' + minutos
}

export default {formatDate, formatTime}