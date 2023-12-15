console.log("Let's get this party started!");

const $searchInput = $('#searchterm');
//build a function to append gif to gif area
function addGIF(res)   {
    
    
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