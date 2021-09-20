import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AllocateRoomsComponent } from './components/allocate-rooms/allocate-rooms.component';
import { BookingsHistoryComponent } from './components/bookings-history/bookings-history.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { HomeComponent } from './components/home/home.component';
import { ReceptionDashboardComponent } from './components/reception-dashboard/reception-dashboard.component';
import { ReceptionistForgetpasswordComponent } from './components/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionistLoginComponent } from './components/receptionist-login/receptionist-login.component';
import { ReceptionistOperationsComponent } from './components/receptionist-operations/receptionist-operations.component';
import { ReceptionistProfileUpdateComponent } from './components/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistProfileComponent } from './components/receptionist-profile/receptionist-profile.component';
import { UnBookedListComponent } from './components/un-booked-list/un-booked-list.component';

const routes: Routes = [
  {path:"aboutus" , component:AboutComponent},
  {path:"", component:HomeComponent},
  {path:"bookingsPage", component:BookingsComponent},
  {path:"cancellationPage", component:CancellationComponent},
  {path:"bookingsHistory", component:BookingsHistoryComponent},
  {path:'allocateRooms',component:AllocateRoomsComponent},
  {path:'unBooked',component:UnBookedListComponent},
  {path:'receptionistprofile/:receptionistId', component: ReceptionistProfileComponent},
  {path:'receptionistlogin', component: ReceptionistLoginComponent},
  {path: 'receptionistprofileupdate/:receptionistId', component: ReceptionistProfileUpdateComponent},
  {path:'receptionDashboard/:receptionistId', component: ReceptionDashboardComponent},
  {path: 'receptionistforgetPassword', component:ReceptionistForgetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
