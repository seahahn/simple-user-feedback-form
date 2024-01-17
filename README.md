# Simple User Feedback Form

## 1️⃣ Project Introduction

🏠 Demo URL: [https://user-feedback-form.vercel.apps](https://user-feedback-form.vercel.app)

> Create a Simple User Feedback Form
>
> - Objective: Develop a small application where users can submit feedback.
> - Frontend: Use React JS to create a simple form
> - Backend: Will be discussed during the interview (Nodejs)

1. **Goal of the Form**
   Evaluate website satisfaction to enhance user experience and address potential improvements.

2. **Target Audience**
   Tailored for website visitors to gather insights into their satisfaction levels and preferences.

3. **Form Structure**
   Consists of [13 questions](feedback-questions.md), including 5-choice and multiple-choice questions, as well as open-ended inquiries, ensuring a comprehensive understanding of user feedback.

## 2️⃣ Technologies Used

| Category         | Technology        |
| ---------------- | ----------------- |
| Language         | TypeScript        |
| Framework        | Next.js, React.js |
| Styling          | Tailwind CSS      |
| State Management | Zustand           |

## 3️⃣ Directory Structure

```
.
├── __test__ // Test files for pages
├── app
│   └── feedback // The page showing when the feedback form is submitted
│       └── [questionNumber] // The feedback form page displayed by the question number
├── components
│   ├── base // Fundamental components (e.g. button, input, textarea)
│   └── composite // Components which consist of several base components
├── constants // Constant values for the application (e.g. texts, types, etc.)
├── public
├── store // Zustand store
└── styles // CSS style which is applied globally
```

## 4️⃣ How to run the application

### Using Docker

```bash
# 1. If you don't have Docker installed, install Docker first.
# https://docs.docker.com/get-docker/

# 2. Clone the repository
cd your-project-directory
git clone https://github.com/seahahn/simple-user-feedback-form.git

# 3. Build a Docker image
cd simple-user-feedback-form
docker build -t user-feedback-form .

# 4. Run the Docker container
docker run --name my-user-feedback-form -p 3000:3000 -d user-feedback-form

# 5. After running the container, you can enter the app through "http://localhost:3000"
```

### Using Local Environment

```bash
# 1. If you don't have Node.js on your local environment, install Node.js first.
# https://nodejs.org/en

# 2. Clone the repository
cd your-project-directory
git clone https://github.com/seahahn/simple-user-feedback-form.git

# 3. Install dependencies
cd simple-user-feedback-form
npm install

# 4. Run the app
npm run dev

# 5. After that, you can enter the app through "http://localhost:3000"
```
