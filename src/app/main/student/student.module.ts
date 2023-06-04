import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDBService } from "../in-memory-db.service";
import { SharedModule } from "../shared.module";
import { StudentComponent } from "./student.component";

const routes: Routes = [
  {
    path: '**',
    component: StudentComponent
  }
];

@NgModule( {
    declarations: [ StudentComponent ],
    imports: [
      MatTableModule,
      RouterModule.forChild(routes), 
      FlexLayoutModule,
      CommonModule,
      MatIconModule, 
      MatFormFieldModule,
      MatInputModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class StudentModule {}