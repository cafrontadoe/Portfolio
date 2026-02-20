# 🤖 Multilingual AI Chatbot for Automated Meeting Scheduling & Email Notifications

## Project Overview

This project features a sophisticated, multilingual AI-powered chatbot designed to streamline the process of scheduling Google Calendar meetings and sending automated email notifications. Built with a modern tech stack, this chatbot eliminates the friction of traditional scheduling by allowing users to conversationally book meetings directly. It's a practical demonstration of integrating conversational AI with external services to automate common business workflows.

**The core problem it solves:** Bridging the gap between conversational interaction and direct action (like scheduling a meeting), reducing the time and effort typically spent on coordination, especially in a multilingual context.

## ✨ Key Features

*   **Conversational Meeting Scheduling:** Users can interact naturally with the chatbot to schedule meetings.
*   **Multilingual Support:** Automatically detects the user's language, powered by OpenAI's GPT-4 Mini, enabling seamless interaction across different linguistic backgrounds.
*   **Google Calendar Integration:** Checks availability and creates new events directly within Google Calendar.
*   **Automated Email Notifications:** Sends confirmation emails with meeting details and links via Gmail.
*   **Intuitive User Interface:** A clean and responsive frontend built with React 18, Vite, and Tailwind CSS.
*   **Robust Backend Automation:** Leverages n8n for workflow orchestration and AI agent management.
*   **Containerized Deployment:** Utilizes Docker for easy setup and deployment on a Hetzner server.

## 🧠 AI & Technical Deep Dive

This project showcases a blend of AI agent capabilities, workflow automation, and modern web development.

### Conversational AI & n8n Workflow

The heart of the chatbot's intelligence lies in its n8n workflow, which orchestrates the AI agent and integrates with external services:

*   **AI Agent (GPT-4 Mini):** An AI agent, powered by OpenAI's GPT-4 Mini, is central to understanding user intent and generating appropriate responses. It's responsible for:
    *   **Language Detection:** Automatically identifying the user's language to facilitate multilingual interactions.
    *   **Information Extraction:** Eliciting necessary details for meeting scheduling (e.g., user name, email, desired date/time).
    *   **Dynamic Tool Usage:** The AI agent is equipped with "tools" to interact with Google Calendar (for availability checks and event creation) and Gmail (for sending notifications).
*   **Workflow Design:**
    1.  **User Input:** The frontend sends user messages to the n8n backend.
    2.  **AI Agent Processing:** The n8n AI Agent node processes the conversational input using GPT-4 Mini.
    3.  **Data Elicitation:** The agent guides the conversation to gather all required meeting details.
    4.  **Availability Check:** Once details are collected, the AI agent uses a Google Calendar tool to check for availability.
    5.  **User Confirmation:** The chatbot asks the user for confirmation before finalizing the meeting.
    6.  **Event Creation:** Upon confirmation, the AI agent uses another Google Calendar tool to create the event.
    7.  **Email Notification Trigger:** An `IF` block node listens for a specific pattern (e.g., `http:meeting`) in the AI agent's output, indicating a successful meeting creation.
    8.  **Email Formatting & Sending:** A `Code` node formats the meeting details, which are then passed to a `Gmail` node to send a confirmation email with the meeting URL and other relevant information.

*   **Context Management:** Currently, n8n handles the conversational context. Future enhancements aim to implement custom context management using LangChain for improved token efficiency and cost optimization.

### Frontend (React 18, Vite, Tailwind CSS)

*   **Modern Development Stack:** Built with React 18 for a component-based architecture, Vite for lightning-fast development, and Tailwind CSS for utility-first styling, ensuring a highly responsive and maintainable user interface.
*   **Professional Portfolio Integration:** The frontend serves as a personal portfolio, showcasing professional background, technologies used, and other projects, with an attached CV.
*   **Seamless Backend Communication:** The React application communicates with the n8n backend via webhooks, providing a dynamic and interactive chat experience.

### Backend & Deployment (n8n, Docker, Hetzner, Vercel)

*   **n8n Orchestration:** n8n acts as the powerful workflow automation engine, connecting the AI agent with Google services and managing the conversational flow.
*   **Docker Containerization:** The n8n instance is containerized using Docker, ensuring consistent environments and simplifying deployment. This involved configuring a `docker-compose` file for n8n, Caddy (for reverse proxy and SSL), and volume management.
*   **Hetzner Server Deployment:** The Dockerized n8n backend is hosted on a Hetzner server, providing a robust and scalable infrastructure.
*   **Vercel for Frontend:** The React frontend is deployed on Vercel, leveraging its fast global CDN and seamless deployment pipeline for static sites.
*   **Caddy Server Configuration:** A key challenge involved configuring Caddy server for proper reverse proxying, port management, and SSL termination for the n8n instance on the Hetzner server.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js (for frontend development)
*   Docker & Docker Compose
*   n8n (either via Docker or npm)
*   OpenAI API Key
*   Google Cloud Project with Google Calendar API and Gmail API enabled
*   Google OAuth 2.0 Client ID and Client Secret

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/cafrontadoe/Portfolio
    cd Portfolio
    ```

2.  **Frontend Setup:**
    ```bash
    cd frontend # or wherever your React app is located
    npm install # or yarn install
    # Create a .env file and add necessary environment variables for connecting to n8n webhook
    # Example: VITE_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/your-webhook-path
    npm run dev # To run the frontend locally
    ```

3.  **Backend (n8n) Setup with Docker:**
    *   **Configure Docker Compose:** Ensure your `docker-compose.yml` file is set up for n8n and Caddy.
    *   **Environment Variables:** Create an `.env` file for your n8n Docker setup with your OpenAI API key and any other required n8n specific variables.
    *   **Start n8n:**
        ```bash
        docker-compose up -d
        ```
    *   Access your n8n instance (usually `http://localhost:5678` or your configured domain).

4.  **Import n8n Workflow:**
    *   In your n8n instance, import the provided workflow file: `scheduling_events.json`.
    *   **Configure Webhook:** Locate the Webhook node in the imported workflow and set its "Bearer Token" to match the `bearerToken` you've configured in your frontend's `.env` file (or directly in your frontend code for testing).
    *   **Google Credentials:**
        *   In your Google Cloud Project, enable the Google Calendar API and Gmail API.
        *   Create OAuth 2.0 Client ID credentials.
        *   Set "Authorized redirect URIs" to include `http://localhost:5678/rest/oauth2-credential/callback` (or your n8n instance URL) for local development.
        *   In n8n, configure new Google OAuth2 API credentials using your Client ID and Client Secret. Connect these credentials to the Google Calendar and Gmail nodes in your workflow.
    *   **OpenAI API Key:** Ensure the OpenAI node in your workflow is configured with your OpenAI API Key.

## 📸 Screenshots & Demo

*(This is where you'll add your amazing screenshots or a link to a live demo!)*

*   [Screenshot 1: Chatbot Interface]
*   [Screenshot 2: Meeting Confirmation Email]
*   [Screenshot 3: Google Calendar Event]
*   [Link to Live Demo (if available)]

## 💡 Future Enhancements

*   **RAG Integration for FAQ:** Implement Retrieval-Augmented Generation (RAG) with LangChain to enable the chatbot to answer FAQs based on a knowledge base (e.g., my CV or project documentation), enhancing its utility for pre-interview scenarios.
*   **Advanced Context Management:** Integrate LangChain for more granular control over conversational context, optimizing token usage and reducing operational costs.
*   **Additional Integrations:** Expand the chatbot's capabilities by integrating with other services (e.g., CRM, project management tools).
*   **Voice Input/Output:** Explore adding voice capabilities for a more natural user experience.

## 🧑‍💻 My Contributions

This project was developed entirely by me, demonstrating a comprehensive skill set across several critical areas:

*   **AI Engineering:** Designing and implementing the conversational AI agent using OpenAI's GPT-4 Mini, including tool integration for external service interaction.
*   **Full-Stack Development:** Building a responsive and intuitive frontend with React 18, Vite, and Tailwind CSS, and developing the robust n8n backend workflows.
*   **DevOps & Deployment:** Configuring Docker for containerization, managing `docker-compose` for multi-service deployment, and handling complex server configurations (Caddy, SSL) on Hetzner, as well as deploying the frontend on Vercel.
*   **System Design:** Architecting the end-to-end solution, from user interaction to backend processing and external service integration.
*   **Problem Solving:** Overcoming challenges such as Caddy server configuration, secure API key management, and seamless integration between disparate services.
