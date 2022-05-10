import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareDetailComponent } from './hardware/hardware-detail/hardware-detail.component';
import { HardwareComponent } from './hardware/hardware.component';



const routes: Routes = [
  {path: "hardwares", component: HardwareComponent},
  {path: "details/:code", component: HardwareDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }