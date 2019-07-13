SET NAMES UTF8;
DROP DATABASE IF EXISTS gte;
CREATE DATABASE gte CHARSET=UTF8;
USE gte;
/*创建用户表*/
CREATE TABLE user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(16),
cash DECIMAL(8,2),
sex BOOL,
height DECIMAL(5,2) default 170.0,
weight DECIMAL(5,2) default 100.0,
points DECIMAL(8,0),
vip VARCHAR(1) default 0,
uphone VARCHAR(16),
upwd VARCHAR(16)
);

/*创建订单状态表*/
CREATE TABLE order_status(
odnumber INT PRIMARY KEY AUTO_INCREMENT,
status VARCHAR(1),
userid INT,
FOREIGN KEY (userid) REFERENCES user(uid)
);

/*创建购物袋表*/
CREATE TABLE ubag(
bid INT PRIMARY KEY AUTO_INCREMENT,
foodname VARCHAR(16),
price DECIMAL(6,2),
qty VARCHAR(4),
odnumber VARCHAR(32),
userid INT,
FOREIGN KEY (userid) REFERENCES user(uid)
);

/*菜单表*/
CREATE TABLE foods(
fid INT PRIMARY KEY AUTO_INCREMENT,
foodname VARCHAR(16),
price DECIMAL(6,2),
details VARCHAR(128),
heat DECIMAL(6,2),
pic VARCHAR(256)
);




/*插入菜单信息*/
INSERT INTO foods VALUES(null,"蟹柳沙拉",20.5,"虾5只，蟹柳2个，黄瓜1个，蛋黄酱，紫甘兰叶片少许。",150.00,null);
INSERT INTO foods VALUES(null,"鸡胸",6.8,"鸡胸肉50g",40.0,null);
INSERT INTO foods VALUES(null,"水煮鸡蛋",3.0,"鸡蛋一只",20.0,null);
INSERT INTO foods VALUES(null,"肥仔快乐水",2.5,"可乐一听",300.0,null);
INSERT INTO foods VALUES(null,"水果沙拉",16.5,"甜橙2个，苹果1个，樱桃6个，柠檬片3片，草莓3个，酸奶50毫升。",160.0,null);
INSERT INTO foods VALUES(null,"双拼沙拉",16.5,"甜橙2个，苹果1个，樱桃6个，柠檬片3片，草莓3个，虾5只，蟹柳2个，黄瓜1个，蛋黄酱，紫甘兰叶片,少许酸奶50毫升。",160.0,null);

/*插入用户表信息*/
INSERT INTO user VALUES(null,'Thons',0,1,200,200,10000,2,10086,'admin123');
INSERT INTO user VALUES(null,'Davis',0,1,172,143,5000,2,136546448,'123');
INSERT INTO user VALUES(null,'Tom',0,1,178,140,9000,1,1137566448,'123');
INSERT INTO user VALUES(null,'Mary',0,0,165,90,8000,0,136566758,'123');

/*购物袋信息*/
INSERT INTO ubag VALUES(null,'蟹柳沙拉',20.5,1,000001,1);
INSERT INTO ubag VALUES(null,'鸡胸',6.8,2,000001,1);
INSERT INTO ubag VALUES(null,'水煮鸡蛋',3.0,1,000001,1);
INSERT INTO ubag VALUES(null,'肥仔快乐水',2.5,1,000001,1);
INSERT INTO ubag VALUES(null,'水果沙拉',16.5,1,000003,4);
INSERT INTO ubag VALUES(null,'鸡胸',6.8,2,000003,4);
INSERT INTO ubag VALUES(null,'水煮鸡蛋',3.0,3,000003,4);
INSERT INTO ubag VALUES(null,'肥仔快乐水',2.5,2,000003,4);
INSERT INTO ubag VALUES(null,'水果沙拉',16.5,2,000004,2);
INSERT INTO ubag VALUES(null,'鸡胸',6.8,2,000004,2);
INSERT INTO ubag VALUES(null,'水煮鸡蛋',3.0,3,000004,2);
INSERT INTO ubag VALUES(null,'肥仔快乐水',2.5,2,000004,2);
INSERT INTO ubag VALUES(null,'双拼沙拉',16.5,1,000002,3);
INSERT INTO ubag VALUES(null,'鸡胸',6.8,2,000002,3);
INSERT INTO ubag VALUES(null,'水煮鸡蛋',3.0,1,000002,3);
INSERT INTO ubag VALUES(null,'肥仔快乐水',2.5,1,000002,3);

/*插入订单信息*/
INSERT INTO order_status VALUES(null,1,1);
INSERT INTO order_status VALUES(null,2,1);
INSERT INTO order_status VALUES(null,3,1);
INSERT INTO order_status VALUES(null,4,1);



SHOW tables; 
SELECT * FROM foods;
