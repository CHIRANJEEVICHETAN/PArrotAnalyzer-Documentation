import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | Parrot Analyzer Docs',
  description: 'Detailed overview of Parrot Analyzer features',
}

export default function Features() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Parrot Analyzer Features</h1>
      <p className="text-xl mb-4">
        Parrot Analyzer offers a comprehensive set of features designed to streamline employee management and operations. Here's a detailed look at each core feature:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Geofencing and Tracking</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Real-time monitoring of employee movements within geofenced areas</li>
        <li>Alerts for entering or leaving designated zones</li>
        <li>Customizable geofence creation for different work sites or areas</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Shift Management</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Creation and assignment of shifts by Management Personnel</li>
        <li>Employee attendance tracking</li>
        <li>Shift-based access control to features such as expense submission</li>
        <li>Real-time updates on shift changes and assignments</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Expense Management</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Individual and bulk expense submission</li>
        <li>Approval workflows for Group Admins and Management Personnel</li>
        <li>Categorized expense reports for analysis</li>
        <li>Integration with company policies for automatic approval of within-policy expenses</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Company and User Hierarchy Management</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">Workflow:</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Super Admin:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Creates companies</li>
            <li>Assigns one Management Personnel per company</li>
            <li>Manages companies with options to view, filter, search, temporarily disable, or permanently delete companies and users</li>
          </ul>
        </li>
        <li><strong>Management Personnel:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Creates and manages one or more Group Admins</li>
            <li>Oversees shift assignments and expense approvals</li>
          </ul>
        </li>
        <li><strong>Group Admin:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Creates and manages employees individually or via bulk CSV upload</li>
            <li>Assigns shifts and manages permissions for expense submission</li>
          </ul>
        </li>
        <li><strong>Employee:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Submits expenses</li>
            <li>Logs attendance and complies with geofencing requirements</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Access Control</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Role-Based Access Control (RBAC) ensures secure and hierarchical data access</li>
        <li>Granular permissions system for different user roles</li>
        <li>Audit logs for all access and changes within the system</li>
      </ul>

      <p className="mt-4">
        For more detailed information about how to use these features, please refer to the specific documentation sections for each component.
      </p>
    </main>
  )
}

