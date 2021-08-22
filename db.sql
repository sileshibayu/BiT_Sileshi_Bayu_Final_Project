
CREATE TABLE `sleep_pattern`.`user_login`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(255) NOT NULL,
    `lname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(100)  NULL,
    `gender` VARCHAR(10) NULL, 
    `marital_status` VARCHAR(10) NULL,  
    `address` VARCHAR(255) NULL, 
    `birth_date` DATE NULL,
    `password` VARCHAR(255)  NULL,
    `role` VARCHAR(100)  NOT NULL,
    `username` VARCHAR(255) NULL,
    `status2` VARCHAR(255) NULL,
    PRIMARY KEY(`id`)
) ENGINE = INNODB;

CREATE TABLE `sleep_pattern`.`sleep_entry`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `start_time` TIME NOT NULL,
    `wakeup_time` TIME NOT NULL,
    `duration` VARCHAR(255) NOT NULL,
    
    `status1` VARCHAR(255) NULL,
    `status2` INT(11) NULL,
    `remark` TEXT NULL,
    `uid_idfk` INT(11) NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT FK_userSleep FOREIGN KEY (`uid_idfk`)
    REFERENCES `sleep_pattern`.`user_login`(`id`)
) ENGINE = INNODB;

CREATE TABLE `sleep_pattern`.`comments`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `comment` TEXT NOT NULL,
    `timestamp` TIMESTAMP NOT NULL,
    `status` VARCHAR(255) NULL,
    PRIMARY KEY(`id`)
) ENGINE = INNODB;

