SELECT p.content, p.title, p.img, u.username, u.profile_pic FROM posts p
JOIN users u on u.id = p.auhor_id
WHERE p.title IS LIKE $1