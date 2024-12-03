// Fruit list
const fruitList = [ 'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu' ];

    

function useSuggestion ( event )
{
    // Set the clicked suggestion as the input value
    fruitInput.value = event.target.textContent;

    // Clear the dropdown and hide it
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
}

// Attach the `useSuggestion` function to the `click` event of each dropdown item
function renderDropdown ( results )
{
    dropdown.innerHTML = ""; // Clear previous results

    if ( results.length === 0 )
    {
        dropdown.style.display = "none"; // Hide dropdown if no results
        return;
    }

    results.forEach( fruit =>
    {
        const li = document.createElement( "li" );
        li.textContent = fruit;

        // Add hover and click functionality
        li.addEventListener( "mouseover", highlightSuggestion ); // Highlight on hover
        li.addEventListener( "click", useSuggestion ); // Use clicked suggestion

        dropdown.appendChild( li );
    } );

    dropdown.style.display = "block"; // Show dropdown
}

// Grab elements
const fruitInput = document.getElementById( "fruitInput" );
const dropdown = document.getElementById( "dropdown" );

// Add event listener for keystrokes
fruitInput.addEventListener( "input", function ()
{

    const inputValue = fruitInput.value.toLowerCase(); // Get input in lowercase
    const filteredResults = search( inputValue ); // Filter results
    renderDropdown( filteredResults ); // Display results in dropdown
} );

// Filter the fruit list
function search ( query )
{
    return fruitList.filter( fruit => fruit.toLowerCase().includes( query ) );
}


function renderDropdown ( results )
{
    dropdown.innerHTML = ""; // Clear previous results

    if ( results.length === 0 )
    {
        dropdown.style.display = "none"; // Hide dropdown if no results
        return;
    }

    results.forEach( fruit =>
    {
        const li = document.createElement( "li" );
        li.textContent = fruit;

        // Add hover and click functionality
        li.addEventListener( "mouseover", highlightSuggestion ); // Highlight on hover
        li.addEventListener( "click", useSuggestion ); // Use clicked suggestion

        dropdown.appendChild( li );
    } );

    dropdown.style.display = "block"; // Show dropdown
}

// Highlight the suggestion
function highlightSuggestion ( event )
{
    const items = dropdown.querySelectorAll( "li" );
    items.forEach( item => item.classList.remove( "highlight" ) ); // Remove previous highlights
    event.target.classList.add( "highlight" ); // Add highlight to current item
}


function useSuggestion ( event )
{
    fruitInput.value = event.target.textContent; 
    dropdown.innerHTML = ""; // Clear dropdown
    dropdown.style.display = "none"; // Hide dropdown
}
