-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2020 at 04:47 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_p4`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `ClientId` int(11) NOT NULL,
  `ClientName` varchar(100) NOT NULL,
  `Address1` varchar(255) NOT NULL,
  `Address2` varchar(255) DEFAULT NULL,
  `ContactNo` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`ClientId`, `ClientName`, `Address1`, `Address2`, `ContactNo`) VALUES
(1, 'John R. Dempsey', '3352 Emily Renzelli Boulevard', '', '831-621-0342'),
(2, 'Francis B. Mortenson', '4935 Edgewood Avenue', '', '559-266-9449'),
(3, 'Don C. Holman', '51 Francis Mine', '', '530-209-7814'),
(4, 'Jason C. Harris', '3884 Masonic Hill Road', '', '501-523-4148'),
(5, 'Timothy G. Stackhouse', '2852 Sussex Court', '', '254-421-1733');

-- --------------------------------------------------------

--
-- Table structure for table `deliveryperson`
--

CREATE TABLE `deliveryperson` (
  `DriverID` int(11) NOT NULL,
  `DriverName` varchar(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `ContactNumber` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deliveryperson`
--

INSERT INTO `deliveryperson` (`DriverID`, `DriverName`, `Address`, `ContactNumber`) VALUES
(1, 'Michael M. Gross', '2597 Long Street', '352-256-2820'),
(2, 'Tim R. Davies', '3187 Hill Haven Drive', '253-954-6700'),
(3, 'James M. Camp', '4251 Newton Street', '320-375-2872');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `MenuId` int(11) NOT NULL,
  `MenuName` varchar(100) NOT NULL,
  `Price` double NOT NULL,
  `ServingDay` varchar(10) NOT NULL,
  `DateAdded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`MenuId`, `MenuName`, `Price`, `ServingDay`, `DateAdded`) VALUES
(1, 'Special Dumplings (10 pcs)', 3.5, '1', '2020-07-04 22:18:10'),
(2, 'T-Bone Steak', 6.5, '2', '2020-07-04 22:18:10'),
(3, 'Sizzling Porkchop', 5.5, '3', '2020-07-04 22:18:10'),
(4, 'Salisbury Steak', 2.5, '4', '2020-07-04 22:18:10'),
(5, 'Smoked Ham', 4.5, '5', '2020-07-04 22:18:10'),
(6, 'Large Chicken Strip (6pcs)', 5.5, '6', '2020-07-04 22:18:10'),
(7, 'Chicken Wings (1/2 Dozen)', 5.5, '7', '2020-07-04 22:18:10');

-- --------------------------------------------------------

--
-- Table structure for table `orderhistory`
--

CREATE TABLE `orderhistory` (
  `OrderId` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` double NOT NULL,
  `ClientId` int(11) NOT NULL,
  `DriverId` int(11) NOT NULL,
  `DatePlaced` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ClientId`);

--
-- Indexes for table `deliveryperson`
--
ALTER TABLE `deliveryperson`
  ADD PRIMARY KEY (`DriverID`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`MenuId`);

--
-- Indexes for table `orderhistory`
--
ALTER TABLE `orderhistory`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `MenuId` (`MenuId`),
  ADD KEY `ClientId` (`ClientId`),
  ADD KEY `DriverId` (`DriverId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `ClientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `deliveryperson`
--
ALTER TABLE `deliveryperson`
  MODIFY `DriverID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `MenuId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orderhistory`
--
ALTER TABLE `orderhistory`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderhistory`
--
ALTER TABLE `orderhistory`
  ADD CONSTRAINT `orderhistory_ibfk_1` FOREIGN KEY (`MenuId`) REFERENCES `menu` (`MenuId`),
  ADD CONSTRAINT `orderhistory_ibfk_2` FOREIGN KEY (`ClientId`) REFERENCES `client` (`ClientId`),
  ADD CONSTRAINT `orderhistory_ibfk_3` FOREIGN KEY (`DriverId`) REFERENCES `deliveryperson` (`DriverID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
