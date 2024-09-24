import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './classbinding/classbinding.component';
import { helloworldComponent } from './helloworld/helloworld.component';
import { productComponent } from './product/product.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { HtmlJsBindingComponent } from './html-js-binding/html-js-binding.component';
import { StudentListComponent } from './studentlist/studentlist.component';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductlistComponent } from './example/productlist/productlist.component';
import { ProductComponent } from './example/product/product.component';
import { FromchildComponent } from './childtoparent/fromchild/fromchild.component';
import { ToparentComponent } from './childtoparent/toparent/toparent.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    ClassBindingComponent,
    StylebindingComponent,
    HtmlJsBindingComponent,
    StudentListComponent,
    ParentComponent,
    ChildComponent,
    ProductlistComponent,
    ProductComponent,
    FromchildComponent,
    ToparentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
