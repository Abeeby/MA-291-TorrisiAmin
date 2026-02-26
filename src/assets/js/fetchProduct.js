/**
 * Récupère les produits depuis le fichier JSON
 * et les affiche dans la page.
 */

// On récupère la référence vers le conteneur HTML
const productList = document.getElementById("product-list");

// On utilise fetch pour charger le fichier JSON
fetch("../data/products.json")
    .then(function (response) {
        // On vérifie que la réponse est OK (code 200)
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des produits");
        }
        // On convertit la réponse en objet JavaScript
        return response.json();
    })
    .then(function (products) {
        // Pour chaque produit, on génère le code HTML
        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            // On construit le HTML d'un article
            const productHTML = `
                <div class="product-item">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p>${product.description}</p>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <a href="#" class="btn">Add to Cart</a>
                    </div>
                </div>
            `;

            // On ajoute le HTML au conteneur
            productList.innerHTML += productHTML;
        }
    })
    .catch(function (error) {
        console.error(error);
        productList.innerHTML = "<p>Impossible de charger les produits.</p>";
    });
