-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: mysqldb:3306
-- Generation Time: May 07, 2022 at 10:58 AM
-- Server version: 5.7.37
-- PHP Version: 8.0.15

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
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `SSO` mediumtext,
  `connection` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users_devices`
--

CREATE TABLE `users_devices` (
  `userId` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `routines`
--
ALTER TABLE `routines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

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
-- Constraints for table `routines`
--
ALTER TABLE `routines`
  ADD CONSTRAINT `deviceFK` FOREIGN KEY (`deviceId`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userFK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
