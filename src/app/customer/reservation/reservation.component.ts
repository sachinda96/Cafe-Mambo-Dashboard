import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Package } from 'src/app/model/packages';
import { EventBooking } from 'src/app/model/reservation';
import { CategoryService } from 'src/app/service/category.service';
import { PackageService } from 'src/app/service/package.service';
import { ReserveService } from 'src/app/service/reserve.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  bookingList: Array<EventBooking> = new Array<EventBooking>();
  userId: string | null = '';
  packageList: Package[] = [];
  constructor(
    private tokenService: TokenStorageService,
    private bookingService: ReserveService,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.userId = this.tokenService.getUserId();
    this.packageService.getAllPackages().subscribe(
      (data) => {
        this.packageList = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.bookingService.getAllReservationsByUser(this.userId).subscribe(
      (data) => {
        this.bookingList = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findPackage(id: string | undefined) {
    if (id != undefined) return this.packageList.find((p) => (p.id = id))?.name;
    else return '';
  }
}

/*

 id: string | undefined;
  name: string = '';
  email: string = '';
  contactNo: string = '';
  location: string = '';
  message: string = '';
  date: Date = new Date();
  packageId: string | undefined = '';














*/
