import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

newAppointmentTitle: String ="";
newAppointmentDate : Date = new Date();
appointments: Appointment[] =  []

ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments")
  this.appointments = savedAppointments ? JSON.parse(savedAppointments): []
  //console.log("got loaded")
 // throw new Error('Method not implemented.');
}

addAppointment(){
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
    let newAppointment : Appointment = {
      id : Date.now(),
      title : this.newAppointmentTitle,
      date : this.newAppointmentDate
    }
    this.appointments.push(newAppointment)
    this.newAppointmentTitle ="";
    this.newAppointmentDate = new Date();
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
    //alert(this.appointments.length)
  }
}
 // alert(this.newAppointmentTitle + " " + this.newAppointmentDate)
deleteAppointment(index: number){
this.appointments.splice(index, 1)
localStorage.setItem("appointments", JSON.stringify(this.appointments))
}
}