-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 16 Janvier 2019 à 11:52
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE `Author` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Author`
--

INSERT INTO `Author` (`Id`, `FirstName`, `LastName`) VALUES
(1, 'Denis', 'Brogniart'),
(2, 'Jean', 'Pierre');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Category`
--

INSERT INTO `Category` (`Id`, `Name`) VALUES
(1, 'film'),
(2, 'Voyage'),
(3, 'Livre'),
(4, 'Nature'),
(5, 'Société');

-- --------------------------------------------------------

--
-- Structure de la table `Comment`
--

CREATE TABLE `Comment` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(100) NOT NULL,
  `Content` text NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Post_Id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Comment`
--

INSERT INTO `Comment` (`Id`, `Pseudo`, `Content`, `CreationDate`, `Post_Id`) VALUES
(1, 'dgfsg', 'dfsgdfsg', '2019-01-10 11:54:57', 9),
(2, 'dfh', 'dfsh', '2019-01-10 11:55:57', 9),
(3, ' hgfdhsdfh', 'dfshdfh', '2019-01-10 11:57:45', 9),
(4, 'gfhdfg', 'gfdhdgfhdf', '2019-01-10 12:09:41', 9),
(5, 'dfsgsdfg', 'dfsggdfsgs', '2019-01-10 12:11:58', 8),
(6, 'fdgdf', 'gdfgdf', '2019-01-10 14:27:12', 8),
(7, 'gfdsg', 'dfsgsdgf', '2019-01-10 14:35:44', 10),
(8, 'Jm', 'J\'adore ton article !', '2019-01-10 16:32:06', 13),
(9, 'Denis', 'Merci !', '2019-01-10 16:32:16', 13);

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `Id` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Content` text NOT NULL,
  `Author_Id` int(10) NOT NULL,
  `Category_Id` int(10) NOT NULL,
  `CreationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Post`
--

INSERT INTO `Post` (`Id`, `Title`, `Content`, `Author_Id`, `Category_Id`, `CreationDate`) VALUES
(13, 'Mon premier Article', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus id erat non condimentum. Nunc id est ut orci faucibus pulvinar. In pulvinar tellus aliquet, rhoncus dui luctus, semper metus. Donec malesuada id quam eget maximus. Fusce commodo mollis nulla ac tincidunt. Nullam feugiat ultrices mauris, sed tincidunt elit imperdiet a. Sed tortor quam, vestibulum nec varius non, lacinia vitae lacus.\r\n\r\nMorbi consequat, libero non imperdiet vestibulum, nulla augue tempus dui, eu fringilla purus tellus ac libero. Nullam feugiat lorem sit amet massa accumsan, eget sodales diam cursus. Pellentesque varius hendrerit cursus. Mauris sit amet metus nec nisi gravida maximus. Aliquam commodo consectetur neque, non condimentum lectus malesuada in. Cras facilisis bibendum lacus a tristique. Ut lobortis nulla eu nulla convallis, sit amet consectetur felis consectetur. Proin quis consectetur nisi. Curabitur condimentum dui et lacinia aliquam. Maecenas tellus mauris, vulputate at pharetra eu, accumsan id leo. Suspendisse a risus nisl. Nam accumsan ultrices eleifend.\r\n\r\nNullam ornare finibus sodales. Duis ultricies tortor et dui porta, vitae pellentesque sapien pellentesque. Praesent finibus fermentum sem, ac hendrerit velit vehicula in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu mi elementum, elementum ex id, rhoncus sem. Duis ultrices id purus ac dapibus. Donec dui nisl, interdum id enim sed, vestibulum feugiat urna. Sed pulvinar enim libero. Donec dapibus dolor at rutrum varius. Sed feugiat metus eget velit sagittis scelerisque. Maecenas at condimentum lectus.\r\n\r\nMaecenas in luctus purus. Maecenas scelerisque orci nec volutpat pretium. Nulla maximus tempor faucibus. Proin dictum justo molestie nisi efficitur facilisis. Proin purus lorem, cursus non varius vitae, porttitor non turpis. Donec in diam faucibus, tincidunt ex a, ullamcorper lorem. Proin consequat nisi vitae augue tincidunt, vel varius felis lacinia. Suspendisse tellus leo, facilisis at gravida at, vestibulum in nisl. Etiam at imperdiet risus. Aliquam imperdiet scelerisque aliquet. Sed aliquet erat tellus, eu lacinia velit venenatis eu. Aliquam sit amet urna egestas, aliquet justo ac, imperdiet dolor. Vivamus vestibulum convallis posuere. Nulla at enim eu eros malesuada suscipit.\r\n\r\nPellentesque auctor ipsum risus. Etiam quis orci at nunc rhoncus volutpat. Vestibulum non arcu nec enim mattis ornare. Nunc vulputate non nisl non sagittis. Pellentesque ex est, consectetur sed quam ac, sollicitudin blandit velit. Integer ut augue feugiat, sagittis ipsum id, semper turpis. Pellentesque rhoncus volutpat ligula eget finibus. Cras at est arcu. Maecenas commodo orci felis. Proin viverra elit tellus, sit amet consequat sem tristique in. Mauris dignissim venenatis lorem, et tincidunt metus pulvinar a.', 1, 1, '2019-01-10 16:31:45');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `mail` varchar(40) NOT NULL,
  `password` varchar(120) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `nickName` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `mail`, `password`, `lastName`, `firstName`, `nickName`, `role`) VALUES
(9, 'root@root.fr', '$2y$11$eea5c3d12cb913e277b86egRY1ng4FCGUomjaaw7BrtfgMm1NmG2O', 'Marchand', 'Jean-Marie', 'jmlebgdu94', 'admin'),
(11, 'test@test.fr', '$2y$11$2fda4cadc77ddc0d39f8fuz74pNT8EFKny6jQyVOyZgSjvhiU34hK', 'a', 'a', 'a', 'user');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Author`
--
ALTER TABLE `Author`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Author`
--
ALTER TABLE `Author`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
