import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Stack | Parrot Analyzer Docs',
  description: 'Overview of the technologies used in Parrot Analyzer',
}

export default function TechnicalStack() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Technical Stack</h1>
      <p className="text-xl mb-4">
        Parrot Analyzer uses a modern tech stack to ensure high performance, scalability, and maintainability. Here's an overview of the key technologies used in the project:
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Frontend</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Framework:</strong> React Native with Expo</li>
        <li><strong>Styling:</strong> NativeWind and React Native Styles for responsive design</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Backend</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Server:</strong> Node.js with Express</li>
        <li><strong>WebSockets:</strong> For real-time updates</li>
        <li><strong>API Development:</strong> RESTful APIs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Database Management</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>PostgreSQL (Neon):</strong> For storing user accounts, group management, and expense reports</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Deployment</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Azure:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Backend server hosting</li>
            <li>WebSockets</li>
            <li>PostgreSQL database management</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Additional Tools</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Version Control:</strong> Git and GitHub</li>
        <li><strong>Testing:</strong> Jest and React Testing Library for frontend; Mocha and Chai for backend</li>
        <li><strong>Development Environment:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Visual Studio Code</li>
            <li>Postman for API testing</li>
            <li>pgAdmin for database management</li>
          </ul>
        </li>
      </ul>

      <p className="mt-4">
        For more detailed information about how these technologies are used in the project, please refer to the specific documentation sections for each component.
      </p>
    </main>
  )
}

