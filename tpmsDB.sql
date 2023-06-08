-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 08 juin 2023 à 20:47
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tpms`
--

-- --------------------------------------------------------

--
-- Structure de la table `bisnessinfos`
--

DROP TABLE IF EXISTS `bisnessinfos`;
CREATE TABLE IF NOT EXISTS `bisnessinfos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(60) NOT NULL,
  `value` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `bisnessinfos`
--

INSERT INTO `bisnessinfos` (`id`, `type`, `value`) VALUES
(1, 'Tél : ', '01 64 42 98 30'),
(2, 'Mail : ', 'contact@tpms.fr'),
(3, 'Adresse : ', 'ZAC du closeau 9 rue Louis Armand,'),
(4, 'Ville : ', 'Tournan en brie, 77220'),
(5, 'Projets réalisés : ', '306'),
(6, 'Clients : ', '92'),
(7, 'Machines de chantiers : ', '8');

-- --------------------------------------------------------

--
-- Structure de la table `qualities`
--

DROP TABLE IF EXISTS `qualities`;
CREATE TABLE IF NOT EXISTS `qualities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` varchar(350) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `qualities`
--

INSERT INTO `qualities` (`id`, `title`, `description`) VALUES
(1, 'Experts', 'Chaque problématique a sa solution. Nous mettons tout notre savoir-faire à votre service pour vous apporter la bonne réponse.'),
(2, 'Réactifs et polyvalents', 'Nos équipes interviennent de jour comme de nuit sur vos chantiers selon les demandes et besoin. Notre expérience nous a amenés à affronter différentes problématiques que nous avons su gérer pour la réussite de la mission. Nous sommes habitués à gérer l’urgence, les situations délicates nécessitant un savoir-faire particulier.'),
(3, 'Polyvalents', 'Nous mettons à votre disposition nos compétences multiples pour que de l\'étude à la finalisation de vos projets vous ne traitiez qu\'avec un seul interlocuteur.'),
(4, 'Environnement', 'Nous nous engageons à réduire notre impact sur la planète en optimisant l’organisation de nos chantiers (tri et évacuation de nos déchets vers les structures adéquates).'),
(5, 'Passe-partout', 'Grâce à notre savoir-faire, nous intervenons sur tous les terrains, qu’ils soient urbains, ruraux, accidentés ou forestiers.'),
(6, 'Étude des sols et reconnaissance de fondations ', 'Nous accompagnons les bureaux d’études dans des missions délicates environnementales mais aussi urbaines : voirie et réseaux divers.'),
(7, 'Citernage', 'Besoin d’eau dans un endroit perdu dans la campagne, en plein champ ou au milieu d’une forêt ? Nous avons la solution et nous vous l’apportons à l’endroit même de votre chantier.'),
(8, 'Repérage dans les réseaux', 'Passage d’une caméra dans les réseaux de tuyaux d’eau pour repérer les fuites éventuelles.');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `level`) VALUES
(1, 'tpms_admin', 0),
(2, 'tpms_user', 5);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `mdp` varchar(535) NOT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mdp`, `role_id`) VALUES
(1, 'maintenance_admin', 'tpms.maintenance.admin@gmail.com', '$2b$10$CdRl4ZygZJLgd9hA0tzS1O5YYMUJ0gW4vjKehsAzvaMLCIL1YC1fi', 1),
(2, 'visitor_admin', 'tpms.visitor.admin@gmail.com', '$2b$10$CdRl4ZygZJLgd9hA0tzS1O5YYMUJ0gW4vjKehsAzvaMLCIL1YC1fi', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
