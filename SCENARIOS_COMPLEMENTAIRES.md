# Guide de test SafeDoc : scénarios complémentaires (v1.2)

**13 · Visualiser un document** (Awa Diop) : ouvrez un document, cliquez sur « Visualiser ». Résultat attendu : lecteur plein écran avec filigrane (« Document non applicable » pour un brouillon, « Copie contrôlée » avec votre nom pour un document publié). Importez un PDF ou une image pour le voir s'afficher. Word et Excel nécessitent une connexion. Échap ferme le lecteur.

**14 · Rejet commenté et historique** (Awa Diop, Moussa Fall) : Awa soumet un brouillon ; Moussa le rejette avec un commentaire ; Awa ouvre la notification. Résultat attendu : bannière rouge avec le commentaire, historique du workflow par cycle, commentaire visible à l'étape concernée. Après resoumission, un « Cycle 2 » apparaît et le « Cycle 1 » reste visible.

**15 · Délégation** (Moussa Fall, Fatou Sow) : sur un document en validation, Moussa choisit Fatou Sow et clique « Déléguer cette étape ». Résultat attendu : Fatou reçoit une notification et peut valider ; l'événement apparaît dans l'historique.

**16 · Comparaison de versions** (Awa Diop) : enregistrez une nouvelle version d'un brouillon modifié, cliquez sur « Comparer avec vX ». Résultat attendu : ajouts en vert, suppressions en rouge.

**17 · Rapport de lecture** (Fatou Sow ou Ibrahima Ba) : onglet Lecture. Résultat attendu : par document publié, statut Signé / En attente / En retard de chaque personne du service ; export Excel.

**18 · Métadonnées et nature des changements** (Awa Diop) : créez un document en renseignant propriétaire, confidentialité et mots-clés. Résultat attendu : carte Métadonnées sur la fiche ; une nouvelle version sans nature des changements est refusée ; la carte « Versions et nature des changements » liste chaque version ; la recherche par mot-clé retrouve le document.

**19 · Courriels de notification (simulés)** (Awa Diop, Moussa Fall, Ibrahima Ba) : après une soumission, Moussa ouvre l'onglet Courriels. Résultat attendu : le courriel de validation est listé et s'ouvre au clic ; la Direction voit tous les courriels.

**20 · Rapports, comptes-rendus et justificatifs** (Awa Diop) : joignez une pièce typée à un document. Résultat attendu : elle apparaît avec type, taille, auteur et empreinte, s'ouvre et se télécharge ; l'historique indique « Pièce jointe ».

**21 · Messages entre services** (Moussa Fall, Mariama Sy) : envoyez un message à tout le service Maintenance depuis la carte Communications. Résultat attendu : alerte et courriel côté destinataires ; message visible dans l'historique des communications.

**22 · Indicateurs, relances et export Excel** (Fatou Sow ou Ibrahima Ba) : tableau de bord, indicateurs de performance, « Relancer les retardataires », puis « Exporter (Excel) ». Résultat attendu : rappels dans Courriels ; fichier .xlsx téléchargé (CSV hors connexion).

**23 · Conformité et mode hors ligne** (n'importe lequel) : ouvrez l'onglet Conformité, puis coupez le réseau et rechargez l'application. Résultat attendu : matrice, schéma et limites affichés ; l'application se rouvre hors ligne.
