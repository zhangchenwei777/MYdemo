SET NAMES UTF8;
DROP DATABASE IF EXISTS mz;
CREATE DATABASE mz CHARSET=UTF8;
USE mz;

-- 用户信息表
CREATE TABLE mz_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(123),
	uphone VARCHAR(64),
	age INT,
	birthday BIGINT
);
INSERT INTO mz_user VALUES
(1,'xiaoxin','123456','love@qq.com','15933331292','26',12432534242),
(2,'xiaojie','456789','miss@qq.com','13643331292','26',12432543242);

/*-- 产品详情表
CREATE TABLE mz_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(64),
	PRICE FLOAT(10,2),
	PIC VARCHAR(128)
);
INSERT INTO mz_product VALUES
(1,'魅族PRO6s','998.88','Images/CnQOjVebK1-AXLHoAA-EHA0Uf7A541_180x180.png');

-- 用户的购物车
CREATE table mz_car(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	userId INT
);
INSERT INTO mz_car VALUES(100,1);

-- 购物侧详情表
CREATE TABLE mz_cart_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	cartId INT,
	product INT,
	count INT
);
INSERT INTO mz_cart_detail VALUES
(1，100，1，1);

-- 订单信息表
CREATE TABLE mz_order(
	oid INT PRIMARY KEY AUTO_INCREMENT,   #订单序号
	orderNum INT,                         #订单编号，10位随机数
	shopName VARCHAR(32),
	rcName VARCHAR(32),
	price INT,
	payment INT,
	orderTime BIGINT,
	status INT,
	userId INT
);
INSERT INTO mz_order VALUES(101,3214312432,'魅族自营'，'安晓杰','998.88',1,4324324324,1,1);

-- 订单详情表
CREATE TABLE mz_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	orderId INT,      #订单编号
	productId INT,    #产品编号
	count INT         #购买数量
);
INSERT INTO mz_order_detail VALUES(1,101,1,3)*/




















