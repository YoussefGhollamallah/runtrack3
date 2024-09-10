$("#resultat").text("Vous avez cliqué sur le bouton !").css("color", "red").hide();

// fonction pour mélanger les enfants d'un élément
$.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
        var $el = $(el);
        var $find = $el.children();
        $find.sort(function() {
            return 0.5 - Math.random();
        });
        $el.empty();
        $find.appendTo($el);
    });
};

// bouton pour mélanger les images dans le deuxième conteneur
$("#shuffleBtn").click(function() {
    $("#secondContainer").shuffleChildren();
});

// Déplacer une image du second conteneur vers le premier
$("#secondContainer").on("click", "img", function() {
  console.log("Image cliquée :", $(this).attr("src"));
  
  // Vérifie si l'image est bien détachée du second conteneur
  var image = $(this).detach();
  console.log("Image détachée :", image.attr("src"));
  
  // Ajoute l'image au premier conteneur
  $("#container").append(image);
  console.log("Image ajoutée au container :", image.attr("src"));
  
  // Vérifie combien d'images sont présentes dans le premier conteneur
  console.log("Nombre d'images dans #container :", $("#container img").length);

  // Si toutes les images sont déplacées, vérifie l'ordre
  if ($("#container img").length === 6) {
      checkOrder();
  }
});

// fonction pour vérifier l'ordre des images
function checkOrder() {
    let images = $("#container");
    let isOrdered = true;
    images.children().each(function(index, img) {
        if ($(img).attr("src") !== "images/arc" + (index + 1) + ".png") {
            isOrdered = false;
        }
    });

    if (isOrdered) {
        $("#resultat").text("Vous avez gagné !").css("color", "green").show();
    } else {
        $("#resultat").text("Vous avez perdu !").css("color", "red").show();
    }
}
