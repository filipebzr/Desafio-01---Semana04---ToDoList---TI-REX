# Project Manager

**Project Manager** is a web application designed to help teams and individuals manage projects, tasks, and collaborate efficiently in one place.

## Key Features

- **Kanban Board**: Organize tasks into "To Do", "In Progress", and "Complete" columns to track progress.
- **User Management**: Login and validation of email and password with visual feedback for the user.
- **Update Subscription**: Capture user emails and names to send notifications about updates and news.
- **Responsive Design**: Clean and intuitive interface with responsive design, optimizing user experience across devices.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Validation**: Regex for client-side email and password validation
- **Local Storage**: Utilizes `localStorage` to save user data.

## Project Structure

```plaintext
.
├── home.html           # Home page
├── kanban.html         # Kanban Board
├── script.js           # Scripts for the homepage and general functionalities
├── script-login.js     # Scripts for authentication and login
├── style-login.css     # Main application styling
```

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/project-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd project-manager
   ```
3. Open the `home.html` file in your browser to get started.

## Prerequisites

- Updated browser (Chrome, Firefox, Edge, etc.)
- Internet connection to load external fonts and icons.

## Future Improvements

- Implement a back-end for centralized data management.
- Support for multiple users with secure authentication.
- Integration with productivity tools such as Google Calendar and Slack.

## Contribution

Contributions are welcome! Feel free to open a pull request or create an issue to discuss improvements.
