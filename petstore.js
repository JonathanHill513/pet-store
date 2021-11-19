var shop = [
 
    {
        title: 'Benny',
        image: './jamie-street-MoDcnVRN5JU-unsplash.jpg',
        price: '$70',
        species: 'Dog',
        description: 'Loves: Bones <br> Hates: Mail men',
        location: 'Westwood'
    },
    {
        title: 'Frank',
        image: './craig-pattenaude-o5LcQ9GkT6A-unsplash.jpg',
        price: '$100',
        species: 'Turtle',
        description: 'Loves: Leafs <br> Hates: Plastic',
        location: 'West Chester'
    },
    {  title: 'James',
        image: './james-wainscoat-yEW23jxVsNI-unsplash.jpg',
        price: '$25',
        species: 'Chicken',
        description: 'Loves: Seeds <br> Hates: KFC',
        location: 'Western Hills'
    },
    {
        title: 'Benny',
        image: './jamie-street-MoDcnVRN5JU-unsplash.jpg',
        price: '$70',
        species: 'Dog',
        description: 'Loves: Bones <br> Hates: Mail men',
        location: 'Westwood'
    },
    {
        title: 'Frank',
        image: './craig-pattenaude-o5LcQ9GkT6A-unsplash.jpg',
        price: '$100',
        species: 'Turtle',
        description: 'Loves: Leafs <br> Hates: Plastic',
        location: 'West Chester'
    },
    {  title: 'James',
        image: './james-wainscoat-yEW23jxVsNI-unsplash.jpg',
        price: '$25',
        species: 'Chicken',
        description: 'Loves: Seeds <br> Hates: KFC',
        location: 'Western Hills'
    },
    {
        title: 'Benny',
        image: './jamie-street-MoDcnVRN5JU-unsplash.jpg',
        price: '$70',
        species: 'Dog',
        description: 'Loves: Bones <br> Hates: Mail men',
        location: 'Westwood'
    },
    {
        title: 'Frank',
        image: './craig-pattenaude-o5LcQ9GkT6A-unsplash.jpg',
        price: '$100',
        species: 'Turtle',
        description: 'Loves: Leafs <br> Hates: Plastic',
        location: 'West Chester'
    },
    {  title: 'James',
        image: './james-wainscoat-yEW23jxVsNI-unsplash.jpg',
        price: '$25',
        species: 'Chicken',
        description: 'Loves: Seeds <br> Hates: KFC',
        location: 'Western Hills'
    },
    {
        title: 'Benny',
        image: './jamie-street-MoDcnVRN5JU-unsplash.jpg',
        price: '$70',
        species: 'Dog',
        description: 'Loves: Bones <br> Hates: Mail men',
        location: 'Westwood'
    },
    {
        title: 'Frank',
        image: './craig-pattenaude-o5LcQ9GkT6A-unsplash.jpg',
        price: '$100',
        species: 'Turtle',
        description: 'Loves: Leafs <br> Hates: Plastic',
        location: 'West Chester'
    },
    {  title: 'James',
        image: './james-wainscoat-yEW23jxVsNI-unsplash.jpg',
        price: '$25',
        species: 'Chicken',
        description: 'Loves: Seeds <br> Hates: KFC',
        location: 'Western Hills'
    },








    
    ]


    var postHTML = " "
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product col-lg-2 my-1 col-md-3 col-sm-6 col-xs-12 petnum' + '"><span><h5>' + shop[i].title + '</h5></span>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p><div class="price">' + shop[i].price + '</div></p>'
        var description = '<p class="species">Species: '+shop[i].species+'</p><p>'+shop[i].description+"</p><p> Location: "+shop[i].location + '</p><a href="./purchase.html"><button type="button" class="btn btn-warning">Buy</button></div></a>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
        
    }
    document.getElementById('market').innerHTML = postHTML
    
      var petcount = document.getElementsByClassName("petnum").length
    
    document.getElementById('petcount').innerHTML = "<h2>We have " +petcount+ " reasons for you to shop with us!</h2>"

    