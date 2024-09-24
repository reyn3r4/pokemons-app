
export function logActionDecorator(params: any) {
    return function (target: any, prop: string, descriptor: PropertyDescriptor) {
        if (params.log) {
            const original = descriptor.value;
            descriptor.value=function(...args:any[]){
                console.log('Log decorator',target.constructor.name,prop);
                return original.apply(this,args);
            }
        }
    }
}