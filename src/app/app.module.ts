import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/Card';
import {MatButtonModule} from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DishService} from './services/dish.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService, PromotionService,
    {provide: 'BaseURL', useValue: baseURL},
    LeaderService, ProcessHTTPMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
