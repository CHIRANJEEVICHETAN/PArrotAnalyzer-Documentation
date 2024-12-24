import { Metadata } from 'next'
import { CodeBlock } from '@/components/code-block'

export const metadata: Metadata = {
  title: 'Getting Started | Parrot Analyzer Docs',
  description: 'Learn how to set up and start using Parrot Analyzer',
}

export default function GettingStarted() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Getting Started with Parrot Analyzer</h1>
      <p className="text-xl">
        This guide will help you set up your development environment and get started with the Parrot Analyzer project.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Node.js (v14 or later)</li>
          <li>npm or yarn package manager</li>
          <li>Expo CLI</li>
          <li>PostgreSQL database</li>
          <li>Azure account (for deployment)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Setting Up the Development Environment</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">1. Clone the Repository</h3>
        <CodeBlock language="bash">
{`git clone https://github.com/your-org/parrot-analyzer.git
cd parrot-analyzer`}
        </CodeBlock>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Install Dependencies</h3>
        <CodeBlock language="bash">
{`npm install`}
        </CodeBlock>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Set Up Environment Variables</h3>
        <p className="mb-4">
          Create a <code>.env</code> file in the root directory and add the following variables:
        </p>
        <CodeBlock language="bash">
{`DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
EXPO_PUBLIC_API_URL=http://localhost:3000/api`}
        </CodeBlock>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Start the Development Server</h3>
        <CodeBlock language="bash">
{`npm run dev`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="mb-4">
          Now that you have set up your development environment, you can start exploring the project structure and implementing new features. Be sure to check out the following sections for more detailed information:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Project Structure</li>
          <li>Database Schema</li>
          <li>API Endpoints</li>
          <li>Testing Guidelines</li>
        </ul>
      </section>

      <p className="mt-8">
        For more detailed information about specific components and their usage, please refer to the Features section.
      </p>
    </div>
  )
}

