# Resumind | AI Resume Reviewer

Resumind is a modern, AI-powered resume analysis tool designed to help job seekers optimize their resumes. It provides detailed feedback, ATS (Applicant Tracking System) scoring, and actionable suggestions to improve your chances of landing an interview.

![Resumind Hero](/app/public/readme/hero.webp)

## 🚀 Features

- **AI Analysis**: Deep analysis of resume content using Puter's AI capabilities.
- **ATS Scoring**: Get an estimated ATS score and tips to improve it.
- **Visual Feedback**: Side-by-side view of your resume and AI-generated feedback.
- **Secure Storage**: Your resumes are stored securely using Puter's cloud filesystem.
- **Authentication**: Seamless login and user management via Puter.js.
- **PDF Support**: Automatic conversion of PDF resumes to images for better previewing.

## 🛠️ Tech Stack

- **Framework**: [React Router 7](https://reactrouter.com/) (Full-stack React)
- **Cloud Platform**: [Puter.js](https://puter.com/) (Auth, AI, KV, FS)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Requirements

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/) or similar package manager
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## ⚙️ Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd AI-resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 📜 Available Scripts

- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Compiles the application for production.
- `npm run start`: Runs the built production server.
- `npm run typecheck`: Generates React Router types and runs TypeScript compiler checks.

## 📁 Project Structure

```text
├── app/
│   ├── components/    # Reusable UI components
│   ├── constants/     # Configuration and constant values
│   ├── lib/           # Utility functions and Puter.js integration
│   ├── routes/        # Application pages and routing logic
│   ├── types/         # TypeScript definitions
│   └── root.tsx       # Root layout and entry point
├── public/            # Static assets (fonts, worker scripts)
├── react-router.config.ts # React Router configuration
├── vite.config.ts     # Vite configuration
└── Dockerfile         # Docker deployment configuration
```

## 🔐 Environment Variables

TODO: List any required environment variables if applicable. Currently, the application primarily relies on Puter.js client-side integration.

## 🧪 Tests

TODO: Add testing framework and implementation details.

## 🐳 Docker Deployment

To build and run using Docker:

```bash
docker build -t resumind .
docker run -p 3000:3000 resumind
```

## 📄 License

TODO: Add license information (e.g., MIT, Apache 2.0).

---

Built with ❤️ using React Router and Puter.js.
