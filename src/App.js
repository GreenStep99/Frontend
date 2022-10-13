import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin/Admin";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import Login from "./Pages/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Upload from "./Pages/Mission/Upload/Upload";
import Explain from "./Pages/Mission/Explain/Explain";
import Feed from "./Pages/Feed/Feed";
import Mypage from "./Pages/MyPage/MyPage/MyPage";
import ViewMoreModal from "./Pages/MyPage/MyPage/ViewMoreModal/ViewMoreModal";
import UpdateMyPage from "./Pages/MyPage/UpdateMyPage/UpdateMyPage";
import Archive from "./Pages/MyPage/MyPage/Archive/Archive";
import PhotoShotsArchive from "./Pages/MyPage/PhotoShotsArchive/PhotoShotsArchive";
import DetailPosts from "./Pages/MyPage/DetailPosts/DetailPosts";
import DetailPhotoShots from "./Pages/MyPage/DetailPhotoShots/DetailPhotoShots";
import Modal from "./Pages/Login/Modal";
import MissionCamera from "./Pages/Mission/Camera/MissionCamera";
import Loading from "./Pages/Loading/Loading";
import Error from "./Pages/Error/Error";
import ExplainWaiting from "./Pages/Mission/Explain/ExplainWaiting";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
import useToast from "./hooks/useToast";
import Toast from "./Components/Toast/Toast";
import Secession from "./Pages/Secession/Secession";
import Alarm from "./Pages/Alarm/Alarm";
import AlarmList from "./Pages/Alarm/AlarmList/AlarmList";
import UpdateLoading from "./Pages/Loading/UpdateLoading";
import Introduce from "./Pages/MyPage/MyPage/Introduce/Introduce";
import RouteChangeTracker from "./RouteChangeTracker";
import Notice from "./Pages/Mission/Notice";

function App() {
  const queryClient = new QueryClient();
  const [toastNum, onClickToast, display, setDisplay, text] = useToast(0);

  useEffect(() => {
    if (display > 0) {
      setTimeout(() => {
        setDisplay(0);
      }, 4000);
    }
  }, [display]);
  return (
    <>
      <BrowserRouter>
        <RouteChangeTracker />
        <ScrollToTop />
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/users/kakao/callback" element={<Loading />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route
              path="/modal"
              element={<Modal onClickToast={onClickToast} />}
            />
            <Route
              path="/mission"
              element={<Mission onClickToast={onClickToast} />}
            />
            <Route path="/missioncamera" element={<MissionCamera />} />
            <Route
              path="/missioncamera/:id"
              element={<MissionCamera onClickToast={onClickToast} />}
            />
            <Route path="/upload" element={<Upload />} />
            <Route path="/updateloading" element={<UpdateLoading />} />
            <Route
              path="/explainwaiting/:id"
              element={<ExplainWaiting onClickToast={onClickToast} />}
            />
            <Route
              path="/upload/:id"
              element={<Upload onClickToast={onClickToast} />}
            />
            <Route path="/explain" element={<Explain />} />
            <Route path="/explain/:id" element={<Explain />} />
            <Route
              path="/mypage"
              element={<Mypage onClickToast={onClickToast} />}
            />
            <Route path="/viewmoremodal" element={<ViewMoreModal />} />
            <Route
              path="/archive"
              element={<Archive onClickToast={onClickToast} />}
            />
            <Route
              path="/updatemypage"
              element={<UpdateMyPage onClickToast={onClickToast} />}
            />
            <Route path="/archive/:id" element={<Archive />} />
            <Route path="/photoshotsarchive" element={<PhotoShotsArchive />} />
            <Route path="/detailposts" element={<DetailPosts />} />
            <Route
              path="/detailposts/:id"
              element={<DetailPosts onClickToast={onClickToast} />}
            />
            <Route path="/detailphotoshots" element={<DetailPhotoShots />} />
            <Route path="/feed" element={<Feed />} />
            <Route
              path="/secession"
              element={<Secession onClickToast={onClickToast} />}
            />
            <Route path="introduce" element={<Introduce />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route
              path="/alarmlist"
              element={<AlarmList onClickToast={onClickToast} />}
            />
            <Route path="*" element={<Error />} />
            <Route path="/Notice" element={<Notice />} />
          </Routes>
        </QueryClientProvider>
        {display > 0 ? <Toast text={text} toastNum={toastNum} /> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
