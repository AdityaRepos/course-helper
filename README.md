# Course Helper

The Course Helper web application will serve as a centralized platform where students can easily access and share course resources, saving time and effort in locating the necessary materials and assists students and moderators in managing and accessing course-related information. It provides features such as reviews, resource organization, and course search.

## Usage
- This is the link to the website I deployed on Vercel -> https://course-helper-iota.vercel.app
- When you open the link you will be redirected to course helper home page.
- On homepage, you can search course title
- On course page, you will see some description, link to previous year grades and below that resources. and in the side some reviews
- On grading page, grades related to that course will be displayed in decending order of their year.
- A sign In and Sign Up page is made for users.
- On admin page, moderators can approve resources shared by students (this one is not implemented) and reviews that students give. 

## Features

- Course Search: Enables users to search for courses based on their titles.
- Resource Organization: Provides a way to organize and access various course resources such as lecture notes, assignments, reference materials, and previous year papers.
-  for now I have provided some dummy data for MTH, Phy and Ta (its case insensitive).
-  Review section is provided with an area for submitting own review on the course. A plus sign on the navbar which can be used if student wants to share any resource.
- Reviews: Allows moderators to review and approve student comments for courses.


## Technologies Used

- Vercel: Static Website Hosting service where I hosted my website.
- React: JavaScript library for building the user interface.
- Next.js: React framework for server-rendered applications.
- Material-UI: UI component library for React.
- GitHub Pages: Hosting platform for deploying the application.
- HTML/CSS: Markup and styling of the web pages.
- PIE GOOGLE CHART: Used for making the interactive pie-chart for grades.
- JavaScript: Programming language for client-side functionality.

## Getting Started

To run the Course Helper application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/course-helper.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:3000` in your web browser.
   OR
   Use the link i provided.

## Known Issues

- I was not able to modify or too much i had to give time on root endpoint for changing it so i just redirected the webpage to /home.
- I have not put any dummy data in resources section for now.
- Getting error while trying to display preview of resources (for now I have not implemented it).
- On admin (moderator) page, I tried to implement approval system for resources but it would take too much time to implement.
- Tried to expand horizontally the cards in course page but nothing works (I guess code structure is the problem).
- When exporting the application using `next export`, an error occurs due to the use of the App Router. Please use the `output: export` configuration in `next.config.js` to resolve this issue. So, I deployed my website on Vercel that doesn't cause any error as its made by the team of next.js itself.

## Acknowledgements

- [Material-UI](https://mui.com) - UI component library for React.
- [Next.js](https://nextjs.org) - React framework for server-rendered applications.
- [GitHub Pages](https://pages.github.com) - Hosting platform for deploying the application.
- [Pie-google-chart](https://www.react-google-charts.com/examples/pie-chart) - Pie charts I used.
- [Grades](https://incog-nahito.github.io/grades/faculty/) - Grades of different faculty on different years on different courses (got inspiration).
- [React Templates](https://mui.com/material-ui/getting-started/templates/) - Some free reatc templates.
- [auto-cab-iitk for](https://github.com/AdityaRepos/auto-cab-iitk) - Simple webpage i made for hackathon team project.
- [Demo Post Page](https://github.com/AdityaRepos/demo) - Made a demo for campus fora post page.
- [Deploy to vercel](https://youtu.be/_8wkKL0LKks) - A video walkthrough on how to deploy website on vercel.
- [Favicon](https://icons8.com/icon/kJr8od2fGcmF/apps-tab) - Used for website icon for now.
