function choice(items) {
    const randomItem = Math.floor(Math.random()*items.length);
    return items[randomItem];
    }

function remove(items, item) {
    let ind = items.indexOf(item);
    if(ind !== -1){
        return items.splice(ind,1);
    }
}
    
    export { choice, remove };