import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { ItemType } from "src/models/ItemType";
import { Listino } from 'src/models/Listino';
import { ListinoService } from 'src/services/listino.service';
import { Prezzo } from 'src/models/Prezzo';
import { NgForm } from '@angular/forms';
import { PrezzoService } from 'src/services/prezzo.service';

@Component({
    selector:'app-popolaListino',
    templateUrl:'./popolaListino.component.html',
    styleUrls:['./popolaListino.component.css']
})

export class PopolaListinoComponent implements OnInit{
    
    public listino : Array<Listino>;
    public available : Array<ItemType>;
    public insertArray = new Array<any>('',0,0);
    public prezzoAvaible: Array <Prezzo>;

     constructor(private prezzoService: PrezzoService, private listinoService:ListinoService,private route: ActivatedRoute, private itemTypeService: ItemtypeService, private router: Router){

     }

     ngOnInit(){ 
        this.itemTypeService.MyitemTypeList().subscribe((response)=>{ this.available = response});
         this.listinoService.readListino().subscribe((response) => {
             this.listino = response;
         }) 

     }

     associa(f:string,idListino:string,itemTypeId:string,prezzo:string){
        this.prezzoService.insert(prezzo,itemTypeId,idListino).subscribe((response)=>{ 
            if (response!=null){
                let newPrezzo: Array<Prezzo>;
                newPrezzo= new Array();
                this.prezzoAvaible= new Array();
                this.prezzoAvaible.forEach(tabellaPrezzo=>{
                    this.prezzoService.save(tabellaPrezzo).subscribe((response)=> {tabellaPrezzo = response});
                    console.log("tabellaPrezzo= "+tabellaPrezzo);
                    newPrezzo.push(tabellaPrezzo);
                })
             this.router.navigateByUrl("/gestioneListino")};
            })
    }

}