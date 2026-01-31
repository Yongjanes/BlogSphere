📦 BlogSphere Backend API Routes

Base URL: /api/v1

🔐 AUTH ROUTES
Method	Route	Description	Auth
POST	/auth/register	Register new user	❌
POST	/auth/login	Login, issue tokens	❌
POST	/auth/logout	Logout user	✅
GET	/auth/me	Get current user	✅
👤 USER ROUTES
Method	Route	Description	Auth
GET	/users/:id	Get public user profile	❌
PATCH	/users/me	Update avatar & bio	✅
GET	/users/me/bookmarks	Get bookmarked blogs	✅
GET	/users/me/history	Get reading history (latest 100)	✅
✍️ BLOG ROUTES
Method	Route	Description	Auth
POST	/blogs	Create blog (draft/published)	✅
PATCH	/blogs/:id	Update blog	✅
DELETE	/blogs/:id	Archive blog	✅
GET	/blogs/:slug	Get published blog by slug	❌
GET	/blogs	List published blogs	❌
GET	/blogs/me	Author’s blogs (all statuses)	✅

Query params for /blogs:

tag

author

page

limit

sort=latest

❤️ LIKE ROUTES
Method	Route	Description	Auth
POST	/blogs/:id/like	Like a blog	✅
DELETE	/blogs/:id/like	Unlike a blog	✅
GET	/blogs/:id/likes	Get like count	❌
🔖 BOOKMARK ROUTES
Method	Route	Description	Auth
POST	/blogs/:id/bookmark	Bookmark blog	✅
DELETE	/blogs/:id/bookmark	Remove bookmark	✅
💬 COMMENT ROUTES
Method	Route	Description	Auth
POST	/blogs/:id/comments	Add comment	✅
GET	/blogs/:id/comments	Get blog comments	❌
DELETE	/comments/:id	Delete own comment	✅
🕒 READING HISTORY ROUTES
Method	Route	Description	Auth
POST	/blogs/:id/history	Add blog to history (internal)	✅
GET	/users/me/history	Get reading history	✅
🛡️ ADMIN ROUTES (OPTIONAL BUT RESUME-BOOSTING)
Method	Route	Description	Auth
GET	/admin/users	Get all users	Admin
DELETE	/admin/blogs/:id	Force delete blog	Admin
DELETE	/admin/comments/:id	Delete any comment	Admin