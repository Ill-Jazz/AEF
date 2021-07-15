# AEF: Angular Extended Friendlist

## PLAN OF ATTACK

1. Create Angular Project  
   ng new project-name  
   delete unnecessary code  
2. Create Form with input fields  
   Required: 
   - First & Last name
   - Email  
   - Intro text
   - Favourite Programming Language
    
    Optional:  
   - Discord Name or link  
   - Link to Social media  
   - Zodiac sign  
   - Lucky Number  
   - Greatest Achievement  
   - Favourite Food  
   - Talent  
   - Languages I speak
3. Bind data to Form  
   Import forms module & use ng model
4. Form Validation  
   Add required to the required fields  
   Error handling  
   Regex  
   Add disabled condition 
5. Manage connection with server  
   When everything is valid, submit function  
   Generate friend service  
   Start HTTP-request  
   Subscribe to observable  
   Post data to local API  
   

## EXTRA FEATURES  
1. Searchbar, filters, Steam-account


## MOTIVATION FOR THIS PROJECT  
Getting more angles on the Angular Framework  
Trying to grasp a better understanding of Angular 
and how it works with the Frontend and Backend.

## Useful commands of this project  

Check node: "node -v or node -version"  
Check npm: "npm -v or npm -version"

Install Angular cli "npm install -g @angular/cli" and chech with "ng -v"  
Navigate to root  and enter "ng new 'project-name'"  
Go inside folder and run command: "ng serve --port 4500", check it out on localhost:4500  

In terminal, navigate to project-name/src/app  

To add a friend, we need a service: use cli and run command "ng g s 'service-name'  

In the server folder in your terminal, run the command node server. You won't get any confirmation that the server is running, just a blank new line. Now navigate to localhost:PORT.


   