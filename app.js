console.log("Let's get this party started!");

const $searchInput = $('#searchterm');
const $gifArea = $('.gif-area');
//build a function to append gif to gif area
function addGIF(res)   {
    //find out amount of results for random pick
    let numResults = res.data.length;
    // console.log(numResults);
    if(numResults)  {
        let randomIdx = Math.floor(Math.random()*numResults);
        // console.log(randomIdx);
        //create new img element
        let newGIF = document.createElement('img');
        newGIF.src = res.data[randomIdx].images.original.url;
        // console.log(newGIF);
        //append img to gif area
        $gifArea.append(newGIF);
        // console.log($gifArea);
    }
    
    
}

//build a function to reuqest information from GIPHY after submission
$('form').on('submit', async function(e)    {
    e.preventDefault();
    let searchTerm = $searchInput.val();
    // $('#searchterm').empty();
    $searchInput.val('');
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params:    {
        q: searchTerm,
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }})
    // console.log(response);
    addGIF(response.data);

});