import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introduction | Parrot Analyzer Docs',
  description: 'Welcome to the Parrot Analyzer documentation site',
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Parrot Analyzer Docs</h1>
      <p className="mb-4">
        Parrot Analyzer is a mobile application designed to streamline employee geofencing, real-time tracking, shift management, and expense reporting. This documentation site provides comprehensive information about the project's features, technical stack, and implementation details.
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Core Features</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Employee Geofencing</li>
        <li>Shift Management</li>
        <li>Expense Reporting</li>
        <li>Company and User Management</li>
        <li>Access Control</li>
      </ul>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Technical Stack</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Frontend: React Native with Expo</li>
        <li>Backend: Node.js with Express</li>
        <li>Database: PostgreSQL (Neon)</li>
        <li>Deployment: Azure</li>
      </ul>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Started</h2>
      <p className="mb-4">
        To get started with our documentation, please navigate through the
        sections using the sidebar on the left. Here's a quick overview of the
        available sections:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>Project Overview</strong>: Learn about the project's goals and main features
        </li>
        <li>
          <strong>Technical Stack</strong>: Explore the technologies used in the project
        </li>
        <li>
          <strong>Features</strong>: Detailed information about each core feature
        </li>
        <li>
          <strong>API Reference</strong>: Comprehensive guide to the project's API endpoints
        </li>
        <li>
          <strong>Deployment</strong>: Instructions for deploying the Parrot Analyzer application
        </li>
      </ul>
      <p className="mb-4">
        If you have any questions or need further assistance, don't hesitate to reach out to our support team.
      </p>
    </main>
  )
}

