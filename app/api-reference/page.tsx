import { Metadata } from 'next'
import { CodeBlock } from '@/components/code-block'

export const metadata: Metadata = {
  title: 'API Reference | Parrot Analyzer Docs',
  description: 'Detailed API reference for Parrot Analyzer',
}

export default function ApiReference() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">API Reference</h1>
      <p className="text-xl mb-4">
        This section provides a detailed reference for the API endpoints of Parrot Analyzer. All endpoints are prefixed with <code>/api</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Authentication</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">POST /auth/login</h3>
      <p className="mb-4">Authenticates a user and returns a JWT token.</p>
      <CodeBlock language="json">
{`POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}`}
      </CodeBlock>

      <h3 className="text-xl font-semibold mt-6 mb-2">POST /auth/logout</h3>
      <p className="mb-4">Logs out the current user.</p>
      <CodeBlock language="bash">
{`POST /api/auth/logout
Authorization: Bearer <token>`}
      </CodeBlock>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Company Management</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">GET /companies</h3>
      <p className="mb-4">Fetches all companies (Super Admin only).</p>
      <CodeBlock language="bash">
{`GET /api/companies
Authorization: Bearer <token>`}
      </CodeBlock>

      <h3 className="text-xl font-semibold mt-6 mb-2">POST /companies</h3>
      <p className="mb-4">Adds a new company (Super Admin only).</p>
      <CodeBlock language="json">
{`POST /api/companies
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "ACME Corp",
  "address": "123 Main St, City, Country"
}`}
      </CodeBlock>

      <h2 className="text-2xl font-semibold mt-8 mb-4">User Management</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">GET /users</h3>
      <p className="mb-4">Fetches all users (filtered by role and company).</p>
      <CodeBlock language="bash">
{`GET /api/users
Authorization: Bearer <token>`}
      </CodeBlock>

      <h3 className="text-xl font-semibold mt-6 mb-2">POST /users</h3>
      <p className="mb-4">Adds a new user.</p>
      <CodeBlock language="json">
{`POST /api/users
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Employee",
  "companyId": 1
}`}
      </CodeBlock>

      <p className="mt-4">
        For more detailed information about request and response formats, error handling, and authentication requirements, please refer to our API documentation.
      </p>
    </div>
  )
}

