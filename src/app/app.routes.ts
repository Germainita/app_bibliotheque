import { Routes } from '@angular/router';
import { AccueilComponent } from './Composants/Visiteurs/accueil/accueil.component';
import { ConnexionComponent } from './Composants/Visiteurs/connexion/connexion.component';
import { InscriptionComponent } from './Composants/Visiteurs/inscription/inscription.component';
import { AccueilMembreComponent } from './Composants/Membres/accueil-membre/accueil-membre.component';
import { CategorieComponent } from './Composants/Administration/categorie/categorie.component';
import { MembresComponent } from './Composants/Administration/membres/membres.component';
import { LivreComponent } from './Composants/Administration/livre/livre.component';
import { LivreEmpruntesComponent } from './Composants/Administration/livre-empruntes/livre-empruntes.component';
import { AuthAdministrationGuard } from './Guard/administration.guard';
import { AuthMembreGuard } from './Guard/membre.guard';

export const routes: Routes = [
    {path:"", redirectTo:"visiteur", pathMatch: 'full'},
    {path: "visiteur", component: AccueilComponent },
    {path: "connexion", component: ConnexionComponent },
    {path: "inscription", component: InscriptionComponent },
    {path: "*", component: AccueilComponent },
    
    // Routes pour les membres 
    {path: "accuelMembre", component: AccueilMembreComponent, canActivate:[AuthMembreGuard] },
    
    // Routes pour le personnel et l'admin 
    {path: "membres", component: MembresComponent,  canActivate:[AuthAdministrationGuard]},
    {path: "livres", component: LivreComponent, canActivate:[AuthAdministrationGuard] },
    {path: "categories", component: CategorieComponent, canActivate:[AuthAdministrationGuard] },
    {path: "emprunts", component: LivreEmpruntesComponent, canActivate:[AuthAdministrationGuard] },    
];
