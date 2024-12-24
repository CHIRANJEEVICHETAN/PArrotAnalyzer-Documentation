import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deployment | Parrot Analyzer Docs',
  description: 'Learn how to deploy the Parrot Analyzer application',
}

export default function Deployment() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Deploying Parrot Analyzer</h1>
      <p className="text-xl mb-4">
        This guide will walk you through the process of deploying the Parrot Analyzer application to Azure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
      <ul className="list-disc list-inside mb-4">
        <li>An Azure account</li>
        <li>Azure CLI installed on your local machine</li>
        <li>Your Parrot Analyzer application code ready for deployment</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Deployment Steps</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">1. Configure PostgreSQL database on Azure</h3>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li>Log in to the Azure portal</li>
        <li>Create a new Azure Database for PostgreSQL server</li>
        <li>Configure firewall rules to allow your application to access the database</li>
        <li>Note down the connection string for later use</li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Deploy the backend server on Azure App Service</h3>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li>Create a new App Service in the Azure portal</li>
        <li>Configure environment variables, including the database connection string</li>
        <li>Deploy your backend code to the App Service using Azure CLI or GitHub Actions</li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Set up WebSockets on Azure</h3>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li>Enable WebSockets in your App Service configuration</li>
        <li>Update your client-side code to connect to the WebSocket endpoint</li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Deploy the mobile application</h3>
      <ol className="list-decimal list-inside mb-4 ml-4">
        <li>Build your React Native application for production</li>
        <li>Submit the iOS app to the Apple App Store</li>
        <li>Submit the Android app to the Google Play Store</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Post-Deployment Steps</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Monitor your application's performance using Azure Application Insights</li>
        <li>Set up alerts for any critical issues or performance thresholds</li>
        <li>Regularly update your application and database to ensure security and optimal performance</li>
      </ul>

      <p className="mt-4">
        For more detailed information about deploying specific components or troubleshooting deployment issues, please refer to the Azure documentation or contact our support team.
      </p>
    </main>
  )
}

