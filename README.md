# Resource library

Create a web app to track record useful resources and tutorials on web development. This could documentation, videos or blog posts.

- Create a single page React app
- Use Redux if you feel up for the challenge
- Make the App responsive and ensure it works well at all screen widths. You may want to design it as mobile first.
- Apply styling using Sass
- Make use of eslint and proptypes
- Plan the layout and structure of your application before building it. Think about what components you will need and what they will do.
- Ensure as much of your code as possible is tested. Use `npm test -- --coverage` to check how much of your code is covered by tests

## Features

### Information capture
- Create form to capture title, description and url of resource.
- Add basic input validation to ensure reasonably 'valid' inputs

### Back-end
- Create RESTful API to enable you to save and load resources
- Persist resources to database

### Display
- Display the stored items to user

### Search
- This can be implemented either on front-end or back-end
- On front-end the entire dataset can be loaded into browser and searched using something like an array filter method
- On the back-end an SQL query could be used to retrieve entries which contain the query in title or description
- Display search results

### Feature of your choice
- Implement a feature of your choice

### Tagging - stretch goal
- Allow users to add tags to each resource
- Amend back-end database to allow tags to be saved for each resource. You may want to use a many-to-many relationship
- Update the interface so that a user can click on a tag to display all resources which have that tag

## Support

* Ask lots of questions on Slack
* Help your classmates if you know the answers to their questions

## README.md

When finished, include a README.md in your repo. This should explain what the project is, how to run it and how to use it. Someone who is not familiar with the project should be able to look at it and understand what it is and what to do with it.
