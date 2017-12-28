const express=require('express');
const hbs=require('hbs');
var app=express();

hbs.registerPartials('C:/Users/lcom81_one/Desktop/NodeJs/webserver/views/partials')
hbs.registerHelper('getDate',()=>{
	return new Date().getFullYear();
});
app.set('view engine','hbs');
app.use(express.static('C:/Users/lcom81_one/Desktop/NodeJs/webserver'));
app.use((req,res,next)=>{
	//res.render('C:/Users/lcom81_one/Desktop/NodeJs/webserver/views/contact.hbs')
	next();
});
app.get('/about',(req,res)=>{
	res.render('C:/Users/lcom81_one/Desktop/NodeJs/webserver/views/about.hbs',{
		pageTitle:"About",
		date:new Date().getFullYear()
	});
});
app.get('/contact',(req,res)=>{
	res.render('C:/Users/lcom81_one/Desktop/NodeJs/webserver/views/contact.hbs');
});
app.get('/',(req,res)=>{
	res.render('C:/Users/lcom81_one/Desktop/NodeJs/webserver/index.hbs');
});
app.listen(3000);