import GlobalStyles from 'styles/global';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import OnAppLoad from 'components/OnAppLoad';
import SigningModal from 'components/SigningModal';

import AppLayout from 'components/AppLayout';

import Home from 'pages/Home';
import PostDetailPage from 'pages/PostDetail';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <OnAppLoad />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='post/:postId' element={<PostDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <SigningModal />
    </RecoilRoot>
  </ThemeProvider>
);
