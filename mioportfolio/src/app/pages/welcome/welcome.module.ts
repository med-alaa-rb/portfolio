import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MbscModule } from "@mobiscroll/angular";

import { IonicModule } from "@ionic/angular";

import { WelcomePageRoutingModule } from "./welcome-routing.module";

import { WelcomePage } from "./welcome.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    IonicModule,
    WelcomePageRoutingModule,
  ],
  declarations: [WelcomePage],
})
export class WelcomePageModule {}
