"use strict";
let info = `{
    "displayedName": {
        "displayedName": {
            "value": ["Профиль маячковый ПВХ 10 мм L3м"],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}`

// получить название товара
function GetName (info) {
    let cur = JSON.parse(info);
    return cur["displayedName"]["displayedName"]["value"][0];
}

// получить массив номеров магазинов, в которых есть товары в наличии
function GetShops (info) {
    let arr = [],
        cur = JSON.parse(info),
        need = cur["stock"]["stocks"]["34"];
    for (let key in need) {
        if (need[key] != "0") {
            arr.push(key);
        }
    }
    return arr;
}

// найти максимальное количество товара в регионе, вернуть это количество и номер магазина
function GetMaxCount(info) {
    let maxKey = 0,
        maxValue = -1,
        cur = JSON.parse(info),
        need = cur["stock"]["stocks"]["34"];
    for (let key in need) {
        if (Number(need[key]) > maxValue) {
            maxKey = key;
            maxValue = need[key];
        } 
    }
    return [maxKey, maxValue]; 
}

console.log(GetName(info));
console.log(GetShops(info));
console.log(GetMaxCount(info));