# team-project-24
team-project-24 created by GitHub Classroom

Fitness tracker app:
  The project we decide to create calculates users' total daily calories and how close they are from reaching their goal by keeping track of the foods they consume. 

# YOUR PRODUCT/TEAM NAME 
MyDiet

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?

 Answer : The motivation behind our web application is to enable users to take control of their diet. Our web app allows users to keep track of the foods they’re eating and logs the amount of calories they consume on a daily basis. Our web app will also inform users on their progress for the day so they can keep themselves in check. We came up with these ideas because people tend to overeat or undereat based on their requirements; as they often don't have the proper tools to keep track of their intake. 


## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

Answer : 
My Dashboard
Displays the calorie goal user wants to achieve for the day.
Displays the calorie breakdown of the user.

Manage Food
Add food that they have consumed
Search food to get information about the food (ie calorie, fat, etc)
View all the food user ate in one day with the information about the food

Calculate Calories
View calories consumed in one day in a progress bar
Add calorie goal for the day



## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully

 Answer: 
 The users are greeted with a login page when they enter the site. They need to create an account for the very first time. As of D2, user can enter any username and password to login.

 MyDashboard feature:  
 The user dashboard is still under construction, but after user login they can see their status of calorie consumption for the day. On the right side there is a calorie breakdown, user can compare carbohydrates, protein, fat consumption with their daily goal. The current dashboards are sample numbers, as we continue these numbers will be generated based on user profile. 

 Manage Food feature: 
 Click on the "Manage Food" on the left panel. You can search up the food that you want to add by clicking " SEARCH FOOD". Then a clickable dropdown bar will be displayed, click on the down arrow to view and select foods. Note that user can enter their own food name and calories by typing them in and click " ADD FOOD". The Food list on the right is hardcoded for now. 

 Calculate Calories: 
 Click on the "Calculate Calories" on the left panel. User can enter their daily calories goal and specify details on carbohydrates, fat and protein. Users can check their progess on the right side. As for now this value is hardcoded. 

 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).

 Answer: 
 If developer want to set things up locally, they should have npm and Node.JS installed on your machine locally. The DB is located on the atlas cloud , you don’t need to set up DB locally. In the fitness-tracker-app directory, type in npm install and npm start in the terminal. You will be directed to localhost3000. 

 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 Answer:
 We have three branches, master, client and server. Team members communicate and push their code to the corresponding branches and create a pull request when they want to merge to master branch. Woo-jin Park is responsible for reviewing pull-requests and Tony Hong is responsible for merging them. The approach will minimize the conflicts and keep the master branch clean and organized. 
 Once all the code on different branches are finalized, they are all merged into master branch. From there the application is deployed onto Heroku, we can checkout the application by clicking on the deployment under environments on Github. 


 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?

Answer: We will apply the MIT license to our software. We made this decision based on the open source guide. We used npm libraries and thus we have dependencies for our project. The NPM libraries has permissive license for us to use and one of the most popular license for npm is the MIT license. This means that people have the permission to use privately, free of distribution, modification, commercial use under license and copyright notice. There is no liabiltiy and warranty provided for the software. 