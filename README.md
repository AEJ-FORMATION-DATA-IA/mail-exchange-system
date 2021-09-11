# MAIL EXCHANGE SYSTEM
<p>Vous êtes amenés à créer un système d’envoie de mail (SMTP).</p>
<p>Les mails doivent être stockés dans une base de données de type relationnel (MySQL).</p>
<br><br>
### <h5>Contraintes:</h5>
<ul>
<li>Possibilité d’ajouter un “CC” et/ou un “CCI”;</li>
<li>L’adresse email doit être valide et exister. (Par ex. l’adresse email “test@test.com” est valide mais n’existe pas) (Voir doc API Gmail, Yahoo, etc) en temps réel;</li>
<li>Le champ de saisi du message doit être de type WYSIWYG (What You See Is What You Get);</li>
<li>Ne peuvent envoyer des mails que ceux/celles qui sont connecté(e)s;</li>
<li>Un administrateur doit pouvoir avoir accès à toute l’historique des mails (sans distinction), et les supprimer éventuellement;</li>
<li>L’utilisateur qui envoie un mail peut voir l’historique des mails qu’il a envoyés;</li>
<li>Un mail supprimé est automatiquement enregistré dans une corbeille pour un délai maximal de 3 jours;</li>
<li>Seuls les utilisateurs en droit de voter en Côte d’Ivoire peuvent utiliser le système;</li>
</ul>
### <h5>Détails Annexes:</h5>
	<pre>Ce système nous a été demandé par une entreprise américaine.</pre>
<br>
### <h5>Conduite à tenir:</h5>
<ul>	
<li>Vous utiliserez la stack technologique suivante: HTML/CSS, JavaScript et Node</li>
<li>Vous créerez un panel d’administration pour l’administrateur.</li>
<li>Vous créerez un tableau de bord pour l’utilisateur.</li>
</ul>

### <h5>A PROSCRIRE:</h5> <br>
-BootStrap

## COMMENT DEMARRER LE PROJET ?
 `- git clone https://github.com/AEJ-FORMATION-DATA-IA/mail-exchange-system.git` <br>
 `- cd mail-exchange-system` <br>
 `- npm install # (or npm i)` <br>
 `- npm run dev`
