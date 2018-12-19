import { SelectManufacturerComponent } from './../components/selectManufacturer/selectManufacturer.component';
import { CollegaItemRoom } from 'src/components/collegaItemRoom/collegaItemRoom.component';
import { DeleteRoomComponent } from './../components/deleteRoom/deleteRoom.component';
import { UpdateRoomComponent } from './../components/updateRoom/updateRoom.component';
import { IntestazioneComponent } from '../components/intestazione/intestazione.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeDriverComponent } from '../components/home-driver/home-driver.component';
import { HomeOwnerComponent } from '../components/home-owner/home-owner.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ReportDriverComponent } from '../components/report-driver/report-driver.component';
import { CarComponent } from '../components/car/car.component';
import { AddCarComponent } from '../components/addCar/addCar.component';
import { ReportHystoryComponent } from '../components/report-hystory/report-hystory.component';
import { ReportOwnerComponent } from '../components/report-owner/report-owner.component';
import { ReportNearComponent } from '../components/report-near/report-near.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { ExtensionStopsComponent } from '../components/extension-stops/extension-stops.component';
import { FindCarplaceComponent } from '../components/find-carplace/find-carplace.component';
import { ManagementParkComponent } from '../components/management-park/management-park.component';
import { UsefulNumbersComponent } from '../components/useful-numbers/useful-numbers.component';
import { LegislationsComponent } from '../components/legislations/legislations.component';
import { ManagementSlotComponent } from '../components/management-slot/management-slot.component';
import { SuperuserComponent} from '../components/superuser/superuser.component';
import { BuildingTreeComponent } from '../components/building-tree/building-tree.component';
import { BuildingTableComponent } from '../components/building-table/building-table.component';
import { GestioneCustomerComponent} from '../components/gestioneCustomer/gestioneCustomer.component';
import { InsertCustomerComponent } from '../components/insertCustomer/insertCustomer.component';
import { GestioneBuildingComponent } from '../components/gestioneBuilding/gestioneBuilding.component';
import { InsertBuildingComponent } from '../components/insertBuilding/insertBuilding.component';
import {ItemtypemanagerComponent} from '../components/itemtype/itemtype.component';
import { InsertitemtypeComponent } from '../components/insertItemType/insertItemType.component';
import { UpdateitemtypeComponent } from '../components/updateitemType/updateitemType.component';
import { DeleteitemtypeComponent } from '../components/deleteitemType/deleteitemType.component';
import { ReaditemtypeComponent } from '../components/readitemType/readitemType.component';
import { ReadCustomerComponent } from '../components/readCustomer/readCustomer.component';
import { UpdateCustomerComponent } from '../components/updateCustomer/updateCustomer.component';
import { DeleteCustomerComponent } from '../components/deleteCustomer/deleteCustomer.component';
import { UpdateBuildingComponent } from '../components/updateBuilding/updateBuilding.component';
import { DeleteBuildingComponent } from '../components/deleteBuilding/deleteBuilding.component';
import { GestioneFloorComponent } from '../components/gestioneFloor/gestioneFloor.component';
import { InsertFloorComponent} from '../components/insertFloor/insertFloor.component';
import { UpdateFloorComponent } from 'src/components/updateFloor/updateFloor.component';
import { DeleteFloorComponent } from 'src/components/deleteFloor/deleteFloor.component';
import { GestioneRoomComponent } from 'src/components/gestioneRoom/gestioneRoom.component';
import { InsertRoomComponent } from 'src/components/insertRoom/insertRoom.component';
import { InsertinstallerComponent } from '../components/insertInstaller/insertInstaller.component';
import { ReadinstallerComponent } from '../components/readInstaller/readInstaller.component';
import { UpdateinstallerComponent } from '../components/updateInstaller/updateInstaller.component';
import { DeleteinstallerComponent } from '../components/deleteInstaller/deleteInstaller.component';
import { AssociazioneBuildingsComponent } from '../components/associazioneBuildings/associazioneBuildings.components';
import { GestioneInstallerComponent } from '../components/gestioneInstaller/gestioneInstaller.component';
import { InstallerComponent } from '../components/installer/installer.component';
import { GestioneManufacturerComponent } from '../components/gestioneManufacturer/gestioneManufacturer.component';
import { InsertManufacturerComponent } from '../components/insertManufacturer/insertManufacturer.component';
import { ReadManufacturerComponent } from '../components/readManufacturer/readManufacturer.component';
import { DeleteManufacturerComponent } from '../components/deleteManufacturer/deleteManufacturer.component';
import { GestioneListinoComponent } from '../components/gestioneListino/gestioneListino.component';
import { InsertListinoComponent } from '../components/insertListino/insertListino.component';
import { UpdateManufacturerComponent } from '../components/updateManufacturer/updateManufacturer.component';
import { ReadListinoComponent } from '../components/readListino/readListino.component';
import { DeleteListinoComponent } from '../components/deleteListino/deleteListino.component';
import { UpdateListinoComponent } from '../components/updateListino/updateListino.component';
import { PopolaListinoComponent } from '../components/popolaListino/popolaListino.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'homeDriver', component: HomeDriverComponent},
  {path: 'superuser', component: SuperuserComponent},
  {path: 'homeOwner', component: HomeOwnerComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'itemTypeManager', component: ItemtypemanagerComponent},
  {path: 'car', component: CarComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'reportDriver', component: ReportDriverComponent},
  {path: 'reportHystory', component: ReportHystoryComponent},
  {path: 'reportOwner', component: ReportOwnerComponent},
  {path: 'reportNear', component: ReportNearComponent},
  {path: 'findCarPlace', component: FindCarplaceComponent},
  {path: 'extensionStops', component: ExtensionStopsComponent},
  {path: 'reportDriver', component: ReportDriverComponent},
  {path: 'paymentsHystory', component: PaymentComponent},
  {path: 'managementPark', component: ManagementParkComponent},
  {path: 'usefulNumbers', component: UsefulNumbersComponent},
  {path: 'legislations', component: LegislationsComponent},
  {path: 'intestazione', component: IntestazioneComponent},
  {path: 'managementSlot', component: ManagementSlotComponent},
  {path: 'installer/buildingTree/:buildingId', component: BuildingTreeComponent },
  {path: 'installer/buildings', component: BuildingTableComponent},
  {path: 'gestioneCustomer', component: GestioneCustomerComponent},
  {path: 'insertCustomer', component: InsertCustomerComponent},
  {path: 'gestioneBuilding', component: GestioneBuildingComponent},
  {path: 'insertBuilding', component: InsertBuildingComponent},
  {path: 'insertitemType', component: InsertitemtypeComponent},
  {path: 'itemtype', component:ItemtypemanagerComponent},
  {path: 'updateitemType', component:UpdateitemtypeComponent},
  {path: 'deleteitemType', component:DeleteitemtypeComponent},
  {path: 'readitemType', component:ReaditemtypeComponent},
  {path: 'readCustomer', component: ReadCustomerComponent},  
  {path: 'updateCustomer', component: UpdateCustomerComponent},
  {path: 'deleteCustomer', component: DeleteCustomerComponent},
  {path: 'updateBuilding', component: UpdateBuildingComponent},
  {path: 'deleteBuilding', component: DeleteBuildingComponent},
  {path: 'gestioneFloor/:buildingId', component: GestioneFloorComponent},
  {path: 'insertFloor/:buildingId', component: InsertFloorComponent},
  {path: 'updateFloor/:buildingId', component: UpdateFloorComponent},
  {path: 'deleteFloor/:buildingId', component: DeleteFloorComponent},
  {path: 'gestioneRoom/:floorId', component: GestioneRoomComponent},
  {path: 'insertRoom/:floorId', component: InsertRoomComponent},
  {path: 'updateRoom/:floorId', component: UpdateRoomComponent},
  {path: 'deleteRoom/:floorId', component: DeleteRoomComponent},
  {path: 'gestioneInstaller', component:GestioneInstallerComponent},
  {path: 'insertInstaller', component:InsertinstallerComponent},
  {path: 'readInstaller', component:ReadinstallerComponent},
  {path: 'updateInstaller', component:UpdateinstallerComponent},
  {path: 'deleteInstaller', component:DeleteinstallerComponent},
  {path: 'associazioneBuildings', component:AssociazioneBuildingsComponent},
  {path: 'installer', component: InstallerComponent},
  {path: 'configurazioneRoom/:roomId', component: CollegaItemRoom},
  {path: 'gestioneManufacturer', component: GestioneManufacturerComponent},
  {path: 'insertManufacturer', component: InsertManufacturerComponent},
  {path: 'readManufacturer', component: ReadManufacturerComponent},
  {path: 'deleteManufacturer', component: DeleteManufacturerComponent},
  {path: 'gestioneListino', component: GestioneListinoComponent},
  {path: 'insertListino', component: InsertListinoComponent},
  {path: 'updateManufacturer', component: UpdateManufacturerComponent},
  {path: 'readListino', component: ReadListinoComponent},
  {path: 'deleteListino', component: DeleteListinoComponent},
  {path: 'updateListino', component: UpdateListinoComponent},
  {path: 'selectManufacturer/:buildingId', component: SelectManufacturerComponent},
  {path: 'popolaListino', component:PopolaListinoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  declarations: []
})
export class AppRoutingModule { }
