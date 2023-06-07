import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "../shared.module";
import { GraphsComponent } from "./graphs.component";

const routes: Routes = [
  {
    path: '**',
    component: GraphsComponent
  }
];

@NgModule( {
    declarations: [ GraphsComponent ],
    imports: [
      MatTableModule,
      RouterModule.forChild(routes), 
      FlexLayoutModule,
      CommonModule,
      MatIconModule, 
      MatFormFieldModule,
      MatInputModule,
      SharedModule,
      NgApexchartsModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class GraphsModule {}