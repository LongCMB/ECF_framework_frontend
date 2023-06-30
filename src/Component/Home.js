import React, { } from "react";

function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">ECF_Citations</h1>
                        <div className="backend my-3 py-3">
                            <p><strong>1. Backend (Laravel)</strong></p>
                            <p>
                                Le backend, développé avec le framework Laravel, est responsable de la logique métier et de la gestion des opérations CRUD (Create, Read, Update, Delete) sur les données.
                                Au début du projet, deux modèles de base de données ont été créés pour 'Citations' et 'Authors' avec la commande php artisan make:model -m.
                                Le modèle 'Citations' inclut une clé étrangère 'author-id' pour établir une relation avec le modèle 'Authors'.
                                Ensuite, pour générer des données factices pour le développement et le test, nous avons utilisé des usines (factories) et des graines (seeders).
                                Deux contrôleurs 'AuthorController' et 'CitationController' ont été créés avec php artisan make:controller --resource pour gérer la logique métier associée à ces modèles.
                                Les vues ont été créées pour fournir une interface utilisateur pour les fonctionnalités CRUD.
                                Enfin, les routes nécessaires ont été ajoutées aux fichiers de routes web et API pour gérer les requêtes entrantes.
                            </p>
                            <p>
                                L'application suit l'architecture <strong>Modèle-Vue-Contrôleur (MVC)</strong>, qui divise l'application en trois parties interconnectées : le Modèle (représentant les données et les règles métier), la Vue (représentant la présentation et l'interface utilisateur) et le Contrôleur (gérant les interactions utilisateur et les mises à jour du modèle).
                            </p>
                            <a href="https://github.com/LongCMB/ECF_framework_backend.git">SourceCode sur Github</a>
                        </div>
                        <div className="frontend my-3 py-3">
                            <p><strong>2. Frontend (React)</strong></p>
                            <p>
                                Le front-end, conçu en React, fournit l'interface utilisateur de l'application. Il permet aux utilisateurs de voir et d'interagir avec les données fournies par l'API du back-end.
                            </p>
                            <a href="https://github.com/LongCMB/ECF_framework_frontend.git">SourceCode sur Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;