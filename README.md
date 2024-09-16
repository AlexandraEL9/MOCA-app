# [M.O.C.A- My Own Cooking App](https://your-project-link-here)

![mockup](app/wireframes/mockups.png)

Welcome to **MOCA**! All the recipes you and your family love, all in one place! M.O.C.A (My Own Cooking App) is a simple ad easy to use app I made formyself to quicky access my favourite recipes without having to search through the myriad of books, online and pinterest pages to find their details. Recipes can be added simply and searched by category or by ingredient and viewed at the click of a button!

- This project was completed for the Milestone 3 project in Level 5 Web Application and Development. specifically the **Data Centric Development** module. The purpose for this milestone project is to "*Create a web application that allows users to store and easily access recipes*", using the **CRUD** operations of **C**reate, **R**ead, **U**pdate, and **D**elete for their recipes.

---

## Table of Contents
1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Design**](#design)
        - [**Framework**](#framework)
        - [**Color Scheme**](#color-scheme)
        - [**Icons**](#icons)
        - [**Typography**](#typography)
    - [**Wireframes**](#wireframes)

2. [**Testing**](#testing)
    - [**Validators**](#validators)
    - [**Compatibility**](#compatibility)
    - [**Known Issues**](#known-issues)

3. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

4. [**Technologies Used**](#technologies-used)
    - [**Front-End Technologies**](#front-end-technologies)
    - [**Back-End Technologies**](#back-end-technologies)

5. [**Deployment**](#deployment)
    - [**Local Deployment**](#local-deployment)
    - [**Remote Deployment**](#remote-deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

---

## UX

This project is a personal endeavor to create a platform for managing recipes. The goal is to provide a user-friendly interface where the user can easily add, view, and manage recipes while enjoying a clean, tidy and intuitive design.

### User Stories

"**_As a user, I would like to_** _____________________________"

:white_check_mark: *denotes items that have been successfully implemented*

- ✅ *view the site* from **any device** *(mobile, tablet, desktop)*.
- ✅ *view all recipes*.
- ✅ *search for recipes* by **category**.
- ✅ *search recipes* by **name** or **ingredients**.
- ✅ *view a single recipe* with **details** including **ingredients** and **instructions**.
- ✅ *add* new recipes with **name, description, ingredients, instructions, and image**.
- ✅ *edit* existing recipes and categories.
- ✅ *delete* recipes and categories.
- ✅ *upload an image* for each recipe.
- ✅ *view* recipes with a **clean layout** and **responsive design**.
- ✅ *ensure* at least one step is added when creating a recipe.

### Design

**Framework**: Utilizes **Bootstrap** and **Materialize** for responsive design and UI components.

**Color Scheme**: Employs a warm and inviting color palette suitable for food-related content. 

![Color Scheme](/docs/color-pallet.png)

### Color Usage

- **Main Color (`#0A605F`)**: This rich teal color is used for the background of the header and footer, as well as key elements like the navigation bar. It helps to establish a cohesive and visually appealing theme across the application.
- **Secondary Color (`#F44336`)**: This vibrant red is used for borders, highlights, and buttons. It adds a striking contrast to the main color and draws user attention to interactive elements.
- **White (`#fff`)**: White is used for text on dark backgrounds and as the background color for certain sections. It ensures that text is easily readable against darker colors and provides a clean look.
- **Black (`#000`)**: Black is used for text and navigation backgrounds to enhance readability and provide a strong contrast with lighter elements.

This color scheme is designed to be both visually appealing and functional, ensuring that the application's interface is user-friendly and aesthetically consistent.

**Icons**: Uses icons from **FontAwesome** for visual enhancements.

**Typography**: 

- The typography for the Recipe App is designed to prioritize readability, clarity, and a modern aesthetic, enhancing the overall user experience.

1. **Font Family**: The primary font used is "Poppins", a sans-serif font, which provides a clean, contemporary look. For headings, the "Playfair Display" serif font is used, adding a touch of elegance and sophistication to the design. These choices ensure that the text is legible across all devices and browsers, while also giving the app a distinctive style.

2. **Font Weight**: A variety of font weights are used throughout the app to create visual hierarchy and emphasis. Bold weights are employed for headings (h1, h2, h3) to draw attention and make key sections stand out. Lighter weights are used for body text, maintaining a comfortable reading experience without overwhelming the user.

3. **Consistency**: Consistency in typography is maintained across the entire app to ensure a cohesive and unified design. The same font families, weights, and sizes are used throughout various sections, contributing to a harmonious and professional visual aesthetic. This consistency also reinforces the app's branding and enhances user navigation by providing a familiar visual structure.

By carefully selecting and applying these typography principles, the Recipe App not only looks visually appealing but also ensures that users can easily read and interact with the content.

## Wireframes
I used [Balsamiq Wireframes](https://balsamiq.com/wireframes/) to create wireframes before starting the project to help me plan the layout and flow of the project.<br>
When I was creating my website, the design plan was changed but only small placement changes.

 ### Homepage Wireframes

- [**Desktop**](./docs/wireframes/wf-homepage-desktop.png)
- [**Tablet**](./docs/wireframes/wf-homepage-tablet.png)
- [**Mobile**](./docs/wireframes/wf-homepage-mobile.png)

 ### Categories page Wireframes

- [**Desktop**](./docs/wireframes/wf-categories-desktop.png)
- [**Tablet**](./docs/wireframes/wf-categories-tablet.png)
- [**Mobile**](./docs/wireframes/wf-categories-mobile.png)

### Search Results page Wireframes

- [**Desktop**](./docs/wireframes/wf-search-results-desktop.png)
- [**Tablet**](./docs/wireframes/wf-search-results-tablet.png)
- [**Mobile**](./docs/wireframes/wf-search-results-mobile.png)

### View Recipe page Wireframes

- [**Desktop**](./docs/wireframes/wf-view-recipe-desktop.png)
- [**Tablet**](./docs/wireframes/wf-view-recipe-tablet.png)
- [**Mobile**](./docs/wireframes/wf-view-recipe-mobile.png)

### Add/edit Category page Wireframes

- [**All**](./docs/wireframes/wf-add-update-category-all.png)

### Add/edit Recipe page Wireframes

- [**All**](./docs/wireframes/wf-add-update-recipe-all.png)

---

## Testing
### Accessibility Testing
- **Accessibility Testing**: Ensures the site is accessible to all users, including those with disabilities.

| Test Case ID | Test Description                                                                                             | Expected Result                                                                                       
|--------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| AT-01        | Verify the website meets accessibility standards (e.g., chrome DevTools, lighthouse)                                            | Website meets accessibility standards, ensuring it is usable by people with disabilities<br>Accessibility score in the green (90-100)              |

### Desktop Lighthouse Test Results

| Page | Home | Categories | Add Recipe | Edit Recipe | Add Category | Edit Category | View Search Results | View Recipe |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Scores    | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 93 <br> Best Practices- 100   | Acessibility- 93 <br> Best Practices- 96   | Acessibility- 93 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   |
| Pass/fail   | Pass   | Pass  | Pass  | Pass  | Pass  | Pass  | Pass  | Pass |
| Evidence    | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-homepage.png) | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-categories.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-add-recipe.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-edit-recipe.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-add-category.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-edit-category.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-search-results.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-desktop-view-recipe.png) |


### Mobile Lighthouse Test Results

| Page | Home| Categorieies | Add Recipe | Edit Recipe | Add Category | Edit Category | View Search Results | View Recipe |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Scores    | Accessibility- 100 <br> Best Pracices- 96   | Data Accessibility- 100 <br> Best Pracices- 96   | Accessibility- 93 <br> Best Pracices- 100  | Acessibility- 93 <br> Best Practices- 96   | Acessibility- 93 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96   | Acessibility- 100 <br> Best Practices- 96
| Pass/fail    | Pass   | Pass  | Pass  | Pass  | Pass  | Pass  | Pass  | Pass  |
| Evidence    | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-homepage.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-categories.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-add-recipe.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-edit-recipe.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-add-category.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-edit-category.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-search-results.png)  | [Image Results](./docs/testing/lighthouse-testing/lighthouse-mobile-view-recipe.png)  |



### Validators

- **HTML**: Validated using [W3C HTML Validator](https://validator.w3.org/).
- **CSS**: Validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- **JavaScript**: Validated using [ES Hint Validator](https://jigsaw.w3.org/css-validator/).
- **Python**: Validated using [Pep8](https://jigsaw.w3.org/css-validator/).

### Validator Testing
- **Validator Testing**: Ensures that the website's code adheres to established standards and best practices, which helps improve functionality, accessibility, and cross-browser compatibility.

| Test Case ID | Test Description                                                                                             | Expected Result                                                                                       | Pass/Fail | Comments                       |
|--------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-----------|-------------------------------|
| VT-01        | HTML: code adheres to standards and best practices when run through the validator               |   Code passes through the validator with no errors        |           Pass                    |[W3C Markup Validator index.html](https://validator.w3.org/nu/#textarea) - ![Results](/docs/testing/w3c-index.html-validator.png)<br>-validator passed index.html with only one warning, however, this particular h2 is populated by javaScript to ensure the correct date is displayed.<br>[W3C Markup Validator index.html](https://validator.w3.org/nu/#textarea) - ![Results](/docs/testing/w3c-index.html-validator-2.png)<br>-validator passed index.html with no errors- added placeholder text to elements populated by javaScript<br>[W3C Markup Validator error.html](https://validator.w3.org/nu/#textarea) - ![Results](/docs/testing/w3c-error.html-validator.png)<br>-validator passed error.html no errors or warnings.
| VT-02        | CSS: code adheres to standards and best practices when run through the validator               | Code passes through the validator with no errors           |  Pass                             |[W3C Markup Validator index.html](https://jigsaw.w3.org/css-validator/#validate_by_input) - ![Results](/docs/testing/w3c-styles.css-validator.png)<br>-validator passed styles.css with no errors or warnings.
| VT-03        | JavaScript: code adheres to standards and best practices when run through the jshint validator<br>              |   Code passes through the validator with no errors        |          Pass                     |[jshint Markup Validator script.js](https://jshint.com/) - ![Results](/docs/testing/jshint-script.js-validation.png)<br>-validator passed script.js with no errors or warnings.<br>[jshint Markup Validator error.js](https://jshint.com/) - ![Results](/docs/testing/jshint-error.js-validation.png)<br>-validator passed error.js with no errors or warnings.

### Testing User Stories from User Experience (UX) Section

### Compatibility

- **Browsers**: Tested across major browsers including Chrome, Firefox, Safari, and Edge.
- **Devices**: Ensured responsiveness on mobile devices, tablets, and desktops.

### Known Issues

- **Image Upload**: Occasionally, large images may cause delays in upload.

---

## Features

### Existing Features

- **Recipe Management**: Users can add, edit, and delete recipes.
- **Recipe Management- Searching**: Users search for recipes through a searchbar or through a category search..
- **Recipe Details**: Displays ingredients and instructions in a well-organized format.
- **Image Upload**: Users can upload images for recipes.
- **Responsive Design**: Accessible from all devices.
- **User Authentication**: Basic functionality for managing recipes.

### Features for scaling up of app

- **User Ratings and Reviews**: Allow users to rate and review recipes.
- **Advanced Filtering**: Implement more detailed filters for dietary needs and preparation time.
- **Recipe Recommendations**: Suggest recipes based on user activity and preferences.
- **Meal Planning**: Add functionality for meal planning and grocery list generation.
- **User Profiles**: Enhance profiles with user-specific recipes and saved favorites.
- **Printing and Sharing**: Options to print recipes and share them via social media.
- **User Authentication**: Basic functionality for managing recipes.

---

## Technologies Used

### Front-End Technologies

- **HTML5**: Markup language for structuring the web content.
- **CSS3**: Styling the visual presentation.
- **JavaScript**: Adding interactivity and dynamic content.
- **Bootstrap**: Framework for responsive design.
- **Materialize**: UI components and design enhancements.
- **FontAwesome**: Icons for visual representation.

### Back-End Technologies

- **Python**: Programming language used for server-side logic.
- **Flask**: Web framework for building the application.
- **SQLAlchemy**: ORM for database management.
- **SQLite**: Database system used for data storage.

---

## Deployment

### Local Deployment

1. Clone the repository: `git clone https://your-repository-link.git`
2. Navigate to the project directory: `cd your-project-directory`
3. Install dependencies: `pip install -r requirements.txt`
4. Run the application: `python app.py`
5. Open your browser and visit `http://127.0.0.1:5000`

### Remote Deployment

- **Hosting**: The project is hosted on [Heroku](https://heroku.com) or [Another Hosting Service].
- **Deployment Steps**: Follow the platform-specific guide for deployment.

---

## Credits

### Content

- **Recipe Data**: All recipe content is created by the project team.

### Media

- **Images**: Images used in wireframes and mockups are sourced from [Placeholder Image Service](https://placeholder.com).

### Code

- **Contributions**: Special thanks to contributors for code improvements and bug fixes.

### Acknowledgements

- **Resources**: Thanks to [Materialize](https://materializecss.com) and [Bootstrap](https://getbootstrap.com) for their design frameworks.
- **Learning**: Acknowledgment to [Code Institute](https://codeinstitute.net/) for providing the foundational knowledge.
