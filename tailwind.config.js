module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false, //or 'media' or 'class' 
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../img/wave-white.png)' 
            })
        }
    },
    variants:{
        extend:{},
    },
        plugins: [],
}
