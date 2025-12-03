// Q1. Rank Score 
//Leetcode 178.

/*

select score,
DENSE_RANK() over (order by score desc) 'rank'  from Scores

RANK() - Rank allows gap 
Example: If scores are 100, 90, 90, 80 → ranks become 1, 2, 2, 4.

DENSE_RANK() - no gaps
Example: If scores are 100, 90, 90, 80 → ranks become 1, 2, 2, 3.

ROW_NUMBER() - unique rank (no duplicates)
*/



// -----------------------------------------------------------------------------------------------
//Q2. Second Highest Salary using multiple methods
//Leetcode 176.

/*
select max(salary) as SecondHighestSalary  from Employee 
where 1=1
and salary<(select max(salary) from Employee)

SELECT salary AS SecondHighestSalary
FROM (
    SELECT 
        salary,
        DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employee
) t
WHERE rnk = 2;

*/


// -----------------------------------------------------------------------------------------------
//Q3. Employees earnings more than their manager 
// Leetcode 181.
/*
select xx.name as 'Employee' from Employee xx, Employee yy
where xx.managerId=yy.id
and xx.salary>yy.salary
and xx.managerId  is not null

*/


// -----------------------------------------------------------------------------------------------
//Q4. Duplicate emails
// Leetcode 182.
/*
select email Email from Person
group by email
having count(email)>1

WITH cte AS (
    SELECT 
        email,
        ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM Person
)
SELECT DISTINCT email
FROM cte
WHERE rn > 1;

*/


// -----------------------------------------------------------------------------------------------
//Q5. Department highest salary
//Leetcode 184.
/*

with cte as (
select *,
DENSE_RANK() over (partition by xx.departmentId order by salary desc) rn
 from Employee xx
)
select yy.name as Department,xx.name as Employee,xx.salary as Salary 
from cte xx, Department yy
where 1=1
and xx.rn=1
and xx.departmentId=yy.id
order by xx.id

*/

//-------------------------------------------------------------------------------------------------
//Q6. Customers who never orders
//Leetcode 183.
/*
select name as Customers 
from Customers xx
where xx.id not in (select customerId from Orders)
*/




//-------------------------------------------------------------------------------------------------
//Q7. Department Top 3 salaries
//Leetcode 185.
/*
with cte as (
    select *,
        DENSE_RANK() over (partition by departmentId  order by salary desc) as rn
        from Employee
)

select yy.name as Department, xx.name as Employee, xx.salary as Salary
from cte xx, Department as yy
where 1=1
and xx.rn<4
and xx.departmentId=yy.id
order by yy.id
*/



//-------------------------------------------------------------------------------------------------
//Q8. Raising Temparature
//Leetcode 197.
// Method - using LAG
/*

# Write your MySQL query statement below
with cte as (
    select id,recordDate,
        temperature,
        LAG(temperature) over (order by recordDate) as prev,
        LAG(recordDate) over (order by recordDate) as prevDate
        from Weather
)

select xx.id 
from cte xx
where 1=1
and xx.prev is not null
and xx.temperature>xx.prev
and xx.recordDate=DATE_ADD(xx.prevDate, INTERVAL 1 DAY)

*/





//-------------------------------------------------------------------------------------------------
//Q9. Customer placing the largest numbers of orders
//Leetcode 586.
/*
with cte as (
    select customer_number,
        ROW_NUMBER() over (partition by customer_number order by order_number) as rn
        from Orders
)

select yy.customer_number from cte yy
where 1=1
and yy.rn in (select max(rn) from cte xx)

->simple way
select customer_number 
from Orders
where 1=1
GROUP BY customer_number
order by count(*) desc
limit 1
*/