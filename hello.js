function HelloRoutes(app){
app.get('/', (req, res) => {
    res.send('Hello World');

});

app.get('/about', (req, res) => {
    res.send('About Page');
}
);

}

export default HelloRoutes;