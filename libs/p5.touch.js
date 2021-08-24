//*Function touched()
/**
 * @function touched() 
 * 
 * @requires p5.js||p5.min.js,p5.play.js||p5.play.min.js
 * 
 * @param sprite variable
 * @param mouse boolean
 * @param touch boolean
 * 
 * @returns true/false/undefined(error)
 * 
 * @author Anuj Doddakaragi
 */

//TODO: Rigorous testing required!

function touched(sprite,mouse=false,touch=true) {
    if(mouse&&sprite!=undefined) {
        if(sprite.mouseClicked) {
            return true;
        }
        else if(mousePressedOver(sprite)) {
            return true;
        }
        else {
            return false;
        }
    }
    if(touch&&sprite!=undefined) {
        if(touches.length>0) {
            if(sprite.position.x-50<touches[0].x<sprite.position.x+50) {
                if(sprite.position.y-50<touches[0].y<sprite.position.y+50) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        console.error("Error: Some sprite is undeifned or parameters not passed correctly.")
        return undefined;
    }
}