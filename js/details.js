// ============================================
// TRANSLATIONS FOR DETAILS PAGES
// ============================================
const detailsTranslations = {
    en: {
        // Navigation
        back: "Back",
        home: "Home",
        
        // Film/Show Labels
        director: "Director",
        release_date: "Release Date",
        genre: "Genre",
        cast: "Cast",
        production: "Production",
        distribution: "Distribution",
        screenwriting: "Screenwriting",
        watch_trailer: "Watch Trailer",
        
        // Book Labels
        author: "Author",
        publication_year: "Publication Year",
        language: "Language",
        publisher: "Publisher",
        more_info: "More Information",
        
        // Common Labels
        synopsis: "Synopsis",
        related: "Related Items",
        share: "Share",
        copy_link: "Copy Link",
        
        // Messages
        loading: "Loading...",
        error_title: "Item not found",
        error_message: "The requested item could not be found.",
        back_home: "Back to Home",
        link_copied: "Link copied to clipboard!",
        
        // Categories
        economy: "Economy & Culture",
        environment: "Environment & Culture",
        law: "Law & Culture",
        films: "Films",
        shows: "TV Shows",
        books: "Literature"
    },
    pt: {
        // Navigation
        back: "Voltar",
        home: "Início",
        
        // Film/Show Labels
        director: "Realizador",
        release_date: "Data de Lançamento",
        genre: "Género",
        cast: "Elenco",
        production: "Produção",
        distribution: "Distribuição",
        screenwriting: "Argumento",
        watch_trailer: "Ver Trailer",
        
        // Book Labels
        author: "Autor",
        publication_year: "Ano de Publicação",
        language: "Idioma",
        publisher: "Editora",
        more_info: "Mais Informações",
        
        // Common Labels
        synopsis: "Sinopse",
        related: "Itens Relacionados",
        share: "Partilhar",
        copy_link: "Copiar Link",
        
        // Messages
        loading: "A carregar...",
        error_title: "Item não encontrado",
        error_message: "O item solicitado não foi encontrado.",
        back_home: "Voltar ao Início",
        link_copied: "Link copiado para a área de transferência!",
        
        // Categories
        economy: "Economia & Cultura",
        environment: "Ambiente & Cultura",
        law: "Direito & Cultura",
        films: "Filmes",
        shows: "Séries",
        books: "Literatura"
    },
    fr: {
        // Navigation
        back: "Retour",
        home: "Accueil",
        
        // Film/Show Labels
        director: "Réalisateur",
        release_date: "Date de sortie",
        genre: "Genre",
        cast: "Distribution",
        production: "Production",
        distribution: "Distribution",
        screenwriting: "Scénario",
        watch_trailer: "Voir la bande-annonce",
        
        // Book Labels
        author: "Auteur",
        publication_year: "Année de publication",
        language: "Langue",
        publisher: "Éditeur",
        more_info: "Plus d'informations",
        
        // Common Labels
        synopsis: "Synopsis",
        related: "Articles connexes",
        share: "Partager",
        copy_link: "Copier le lien",
        
        // Messages
        loading: "Chargement...",
        error_title: "Article non trouvé",
        error_message: "L'article demandé n'a pas pu être trouvé.",
        back_home: "Retour à l'accueil",
        link_copied: "Lien copié dans le presse-papiers!",
        
        // Categories
        economy: "Économie & Culture",
        environment: "Environnement & Culture",
        law: "Droit & Culture",
        films: "Films",
        shows: "Séries TV",
        books: "Littérature"
    }
};

// ============================================
// DETAILS MANAGER CLASS - UNIFIED VERSION
// ============================================
class DetailsManager {
    constructor() {
        this.currentItem = null;
        this.allItems = [];
        this.currentLang = localStorage.getItem('tecncool_language') || 'en';
        this.urlParams = this.getUrlParams();
        this.init();
    }

    // Get URL parameters (type, category, id)
    getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        
        return {
            type: urlParams.get('type') || 'films',      // films, shows, books
            category: urlParams.get('category') || 'economy', // economy, environment, law
            id: urlParams.get('id') || null,
            isBook: (urlParams.get('type') || 'films') === 'books'
        };
    }

    init() {
        this.updatePageTranslations();
        this.loadItemDetails();
    }

    updatePageTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (detailsTranslations[this.currentLang] && detailsTranslations[this.currentLang][key]) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = detailsTranslations[this.currentLang][key];
                } else {
                    element.textContent = detailsTranslations[this.currentLang][key];
                }
            }
        });
    }

    // Get JSON file path based on type and category
    getJsonPath() {
        const paths = {
            'economy_films': 'json/data_film_econ.json',
            'economy_shows': 'json/data_shows_econ.json',
            'economy_books': 'json/data_books_econ.json',
            'environment_films': 'json/data_film_envrn.json',
            'environment_shows': 'json/data_shows_envrn.json',
            'environment_books': 'json/data_books_envrn.json',
            'law_films': 'json/data_film_law.json',
            'law_shows': 'json/data_shows_law.json',
            'law_books': 'json/data_books_law.json'
        };
        
        const key = `${this.urlParams.category}_${this.urlParams.type}`;
        return paths[key] || 'json/data_film_econ.json';
    }

    // Get catalog page path for breadcrumbs
    getCatalogPath() {
        const paths = {
            'economy_films': 'economia/econmovies.html',
            'economy_shows': 'economia/econseries.html',
            'economy_books': 'economia/econbooks.html',
            'environment_films': 'ambiente/envmovies.html',
            'environment_shows': 'ambiente/envseries.html',
            'environment_books': 'ambiente/envbooks.html',
            'law_films': 'direito/lawmovies.html',
            'law_shows': 'direito/lawseries.html',
            'law_books': 'direito/lawbooks.html'
        };
        
        const key = `${this.urlParams.category}_${this.urlParams.type}`;
        return paths[key] || 'index.html';
    }

    async loadItemDetails() {
        // Check if ID is provided
        if (!this.urlParams.id) {
            this.showError();
            return;
        }

        try {
            const jsonPath = this.getJsonPath();
            const response = await fetch(jsonPath);
            
            if (!response.ok) {
                throw new Error('Failed to load data');
            }
            
            const data = await response.json();
            this.allItems = data;
            
            // Find the item by ID
            this.currentItem = this.allItems.find(item => item.id == this.urlParams.id);
            
            if (!this.currentItem) {
                this.showError();
                return;
            }
            
            // Render the item
            this.renderItem();
            this.loadRelatedItems();
            
            // Hide loading, show content
            const loadingState = document.getElementById('loadingState');
            const detailsContent = document.getElementById('detailsContent');
            
            if (loadingState) loadingState.classList.add('hidden');
            if (detailsContent) detailsContent.classList.remove('hidden');
            
        } catch (error) {
            console.error('Error loading item:', error);
            this.showError();
        }
    }

    showError() {
        const loadingState = document.getElementById('loadingState');
        const errorState = document.getElementById('errorState');
        const detailsContent = document.getElementById('detailsContent');
        
        if (loadingState) loadingState.classList.add('hidden');
        if (detailsContent) detailsContent.classList.add('hidden');
        if (errorState) errorState.classList.remove('hidden');
    }

    renderItem() {
        if (!this.currentItem) return;

        // Update page title
        document.title = `${this.currentItem.title} | Tec'N'Cool`;

        // Update item title
        const itemTitle = document.getElementById('item-title');
        if (itemTitle) {
            itemTitle.textContent = this.currentItem.title;
        }

        // Update image
        const itemImage = document.getElementById('item-image');
        if (itemImage) {
            itemImage.src = this.currentItem.image || 'imgs/placeholder.jpg';
            itemImage.alt = this.currentItem.title;
        }

        // Update synopsis
        const itemSynopsis = document.getElementById('item-synopsis');
        if (itemSynopsis && this.currentItem.synopsis) {
            itemSynopsis.textContent = this.currentItem.synopsis;
        }

        // Update breadcrumbs
        this.updateBreadcrumbs();

        // Render specific info based on type
        if (this.urlParams.isBook) {
            this.renderBookInfo();
        } else {
            this.renderFilmShowInfo();
        }
    }

    updateBreadcrumbs() {
        if (!this.currentItem) return;

        // Get translated names
        const categoryName = detailsTranslations[this.currentLang][this.urlParams.category] || this.urlParams.category;
        const typeName = detailsTranslations[this.currentLang][this.urlParams.type] || this.urlParams.type;
        
        // Update breadcrumb list
        const breadcrumbList = document.getElementById('breadcrumbList');
        if (breadcrumbList) {
            breadcrumbList.innerHTML = `
                <li><a href="index.html">${detailsTranslations[this.currentLang].home}</a></li>
                <li><a href="${this.getCatalogPath()}">${categoryName} - ${typeName}</a></li>
                <li aria-current="page">${this.currentItem.title}</li>
            `;
        }

        // Also update individual breadcrumb elements if they exist
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        const breadcrumbItem = document.getElementById('breadcrumb-item');
        
        if (breadcrumbCategory) {
            breadcrumbCategory.textContent = `${categoryName} - ${typeName}`;
            breadcrumbCategory.href = this.getCatalogPath();
        }
        
        if (breadcrumbItem) {
            breadcrumbItem.textContent = this.currentItem.title;
        }
    }

    renderFilmShowInfo() {
        // Show film/show info section
        const filmShowInfo = document.getElementById('filmShowInfo');
        const bookInfo = document.getElementById('bookInfo');
        
        if (filmShowInfo) filmShowInfo.classList.remove('hidden');
        if (bookInfo) bookInfo.classList.add('hidden');

        // Director
        const itemDirector = document.getElementById('item-director');
        if (itemDirector && this.currentItem.director) {
            itemDirector.textContent = this.currentItem.director;
        }

        // Release Date
        const itemRelease = document.getElementById('item-release');
        if (itemRelease && this.currentItem.release_date) {
            const date = new Date(this.currentItem.release_date);
            itemRelease.textContent = date.toLocaleDateString(
                this.currentLang === 'pt' ? 'pt-PT' : this.currentLang === 'fr' ? 'fr-FR' : 'en-US'
            );
        }

        // Genre
        const itemGenre = document.getElementById('item-genre');
        if (itemGenre && this.currentItem.genre) {
            itemGenre.textContent = Array.isArray(this.currentItem.genre) 
                ? this.currentItem.genre.join(', ') 
                : this.currentItem.genre;
        }

        // Cast
        const itemCast = document.getElementById('item-cast');
        if (itemCast && this.currentItem.cast) {
            itemCast.textContent = Array.isArray(this.currentItem.cast) 
                ? this.currentItem.cast.join(', ') 
                : this.currentItem.cast;
        }

        // Production
        const itemProduction = document.getElementById('item-production');
        if (itemProduction && this.currentItem.production) {
            itemProduction.textContent = this.currentItem.production;
        }

        // Trailer link
        const itemTrailer = document.getElementById('item-trailer');
        if (itemTrailer && this.currentItem.trailer) {
            itemTrailer.href = this.currentItem.trailer;
            itemTrailer.classList.remove('hidden');
        } else if (itemTrailer) {
            itemTrailer.classList.add('hidden');
        }
    }

    renderBookInfo() {
        // Show book info section
        const filmShowInfo = document.getElementById('filmShowInfo');
        const bookInfo = document.getElementById('bookInfo');
        
        if (filmShowInfo) filmShowInfo.classList.add('hidden');
        if (bookInfo) bookInfo.classList.remove('hidden');

        // Author
        const itemAuthor = document.getElementById('item-author');
        if (itemAuthor && this.currentItem.author) {
            itemAuthor.textContent = this.currentItem.author;
        }

        // Publication Year
        const itemPublicationYear = document.getElementById('item-publication-year');
        if (itemPublicationYear) {
            if (this.currentItem.publication_year) {
                itemPublicationYear.textContent = this.currentItem.publication_year;
            } else if (this.currentItem.publication_date) {
                const date = new Date(this.currentItem.publication_date);
                itemPublicationYear.textContent = date.getFullYear().toString();
            }
        }

        // Language
        const itemLanguage = document.getElementById('item-language');
        if (itemLanguage && this.currentItem.original_language) {
            itemLanguage.textContent = this.currentItem.original_language;
        }

        // Publisher
        const itemPublisher = document.getElementById('item-publisher');
        if (itemPublisher && this.currentItem.publisher) {
            itemPublisher.textContent = this.currentItem.publisher;
        }

        // ISBN
        const itemIsbn = document.getElementById('item-isbn');
        if (itemIsbn && this.currentItem.ISBN) {
            itemIsbn.textContent = this.currentItem.ISBN;
        }

        // More Info link
        const itemMoreInfo = document.getElementById('item-more-info');
        if (itemMoreInfo && this.currentItem.more_info) {
            itemMoreInfo.href = this.currentItem.more_info;
            itemMoreInfo.classList.remove('hidden');
        } else if (itemMoreInfo) {
            itemMoreInfo.classList.add('hidden');
        }
    }

    loadRelatedItems() {
        const relatedContainer = document.getElementById('relatedItems');
        const relatedSection = document.getElementById('relatedSection');
        
        if (!relatedContainer || !this.currentItem) return;

        // Find related items (same genre, excluding current item)
        let related = [];
        
        if (this.currentItem.genre) {
            const currentGenres = Array.isArray(this.currentItem.genre) 
                ? this.currentItem.genre 
                : [this.currentItem.genre];
            
            related = this.allItems.filter(item => {
                if (item.id === this.currentItem.id) return false;
                
                if (item.genre) {
                    const itemGenres = Array.isArray(item.genre) ? item.genre : [item.genre];
                    return currentGenres.some(genre => itemGenres.includes(genre));
                }
                return false;
            });
        }

        // If no related items by genre, just get random items
        if (related.length === 0) {
            related = this.allItems
                .filter(item => item.id !== this.currentItem.id)
                .sort(() => 0.5 - Math.random());
        }

        // Limit to 4 items
        related = related.slice(0, 4);

        // Render related items
        if (related.length > 0) {
            relatedContainer.innerHTML = related.map(item => `
                <div class="related-item" onclick="navigateToItem('${item.id}')">
                    <img src="${item.image || 'imgs/placeholder.jpg'}" alt="${item.title}" loading="lazy">
                    <p class="related-item-title">${item.title}</p>
                </div>
            `).join('');
        } else {
            // Hide related section if no items
            if (relatedSection) {
                relatedSection.style.display = 'none';
            }
        }
    }
}

// ============================================
// SHARE FUNCTIONS
// ============================================
function shareItem(platform) {
    const url = window.location.href;
    const title = document.getElementById('item-title')?.textContent || 'Tec\'N\'Cool';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        default:
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function copyLink() {
    const url = window.location.href;
    
    navigator.clipboard.writeText(url).then(() => {
        const lang = localStorage.getItem('tecncool_language') || 'en';
        alert(detailsTranslations[lang].link_copied);
    }).catch(err => {
        console.error('Error copying link:', err);
    });
}

// ============================================
// NAVIGATION
// ============================================
function navigateToItem(itemId) {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'films';
    const category = urlParams.get('category') || 'economy';
    
    window.location.href = `details.html?type=${type}&category=${category}&id=${itemId}`;
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new DetailsManager();
});

// Update translations when language changes
window.addEventListener('storage', (e) => {
    if (e.key === 'tecncool_language') {
        window.location.reload();
    }
});
