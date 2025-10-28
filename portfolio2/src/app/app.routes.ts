import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PrimPort } from './prim-port/prim-port';
import { SegPort } from './seg-port/seg-port';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'Tomas', component: PrimPort },
        { path: 'Martin', component: SegPort },
];
