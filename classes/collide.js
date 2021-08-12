function checkCollision(objectA,objectB,collisionDistance) {
    if(objectA!=null&&objectB!=null) {
        if(objectA!=undefined&&objectB!=undefined) {
            var distance=dist(objectA.position.x,objectA.position.y,objectB.position.x,objectB.position.y);
            if(distance<collisionDistance) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            console.error("Collision detector says: Some object you've passed is undefined");
        }  
    }
    else {
        console.error("Collision detector says: Some object you've passed is null");
    }  
}

function colliding(body1,body2,distance) {
    if(checkCollision(body1,body2,distance)) {
        return true;
    }
    else {
        return false;
    }
}