import { useEffect } from 'react';
import { useUserDetailStore } from '@stores/userDetail'
import { useParams } from 'react-router-dom';

export const UserDetail: React.FC = () => {
  const { userDetail, isUserDetailLoading, updateUserDetailFromApi } = useUserDetailStore();
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      updateUserDetailFromApi(Number(id));
    }
  }, []);

  return (
    <div>
      User detail
      {isUserDetailLoading && (
        <div>Loading...</div>
      )}

      {!isUserDetailLoading && userDetail && (
        <div>
          <div>ID: {userDetail.id}</div>
          <div>Display name: {userDetail.displayName}</div>
          <div>Email: {userDetail.email}</div>
          <div>Status: {userDetail.status}</div>
          <div>Type: {userDetail.type}</div>
          <div>Created at: {userDetail.createdAt}</div>
          <div>Updated at: {userDetail.updatedAt}</div>
        </div>
      )}
    </div>
  )
}