import { api } from '@/convex/_generated/api';

export async function generateMetadata({ params }) {
  const projectId = params.project_id;

  // In a real app, you would fetch the project title from your database
  // For now, we'll use a placeholder or fetch it if possible
  let projectTitle = 'Editor';

  return {
    title: `X-Photo Editor | ${projectTitle}`,
  };
}

export default function EditorLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}