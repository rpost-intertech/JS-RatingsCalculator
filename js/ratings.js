function collect_ratings() {
    /*ratings object*/
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    let rating = 0;

    /*retrieve all input elements in the HTML that have a class of rating */
    const elements = document.querySelectorAll('.rating');

    /*cycle through the elements array with forEach loop*/
    /*arrow function is used in forEach loop*/
    elements.forEach( element => {

        /*replace the word star with nothing and convert string to number */
        rating = parseInt(element.id.replace('star', ''));

        ratings.count += parseInt(element.value);
    
        ratings.sum += parseInt(element.value) * rating;

        if(ratings.count !== 0) {
            ratings.average = ratings.sum / ratings.count;
        }

    });

    return ratings;
}

/**
 * add an event listener that listens for
 *  the change event on the document
 *  pass an arrow function as the handler
 */
 document.addEventListener('change', () => {
    const ratings = collect_ratings();

    /*select the element that has an id of average*/
    /*set the value property of the element to ratings.average, fixed to 2 decimal places*/
    document.querySelector('#average').value = ratings.average.toFixed(2);
    
 });