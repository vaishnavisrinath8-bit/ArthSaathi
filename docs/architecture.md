# ArthSaathi — System Architecture

AI Powered Rural Financial Intelligence Platform

---

# Project Vision

ArthSaathi is a multilingual AI-powered financial assistant designed for rural and underserved communities.

The platform helps users:
- track expenses using voice
- understand financial health
- detect scams
- analyze loan safety
- upload RTC/financial documents
- receive personalized financial guidance

The entire platform is designed to work with:
- low literacy users
- regional languages
- voice-first interaction
- simple UI/UX

---

# Core Architecture

```txt
React Native Expo App
          ↓
Node.js Backend
          ↓
FastAPI AI Service
          ↓
OpenAI / Whisper / OCR
          ↓
PostgreSQL Database
```

---

# High Level Flow

## Step 1 — User Interaction

The user interacts with the mobile application using:
- voice input
- text input
- RTC uploads
- expense tracking

The frontend is built using:
- React Native
- Expo Router

---

## Step 2 — Backend Processing

The frontend sends requests to the Node.js backend.

The backend handles:
- authentication
- transactions
- dashboard analytics
- user management
- AI orchestration
- file uploads

The backend acts as the central orchestrator.

---

## Step 3 — AI Processing

The backend communicates with the FastAPI AI service.

The AI service handles:
- financial analysis
- OCR extraction
- speech-to-text
- loan risk analysis
- scam detection
- multilingual AI processing

---

## Step 4 — Database Storage

The backend stores:
- transactions
- users
- reports
- AI summaries
- extracted RTC data

using:
- PostgreSQL
- Prisma ORM

---

# Frontend Architecture

# Technology

- React Native
- Expo Router
- Zustand
- Axios
- NativeWind

---

# Frontend Responsibilities

The frontend handles:
- user interaction
- navigation
- dashboards
- voice recording
- RTC uploads
- charts
- analytics rendering

---

# Frontend Structure

```txt
mobile-app/
│
├── app/
├── src/
│   ├── components/
│   ├── services/
│   ├── store/
│   ├── hooks/
│   ├── utils/
│   └── assets/
```

---

# Expo Router Navigation

```txt
app/
│
├── (auth)/
├── (tabs)/
├── voice/
├── dashboard/
├── financial-plan/
├── rtc-upload/
└── scam-check/
```

---

# Backend Architecture

# Technology

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

---

# Backend Responsibilities

The backend acts as:
- API gateway
- orchestration layer
- database manager

---

# Main Backend Modules

## Auth Module

Handles:
- login
- registration
- JWT authentication

---

## Transaction Module

Handles:
- expenses
- income tracking
- savings tracking

---

## Dashboard Module

Handles:
- analytics
- summaries
- reports

---

## RTC Module

Handles:
- RTC uploads
- OCR forwarding
- extracted data storage

---

## AI Module

Handles:
- communication with FastAPI AI service
- AI result processing

---

# Backend Structure

```txt
backend/
│
├── src/
│   ├── modules/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── routes/
│   ├── app.ts
│   └── server.ts
│
├── prisma/
└── package.json
```

---

# AI Service Architecture

# Technology

- FastAPI
- OpenAI
- Whisper
- EasyOCR

---

# AI Responsibilities

The AI service handles:
- financial intelligence
- OCR extraction
- speech processing
- multilingual understanding

---

# AI Modules

## Speech Module

Handles:
- speech-to-text
- text-to-speech

---

## Finance AI Module

Handles:
- savings plans
- financial analysis
- loan safety analysis

---

## OCR Module

Handles:
- RTC extraction
- document parsing

---

## Scam Detection Module

Handles:
- scam analysis
- fraud detection

---

# AI Service Structure

```txt
ai_service/
│
├── app/
│   ├── speech/
│   ├── finance_ai/
│   ├── ocr/
│   ├── scam_detection/
│   ├── routes/
│   └── main.py
│
└── requirements.txt
```

---

# Database Architecture

# Technology

- PostgreSQL
- Prisma ORM

---

# Main Tables

## User

Stores:
- user details
- phone number
- profile information

---

## Transaction

Stores:
- expenses
- income
- categories
- timestamps

---

## AI Reports

Stores:
- financial analysis
- risk reports
- AI summaries

---

## RTC Records

Stores:
- uploaded documents
- extracted land details
- OCR metadata

---

# API Flow

```txt
Frontend
    ↓
Backend API
    ↓
AI Service
    ↓
OpenAI / OCR
    ↓
Backend
    ↓
Database
    ↓
Frontend
```

---

# Authentication Flow

```txt
User Login
    ↓
Backend Auth API
    ↓
JWT Generated
    ↓
Token Sent To Frontend
    ↓
Protected API Access
```

---

# Voice Processing Flow

```txt
User Speaks
    ↓
Audio Recorded
    ↓
Whisper STT
    ↓
Text Extracted
    ↓
OpenAI Analysis
    ↓
AI Response Generated
    ↓
Frontend Displays Result
```

---

# OCR Flow

```txt
RTC Uploaded
    ↓
Backend Receives File
    ↓
AI Service OCR
    ↓
Text Extracted
    ↓
Structured Data Returned
    ↓
Stored In Database
```

---

# Financial Analysis Flow

```txt
User Expense Data
    ↓
AI Financial Analyzer
    ↓
Income vs Expense Analysis
    ↓
Savings Suggestions
    ↓
Loan Risk Analysis
    ↓
Dashboard Update
```

---

# Main Features

- Voice AI Assistant
- Expense Tracking
- Financial Planning
- Loan Risk Analysis
- Scam Detection
- RTC OCR Extraction
- Dashboard Analytics
- Multilingual Support

---

# Development Principles

- Modular architecture
- Independent team development
- Fixed API contracts
- AI-first workflow
- Mobile-first design
- Voice-first interaction

---

# Final Goal

The final platform should allow rural users to:
- talk naturally in their language
- understand finances
- analyze risks
- improve savings habits
- avoid scams
- receive personalized guidance

through an accessible AI-powered experience.