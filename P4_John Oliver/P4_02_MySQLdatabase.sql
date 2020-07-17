-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2020 at 11:06 PM
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
  `ContactNo` varchar(25) DEFAULT NULL,
  `EmailAddress` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`ClientId`, `ClientName`, `Address1`, `Address2`, `ContactNo`, `EmailAddress`) VALUES
(1, 'John R. Dempsey', '3352 Emily Renzelli Boulevard', '', '831-621-0342', 'john.r.dempsey@hotmail.com'),
(2, 'Francis B. Mortenson', '4935 Edgewood Avenue', '', '559-266-9449', 'fb.mortenson@yahoo.om'),
(3, 'Don C. Holman', '51 Francis Mine', '', '530-209-7814', 'holmandc@gmail.com'),
(4, 'Jason C. Harris', '3884 Masonic Hill Road', '', '501-523-4148', 'jasoncharris@outlook.com'),
(5, 'Timothy G. Stackhouse', '2852 Sussex Court', '', '254-421-1733', 'timgstackhouse@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `deliveryperson`
--

CREATE TABLE `deliveryperson` (
  `DriverID` int(11) NOT NULL,
  `DriverName` varchar(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `ContactNumber` varchar(16) NOT NULL,
  `EmailAddress` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deliveryperson`
--

INSERT INTO `deliveryperson` (`DriverID`, `DriverName`, `Address`, `ContactNumber`, `EmailAddress`) VALUES
(1, 'Michael M. Gross', '2597 Long Street', '352-256-2820', 'mmgross@gmail.com'),
(2, 'Tim R. Davies', '3187 Hill Haven Drive', '253-954-6700', 'trdavies@gmail.com'),
(3, 'James M. Camp', '4251 Newton Street', '320-375-2872', 'james.camp@outlook.com');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `MenuId` int(11) NOT NULL,
  `MenuName` varchar(100) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `ServingDay` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') DEFAULT NULL,
  `MenuType` enum('Main Dish','Dessert','N/A') DEFAULT NULL,
  `DateAdded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`MenuId`, `MenuName`, `Price`, `ServingDay`, `MenuType`, `DateAdded`) VALUES
(1, 'Special Dumplings (10 pcs)', '4.00', 'Monday', 'Main Dish', '2020-07-04 22:18:10'),
(2, 'T-Bone Steak', '7.00', 'Tuesday', 'Main Dish', '2020-07-04 22:18:10'),
(3, 'Sizzling Porkchop', '6.00', 'Wednesday', 'Main Dish', '2020-07-04 22:18:10'),
(4, 'Salisbury Steak', '3.00', 'Thursday', 'Main Dish', '2020-07-04 22:18:10'),
(5, 'Smoked Ham', '5.00', 'Friday', 'Main Dish', '2020-07-04 22:18:10'),
(6, 'Large Chicken Strip (6pcs)', '6.00', 'Saturday', 'Main Dish', '2020-07-04 22:18:10'),
(7, 'Chicken Wings (1/2 Dozen)', '6.00', 'Sunday', 'Main Dish', '2020-07-04 22:18:10'),
(8, 'Sweet and Sour Pork (250 g)', '4.00', 'Monday', 'Main Dish', '2020-07-09 21:59:35'),
(9, 'Smoked Spareribs (250g)', '4.00', 'Tuesday', 'Main Dish', '2020-07-09 21:59:35'),
(10, 'Fried Sliced Fish (500g)', '4.00', 'Wednesday', 'Main Dish', '2020-07-09 21:59:35'),
(11, 'Meat Loaf (250g)', '4.00', 'Thursday', 'Main Dish', '2020-07-09 21:59:35'),
(12, 'Deep Fried Shrimp (500g)', '4.00', 'Friday', 'Main Dish', '2020-07-09 21:59:35'),
(13, 'Beef with Oyster Sauce (500g)', '6.00', 'Saturday', 'Main Dish', '2020-07-09 21:59:35'),
(14, 'Deep Fried Spicy Pork (500g)', '7.00', 'Sunday', 'Main Dish', '2020-07-09 21:59:35'),
(15, 'Tiramusu (250g)', '2.50', 'Monday', 'Dessert', '2020-07-09 22:08:04'),
(16, 'Chocolate Mousse in minutes (250g)', '2.50', 'Monday', 'Dessert', '2020-07-09 22:08:04'),
(17, 'Angel Food cake(250g)', '2.50', 'Tuesday', 'Dessert', '2020-07-09 22:08:04'),
(18, 'Apple and butterscotch pie (250g)', '2.50', 'Tuesday', 'Dessert', '2020-07-09 22:08:04'),
(19, 'Almond and date cake(250g)', '2.50', 'Wednesday', 'Dessert', '2020-07-09 22:08:04'),
(20, 'Apple Cinnamon custard cake (250g)', '2.75', 'Wednesday', 'Dessert', '2020-07-09 22:08:04'),
(21, 'Maltesers Tiramisu (250g)', '2.75', 'Thursday', 'Dessert', '2020-07-09 22:08:04'),
(22, 'Choc a bloc (250g)', '2.75', 'Thursday', 'Dessert', '2020-07-09 22:08:04'),
(23, 'Amaretto tart (250g)', '2.75', 'Friday', 'Dessert', '2020-07-09 22:08:04'),
(24, 'After-dinner mints (250g)', '2.75', 'Friday', 'Dessert', '2020-07-09 22:08:04'),
(25, 'Chocolate baubles (250g)', '3.00', 'Saturday', 'Dessert', '2020-07-09 22:08:04'),
(26, 'Banana split (250g)', '3.00', 'Saturday', 'Dessert', '2020-07-09 22:08:04'),
(27, 'Napoleon (250g)', '3.00', 'Sunday', 'Dessert', '2020-07-09 22:08:04'),
(28, 'Mocha log (250g)', '3.00', 'Sunday', 'Dessert', '2020-07-09 22:08:04');

-- --------------------------------------------------------

--
-- Table structure for table `orderhistory`
--

CREATE TABLE `orderhistory` (
  `OrderId` int(11) NOT NULL,
  `MenuId` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `ClientId` int(11) NOT NULL,
  `DriverId` int(11) NOT NULL,
  `StatusId` enum('Placed','Accepted','Preparing','Delivery','Delivered','Cancelled') DEFAULT NULL,
  `DatePlaced` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderhistory`
--

INSERT INTO `orderhistory` (`OrderId`, `MenuId`, `Quantity`, `ClientId`, `DriverId`, `StatusId`, `DatePlaced`) VALUES
(1, 1, 2, 1, 1, 'Placed', '2020-07-05 17:56:10'),
(2, 2, 2, 2, 2, 'Preparing', '2020-07-05 18:04:59'),
(3, 3, 2, 3, 1, 'Accepted', '2020-07-09 22:10:17');

-- --------------------------------------------------------

--
-- Stand-in structure for view `ordertracker`
-- (See below for the actual view)
--
CREATE TABLE `ordertracker` (
`OrderId` int(11)
,`MenuName` varchar(100)
,`Quantity` int(11)
,`Price` decimal(10,2)
,`Total Price` decimal(20,2)
,`Menu Type` enum('Main Dish','Dessert','N/A')
,`ClientName` varchar(100)
,`DriverName` varchar(100)
,`Order Status` enum('Placed','Accepted','Preparing','Delivery','Delivered','Cancelled')
,`Date Placed` datetime
);

-- --------------------------------------------------------

--
-- Structure for view `ordertracker`
--
DROP TABLE IF EXISTS `ordertracker`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ordertracker`  AS  select `orderhistory`.`OrderId` AS `OrderId`,`m`.`MenuName` AS `MenuName`,`orderhistory`.`Quantity` AS `Quantity`,`m`.`Price` AS `Price`,`m`.`Price` * `orderhistory`.`Quantity` AS `Total Price`,`m`.`MenuType` AS `Menu Type`,`c`.`ClientName` AS `ClientName`,`d`.`DriverName` AS `DriverName`,`orderhistory`.`StatusId` AS `Order Status`,`orderhistory`.`DatePlaced` AS `Date Placed` from (((`orderhistory` join `menu` `m` on(`orderhistory`.`MenuId` = `m`.`MenuId`)) join `deliveryperson` `d` on(`d`.`DriverID` = `orderhistory`.`DriverId`)) join `client` `c` on(`c`.`ClientId` = `orderhistory`.`ClientId`)) order by `orderhistory`.`OrderId` ;

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
  MODIFY `MenuId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `orderhistory`
--
ALTER TABLE `orderhistory`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
