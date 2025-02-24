# **Neighbor4Hire — Software Design Document**

> File Location: Docs/SDD.md
> 
> 
> **Last Updated**: 2/9/2025
> 

## **1. Introduction**

### 1.1 Purpose

This document provides a comprehensive overview of the **Neighbor4Hire** platform design, including its architecture, features, data models, and future roadmap. It serves as a reference for developers, stakeholders, and anyone involved in building or maintaining the application.

### 1.2 Scope

- Define the system’s **functional requirements** (job listings, scheduling, payments, disputes, etc.).
- Outline **non-functional requirements** (security, performance, scalability).
- Describe the **high-level architecture** (MERN stack) and **key modules**.
- Provide **data modeling** insights (MongoDB collections).
- Specify **future enhancements** beyond the MVP.

### 1.3 Document Overview

This design document covers the application’s functionality, system architecture, data flows, and technology stack. It concludes with a roadmap for feature expansion and improvements.

---

## **2. System Overview**

Neighbor4Hire is a two-sided marketplace with **Service Seekers** (looking to hire help) and **Service Providers** (offering services). The platform enables users to create or apply to job postings, schedule appointments, chat in real-time, process payments securely, and leave reviews.

### 2.1 Goals & Objectives

1. **Seamless User Experience**: Quick onboarding, clear job posting and scheduling, easy communication, and transparent payments.
2. **Trust & Safety**: Ratings, reviews, ID verification, and dispute resolution.
3. **Monetization**: A 5% platform fee charged to the Seeker.
4. **Scalability**: Design for potential growth, including a future mobile app (React Native) and additional features (background checks, external calendar sync).

### 2.2 High-Level Requirements

- **User Management**: Registration, authentication (JWT or session), profiles, role-specific onboarding.
- **Job Management**: Create, browse, filter, and schedule jobs.
- **Payment Processing**: Integrate with iDeal & PayPal for secure payments; 48-hour dispute hold.
- **Communication**: In-app chat, email notifications, and optional push alerts.
- **Reviews & Ratings**: Dual-blind feedback system, displayed after both parties review or a time period elapses.
- **Disputes**: 48-hour window to file disputes post-job completion; funds held until resolved.

---

## **3. Architecture & Technology Stack**

```
[React Client] <--> [Node.js + Express + Socket.io] <--> [MongoDB]
                         \----> [iDeal/PayPal] <----/

```

1. **React Front End**
    - React, React Router, possibly Redux/Context for state management.
    - Responsive UI for desktop and mobile browsers.
2. **Node.js + Express Server**
    - **REST APIs** for authentication, jobs, payments, disputes, etc.
    - **WebSocket** (Socket.io) for real-time chat.
    - Payment integration to iDeal/PayPal using respective SDKs or REST APIs.
3. **MongoDB**
    - Collections for users, jobs, bookings, reviews, chats, and transactions.
    - Mongoose ORM for schema definitions and DB interactions.
4. **Hosting & Deployment** (To be decided)
    - Could use services like AWS (EC2, Elastic Beanstalk, Mongo Atlas), Heroku, or similar.

---

## **4. Key Modules**

### 4.1 User & Role Management

- **Seeker** and **Provider** roles.
- **Guided Onboarding** wizard for profile setup, location preferences, or skill listing.
- **Verification** step (manual ID checks or third-party integration).

### 4.2 Job Postings & Search

- **Create Listing** (Seeker): Title, description, location (manual or GPS), availability/time slots, pricing model (hourly/fixed).
- **Search** (Provider): Filters by location, category, keywords, date range.
- **Edit/Cancel** until confirmed booking.

### 4.3 Scheduling & Calendar

- **Internal Calendar**: Allows Providers to set availability and Seekers to propose times.
- **Booking Confirmation**: Once agreed, the time slot is marked as “reserved” for both parties.
- **Duration Tracking**: For hourly jobs, track start/end times.

### 4.4 Payments & Disputes

- **Payment Flow**: Seeker pays (base cost + 5% fee) via iDeal/PayPal upon job completion.
- **Dispute Window**: 48-hour period where funds remain on hold (escrow).
- **Release Funds**: If no dispute is filed, the Provider receives payment.
- **Refunds** or **adjustments** are part of dispute resolution (administrative or manual process in MVP).

### 4.5 Ratings & Reviews

- **Dual-Blind**: Both parties submit reviews, hidden until each side completes the review or the period ends.
- **5-Star + Text**: Optionally add follow-up comments or edits.
- **Aggregate Ratings**: Displayed on user profiles for trust building.

### 4.6 In-App Messaging & Notifications

- **Real-Time Chat**: Socket.io-based 1:1 or job-specific channels.
- **Email Alerts**: For job requests, booking confirmations, dispute changes, etc.
- **Push Notifications**: (Browser or mobile) if user opts in. MVP focuses on chat + email.

---

## **5. Data Model**

(At a high level; details to be fleshed out in the data modeling phase.)

1. **User**
    - `role`: ‘Seeker’ or ‘Provider’
    - `profile`: name, bio, location, skills (for Provider), verification status, rating, etc.
    - `email`, `password` (hashed), `createdAt`, `updatedAt`
2. **Job**
    - `title`, `description`, `location`, `priceModel` (hourly/fixed), `status` (open, booked, completed), `timeSlots`
    - References: `Seeker` user, possibly `Provider` user once booked
    - `createdAt`, `updatedAt`
3. **Booking** (or embedded in `jobs`)
    - `jobId`, `providerId`, `seekerId`, `startTime`, `endTime` (if hourly)
    - `status` (pending, confirmed, completed, disputed)
4. **Review**
    - `jobId`, `reviewerId`, `reviewedUserId`, `rating` (1-5), `comment`
    - `visibilityStatus` (hidden, visible), `createdAt`
5. **Chat**
    - `conversationId` or `jobId`, participants, messages, timestamps.
6. **Transaction**
    - `jobId`, `amount`, `status` (pending, disputed, complete, refunded), `fees`, `gateway` (iDeal/PayPal).
    - `createdAt`, `updatedAt`.

---

## **6. Security & Compliance**

1. **Authentication**: Secure token-based (JWT) or session-based with HTTP-only cookies.
2. **Data Protection**: Store passwords hashed (bcrypt or argon2). Use SSL/TLS in production.
3. **GDPR Compliance**: For EU-based users, handle data retention policies, opt-ins, and privacy disclaimers.
4. **Payments**: Offload sensitive payment details to iDeal/PayPal, avoiding storing raw card data.

---

## **7. Non-Functional Requirements**

1. **Performance**: Must handle concurrent requests for chat and job searching.
2. **Scalability**: Design for future expansions, including microservices if needed.
3. **Availability**: Target 99%+ uptime. Host on reliable cloud platforms.
4. **Maintainability**: Code organization with linting, Prettier, a standard folder structure, and tests.
5. **Security**: Role-based access control, secure endpoints, and routine vulnerability checks.

---

## **8. Roadmap**

### 8.1 MVP

- Two user roles, basic job posting, internal scheduling, iDeal/PayPal integration, real-time chat, reviews, dispute window.

### 8.2 Future Enhancements

- **Admin Dashboard**: Manage disputes, verify IDs, moderate content.
- **Job Amendments**: Mid-job changes to pricing or scope, pending mutual agreement.
- **Calendar Sync**: Google/Apple/Outlook for professional providers.
- **Background Checks**: Third-party or official checks for provider credibility.
- **React Native App**: Leverage existing APIs for mobile platforms.

---

## **9. Risks & Mitigations**

1. **Payment Disputes**
    - **Risk**: Complex or frequent disputes could require significant admin intervention.
    - **Mitigation**: Clear dispute policies, well-documented chat logs, potential partial escrow.
2. **Scalability**
    - **Risk**: Rapid growth might strain the single-server architecture.
    - **Mitigation**: Containerization, load balancing, or microservice decomposition as traffic increases.
3. **User Trust & Safety**
    - **Risk**: Low trust if ID verification or background checks are absent.
    - **Mitigation**: Provide optional verification or manual checks. Emphasize reviews and dispute resolution.
4. **Legal & Regulatory**
    - **Risk**: Various local regulations for gig-economy platforms (insurance, taxation).
    - **Mitigation**: Consult local legal advice, disclaimers, compliance with GDPR or other data laws.

---

## **10. Conclusion**

Neighbor4Hire aims to offer a user-friendly marketplace to connect people needing local services with qualified providers. This design document outlines the system’s architecture, key modules, data models, and roadmap. By following these guidelines and iterating based on real-world feedback, the project can evolve into a robust, scalable platform.

**End of Document**

---