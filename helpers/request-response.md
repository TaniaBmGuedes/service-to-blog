# Request <-> Response

http://localhost:3000/post -> 80 HTTP or 443 HTTPS

HTTP is the scheme (HTTP, HTTPS, FTP, etc.), localhost is the host
(google.com, otaviomiranda.com.br, etc.), 3000 is the TCP port used for the
connection, and /post is the path to the resource.

```
Read  Create Update        Delete
GET / POST / PATCH / PUT / DELETE / HEAD / OPTIONS / CONNECT / TRACE

/auth/login          POST        authenticate user       Open

/user/              POST        Create user             Open
/user/me            PATCH       Update user             JWT
/user/me            DELETE      Delete user             JWT
/user/me            GET         View user data          JWT
/user/me/password   PATCH       Update password         JWT

/post/              GET         View all post          Open
/post/[slug]        GET         View one post           Open
/post/me            POST        Create post             JWT
/post/me            GET         post of a user         JWT
/post/me/[id]       GET         Post of a user          JWT
/post/me/[id]       PATCH       Update a post           JWT
/post/me/[id]       DELETE      Delete a post           JWT

/upload              POST        Upload image            JWT
/uploads/img.jpg     GET/NGINX   View image              Open
```
