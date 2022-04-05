import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatebookComponent } from './createbook/createbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';


const routes: Routes = [
  { path: 'list', component: ListbookComponent },
  { path: 'create', component: CreatebookComponent },
  { path: 'update/:id', component: UpdatebookComponent },
  { path: 'delete/:id', component: DeletebookComponent },
  { path: 'detail/:id', component: DetailbookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
