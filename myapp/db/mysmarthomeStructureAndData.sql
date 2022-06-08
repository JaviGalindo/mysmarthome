-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: mysqldb:3306
-- Generation Time: May 22, 2022 at 12:05 PM
-- Server version: 5.7.38
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysmarthome`
--
USE `mysmarthome`;

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `roomId` int(11) DEFAULT NULL,
  `providerId` int(11) DEFAULT NULL,
  `config` json DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `name`, `roomId`, `providerId`, `config`, `active`) VALUES
(2, 'Camera', 6, 3, '{\"type\": [\"Email\", \"Push\", \"All\"], \"active\": \"boolean\", \"detection\": [\"Human\", \"All\"], \"timeRange\": \"string\", \"subscription\": \"PushSubscription\"}', 1),
(3, 'Plug 1', NULL, 1, NULL, 1),
(4, 'Camera Garden', 6, 1, NULL, 0),
(5, 'Strip Lights', 4, 1, NULL, 1),
(6, 'Doorbell', 7, 1, NULL, 1),
(7, 'Bulb', NULL, 2, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL,
  `config` json DEFAULT NULL,
  `subscriptionAuth` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `userId`, `deviceId`, `config`, `subscriptionAuth`) VALUES
(1, 1, 2, '{\"type\": \"All\", \"active\": true, \"detection\": \"All\", \"timeRange\": \"\"}', '-urI8x5_4q1ccuS7pLCO5Q');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `SSO` mediumtext,
  `connection` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`id`, `name`, `SSO`, `connection`) VALUES
(1, 'Amazon', NULL, NULL),
(2, 'Google', NULL, NULL),
(3, 'Local', NULL, 'http://192.168.0.38:9000');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `name`) VALUES
(2, 'Studio'),
(4, 'Living room'),
(5, 'Landinsg'),
(6, 'Garden'),
(7, 'Front Door'),
(8, 'my room');

-- --------------------------------------------------------

--
-- Table structure for table `routines`
--

CREATE TABLE `routines` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `schedule` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userNotifications`
--

CREATE TABLE `userNotifications` (
  `id` int(11) NOT NULL,
  `notificationId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `active`) VALUES
(1, 'Admin', 'email@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users_devices`
--

CREATE TABLE `users_devices` (
  `userId` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_devices`
--

INSERT INTO `users_devices` (`userId`, `deviceId`) VALUES
(1, 2),
(1, 3),
(1, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomFK` (`roomId`),
  ADD KEY `providerFK` (`providerId`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userIdFK` (`userId`),
  ADD KEY `deviceIdFK` (`deviceId`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `routines`
--
ALTER TABLE `routines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deviceFK` (`deviceId`),
  ADD KEY `userFK` (`userId`);

--
-- Indexes for table `userNotifications`
--
ALTER TABLE `userNotifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notificationIdFK` (`notificationId`),
  ADD KEY `userNotificationsFK` (`userId`),
  ADD KEY `deviceNotificationsFK` (`deviceId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_devices`
--
ALTER TABLE `users_devices`
  ADD PRIMARY KEY (`userId`,`deviceId`),
  ADD KEY `deviceId` (`deviceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `routines`
--
ALTER TABLE `routines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userNotifications`
--
ALTER TABLE `userNotifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `providerFK` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `roomFK` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `deviceIdFK` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userIdFK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `routines`
--
ALTER TABLE `routines`
  ADD CONSTRAINT `deviceFK` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userFK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userNotifications`
--
ALTER TABLE `userNotifications`
  ADD CONSTRAINT `deviceNotificationsFK` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notificationIdFK` FOREIGN KEY (`notificationId`) REFERENCES `notifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userNotificationsFK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_devices`
--
ALTER TABLE `users_devices`
  ADD CONSTRAINT `deviceId` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
