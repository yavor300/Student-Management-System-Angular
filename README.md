# Student Management System - Angular Project

The Student Management System is a project built for the Angular course at SoftUni.
<br>
<br>
The main functionality of the project is to manage courses, students, teachers and grades.
<br>
<br>
Each course can has one teacher and one teacher can lead many courses.
<br>
Inside each course multiple students can partcipate. One student can be enrolled in more than one course at the same time.
<br>
<br>
The student has an access to its grades and also to its average grade.
<br>
<br>
The teacher can add student to course, view all students grades and also add grades to students.
<br>
<br>
The application is moderated by an administrator.
<br>
The administrator can create new courses, assign teacher to a course and also can make other teachers administrators.

## Public part

The application's public part represents static pages which are available to all unauthenticated users.
<br>
These pages are: ```/home``` ```/login``` ```/register```

## Private part

The application's private part represents different dynamic pages which are visible only to authentiated users.
<br>
<br>
There are several levels of authorization which means that some users have permissions to see certain content, others don't.
<br>
<br>
The authentication is implmented using JWT.

## Dynamic pages

The application consists of several dynamic pages.
<br>
Some of them are the **user dashboard**, the **course details page**, **the profile pages of the users** and also the **admin page**.

## Remote service

AJAX requests are made to the server-side in order to perform different CRUD actions with the resources.

## Error handling

All of the backend errors are handled on the front-end and validation error messages are being displayed.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
