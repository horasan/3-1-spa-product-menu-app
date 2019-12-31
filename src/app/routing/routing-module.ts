import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SearchComponent } from '../search/search.component';
import { CategoryComponent } from '../category/category.component';

const appRoutes: Routes = [
    {path:'', redirectTo: 'fileupload', pathMatch: 'full'},
    {path: 'fileupload', component: FileUploadComponent},
    {path: 'search', component: SearchComponent},
    {path: 'category', component: CategoryComponent}
  ];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }