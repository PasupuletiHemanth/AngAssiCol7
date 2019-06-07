import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../model/IOrder';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ORDERS_API: string = "http://localhost:8080/orders";

  constructor(private http: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get(this.ORDERS_API)
      .pipe(map((resp: IOrder[]) => {
        console.log(resp);
        return resp;
      }));
  }

  //Test method written for prac
  getOrdersTest1(): Observable<any> {
    return this.http.get(this.ORDERS_API);
  }
  //Test method written for prac
  getOrdersTest2() {
    return this.http.get<any>(this.ORDERS_API)
      .toPromise().then(res => <IOrder[]>res)
      .then(res => { return res; });
  }
  //Test method written for prac
  getOrdersTest() {
    return this.http.get<any>('assets/data/order.json')
      .toPromise()
      .then(res => <IOrder[]>res.data)
      .then(data => { return data; });
  }
}
