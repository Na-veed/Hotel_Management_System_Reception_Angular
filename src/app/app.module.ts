import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ConactComponent } from './components/conact/conact.component';
import { AboutComponent } from './components/about/about.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { BookingsHistoryComponent } from './components/bookings-history/bookings-history.component';
import { AllocateRoomsComponent } from './components/allocate-rooms/allocate-rooms.component';
import { UnBookedListComponent } from './components/un-booked-list/un-booked-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceptionistProfileComponent } from './components/receptionist-profile/receptionist-profile.component';
import { ReceptionistLoginComponent } from './components/receptionist-login/receptionist-login.component';
import { ReceptionistOperationsComponent } from './components/receptionist-operations/receptionist-operations.component';
import { ReceptionistProfileUpdateComponent } from './components/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistForgetpasswordComponent } from './components/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionDashboardComponent } from './components/reception-dashboard/reception-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    RoomsComponent,
    BlogsComponent,
    ElementsComponent,
    ConactComponent,
    AboutComponent,
    BookingsComponent,
    CancellationComponent,
    BookingsHistoryComponent,
    AllocateRoomsComponent,
    UnBookedListComponent,
    ReceptionistProfileComponent,
    ReceptionistLoginComponent,
    ReceptionistOperationsComponent,
    ReceptionistProfileUpdateComponent,
    ReceptionistForgetpasswordComponent,
    ReceptionDashboardComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
