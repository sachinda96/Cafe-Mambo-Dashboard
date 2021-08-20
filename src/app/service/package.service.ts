import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Package, packages } from '../model/packages';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  getAllPackages() {
    return this.http.get<Package[]>(BASE_URL + '/events/reservation/packages');
  }

  getPackageTypes() {
    return this.http.get<{ types: string[] }>(
      BASE_URL + '/events/reservation/types'
    );
  }

  addPackage(pack: Package) {
    return this.http.post(BASE_URL + '/package', pack);
  }

  deletePackage(pack: Package) {
    return this.http.post(BASE_URL + '/package/removePackage/', pack);
  }

  updatePackage(pack: Package) {
    return this.http.post(BASE_URL + '/package/updatePackage/', pack);
  }
}
