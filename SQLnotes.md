# SQL

## What is a Database?

Any collection of related information
* Phone Book
* Shopping List
* Todo list
* Your 5 best friends
* Facebook's users

Can be stored in different ways
* on paper
* in your mind
* on a computer
* a powerpoint
* a comments section

### Computers + Databases = <3

**Amazon.com**
* keeps track of products, reviews, orders, cards, users, etc.
* _trillions_ of pieces of informarton to be stored and readily available
* extremely valuable informaiton, critical to function
* security is essential
* information is stored on a computer

**Shopping List**
* keeps track of consumer products that need to be purchased
* 10-20 pieces of informaton
* informaiton for convenience sake (not strictly neccessary)
* security not important at all
* stored in memory or on paper

## Database Management Systems (DBMS)

A special software program to help users create & maintain a database on a computer
* Makes it easy to store large ammounts of info
* makes security easier
* backups
* importing/exporting data
* can interact with software

### The 4 main operations to interact with a database
C.R.U.D.
* Create
* Read
* Update
* Delete

## 2 Main Database Types

### Relational Database (SQL)
* organize data into one or more tables
    * Each tble has columns and rows
    * a unique key identifies each row (primary key)

### Non-Relational (noSQL / not just SQL)
* organize data as anyhting but a traditional table
    * key-value stores
    * Documents (JSON, XML, etc.)
    * Graphs
    * Flexible Tables

## Relational Databases

* Relational Database MAnagement Systems (RDBMS)
    * helps users create & maintain a relational database
    * mySQL, Oracle, postgreSQL, mariaDB, etc.

* Structured Query Language (SQL)
    * standardized language for interacting with RDBMS
    * used to perform CRUD operations as well as other administrative tasks(user management, security, backup, etc.)
    * Used to define tables, and structures
    * SQL code used on one RDBMS is not always portable without modification

## Database Queries

Queries are requests made to the database management system for specific information

As the database's structure becomes more & more complex, it becomes more difficult to get the specific pieces of information that we want

## Tables and Keys

**Primary Key**
Every table will have one column called the primary key, where every row(entry) has 1 unique identifier. Primary key will serve as a differentiator even if other attributes are the same. Can be a number, a string, or any data type, but MUST be unique

**Information about key types**
* Surrogate Key: just used in the database only, no real mapping ni teh real world (example id #)
* Natural Key: a key that has a real mapping in the real world with meaning outside of the database (eg. a social security number)
* Foreign Key: stores a relaitonship to the primary key of a row in another table, or in the same table
* Composite key: a combination of 2 columns that when combined. you can make  aprimary key out of a composite key
* Can make a composite key with 2 foriegn keys

## Structured Query Language (SQL)
* A language used for interacting with Relational Database Management Systems (RDBMS)
    * can use SQL to do things for you:
        * create, retrive, update, & delete ata
        * create and manage different databases
        * design & creat database tables (schemas)
        * perform administrative tasks
    * SQL implementations vary between systems
        * not all RDBMSs follow the SQL standard to a "T"
        * the concepts are the same even if the implimentation varrys
    * actually a "hybrid language", 4 types of languages in one
        * Data Query Language (DQL)
            * used to query the database for information
            * get informaiton that is already stored there
        * Data Definition Language (DDL)
            * Used for defining database schemas
        * Data Control Language (DCL)
            * used for controlling access to the data in the database
            * user & permissions management
        * Data Manipulation Language (DML)
            * used for inserting, updating, & deleting data in the database

### Queries
* A set of instructions given to the RDBMS to say what information you want retrieved
    * TONS of data in DB
    * Often hidden in a complex Schema
    * goal is to just get what you need

egample "Give us the names and ages of all employees in the employee table for employees who make more than $30 thousand per year

```
SELECT employee.name, employee.age
FROM employee
WHERE employee.salary > 30000
```

## SQL Data Types

### String Value Types

#### Char(N)
a _fixed length_ string containing **N** characters where 0 ≤ **N** ≤ 255: Default 1
#### VARCHAR(N)
A _variable length_ string with a number of character up to **N** where 0 ≤ **N** ≤ 255 or 0 ≤ **N** ≤ 21,844 (the larger storage size requires MySQL v5.0.3 or newer)

#### TEXT(N)
A longer string with definite suppor up to 65,535 bytes of data ≈ 21,844 UTF characters

#### BINARY(N)
Equal to CHAR(), but storing a binary string where **N** specifies the length in bytes

#### VARBINARY(N)
Equal to VARCHAR(), but storing a binary string where **N** specifies the maximum length in bytes

#### TINYBLOB
For BLOBLS (Binary Large Objects). Max length 255 bytes

#### TINYTEXT
A string with a maximum of 255 characters

#### BLOB(N)
Binary Large Object holding up to 65,535 bytes of data

#### MEDIUMTEXT
A string with a maximum of 16,777,215 characters

#### MEDIUMBLOB
A binary large object with a maximum of 16,777,215 bytes

#### LONGTEXT
A string with a maximum of 4,294,967,295 characters

#### LONGBLOB
A binary large object with a maximum of 4,294,967,295 bytes

#### ENUM(val1,val2,val3,...)
A string object that can only have 1 value chosen from a list of possible values. you can list up to 65,535 values in an ENUM list. If a value is inswerted that is not on the list, a blank valu will be inserted. The values are inserted in the order you enter them.

#### SET(val1,val2,val3)
A string object that can have 0 or more values chosen from a list of possible values. You can list up to 64 values in a SET list.

### Numeric Value Types

#### BIT(N)
A bit-value type. The number of bits per value is specified by N. Where 1 ≤ N ≤ 64. Default 1

#### TINYINT(N)
A very small integer. Signed rnge from -128 to 127. Unsigned from 0 to 255. N is maximum size (default 255)

#### BOOL
A zero (0) is considered false. Nonzero values are considered true

#### BOOLEAN
Equal to BOOL

#### SMALLINT(N)
A small integer. Signed range from -32,768 to 32,767. Unsigned from 0 to 65,535 where N is the maximum size

#### MEDIUMINT(N)
A medium integer. Signed from -8,388,608 to 8,388,607. Unsigned from 0 to 16,777,215 where N is max size
#### INT(N)
A medium-large integer. Signed from -2,147,483,648 to 2,147,483,647. Unsigned from 0 to 4,294,967,295 where N is max size

#### INTEGER(N)
Equal to INT(N)

#### BIGINT(N)
A large integer signed range from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. Unsigned from 0 to 18,446,744,073,709,551,615 where N is the max length

#### DECIMAL(N,M)
A decimal value. Where **N** is the total number of digits and **M** is the number of digits after the decimal place. For example **DECIMAL(10,4)** of 14.45 is 000014.4500. Where 0 ≤ **N** ≤ 65 & 0 ≤ **M** ≤ 30

#### DEC(N,M)
Equal to DECIMAL(N,M)

### Date and Time Data Types

#### DATE
A date. Fomat: YYYY-MM-DD supported range from '1000-01-01' to '9999-12-31'

#### DATETIME(fsp)
A date and time combination. Format YYY-MM-DD hh:mm:ss supported range from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. Adding DEFAULT and ON UPDATE in the comlumn definition will automatically initialize and update to the current date and time

#### TIMESTAMP(fsp)
A timestamp. TIMESTAMP values are stored as the number of seconds since the Unich epoch ('1970-01-01 00:00:00' UTC). Format: YYY-MM-DD hh:mm:ss Supported range from '1970-01-01 00:00:00' UTC to '2037-01-09 03:14:07' UTC. Automatic initialization and updating can be specified in the column definition with DEFAUL CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP

#### TIME(fsp)
A time. Format: hh:mm:ss Supported range is from '-838:59:59' to '838:59:59'

#### YEAR
A year in four-digit format. range from 1901 to 2155

## Writing SQL

Typical convention is to use all caps for SQL reserved values.

Creating a table. basic Example

```
CREATE TABLE student ();
```

Defining the columns and data types are done by passing in arguments separated by commas. This is a table with 3 columns. An auto icrementing integer used as the primary key for a sudent's ID, their name (limited to 20 characters), and their major (also limited to 20 characters) would look like the following.
```
CREATE TABLE student (
    student_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    major VARCHAR(20)
);
```

Can add a column to a table eg.
```
ALTER TABLE student ADD gpa DECIMAL(3,2);
```

To see your table schema any time, we use the command "DESCRIBE"