import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'

import {Restaurant} from './restaurant/restaurant.model'

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {
        
    constructor(private http: HttpClient){ }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
                .catch(ErrorHandler.handleError)

        // return this.http.get<Restaurant[]>('${MEAT_API}/restaurants', {observe: 'response'})
        // .subscribe(resp => {
        //   resp.headers.get('X-PageSize') //custom header
        //   this.rests = resp.body //Restaurant[]
        // })
    }
}