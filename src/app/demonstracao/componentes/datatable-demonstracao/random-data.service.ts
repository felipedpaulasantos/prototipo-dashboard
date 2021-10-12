import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RandomDataStripe } from "src/app/shared/model/randon-data-stripe";
import { RandomDataFood } from "../../../shared/model/random-data-food";

@Injectable({
   providedIn: "root"
})
export class RandomDataService {

   constructor(private http: HttpClient) {}

   readonly BASE_URL = "https://random-data-api.com/api";

   getFoodData(size: number): Observable<RandomDataFood[]> {
      const sizeParam = size ? `?size=${size}` : "";
      return this.http.get<RandomDataFood[]>(`${this.BASE_URL}/food/random_food${sizeParam}`);
   }

   getRandomStripeData(size: number): Observable<RandomDataStripe[]> {
      const sizeParam = size ? `?size=${size}` : "";
      return this.http.get<RandomDataStripe[]>(`${this.BASE_URL}/stripe/random_stripe${sizeParam}`);
   }

   getCep() {
      return this.http.get("https://ws.apicep.com/cep/12071000.json");
   }

}
