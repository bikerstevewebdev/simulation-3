CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    auhor_id INTEGER REFERENCES users (id)
);

INSERT INTO users (username, password, profile_pic)
VALUES ('Joe', 'joeblank', 'https://images.unsplash.com/photo-1444418185997-1145401101e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e6d01b528774cc8fb2023acfe10344b&auto=format&fit=crop&w=500&q=60');
INSERT INTO users (username, password, profile_pic)
VALUES ('Lloyd', 'lgrub', 'https://images.unsplash.com/photo-1440711085503-89d8ec455791?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5773f1e5f7b156671c66dd6452438f2a&auto=format&fit=crop&w=500&q=60');
INSERT INTO users (username, password, profile_pic)
VALUES ('Trent', 'trentpesche', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d7ce94cbe867b0563dbb554ba430a17&auto=format&fit=crop&w=500&q=60');
INSERT INTO users (username, password, profile_pic)
VALUES ('Missy', 'missybutler', 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53e63a836e2d159e489167caf43a3e84&auto=format&fit=crop&w=500&q=60');




INSERT INTO posts (title, img, content, auhor_id)
VALUES ('Computerness', 'https://images.unsplash.com/photo-1506680526630-477eb036eda8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=835efa4f0665476b53440dea408a5ac6&auto=format&fit=crop&w=500&q=60', 'Computers are awesome sometimes.....', '4');
INSERT INTO posts (title, img, content, auhor_id)
VALUES ('Bloggin Yo', 'https://images.unsplash.com/photo-1496048977749-6c44d362880c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=654c5b5607e086a2763c05ce3e66e963&auto=format&fit=crop&w=500&q=60', 'Writing blogs is cool I guess', '4');
INSERT INTO posts (title, img, content, auhor_id)
VALUES ('Photography', 'https://images.unsplash.com/photo-1453828423292-392a660a502f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b578f6c759ea48042035a39770d90eb3&auto=format&fit=crop&w=500&q=60', 'Photography is for losers, I hate everything meh.:(', '3');
INSERT INTO posts (title, img, content, auhor_id)
VALUES ('Technology', 'https://images.unsplash.com/photo-1500445113926-4b0454111bc9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1a1f660ac096f044cabf3617c746e75&auto=format&fit=crop&w=500&q=60', 'Technology is amazing and has opened so many doors for me woo yay hoo wah bippity boo bah', '1');

ALTER TABLE users 
ADD COLUMN auth_id TEXT;