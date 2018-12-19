export class Slave {

    id: string;
    state: number;
    id_master: string;

    constructor(id: string, state: number, id_master: string) {
        this.id = id;
        this.state = state;
        this.id_master = id_master;
    }
}