import { Injectable } from '@angular/core';
import { IOrderDetails } from '../model/IOrderDetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  ORDER_DETAILS_API: string = "http://localhost:8080/orderDetails";
  constructor(private http: HttpClient) { }

  getOrderDetails(): Observable<IOrderDetails[]> {
    return this.http.get(this.ORDER_DETAILS_API)
      .pipe(map((resp: IOrderDetails[]) => {
        console.log(resp);
        return resp;
      }));
  }

  getOrderDetailsByOrderNo(orderNo : string):Observable<IOrderDetails[]>
  {
    let url=`${this.ORDER_DETAILS_API}/${orderNo}`
    return this.http.get(url)
    .pipe(map((resp: IOrderDetails[]) => {
      console.log(resp);
      return resp;
    }));
  }
}
