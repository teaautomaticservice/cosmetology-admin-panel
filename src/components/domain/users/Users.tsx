import { useEffect } from 'react';
import { useUsersStore } from '@stores/users'

export const Users: React.FC = () => {
  const { updateUsersFromApi } = useUsersStore();

  useEffect(() => {
    updateUsersFromApi()
  }, [])
  return (
    <h1>Users</h1>
  )
}