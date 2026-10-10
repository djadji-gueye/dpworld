# SafeDoc — Maîtrise documentaire HSSE (prototype interactif)

Prototype interactif d'une application de gestion documentaire HSSE : création de documents, versionnage, circuit de validation en 4 étapes, signature de lecture, preuves photos géolocalisées, notifications, tableau de bord et journal d'audit.

Site statique (HTML, CSS, JavaScript), sans build ni dépendance. Les données sont enregistrées dans le navigateur de chaque visiteur (localStorage).

## Comptes

Mot de passe commun : `hsse2026`

| Email | Rôle |
|---|---|
| awa.diop@societe.sn | Rédacteur (Exploitation) |
| moussa.fall@societe.sn | Valideur, supérieur d'Awa |
| fatou.sow@societe.sn | Responsable HSSE |
| ibrahima.ba@societe.sn | Direction (approbation finale) |
| cheikh.ndiaye@societe.sn | Lecteur (Exploitation) |
| mariama.sy@societe.sn | Lecteur (Maintenance) |

Parcours conseillé : Awa crée un document et le soumet, puis Moussa, Fatou et Ibrahima valident à tour de rôle, puis Cheikh signe la lecture.

## Administration

Le compte Direction (ibrahima.ba@societe.sn) accède à l'onglet Administration : gestion des utilisateurs et des rôles, circuit de validation paramétrable (étapes et valideurs) et modèles de documents.

## Application mobile (PWA)

Après la connexion, l'application propose son installation (bouton « Installer » sur Android et ordinateur, mode d'emploi en 3 étapes sur iPhone). Le bouton reste disponible dans l'en-tête sur mobile et dans le menu sur ordinateur. Une fois installée, elle s'ouvre en plein écran et reste consultable sans connexion.

## Tableau de bord et import

Le tableau de bord affiche la répartition des documents par statut et par service. À la création d'un document (ou pour une nouvelle version d'un brouillon), on peut importer un fichier existant (PDF, Word, Excel, image, texte ; 10 Mo max). L'empreinte SHA-256 du fichier est enregistrée et reprise dans la signature de lecture. Les fichiers sont conservés dans le navigateur de l'appareil (IndexedDB), comme le reste des données du prototype.

## Alertes

Les échéances de validité (30 jours) et les signatures en retard (plus de 7 jours) génèrent automatiquement des notifications.

## Exports

L'onglet Documents propose la recherche, le filtre par statut, un export Excel (CSV) et l'impression en PDF.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou : `npx serve .`

## Publier sur GitHub

```bash
git init
git add .
git commit -m "Prototype SafeDoc"
git branch -M main
git remote add origin https://github.com/<utilisateur>/safedoc.git
git push -u origin main
```

## Déployer sur Vercel

1. Sur vercel.com, **Add New → Project**, puis importer le dépôt GitHub.
2. **Framework Preset : Other**. Laisser vides la commande de build et le dossier de sortie.
3. **Deploy**. Chaque `git push` redéploie automatiquement.

## Limites du prototype

- Pas de serveur ni de base de données : les données restent dans le navigateur. Bouton « Réinitialiser » dans l'onglet Journal.
- La connexion est une simple vérification côté navigateur : ne pas y saisir de données réelles ou confidentielles.
- Les notifications sont internes à l'application. Les emails, la connexion avec les comptes de l'entreprise (SSO), la signature certifiée et les exports PDF/Excel ne font pas partie du prototype.
