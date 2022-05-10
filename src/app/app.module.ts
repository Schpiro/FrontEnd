import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardware/hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HttpClientModule} from '@angular/common/http';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    HardwareDetailComponent,
    HardwareCreateComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
