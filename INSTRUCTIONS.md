# Redux Feedback Loop

For this assignment, you will be creating a reflection/feedback form modeled after Prime's system. Feedback will be collected over 4 views. In a separate review page, display the current feedback values and a submit button. and when all steps are complete, your app will save the feedback in the database. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.

The parts:
- How are you feeling today?
![feeling](wireframes/feeling.png)
- How well are you understanding the content?
![understanding](wireframes/understanding.png)
- How well are you being supported?
![support](wireframes/supported.png)
- Any comments you want to leave?
![comments](wireframes/comments.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

### Input Validation

Each step should only allow the user to advance to the next step if a score was provided. Be sure to tell the user in some way that a value must be provided.

The `Comments` step does not need to be validated, an empty value is okay.

## THE REVIEW COMPONENT

The last step of the process will allow the user to review their feedback. Users are not able to change their input on this step or go back for Base Mode. 

![comments](wireframes/review-active.png)

## SUBMIT THE FEEDBACK

The `Review` step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.

When the submit button is clicked, save the submission in the database. The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

![understanding](wireframes/page-five.png)


## STRETCH GOALS

> NOTE: These stretch goals are intended to be completed in order.

### UPDATE SCORES

Allow the user to go back to a previous step and change their score. You still need to disallow empty values!

### STYLING
Improve the styling of the app using Material-UI. This might include cards, snackbars, buttons, a nav bar, icons, and/or a theme. 

### ADMIN SECTION

- Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

- Add the ability to flag an existing feedback entry for further review on the /admin view.

### DEPLOY
Deploy your project to Heroku. You'll need to read the special instructions for building and deploying with React. 


- [X] Feeling Component
    - [X] click "next" to go to Understanding component
    - [X] Create Input
    - [X] link values to redux

- [X] Understanding component
    - [X] click "next" to go to Supported component
    - [X] Create Input
    - [X] link values to redux

- [X] Supported component
    - [X] click "next" to go to Comments component
    - [X] Create Input
    - [X] link values to redux

- [X] Comments component
    - [X] Create Input
    - [X] link values to redux
    - [X] click "next" to go to Review component


- [X] Review component
    - [X] When submit is clicked - POST to DB
    - [X] Then display submission success page
    - [X] Button to start new survey and go to first step
        - [X] Have this button reset values

- [X] Redux store setup
    - [X] npm install redux@4 react-redux@7
    - [X] npm install redux-logger@3

- [X] Input validation - visually display - advance only if score was provided
    - [X] Feeling
    - [X] Understanding
    - [X] Support
    
- [X] Allow user to go back to previous page and update score

- [X] Add MUI styling
    - [X] cards, snackbars, buttons, a nav bar, icons, and/or a theme?

- [X] Admin Section
    - [X] Display existing feedback at /admin
        - [X] most recent feedback on top
    - [X] Allow user to delete existing feedback
        - [X] Prompt to confirm deletion 
    - [X] Add the ability to flag an existing feedback entry for further review on the /admin view.

- [X] API Doc
- [X] Add comments
- [X] Update Readme   
    - [ ] Link to deployed site
    - [ ] link to apidoc
    - [ ] license

- [ ] Deploy to heroku