// https://www.artic.edu/artworks/84709/still-life-with-game-fowl
// https://www.artic.edu/artworks/146701/mountain-brook
// https://www.artic.edu/artworks/63554/big-river-from-the-rancherie-mendocino-california
// https://www.artic.edu/artworks/14620/cliff-walk-at-pourville
// https://www.artic.edu/artworks/71/old-oaks-at-bas-breau
// https://www.artic.edu/artworks/81537/bordighera


// Declarations for the Artwork
let art;
let showArtImage;

// https:api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
/** 
* @param img_index
*
* @param item_index
*
*/

async function clickedEvent(img_index, item_index) {
    //  Get Art Id
    let elem = document.getElementsByTagName('img')[img_index]
    let id = elem.attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_display,main_reference_number`, {
        method: 'GET',
        headers: headers
});
    let result = await fetch(request);
    let response = await result.json();

    console.log(response)


 /**
  * @param id
  * @param event
  * 
  * id = gallery image id
  * event = user even
  * 
  * Function produces art information of index image
  */

 function getArt(id, event){
    switch(id){
        case 'bigriver' : {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'thebeach' : {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'mountainbrook' : {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'oaktree' : {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'gamefowl' : {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        } 
        case 'ocean' : {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
 }
   