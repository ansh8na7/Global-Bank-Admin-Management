CREATE DATABASE `bankdb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

use bankdb;

CREATE TABLE `account_master` (
  `account_number` varchar(6) NOT NULL,
  `customer_number` varchar(6) DEFAULT NULL,
  `branch_id` varchar(6) NOT NULL,
  `opening_balance` int DEFAULT NULL,
  `account_opening_date` date DEFAULT NULL,
  `account_type` varchar(10) DEFAULT NULL,
  `account_status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`account_number`),
  KEY `fk_account_master_branch_master_idx` (`branch_id`) /*!80000 INVISIBLE */,
  KEY `fk_account_master_customer_master1_idx` (`customer_number`),
  CONSTRAINT `fk_account_master_branch_master` FOREIGN KEY (`branch_id`) REFERENCES `branch_master` (`branch_id`),
  CONSTRAINT `fk_account_master_customer_master1` FOREIGN KEY (`customer_number`) REFERENCES `customer_master` (`customer_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `branch_master` (
  `branch_id` varchar(6) NOT NULL,
  `branch_name` varchar(30) DEFAULT NULL,
  `branch_city` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `customer_master` (
  `customer_number` varchar(6) NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `middlename` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `customer_city` varchar(15) DEFAULT NULL,
  `customer_contact_no` varchar(10) DEFAULT NULL,
  `occupation` varchar(20) DEFAULT NULL,
  `customer_date_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`customer_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `loan_details` (
  `customer_number` varchar(6) NOT NULL,
  `branch_id` varchar(6) NOT NULL,
  `loan_amount` int DEFAULT NULL,
  PRIMARY KEY (`customer_number`,`branch_id`),
  KEY `fk_loan_details_branch_master1_idx` (`branch_id`),
  CONSTRAINT `fk_loan_details_branch_master1` FOREIGN KEY (`branch_id`) REFERENCES `branch_master` (`branch_id`),
  CONSTRAINT `fk_loan_details_customer_master1` FOREIGN KEY (`customer_number`) REFERENCES `customer_master` (`customer_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `transaction_details` (
  `transaction_number` varchar(6) NOT NULL,
  `account_number` varchar(6) DEFAULT NULL,
  `date_of_transaction` date DEFAULT NULL,
  `medium_of_transaction` varchar(20) DEFAULT NULL,
  `transaction_type` varchar(20) DEFAULT NULL,
  `transaction_amount` int DEFAULT NULL,
  PRIMARY KEY (`transaction_number`),
  KEY `fk_transaction_details_account_master1_idx` (`account_number`),
  CONSTRAINT `fk_transaction_details_account_master1` FOREIGN KEY (`account_number`) REFERENCES `account_master` (`account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `user_admin` (
  `username_admin` varchar(20) NOT NULL,
  `password_admin` varchar(20) NOT NULL,
  PRIMARY KEY (`username_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `bankdb`.`customer_master`
(`customer_number`,
`firstname`,
`middlename`,
`lastname`,
`customer_city`,
`customer_contact_no`,
`occupation`,
`customer_date_of_birth`)
VALUES
('123456', 'First', 'Middle', 'Last', 'City', '9999999999', 'engg', '2002-11-08');

INSERT INTO `bankdb`.`customer_master`
(`customer_number`,
`firstname`,
`middlename`,
`lastname`,
`customer_city`,
`customer_contact_no`,
`occupation`,
`customer_date_of_birth`)
VALUES
('123457', 'Ram', 'Kumar', 'Mishra', 'City2', '9999998888', 'doctor', '2000-11-08');

INSERT INTO `bankdb`.`customer_master`
(`customer_number`,
`firstname`,
`middlename`,
`lastname`,
`customer_city`,
`customer_contact_no`,
`occupation`,
`customer_date_of_birth`)
VALUES
('999999', 'Rama', 'Kumari', 'Pandey', 'City2', '9977778888', 'doctor', '1999-10-08');

INSERT INTO `bankdb`.`customer_master`
(`customer_number`,
`firstname`,
`middlename`,
`lastname`,
`customer_city`,
`customer_contact_no`,
`occupation`,
`customer_date_of_birth`)
VALUES
('987654', 'John', 'Smith', 'Rambelle', 'City3', '9000098888', 'teacher', '1990-11-21');

INSERT INTO `bankdb`.`customer_master`
(`customer_number`,
`firstname`,
`middlename`,
`lastname`,
`customer_city`,
`customer_contact_no`,
`occupation`,
`customer_date_of_birth`)
VALUES
('123654', 'Ramesh', 'Kumar','Babu', 'City2', '9922900888', 'student', '2003-01-01');

INSERT INTO `bankdb`.`user_admin`
(`username_admin`,
`password_admin`)
VALUES
('admin',
'admin123');

 INSERT INTO `bankdb`.`account_master`
 (`account_number`,
 `account_opening_date`, 
 `account_status`, 
 `account_type`, 
 `branch_id`, 
 `customer_number`, 
 `opening_balance`) 
  VALUES
  ('C999','2022-10-09','active', 'Savings','B001', 123457,5000);
  
   INSERT INTO `bankdb`.`account_master`
 (`account_number`,
 `account_opening_date`, 
 `account_status`, 
 `account_type`, 
 `branch_id`, 
 `customer_number`, 
 `opening_balance`) 
  VALUES
  ('C001','2020-11-09','active', 'Current','B002', 123456,10000);
  
  INSERT INTO `bankdb`.`account_master`
 (`account_number`,
 `account_opening_date`, 
 `account_status`, 
 `account_type`, 
 `branch_id`, 
 `customer_number`, 
 `opening_balance`) 
  VALUES
  ('C002','2020-12-05','active', 'Current','B003', 999999,2000);
  
  INSERT INTO `bankdb`.`account_master`
 (`account_number`,
 `account_opening_date`, 
 `account_status`, 
 `account_type`, 
 `branch_id`, 
 `customer_number`, 
 `opening_balance`) 
  VALUES
  ('C003','2018-11-09','active', 'Savings','B002', 987654,1000);
  
  INSERT INTO `bankdb`.`account_master`
 (`account_number`,
 `account_opening_date`, 
 `account_status`, 
 `account_type`, 
 `branch_id`, 
 `customer_number`, 
 `opening_balance`) 
  VALUES
  ('C004','2021-10-09','active', 'Current','B004',123654,10000);
 
  INSERT INTO `bankdb`.`branch_master`
  (`branch_id`, 
  `branch_city`,
  `branch_name`) 
  VALUES 
  ('B001','acbd','xyz');

INSERT INTO `bankdb`.`branch_master`
  (`branch_id`, 
  `branch_city`,
  `branch_name`) 
  VALUES 
  ('B002','abcd2','xyz2');
  
  INSERT INTO `bankdb`.`branch_master`
  (`branch_id`, 
  `branch_city`,
  `branch_name`) 
  VALUES 
  ('B003','acbd3','xyz3');
  
    INSERT INTO `bankdb`.`branch_master`
  (`branch_id`, 
  `branch_city`,
  `branch_name`) 
  VALUES 
  ('B004','acbd4','xyz4');
