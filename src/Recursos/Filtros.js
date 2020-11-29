export default function update(atividade, filtroData, filtroAtrasada, filtroCategoria){
    let array = []
    atividade.forEach(element => {
        if(new Date(element.data) < new Date()){
            array.push({...element, atrasado: true})
        }else{
            array.push({...element, atrasado: false})
        }
    })
    if (filtroData){
        return OrganizeByData(array)
    }else if(filtroAtrasada){
        return OrganizeByAtrasada(array)
    }else if(filtroCategoria){
        return OrganizeByCategoria(array)
    }else{
        return array
    }
}

function OrganizeByAtrasada(array){
    let hold1 = []
    let hold2 = []

    array.forEach(element => {
        element.atrasado ?  hold1.push(element) :  hold2.push(element)
    });
  
    return hold1.concat(hold2)
}

function OrganizeByCategoria(array){
    let categorias = []
    let sortedArray = []

    array.forEach(element => {
        if (!(categorias.includes(element.categoria))){
            categorias.push(element.categoria)
        }
        
    })
    categorias.forEach(element => {
        array.forEach(element2 => {
            if (element === element2.categoria){
                sortedArray.push(element2)
            }
        })
    })
    return sortedArray
}

function OrganizeByData(array){
    return array.sort((a, b) => {
        //return new Date (a.data) > new Date(b.data)   //Caso para ordem crescente
        return new Date (a.data) > new Date(b.data)})
}

