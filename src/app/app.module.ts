import { SelectManufacturerComponent } from './../components/selectManufacturer/selectManufacturer.component';
import { UpdateRoomComponent } from './../components/updateRoom/updateRoom.component';
import { GestioneRoomComponent } from './../components/gestioneRoom/gestioneRoom.component';
import { IntestazioneComponent } from '../components/intestazione/intestazione.component';
import { LoginComponent } from "../components/login/login.component";
import { HomeDriverComponent } from "../components/home-driver/home-driver.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TreeModule } from 'primeng/primeng';
import { DragDropModule} from 'primeng/dragdrop';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { UserService } from "../services/user.service";
import { CustomerService } from "../services/customer.service";
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HomeOwnerComponent } from "../components/home-owner/home-owner.component";
import { SignupComponent } from "../components/signup/signup.component";
import { ReportDriverComponent } from "../components/report-driver/report-driver.component";
import { ReportService } from "../services/report.service";
import { CarComponent } from "../components/car/car.component";
import { CarService } from "../services/car.service";
import { AddCarComponent } from "../components/addCar/addCar.component";
import { ReportHystoryComponent } from "../components/report-hystory/report-hystory.component";
import { ReportOwnerComponent } from "../components/report-owner/report-owner.component";
import { ReportNearComponent } from "../components/report-near/report-near.component";
import { PaymentComponent } from "../components/payment/payment.component";
import { PaymentService } from "../services/payment.service";
import { ExtensionStopsComponent } from "../components/extension-stops/extension-stops.component";
import { ExtensionStopsRowComponent } from "../components/extension-stops-row/extension-stops-row.component";
import { FindCarplaceComponent } from "../components/find-carplace/find-carplace.component";
import { AgmCoreModule } from '@agm/core';
import { GoogleMapService } from "../services/google-map.service";
import { ManagementParkComponent } from "../components/management-park/management-park.component";
import { LegislationsComponent } from "../components/legislations/legislations.component";
import { UsefulNumbersComponent } from "../components/useful-numbers/useful-numbers.component";
import { ManagementSlotComponent } from '../components/management-slot/management-slot.component';
import { SlotService } from '../services/slot.service';
import { SuperuserComponent } from '../components/superuser/superuser.component';
import { SuperuserService } from '../services/superuser.service';
import { BuildingService } from '../services/building.service';
import { BuildingTableComponent } from '../components/building-table/building-table.component';
import { BuildingTreeComponent } from '../components/building-tree/building-tree.component';
import { BuildingTreeService } from '../services/buildingTree.service';
import { GestioneCustomerComponent} from '../components/gestioneCustomer/gestioneCustomer.component';
import { InsertCustomerComponent } from '../components/insertCustomer/insertCustomer.component';
import { GestioneBuildingComponent } from '../components/gestioneBuilding/gestioneBuilding.component';
import { InsertBuildingComponent } from '../components/insertBuilding/insertBuilding.component';
import { RoomService } from '../services/room.service';
import {ItemtypeService} from '../services/itemtype.service';
import { ItemtypemanagerComponent } from '../components/itemtype/itemtype.component';
import { InsertitemtypeComponent } from '../components/insertItemType/insertItemType.component';
import { UpdateitemtypeComponent } from '../components/updateitemType/updateitemType.component';
import { DeleteitemtypeComponent } from '../components/deleteitemType/deleteitemType.component';
import { ReaditemtypeComponent } from '../components/readitemType/readitemType.component';
import { ReadCustomerComponent } from '../components/readCustomer/readCustomer.component';
import { UpdateCustomerComponent } from '../components/updateCustomer/updateCustomer.component';
import { UpdateBuildingComponent } from '../components/updateBuilding/updateBuilding.component';
import { DeleteBuildingComponent } from '../components/deleteBuilding/deleteBuilding.component';
import { FloorService } from '../services/floor.service';
import { DeleteFloorComponent } from 'src/components/deleteFloor/deleteFloor.component';
import { UpdateFloorComponent } from 'src/components/updateFloor/updateFloor.component';
import { InsertFloorComponent } from './../components/insertFloor/insertFloor.component';
import { GestioneFloorComponent } from './../components/gestioneFloor/gestioneFloor.component';
import { InsertRoomComponent } from 'src/components/insertRoom/insertRoom.component';
import { DeleteRoomComponent } from 'src/components/deleteRoom/deleteRoom.component';
import { InsertinstallerComponent } from '../components/insertInstaller/insertInstaller.component';
import { ReadinstallerComponent } from '../components/readInstaller/readInstaller.component';
import { UpdateinstallerComponent } from '../components/updateInstaller/updateInstaller.component';
import { DeleteCustomerComponent } from '../components/deleteCustomer/deleteCustomer.component';
import { DeleteinstallerComponent } from '../components/deleteInstaller/deleteInstaller.component';
import { AssociazioneBuildingsComponent } from '../components/associazioneBuildings/associazioneBuildings.components';
import { GestioneInstallerComponent } from '../components/gestioneInstaller/gestioneInstaller.component';
import { InstallerService } from '../services/installer.service';
import { InstallerComponent } from '../components/installer/installer.component';
import { CollegaItemRoom } from 'src/components/collegaItemRoom/collegaItemRoom.component';
import { ItemService } from 'src/services/item.service';
import { GestioneManufacturerComponent } from '../components/gestioneManufacturer/gestioneManufacturer.component';
import { InsertManufacturerComponent } from '../components/insertManufacturer/insertManufacturer.component';
import { ReadManufacturerComponent } from '../components/readManufacturer/readManufacturer.component';
import { DeleteManufacturerComponent } from '../components/deleteManufacturer/deleteManufacturer.component';
import { GestioneListinoComponent } from '../components/gestioneListino/gestioneListino.component';
import { ListinoService } from '../services/listino.service';
import { InsertListinoComponent } from '../components/insertListino/insertListino.component';
import { BuildingTreeManagerService } from '../services/buildingTreeManager.service';
import { UpdateManufacturerComponent } from '../components/updateManufacturer/updateManufacturer.component';
import { ReadListinoComponent } from '../components/readListino/readListino.component';
import { DeleteListinoComponent } from '../components/deleteListino/deleteListino.component';
import { UpdateListinoComponent } from '../components/updateListino/updateListino.component';
import { PopolaListinoComponent } from 'src/components/popolaListino/popolaListino.component';
import { PrezzoService } from '../services/prezzo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeDriverComponent,
    HomeOwnerComponent,
    SignupComponent,
    ReportDriverComponent,
    CarComponent,
    AddCarComponent,
    ReportHystoryComponent,
    ReportOwnerComponent,
    ReportNearComponent,
    PaymentComponent,
    ExtensionStopsComponent,
    ExtensionStopsRowComponent,
    FindCarplaceComponent,
    ManagementParkComponent,
    LegislationsComponent,
    UsefulNumbersComponent,
    IntestazioneComponent,
    ItemtypemanagerComponent,
    ManagementSlotComponent,
    SuperuserComponent,
    BuildingTableComponent,
    BuildingTreeComponent,
    GestioneCustomerComponent,
    InsertCustomerComponent,
    GestioneBuildingComponent,
    InsertBuildingComponent,
    InsertitemtypeComponent,
    UpdateitemtypeComponent,
    DeleteitemtypeComponent,
    ReaditemtypeComponent,
    ReadCustomerComponent, 
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    UpdateBuildingComponent,
    DeleteBuildingComponent,
    GestioneFloorComponent,
    InsertFloorComponent,
    UpdateFloorComponent,
    DeleteFloorComponent,
    GestioneRoomComponent,
    InsertRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    GestioneInstallerComponent,
    InsertinstallerComponent,
    ReadinstallerComponent,
    UpdateinstallerComponent,
    DeleteCustomerComponent,
    DeleteinstallerComponent,
    AssociazioneBuildingsComponent,
    InstallerComponent,
    CollegaItemRoom,
    GestioneManufacturerComponent,
    InsertManufacturerComponent,
    ReadManufacturerComponent,
    DeleteManufacturerComponent,
    GestioneListinoComponent,
    InsertListinoComponent,
    UpdateManufacturerComponent,
    ReadListinoComponent,
    DeleteListinoComponent,
    UpdateListinoComponent,
    SelectManufacturerComponent,
    PopolaListinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUf_fIZF0iu40Uiwhj3RhFE3Kd1KrWUFw',
      libraries: ["places"]
    }),
    TreeModule,
    DragDropModule
  ],
  providers: [
    UserService,
    CustomerService, 
    SuperuserService, 
    ReportService, 
    CarService,
    PaymentService,
    GoogleMapService, 
    SlotService,
    BuildingService,
    BuildingTreeService,
    RoomService,
    FloorService, 
    ItemtypeService,
    InstallerService,
    UserService,
    CustomerService,
    RoomService,
    FloorService, 
    ItemService, 
    ItemtypeService, 
    BuildingService, 
    SuperuserService, 
    ReportService, 
    CarService, 
    PaymentService, 
    GoogleMapService, 
    SlotService,
    ListinoService,
    BuildingTreeManagerService,
    PrezzoService

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
