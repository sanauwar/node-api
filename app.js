const { app, port } = require('./config/express')

app.listen(port, () => {
    console.log(`Server is running ${port}`);
})