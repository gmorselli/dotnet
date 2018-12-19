import { Customer } from 'src/models/Customer';
import { Owner } from './Owner';
import { Installer } from './Installer';

export class Building {
    constructor(
        public id: number,
        public address: string,
        public city: string,
        public cap: string,
        public interno: number,
        public customer: Customer
    ) {}
}