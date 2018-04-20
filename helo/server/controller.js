module.exports = {
    getUser: (req, res, next) => {
        res.status(200).send(req.user)
    },

    getPosts: (req, res, next) => {
        if(req.query.userposts && req.query.search){
        app.get('db').filter_posts([]).then(posts => {
            
            res.status(200).send(posts)
        })
        if(req.query.userposts){
        app.get('db').get_posts().then(posts => {
            
            res.status(200).send(posts)
        })
        } else if(!req.query.userposts && !req.query.search){
            app.get('db').get_posts_no_user([req.params.id]).then(posts => {
                res.status(200).send(posts)
            })
        }
    },
     filterPosts: (req, res, next) => {
         app.get('db').filter_posts([req.query.filter]).then(posts => {
             res.status(200).send(posts)
         })
     }
}