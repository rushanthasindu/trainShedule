-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2020 at 08:09 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `train`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `shedule` int(11) NOT NULL,
  `date` date NOT NULL,
  `noOfSeats` int(11) NOT NULL,
  `email` varchar(70) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'PENDING'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `shedule`, `date`, `noOfSeats`, `email`, `nic`, `status`) VALUES
(1, 2, '2020-05-30', 10, 'email@g.com', '87524493v', 'PENDING'),
(2, 2, '0000-00-00', 0, 'isuru@gmail.com', '988576247v', 'PENDING'),
(3, 2, '2020-04-17', 1, 'rushan@aia.com', '789657222v', 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `shedule`
--

CREATE TABLE `shedule` (
  `id` int(11) NOT NULL,
  `train` int(11) NOT NULL,
  `day` varchar(30) NOT NULL,
  `start` varchar(30) NOT NULL,
  `end` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shedule`
--

INSERT INTO `shedule` (`id`, `train`, `day`, `start`, `end`, `type`) VALUES
(1, 1, 'MONDAY', 'COLOMBO FORT', 'KANDY', 'EXPRESS'),
(2, 2, 'MONDAY', 'KANDY', 'COLOMBO FORT', 'EXPRESS'),
(3, 2, 'MONDAY', 'COLOMBO FORT', 'JAFNA', 'EXPRESS');

-- --------------------------------------------------------

--
-- Table structure for table `timeslots`
--

CREATE TABLE `timeslots` (
  `id` int(11) NOT NULL,
  `shedule` int(11) NOT NULL,
  `station` varchar(30) NOT NULL,
  `arrival` time NOT NULL,
  `depature` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timeslots`
--

INSERT INTO `timeslots` (`id`, `shedule`, `station`, `arrival`, `depature`) VALUES
(14, 2, 'Colombo Fort', '12:30:00', '12:32:00'),
(15, 2, 'Kandy', '17:25:00', '17:25:00'),
(16, 2, 'MARADARANA', '12:35:00', '12:36:00'),
(17, 2, 'GAMPAHA', '01:00:00', '01:05:00'),
(18, 2, 'MERIGAMA', '01:30:00', '01:32:00'),
(20, 2, 'POLGAHAWELA', '14:00:00', '14:02:00'),
(21, 2, 'RAMBUKKANA', '14:15:00', '14:17:00'),
(22, 1, 'COLOMBO FORT', '13:00:00', '13:02:00'),
(23, 1, 'MARADANA', '13:05:00', '13:07:00'),
(24, 1, 'GAMPAHA', '14:00:00', '14:00:00'),
(25, 1, 'ALAWWA', '15:00:00', '15:02:00'),
(26, 1, 'POLGAHAWELA', '15:10:00', '15:12:00'),
(28, 1, 'KURUNEGALA', '15:30:00', '15:32:00');

-- --------------------------------------------------------

--
-- Table structure for table `train`
--

CREATE TABLE `train` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `noOfBookings` int(11) NOT NULL,
  `state` varchar(20) NOT NULL DEFAULT 'RUNNING'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `train`
--

INSERT INTO `train` (`id`, `name`, `noOfBookings`, `state`) VALUES
(1, 'UDARATA MANIKE', 100, 'RUNNING'),
(2, 'PODI MANIKE', 100, 'RUNNING'),
(3, 'COLOMBO COMMUTER', 0, 'RUNNING'),
(38, 'csdasdasd', 10, 'RUNNING'),
(39, 'csdasdasd', 10, 'RUNNING');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `pass` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `userName`, `pass`) VALUES
(1, 'Isuru Thilakarathne', 'isuru', 'isuru');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shedule` (`shedule`);

--
-- Indexes for table `shedule`
--
ALTER TABLE `shedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `train` (`train`);

--
-- Indexes for table `timeslots`
--
ALTER TABLE `timeslots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shedule` (`shedule`);

--
-- Indexes for table `train`
--
ALTER TABLE `train`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shedule`
--
ALTER TABLE `shedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `timeslots`
--
ALTER TABLE `timeslots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `train`
--
ALTER TABLE `train`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`shedule`) REFERENCES `shedule` (`id`);

--
-- Constraints for table `shedule`
--
ALTER TABLE `shedule`
  ADD CONSTRAINT `shedule_ibfk_1` FOREIGN KEY (`train`) REFERENCES `train` (`id`);

--
-- Constraints for table `timeslots`
--
ALTER TABLE `timeslots`
  ADD CONSTRAINT `timeslots_ibfk_1` FOREIGN KEY (`shedule`) REFERENCES `shedule` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
