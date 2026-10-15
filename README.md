# SafeDoc — Maîtrise documentaire HSSE (prototype interactif)

Prototype interactif d'une application de gestion documentaire HSSE : création de documents avec métadonnées, versionnage avec nature des changements, circuit de validation en 4 étapes, signature de lecture, évidences (photos géolocalisées, rapports, comptes-rendus, justificatifs), notifications et courriels simulés, tableau de bord avec indicateurs de performance, journal d'audit, et page de conformité au cahier des charges.

Site statique (HTML, CSS, JavaScript), sans build ni dépendance. Les données sont enregistrées dans le navigateur de chaque visiteur (localStorage).

## Navigation

Le menu s'ouvre sur le Tableau de bord, suivi des onglets de l'application (Documents, Lecture, Notifications, Courriels, Journal, Administration). Les onglets propres au prototype (Conformité, Guide) sont regroupés en bas du menu et seront retirés en production.

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

Après la connexion, l'application propose son installation (bouton « Installer » sur Android et ordinateur, mode d'emploi en 3 étapes sur iPhone). Le bouton reste disponible dans l'en-tête sur mobile et dans le menu sur ordinateur. Une fois installée, elle s'ouvre en plein écran. Après une première ouverture avec connexion, elle se rouvre hors ligne (service worker) avec les données de l'appareil ; les exports Excel et la visualisation Word ou Excel demandent une connexion.

## Métadonnées et nature des changements

À la création, on renseigne le propriétaire, la confidentialité (Interne, Restreint, Confidentiel) et des mots-clés ; la fiche affiche la carte Métadonnées (code, type, service, propriétaire, auteur, confidentialité, mots-clés, dates de création et d'émission, version en vigueur, validité). La recherche couvre le code, le titre et les mots-clés. Toute nouvelle version exige une description de la nature des changements ; la carte « Versions et nature des changements » liste date, auteur, description et empreinte de chaque version. Les codes de documents sont uniques.

## Courriels (simulés)

Chaque notification produit le courriel prévu, visible dans l'onglet Courriels (chacun voit les siens, la Direction voit tous les courriels). Aucun message n'est réellement envoyé : en production, l'envoi passe par le serveur de messagerie de DP World.

## Évidences et communications

Une fiche regroupe les photos géolocalisées et des pièces typées (rapport d'intervention, compte-rendu de réunion, document justificatif ; 10 Mo max), horodatées, avec empreinte SHA-256, visualisables dans le lecteur intégré (bouton « Visualiser ») et téléchargeables. La carte Communications permet d'écrire à un service ou à une personne à propos d'un document, et liste l'historique des messages et des courriels liés.

## Indicateurs de performance

Pour le Responsable HSSE et la Direction, le tableau de bord affiche le taux de signature, le délai moyen de validation, les signatures en retard, le taux de rejet, les documents tracés et ceux qui ont des évidences. Le bouton « Relancer les retardataires » envoie un rappel (alerte et courriel) à chaque signataire en retard. Les indicateurs sont calculés sur les données du navigateur.

## Conformité et architecture

L'onglet Conformité présente la couverture du cahier des charges (démontré, simulé), chaque ligne renvoyant à un scénario du guide, l'architecture cible, la sécurité en production, les limites du prototype et les étapes de passage en production.

## Tableau de bord et import

Le tableau de bord affiche la répartition des documents par statut et par service. À la création d'un document (ou pour une nouvelle version d'un brouillon), on peut importer un fichier existant (PDF, Word, Excel, image, texte ; 10 Mo max). L'empreinte SHA-256 du fichier est enregistrée et reprise dans la signature de lecture. Les fichiers sont conservés dans le navigateur de l'appareil (IndexedDB), comme le reste des données du prototype.

## Éditeur de documents

Éditeur intégré (titres, gras, italique, listes, tableaux, liens, annuler/rétablir). Le contenu est nettoyé avant enregistrement et à l'affichage (liste blanche de balises), y compris lors d'un copier-coller. Chaque enregistrement crée une nouvelle version avec son empreinte SHA-256.

## Visualisation, commentaires et historique

Bouton « Visualiser » sur chaque document : lecteur plein écran (PDF, images, documents de l'éditeur ; Word et Excel via mammoth.js et SheetJS chargés à la demande). Filigrane « Copie contrôlée » (nom de l'utilisateur et date) sur les documents publiés, « Document non applicable » sinon, y compris à l'impression. Chaque consultation est tracée dans le journal.
La fiche d'un document affiche l'historique du workflow par cycle (soumission, validations, rejets, publication, signatures, commentaires, délais par étape), les commentaires de décision et une bannière de rejet pour l'auteur. Les notifications de rejet et de validation reprennent un extrait du commentaire.

## Délégation, comparaison et rapport de lecture

Le valideur d'une étape peut la déléguer à un autre utilisateur (tracé dans l'historique, notification au délégué). Le bouton « Comparer » met en évidence les ajouts et suppressions entre la dernière version et la précédente. L'onglet Lecture (Responsable HSSE et Direction) présente, par document publié, un tableau aligné en colonnes (lecteur, service, statut, date de signature) avec le nombre de signatures, et un export Excel.

## Guide de test intégré

L'onglet « Guide » reprend les comptes de test, les 23 scénarios et la fiche de retour. Les testeurs cochent OK / À améliorer / Ne fonctionne pas, saisissent leurs remarques et exportent le tout en Excel (les retours restent dans leur navigateur).

## Aperçu des images

Les images importées (PNG, JPEG, GIF, WebP) s'affichent directement sous la fiche du fichier ; un clic les ouvre en grand dans le lecteur. Les fichiers texte (.txt, .md) sont aussi visualisables.

## Alertes

Les échéances de validité (30 jours) et les signatures en retard (plus de 7 jours) génèrent automatiquement des notifications.

## Exports

L'onglet Documents propose la recherche, le filtre par statut, un export Excel (.xlsx, ou CSV hors connexion) et l'impression en PDF. Les exports Excel sont aussi disponibles pour le rapport de lecture et les indicateurs.

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
- Les notifications sont internes à l'application et les courriels sont simulés (aucun envoi réel). La connexion avec les comptes de l'entreprise (SSO), la signature certifiée, les rappels planifiés côté serveur, le partage de données entre utilisateurs et les rapports PDF générés côté serveur ne font pas partie du prototype.
