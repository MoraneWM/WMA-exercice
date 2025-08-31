import { Challenge } from './types';

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    scenario: "Un utilisateur essaie de s'inscrire avec une adresse e-mail qui est déjà utilisée dans votre base de données.",
    guidance: "Pensez à la psychologie de l'utilisateur : il ne se souvient peut-être pas de son compte. Aidez-le au lieu de le blâmer.",
    illustration: "EmailConflictImage",
    prompt: "Rédigez un message d'erreur qui est clair, non accusateur, et qui propose une solution directe.",
    placeholder: "Ex: Cet e-mail est déjà pris...",
    feedback: {
      principle: "Un bon message d'erreur est une aide, pas un blocage. Il doit être clair, empathique et orienter l'utilisateur vers la solution (ici, se connecter).",
      examples: [
        "Cet e-mail est déjà associé à un compte. Voulez-vous vous connecter ?",
        "On dirait que vous avez déjà un compte. Essayez de vous connecter ou utilisez un autre e-mail."
      ]
    }
  },
  {
    id: 2,
    scenario: "Un utilisateur arrive sur son tableau de bord pour la toute première fois. La liste de ses projets est vide.",
    guidance: "Votre but est de transformer un espace vide en une invitation à l'action. Soyez positif et directif.",
    illustration: "EmptyDashboardImage",
    prompt: "Écrivez un message d'accueil pour cet 'état vide' qui motive l'utilisateur à créer son premier projet.",
    placeholder: "Bienvenue ! Pour commencer...",
    feedback: {
      principle: "L'état vide est une opportunité. Accueillez, montrez la valeur du produit et guidez l'utilisateur vers la première action clé avec un appel à l'action clair et enthousiaste.",
      examples: [
        "Prêt à donner vie à vos idées ? Créez votre premier projet pour commencer.",
        "Votre espace de travail est prêt. Cliquez sur 'Nouveau projet' et que la magie opère !"
      ]
    }
  },
  {
    id: 3,
    scenario: "Un utilisateur vient de s'abonner avec succès à votre newsletter depuis un formulaire.",
    guidance: "La confirmation est un micro-moment de réjouissance. Soyez bref, chaleureux, et confirmez la valeur de l'inscription.",
    illustration: "NewsletterSuccessImage",
    prompt: "Rédigez le court message de confirmation qui s'affiche juste après son inscription. Soyez chaleureux et informatif.",
    placeholder: "Merci pour votre inscription !",
    feedback: {
      principle: "Confirmez immédiatement le succès de l'action pour rassurer l'utilisateur. Profitez-en pour renforcer le lien et gérer les attentes (que va-t-il se passer ensuite ?).",
      examples: [
        "C'est noté ! Bienvenue au club. Surveillez votre boîte de réception pour nos prochaines astuces.",
        "Inscription confirmée ! Vous recevrez bientôt notre première newsletter. Pensez à vérifier vos spams au cas où."
      ]
    }
  },
  {
    id: 4,
    scenario: "Une modale demande à l'utilisateur de confirmer la suppression définitive de son compte.",
    guidance: "Le mot doit être si explicite qu'il n'y a aucun doute possible. Utilisez un verbe d'action fort.",
    illustration: "DeleteConfirmationImage",
    prompt: "Quel texte mettriez-vous sur le bouton de confirmation pour être certain que l'utilisateur comprend que l'action est irréversible ?",
    placeholder: "Texte du bouton de confirmation",
    feedback: {
      principle: "Pour les actions destructrices, le texte du bouton doit être un verbe d'action spécifique, pas un vague 'OK' ou 'Oui'. La clarté prime pour éviter les erreurs catastrophiques.",
      examples: [
        "Supprimer mon compte définitivement",
        "Oui, supprimer mon compte",
        "Je confirme la suppression"
      ]
    }
  },
  {
    id: 5,
    scenario: "Vous concevez un site de recettes de cuisine avec une barre de recherche en haut de page.",
    guidance: "Le placeholder est une mini-conversation. Anticipez les besoins de l'utilisateur et inspirez-le.",
    illustration: "SearchInspirationImage",
    prompt: "Écrivez un texte d'aide (placeholder) qui soit à la fois utile et inspirant pour guider la recherche de l'utilisateur.",
    placeholder: "Rechercher...",
    feedback: {
      principle: "Le placeholder est plus qu'une simple étiquette. Il peut guider, donner des exemples et refléter la personnalité de la marque pour rendre l'expérience plus engageante.",
      examples: [
        "Rechercher une recette, un ingrédient...",
        "Ex: Gâteau au chocolat, lasagnes, cuisine thaï",
        "Que souhaitez-vous cuisiner aujourd'hui ?"
      ]
    }
  }
];