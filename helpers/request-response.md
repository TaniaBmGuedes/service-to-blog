# API Documentation

Request ↔ Response Structure

## Base URL

`http://localhost:3000/posts` → Port **80** for HTTP or **443** for HTTPS.

- **http** → Scheme (HTTP, HTTPS, FTP, etc.)
- **localhost** → Host (google.com, otaviomiranda.com.br, etc.)
- **3000** → TCP port used for the connection
- **/post** → Path to the resource

---

## HTTP Methods (CRUD)

| Operation  | Methods                          |
| ---------- | -------------------------------- |
| **Read**   | GET                              |
| **Create** | POST                             |
| **Update** | PATCH / PUT                      |
| **Delete** | DELETE                           |
| **Other**  | HEAD / OPTIONS / CONNECT / TRACE |

---

# Endpoints Overview

## 🔐 Authentication

| Route         | Method | Description       | Access |
| ------------- | ------ | ----------------- | ------ |
| `/auth/login` | POST   | Authenticate user | Public |

---

## 👤 User Endpoints

| Route               | Method | Description            | Access |
| ------------------- | ------ | ---------------------- | ------ |
| `/user/`            | POST   | Create user            | Public |
| `/user/me`          | PATCH  | Update user            | JWT    |
| `/user/me`          | DELETE | Delete user            | JWT    |
| `/user/me`          | GET    | Get authenticated user | JWT    |
| `/user/me/password` | PATCH  | Update password        | JWT    |

---

## 📝 Posts Endpoints

| Route            | Method | Description                | Access |
| ---------------- | ------ | -------------------------- | ------ |
| `/post/`         | GET    | View all public posts      | Public |
| `/post/:slug`    | GET    | View a specific post       | Public |
| `/post/me`       | GET    | View all posts by the user | JWT    |
| `/post/me`       | POST   | Create new post            | JWT    |
| `/post/me/:uuid` | GET    | View a specific user post  | JWT    |
| `/post/me/:uuid` | PATCH  | Update a user post         | JWT    |
| `/post/me/:uuid` | DELETE | Delete a user post         | JWT    |

---

## 📤 Uploads

| Route              | Method      | Description  | Access |
| ------------------ | ----------- | ------------ | ------ |
| `/upload`          | POST        | Upload image | JWT    |
| `/uploads/img.jpg` | GET / NGINX | View image   | Public |

---

## Notes

- **JWT** indicates endpoints that require a valid JSON Web Token in the
  `Authorization` header.
- Public routes do not require authentication.
- Image viewing is handled by **NGINX** or a static file server.

---
