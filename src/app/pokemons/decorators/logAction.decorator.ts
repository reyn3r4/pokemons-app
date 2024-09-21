
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS, logAction } from 'src/app/store/actions';
export function logActionDecorator(params: any) {
    //let store = inject(Store); 
    return function (target: any, prop: string, descriptor: PropertyDescriptor) {
        if (params.log) {
            const original = descriptor.value;
            descriptor.value=function(...args:any[]){
                console.log('log decorator');
                //store.dispatch(logAction({ log: { text: 'Set favorite', action: ACTIONS.SET_FAVORITE } }));
                return original.apply(this,args);
            }
        }
    }
}