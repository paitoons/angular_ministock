import { Injectable } from '@angular/core/testing';
import { ConstantService } from './constant.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // กำหนด Base URL
  apiURL = "http://localhost/ministock_restapi/public/api/";
  baseAPIURLImage="http://localhost/ministock_restapi/images/stock/"
  constructor(){}
}
