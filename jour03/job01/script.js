$("body").css({"background-color" : "red", "display": "flex", "flex-direction": "column", "color": "white" ,"justify-content": "center", "align-items": "center", "height": "100vh", "overflow-y": "hidden"})

let citation = $("<p></p>").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.")


$("#button").hover(function() {
    $(this).css({"background-color": "yellow", "cursor": "pointer"});
} ,function() {
    $(this).css({"font-size": "1rem", "background-color": "blue", "border-radius": "12px", "border":"none", "padding": "10px 15px"});

}
)

$("body").append(citation)

$(document).ready(function(){
    $("#button").click(function(){
        $(citation).toggle(); // Affiche ou cache l'élément
    });
});


