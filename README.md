# MultiUserNotesApp-Development

[**YouTube Link**](https://youtu.be/YDtK4GTkxfo)

# MultiUserNotesApp-Production

[**Live Website Link**](https://multi-user-notes-app.herokuapp.com/)

## Technology Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

This Web Application is build in order to acknowledge the concepts of **React**, **React Router**, **Django**, **Django REST Framework**, **Django User Token Authentication**, **Rest API** and **API Testing with Postman**. This App allows User to **Create**, **Read**, **Update**, **Delete** their **Notes** according to their choices.

---

## Features
- User Login and SignUp based on **Token Authentication**
- After SignUp and Login User gets into the **Notes Dashboard**
- User can **Create**, **Read**, **Update**, **Delete**
- Uses **React Cookie** to store User's Login Credentials so that **User does not have to Login every time Until Logout**
- In **Production** it Uses **Heroku Postgres** which is an online **Postgres Database** provided by Heroku
- While Signing Up User has maintain the criteria for **Password Matching**

---

## Features I would like to add
- If User Forget his/her password I would like to configure [**Django Rest Password Reset**](https://pypi.org/project/django-rest-passwordreset/)
- Using **Premium** version of **Postgres** to scale the application for more Users

---

## How to Run the App in your Local Machine
- Download this Repo on your Local Machine
- go to the **frontend** directory of the Project using Command Line (i.e `cd frontend`)
- In Command Line run the command `npm run build`
- After the build finishes go back to **root** directory of Project (i.e `cd ..`)
- Now run the **Django Server** (i.e `python manage.py runserver`)

---

### Demo

![Demo](https://github.com/Soham7-dev/Images-and-GIFS/blob/main/2022-06-02-09-36-05.gif)
