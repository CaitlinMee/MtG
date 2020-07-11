//https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'magicthegathering/api';
    public readonly API_MOCK_ENDPOINT: string = 'mock-magicthegathering/api';
}