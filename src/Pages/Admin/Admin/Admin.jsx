//react import
import React, { useEffect, useState, useMemo } from 'react';
import instance from '../../../Redux/modules/instance';
//styled import
import {
  AdminArea,
  SubmitCard,
  SubmitPhoto,
  TextareaArea,
  Textarea,
  Button,
  ButtonArea,
} from './AdminStyled';
const Admin = () => {
  const [feedList, setFeedList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    instance
      .get('/admin/verification')
      .then((res) => setFeedList(res.data.data));
    setLoading(false);
  }, []);
  const Verify = (id) => {
<<<<<<< HEAD
    instance.post(`/admin/verification/${id}?verification=DONE`);
=======
    instance
      .post(`/admin/verification/${id}?verification=DONE`)
      .then((res) => console.log(res));
>>>>>>> 5ff7ac6d9a6b0893f96d557804928ed916dbdc87
    setFeedList(
      feedList.filter((it) => {
        return it.id != id;
      })
    );
  };
  const Reject = (id) => {
    instance.post(`/admin/verification/${id}?verification=REJECTED`);
    setFeedList(
      feedList.filter((it) => {
        return it.id != id;
      })
    );
  };
  console.log(feedList);
  return (
    <>
      {!loading ? (
        feedList.map((item) =>
          item.status == 'WAITING' ? (
            <AdminArea key={item.missionImgUrl}>
              <SubmitCard>
                <SubmitPhoto src={item.missionImgUrl} />
                <TextareaArea>
                  <Textarea placeholder="거절사유" />
                </TextareaArea>
                <ButtonArea>
                  <Button onClick={() => Verify(item.id)}>승인</Button>
                  <Button color={'pink'} onClick={() => Reject(item.id)}>
                    거절
                  </Button>
                </ButtonArea>
              </SubmitCard>
            </AdminArea>
          ) : null
        )
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
};

export default Admin;
