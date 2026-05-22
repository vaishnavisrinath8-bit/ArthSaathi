# ArthSaathi

AI Powered Rural Financial Intelligence Platform

---

# Problem Statement

Millions of rural users still struggle with:
- financial illiteracy
- language barriers
- unsafe loan practices
- scam vulnerability
- lack of financial guidance
- inaccessible digital banking systems

Most existing fintech platforms are:
- English-first
- text-heavy
- urban-focused
- difficult for low-literacy users

ArthSaathi aims to solve this through:
- voice-first interaction
- multilingual AI assistance
- financial intelligence
- accessible user experience

---

# Project Vision

ArthSaathi is a multilingual AI-powered financial assistant designed for rural and underserved communities.

The platform helps users:
- track expenses using voice
- understand financial health
- analyze loan safety
- detect scams
- upload RTC documents
- receive personalized financial guidance

using a simple voice-first experience.

---

# Core Features

## Voice AI Assistant

Users can:
- speak naturally in regional languages
- ask financial questions
- receive AI-generated financial guidance

---

## Expense Tracking

Users can track:
- expenses
- income
- savings

using:
- voice input
- text input

---

## Financial Planning

AI analyzes:
- income
- expenses
- savings patterns

and generates:
- savings plans
- budgeting advice
- financial summaries

---

## Loan Risk Analysis

The system evaluates:
- repayment capability
- financial stability
- spending patterns

and provides:
- safe loan recommendations
- financial risk indicators

---

## Scam Detection

Users can ask:
- whether a call/message/payment is suspicious

The AI identifies:
- OTP scams
- fake banking fraud
- suspicious requests

---

## RTC OCR Extraction

Users can upload:
- RTC documents
- land records

The AI extracts:
- land information
- crop details
- ownership metadata

---

## Dashboard Analytics

Interactive dashboard showing:
- total income
- total expenses
- savings
- financial insights
- risk analysis

---

## Multilingual Support

Supports:
- Kannada
- Hindi
- English

with voice-first interaction.

---

# System Architecture

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

# Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React Native + Expo Router |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL |
| ORM | Prisma ORM |
| AI Service | FastAPI |
| Speech-to-Text | Whisper |
| OCR | EasyOCR |
| AI | OpenAI GPT |
| State Management | Zustand |
| Styling | NativeWind |

---

# Project Structure

```txt
arthsaathi/
│
├── mobile-app/
├── backend/
├── ai_service/
├── docs/
│
├── package.json
├── README.md
└── .env
```

---

# Frontend Structure

```txt
mobile-app/
│
├── app/
├── src/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   ├── store/
│   ├── utils/
│   └── assets/
```

---

# Backend Structure

```txt
backend/
│
├── src/
│   ├── modules/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   ├── app.ts
│   └── server.ts
│
├── prisma/
└── package.json
```

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

# Main Modules

## Frontend

Handles:
- UI/UX
- dashboards
- voice interaction
- navigation
- analytics

---

## Backend

Handles:
- APIs
- authentication
- database orchestration
- transactions
- dashboard summaries

---

## AI Service

Handles:
- OCR extraction
- speech processing
- financial analysis
- scam detection
- loan analysis

---

# Database Models

## User

Stores:
- user profile
- phone number
- authentication data

---

## Transaction

Stores:
- expenses
- income
- savings records

---

## AI Reports

Stores:
- financial summaries
- risk analysis
- AI-generated insights

---

## RTC Records

Stores:
- extracted OCR data
- land records
- metadata

---

# API Flow

```txt
Frontend
    ↓
Backend
    ↓
AI Service
    ↓
OpenAI / OCR
    ↓
Database
```

---

# Team Structure

| Member | Responsibility |
|---|---|
| Member 1 | Backend APIs + Authentication |
| Member 2 | Database + Backend Integration |
| Member 3 | AI Service + OCR + Voice |
| Member 4 | Frontend + Dashboard + Voice UI |

---

# Development Rules

- Nobody waits for anyone
- Use mock APIs until integration
- API contracts fixed on Day 1
- Modular development only
- Daily sync before sleeping

---

# Setup Guide

# Clone Repository

```bash
git clone <repository-url>
```

---

# Install Frontend

```bash
cd mobile-app
npm install
```

---

# Install Backend

```bash
cd backend
npm install
```

---

# Install AI Service

```bash
cd ai_service

python -m venv venv
```

Activate venv:

## Windows

```bash
venv\Scripts\activate
```

## Mac/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# Run Frontend

```bash
cd mobile-app
npx expo start
```

---

# Run Backend

```bash
cd backend
npm run dev
```

---

# Run AI Service

```bash
uvicorn app.main:app --reload
```

---

# Documentation

Detailed documentation available inside:

```txt
docs/
```

Includes:
- architecture
- roadmap
- API specs
- DB schema
- setup guide
- demo flow

---

# Future Scope

- AI voice calling
- Offline-first mode
- Aadhaar-based onboarding
- Crop intelligence
- UPI transaction analysis
- Financial reputation scoring
- SHG integration

---

# Final Goal

Build an accessible AI-powered financial ecosystem that enables rural users to:
- understand finances
- avoid scams
- make safer loan decisions
- improve savings habits
- interact naturally in their own language

through a voice-first experience.

---