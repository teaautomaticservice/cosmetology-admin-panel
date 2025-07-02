import { useEffect } from 'react';
import { HeadingContainer } from '@components/ui/headingContainer/HeadingContainer';
import { useModalStore } from '@stores/modal';
import { useUserDetailStore } from '@stores/userDetail'
import { MODALS_TYPE } from '@typings/modals';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';

export const UserDetail: React.FC = () => {
  const { userDetail, isUserDetailLoading, updateUserDetailFromApi } = useUserDetailStore();
  const { id } = useParams()
  const { open } = useModalStore();

  const openActionsModal = () => {
    open(MODALS_TYPE.USER_ACTIONS);
  };

  useEffect(() => {
    if (id) {
      updateUserDetailFromApi(Number(id));
    }
  }, []);

  return (
    <div>
      <h2>User detail</h2>

      {isUserDetailLoading && (
        <div>Loading...</div>
      )}

      {!isUserDetailLoading && userDetail && (
        <div>
          <HeadingContainer>
            <Button type="primary" onClick={openActionsModal}>User actions</Button>
          </HeadingContainer>

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