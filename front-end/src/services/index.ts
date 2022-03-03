import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ICategory {
    name?: string;
}

export interface IDevice {
    categoryId?: number;
    color?: string;
    partNumber?: number;
}

@Injectable({
    providedIn: 'root',
})

export class Services {
    readonly url:string = 'http://localhost:3000';
    headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) {}

    getAllCategories(): Observable<any> {
        return this.http.get<HttpResponse<any>>(`${this.url}/category`, { headers: this.headers });
    }

    createCategory(payload: ICategory) {
        return this.http.post<any>(`${this.url}/category`, payload, { headers: this.headers })
    }

    deleteCategory(categoryId: Number) {
        return this.http.delete<any>(`${this.url}/category/${categoryId}`, { headers: this.headers, responseType: 'text' as 'json' })
    }

    getAllDevices() {
        return this.http.get<HttpResponse<any>>(`${this.url}/device`, { headers: this.headers })
    }

    createDevice(payload: IDevice) {
        return this.http.post<any>(`${this.url}/device`, payload, { headers: this.headers })
    }

    deleteDevice(deviceId: Number) {
        return this.http.delete<any>(`${this.url}/device/${deviceId}`, { headers: this.headers,  responseType: 'text' as 'json' })
    }
}
