import { api } from '@/convex/_generated/api';
import { useConvexQuery } from '@/hooks/use-convex-query';
import { useQuery } from 'convex/react';
import React from 'react';

function Dashboard() {
  const { data, error, isLoading } = useConvexQuery(api.projects.getUserProjects);

  console.log('#### __  data', data, error, isLoading)

  return <div>Dashboard</div>;
}

export default Dashboard;
