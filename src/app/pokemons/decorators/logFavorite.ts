export function logFavorite(){
    return function(target:any,prop:string,descriptor:PropertyDescriptor){
        console.log('log fav');
    }
}