
export function contarArray(qtd){
    let items = [];

    for( let i = 1; i <= qtd; i++){
        items.push(0)
    }

    return items;
}

export function Media(items){
    let soma = 0;
    for( let i = 0; i < items.length; i++){
        soma = soma + items[i];
    }

    let md = soma / items.length;
    return md;
}

export function Maior(items){
    let md = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i] > md){
            md = items[i];
        }
    }

    return md;
}

export function Menor(items){
    let md = 11;
    for(let i = 0; i < items.length; i++){
        if(items[i] < md){
            md = items[i];
        }
    }

    return md;
}