import { serializePath } from "@angular/router/src/url_tree";

interface Item {
    id: number,
    serializePath: string,
    descrizione: string,
    marca: string,
    modello: string
}

interface Room {
    id: number,
    nomeRoom: string,
    descrizione: string,
    items: Item[]
}

interface Floor {
    id: number,
    nomeFloor: string,
    descrizione: string,
    rooms: Room[]
}

interface Thing {
    id: number,
    numUscite: number,
    prezzo: number
}

export class BuildingTree {
    constructor(public treeFloor: Floor[], public name: string, public things: Thing[]) {}
}