import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //agg

import { RouterModule, Route } from '@angular/router'; //importo modulo per fare routing
import { PickerModule } from '@ctrl/ngx-emoji-mart'; //agg

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';
import { NavbarComponent } from './navbar/navbar.component';

//definisco le "rotte", ossia i link di destinazione della nav
const routes: Route[] = [
  {
    path: "",
    component: TodosComponent
  },

  {
    path: "completati",
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), //importo modulo delle rotte
    FormsModule, // agg
    PickerModule // agg

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
