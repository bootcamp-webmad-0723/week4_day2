const express = require('express')

const app = express()

// settings
app.use(express.static('public'))
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")


// routing
app.get('/', (req, res) => {

    const studentInfo = {
        name: 'Alejandro Reche',
        age: 33,
        campus: 'Madrid',
        debt: false,
        bootcamp: 'Web Development (<em>Dev</em>)',
        teacher: undefined,
        prework: false,
        subjects: ['HTML', 'CSS', 'JS', 'ExpressJS', 'ReactJS', 'NodeJS'],
    }

    res.render('home-page', studentInfo)
})


app.listen(5005, () => console.log('Server running on port 5005'))